# Page Briefs — Alpha Sports Medicine Rebuild

**Phase 3, Step 3.1 — complete 2026-07-21**
**59 briefs:** 57 editorial pages (1:1 with sitemap v5) + 2 templates covering the 26 programmatic area pages and the 15 staff CPT profiles.

House style: `_BRIEF_STANDARD.md`. Read it before writing any page.
Architecture: `../sitemap.md` (v5) · Keywords: `../keyword_map.md` · Blog: `../blog_schedule.md`

## Verification status

Verified by an independent adversarial pass. Clean on: coverage (57/57 + 2 templates), frontmatter (59/59 complete), slug accuracy (57/57 exact against sitemap v5), internal link integrity (no dead targets), Education Hub salvage coverage (12/12 URLs assigned), AHPRA notes (59/59 page-specific, no boilerplate), title tags (59/59 ≤60 chars), meta descriptions (59/59 ≤155 after fixes), primary keyword collisions (zero).

Eleven defects were found and fixed. One blocker remains open — see below.

## Writing order

Work P1 → P2 → P3. Within P1, homepage first (it sets the voice all other pages inherit), then Knee Pain (the only major new page with zero existing equity, head term 12,100/mo).

### P1 — 25 briefs
Home · Contact · Services hub · Osteopathy · Physiotherapy · Chiropractic · Myotherapy · Locations hub · Ascot Vale · Newport · Bacchus Marsh · Physio Bacchus Marsh · Physio Ascot Vale · Conditions hub · Sports Injuries · Knee Pain · Back Pain · Foot Pain & Plantar Fasciitis · Shoulder Pain · Tennis Elbow · Ankle Sprain · Hypermobility · Pregnancy Pain · Running Assessment · Staff profile template

### P2 — 22 briefs
About · Meet the Team · Exercise Physiology · Clinical Pilates · Dietetics · Paediatric Osteopathy · Osteo Bacchus Marsh · Chiro Ascot Vale · Osteo Newport · Chiro Newport · Running Injuries · ACL · Concussion · Tendonitis · Neck Pain · Headaches · Postpartum · First/Second/Third Trimester · Invisible Illnesses · Area page template

### P3 — 12 briefs
Qualifications · What We Support · Blog · Privacy Policy · Strength & Conditioning · Online Consults · TMJ · Hip Pain · Hand & Wrist · Rib Sprain · RunWest · Discover Newport

## Open blocker

**Bacchus Marsh service scope.** The June 2026 GBP optimisation plan states that clinic delivers osteopathy and telehealth only, and instructs that Physiotherapist and Chiropractor categories not be added. Sitemap v5 assigns chiropractic as the clinic's lead modality (320/mo) and commissions a P1 physiotherapy page there (260/mo). Both cannot be true.

If the GBP plan is current: `svcloc--bacchus-marsh-physiotherapy.md` is cancelled, `svcloc--bacchus-marsh-osteopathy.md` folds into the location page, and `location--bacchus-marsh.md` drops its primary from 320 to 110. That removes 2 of the 6 approved service×location pages. All three briefs are written and carry build-stop callouts. **Michael's decision required before Phase 3 writing starts on those pages.**

## Client inputs blocking copy

