---
title: "Conditions We Treat"
slug: /conditions/
group: condition
primary_keyword: "conditions we treat"
primary_volume: 0
secondary_keywords: ["what does an osteopath treat", "physio for injuries melbourne", "musculoskeletal conditions"]
search_intent: navigational
word_count_target: 800
template: condition
existing_url: new
salvage_from: ["/education-hub/"]
status: draft
priority: P1
---

## Purpose

Route every "what's actually wrong with me" arrival to the right condition page in one click, and in doing so make the strategic argument the whole site rests on: you don't need to know whether you need a physio, an osteo or a chiro — you need someone to work out what's going on.

## Reader

Three arrivals, and the page has to serve all three without becoming a directory.

1. **The navigator.** Came from the mega-menu or the homepage. Knows their body part. Wants the shortest path to the knee page. Give them a scannable grid above the fold.
2. **The undiagnosed.** Doesn't have a label. Has "a thing in my hip that might be my back". Needs permission to not know, plus a route (the contact CTA, or the closest-fit page).
3. **The redirected.** Landed here from a retired `/education-hub/` URL. Expects an article, gets a hub. Must not feel like a dead end.

Five-second need: *this clinic treats the thing I have, and here's the page about it.*

## Search Intent

Almost entirely internal navigation and brand-adjacent — "conditions we treat" carries no meaningful standalone volume and this page is not chasing any. Its SEO job is structural: it is the parent node that consolidates authority into 24 child pages, absorbs the retired education hub's link equity, and gives the crawler a single, clean map of Alpha's topical territory. Judge this page on assisted conversions and crawl depth, not on its own rankings.

## Sections

### 1. Hero
**Component:** `hero-banner`
**Direction:** Do not open with a list. Open with the situation. This is the site's clearest chance to state the positioning: the place you go when nothing else has worked.
**Key points:**
- H1 plain and functional — the emotional work happens in the sub-head
- Sub-head: you don't need to arrive with a diagnosis, and you don't need to know which practitioner to book
- Trust strip: three clinics · no referral needed · 45-minute initial consult · health fund rebates
- CTA: Book online · (03) 9962 5539

### 2. If you're not sure what's wrong
**Component:** `problem-statement`
**Direction:** Serve reader type 2 early, because they're the one most likely to bounce. Validate the not-knowing. This is also where the "we work it out, you don't have to" promise lands.
**Key points:**
- Pain that moves, pain without an obvious event, pain that doesn't match the body part it's coming from
- The referred-pain point made concretely: a hip that presents as back pain, a neck that presents as a headache — it is normal not to be able to self-diagnose
- Turn: pick the page closest to where it hurts, or tell us what's going on and we'll point you at the right person → /contact/
- Do not turn this into a symptom checker. No triage tool, no quiz.

### 3. Browse by area and activity
**Component:** `condition-cards` (4 groups, matching the nav)
**Direction:** The routing engine and the reason the page exists. Four grouped grids mirroring the mega-menu so nav and page teach the same structure.
**Key points:**
- **Sport & Activity:** Running Injuries, Sports Injuries (with the six children surfaced as sub-links), Running Assessment
- **Pain Areas:** Back, Neck, Headaches & Migraines, TMJ & Jaw, Shoulder, Knee, Hip, Hand & Wrist, Foot & Plantar Fasciitis
- **Women's Health:** Pregnancy-Related Pain, Postpartum Pain
- **Complex Conditions:** Hypermobility & EDS, Invisible Illnesses
- One line per card, written as the patient would describe it ("the heel that's worst on the first steps out of bed"), not as a diagnosis
- Every card links. No card describes a page that doesn't exist.

### 4. How we approach any condition
**Component:** `approach-steps`
**Direction:** The differentiator, stated once at hub level so the child pages don't each have to carry the full argument. Four steps, no jargon.
**Key points:**
- Understand the person and the load first — what you do in a week, what you've already tried, what this is stopping you doing
- Assess above and below the painful area
- Treat and plan together — hands-on work plus something to do, built around your training week
- Stay through the strength phase rather than discharging at the point pain stops (this is where recurrence gets prevented)
- Re-test at the end of every session so you can feel the change

