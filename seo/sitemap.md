# Sitemap — Alpha Sports Medicine Rebuild

**Date:** 2026-07-21 (v5 — staff CPT retained (15), 6 service×location pages added, education hub retired. v4 — 26 programmatic area pages added; two erroneous redirects removed. v3 — condition grouping restructured. v2 — reconciled against live page-sitemap.xml)
**Total pages in new build:** 98 (57 editorial + 15 staff + 26 programmatic area pages, excluding blog posts)

## Grouping Logic (data-backed, see keyword_map.md)

- **Sports Injuries is a true hub** — the hub term has demand (sports injuries 720 + sports injury clinic 590 + sports injury physio 320) and six strong children sit under it. Gym Injuries (50/mo) and Soft Tissue Injuries (170/mo) are too thin to stand alone and merge into the hub page.
- **"General soreness" hub rejected** — no searchable head term exists (general muscle soreness 10/mo). The pain pages ARE the head terms (knee 12,100, back 10,000, shoulder 8,100, neck 6,600, plantar fasciitis 90,500). They stay standalone, grouped in the nav menu only.
- **Pregnancy hub confirmed** (pregnancy physio 1,600 + pregnancy back pain 1,900).
- **Neck/Headaches un-merged** — headache treatment 720 and neck pain treatment 590 are independently viable with separate existing equity.
- **Running Injuries stays a standalone flagship hub** (strategic: Running Assessment + RunWest + blog cluster) despite modest volume.

## Page Hierarchy

### Core (8)
| Page | URL | Primary Keyword | Priority |
|------|-----|-----------------|----------|
| Home | / | alpha sports medicine (brand) | Primary |
| About | /about/ | about alpha sports medicine | Secondary |
| Meet the Team | /about/team/ | osteopaths & physios melbourne west | Secondary |
| Qualifications & Training | /about/qualifications/ | (E-E-A-T trust page) | Secondary |
| What We Support | /about/community/ | (community — playbook pillar 4) | Tertiary |
| Contact | /contact/ | contact alpha sports medicine | Primary |
| Blog | /blog/ | — | Secondary |
| Privacy Policy | /privacy-policy/ | — | Utility |

### Services (11)
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Services hub | /services/ | allied health services melbourne | — |
| Osteopathy | /services/osteopathy/ | osteopath melbourne | 590 |
| Physiotherapy | /services/physiotherapy/ | sports physio melbourne | 320 |
| Chiropractic | /services/chiropractic/ | chiropractor melbourne | est. |
| Exercise Physiology | /services/exercise-physiology/ | exercise physiology melbourne | 390 |
| Clinical Pilates | /services/clinical-pilates/ | clinical pilates melbourne | 90 |
| Strength & Conditioning | /services/strength-conditioning/ | strength and conditioning coach melbourne | 30 |
| Myotherapy | /services/myotherapy/ | myotherapy melbourne | 480 |
| Dietetics | /services/dietetics/ | dietitian melbourne west (est.) | est. |
| Paediatric Osteopathy | /services/paediatric-osteopathy/ | paediatric osteopath melbourne (est.) | est. |
| Telehealth / Online Consults | /services/online-consults/ | online physio consultation (est.) | est. |

### Locations — Clinics (4)

These are the three physical premises plus the hub. Full location pages with NAP, hours, practitioners, parking, and location-specific copy.

| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Locations hub | /locations/ | alpha sports medicine locations | — |
| Ascot Vale | /locations/ascot-vale/ | osteopath ascot vale | 390 |
| Newport | /locations/newport/ | osteopath newport | 90 |
| Bacchus Marsh | /locations/bacchus-marsh/ | osteopath bacchus marsh | 110 |

> **Osteo-led architecture (July 2026):** every main location page targets `osteopath [suburb]`. The higher-volume modality terms move to child pages below. See `SEO-architecture-change-osteo-led-locations.md`.

### Locations — Service × Location Pages (6)

Approved 2026-07-21 on suburb-level keyword data. Built only where real demand exists — the full 3×10 matrix was rejected because Exercise Physiology and Dietetics return **zero** suburb volume at all three clinics, and Myotherapy only registers at Newport (70).

**Osteo-led (July 2026):** osteopathy is now covered on each main location page, so the osteo×location svcloc pages are retired (absorbed into the main pages). These children cover the viable *other* modalities.

