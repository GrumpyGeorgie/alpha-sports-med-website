---
title: "Privacy Policy"
slug: /privacy-policy/
group: core
primary_keyword: "—"
primary_volume: 0            # no primary keyword — legal/utility page, not a ranking target
secondary_keywords: []
search_intent: navigational
word_count_target: 400
template: default
existing_url: /privacy-policy/
salvage_from: ["/privacy-policy/"]
status: draft
priority: P3
---

## Purpose

Satisfy the clinic's legal obligations under the Privacy Act 1988 and the Australian Privacy Principles, and give the reader a plain-English account of what happens to their health information.

## Reader

Rare and specific: someone about to submit the contact form who paused, a patient who wants to know how their notes are stored or how to request them, or a compliance-minded reader. They want the answer to one question and they want to find it without reading the whole document.

## Search Intent

Navigational and utility. **No primary keyword** — this is a legal compliance and utility page whose job is to be findable from the footer and the contact form, not to rank. Do not assign it a brand-prefix term. No commercial value. Written for accuracy and readability, not persuasion. **This brief is deliberately short — it is a compliance page, not a content page.**

## Sections

### 1. Intro
**Component:** standard content
**Direction:** Who the policy covers (Alpha Sports Medicine, all three clinics and the website), the effective date, and a one-line statement of intent in plain English.

### 2. What we collect
**Component:** standard content
**Direction:** Separate personal information from **health information**, which attracts stronger protection as sensitive information under the Privacy Act. Cover both the clinical and the digital collection paths.
**Key points:**
- Clinical: name, contact details, date of birth, Medicare/health fund details, health history, treatment notes, correspondence with GPs and other practitioners
- Digital: contact form submissions, booking data via Cliniko, analytics and advertising cookies, IP address

### 3. How we use it
**Direction:** Provide care, manage appointments, process claims and rebates, communicate about appointments, and — separately and only with consent — marketing. Keep the marketing use clearly distinguished from the clinical use.

### 4. Who we share it with
**Direction:** Be specific about third parties rather than using a generic "service providers" catch-all.
**Key points:**
- Cliniko (practice management and booking), health funds and HICAPS, Medicare, referring GPs and specialists with consent, insurers where a claim applies (WorkCover/TAC), IT and hosting providers
- Google Analytics and advertising platforms for website data
- Statement on overseas data storage — Cliniko and analytics providers may store data outside Australia; this must be disclosed under APP 8

### 5. Storage, security and retention
**Direction:** How records are secured and how long they are kept. Health records in Victoria are generally retained for a minimum of seven years from last contact, or until a minor turns 25 — state the applicable rule accurately.

### 6. Access and correction
**Direction:** How a patient requests their records or corrects them, expected timeframe, and any fee. This is the section people actually come here to read — make it easy to find.

### 7. Cookies and website tracking
**Direction:** What is set, by whom, and how to opt out. Must align with whatever consent mechanism the Astro build actually implements.

### 8. Complaints
**Direction:** How to complain to Alpha first, then escalation to the OAIC and, for clinical matters, AHPRA. Include contact details for each.

### 9. Contact and updates
**Direction:** Privacy officer contact, postal address, phone (03) 9962 5539, and how policy changes are notified.

## SEO Requirements

- **Title tag (≤60):** `Privacy Policy | Alpha Sports Medicine`
- **Meta description (≤155):** `How Alpha Sports Medicine collects, uses, stores and protects your personal and health information across our clinics and website.`
- **H1:** `Privacy Policy`
- **Internal links out:** /contact/, OAIC and AHPRA (external)
- **Internal links in:** footer on every page, contact form consent checkbox, booking flow
- **Schema:** `WebPage`
- **Technical:** indexable, but excluded from the primary sitemap priority tier. No `noindex`.

## AHPRA Compliance Notes

- Must be consistent with the National Law's requirements on handling health information and with the Health Records Act 2001 (Vic).
- Must accurately describe how testimonials, reviews and any patient imagery are collected and consented to — if the site publishes patient stories, the consent process belongs here.
- Do not include marketing language of any kind.

## Voice Notes

- No brand voice. Plain, precise, neutral. Short sentences and clear headings.
- Second person ("your information"), present tense, no legalese where a plain word will do.
- No "performance".

## Migration Notes

- URL unchanged — no redirect required.
- Salvage the existing policy as the base, then update for: the Astro/Cloudflare hosting stack, the new contact form and its data store, current analytics and advertising tags, Cliniko, and the three current clinic addresses.
- Replace any old phone numbers with (03) 9962 5539.

## Open Questions

- **Should be reviewed by the client's legal adviser before publication.** This brief scopes the content; it is not legal drafting.
- Who is the nominated privacy officer and what is the contact address?
- Confirm the practice management system(s) in use and where data is hosted.
- Confirm the records retention period the clinic operates to.
- Is there a fee for records access requests?
- Does the site need a separate Terms of Use or cookie policy page? **A `/terms/` page is not in sitemap v5 and is therefore not currently in scope.** The link to it has been removed from this brief; confirm with the client whether a Terms page is wanted before any link to it is written.
