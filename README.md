# Healthonomic Primary Care — static site
Static prerendered site (65 pages) + client-side re-render for interactivity/responsive layout.
- `_redirects` — Netlify 301s (old WP paths preserved; blog posts live at root slugs)
- `sitemap.xml`, `robots.txt` — submit sitemap in Search Console after cutover
- `fetch-missing-assets.sh` — run once BEFORE cutover to pull 34 remaining images/PDFs from the live WP site into assets/uploads/
- Do not hand-edit files under assets/js/ — regenerate instead.
