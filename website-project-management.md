# Website Project Management — Alpha Sports Medicine

## Overview
- **Client:** Alpha Sports Medicine
- **Primary URL:** https://alphasportsmed.com.au/
- **Project slug:** alpha-sports-med
- **Project folder:** Alpha Sports Med/astro-new/
- **Platform:** Astro (Phase 5 build skills in this plugin are WordPress-only — see note in Phase 5)
- **Owners:** Aiya (build), Krystalyn (PM), Jaimee (SEO), Michael (strategy)
- **Last Updated:** 2026-08-03
- **Current Phase:** Phase 3 (Step 3.2) + Phase 4 (Step 4.1) running in parallel
- **Current Step:** Phase 3 Step 3.2 — **homepage copy drafted (content/home.md) and sent to Michael for internal review** (BasicOps task 2170328, 2026-07-22). Still awaiting his sign-off as of 2026-08-03 (no reply in BasicOps). Phase 4 Step 4.1 (Brand Guidelines) started 2026-08-03 in parallel, ahead of copy sign-off — decision made to not block homepage design on Michael's review. The Bacchus Marsh conflict and practitioner-detail blockers do not affect the homepage.
- **BasicOps:** *Web Projects → Design & Content → "Alpha Sports: Astro Build" (task 2170328, Aiya)

## Reference Documents
- Campaign Playbook: ../campaign-playbook.md
- Client Profile: ../client_profile.md
- Website Brief: — (not produced; playbook + client profile serve as Phase 1 context)
- Brand Guidelines (internal): design/brand_guidelines.md (TBD, Phase 4)
- Design System: design/design_system.md (TBD, Phase 4)
- Block Architecture: wp/blocks.md (TBD, Phase 4)
- Site Architecture: seo/sitemap.md (v5, 2026-07-21) — 98 pages
- Live Site Audit: seo/live-site-audit-v4.md — full sitemap-index reconciliation
- Keyword Map: seo/keyword_map.md · Blog Schedule: seo/blog_schedule.md
- Review Spreadsheet: Alpha-Sports-Med-Proposed-Sitemap-v5.xlsx (supersedes the v3 Google Sheet and the v4 xlsx — both can be deleted)
- Prior site artefacts (old build): ../wordpress/ (landing pages, theme updates, design playgrounds)

## Environments

### Local
- **URL:** —
- **WP Admin:** —
- **Local site name:** —
- **Environment:** TBD (Local by Flywheel / wp-env / Docker)

### LHM Design Staging (Phase 4 prototype)
- **URL:** lhmstaging.net/design/alpha-sports-med/ (TBD)
- **SSH access:** TBD

### LHM Site Staging (Phase 5 site)
- **URL:** TBD
- **SSH access:** TBD

### Production
- **URL:** https://alphasportsmed.com.au/
- **DNS provider:** TBD
- **SSH access:** See ../wordpress/wp-cli.sh (existing site)

## Page Inventory

Full page list lives in seo/sitemap.md (v5) and the review spreadsheet. Summary:

| Group | Count | Notes |
|---|---|---|
| Core | 8 | /about/team/ is an index into the Staff CPT |
| Services | 11 | Myotherapy, Dietetics, Paediatric Osteo added from live audit |
| Locations — clinics | 4 | Hub + Ascot Vale, Newport, Bacchus Marsh |
| Locations — service × location | 6 | Approved 2026-07-21 on suburb volume |
| Locations — area pages | 26 | Programmatic, migrate as-is, no redirect |
| Conditions | 25 | Sports Injuries hub + 6 children; Knee Pain is the priority new page |
| Specialty & Community | 3 | Running Assessment, RunWest, Discover Newport |
| Staff CPT | 15 | Retained as dedicated pages, slugs unchanged |
| **Total** | **98** | vs ~218 live URLs |

Status values: Brief / Copy-Locked / Built / QA-Passed / Live

## Approval Log

| Date | Phase | Artefact | Sent to Client | Approved | Notes |
|------|-------|----------|----------------|----------|-------|
| 2026-06-11 | 1 | Campaign Playbook | — | Internal | Playbook created from founder transcripts; saved at client root |

---

## Phase 1 — Client Onboarding & Strategy

**Owner:** Krystalyn (with Michael for Step 1.2)
**Approval gate:** Playbook approved

