# Service page data

Each `<slug>.json` in this folder becomes `/services/<slug>/` via `src/pages/services/[slug].astro`.
Osteopathy (`src/pages/services/osteopathy/`) is the approved reference page and Shockwave Therapy keeps its own template; both are unchanged.
Human-readable copy lives in `content/<slug>.md` in the same shape as `content/osteopathy.md`, ending with a `## Review notes` section.
Types: `types.ts` (`ServicePage`). Strings marked (html) may contain inline `<a href>` and `<strong>` only.

```jsonc
{
  "seo": { "title": "≤ 60 chars | Alpha Sports Medicine", "description": "≤ 155 chars" },
  "breadcrumb": "Physiotherapy",
  "hero": { "eyebrow": "Alpha Sports Medicine · Physiotherapy", "heading": "H1", "subheading": "1–2 sentences" },
  "intro": { "eyebrow": "…", "heading": "…", "paragraphs": ["(html)", "(html)"], "caption": "short caption" },   // image optional; defaults to a clinic photo
  "explainer": { "eyebrow": "Plain-language care", "heading": "What is physiotherapy?", "paragraphs": ["(html)", "…"],
                 "concept": { "icon": "fa-link", "title": "short idea", "copy": "one line" } },            // concept optional
  "benefits": { "eyebrow": "How we work", "heading": "The Alpha physio difference", "intro": "one line",
                "items": [{ "icon": "fa-comments", "title": "…", "copy": "one sentence" }] },               // exactly 6
  "conditions": { "heading": "What physiotherapy may help with", "intro": "one line",
                  "items": [{ "title": "Back pain", "href": "/conditions/back-pain/", "icon": "fa-user-injured", "copy": "one line" }] },   // 6–10
  "visit": { "heading": "Your first physiotherapy appointment", "intro": "one line",
             "steps": [{ "title": "…", "copy": "one sentence" }],                                             // exactly 4
             "notes": [{ "icon": "fa-tshirt", "title": "…", "copy": "…" }] },                                 // 0–3, optional
  "team": { "eyebrow": "Our physiotherapists", "heading": "…", "copy": "2–3 sentences" },                    // image optional
  "clinics": ["newport", "ascot-vale", "bacchus-marsh", "hawthorn"],                                         // ONLY clinics that offer this service, per the brief
  "locationsHeading": "Physiotherapy across Melbourne",
  "faqHeading": "Physiotherapy FAQs",
  "faqs": [{ "question": "…", "answer": "plain text" }],                                                       // 5–8
  "closing": { "eyebrow": "Your next step", "heading": "…", "copy": "…" }
}
```

Font Awesome 5 free-solid icons only. Internal hrefs follow the approved sitemap (`/services/<name>/`, `/conditions/<name>/`, `/locations/<name>/`) even if the page is not built yet.