| Page | URL | Primary Keyword | Vol | Priority |
|------|-----|-----------------|-----|----------|
| Physiotherapy — Newport | /locations/newport/physiotherapy/ | physio newport | 390 | High |
| Physiotherapy — Ascot Vale | /locations/ascot-vale/physiotherapy/ | physio ascot vale | 170 | High |
| Chiropractic — Ascot Vale | /locations/ascot-vale/chiropractic/ | chiropractor ascot vale | 90 | Medium |
| Chiropractic — Newport | /locations/newport/chiropractic/ | chiropractor newport | 90 | Medium |
| Physiotherapy — Bacchus Marsh | /locations/bacchus-marsh/physiotherapy/ | physio bacchus marsh | 260 | **Confirm physio offered at BM** |

Retired (absorbed into main location page): Osteopathy — Newport, Osteopathy — Bacchus Marsh. Not built (service not offered): Chiropractic — Bacchus Marsh.

**Service box linking rule (location pages):** each service box links to the local service×location page *where one exists*; otherwise it falls through to the Melbourne service page. No empty pages built for link consistency.

- Ascot Vale → local for Physio + Chiro (osteo on main page); Melbourne for Myotherapy, EP, Dietetics, Pilates, S&C, Paediatric, Telehealth
- Newport → local for Physio + Chiro (osteo on main page); Melbourne for the rest
- Bacchus Marsh → osteo on main page + Telehealth; Physio child only if confirmed offered; no chiro (not offered)

**Not built — Clinical Pilates.** Suburb volumes look tempting (Ascot Vale 170, Newport 210, Bacchus Marsh 140) but the intent is studio/reformer class, not clinical pilates on referral. Different search, different buyer. Decision 2026-07-21.

**Content differentiation requirement.** These pages are only defensible if they carry the named practitioners delivering that modality at that clinic (pulled from the Staff CPT), plus site-specific rooms, equipment, parking and local club links. A suburb name swapped into a template will be treated as doorway content.

**Caveats carried forward:**
- These SERPs are local-pack heavy. The pages compete for below-pack organic and feed GBP relevance; do not model them on Melbourne-term behaviour.
- `physio newport` (390) may be splitting with Newport NSW. Validate in GSC before treating the local number as final — GSC MCP access is still 403 and needs resolving.

### Locations — Area Pages (26, programmatic)

Programmatic proximity pages for suburbs Alpha serves but does not have premises in. All exist on the live site and carry equity — **migrate as-is, do not redirect**. Each maps to its nearest clinic for the booking CTA and NAP block. Template-driven: one Astro template, one content collection, 26 entries.

**Serving Ascot Vale (8)**
| Suburb | URL |
|--------|-----|
| Maribyrnong | /locations/maribyrnong/ |
| Avondale Heights | /locations/avondale-heights/ |
| Maidstone | /locations/maidstone/ |
| Footscray | /locations/footscray/ |
| West Footscray | /locations/west-footscray/ |
| Braybrook | /locations/braybrook/ |
| Sunshine | /locations/sunshine/ |
| Deer Park | /locations/deer-park/ |

**Serving Newport (12)**
| Suburb | URL |
|--------|-----|
| Seaholme | /locations/seaholme/ |
| Laverton North | /locations/laverton-north/ |
| Altona Meadows | /locations/altona-meadows/ |
| Altona | /locations/altona/ |
| Altona North | /locations/altona-north/ |
| Williamstown | /locations/williamstown/ |
| Williamstown North | /locations/williamstown-north/ |
| South Kingsville | /locations/south-kingsville/ |
| Spotswood | /locations/spotswood/ |
| Yarraville | /locations/yarraville/ |
| Point Cook | /locations/point-cook/ |
| Port Melbourne | /locations/port-melbourne/ |

**Serving Bacchus Marsh (6)**
| Suburb | URL |
|--------|-----|
| Darley | /locations/darley/ |
| Maddingley | /locations/maddingley/ |
| Merrimu | /locations/merrimu/ |
| Hopetoun Park | /locations/hopetoun-park/ |
| Parwan | /locations/parwan/ |
| Pentland Hills | /locations/pentland-hills/ |

### Conditions (25)

**Hub:** /conditions/ — conditions we treat

**Running cluster (flagship, standalone):**
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Running Injuries | /conditions/running-injuries/ | running physio melbourne | 140 (+ running injuries 170) |

