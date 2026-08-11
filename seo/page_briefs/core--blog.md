---
title: "Blog"
slug: /blog/
group: core
primary_keyword: "—"
primary_volume: 0            # no primary keyword — navigational index, not a ranking target
secondary_keywords: ["injury advice melbourne", "running injury advice", "sports injury blog australia"]
search_intent: informational
word_count_target: 400
template: default
existing_url: /blog-archive/
salvage_from: []
status: draft
priority: P3
---

## Purpose

Act as the discovery and distribution layer for informational content, funnelling readers from articles into condition and service pages without competing with either.

## Reader

Someone in research mode, usually earlier in the journey than a condition-page visitor. They arrived on a single article from search or social, and this index is where they go if that article was useful. They are not ready to book. They are ready to trust.

Five-second need: is there more here that's relevant to *my* problem?

## Search Intent

Informational browsing. **This page has no primary keyword and should not be assigned one** — it is a navigational index, and any brand-prefix term ("alpha sports medicine blog") is a fabricated target with no volume. The index itself is not a ranking target — individual posts are. This page's job is internal link distribution, crawl efficiency and a decent second-click experience. Keep the copy minimal; the value is in the architecture.

## Sections

### 1. Hero
**Component:** `hero-banner` (compact)
**Direction:** Two lines. State the editorial position rather than "welcome to our blog": Alpha writes to change how people think about injury and recovery — why it keeps coming back, why rest isn't always the answer, why a tailored plan beats a generic protocol.
**Key points:**
- H1
- One-sentence editorial promise drawn from playbook pillar 2 (Re-educate the Market)
- No CTA competing with the content grid

### 2. Category filters
**Component:** filter row
**Direction:** Categories must mirror the site's condition architecture so the blog reinforces the silos rather than inventing a parallel taxonomy.
**Key points:**
- Suggested categories: Running · Sports Injuries · Back, Neck & Headaches · Knees, Hips & Feet · Shoulders, Hands & Wrists · Pregnancy & Postpartum · Hypermobility & Complex Conditions · Training & Recovery · Clinic News
- Each category page should link up to its parent condition page
- Author filter is worth having given the 15-profile E-E-A-T asset

### 3. Featured / latest
**Component:** `condition-cards` variant (post grid)
**Direction:** Standard grid: image, category, title, one-line excerpt, author with photo, date. Author attribution is not decorative — it is the mechanism by which the staff CPT's authority attaches to the content.
**Key points:**
- Author byline links to `/staff/{name}/`
- Show read time
- Paginate rather than infinite-scroll for crawlability

### 4. Start here
**Component:** `related-links`
**Direction:** A short curated block below the grid pointing at the highest-value destinations, so the blog always hands off to the money pages. This is the page's main commercial function.
**Key points:**
- Link to /conditions/ hub, the top condition pages (knee, back, shoulder, plantar fasciitis, running injuries, sports injuries), /services/, /running-assessment/
- Frame as "If you're looking for treatment rather than reading, start here"

### 5. CTA
**Component:** `cta-section` (compact)
**Direction:** Soft, single line. Book online or tell us what's going on. Do not hard-sell to a research-stage reader.

## SEO Requirements

- **Title tag (≤60):** `Blog | Injury, Recovery & Training Advice | Alpha Sports Med`
- **Meta description (≤155):** `Practical advice on injury, recovery and getting back to training, written by the osteopaths, physios and chiros at Alpha Sports Medicine.`
- **H1:** `Advice from the team`
- **Internal links out:** every post, category pages, /conditions/, top condition pages, /services/, /about/team/
- **Internal links in:** header/footer nav, every blog post (breadcrumb), homepage (optional)
- **Schema:** `Blog` / `CollectionPage`; individual posts carry `BlogPosting` with `author` → `Person` matching the staff profile
- **Technical:** paginated archives with `rel=next/prev` where supported, self-referencing canonicals, category pages indexable only if they carry unique intro copy — otherwise `noindex, follow`

## Cannibalisation Guard

Per keyword_map: **condition pages own treatment and local intent; blog posts own informational intent.** The blog index must never target a condition head term. Note also the unresolved decision on 11 treatment-intent blog posts (tennis elbow, frozen shoulder, shin splints, headaches, ankle sprain, foot pain, hand pain, postpartum, pregnancy, hypermobility) that currently collide with planned condition pages — those redirects are awaiting client approval and should not be actioned until the destination condition pages are live and indexed.

## AHPRA Compliance Notes

- Excerpts shown in the grid must not contain outcome claims — a truncated sentence can read as a promise.
- Author bylines must carry AHPRA-compliant titles ("Dr Ashton Wilson, Osteopath").
- Any post promoting a service or offer is advertising under AHPRA and must be reviewed as such, not treated as editorial.

## Voice Notes

- Index copy is functional. Save the voice for the posts.
- The one place personality belongs is the editorial promise line in the hero — it should sound like the team, not a content calendar.
- No "performance".

## Migration Notes

- `/blog-archive/` 301s to `/blog/`.
- Existing posts migrate with slugs unchanged unless individually flagged in the redirect map.
- `/category/osteopath/` and any other legacy WordPress category URLs need a disposition — either map to the new category taxonomy or 301 to /blog/. Not currently in the v5 redirect map; flag it.
- Author attribution on migrated posts must be reconciled against the 15 staff profiles; posts by departed practitioners need an editorial decision (reattribute, keep, or byline as "Alpha Sports Medicine").

## Open Questions

- Final category taxonomy — sign-off needed before URLs are minted, since category slugs are hard to change later.
- Disposition of `/category/osteopath/` and other legacy category archives.
- Should category archive pages be indexable?
- How are posts by former staff handled?
- Is there a newsletter signup to include, and where does it post to?
