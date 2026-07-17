/* Healthonomic Primary Care — site knowledge base + retriever.
 *
 * This is the heart of the "no-hallucination" chatbot. It turns the website's
 * own content (services, locations, hours, insurance, and every blog article)
 * into a searchable knowledge base, and retrieves only the passages relevant to
 * a visitor's question. Those passages — and nothing else — are handed to the
 * language model, which is instructed to answer ONLY from them.
 *
 * Nothing here calls the network or the model. It is pure text in / passages out,
 * so it runs instantly in the browser and stays in sync with the site because it
 * reads the same data the pages render from.
 *
 * Exposes window.HO_KB = { build, retrieve, formatContext, stripHtml }.
 */
(function () {
  'use strict';

  // ---- text helpers -------------------------------------------------------
  var ENTITIES = {
    '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"',
    '&rsquo;': '\u2019', '&lsquo;': '\u2018', '&ldquo;': '\u201C', '&rdquo;': '\u201D',
    '&ndash;': '\u2013', '&mdash;': '\u2014', '&hellip;': '\u2026', '&rarr;': '\u2192',
    '&larr;': '\u2190', '&deg;': '\u00B0', '&times;': '\u00D7', '&#39;': "'", '&apos;': "'"
  };
  function decode(s) {
    return s.replace(/&[a-z#0-9]+;/gi, function (m) {
      if (ENTITIES[m]) return ENTITIES[m];
      var num = m.match(/^&#(\d+);$/);
      if (num) { try { return String.fromCharCode(+num[1]); } catch (e) {} }
      return ' ';
    });
  }
  // Convert an HTML fragment to clean plain text, keeping block boundaries as
  // newlines so we can later split long articles into sensible chunks.
  function stripHtml(html) {
    if (!html) return '';
    var t = String(html)
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<\/(p|div|li|h[1-6]|ul|ol|tr|table|section|blockquote|br)\s*>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, ' ');
    return decode(t).replace(/[ \t\f\v]+/g, ' ').replace(/\n[ \t]*/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  }
  function clean(s) { return decode(String(s || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim(); }

  // ---- tokenizer ----------------------------------------------------------
  var STOP = {};
  ('a an the of to in on at for and or but with without is are was were be been being do does did ' +
   'this that these those it its as by from about into over under not no if then else so than too very ' +
   'i you your we our us they them he she his her my me can could will would should may might must have ' +
   'has had what which who whom when where why how there here all any some more most other such only own ' +
   'up out off down again once also just').split(' ').forEach(function (w) { STOP[w] = 1; });

  function stem(w) {
    if (w.length <= 3) return w;
    return w.replace(/(ingly|edly|ing|ed|ly|ies|es|s)$/, function (m) {
      return (w.length - m.length) >= 3 ? '' : m;
    });
  }
  function tokenize(s) {
    var out = [], raw = String(s || '').toLowerCase().match(/[a-z0-9]+/g) || [];
    for (var i = 0; i < raw.length; i++) {
      var w = raw[i];
      if (w.length < 2 || STOP[w]) continue;
      out.push(stem(w));
    }
    return out;
  }

  // Front-desk synonyms so a visitor's wording reaches the right passage.
  var ALIAS = {
    hour: 'open close time when schedule day', open: 'hour time when close',
    close: 'hour open time when', time: 'hour open when schedule',
    cost: 'price pay payment fee insurance afford', price: 'cost fee pay insurance',
    pay: 'cost price insurance payment bill', insurance: 'accept coverage plan medicare medicaid carrier',
    appointment: 'book schedule booking visit same day reserve', book: 'appointment schedule booking reserve visit',
    schedule: 'appointment book booking visit', address: 'location where directions map office street',
    location: 'address where office directions branch clinic', where: 'location address directions office',
    direction: 'location address map drive route', phone: 'call number contact telephone reach',
    call: 'phone number contact telephone', contact: 'phone call email address reach',
    doctor: 'provider physician staff clinician practitioner lentzou', provider: 'doctor physician staff clinician',
    physician: 'doctor provider staff', weight: 'loss semaglutide ozempic medication slim',
    portal: 'login account livewell mychart record', emergency: 'urgent 911 ambulance immediate',
    kid: 'child children pediatric family', child: 'children pediatric kid family',
    telehealth: 'evisit virtual video online remote', evisit: 'telehealth virtual video online remote',
    covid: 'coronavirus testing rapid test vaccine', form: 'paperwork document download patient',
    walkin: 'same day urgent appointment'
  };
  function expand(qTokens) {
    var bag = qTokens.slice();
    qTokens.forEach(function (t) { if (ALIAS[t]) bag = bag.concat(tokenize(ALIAS[t])); });
    return bag;
  }

  // ---- chunking -----------------------------------------------------------
  // Split long article text into ~700-char chunks on paragraph boundaries so a
  // retrieved passage is focused, not a whole 1,500-word post.
  function chunk(text, max) {
    max = max || 750;
    var paras = text.split(/\n{1,}/).map(function (p) { return p.trim(); }).filter(Boolean);
    var chunks = [], cur = '';
    paras.forEach(function (p) {
      if ((cur + ' ' + p).length > max && cur) { chunks.push(cur.trim()); cur = ''; }
      if (p.length > max * 1.6) { // very long paragraph: hard-split by sentence
        var sents = p.match(/[^.!?]+[.!?]*/g) || [p];
        sents.forEach(function (s) {
          if ((cur + ' ' + s).length > max && cur) { chunks.push(cur.trim()); cur = ''; }
          cur += ' ' + s;
        });
      } else {
        cur += ' ' + p;
      }
    });
    if (cur.trim()) chunks.push(cur.trim());
    return chunks.length ? chunks : [text];
  }

  // ---- build the knowledge base ------------------------------------------
  // data = { phones, services, locations, insurances, posts, bodies }
  function build(data) {
    data = data || {};
    var docs = [];
    function add(id, title, route, text) {
      text = clean(text);
      if (text) docs.push({ id: id, title: title, route: route, text: text });
    }

    var genPhone = (data.phones && data.phones.general) || '708-671-1500';

    // Practice overview
    add('about', 'About Healthonomic Primary Care', '#/about-practice',
      'Healthonomic Primary Care is a primary care, internal and family medicine practice serving the ' +
      'southwest suburbs of Chicago (Cook County), with locations in Orland Park, Palos Heights, and ' +
      'Evergreen Park. The practice offers same-day appointments and accepts most insurance plans. ' +
      'Services include internal medicine, primary care, women\u2019s health, urgent care, disease ' +
      'prevention, chronic disease management, diagnostics, treatment, e-visits (telemedicine), and ' +
      'COVID-19 rapid testing. General phone: ' + genPhone + '. To book an appointment, use the Book ' +
      'Appointment button / patient portal or call the office.');

    // Contact
    add('contact', 'Contact & Appointments', '#/contact',
      'To contact Healthonomic Primary Care or book an appointment, call ' + genPhone + ' or use the ' +
      'patient portal / Book Appointment button on the website. Same-day appointments are available. ' +
      'You can also send a message through the contact form on the Contact page.');

    // Locations (one passage each — addresses, hours, phone)
    (data.locations || []).forEach(function (l) {
      var hours = (l.hours || []).join('; ');
      var parts = [l.name + '.'];
      if (l.address) parts.push('Address: ' + l.address + '.');
      if (hours) parts.push('Hours of operation: ' + hours + '.');
      if (l.phone) parts.push('Phone: ' + l.phone + '.');
      add('loc:' + l.slug, l.name, '#/location/' + l.slug, parts.join(' '));
    });

    // Insurance
    if (data.insurances && data.insurances.length) {
      add('insurance', 'Accepted Insurance', '#/insurance-providers',
        'Healthonomic Primary Care accepts most insurance plans, including Marketplace, employer-based ' +
        'insurance, Tri-care, and Medicare. Accepted insurances include: ' + data.insurances.join(', ') + '.');
    }

    // Services (flatten intro + Q&A + closing for each)
    (data.services || []).forEach(function (s) {
      var bits = [];
      bits.push((s.label || s.h1 || s.slug) + '.');
      if (s.h1 && s.h1 !== s.label) bits.push(s.h1 + '.');
      (s.intro || []).forEach(function (p) { bits.push(p); });
      (s.qa || []).forEach(function (qa) {
        if (qa.q) bits.push(qa.q);
        (qa.a || []).forEach(function (a) { bits.push(a); });
        if (qa.bullets && qa.bullets.length) bits.push(qa.bullets.join(', ') + '.');
      });
      if (s.closing) {
        if (s.closing.title) bits.push(s.closing.title);
        (s.closing.body || []).forEach(function (b) { bits.push(b); });
      }
      var full = clean(bits.join(' '));
      var label = s.label || s.h1 || s.slug;
      var route = '#/service/' + s.slug;
      var cks = chunk(full, 800);
      cks.forEach(function (c, i) {
        add('svc:' + s.slug + ':' + i, label + (cks.length > 1 ? ' (' + (i + 1) + '/' + cks.length + ')' : ''), route, c);
      });
    });

    // Blog articles (full body when available, else excerpt) — chunked
    (data.posts || []).forEach(function (p) {
      var body = data.bodies && data.bodies[p.slug] && data.bodies[p.slug].body;
      var route = '#/blog/' + p.slug;
      var head = p.title + (p.date ? ' (' + p.date + ')' : '') + '. ';
      if (body) {
        var text = stripHtml(body);
        chunk(text, 750).forEach(function (c, i) {
          add('post:' + p.slug + ':' + i, p.title, route, (i === 0 ? head : '') + c);
        });
      } else if (p.excerpt) {
        add('post:' + p.slug, p.title, route, head + clean(p.excerpt));
      }
    });

    // Index for BM25
    var df = {}, N = docs.length, total = 0;
    docs.forEach(function (d) {
      d._tf = {}; d._toks = tokenize(d.title + ' ' + d.title + ' ' + d.text); // title weighted x2
      d._len = d._toks.length; total += d._len;
      var seen = {};
      d._toks.forEach(function (t) {
        d._tf[t] = (d._tf[t] || 0) + 1;
        if (!seen[t]) { df[t] = (df[t] || 0) + 1; seen[t] = 1; }
      });
    });
    return { docs: docs, df: df, N: N, avgdl: N ? total / N : 1, builtAt: Date.now() };
  }

  // ---- retrieve -----------------------------------------------------------
  function retrieve(kb, query, opts) {
    opts = opts || {};
    var k = opts.k || 5, maxPerSource = opts.maxPerSource || 2;
    var budget = opts.budget || 4200, perDoc = opts.perDoc || 950;
    if (!kb || !kb.docs || !kb.docs.length) return [];
    var k1 = 1.5, b = 0.75;
    var q = expand(tokenize(query));
    if (!q.length) return [];
    var qSet = {}; q.forEach(function (t) { qSet[t] = (qSet[t] || 0) + 1; });

    function idf(t) {
      var n = kb.df[t] || 0;
      return Math.log(1 + (kb.N - n + 0.5) / (n + 0.5));
    }
    var scored = kb.docs.map(function (d) {
      var score = 0;
      for (var t in qSet) {
        var f = d._tf[t]; if (!f) continue;
        var denom = f + k1 * (1 - b + b * (d._len / kb.avgdl));
        score += idf(t) * (f * (k1 + 1)) / denom;
      }
      return { d: d, score: score };
    }).filter(function (x) { return x.score > 0; })
      .sort(function (a, b2) { return b2.score - a.score; });

    var out = [], perSrc = {}, used = 0;
    for (var i = 0; i < scored.length && out.length < k; i++) {
      var d = scored[i].d;
      var src = d.id.split(':').slice(0, 2).join(':');
      perSrc[src] = perSrc[src] || 0;
      if (perSrc[src] >= maxPerSource) continue;
      var text = d.text.length > perDoc ? d.text.slice(0, perDoc).replace(/\s+\S*$/, '') + '\u2026' : d.text;
      if (used + text.length > budget && out.length) break;
      perSrc[src]++; used += text.length;
      out.push({ title: d.title, route: d.route, text: text, score: +scored[i].score.toFixed(3) });
    }
    return out;
  }

  // Numbered CONTEXT block handed to the model.
  function formatContext(passages) {
    return passages.map(function (p, i) {
      return '[' + (i + 1) + '] ' + p.title + ' \u2014 ' + p.route + '\n' + p.text;
    }).join('\n\n');
  }

  window.HO_KB = { build: build, retrieve: retrieve, formatContext: formatContext, stripHtml: stripHtml };
})();
