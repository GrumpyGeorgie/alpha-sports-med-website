---
title: "Our Services"
slug: /services/
group: service
primary_keyword: "allied health services melbourne"
primary_volume: 0            # est. — hub/navigational
secondary_keywords: ["multidisciplinary clinic melbourne", "sports medicine services melbourne", "allied health melbourne west"]
search_intent: commercial
word_count_target: 900
template: service
existing_url: /our-services/
salvage_from: ["/our-services/"]
status: draft
priority: P1
---

## Purpose

Route the reader to the right discipline — or, better, relieve them of having to choose at all — while making the case that the integration of ten disciplines under one roof is the actual product.

## Reader

The modality-confused patient. Playbook pain point 5, verbatim: *"Do I need a physio? An osteo? A chiro? What's the difference?"* They have a problem, they've been told conflicting things by conflicting people, and they are trying to make a clinical triage decision they are not qualified to make. Some arrive with a fixed bias ("my insurance says physio") that is worth gently unpicking.

Five-second need: reassurance that they don't have to get this right on their own, and a fast route to whichever page they came for.

## Search Intent

Commercial and navigational. This is a hub, not a head-term play — the individual service pages carry the volume (osteopath melbourne 590, myotherapy melbourne 480, exercise physiology melbourne 390, sports physio melbourne 320). The hub's value is link equity distribution, topical clustering, and conversion of the undecided.

## Sections

### 1. Hero
**Component:** `hero-banner`
**Direction:** Lead with the relief, not the list. The strategic move of this whole site is problem → Alpha rather than problem → modality, and this page is where that argument gets made most explicitly.
**Key points:**
- H1
- Opening line to the effect of: you don't need to work out which one you need. That's what the first appointment is for.
- Ten disciplines, three clinics, one plan
- CTA: Book online · Not sure? Tell us what's going on → /contact/

### 2. Which one do I need?
**Component:** `problem-statement`
**Direction:** The most valuable block on the page. Answer the question honestly rather than selling: the modality matters far less than the practitioner's approach and the assessment. Use the playbook's own objection-handling language — the whole team assesses and treats very similarly, and many patients arrive with a bias and leave understanding that the label mattered less than they thought.
**Key points:**
- Do not write a comparison table declaring one discipline superior for a given condition — that is both clinically simplistic and an AHPRA comparative-claims risk
- Instead: explain that the first appointment is an assessment, and if you'd be better served by someone else on the team, we'll say so and arrange it
- Name the practical consequence: you can switch practitioners inside one plan without starting your story again, because notes and case discussion are shared
- Handle the "I can only see a physio" objection (insurance/plan constraints) with grace — confirm which disciplines the extras cover, don't argue

### 3. Hands-on treatment
**Component:** `service-cards`
**Direction:** Group the ten services into three honest buckets rather than listing them flat. This is more useful to the reader and it structures the page for AI extraction. Bucket one: the manual therapies.
**Key points:**
- Osteopathy (osteopath melbourne, 590), Physiotherapy (sports physio melbourne, 320), Chiropractic, Myotherapy (myotherapy melbourne, 480)
- One line each on what it's typically used for at Alpha, not a textbook definition
- Each card links to its service page

### 4. Movement, rehab and strength
**Component:** `service-cards`
**Direction:** Bucket two — the active side. This is Alpha's structural differentiator and should be given more space than a typical clinic gives it, because most clinics in the west simply don't run it in-house.
**Key points:**
- Exercise Physiology (390), Clinical Pilates (90), Strength & Conditioning (30)
- Frame explicitly: at most clinics this phase is a referral out, or it doesn't happen at all and you get discharged when the pain settles. Here it's the same building and the same plan.
- Note the S&C page is a differentiation page, not a discovery page — send readers there from here rather than expecting search to deliver them

### 5. Specialist and supporting care
**Component:** `service-cards`
**Direction:** Bucket three.
**Key points:**
- Dietetics, Paediatric Osteopathy, Online Consults / Telehealth
- Dietetics framing: fuelling, recovery and load tolerance, not weight loss
- Paediatric framing: babies and children, links into the pregnancy/postpartum cluster

