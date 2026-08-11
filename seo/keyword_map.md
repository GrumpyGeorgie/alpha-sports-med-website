# Keyword Map — Alpha Sports Medicine Rebuild

**Date:** 2026-06-11
**Data source:** Keywords Everywhere (AU, AUD), June 2026 + prior research (seo/2026-02, seo/2026-03)
**Locations in scope:** Ascot Vale, Newport, Bacchus Marsh

## Key Finding

**Architecture decision (July 2026): main location pages are osteo-led.** Alpha is an osteo-led business, so every main `/locations/[suburb]/` page targets **osteopath [suburb]** (the flagship modality and the GBP primary category). Other modalities get their own `/locations/[suburb]/[modality]/` child pages. This standardises Newport and Bacchus Marsh onto the Ascot Vale pattern. See `SEO-architecture-change-osteo-led-locations.md`.

Trade-off, accepted: the higher-volume modality term at Newport (physio 390) and Bacchus Marsh (chiro, N/A — not offered) moves off the flagship page onto a child page. The main page targets the osteo term instead.

| Location | Main page (osteo-led) | Volume | Child pages (other modalities) |
|----------|----------|--------|-------|
| Ascot Vale | osteopath ascot vale | 390 | physio (170+170), chiro (90) |
| Newport | osteopath newport | 90 | physio newport (390), chiropractor (90) |
| Bacchus Marsh | osteopath bacchus marsh | 110 | physio (260) — confirm offered; no chiro (not offered) |

"Near me" terms carry the real volume (physio near me 90,500; chiropractor near me 40,500; osteopath near me 12,100; exercise physiologist near me 4,400) — these are won through GBP + location page proximity signals, not direct targeting.

## Homepage
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| alpha sports medicine | Primary (brand) | Navigational | — | — |
| sports medicine clinic melbourne | Secondary | Commercial | 50 | 0.31 |
| sports injury clinic | Secondary | Commercial | 590 | 0.17 |

## Service Pages

### Osteopathy
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| osteopath melbourne | Primary | Commercial | 590 | 0.35 |
| osteopath near me | Supporting (GBP) | Commercial | 12,100 | 0.25 |
| osteopathy | Secondary | Informational | high | — |

### Physiotherapy
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| sports physio melbourne | Primary | Commercial | 320 | 0.20 |
| physio near me | Supporting (GBP) | Commercial | 90,500 | 0.24 |
| physiotherapy melbourne west | Secondary | Commercial | est. low | — |

### Chiropractic
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| chiropractor melbourne | Primary | Commercial | est. med | — |
| chiropractor near me | Supporting (GBP) | Commercial | 40,500 | 0.56 |
| chiropractic care | Secondary | Informational | est. med | — |

### Exercise Physiology & Rehab
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| exercise physiology melbourne | Primary | Commercial | 390 | 0.57 |
| exercise physiologist near me | Supporting (GBP) | Commercial | 4,400 | 0.53 |
| exercise rehabilitation | Secondary | Informational | est. low | — |

### Clinical Pilates
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| clinical pilates melbourne | Primary | Commercial | 90 | 0.27 |
| pilates newport | Cross-link to Newport | Commercial | 210 | 0.28 |
| pilates ascot vale | Cross-link to Ascot Vale | Commercial | 170 | 0.32 |
| pilates bacchus marsh | Cross-link to Bacchus Marsh | Commercial | 140 | 0.01 |

### Strength & Conditioning
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| strength and conditioning coach melbourne | Primary | Commercial | 30 | 0.20 |

Low volume — this is a conversion/differentiation page (the integration story from the playbook), not a discovery page. SEO value comes from internal links and brand.

## Location Pages

### Ascot Vale
| Keyword | Type | Intent | Volume | Competition |
|---------|------|--------|--------|-------------|
| osteopath ascot vale | Primary | Commercial | 390 | 0.12 |
| physio ascot vale / physiotherapy ascot vale | Secondary | Commercial | 170 + 170 | 0.29 |
| chiropractor ascot vale | Secondary | Commercial | 90 | 0.26 |
| remedial massage ascot vale | Tertiary | Commercial | 70 | 0.21 |

