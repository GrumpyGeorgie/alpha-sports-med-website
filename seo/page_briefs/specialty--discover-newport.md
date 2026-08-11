---
title: "Discover Newport"
slug: /discover-newport/
group: specialty
primary_keyword: "things to do in newport melbourne"
primary_volume: 0            # est. — proximity/local relevance content, not a demand play
secondary_keywords: ["newport melbourne", "newport cafes", "newport restaurants", "newport sporting clubs"]
search_intent: informational
word_count_target: 600
template: default
existing_url: /discover-newport/
salvage_from: ["/discover-newport/", "/best-coffee-shops-in-newport/", "/top-newport-restaurants/", "/top-newport-bars-and-pubs/", "/top-newport-sporting-clubs/", "/top-newport-health-and-wellness-clubs/"]
status: draft
priority: P3
---

## Purpose

Act as the parent for Alpha's five Newport local-content pages, feed proximity and local-relevance signals into the Newport clinic and its GBP listing, and give the whole set a reason to exist that a reader can actually see.

> ⚠ **An IA decision is pending on the five child pages (keep slugs vs nest under this hub). See Open Questions — there is a recommendation, and it needs Michael's tick before the Astro routes are built.**

## Reader

Not a patient, and being honest about that is the key to writing this page well.

1. **The new local.** Just moved to Newport, Spotswood, Williamstown or Yarraville. Working out where the good coffee is, which sporting club to join, where to take visitors. She has no interest in a physiotherapist today. She may in eighteen months, and she'll remember where she found the café list.
2. **The existing patient or local**, browsing.
3. **Search engines**, reading the page as evidence that this business is genuinely embedded in Newport rather than merely listing an address there.

**Do not write this for a prospective patient.** The moment it becomes a clinic page with a café section, it stops working for all three readers.

## Search Intent

Informational and local. **This is a proximity and topical-relevance asset, not a demand play.** No meaningful volume, no keyword target worth defending.

What it genuinely does:

- **Local relevance signals** feeding the Newport clinic page and the Newport GBP listing — the strongest of the three GBP profiles by search volume (`physio newport` 390)
- **Entity association** between Alpha and the suburb, its landmarks and its organisations
- **Link acquisition** — local businesses and community pages occasionally link to lists they appear in, and the linking-out is what makes that possible
- **Internal link distribution** into `/locations/newport/` and the two Newport service×location pages

Honest assessment for the record: this is a **B-tier asset**. It is worth keeping because it exists and carries some equity, not because it would be worth building from scratch. Brief it accordingly — 600 words, low priority, and no more investment than that.

## Sections

### 1. Hero
**Component:** `hero-banner` (light)
**Direction:** Warm, local, and visibly not a clinic hero. Real Newport photography — the station, Paine Reserve, the Blackshaws Road strip, the Mason Street shops. **Generic "Melbourne" imagery would defeat the entire purpose.**
**Key points:** H1 with Newport; subhead framing this as a local's guide, from a clinic that's been on Blackshaws Road for years; **no booking CTA in the hero.**

### 2. Why we put this together
**Component:** short intro block
**Direction:** ~80 words. One honest paragraph explaining why a health clinic has a suburb guide. **If this can't be said honestly, the page has a problem** — and the honest version is genuinely fine: we're based here, our team lives here, patients ask us where to eat and which club to join, so we wrote it down.
**Key points:** Alpha's Newport clinic and how long it's been there; the team's actual local connection; one sentence, then get out of the way.

### 3. Newport, in short
**Component:** short content block
**Direction:** ~120 words of genuine local orientation. This is the only original content on the hub and it should be worth reading.
**Key points:**
- Where Newport actually is and what it's near (Williamstown, Spotswood, Yarraville, Altona North)
- The station and the two lines through it (Werribee and Williamstown)
- Character: the Mason Street strip, Paine Reserve, the Newport Lakes reserve, proximity to the bay and the Federation Trail
- Why it suits active people — the trail network, the bay, the run and cycle routes. **This is the one legitimate bridge to Alpha's audience and it should be a single sentence, not a theme.**

### 4. Explore Newport
**Component:** `related-links` (card grid, 5 cards)
**Direction:** The hub's structural job — route to the five child pages, each with a genuine one-line reason to click, not a bare title.
**Key points:**
- Best Coffee Shops in Newport → `/best-coffee-shops-in-newport/`
- Top Newport Restaurants → `/top-newport-restaurants/`
- Top Newport Bars and Pubs → `/top-newport-bars-and-pubs/`
- Top Newport Sporting Clubs → `/top-newport-sporting-clubs/`
- Top Newport Health and Wellness Clubs → `/top-newport-health-and-wellness-clubs/`
- **URLs above assume the "keep slugs" recommendation. If Michael chooses to nest, they become `/discover-newport/{slug}/` and five 301s are added to the redirect map.** Do not build the routes until this is settled.

### 5. Getting active around Newport
**Component:** short content block
**Direction:** The only section with any natural relationship to Alpha's business, and it should read as local knowledge rather than lead generation.
**Key points:**
- The Federation Trail, the bay trail, Newport Lakes, Paine Reserve
- Local parkruns and where they are
- Sporting clubs — Williamstown Football, Cricket and Soccer Clubs (**verify which Alpha genuinely has a relationship with; the Newport location brief flags this**)
- RunWest → /runwest-run-club/
- Partner gyms, **only if the relationships are current**
- One light link to /locations/newport/

