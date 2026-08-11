---
title: "Meet the Team"
slug: /about/team/
group: core
primary_keyword: "osteopaths & physios melbourne west"
primary_volume: 0            # est. low — this is an index and E-E-A-T page
secondary_keywords: ["alpha sports medicine team", "osteopath melbourne west", "physiotherapist melbourne west"]
search_intent: navigational
word_count_target: 700
template: default
existing_url: /meet-the-team/
salvage_from: ["/meet-the-team/"]
status: draft
priority: P2
---

## Purpose

Route the reader to the right practitioner profile, and prove — at a glance — that Alpha is a genuine multidisciplinary team rather than a solo practice with contractors.

## Reader

Three types. (1) The patient who has been recommended a specific practitioner by name and is searching for them. (2) The patient choosing who to book with, often filtering on discipline, clinic, gender, or special interest ("someone who understands hypermobility", "someone who runs"). (3) A referrer or prospective employee assessing the depth of the team.

In five seconds they need to be able to filter: which discipline, which clinic, and what does this person actually specialise in.

## Search Intent

Navigational and comparative. This page is an **index, not a destination** — decision logged 2026-07-21. The 15 individual `/staff/{name}/` profiles are the ranking and E-E-A-T assets and are retained as a CPT. This page must link out generously to them and must not attempt to duplicate their biographical content, or it will cannibalise 15 pages that already carry equity.

## Sections

### 1. Hero
**Component:** `hero-banner`
**Direction:** Short. Frame the team as the reason the multidisciplinary model actually works — one roof, disciplines that talk to each other, not a shared waiting room.
**Key points:**
- H1 + one line: 15 practitioners across osteopathy, physiotherapy, chiropractic, exercise physiology, myotherapy and dietetics, across three clinics
- Reassurance line for the undecided: "Not sure who to book with? Any of our practitioners can assess you and point you to the right person — including someone else on this page."
- CTA: Book online

### 2. Filter / directory controls
**Component:** `practitioner-cards` with filters
**Direction:** Functional, not decorative. Let the reader narrow by discipline and by clinic. If filtering is out of scope for the build, group the cards under discipline headings instead — the grouping matters more than the interactivity.
**Key points:**
- Filters: Discipline (Osteopathy, Physiotherapy, Chiropractic, Exercise Physiology, Myotherapy, Dietetics, Clinical Pilates) × Clinic (Ascot Vale, Newport, Bacchus Marsh)
- Each card: photo, name, discipline, clinic(s), one line of special interest, "View profile" → `/staff/{name}/`, and a direct book link where Cliniko supports practitioner-level deep links

### 3. Directors
**Component:** `practitioner-cards` (featured)
**Direction:** Ashton and Will get a larger treatment. Two or three sentences each — enough to distinguish them, not enough to replace their profiles. Note the director fee tier exists so the reader isn't surprised at checkout.
**Key points:**
- Dr Ashton Wilson — Founder & Director, osteopath. Complex and chronic musculoskeletal cases, running injuries, tendon pathology.
- Dr Will Krithararis — Co-Director, osteopath. Confirm his special interests before writing.
- Link each to /staff/dr-ashton-wilson/ and /staff/dr-will-krithararis/

### 4. The full team, by discipline
**Component:** `practitioner-cards` (grid, 15)
**Direction:** All 15 practitioners. One line each. The line should be a *special interest*, not a qualification — qualifications live on the profile and on /about/qualifications/. This is what lets a reader self-select ("she works with hypermobility", "he's a runner").
**Key points:**
- All 15 URLs from the sitemap staff table, slugs unchanged
- Dr Ashton Wilson, Dr Will Krithararis, Dr Nick Naimo, Dr Patricia Macandog, Dr Lara Trevorrow, Dr Matt O'Neill, Dr Disha Ganglani, Dr Caitlin O'Farrell, Dr Christina Kripintiris, Wei Song, Anna Lawther, Jordan Tripodi, Felicity Lorimer, Oscar Taylor, Alexandra Clay (APD)
- Discipline and clinic per person still to be confirmed with the client — flag any gaps rather than guessing
- The "Dr" prefix on osteopaths must carry the AHPRA-required qualifier (see compliance notes)