| Input | Blocks |
|---|---|
| Discipline, clinic and qualifications per practitioner | Staff template (15), Meet the Team, Qualifications, every service page's practitioner block, all 6 service×location pages |
| Confirmed per-clinic phone numbers | 3 location briefs, 3 LocalBusiness schema nodes, GBP NAP consistency. The 20 July audit consolidated to a single number but the per-location custom fields were still unfixed |
| Pelvic floor scope — internal assessment or referral-only | Postpartum, Third Trimester, Pregnancy hub |
| Running assessment protocol, duration and price | Running Assessment (the page's whole value proposition) |
| Is Strength & Conditioning a bookable service or programming inside existing appointments | Determines whether S&C is a service page or a capability section |
| Does Alpha run a GLA:D-style osteoarthritis program | Knee Pain (materially changes the page) |
| Does Alpha offer shockwave therapy | Tennis Elbow, Tendinopathy, Foot Pain |
| Any practitioner with concussion or vestibular training | Concussion §7–8 describe a scope of practice that must be verified before publishing |
| Written consent for Ashton's health information on a commercial page | Hypermobility (flagship page, lived-experience hero) |
| Is RunWest active, and what are its details | RunWest — zero source material exists in the project; if dormant, do not build |
| Accepted funding schemes per discipline (Medicare CDM, WorkCover, TAC, DVA, NDIS) | Every service page |
| Are the 5 Discover Newport child pages still accurate (2019-era listicles) | Discover Newport IA decision |

## Sitemap and schedule corrections needed

Found during briefing. These are upstream fixes to `../sitemap.md` and `../blog_schedule.md`:

1. **`blog_schedule.md` breaches the no-shared-primary rule twice** — it assigns `tennis elbow treatment` (8,100) and `ankle sprain treatment` (4,400) to blog posts, the same primaries as their condition pages. Retarget the posts to the informational head terms (`tennis elbow` 27,100, `ankle sprain` 2,900).
2. **Dead internal target** — `blog_schedule.md` points the headache-chiro post at `/conditions/neck-pain-headaches/`, a URL killed when the neck/headaches merge was reversed. Repoint to `/conditions/headaches/`.
3. **`hypermobility physio` (170) collision** — the scheduled "Hypermobility and Physio: Managing EDS" post targets the same term as the hypermobility page. Re-scope or drop the post.
4. **Back Pain primary disagreement** — `keyword_map.md` says `back pain treatment melbourne` (30); `sitemap.md` says `back pain treatment` (1,300). Briefs used the sitemap figure. Confirm.
5. **Six missing entries in the 301 map** — `/chiropractic-in-newport/` (carries Newport chiro equity), `/tmj-and-jaw-pain/` (if the blog consolidation is approved), `/category/osteopath/` and the other WP category archives, and three dated event pages (`/yarraville-festival-2025/`, `/fither-expo-october-2024/`, `/melbourne-marathon-flush-2025/` → `/about/community/`).
6. **Two live ankle posts** (`/recovery-for-sprained-ankle/`, `/treatment-and-rehab-for-ankle-sprains/`) both point at one destination. That duplication exists independently of the migration — consolidate before redirecting either.

## Recommendations carried into Phase 3

- **Three staged redirects should probably never execute, not merely be deferred:** shin splints (5,400/mo post → a 140/mo page), frozen shoulder (2,400, a performing 2026 asset), hip flexor (2,900). Each trades a stronger asset for a weaker one. Ankle, tennis elbow, foot and hand/wrist remain genuine 4–8 week GSC-verified deferrals.
- **First Trimester is the weakest page in the set.** No verified search term, reader isn't in buying mode, sits at depth 3. Its brief carries an explicit viability test, a six-month GSC review gate, and a documented fallback (fold all three trimesters into ~1,800 words of anchored hub sections, three 301s in). That call belongs to Michael, not to a silent Phase 3 decision.
- **Unclaimed informational head terms with no blog post:** `knee pain` (12,100), `plantar fasciitis` (90,500), `acl tear` (4,400), tendinopathy, concussion symptom/duration queries. Knee is the priority — it's the zero-equity page and a supporting post is its fastest route to authority.
- **Two Phase 4 component dependencies not in the standard component list:** a non-dismissible clinical alert block (concussion, rib, back, headaches, knee) and a knee region diagram.
- **Credential accuracy.** Exercise physiologists (ESSA), dietitians (APD) and myotherapists (association-based) are not AHPRA-registered. The site's trust architecture leans on registration, so every brief that touches these states the correct pathway rather than blanket-claiming AHPRA. Hold this line in copy.
- **Paediatric osteopathy is the highest-risk page on the site.** No colic, reflux, sleep or feeding claims; no parent testimonials at all; prominent "see your GP first". The live page should be audited as a standing compliance risk independent of the rebuild.

## GSC 403 — now blocking, not just inconvenient

The Search Console permission error blocks: sequencing every staged blog redirect (each needs verified position data), validating whether `physio newport` (390) splits with Newport NSW, knowing what the 26 area pages currently rank for before they're rewritten, the First Trimester viability call, and rewriting the foot pain page (14,800/mo) without knowing what the live page holds. Worth chasing before Phase 3 closes.