### 6. Our Newport clinic
**Component:** `nap-block` (compact) + `related-links`
**Direction:** **Bottom of the page, small, factual.** The whole page's credibility depends on this not being the point of it.
**Key points:** Address (109 Blackshaws Rd, Newport VIC 3015), phone, hours, one line on what's offered; links to /locations/newport/, /locations/newport/physiotherapy/, /locations/newport/chiropractic/

## SEO Requirements

- **Title tag (≤60):** `Discover Newport: A Local's Guide | Alpha Sports Medicine` (56)
- **Meta description (≤155):** `Coffee, food, sporting clubs and trails in Newport — a local guide from the team at Alpha Sports Medicine on Blackshaws Road.` (124)
- **H1:** `Discover Newport`
- **Internal links out:** the 5 child pages, /locations/newport/, /locations/newport/physiotherapy/, /locations/newport/chiropractic/, /runwest-run-club/, /about/community/
- **Internal links in:** /locations/newport/, both Newport service×location pages, the 12 Newport-serving area pages, footer, /runwest-run-club/
- **External links out:** the named businesses, clubs, parkrun, council. **Deliberately generous** — outbound links to real local entities are the mechanism by which this page generates local relevance and occasionally earns links back.
- **Schema:** `WebPage` + `BreadcrumbList`. `Place` references for named landmarks where sensible. **Do not use `MedicalWebPage`** — this is not medical content and marking it as such muddies the site's topical signals.
- **Breadcrumbs:** Home > Discover Newport

## Cannibalisation Guard

Carries **no clinical or service content** and must not target `physio newport`, `osteopath newport`, `chiropractor newport` or any modality term — those belong to `/locations/newport/` and the two Newport service×location pages. This page's only clinical footprint is the NAP block in section 6. Keeping that boundary clean is what stops it diluting the Newport cluster.

## AHPRA Compliance Notes

Minimal. Two things only:

- **No health claims of any kind**, including implied ones about the trails, the bay or the clubs.
- **Naming third-party businesses on a commercial domain has its own risks** — check nothing reads as a paid endorsement, and be prepared to remove a listing on request. Recommend a light "we're not paid to list anyone here" line if that is true; it is good for both trust and links.

## Voice Notes

- Local, casual, and **not clinical at all**. Zero health vocabulary above section 6.
- Write like someone who lives there. Name specific streets and places. Vagueness is the failure mode — "Newport has a great café scene" is worthless; "the Mason Street strip" is not.
- Do not turn every section back toward the clinic. **One bridge, in section 5, and that's it.**
- Short. 600 words is deliberate. The children carry the detail.
- No "performance". No North Star. This page is not carrying brand messaging.

## Migration Notes

- `/discover-newport/` **keeps its slug — no redirect.** Confirm the Astro route matches, trailing slash included.
- **The sitemap counts "Newport local content (6 pages)"; the live page audit finds this hub plus five children.** The counts reconcile if the hub is included in the six. **Re-crawl to confirm no sixth child exists** — the sitemap's own validation notes warn that the v2 audit missed whole page groups (the 26 area pages), so an undiscovered child page is a live possibility.
- **Content audit required before migration.** These are 2019-era local listicles on a clinic domain. Any that name businesses which have closed are worse than useless — they signal an unmaintained site to both readers and search engines. Check every listing before migrating.
- Update the Newport NAP: address correct, phone to (03) 9962 5539, hours confirmed.

## Open Questions

1. **THE PHASE 3 DECISION — keep the child slugs, or nest them under `/discover-newport/`?**

   **Three options:**

   **(a) Keep the existing slugs, migrate as-is, link from this hub.** No redirects, no equity risk, no route changes. The hub provides the hierarchy through internal linking, which is what actually matters for crawl and context. This is exactly the treatment the sitemap already approved for the 26 programmatic area pages, and applying the same logic here is consistent.

   **(b) Nest under `/discover-newport/{slug}/`.** Tidier URLs and a cleaner visible silo. Costs five 301s, five new redirect-map entries, and a small equity haircut, in exchange for a benefit that is largely cosmetic — URL nesting is not a meaningful ranking factor at this scale.

   **(c) Consolidate all five into this hub as sections and 301 the children in.** Turns six weak pages into one moderate one. Attractive *if* the audit finds the children are thin, stale or listing closed businesses.

   **Recommendation: (a) keep the slugs — conditional on the content audit.** The pages carry equity, the redirect risk is real, the upside of nesting is close to zero, and it matches the precedent already set for the area pages. **But run the content audit first (see Migration Notes). If two or more of the five are stale or thin, switch to (c) and consolidate** — that is a better outcome than nesting five weak pages more neatly. **Do not choose (b).** It has the costs of a restructure and the benefits of neither alternative.

   **This needs Michael's tick before the Astro routes are built.** It blocks route definition, the internal linking in section 4, and the final redirect map.

2. **Is Alpha still committed to maintaining this content?** Local listicles decay fast. If nobody will refresh them annually, option (c) is the better long-term call regardless of what the audit finds — one page to maintain instead of six.
3. Which Newport businesses, clubs and gyms does Alpha genuinely have a relationship with? The Newport location brief already flags that the BFT and Movement Culture partnerships may be lapsed. **Do not name a relationship that isn't current.**
4. Is there original Newport photography, or is the live page on stock? Stock imagery substantially undermines this page's only purpose.
5. Confirm the sixth Newport local page exists or doesn't — re-crawl.
6. Should equivalent hubs be built for Ascot Vale and Bacchus Marsh? **Recommendation: not now.** Prove the model works at Newport first — this is the only clinic with the content already built, and there is no evidence yet that it earns its keep. Revisit post-launch with data.
