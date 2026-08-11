---
title: "Our Clinics"
slug: /locations/
group: location
primary_keyword: "alpha sports medicine locations"
primary_volume: 0            # brand/navigational — no meaningful standalone volume
secondary_keywords: ["alpha sports medicine ascot vale", "alpha sports medicine newport", "alpha sports medicine bacchus marsh", "osteopath melbourne west", "physio melbourne west"]
search_intent: navigational
word_count_target: 500
template: location
existing_url: /locations/
salvage_from: ["/locations/", "/locations-test/"]
status: draft
priority: P1
---

## Purpose

Route a visitor to the right clinic in under ten seconds, and act as the internal-link spine that pushes authority down to the three clinic pages and the 26 programmatic area pages.

## Reader

Two distinct people land here. The first already knows Alpha (referred by a mate, a gym, or their run club) and just needs to work out which of the three clinics is closest and whether the modality they want is offered there. The second arrived from a suburb search, landed on an area page, and clicked "our clinics" to sanity-check that Alpha is a real practice with real premises and not a lead-gen shell.

Both need the same first five seconds: three clinics, named, with suburb, address and a book button. Do not make them scroll to find out where Alpha actually is.

## Search Intent

Navigational and orientational. Nobody types "alpha sports medicine locations" as a discovery search — they type it because they've already decided and want the address, the hours, or the phone number. This page's SEO job is not to win a head term. Its job is to (a) consolidate brand-plus-suburb queries, (b) distribute link equity to the three clinic pages, and (c) give Google a single clean surface that associates the Alpha entity with three verified premises.

## Sections

### 1. Hero — orientation, not persuasion
- **Component:** `hero-banner` (compact variant — this is a utility page, not a sales page)
- **Direction:** One line that names all three suburbs. Resist the urge to run a full brand pitch here; the reader is mid-task.
- **Key points:** H1 carries the brand + "clinics"; subhead names Ascot Vale, Newport and Bacchus Marsh in that order (largest to smallest by demand); single line on the shared standard of care — "same standard of care whichever door you walk through" ties to the playbook vision statement without making a clinical claim.

### 2. The three clinics
- **Component:** `location-cards` (3-up desktop, stacked mobile)
- **Direction:** Each card is a self-contained decision unit. A reader should be able to choose from the card alone without clicking through.
- **Key points per card:**
  - Clinic name, full street address, suburb, postcode
  - **Lead modality flag** — Ascot Vale "Osteopathy-led", Newport "Physiotherapy-led", Bacchus Marsh "Osteopathy-led" (see Open Questions — the sitemap says Bacchus Marsh leads chiro; the June 2026 GBP audit says the site is osteopathy-only. Do not write this line until resolved.)
  - Which services are actually available at that clinic — this is the single most useful thing on the page and the live site does it badly
  - One sentence of genuine character: Ascot Vale = the original clinic, Newport = the biggest team, Bacchus Marsh = the regional practice
  - Two CTAs: "Book at [clinic]" (Cliniko, pre-filtered to that site if the booking platform supports it) and "See clinic details"

### 3. Not near one of our clinics?
- **Component:** `related-links` (three-column suburb list, grouped by nearest clinic)
- **Direction:** This is the entry point to all 26 area pages. Group them under their nearest clinic with the drive time, not as one undifferentiated 26-item blob — a flat list of 26 suburb links reads as a footer spam block to both users and crawlers.
- **Key points:** Three column headings ("Closest to Ascot Vale", "Closest to Newport", "Closest to Bacchus Marsh"); suburbs listed alphabetically within each; short intro line framing these as "we see a lot of people from" rather than "we service" — the former is true and human, the latter is SEO-speak.

### 4. What's the same at every clinic
- **Component:** `approach-steps` (3 steps, condensed)
- **Direction:** Short. This is the brand consistency promise from the playbook vision — same standard of care, same assessment approach, same integration of hands-on treatment with exercise rehab. It exists to stop the reader thinking of the three clinics as three different businesses.
- **Key points:** Same booking system; same initial-consult structure (listen first, assess, explain the plan); same integrated model. Avoid the word "performance" per playbook. Three sentences maximum per step.

### 5. Booking block
- **Component:** `booking-block-3location`
- **Direction:** Standard three-location block. Primary CTA book online; secondary the clinic phone number; tertiary "not sure which clinic or which practitioner? Tell us what's going on" → /contact/.

## SEO Requirements

- **Title tag (≤60):** `Our Clinics | Ascot Vale, Newport & Bacchus Marsh` (52)
- **Meta description (≤155):** `Alpha Sports Medicine has three clinics across Melbourne's west — Ascot Vale, Newport and Bacchus Marsh. Find addresses, hours and book online.` (146)
- **H1:** `Our Clinics`
- **Internal links in:** primary nav (Locations dropdown parent), footer, homepage location section, every condition page via `booking-block-3location`, all 26 area pages via breadcrumb
- **Internal links out:** the three clinic pages (priority — these should be the first three links in the DOM after the nav); all 26 area pages; /contact/; Cliniko booking URL
- **Schema:** `CollectionPage` with an `ItemList` of the three `LocalBusiness` nodes. Do **not** duplicate the full NAP schema here — each clinic page owns its own `LocalBusiness` node and this page references them by `@id`. Duplicating full NAP across hub and clinic page is the most common way multi-location schema goes wrong.
- **Breadcrumbs:** Home > Our Clinics

## AHPRA Compliance Notes

Low risk page, but two traps. First, "same standard of care" must be framed as an operational commitment, not a clinical outcome promise — "the same approach and the same standard" is fine, "the same results" is not. Second, do not rank or compare the three clinics against each other or imply one is better. No aggregate review counts or star ratings pulled onto the page unless they meet AHPRA testimonial rules.

## Voice Notes

This is the most functional page in the batch and the voice should get out of the way. Warm but brisk. The one place to let the brand through is the clinic character lines in section 2 — "where it all started, back when we were in Maidstone" does more brand work than a paragraph of mission copy. Do not repeat the North Star line here; it belongs on the homepage and the clinic pages.

## Migration Notes

- Live `/locations/` exists and is largely a card grid — the structure is salvageable, the copy is not.
- `/locations-test/` and `/locations/` (test variants noted in the phone audit) must be dropped or 410'd, not migrated.
- No redirect needed — URL unchanged.
- The 26 area pages sit at `/locations/{suburb}/`, the same depth as the three clinic pages. This is inherited and must not be changed (no redirects, existing equity). The hub is responsible for making the clinic-vs-area distinction visually obvious even though the URLs don't.

## Open Questions

1. **Phone numbers — needs client confirmation before any NAP block is written.** The 20 July 2026 audit consolidated the site onto a single number, **(03) 9962 5539**, and states the three per-clinic mobiles (Newport 0410 885 955, Bacchus Marsh 0406 021 846, Ascot Vale 0414 614 692) are legacy and were being retired. But the audit also flags that the per-location "Phone Number" custom field on all three Location entries was still unfixed at time of writing. **Confirm: is (03) 9962 5539 the single number for all three clinics, or does each clinic keep a distinct number?** This changes the LocalBusiness schema on three pages and the NAP consistency signal feeding three GBP listings. Treat as blocking.
2. Opening hours per clinic — not held in any current project document. Required for `openingHoursSpecification` on the clinic pages and for this hub's card summaries.
3. Does Cliniko support deep-linking a booking to a specific site? If yes, the card CTAs should use it. If not, the CTA copy needs to warn the reader they'll pick the clinic on the next screen.
4. Bacchus Marsh service scope — see the clinic brief. Resolve before writing the "services available here" line on that card.
