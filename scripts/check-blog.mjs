#!/usr/bin/env node
// Blog integrity check. Guards the conventions the n8n Blog Publisher relies on
// (see README "Blog posts"). Dependency-free; run from anywhere: node scripts/check-blog.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://healthonomic.com';
const CATALOGUE = 'assets/js/blog-catalogue.js';
const BODIES = 'assets/js/blog-bodies.js';

// Pre-existing problems in old posts, reported as warnings instead of failing.
// Each entry must match a reported problem exactly; remove it once fixed.
const KNOWN_ISSUES = new Set([
  // Medical weight loss lives at /weight-loss/, not under /service/.
  'assets/js/blog-bodies.js [obesity-in-america-a-growing-concern]: internal link #/service/weight-loss does not resolve (no service/weight-loss/index.html)',
]);

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const isFile = (rel) => { try { return fs.statSync(path.join(ROOT, rel)).isFile(); } catch { return false; } };
const count = (s, needle) => s.split(needle).length - 1;

// Map a site URL path ("/foo/", "/assets/x.jpg") to the repo file that serves it.
function fileForPath(p) {
  p = decodeURIComponent(p.split(/[?#]/)[0]);
  if (p === '' || p === '/') return 'index.html';
  const rel = p.replace(/^\/+/, '');
  return /\.[a-z0-9]+$/i.test(rel) ? rel : rel.replace(/\/?$/, '/index.html');
}

// Map an absolute healthonomic.com URL or a root-relative path to a repo file; null if off-site.
function fileForUrl(u) {
  if (u.startsWith(SITE + '/') || u === SITE) return fileForPath(u.slice(SITE.length) || '/');
  if (u.startsWith('/') && !u.startsWith('//')) return fileForPath(u);
  return null;
}

// --- 1. Both data files run in a sandbox and expose their globals -------------
function runInSandbox(rel, globalName) {
  const src = read(rel);
  const win = { dispatchEvent() {}, addEventListener() {} };
  class StubEvent { constructor(type) { this.type = type; } }
  try {
    new Function('window', 'Event', src)(win, StubEvent);
  } catch (e) {
    fail(rel, `throws when executed: ${e && e.message}`);
    return { src, value: undefined };
  }
  if (win[globalName] == null) fail(rel, `does not set window.${globalName}`);
  return { src, value: win[globalName] };
}

const cat = runInSandbox(CATALOGUE, 'HO_BLOG_POSTS');
const bod = runInSandbox(BODIES, 'HO_BLOG_BODIES');
const posts = Array.isArray(cat.value) ? cat.value : [];
const bodies = bod.value && typeof bod.value === 'object' ? bod.value : {};
if (cat.value != null && !Array.isArray(cat.value)) fail(CATALOGUE, 'window.HO_BLOG_POSTS is not an array');

// --- 2. Pipeline insertion markers -------------------------------------------
const nPosts = count(cat.src, 'var POSTS = [');
if (nPosts !== 1) fail(CATALOGUE, `expected exactly one "var POSTS = [" (found ${nPosts})`);
const nAppend = count(bod.src, '/*__APPEND__*/');
if (nAppend !== 1) fail(BODIES, `expected exactly one "/*__APPEND__*/" marker (found ${nAppend})`);

// --- 3. Catalogue slugs are unique and well-formed ----------------------------
const seen = new Set();
for (const [i, p] of posts.entries()) {
  if (!p || typeof p.slug !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(p.slug)) {
    fail(CATALOGUE, `post #${i} has a missing or malformed slug (${JSON.stringify(p && p.slug)})`);
    continue;
  }
  if (seen.has(p.slug)) fail(CATALOGUE, `duplicate slug "${p.slug}"`);
  seen.add(p.slug);
}
const slugs = [...seen];

// --- 4. Post pages: canonical, sitemap, redirects, social/JSON-LD images -----
const sitemap = read('sitemap.xml');
const redirects = read('_redirects').split('\n')
  .map((l) => l.trim()).filter((l) => l && !l.startsWith('#'))
  .map((l) => l.split(/\s+/));

function jsonLdImages(node, out = []) {
  if (Array.isArray(node)) { node.forEach((n) => jsonLdImages(n, out)); return out; }
  if (!node || typeof node !== 'object') return out;
  if ('image' in node) {
    for (const img of [].concat(node.image)) {
      if (typeof img === 'string') out.push(img);
      else if (img && typeof img.url === 'string') out.push(img.url);
    }
  }
  if (node['@graph']) jsonLdImages(node['@graph'], out);
  return out;
}

function checkImageUrl(where, label, url) {
  const file = fileForUrl(url);
  if (!file) return fail(where, `${label} is not a healthonomic.com URL: ${url}`);
  if (!isFile(file)) fail(where, `${label} points to a missing file: ${url} (expected ${file})`);
}

for (const slug of slugs) {
  const page = `${slug}/index.html`;
  if (!isFile(page)) continue;
  const html = read(page);
  const url = `${SITE}/${slug}/`;

  const canon = /<link\s+rel="canonical"\s+href="([^"]*)"/i.exec(html);
  if (!canon) fail(page, 'has no <link rel="canonical">');
  else if (canon[1] !== url) fail(page, `canonical is ${canon[1]}, expected ${url}`);

  if (!sitemap.includes(`<loc>${url}</loc>`)) fail('sitemap.xml', `missing <loc>${url}</loc>`);

  const from = `/blog/${slug}/`;
  const rule = redirects.find((t) => t[0] === from);
  if (!rule) fail('_redirects', `missing 301 for ${from}`);
  else if (!(rule[2] || '').startsWith('301') || ![`/${slug}/`, url].includes(rule[1])) {
    fail('_redirects', `rule for ${from} should be "${from} /${slug}/ 301", found "${rule.join(' ')}"`);
  }

  const og = /<meta\s+property="og:image"\s+content="([^"]*)"/i.exec(html);
  if (!og) fail(page, 'has no og:image');
  else checkImageUrl(page, 'og:image', og[1]);

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  let ldImages = [];
  for (const [, json] of ldBlocks) {
    try { jsonLdImages(JSON.parse(json), ldImages); }
    catch (e) { fail(page, `JSON-LD does not parse: ${e.message}`); }
  }
  if (ldBlocks.length && !ldImages.length) fail(page, 'JSON-LD has no "image"');
  for (const img of ldImages) checkImageUrl(page, 'JSON-LD image', img);

  if (bodies[slug] && !/<div[^>]*class="ho-article"/.test(html)) {
    fail(page, 'has a body but no <div class="ho-article"> container');
  }
}