### 5. How we work together
**Component:** `approach-steps` (short)
**Direction:** 100–150 words explaining the collaborative model — this is the thing the individual profiles can't say. Your osteo can walk your case down the hall to the exercise physiologist. Case discussion happens internally. You are not starting from scratch if you see someone else.
**Key points:**
- Internal case discussion and shared notes
- You can move between practitioners within one plan without re-explaining your history
- Team education is a standing commitment of the business (playbook: Ashton's non-negotiable)
- Links to /about/qualifications/

### 6. Working at Alpha
**Component:** `cta-section` (secondary)
**Direction:** Two or three sentences and a contact link. The playbook's vision is explicitly about practitioners as well as patients ("a space for practitioners to come and be who they want to be"). Low-cost recruitment signal.

### 7. CTA
**Component:** `cta-section`
**Direction:** Book online, plus "not sure who to see? Tell us what's going on" → /contact/.

## SEO Requirements

- **Title tag (≤60):** `Meet the Team | Osteopaths & Physios, Melbourne West`
- **Meta description (≤155):** `Meet the 15 osteopaths, physios, chiros, exercise physiologists and myotherapists at Alpha Sports Medicine across Ascot Vale, Newport & Bacchus Marsh.`
- **H1:** `Meet the team`
- **Internal links out:** all 15 `/staff/` profiles (highest priority), /about/, /about/qualifications/, /services/ (per discipline), 3 clinic pages, /contact/
- **Internal links in:** header/footer, /about/, homepage practitioner block, every service page ("meet the practitioners"), every location page
- **Schema:** `CollectionPage`; each card marked up as `Person` with `jobTitle`, `worksFor` → Organization, and `url` pointing at the profile

## AHPRA Compliance Notes

- **"Dr" title rule.** Osteopaths, chiropractors and physiotherapists using "Dr" must state their profession immediately alongside the title so patients are not misled into thinking they are medical practitioners — e.g. "Dr Ashton Wilson (Osteopath)". Apply this consistently on every card and every profile. This is the single biggest compliance risk on the page.
- No superlatives about the team ("Melbourne's best osteopaths", "leading practitioners"). "Experienced" and "special interest in X" are safe; "expert in" and "specialist in" are risky unless the person holds a recognised specialist registration.
- Do not list a practitioner's special interest in a way that implies guaranteed results for that condition.
- AHPRA registration numbers belong on the individual profiles, not this index.

## Voice Notes

- Warmer and lighter than the service pages. These are the people described as "bubbly, happy, full of energy" and "easy to talk to" — the copy should read like that.
- Avoid the CV register. "Special interest in tendon pain and return-to-running" beats "extensive experience in the management of lower limb tendinopathy".
- Photography direction: activewear, in clinic or outdoors, not white coats or grey backdrops.
- No "performance".

## Migration Notes

- `/meet-the-team/` 301s to `/about/team/`.
- **The 15 `/staff/` URLs migrate unchanged — no redirects.** This page must not absorb their content.
- Salvage from the live team page: current photography and any existing bio lines worth reusing on the profiles.
- Live page carries the old Newport mobile — replace with (03) 9962 5539.

## Open Questions

- **Blocking:** confirmed discipline and primary clinic for each of the 15 practitioners. The sitemap flags this as outstanding.
- Confirm which practitioners are current — is the 15-profile list the live roster as at launch?
- Does Cliniko support per-practitioner booking deep links we can put on each card?
- Confirm the correct AHPRA-compliant title format the client wants to standardise on.
- Is Alexandra Clay the only APD, and does she cover all three clinics or telehealth only?
