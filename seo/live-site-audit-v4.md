# Live Site Audit — Full Sitemap Index Reconciliation

**Date:** 2026-07-21
**Method:** Fetched all seven sub-sitemaps from `sitemap_index.xml` (Rank Math). Screaming Frog CLI unavailable in this environment; sitemap enumeration used instead. A rendered crawl is still worth running before launch to catch orphans and any noindex pages, which sitemaps do not reveal.
**Why:** The v2 audit (2026-06-11) read `page-sitemap.xml` only, and treated 56 URLs as the whole site. It is one of seven.

## Sitemap Index Contents

| Sitemap | URLs | In architecture before today? |
|---|---|---|
| page-sitemap.xml | 56 | Yes — this was the v2 audit source |
| post-sitemap.xml | 76 | Partially — blog treated as "5 posts at launch" |
| locations-sitemap.xml | 29 | Added in v4 (3 clinics + 26 area pages) |
| category-sitemap.xml | 30 | **No** |
| staff-sitemap.xml | 15 | **No** |
| education_hub-sitemap.xml | 12 | **No** |
| local-sitemap.xml | 1 (locations.kml) | **No** — GBP/local pack asset |

**Live total: ~218 indexable URLs.** Architecture as of v4 covers 77. Gap: ~141 URLs.

---

## Finding 1 — Staff CPT (15 pages), entirely missing

`/staff/[name]/` is a custom post type with 15 practitioner profiles.

| Practitioner | URL |
|---|---|
| Dr Ashton Wilson | /staff/dr-ashton-wilson/ |
| Dr Will Krithararis | /staff/dr-will-krithararis/ |
| Dr Nick Naimo | /staff/dr-nick-naimo/ |
| Dr Patricia Macandog | /staff/dr-patricia-macandog/ |
| Dr Lara Trevorrow | /staff/dr-lara-trevorrow/ |
| Dr Matt O'Neill | /staff/dr-matt-oneill/ |
| Dr Disha Ganglani | /staff/dr-disha-ganglani/ |
| Dr Caitlin O'Farrell | /staff/dr-caitlin-ofarrell/ |
| Dr Christina Kripintiris | /staff/dr-christina-kripintiris/ |
| Wei Song | /staff/wei-song/ |
| Anna Lawther | /staff/anna-lawther/ |
| Jordan Tripodi | /staff/jordan-tripodi/ |
| Felicity Lorimer | /staff/felicity-lorimer/ |
| Oscar Taylor | /staff/oscar-taylor/ |
| Alexandra Clay | /staff/alexandra-clay/ |

**This closes the "current team size and practitioners by discipline" open question** — the roster is 15, not the 1 on file in client_profile.md. Disciplines still need confirming per person, but we no longer need to ask the client who works there.

Alexandra Clay is an Accredited Practising Dietitian (per her introduction post), which independently confirms Dietetics is a live service.

**Decision needed:** individual practitioner pages are strong E-E-A-T assets and should almost certainly carry across as a CPT. The architecture currently has a single `/about/team/` page, which would collapse 15 indexable pages into one.

## Finding 2 — Education Hub CPT (12 pages), entirely missing, and it cannibalises

`/education_hub/[topic]/` plus a `/education-hub/` landing page. Note the landing page uses a hyphen and the children use an underscore, which is its own problem.

Four of the eleven articles collide directly with planned Sports Injuries children:

| Education hub article | Collides with planned page |
|---|---|
| /education_hub/acl-rupture/ | /conditions/sports-injuries/acl/ |
| /education_hub/rolled-ankle/ | /conditions/sports-injuries/ankle-sprain/ |
| /education_hub/sharp-pain-rib-sprain/ | /conditions/sports-injuries/rib-sprain/ |
| /education_hub/what-is-tennis-elbow/ | /conditions/sports-injuries/tennis-elbow/ |

Tennis elbow is a three-way collision: education hub article, blog post (`/tennis-elbow-treatment/`), and planned condition page.

**Recommendation:** retire the education hub as a content type and 301 each article into its matching condition page or blog post. It is a legacy structure duplicating two newer ones, and consolidating it feeds equity into the pages we actually want ranking. Remaining articles without a condition match (fascial connections, rest is not always best, telehealth, strain vs sprain, physio vs EP difference, best physio exercises for lower back pain) map to blog or condition pages case by case.

## Finding 3 — Blog is 76 posts, not 5

The architecture says "5 blog posts in the initial build" and references a 12-post forward schedule. That is the *new* content plan. It is not the migration scope. 76 live posts need a disposition each: migrate, consolidate, or retire.

A first pass suggests three groups:
- **Strong, recent, on-strategy** (IT band, hip flexor, frozen shoulder, shin splints, RED-S, tennis elbow, chiropractor for headaches) — migrate as-is
- **Older but topically relevant** (back pain, running, pregnancy, ankle) — migrate, many are internal-link fodder for condition pages
- **Legacy and off-strategy** (kickboxing 101, inside crown isolation, hiking like a viking, smart goals in a pandemic, what can you do in isolation, 5 secrets to pro performance) — candidates for retirement, several are COVID-era

Several older posts also duplicate each other on back pain (`/improve-back-pain/`, `/easy-ways-to-improve-back-pain/`, `/back-pain-relief-with-osteopathy/`, `/the-benefits-of-osteopathic-treatment-for-low-back-pain/`, `/osteopathy-for-back-pain/` — five posts, one topic) and on osteo-vs-chiro (`/osteopath-vs-chiropractor/`, `/osteopath-vs-chiropractor-difference/`, `/physio-vs-osteo-whats-the-difference/`, `/difference-between-osteo-physio-chiro/`, `/difference-between-osteopath-and-physiotherapist/` — five posts, one topic). Consolidation opportunity worth real ranking gains.

## Finding 4 — 30 category archives, no strategy

`/category/[slug]/` archives are indexable. Several duplicate planned condition pages by name: back-pain, neck-pain, headache, shoulder-pain, foot-pain, hand-pain, hip-pain, elbow-pain, pregnancy.

A condition page and a category archive targeting "back pain" compete. **Decision needed:** noindex the category archives, or keep a curated few and noindex the rest. Legacy categories (hiking, home-isolation, success, posture) look like retirement candidates regardless.

## Finding 5 — locations.kml

`local-sitemap.xml` points at `/locations.kml`, a geo file used for local pack signals. Needs to survive the migration or be regenerated on the new stack. Easy to lose silently in an Astro rebuild.

---

## Impact on Phase 2 Sign-Off

The 51-page architecture is sound for the editorial site. It was never wrong, it was scoped against incomplete input. What it does not yet cover:

1. Staff CPT — 15 pages, decision needed
2. Education hub — 12 pages, consolidation plan needed
3. Blog migration — 76 posts, disposition list needed
4. Category archives — 30, indexation decision needed
5. locations.kml — carry-over task

Items 1 and 2 change the page hierarchy and belong in the sitemap before sign-off. Items 3, 4, and 5 are migration-plan work that can run alongside Phase 3 without blocking it.

## Also Worth Noting

- `page-sitemap.xml` last modified 2026-07-20, one day before this audit. The live site is being actively edited during the rebuild. Worth confirming with the client whether changes are still being made, since we are building against a moving target.
- No `noindex` visibility from sitemaps alone. A rendered crawl before launch remains on the checklist.