// --- 5. Bodies: placeholders resolved, images exist, internal links resolve --
const postSlugs = new Set(slugs);
function fileForHashRoute(href) {
  let r = href.slice(2).split('?')[0].replace(/\/$/, '');
  if (r === '' || r === 'home') return 'index.html';
  if (r.startsWith('blog/') && postSlugs.has(r.slice(5))) return `${r.slice(5)}/index.html`;
  return `${r}/index.html`;
}

for (const [slug, entry] of Object.entries(bodies)) {
  const where = `${BODIES} [${slug}]`;
  if (Array.isArray(cat.value) && !postSlugs.has(slug)) fail(where, 'has a body but no catalogue entry');
  if (!entry || typeof entry !== 'object') { fail(where, 'is not an object'); continue; }
  const body = entry.body;
  if (typeof body !== 'string') { fail(where, 'body is not a string'); continue; }

  const unresolved = body.match(/\$\{[^}]*\}/g);
  if (unresolved) fail(where, `unresolved placeholder(s): ${[...new Set(unresolved)].join(', ')}`);

  if (entry.image != null) {
    const img = String(entry.image);
    const file = fileForUrl(img);
    if (!file || !file.startsWith('assets/')) fail(where, `image is not under /assets/: ${img}`);
    else if (!isFile(file)) fail(where, `image file missing: ${img}`);
  }

  for (const [, href] of body.matchAll(/href="([^"]*)"/g)) {
    let file = null;
    if (href.startsWith('#/')) file = fileForHashRoute(href);
    else if (href.startsWith('/') || href.startsWith(SITE)) file = fileForUrl(href);
    if (file && !isFile(file)) fail(where, `internal link ${href} does not resolve (no ${file})`);
  }
}

// Catalogue images, if the catalogue ever carries one.
for (const p of posts) {
  if (p && p.image != null) {
    const file = fileForUrl(String(p.image));
    if (!file || !isFile(file)) fail(`${CATALOGUE} [${p.slug}]`, `image file missing: ${p.image}`);
  }
}

// --- Report -------------------------------------------------------------------
const known = errors.filter((e) => KNOWN_ISSUES.has(e));
errors.splice(0, errors.length, ...errors.filter((e) => !KNOWN_ISSUES.has(e)));
for (const e of known) console.warn(`  ! known issue (not failing): ${e}`);
for (const k of KNOWN_ISSUES) {
  if (!known.includes(k)) console.warn(`  ! known issue no longer occurs, remove it from KNOWN_ISSUES: ${k}`);
}
if (errors.length) {
  console.error(`blog-integrity: ${errors.length} problem(s) found\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error('\nSee README.md "Blog posts" for the conventions these checks protect.');
  process.exit(1);
}
const pages = slugs.filter((s) => isFile(`${s}/index.html`)).length;
console.log(`blog-integrity: OK — ${posts.length} catalogue posts, ${Object.keys(bodies).length} bodies, ${pages} post pages checked.`);
