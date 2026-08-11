# Page Brief Standard — Alpha Sports Medicine

Every brief in this folder follows the structure below. Written for the Phase 3 copywriter (page-copywriter → content-writer 8-pass). Briefs specify *direction*, not finished copy.

## File naming

`seo/page_briefs/{group}--{slug}.md` where group is one of `core`, `service`, `location`, `svcloc`, `condition`, `specialty`, `template`.

Example: `condition--knee-pain.md`, `svcloc--bacchus-marsh-physiotherapy.md`

## Required frontmatter

```yaml
---
title: "Page Title"
slug: /page-slug/
group: core | service | location | svcloc | condition | specialty | template
primary_keyword: "main keyword"
primary_volume: 0            # AU monthly, or "est." if unverified
secondary_keywords: ["kw2", "kw3"]
search_intent: informational | commercial | transactional | navigational
word_count_target: 800
template: homepage | service | location | condition | staff | area | default
existing_url: /old-url/       # or "new" if no live equivalent
salvage_from: ["/old/url/"]   # live URLs whose copy must be harvested before redirect
status: draft
priority: P1 | P2 | P3
---
```

## Required sections

1. `## Purpose` — one sentence
2. `## Reader` — who lands here, what state they're in, what they need in the first 5 seconds
3. `## Search Intent` — what the searcher is actually trying to do
4. `## Sections` — numbered, each with **Component**, **Direction**, **Key points**
5. `## SEO Requirements` — title tag (≤60), meta description (≤155), H1, internal links in/out, schema type
6. `## AHPRA Compliance Notes` — page-specific risks
7. `## Voice Notes` — page-specific tone adjustments off the playbook baseline
8. `## Migration Notes` — what carries over from the live page, what gets rewritten, redirect dependencies
9. `## Open Questions` — anything the writer cannot resolve without the client

### Template exemption

Briefs in the `template` group (`template--area-page.md`, `template--staff-profile.md`) describe a **repeating per-entry structure** across many entries, not the sections of a single page. Their `## Sections` heading therefore documents the structure every entry repeats, and they may carry additional sections the standard does not list (e.g. `## Architecture`, `## Thin-Content Floor`, `## Content Floor`, title/meta formulas rather than fixed strings). The heading name still conforms — `## Sections`, not `## Section Structure` or `## Architecture`.

## Brand voice baseline (from campaign-playbook.md)

- **Casual but authoritative.** Direct without being cold. Educating without lecturing. Warm without being soft.
- **Lead with the problem, not the modality.** The site's strategic job is to shift "problem → physio/osteo/chiro" into "problem → Alpha".
- **North Star:** "We get to the root of the problem to unlock your potential."
- **Positioning:** the place people go when nothing else has worked.
- **Words to use:** community, leader, legacy, family, root cause, long-term, tailored, get back to, we get it, we have your back, multidisciplinary, integrative.
- **Words to avoid:** "performance" (founder-flagged cringe word — use "getting back to what you love" / "reaching your goals"), quick fix, instant results, guaranteed cure. Never trash-talk another practitioner or clinic.
- Reader is typically frustrated, a bit scared, has already tried things, and has been Googling worst-case scenarios. Validate before you educate.

## AHPRA guardrails (apply to every page)

- No guaranteed outcomes, no cure language. Use "may help", "many of our patients tell us", "has helped many people with".
- No before/after imagery for therapeutic claims.
- Testimonials must not imply guaranteed results.
- No comparative superiority claims ("better than physio", "Melbourne's best").
- Frame benefits as process and approach, not promised clinical outcome.

## Standard CTA hierarchy

- **Primary:** Book online → Cliniko (`https://alpha-sports-medicine-osteopathy.au1.cliniko.com/bookings`)
- **Secondary:** Call the relevant clinic (use the clinic-specific number — see `../../Alpha-Sports-Med-Phone-Number-Audit.md`)
- **Tertiary / low-commitment:** "Not sure which practitioner you need? Tell us what's going on" → /contact/

Every condition page carries the 3-location booking block. Every service page carries the location selector.

## Standard components (Phase 4 will formalise these in the design system)

`hero-banner` · `problem-statement` · `approach-steps` · `service-cards` · `condition-cards` · `practitioner-cards` · `location-cards` · `faq-accordion` · `nap-block` · `booking-block-3location` · `cta-section` · `breadcrumbs` · `related-links`

## Cannibalisation rules (from keyword_map.md)

- Condition pages own **treatment/local intent**. Blog posts own **informational intent**.
- Service pages stay **suburb-agnostic** (Melbourne-level). Location pages own their suburb terms exclusively.
- Service×location pages own `[modality] [suburb]` only. They must not restate the full service page.
- No two briefs may share a primary keyword.