### Step 1.1 — Collect Client Assets
- [~] (2026-06-11) Client logo (PNG or SVG) — favicon.png exists in ../wordpress/; full logo to confirm in Phase 4
- [~] (2026-06-11) Brand image library — partial (team photos in ../wordpress/); expand in Phase 4
- [~] (2026-06-11) Existing brand guidelines — none formal; design direction captured in playbook
- [x] (2026-06-11) Current website credentials (rebuild) — existing site access via ../wordpress/wp-cli.sh
- [~] (2026-06-11) 2–4 competitor URLs from client — deferred to Phase 2 keyword research
- [~] (2026-06-11) Email Client Questionnaire — superseded by strategy session transcripts

### Step 1.2 — Strategy Session Call
- [x] (2026-06-11) Strategy/discovery sessions completed with founders (Ashton & Will)
- [x] (2026-06-11) Transcripts captured and used as playbook input

### Step 1.3 — Generate Campaign Playbook
- [x] (2026-06-11) Campaign Playbook generated from founder transcripts
- [x] (2026-06-11) Draft reviewed for accuracy
- [x] (2026-06-11) Approved playbook saved to ../campaign-playbook.md
- [ ] Resolve "Open Questions / Gaps to Fill" section with Ashton & Will (locations, full service list, certifications, team roster)

### Step 1.4 — Generate Website Brief
- [~] (2026-06-11) Skipped — no separate website brief; campaign-playbook.md + client_profile.md serve as the Phase 1 strategy context for this build

### Step 1.5 — Generate Spec, Plan & PM Doc
- [~] (2026-06-11) Superpowers spec/plan skipped for this build
- [x] (2026-06-11) PM doc generated by wp-project-manager (this file)
- [x] (2026-06-11) **Project underway** — proceed to Phase 2

---

## Phase 2 — SEO Architecture & Content Planning

**Owner:** Jaimee
**Approval gate:** Michael internal sign-off on architecture and blog schedule

### Step 2.1 — Keyword Research & Site Architecture
- [x] (2026-06-11) Run keyword research using approved Playbook and client profile (Keywords Everywhere AU, 50 terms + prior 2026-02/03 research)
- [x] (2026-06-11) Identify primary service pages, location pages, supporting pages (reconciled against live page-sitemap.xml — 56 URLs audited)
- [x] (2026-06-11) Confirm number of blog posts in initial build — 5 (drafted/written posts migrate at launch)
- [x] (2026-06-11) TAYA question bank built (Big 5, from playbook pain points)
- [x] (2026-06-11) Cross-referenced with Reddit themes and PAA data (2026-03 research)
- [x] (2026-06-11) Build blog content schedule (continues existing 12-post plan, fortnightly)
- [x] (2026-06-11) Compile site architecture document — 44 pages incl. full live-URL disposition and 301 map
- [x] (2026-06-11) Save to seo/sitemap.md, seo/keyword_map.md, seo/blog_schedule.md
- [x] (2026-06-11) Architecture presented to Michael (in session)
- [x] (2026-07-21) **Michael internal sign-off — APPROVED.** Sitemap v5 signed off. Phase 3 opened.

### Step 2.2 — Reconcile Missing Content Types (added 2026-07-21)
Blocking sign-off:
- [x] (2026-07-21) Staff CPT (15 practitioner pages) — **DECIDED: keep as dedicated CPT.** /about/team/ becomes an index, not a replacement. Slugs migrate unchanged.
- [x] (2026-07-21) Education Hub CPT (12 pages) — **DECIDED: retire + 301.** Full redirect map in seo/sitemap.md. Salvage copy into destination condition pages during Phase 3.
- [x] (2026-07-21) Service × location pages — **DECIDED: build 6** (not the 30-cell matrix). EP and Dietetics have zero suburb demand at all 3 clinics. Clinical Pilates rejected on intent mismatch.
Not blocking, runs alongside Phase 3:
- [x] (2026-07-21) Treatment-intent blog posts (11) — **DECIDED: redirect all, staged, with one exception.** Launch with all 11 live. Redirect each post only once its destination condition page is indexed and holding a stable position (approx. 4–8 weeks post-launch, verified in GSC, not assumed). Salvage copy into the destination page before redirecting. **Exception:** /types-of-headaches/ is informational rather than treatment-intent — rewrite to stay informational, link across to /conditions/headaches/, and keep it. The other 10 duplicate outright. **Dependency:** requires working GSC to sequence — see 403 below.
- [x] (2026-07-21) Live site edit status — **CONFIRMED FROZEN** by Michael. page-sitemap.xml lastmod of 20 Jul does not reflect ongoing content work. Audit does not need re-running on that basis.
- [ ] Confirm discipline + qualifications per practitioner with client (needed for staff profiles and service×location pages)
- [ ] Blog migration plan — 76 live posts need per-post disposition (migrate / consolidate / retire)
- [ ] Back-pain cluster consolidation (5 posts, 1 topic) and osteo-vs-chiro cluster (5 posts, 1 topic)
- [ ] Category archives (30) — indexation decision, several collide with planned condition pages
- [ ] locations.kml — carry across or regenerate on new stack
- [ ] Rendered crawl before launch (sitemaps do not reveal orphans or noindex)
- [ ] **Resolve GSC 403.** Blocks two things: validating whether "physio newport" (390) splits with Newport NSW, and sequencing the staged blog redirects above. Worth chasing before Phase 3 closes.

