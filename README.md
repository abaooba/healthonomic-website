# Healthonomic Primary Care — static site
Static prerendered site (65 pages) + client-side re-render.
- `_redirects` — Netlify 301s
- `sitemap.xml`, `robots.txt`
- `fetch-missing-assets.sh` — run once before cutover

## Blog posts
New posts are added by the n8n **Blog Publisher** workflow, which opens one PR per post. Each PR:
- inserts a card right after the single `var POSTS = [` in `assets/js/blog-catalogue.js`
- inserts `` B['<slug>'] = { image, body: `...` }; `` directly above the single `/*__APPEND__*/` marker in `assets/js/blog-bodies.js` (bodies use the style constants at the top of that file: `${CTA}`, `${SRC}`, `${DISC}`, `${INFO}`, `${WARN}`, `${EMRG}`)
- adds `<slug>/index.html` (cloned from the newest post page, article inside `<div class="ho-article">`), `assets/uploads/<slug>.jpg`, two `/blog/<slug>` 301s in `_redirects`, and a `<loc>` in `sitemap.xml`

The pipeline depends on these markers and names. Do not rename, move or duplicate `var POSTS = [`, `/*__APPEND__*/`, `HO_BLOG_POSTS` / `HO_BLOG_BODIES`, the style constants, or the `ho-article` container.

The `blog-integrity` GitHub Action (`node scripts/check-blog.mjs`) runs on every PR and on pushes to main and fails if any of these conventions break, or if a post's canonical, sitemap entry, redirect, images or internal links are wrong. Run it locally before merging hand edits.

If the site is ever regenerated from the original export tool, the auto-added posts (catalogue cards, bodies, post pages, images, redirects, sitemap entries) exist only in this repo and must be carried over, or they will be lost.