### 5. Who you'll see
**Component:** `service-cards`
**Direction:** Short routing block to the modalities, framed to defuse modality confusion rather than to sell any one discipline.
**Key points:**
- Osteopathy, Physiotherapy, Chiropractic, Myotherapy, Exercise Physiology, Clinical Pilates, Strength & Conditioning
- One sentence: we'll match you, and practitioners here talk to each other about your case
- Link to /services/ and /about/team/

### 6. Where to see us
**Component:** `booking-block-3location`
**Direction:** Standard three-clinic block — Ascot Vale, Newport, Bacchus Marsh. Address, phone (03) 9962 5539, and a book-online button per clinic.

### 7. FAQ
**Component:** `faq-accordion`
**Direction:** Five questions, drawn from the TAYA bank. Keep these general — the specific versions live on the child pages, and the answers must not be copy-pasted down the silo.
**Key points:**
- Do I need a referral? (No, for any of our services.)
- What if I don't know what's wrong? (That's the appointment's job.)
- How much does it cost, and can I claim it? (Health fund extras, HICAPS on site.)
- How many sessions will I need? (Honest range plus the "it depends on load and history" caveat — no number that reads as a promise.)
- Should I rest until my appointment? (Counter the blanket-rest advice, carefully: relative rest, keep moving what doesn't hurt, and we'll sort the loading out together.)

### 8. CTA
**Component:** `cta-section`
**Direction:** Book, call, or describe the problem and let us route you. The third option matters most on this page.

## SEO Requirements

- **Title tag (≤60):** `Conditions We Treat | Alpha Sports Medicine`
- **Meta description (≤155):** `From knee and back pain to sports injuries, headaches and running injuries — find the condition, or just tell us what's going on. Three Melbourne clinics.`
- **H1:** `Conditions We Treat`
- **Internal links out:** all 24 condition pages, /services/, /running-assessment/, /about/team/, /contact/, all three location pages
- **Internal links in:** primary nav, footer, homepage, every service page's "what we treat" block, every condition page's breadcrumb
- **Schema:** `CollectionPage` + `BreadcrumbList` + `FAQPage`

## Cannibalisation Guard

Targets no commercial term. **`sports injury clinic melbourne` is owned by `/conditions/sports-injuries/` and has been removed from this page's secondaries.** Must not compete with any child page — this page describes categories, never conditions. Hard rule for the writer: **no condition gets more than one sentence on this page.** The moment the hub explains what plantar fasciitis is, it starts competing with the page built to rank for it. Also must not restate /services/ — modalities appear as links, not descriptions.

## AHPRA Compliance Notes

- No claim that Alpha treats "any condition" or that all conditions are treatable.
- Section 2's "we'll work it out" framing must stay a description of the assessment process, not a diagnostic guarantee.
- No outcome language anywhere. Cards describe symptoms, not results.
- Section 4's re-test point is a description of process, which is safe — do not extend it into "you'll leave feeling better".

## Voice Notes

- Warmest page in the silo. This is the front door for someone who is lost, and the primary emotional beat is *you don't have to have this figured out already*.
- Card microcopy should sound like a patient talking, not a clinician writing.
- Resist the encyclopaedia instinct. Restraint is the whole design of this page.
- No "performance".

## Migration Notes

- **New page.** `/education-hub/` (landing) 301s here.
- **Salvage:** the education hub landing page's framing copy, if any is usable, before the CPT is retired. Low expectation — the individual articles carry the real salvage value and they go to their own destinations (see the ACL, ankle, rib, tennis elbow, back pain and sports hub briefs).
- No existing equity to protect, but the page inherits the education hub's inbound links — worth checking which of those URLs actually have referring domains before finalising the redirect map.
- Must ship in the same release as the child pages. A hub linking to unbuilt pages is worse than no hub.

## Open Questions

- Does the client want an "I don't know what's wrong" contact path distinct from the standard booking flow (e.g. a short enquiry form rather than a Cliniko slot)? Recommended, but it's a workflow decision.
- Are there conditions Alpha specifically wants more of that aren't currently in the 24? (Playbook open question, still unanswered.)
- Confirm the mega-menu grouping labels match the on-page group headings exactly.