---

## Phase 3 — Web Copy Production

**Owner:** Jaimee
**Approval gate:** Home page client-approved; rest internal-only

### Step 3.1 — Generate Copy Briefs for All Pages
- [x] (2026-07-21) Reference approved sitemap from Phase 2 (v5, 98 pages)
- [x] (2026-07-21) Generate copy briefs for all pages — **59 briefs**: 57 editorial (1:1 with sitemap v5) + 2 templates covering the 26 programmatic area pages and the 15 staff CPT profiles
- [x] (2026-07-21) Review against Playbook for tone and accuracy — brand voice baseline codified in seo/page_briefs/_BRIEF_STANDARD.md; AHPRA notes are page-specific on all 59
- [x] (2026-07-21) Save brief set to seo/page_briefs/ — index and writing order in seo/page_briefs/README.md
- [x] (2026-07-21) Independent adversarial verification pass — coverage, frontmatter, slugs, internal links, salvage coverage, cannibalisation guards, meta/title limits all clean. 11 defects found and fixed.
- [!] **1 blocker open:** Bacchus Marsh service scope. The June 2026 GBP plan says that clinic is osteopathy + telehealth only; sitemap v5 gives it chiro as lead modality (320) and a P1 physio page (260). If the GBP plan is current, 2 of the 6 approved service×location pages are cancelled and the location page's primary drops 320 → 110. Three briefs carry build-stop callouts. **Michael's call.**
- [ ] Sitemap/blog-schedule corrections found during briefing (6 items — see README.md): two blog posts share condition-page primaries, a dead `/conditions/neck-pain-headaches/` target, a hypermobility keyword collision, the Back Pain primary disagreement between sitemap and keyword map, and six URLs missing from the 301 map

### Step 3.2 — Write Home Page Copy
- [x] (2026-07-22) Use home page brief as input — content/home.md, ~1,100 words, 10 sections mapped to brief components
- [x] (2026-07-22) Reference Playbook for voice — problem-led, banned words avoided, North Star landed in problem block
- [x] (2026-07-22) Page copy written (drafted directly this session, not via 8-pass agent)
- [~] (2026-07-22) AHPRA compliance review — self-check clean; two items flagged for Michael: (1) "the model most clinics in the west don't run" is a mild comparative (brief-sanctioned), (2) no testimonials/review counts pending compliant consent
- [~] (2026-07-22) Internal review by Michael — **sent to BasicOps task 2170328, awaiting sign-off**
- [ ] Send to client for approval
- [ ] **Client approval confirmed in writing**
- [ ] Mark home as copy-locked in Page Inventory above

### Step 3.3 — Write Remaining Page Copy (Batches)
For each batch of 3–4 pages:
- [ ] Core service pages first
- [ ] Then location pages
- [ ] Then supporting pages
- [ ] Run page-copywriter per page (routes through content-writer)
- [ ] AHPRA compliance review per page
- [ ] Internal review by Michael per batch
- [ ] Mark each page copy-locked in Page Inventory

---

## Phase 4 — Brand, Design System & Prototype

**Owner:** Aiya
**Approval gate:** Homepage variant client-approved + style guide client-approved (parallel)