**Sports Injuries silo (hub + 6 children):**
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Sports Injuries (hub) | /conditions/sports-injuries/ | sports injury clinic | 590 (+720 +320) |
| ACL Injury | /conditions/sports-injuries/acl-injury/ | acl injury treatment | 1,300 (acl tear 4,400 info) |
| Concussion | /conditions/sports-injuries/concussion/ | concussion treatment | 3,600 |
| Ankle Sprain | /conditions/sports-injuries/ankle-sprain/ | ankle sprain treatment | 4,400 |
| Tennis Elbow | /conditions/sports-injuries/tennis-elbow/ | tennis elbow treatment | 8,100 (head term 27,100) |
| Tendonitis & Tendinopathy | /conditions/sports-injuries/tendonitis-tendinopathy/ | tendonitis treatment | 1,000 |
| Rib Sprain | /conditions/sports-injuries/rib-sprain/ | rib sprain | 320 |

*Absorbed into hub as sections: Gym Injuries (50/mo), Soft Tissue Injuries (170/mo).*

**Pain Areas (standalone pages; grouped in nav only):**
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Back Pain | /conditions/back-pain/ | back pain treatment | 1,300 (head 10,000) |
| Neck Pain | /conditions/neck-pain/ | neck pain treatment | 590 (head 6,600) |
| Headaches & Migraines | /conditions/headaches/ | headache treatment | 720 |
| TMJ & Jaw Pain | /conditions/tmj-jaw-pain/ | tmj treatment melbourne | 110 |
| Shoulder Pain | /conditions/shoulder-pain/ | shoulder pain treatment | 720 (head 8,100) |
| Knee Pain | /conditions/knee-pain/ | knee pain treatment | 2,400 (head 12,100) |
| Hip Pain | /conditions/hip-pain/ | hip pain treatment | 80 (blog: hip flexor pain 2,900) |
| Hand & Wrist Pain | /conditions/hand-wrist-pain/ | hand pain | 1,000 (+ wrist pain treatment 480) |
| Foot Pain & Plantar Fasciitis | /conditions/foot-pain-plantar-fasciitis/ | plantar fasciitis treatment | 14,800 (head 90,500) |

**Women's Health silo (hub + 4):**
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Pregnancy-Related Pain (hub) | /conditions/pregnancy-pain/ | pregnancy physio | 1,600 (+ pregnancy back pain 1,900) |
| First Trimester | /conditions/pregnancy-pain/first-trimester/ | (long-tail trimester terms) | — |
| Second Trimester | /conditions/pregnancy-pain/second-trimester/ | — | — |
| Third Trimester | /conditions/pregnancy-pain/third-trimester/ | — | — |
| Postpartum Pain Relief | /conditions/postpartum-pain/ | postpartum back pain | 260 |

**Complex Conditions (2):**
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Hypermobility & EDS | /conditions/hypermobility/ | hypermobility physiotherapy | 170 (head 12,100; EDS 33,100 info) |
| Invisible Illnesses | /conditions/invisible-illnesses/ | invisible illness | 260 |

### Staff (15, CPT)

**Decision 2026-07-21: keep as a dedicated CPT.** Confirmed by Michael. 15 indexable practitioner profiles are strong E-E-A-T assets and already carry equity. Collapsing them into a single `/about/team/` page would discard 15 ranking pages and the author authority behind them.

`/about/team/` becomes an index that links out to the individual profiles, not a replacement for them.

Existing slugs migrate unchanged (no redirect risk).

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
| Alexandra Clay (APD) | /staff/alexandra-clay/ |

**Required per profile:** discipline, clinic(s), AHPRA registration, qualifications, special interests. Each profile links to its modality service page and its clinic location page. Each service×location page pulls the matching practitioners. Still to confirm with the client: discipline and qualifications per person.

### Specialty & Community (3)
| Page | URL | Primary Keyword | Vol |
|------|-----|-----------------|-----|
| Running Assessment | /running-assessment/ | running gait analysis | 170 |
| RunWest Run Club | /runwest-run-club/ | (brand/community) | — |
| Discover Newport | /discover-newport/ | (proximity content hub) | — |

## Navigation Structure

### Primary Navigation
- Conditions (mega-dropdown, 4 groups):
  - **Sport & Activity:** Running Injuries, Sports Injuries (+ children), Running Assessment
  - **Pain Areas:** Back, Neck, Headaches, TMJ, Shoulder, Knee, Hip, Hand & Wrist, Foot
  - **Women's Health:** Pregnancy-Related Pain, Postpartum
  - **Complex Conditions:** Hypermobility & EDS, Invisible Illnesses