### 6. How a plan comes together
**Component:** `approach-steps`
**Direction:** Show the integration working, since "multidisciplinary" is a word every clinic uses and almost none demonstrate. Walk one composite journey end to end.
**Key points:**
- 45-minute initial consult: history, assessment, explanation, plan
- Early phase: hands-on treatment to settle symptoms
- Middle phase: loaded rehab built around your actual week and training
- Later phase: strength and return to sport, with re-testing
- The handover between practitioners is internal, not a referral letter and a six-week wait
- Re-test at the end of every session

### 7. Rebates, referrals and fees
**Component:** `faq-accordion` or content block
**Direction:** Answer the money and access questions here so each service page doesn't have to repeat them at length.
**Key points:**
- No referral needed for any service — book directly
- Private health extras cover most services; HICAPS on site
- Medicare only under a GP-managed care plan, with limited sessions — state conditions precisely
- Director-tier fees exist and are priced deliberately; if fees are published, present them without apology, consistent with the clinic's stated pricing philosophy
- WorkCover/TAC/DVA/NDIS — only claim what is actually accepted

### 8. Three clinics
**Component:** `location-cards`
**Direction:** Service availability differs by site. Say which services run where rather than implying all ten are at all three.

### 9. CTA
**Component:** `cta-section`
**Direction:** Both paths — book, or describe the problem and let us route you.

## SEO Requirements

- **Title tag (≤60):** `Our Services | Allied Health & Sports Medicine, Melbourne`
- **Meta description (≤155):** `Osteopathy, physio, chiro, exercise physiology, myotherapy and more — ten disciplines under one roof across Melbourne's west. Not sure which? We'll help.`
- **H1:** `Ten disciplines. One plan.`
- **Internal links out:** all 10 service pages, /about/qualifications/, /about/team/, /conditions/, 3 location pages, /contact/
- **Internal links in:** header nav, footer, homepage service band, every service page (breadcrumb + sibling links), every condition page
- **Schema:** `CollectionPage` + `MedicalBusiness` with `availableService` entries for each of the ten

## Cannibalisation Guard

Suburb-agnostic. This page targets Melbourne-level and generic allied health terms only. It must not mention Ascot Vale, Newport or Bacchus Marsh outside the location-cards block, and must not target any `[modality] [suburb]` term — those belong to the location and service×location pages.

## AHPRA Compliance Notes

- **Do not compare disciplines competitively.** "Osteopathy is better for back pain than chiropractic" is a direct breach and also bad clinical writing. Frame differences as differences in approach, not in efficacy.
- No claims that the multidisciplinary model produces better outcomes. Describe the model, let the reader draw the conclusion.
- Rebate and Medicare statements must be accurate and conditional.
- No "specialist" language without specialist registration.

## Voice Notes

- Confident and clarifying. The reader is confused; the page's tone should feel like someone taking the decision off their hands.
- Casual but authoritative. Avoid textbook definitions of each modality — that's what the individual pages are for.
- Never imply a patient was foolish for seeing the "wrong" practitioner before.
- No "performance". The rehab and S&C buckets are where the word will try to sneak in — use "getting back to training", "strength", "return to sport".

## Migration Notes

- `/our-services/` 301s to `/services/`. Also inbound: `/sports-therapy/` → `/services/physiotherapy/` (not here), so make sure the hub links prominently to physiotherapy for any residual sports-therapy traffic.
- Salvage from the live services page: the current service list and any availability-by-clinic data.
- The live page predates dietetics, myotherapy's current positioning and paediatric osteopathy as distinct services — expect to write more than you salvage.
- Old Newport mobile on the live page; replace with (03) 9962 5539.

## Open Questions

- Which of the ten services are available at which clinics?
- Are fees published on the site? If so, which tiers, and are director fees shown separately?
- Confirm accepted funding schemes across the group.
- Is there a formal internal referral/case-conference process worth naming in section 6?
