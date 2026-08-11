---
title: "Contact Us"
slug: /contact/
group: core
primary_keyword: "contact alpha sports medicine"
primary_volume: 0            # brand/navigational
secondary_keywords: ["alpha sports medicine phone number", "book osteopath melbourne west", "alpha sports medicine opening hours"]
search_intent: transactional
word_count_target: 500
template: default
existing_url: /contact-us/
salvage_from: ["/contact-us/"]
status: draft
priority: P1
---

## Purpose

Get the reader booked, called or messaged in the fewest possible steps, and catch the person who is ready to act but doesn't know which practitioner or clinic to choose.

## Reader

Two states, and the page must serve both without compromise. (1) **Decided** — they want the number, the address, the parking situation, or the booking button. Everything else is friction. (2) **Stuck** — they've read three pages, they're ready, but they can't work out whether they need a physio or an osteo, or whether their problem is even something Alpha treats. This second reader is the one most contact pages lose, and the tertiary CTA in the house standard exists precisely for them.

Five-second need: phone number, book button, three addresses.

## Search Intent

Transactional and navigational. High conversion rate, low word count. Do not pad this page with brand storytelling — the reader has already decided they like Alpha or they wouldn't be here.

## Sections

### 1. Hero
**Component:** `hero-banner` (compact)
**Direction:** Small hero, no imagery competing with the content. One line, then the three fastest actions side by side.
**Key points:**
- H1
- Three buttons above the fold: Book online (Cliniko) · Call (03) 9962 5539 · Send us a message
- One reassurance line: no referral needed, health fund rebates on the spot, first appointment runs 45 minutes

### 2. "Not sure who to book with?"
**Component:** `problem-statement` (compact)
**Direction:** Put this *above* the form, not below it. It is the page's real differentiator and it directly answers the playbook's fifth pain point (modality confusion). Tell the reader plainly: describe what's going on and we'll tell you who to see — including telling you if we're not the right people.
**Key points:**
- 60–80 words maximum
- Name the actual questions Alpha asks so the reader knows what to include in their message: what's going on, how long, what you've already tried, what it's stopping you doing, what you want to get back to
- The willingness to say "we might not be the right fit" is a trust signal and consistent with "we don't chase"

### 3. Contact form
**Component:** form
**Direction:** Short form, sensible defaults. Every extra field costs conversions. Preferred-clinic and preferred-practitioner should be optional selects, not required.
**Key points:**
- Fields: name, email, phone, preferred clinic (optional), "what's going on?" (open text), consent checkbox
- Do **not** collect detailed health information through a web form — keep the open field framed as a brief description, and say responses may be followed up by phone
- Explicit privacy line with a link to /privacy-policy/
- Spam protection (Turnstile) and a thank-you page for conversion tracking
- Response-time expectation ("we'll get back to you within one business day") — confirm this is deliverable before promising it

### 4. Three clinics
**Component:** `nap-block` × 3
**Direction:** The GBP consistency backbone of the whole site. Every character of the address must match the Google Business Profile exactly — this is a ranking signal, not a formatting preference.
**Key points:**
- Ascot Vale, Newport, Bacchus Marsh: full street address, suburb, state, postcode, phone (03) 9962 5539, opening hours per day, embedded map, parking and public transport notes, link to the full location page
- Parking detail matters more than writers expect — it is a genuine anxiety for a first visit and a common "near me" query
- Note the lead modality per clinic as a soft router (Ascot Vale osteopathy, Newport physiotherapy, Bacchus Marsh chiropractic) with links through

### 5. Booking and admin FAQ
**Component:** `faq-accordion`
**Direction:** Six questions, all logistics. Nothing clinical — clinical questions belong on the service and condition pages.
**Key points:**
- Do I need a referral? (No.)
- How do I claim on private health? (HICAPS on site — confirm.)
- What about Medicare, WorkCover, TAC, DVA and NDIS? (Answer only what is actually accepted — see open questions.)
- What's the cancellation policy?
- How long is my appointment, and what should I bring or wear?
- Can I do an appointment online? → /services/online-consults/

### 6. Follow us
**Component:** `related-links`
**Direction:** One line and the social icons. Alpha's audience comes from Instagram and word of mouth.

## SEO Requirements

- **Title tag (≤60):** `Contact Us | Alpha Sports Medicine, Melbourne West`
- **Meta description (≤155):** `Book online or call (03) 9962 5539. Alpha Sports Medicine has clinics in Ascot Vale, Newport and Bacchus Marsh. No referral needed.`
- **H1:** `Get in touch`
- **Internal links out:** 3 clinic location pages, /locations/, /services/online-consults/, /about/team/, /privacy-policy/, Cliniko booking (external)
- **Internal links in:** header/footer on every page, the tertiary CTA on every service and condition page, homepage
- **Schema:** `ContactPage` + three `LocalBusiness` / `MedicalClinic` nodes with `address`, `geo`, `openingHoursSpecification`, `telephone`, `sameAs`. These must be identical to the nodes on the individual location pages.

## AHPRA Compliance Notes

- The form must not solicit or store detailed health information without appropriate privacy handling. Keep the free-text prompt general and say follow-up happens by phone.
- Privacy consent checkbox with a link to /privacy-policy/ is required before submission.
- No urgency or scarcity tactics ("only 2 appointments left this week"). Inconsistent with the brand and risky under AHPRA advertising guidelines.
- State rebate and funding eligibility accurately — do not imply Medicare coverage that requires a care plan without saying so.

## Voice Notes

- Shortest, plainest copy on the site. Helpful, not chatty.
- The one place for warmth is section 2 — "tell us what's going on" should sound like a person, not a ticketing system.
- No "performance", no sales pressure. Consistent with "we don't chase, we shine brightly and patients who are ready come to us".

## Migration Notes

- `/contact-us/` 301s to `/contact/`.
- Salvage from the live page: addresses and opening hours — then verify all three against the live Google Business Profiles before publishing, since GBP is the source of truth.
- **Phone number:** (03) 9962 5539 across all three clinics. All three old mobile numbers (0410 885 955, 0406 021 846, 0414 614 692) are retired. Note that the per-location "Phone Number" custom field in the legacy WordPress install was still unfixed at the time of the audit — do not copy hours or phone data from the live location pages without checking.
- Form handling on Astro/Cloudflare Pages needs its own build task (Turnstile, D1, notification email, thank-you page).

## Open Questions

- **Blocking:** confirmed street addresses and current opening hours for all three clinics, cross-checked against GBP.
- Which funding schemes are actually accepted, per clinic: Medicare CDM/EPC, WorkCover, TAC, DVA, NDIS?
- Is HICAPS available at all three sites?
- Cancellation policy wording and notice period.
- Where should form submissions be emailed, and is there a Cliniko or CRM integration required?
- Realistic response-time commitment.