### Newport
| Keyword | Type | Intent | Volume | Competition | Owned by |
|---------|------|--------|--------|-------------|----------|
| osteopath newport | Primary (main location page) | Commercial | 90 | 0.12 | /locations/newport/ |
| osteopath williamstown | Secondary (main page + Williamstown area page) | Commercial | 140 | — | /locations/newport/ |
| physio newport | Primary (child page) | Commercial | 390 | 0.10 | /locations/newport/physiotherapy/ |
| chiropractor newport | Primary (child page) | Commercial | 90 | 0.19 | /locations/newport/chiropractic/ |
| pilates newport | Cross-link only (studio intent, no page) | Commercial | 210 | 0.28 | /services/clinical-pilates/ |

### Bacchus Marsh
| Keyword | Type | Intent | Volume | Competition | Owned by |
|---------|------|--------|--------|-------------|----------|
| osteopath bacchus marsh | Primary (main location page) | Commercial | 110 | 0.11 | /locations/bacchus-marsh/ |
| physio bacchus marsh / physiotherapy bacchus marsh | Child page — **confirm physio is offered at BM** | Commercial | 260 + 260 | 0.26 | /locations/bacchus-marsh/physiotherapy/ |
| chiropractor bacchus marsh | **Not targeted — chiro not offered at Bacchus Marsh** | Commercial | 320 | 0.22 | — |
| pilates bacchus marsh | Cross-link only | Commercial | 140 | 0.01 | /services/clinical-pilates/ |

## Condition Pages (problem-led, per playbook strategy)

| Page | Primary keyword | Volume | Competition | Notes |
|------|-----------------|--------|-------------|-------|
| Running Injuries | running physio melbourne | 140 | 0.33 | Existing page equity (/running-injuries/); running injuries 170 (profile data) |
| Knee Pain | knee pain treatment | 2,400 | 1.00 | High comp nationally; win local pack + long-tail |
| Shoulder Pain | shoulder pain treatment | 720 | 0.88 | Existing /shoulder-pain/ equity |
| Back Pain | back pain treatment melbourne | 30 | 0.23 | Local intent; blog covers "lower back pain treatment" (1,600) informationally — no cannibalisation |
| Sports Injuries | sports injury clinic | 590 | 0.17 | Existing /sporting-injuries/ equity; low competition |
| Neck Pain & Headaches | neck pain treatment melbourne | 30 | 0.08 | Merged page (thin-page rule); headache treatment melbourne (40) secondary |
| TMJ & Jaw Pain | tmj treatment melbourne | 110 | 0.17 | Existing TMJ blog equity to consolidate |
| Hypermobility & EDS | hypermobility physiotherapy | 170 | 0.28 | Specialty niche; 33k/mo informational cluster feeds it (see seo/2026-03 research) |

## Specialty Page

| Page | Primary keyword | Volume | Competition | Notes |
|------|-----------------|--------|-------------|-------|
| Running Assessment | running gait analysis | 170 | — | Plus running assessment melbourne (40); existing /running-assessment/ equity |

## Condition Grouping Research (v3)

Tested whether condition pages should group under parent hubs. Verdict per cluster:

### Sports Injuries hub — SUPPORTED
| Keyword | Volume | Competition | Role |
|---------|--------|-------------|------|
| sports injuries | 720 | 0.03 | Hub head term |
| sports injury clinic | 590 | 0.17 | Hub primary |
| sports injury physio | 320 | 0.32 | Hub secondary |
| acl tear / acl injury treatment / acl rupture treatment | 4,400 / 1,300 / 720 | ≤0.09 | Child page |
| concussion treatment | 3,600 | 0.06 | Child page |
| ankle sprain treatment / ankle sprain | 4,400 / 2,900 | ≤0.11 | Child page |
| tennis elbow / tennis elbow treatment | 27,100 / 8,100 | ≤0.47 | Child page |
| tendonitis treatment / tendinopathy treatment | 1,000 / 260 | ≤0.12 | Child page |
| rib sprain | 320 | 0.00 | Child page |
| gym injuries | 50 | 0.01 | MERGE into hub (too thin) |
| soft tissue injury treatment | 170 | 0.02 | MERGE into hub (too thin) |