- Services (dropdown, 10)
- Running Assessment
- Locations (dropdown: Ascot Vale, Newport, Bacchus Marsh — clinics only; area pages are not in the nav, reached via the Locations hub and footer)
- About
- Book Now (CTA → Cliniko)

### Footer Navigation
- All services, all locations, top conditions
- About, Team, Community, Blog, Contact, Privacy
- NAP block per location (GBP consistency signals)

## Internal Linking Strategy

1. **Sports silo**: hub ↔ 6 children with breadcrumbs; children cross-link by sport (AFL → ACL/concussion/ankle).
2. **Conditions → Services**: each condition links its 2–3 treating modalities.
3. **Conditions → Locations**: 3-location booking block on every condition page.
4. **Locations → Services**: lead with locally dominant modality (Ascot Vale = osteo, Newport = physio, Bacchus Marsh = chiro).
5. **Running cluster**: Running Injuries ↔ Running Assessment ↔ RunWest ↔ running blog posts.
6. **Pain pages**: sibling links between adjacent areas (back ↔ hip, neck ↔ headaches ↔ TMJ).
7. **Women's health**: pregnancy hub ↔ trimesters ↔ postpartum ↔ Paediatric Osteopathy service.
8. **Hypermobility**: ↔ Invisible Illnesses ↔ hypermobility blog cluster.
9. **Blog → Conditions/Services** per content plan mapping.

## 301 Redirect Map (old → new)

| Old URL | New URL |
|---------|---------|
| /our-services/ | /services/ |
| /osteopathy/ | /services/osteopathy/ |
| /physiotherapy/ | /services/physiotherapy/ |
| /chiropractic-care/ | /services/chiropractic/ |
| /exercise-physiology/ | /services/exercise-physiology/ |
| /exercise-rehab/ | /services/exercise-physiology/ |
| /clinical-pilates/ | /services/clinical-pilates/ |
| /myotherapy/ | /services/myotherapy/ |
| /dietetics/ | /services/dietetics/ |
| /paediatrics-osteo-for-your-baby/ | /services/paediatric-osteopathy/ |
| /sports-therapy/ | /services/physiotherapy/ |
| /online-consults/, /online-consultation/ | /services/online-consults/ |
| /sporting-injuries/ | /conditions/sports-injuries/ |
| /gym-injuries/ | /conditions/sports-injuries/ (merged) |
| /soft-tissue-injuries/ | /conditions/sports-injuries/ (merged) |
| /acl-rupture/ | /conditions/sports-injuries/acl-injury/ |
| /concussion-management/ | /conditions/sports-injuries/concussion/ |
| /ankle-sprain/ | /conditions/sports-injuries/ankle-sprain/ |
| /tennis-elbow/ | /conditions/sports-injuries/tennis-elbow/ |
| /tendonitis-and-tendinopathy/ | /conditions/sports-injuries/tendonitis-tendinopathy/ |
| /rib-sprain/ | /conditions/sports-injuries/rib-sprain/ |
| /running-injuries/ | /conditions/running-injuries/ |
| /back-pain/ | /conditions/back-pain/ |
| /neck-pain/ | /conditions/neck-pain/ |
| /headache-treatment/ | /conditions/headaches/ |
| /shoulder-pain/ | /conditions/shoulder-pain/ |
| /hip-pain/ | /conditions/hip-pain/ |
| /hand-pain/ | /conditions/hand-wrist-pain/ |
| /foot-pain-and-plantar-fasciitis/ | /conditions/foot-pain-plantar-fasciitis/ |
| /hypermobility/ | /conditions/hypermobility/ |
| /invisible-illnesses/ | /conditions/invisible-illnesses/ |
| /pregnancy-related-pain/ | /conditions/pregnancy-pain/ |
| /pregnancy-pain-first|second|third-trimester/ | /conditions/pregnancy-pain/[trimester]/ |
| /postpartum-pain-relief/ | /conditions/postpartum-pain/ |
| /about-us/ | /about/ |
| /meet-the-team/ | /about/team/ |
| /our-qualifications-and-training/ | /about/qualifications/ |
| /what-we-support/ | /about/community/ |
| /yarraville-festival/ | /about/community/ |
| /contact-us/ | /contact/ |
| /blog-archive/ | /blog/ |
| /osteopath-in-ascot-vale/ | /locations/ascot-vale/ |
| /media-room-bacchus-marsh/ | /locations/bacchus-marsh/ |
| /locations/[26 area pages] | **No redirect — migrate as-is** (programmatic proximity pages, see Locations above) |
| /staff/[15 profiles] | **No redirect — migrate as-is** (CPT retained, decision 2026-07-21) |