### Step 4.1 — Brand Guidelines & Client Style Guide
- [x] (2026-08-03) Reference approved Playbook (design direction: modern, premium, fun, athletic)
- [x] (2026-08-03) Confirm what brand assets already exist — extracted from live production site + deployed theme CSS
- [x] (2026-08-03) Run Brand Discovery Skill
- [x] (2026-08-03) Generate design/brand_guidelines.md (internal) — status: approved
- [ ] Generate design/brand_style_guide.pdf (client-shareable)
- [ ] Internal review by Michael
- [ ] Send style guide to client (3-business-day turnaround) — runs in parallel with Steps 4.2–4.5
- [ ] **Client approval of style guide logged when received**

**Confirmed against live site (2026-08-03)**: colors (#F25F2D orange / #172B37 navy, from deployed theme CSS vars), typography (Roboto headings, Source Sans Pro eyebrow + body), logo (full lockup + icon mark, downloaded to design/assets/logo/), iconography (Font Awesome 5 Free). Open item: no light-background logo variant exists — needed if rebuild uses a white header.

### Step 4.2 — Design System
- [x] (2026-08-03) Confirm brand_guidelines.md finalised
- [x] (2026-08-03) Run Design System Generator Skill
- [x] (2026-08-03) Output: colour tokens, fluid type scale, spacing scale, breakpoints, radius, shadow, component specs — mostly carried forward from the confirmed production `:root` token block, not redesigned from scratch
- [x] (2026-08-03) Spacing scale uses fluid clamp() values (typography); spacing itself carried forward as fixed px scale from production
- [x] (2026-08-03) Save to design/design_system.md — status: approved

### Step 4.3 — Block Architecture
**SKIPPED (2026-08-03) — not applicable.** Block Architect evaluates native vs custom Gutenberg blocks; this build is Astro, not WordPress. No block architecture step needed. Proceeding straight to Step 4.4 (HTML prototype) per user direction.

### Step 4.4 — Build Homepage Prototype Variants (Internal)
- [ ] Confirm variant count with Michael (1, 2, or 3)
- [ ] Use approved homepage copy as content input (real copy, no placeholder)
- [ ] Reference brand_guidelines.md, design_system.md, blocks.md
- [ ] Run HTML Prototype Skill
- [ ] Each variant is self-contained: prototype/v1/index.html, v2/, v3/
- [ ] Mobile responsive verified per variant
- [ ] Internal review (Michael, Krystalyn, Aiya)
- [ ] Apply internal feedback
- [ ] Decide which variant(s) go to client

### Step 4.5 — Publish to LHM Staging & Client Approval
- [ ] Upload variants to lhmstaging.net/design/alpha-sports-med/
- [ ] Multiple variants get separate subfolders /v1/, /v2/, /v3/
- [ ] Verify desktop, tablet, mobile rendering
- [ ] Verify all assets resolve
- [ ] Prepare review email (staging links, 3-day turnaround, specific questions)
- [ ] Send review email
- [ ] Capture feedback, apply refinements
- [ ] Re-upload refined version
- [ ] Roll out remaining template designs (about, service, location, contact)
- [ ] **Homepage direction client-approved in writing**
- [ ] **Style guide approval confirmed (from Step 4.1)**

---

## Phase 5 — WordPress Build

**Owner:** Aiya
**Approval gate:** Milestone 5-page client review (Step 5.7) + final staging walkthrough (Step 5.10)

### Step 5.1 — Local WordPress Instance
- [ ] Confirm Local by Flywheel installed (or document Docker/wp-env fallback)
- [ ] Create local site with project slug
- [ ] Confirm local site loads
- [ ] Record environment details in this PM doc (Environments section)

### Step 5.2 — Theme Scaffold & Install
- [ ] Confirm brand_guidelines.md, design_system.md, blocks.md, prototype available
- [ ] Run Theme Scaffold Skill
- [ ] Install and activate theme on local WP
- [ ] Upload client logo via Site Identity
- [ ] Upload favicon as site icon
- [ ] Run CSS Sync Check Skill — fix any missing classes
- [ ] Confirm header/footer template parts render

### Step 5.3 — Homepage Raw HTML Push (Design Verification)
- [ ] Extract body content from approved homepage prototype
- [ ] Wrap each section in wp:html block
- [ ] Push to WordPress via WP Page Builder Skill (Step 1)
- [ ] Run Visual QA Skill — desktop, tablet, mobile
- [ ] Fix any CSS or layout differences
- [ ] Internal review by Michael — confirm pixel parity

### Step 5.4 — Convert Homepage to Gutenberg Blocks
- [ ] Run WP Page Builder Skill (Step 2, native conversion)
- [ ] Verify each section editable in block editor, no console errors
- [ ] Run Visual QA Skill — confirm parity at all breakpoints
- [ ] Fix any visual regressions
- [ ] Internal review by Michael

### Step 5.5 — Dynamic Menu & Site Identity
- [ ] Reference approved sitemap from Phase 2
- [ ] Create primary menu in WordPress
- [ ] Add menu items for top-level pages
- [ ] Configure sub-menus for service / location hierarchies
- [ ] Assign menu to Primary location
- [ ] Test desktop nav and mobile hamburger
- [ ] Configure footer menu if design includes one

### Step 5.6 — Global Styles & Theme Customisation
- [ ] Confirm colour palette in theme.json settings.color.palette
- [ ] Confirm font families/sizes in settings.typography
- [ ] Verify Site Editor → Styles shows all brand colours as editable tokens
- [ ] Verify font choices appear as editable typography tokens
- [ ] Test colour token change updates site globally; revert
- [ ] Document client edit path: Appearance → Editor → Styles

### Step 5.7 — Milestone Build: 5 Pages in Gutenberg (Client Review)
- [ ] About page
- [ ] Contact page (including contact form)
- [ ] Services hub or parent page
- [ ] One Service detail page
- [ ] One Location page
- [ ] Use approved Phase 3 copy for each
- [ ] Apply SEO metadata per page (title, meta desc, slug)
- [ ] Run Visual QA Skill across all 5 pages
- [ ] Internal review by Michael
- [ ] Share preview with client
- [ ] **Client approval to proceed with full build**

### Step 5.8 — Complete Remaining Pages
- [ ] All remaining service pages (priority order from sitemap)
- [ ] All remaining location pages
- [ ] All supporting pages (FAQ, resources, privacy, terms)
- [ ] SEO metadata applied per page (title, meta desc, slug, schema)
- [ ] Images optimised (compress, alt text, file naming)
- [ ] Internal linking per Phase 2 architecture plan
- [ ] Visual QA per page across breakpoints
- [ ] Fix visual regressions
- [ ] Update Page Inventory with built status

### Step 5.9 — Forms, SEO Metadata & Tracking
- [ ] Set up all contact forms — submissions to client's email
- [ ] Cliniko booking links wired on all CTAs
- [ ] Test every form end-to-end on local
- [ ] Final Yoast SEO settings site-wide
- [ ] GA4 configured (property 335294406), tracking pageviews
- [ ] GSC property configured (note: MCP access currently 403 — resolve permissions)
- [ ] XML sitemap generated and reachable
- [ ] robots.txt blocks indexing on staging

### Step 5.10 — Deploy to Staging Website
- [ ] Confirm SSH credentials for LHM staging server
- [ ] Confirm staging path allocated
- [ ] Run WP SSH Deploy Skill
- [ ] Verify staging loads on desktop/mobile
- [ ] Verify all assets resolve on staging URL
- [ ] Test forms end-to-end on staging
- [ ] Confirm robots.txt still blocks indexing
- [ ] Send staging URL to client for final walkthrough
- [ ] Capture and apply final feedback (re-deploy as needed)
- [ ] **Client signed off on staging site**

---

## Phase 6 — QA & Go-Live

**Owner:** Jaimee (complete) + Krystalyn (verify) + Michael (sign-off)
**Approval gate:** Michael go-live sign-off → DNS cutover → client confirmation

### Step 6.1 — Pre-Launch QA
- [ ] **SEO:** All title tags, meta descriptions, slugs match sitemap
- [ ] **SEO:** No duplicate title tags or meta descriptions
- [ ] **SEO:** XML sitemap generated and accessible
- [ ] **SEO:** robots.txt — staging blocks removed
- [ ] **SEO:** Schema markup on relevant pages, validated
- [ ] **SEO:** 301 redirect map from old site URLs (see ../client_profile.md page list) to new architecture
- [ ] **Technical:** Mobile, tablet, desktop review per page
- [ ] **Technical:** Page speed tested — flag slow pages
- [ ] **Technical:** All internal links work
- [ ] **Technical:** Forms tested end-to-end
- [ ] **Technical:** SSL active
- [ ] **Technical:** 404 page configured
- [ ] **Content:** All copy matches Phase 3 copy-locked versions
- [ ] **Content:** Images compressed, alt text applied, no placeholders
- [ ] **Content:** AHPRA final check — no outcome claims, guarantees, comparatives
- [ ] **Tracking:** GA4 confirmed tracking pageviews on staging
- [ ] **Tracking:** GSC property configured, sitemap submitted

### Step 6.2 — Michael Sign-Off & Go-Live
- [ ] Share QA checklist with Michael
- [ ] **Michael go-live approval confirmed**
- [ ] Krystalyn notifies client of go-live window
- [ ] Jaimee points domain DNS to live server
- [ ] Confirm site live, all pages resolve
- [ ] Re-test forms on live domain
- [ ] Confirm GA4 tracking on live domain
- [ ] Send go-live confirmation email to client
- [ ] Archive project files to client folder in Google Drive
- [ ] Log project completion in agency project tracker
- [ ] **Project complete**

---

## Notes & Decisions

2026-08-03 (later): **Copy/BasicOps discrepancy found — resolved by Aiya's call.** `content/home.md` on disk had been revised to a "health/goal-led" angle (H1 "Get back to doing what you love"), but the version actually sitting in Michael's BasicOps review (task 2170328, since 2026-07-22) is the original "problem-led" draft (H1 "The pain keeps coming back. We find out why."). **Decision: prototype the homepage against Michael's copy (the BasicOps/problem-led version)**, since that's the version actually under internal review — not the newer file. content/home.md is now out of sync with what's being designed; needs reconciling once Michael responds (either content/home.md gets reverted to match, or the approved copy gets updated to the goal-led version and the prototype rebuilt).

2026-08-03 (latest): **Phase 4 (homepage design) started in parallel with Phase 3 Step 3.2 copy sign-off.** Michael's internal review of home.md has been outstanding in BasicOps (task 2170328) since 2026-07-22 with no reply. Rather than block, design work begins now against the drafted copy as-is; any changes Michael requests will be reconciled into the prototype before it goes to the client. Starting with Step 4.1 — Brand Guidelines & Client Style Guide.

2026-07-21 (latest): **Phase 2 signed off. Step 3.1 complete — 59 page briefs written.** 57 editorial briefs map 1:1 to sitemap v5, plus two template briefs covering the 26 programmatic area pages and the 15 staff profiles. A house standard (`_BRIEF_STANDARD.md`) fixes the frontmatter schema, required sections, brand voice baseline, AHPRA guardrails, CTA hierarchy and cannibalisation rules, so briefs written by four parallel agents stayed consistent. An independent adversarial verification pass came back clean on coverage, frontmatter, slug accuracy, internal link integrity, Education Hub salvage coverage (12/12 URLs assigned to a destination), title/meta limits and primary-keyword collisions; 11 defects were found and fixed, mostly manufactured brand-prefix keywords on utility pages and a homepage/sports-hub collision on `sports injury clinic`.

One blocker surfaced that the architecture had not caught: **the June 2026 GBP optimisation plan states Bacchus Marsh delivers osteopathy and telehealth only**, and instructs that Physiotherapist and Chiropractor categories not be added — which contradicts sitemap v5 giving that clinic chiro as its lead modality and a P1 physiotherapy service×location page. If the GBP plan is current, two of the six approved service×location pages are cancelled and the location page's primary keyword drops from 320 to 110. The briefs are written and gated with build-stop callouts rather than guessing.

Briefing also surfaced six corrections owed back to the sitemap and blog schedule (two blog posts targeting the same primaries as their condition pages, a dead `/conditions/neck-pain-headaches/` link target, a `hypermobility physio` collision, the Back Pain primary disagreement between sitemap and keyword map, and six live URLs missing from the 301 map including `/chiropractic-in-newport/`). Full detail, writing order, and the twelve client inputs blocking copy are in `seo/page_briefs/README.md`.

Recommendation carried forward: three of the eleven staged blog redirects (shin splints 5,400, frozen shoulder 2,400, hip flexor 2,900) should probably never execute rather than merely be deferred — each trades a stronger asset for a weaker one. And the GSC 403 has moved from inconvenient to blocking: it gates every staged redirect's sequencing, the First Trimester viability call, and rewriting the foot pain page (14,800/mo) blind.

2026-07-21: Sitemap v5 — three decisions closed. (1) Staff CPT retained as 15 dedicated pages; /about/team/ demoted to an index. (2) Education hub retired, 12 URLs 301'd, copy to be salvaged into condition pages. (3) Six service×location pages approved on suburb keyword data, replacing the idea of a full 3×10 matrix. The matrix was rejected on evidence: Exercise Physiology and Dietetics return zero suburb volume at all three clinics, Myotherapy only registers at Newport (70). Viable cells are BM physio 260, AV physio 170, BM osteo 110, and three at 90 (AV chiro, NP osteo, NP chiro). Clinical Pilates rejected despite 140–210 volumes — studio/reformer intent, not clinical referral. Service boxes on location pages link locally where a page exists, else fall through to the Melbourne service page. Build total 77 → 98 pages. Two caveats logged: these SERPs are local-pack heavy so the pages feed GBP relevance more than organic position, and 'physio newport' (390) may be splitting with Newport NSW — needs GSC validation, which is still blocked by the 403.

2026-07-21 (later): Full sitemap-index audit run. The site has SEVEN sitemaps; the v2 audit read page-sitemap.xml only and took its 56 URLs as the whole site. Live total is ~218 URLs against 77 in the architecture. Missing entirely: staff CPT (15 practitioner pages), education_hub CPT (12, four of which cannibalise planned Sports Injuries children), category archives (30), and locations.kml. Blog is 76 live posts, not the 5 the architecture scoped. Sign-off placed on hold pending the two hierarchy decisions (staff, education hub). Side benefit: the staff sitemap closes the "team size and practitioners" open question — roster is 15, not 1. Full detail in seo/live-site-audit-v4.md.

2026-07-21: Sitemap v4. The 26 programmatic area pages (proximity/suburb pages under /locations/) were missing from v1–v3 because they are absent from the live page-sitemap.xml, which the v2 audit used as its source of truth. Michael confirmed they are a deliberate programmatic SEO play and must migrate as-is. Two redirects removed that would have killed live pages: /locations/maidstone/ → ascot-vale and /locations/altona-north/ → newport. Both are area pages, not closed clinics. Build total 51 → 77 pages. Area pages are excluded from the Phase 3 hand-written copy scope (template + content collection, one pass). ACTION: re-crawl the live site before Phase 3 copy briefs — if the area pages were missing from page-sitemap.xml, other groups may be too.

2026-06-11 (later): Condition grouping restructured per Michael's request, backed by a second keyword pull. Sports Injuries became a hub with 6 children (ACL, Concussion, Ankle Sprain, Tennis Elbow, Tendonitis, Rib Sprain); Gym Injuries + Soft Tissue merged into it (50/170 per month, too thin). "General soreness" hub tested and rejected — pain pages are the site's biggest head terms and stay standalone. Neck/Headaches un-merged. Sitemap now 51 pages (v3). Proposed sitemap Google Sheet created in website-new/ Drive folder (v3; the first version sheet is superseded and can be deleted). Sign-off still pending.

2026-06-11: Phase 2 Step 2.1 executed. Keyword finding: each location has a different lead modality (Ascot Vale osteo 390, Newport physio 390, Bacchus Marsh chiro 320). Live-site audit added Myotherapy (480/mo — missing from profile), Dietetics, Paediatric Osteo, pregnancy cluster, and 12 condition pages to the architecture (44 pages total). Awaiting Michael sign-off, then Phase 3 page briefs.

2026-06-11: Project kicked off in website-new/ (rebuild of alphasportsmed.com.au). PM doc created via wp-project-manager. Phase 1 closed: campaign-playbook.md (client root) is the Phase 1 deliverable; no separate website brief or Superpowers spec for this build. Asset collection items deferred to Phase 4. Open item carried forward: playbook "Open Questions / Gaps to Fill" (locations list, full service roster, certifications) to confirm with Ashton & Will — several feed directly into Phase 2 site architecture.

---

## Continuation Prompt

Copy-paste this into a new session to pick up the project:

```
I'm continuing the Alpha Sports Medicine Astro website build (rebuild, project folder: Alpha Sports Med/astro-new/). Read these files in order:

1. ../client_profile.md
2. ../campaign-playbook.md
3. website-project-management.md
4. seo/sitemap.md (v5)
5. seo/live-site-audit-v4.md
6. seo/keyword_map.md

After reading, tell me which phase and step we're up to. The architecture is at 98 pages and three blocking decisions are closed (staff CPT retained, education hub retired, 6 service × location pages approved). Two items remain before sign-off: (a) scope decision on the 11 treatment-intent blog posts, (b) practitioner disciplines and qualifications from the client. Next major step is Phase 3, Step 3.1 — page briefs.
```