### "General soreness" hub — REJECTED
| Keyword | Volume | Competition | Verdict |
|---------|--------|-------------|---------|
| general muscle soreness | 10 | 0.02 | No hub demand |
| muscle soreness | 390 | 0.08 | Informational only |
| body aches and pains | 720 | 0.07 | Informational only |
| joint pain treatment | 210 | 0.99 | Saturated, low vol |
| knee pain (head) | 12,100 | 0.27 | Standalone page |
| back pain (head) | 10,000 | 0.19 | Standalone page |
| shoulder pain (head) | 8,100 | 0.12 | Standalone page |
| neck pain (head) | 6,600 | 0.16 | Standalone page |
| plantar fasciitis (head) | 90,500 | 0.26 | Standalone page |
| hand pain | 1,000 | 0.02 | Standalone page |

The pain terms are the largest head terms on the site — they outrank any candidate parent term by 10–100x. Standalone pages, grouped in nav only.

### Pregnancy hub — SUPPORTED (existing structure)
| Keyword | Volume | Competition |
|---------|--------|-------------|
| pregnancy physio | 1,600 | 0.20 |
| pregnancy back pain | 1,900 | 0.03 |
| pregnancy pain relief | 320 | 0.48 |
| pubic symphysis pain pregnancy | 260 | 0.01 |
| postpartum back pain | 260 | 0.01 |
| pregnancy osteopath | 260 | 0.18 |

### Neck/Headaches merge — REVERSED
headache treatment (720, comp 0.22) and neck pain treatment (590) are both independently viable with separate live-page equity. Two pages.

## Additional Pages from Live-Site Audit (v2)

Reconciled against page-sitemap.xml — these existing pages join the architecture:

| Page | Primary keyword | Volume | Notes |
|------|-----------------|--------|-------|
| Myotherapy | myotherapy melbourne | 480 | Higher volume than several core services — was missing from client profile |
| Dietetics | dietitian melbourne west | est. | New service since profile written |
| Paediatric Osteopathy | paediatric osteopath melbourne | est. | Women's health cluster |
| Tennis Elbow | tennis elbow treatment | 8,100 | Page takes commercial intent; planned blog post becomes supporting content |
| Ankle Sprain | ankle sprain treatment | 4,400 | Same split |
| Gym Injuries, ACL, Hip, Hand, Foot/Plantar, Rib, Tendonitis, Soft Tissue, Concussion, Invisible Illnesses | various | est. | Existing equity preserved; volumes to verify in Phase 3 briefs |
| Pregnancy cluster (5 pages) | pregnancy pain relief terms | est. | Existing trimester structure retained |

## Service-Area Opportunities (not in initial build — Month 2+ overlay candidates)

| Keyword | Volume | Notes |
|---------|--------|-------|
| physio essendon | 880 | No clinic; overlay/neighbourhood page candidate |
| physio moonee ponds | 590 | Same |
| osteopath essendon | 260 | Same |
| osteopath moonee ponds | 140 | Same |
| osteopath williamstown | 140 | Existing LP set covers these for paid |

## Cannibalisation Guards

- Condition pages target treatment/local intent; blog posts target informational intent (the 2026-02 12-post plan keywords like "shin splints treatment" point at blog, internal-linked up to condition pages).
- "Osteo vs chiro" / "physio vs chiro" comparison content stays on blog, linking to all three service pages.
- Each location page owns its suburb terms exclusively; service pages stay suburb-agnostic (Melbourne-level).