### Education Hub — retired (decision 2026-07-21)

Confirmed by Michael. The CPT is legacy, duplicates two newer structures, and four articles cannibalise planned condition pages. Retire the type; 301 every URL.

| Old URL | New URL |
|---|---|
| /education-hub/ (landing) | /conditions/ |
| /education_hub/acl-rupture/ | /conditions/sports-injuries/acl-injury/ |
| /education_hub/rolled-ankle/ | /conditions/sports-injuries/ankle-sprain/ |
| /education_hub/sharp-pain-rib-sprain/ | /conditions/sports-injuries/rib-sprain/ |
| /education_hub/what-is-tennis-elbow/ | /conditions/sports-injuries/tennis-elbow/ |
| /education_hub/3-ways-to-stay-safe-on-the-tennis-court/ | /conditions/sports-injuries/tennis-elbow/ |
| /education_hub/the-best-physio-exercises-for-lower-back-pain/ | /conditions/back-pain/ |
| /education_hub/strain-vs-sprain-whats-the-difference/ | /conditions/sports-injuries/ |
| /education_hub/rest-is-not-always-best/ | /conditions/sports-injuries/ |
| /education_hub/difference-between-a-physiotherapist-and-an-exercise-physiologist/ | /services/exercise-physiology/ |
| /education_hub/fascial-connections/ | /services/osteopathy/ |
| /education_hub/telehealth-why-its-here-to-stay/ | /services/online-consults/ |

**Salvage before deleting:** several of these carry usable explanatory copy. Harvest into the destination condition pages during Phase 3 rather than discarding.

### Treatment-intent blog posts — SCOPE TO CONFIRM

A second tier of duplication sits in the blog. These are treatment-intent posts that now collide with planned condition pages, and the same kill-and-redirect logic arguably applies. **Not actioned — awaiting Michael's tick.**

| Blog post | Would redirect to |
|---|---|
| /tennis-elbow-treatment/ | /conditions/sports-injuries/tennis-elbow/ |
| /frozen-shoulder-treatment/ | /conditions/shoulder-pain/ |
| /shin-splints-treatment-newport/ | /conditions/running-injuries/ |
| /chiropractor-for-headaches/ | /conditions/headaches/ |
| /types-of-headaches/ | /conditions/headaches/ |
| /recovery-for-sprained-ankle/ + /treatment-and-rehab-for-ankle-sprains/ | /conditions/sports-injuries/ankle-sprain/ |
| /osteopathy-for-foot-pain/ | /conditions/foot-pain-plantar-fasciitis/ |
| /hand-pain-from-bouldering-and-climbing/ | /conditions/hand-wrist-pain/ |
| /postpartum-recovery/ | /conditions/postpartum-pain/ |
| /osteopathy-for-women-during-pregnancy/ | /conditions/pregnancy-pain/ |
| /hypermobility-and-running/ | /conditions/hypermobility/ |

Note the tension: some are recent, well-performing posts (IT band, hip flexor, frozen shoulder were published 2026). Redirecting a strong post into a page that does not exist yet trades a known asset for an unknown one. Recommend redirecting only *after* the destination condition page is live and indexed, not at launch.
| /test/, /sitemap/ | 410 / drop |
| Newport local content (6 pages) | Keep slugs or move under /discover-newport/ — Phase 3 decision |

## Validation Notes

- All live page-sitemap URLs have a disposition (keep/merge/redirect/drop). The v2 audit read 56 URLs from page-sitemap.xml; the 26 area pages were not in that file and were added manually in v4 — the live locations count is 29 (3 clinics + 26 areas). **Re-crawl before launch to confirm no other page groups were missed by the same gap.**
- Area pages migrate as-is with no URL change, so they carry no redirect risk. Their existing titles follow a "[Modifier] Osteopathy & Physiotherapy Clinic in/near/serving [Suburb]" pattern — inconsistent modifiers and preposition choice, worth normalising in Phase 3 without touching slugs.
- No two pages share a primary keyword. Sports children take treatment intent; blog takes informational (tennis elbow, ankle sprain split explicitly).
- Max depth 3 (sports children + trimester pages) — acceptable with breadcrumbs and hub linking.
- Gym Injuries and Soft Tissue merged on data (50 and 170/mo); their old URLs 301 to the sports hub.
- Knee Pain is the only major NEW page with no existing equity (head term 12,100/mo) — prioritise in Phase 3.
