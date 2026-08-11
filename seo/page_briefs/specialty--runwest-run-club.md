---
title: "RunWest Run Club"
slug: /runwest-run-club/
group: specialty
primary_keyword: "runwest run club"
primary_volume: 0            # brand/community — no meaningful search volume, and that is fine
secondary_keywords: ["run club melbourne west", "running group newport", "run club williamstown", "running group melbourne west"]
search_intent: navigational
word_count_target: 500
template: default
existing_url: new                 # ⚠ verify — see Open Questions
salvage_from: []
status: draft
priority: P3
---

## Purpose

Give RunWest a permanent, linkable home on Alpha's domain — a page that earns local links, feeds GBP relevance, and proves playbook pillar 4 (Community & Legacy) is a real thing Alpha does rather than a claim it makes.

## Reader

Three readers, none of them searching for a physiotherapist:

1. **The prospective runner.** Local, somewhere between "I've been meaning to start" and "I need people to run with". She wants to know when, where, how far, how fast, whether she'll be the slowest, and whether it costs anything. **The "am I too slow for this" question is the real barrier and the page must dismantle it in the first screen.**
2. **The existing member.** Checking this week's start time or a route change. Needs the practical detail findable in three seconds.
3. **The linker.** A local blogger, community Facebook page admin, council events listing, running publication, or partner gym. She needs a clean, factual, quotable page to point at. **This reader is why the page exists commercially.**

## Search Intent

Navigational and negligible. **This page is not a keyword play and must not be briefed, written or measured as one.** Its value is:

- **Link acquisition.** Community pages are among the few assets a clinic can build that local sites will link to voluntarily. Run clubs get listed in event directories, community roundups, council calendars and Facebook groups. Those links flow authority to the whole domain.
- **GBP and local relevance.** Genuine, verifiable local involvement is a real local-SEO signal and a real differentiator against clinics with none.
- **Brand and trust.** It is the proof behind "community-led" on the About page. A prospective patient who finds it thinks better of the clinic without ever having intended to.
- **Cluster support.** Completes the running cluster: `/conditions/running-injuries/` ↔ `/running-assessment/` ↔ here ↔ the running blog posts.

Keep it short. 500 words. A community page that reads like a marketing page defeats its own purpose.

## Sections

### 1. Hero
**Component:** `hero-banner`
**Direction:** **Real photos of the actual run club. Non-negotiable.** Real people, mixed ages and paces, mid-run or post-run with coffee. Stock running photography here would be self-defeating — the entire asset is authenticity.
**Key points:**
- H1: RunWest
- Subhead: who it's for and where it runs
- **When and where, in the hero.** Day, time, meeting point. That is what both reader 1 and reader 2 came for.
- CTA is **join us / turn up**, not book an appointment.

### 2. What it is
**Component:** `problem-statement` (repurposed as a short intro block)
**Direction:** ~120 words. Plain and warm. Alpha's role is mentioned once and briefly — **the moment this reads as clinic marketing, it stops being link-worthy.**
**Key points:**
- What RunWest is, who started it and why, how long it's been going
- Who turns up: the honest answer — a range of paces and distances, some training for events, some just there for the coffee
- **"You will not be the slowest and nobody gets left behind"**, said explicitly. It is the single highest-value sentence on the page.
- Free, no membership, no sign-up, just turn up — **if that's true; confirm**
- Alpha's involvement in one sentence, low-key

### 3. When and where
**Component:** structured detail block / `nap-block` variant
**Direction:** Scannable. This is the returning member's section and the linker's source of facts.
**Key points:**
- Day(s), time, meeting point with a map link
- Route options and distances, with the pace groups if they exist
- What happens after (coffee, and where — this matters more than it sounds; it's the social proof)
- Wet weather policy
- Parking, and public transport
- What to bring, and whether there's somewhere to leave a bag
- Whether dogs, prams and kids are welcome — genuinely asked, genuinely decisive for a chunk of this audience

### 4. Who it's for
**Component:** short content block
**Direction:** Inclusive without being saccharine.
**Key points:**
- Complete beginners through to people training for marathons
- Whether there's a walk/run option or a shorter route
- No pace requirement
- How to find the group on the day (look for the flag / the shirts / whatever is true)
- Contact or social link for anyone who wants to ask first

### 5. Upcoming events
**Component:** event listing block
**Direction:** **Structurally important, so build it properly.** This is what makes the page worth linking to repeatedly rather than once. It needs to be a content collection in Astro that the client can update — a hard-coded list will be stale within a month and a stale community page is worse than none.
**Key points:**
- Local races the group is running (Run for the Kids, Melbourne Marathon, local fun runs, parkrun tie-ins)
- Any special sessions, social events, or club milestones
- `Event` schema on each entry — **eligible for rich results and a genuine visibility opportunity for a page with no keyword strategy**
- If there are no events at a given time, the block should hide rather than display an empty state

### 6. Community
**Component:** `related-links` / short block
**Direction:** Genuine local connection, and the outbound-link opportunity that makes reciprocal local links possible.
**Key points:**
- Partner gyms and clubs (BFT Yarraville, BFT Altona North, Movement Culture Altona North, Williamstown clubs — **verify currency**, per the Newport brief's warning)
- Local parkruns
- Link /about/community/, /discover-newport/
- **Link out generously to genuine local partners.** Outbound links to real community organisations are how a page like this earns links back. Do not hoard link equity on a page whose entire job is to acquire it.

### 7. And if something starts hurting
**Component:** short block + `related-links`
**Direction:** **One short paragraph, near the bottom, low-key.** This is the only commercial content on the page and it must feel like a useful aside from a club member, not a pitch. Over-egging this is the main risk.
**Key points:**
- Links: /conditions/running-injuries/, /running-assessment/, /services/physiotherapy/
- Tone: "we're a clinic, so if a niggle turns up, come talk to us" — one sentence, no CTA button.

## SEO Requirements

- **Title tag (≤60):** `RunWest Run Club | Melbourne's West | Alpha Sports Medicine` (58)
- **Meta description (≤155):** `RunWest is a free community run club in Melbourne's west. All paces welcome, nobody gets left behind. Here's when and where we meet.` (131)
- **H1:** `RunWest Run Club`
- **Internal links out:** /conditions/running-injuries/, /running-assessment/, /services/physiotherapy/, /about/community/, /discover-newport/, /locations/newport/, /contact/
- **Internal links in:** /running-assessment/, /conditions/running-injuries/, /about/community/, /locations/newport/, footer, running blog posts
- **External links out:** partner gyms, local clubs, parkrun, event organisers — **deliberately generous**
- **Schema:** `Organization` or `SportsActivityLocation`, `Event` for each listing, `BreadcrumbList`. No `FAQPage` needed.
- **Breadcrumbs:** Home > RunWest Run Club

## Link Acquisition Notes (page-specific — not standard for this brief format)

The page exists to earn links. Give the outreach owner something to work with:

- **Targets:** local community Facebook groups (Newport, Williamstown, Yarraville, Altona), Hobsons Bay and Maribyrnong council community and events listings, local news (Star Weekly), running directories and run-club aggregators, parkrun club pages, partner gym sites, event organiser pages
- **Requirement:** the page must be genuinely factual and current, or the outreach fails on first inspection. **A community page nobody maintains is a liability.** Assign an owner before launch.
- Consider a shareable social asset (route map, weekly graphic) that Instagram and Facebook posts can point back to
- **Recommendation for the GMB workstream:** run club sessions are legitimate, high-quality GBP post content and should feed the posting calendar

## AHPRA Compliance Notes

Lowest-risk page in the batch, but not zero:

- Do not imply that participating improves health outcomes, fitness or wellbeing in clinical terms. "A group of people who run together on a Saturday" is the safe and accurate register.
- No health claims about running.
- Photographs of identifiable participants **require consent**, particularly if the page sits on a clinic domain. Get it in writing — this is a real and commonly overlooked exposure.
- No patient testimonials, and no framing of any participant as a patient. If a member is also a patient, that relationship must not be referenced.
- Keep clinical content off the page beyond section 7's single paragraph.

## Voice Notes

- **The most relaxed page on the site.** This is the clinic's personality with the clinical register switched off. The playbook's "they take their work seriously, not themselves" should be visible here more than anywhere.
- Write as a club member, not as a clinic. First person plural, casual, a bit of humour.
- **Do not sell.** Every sentence that sounds like marketing costs the page a link.
- Warmth over polish. Slightly rough-edged is more credible here than immaculate.
- No "performance". No training-plan seriousness — this is a run club, not a squad.

## Migration Notes

- **`/runwest-run-club/` does not appear in the live page audit and is presumed a new URL.** Verify before launch — if a live page exists under a different slug, it needs a 301 into the redirect map, which currently has no entry for it.
- No existing copy to salvage. Everything must come from the client.
- **This page cannot be written without a client interview.** There is no documented source material for RunWest anywhere in the project files. Flag as the primary blocker.

## Open Questions

1. **Blocking — does RunWest actually still run, and on what schedule?** Every fact on the page comes from the client. There is no source material in the project. **If the club is dormant, do not build the page** — an out-of-date community page damages exactly the trust it was built to create. Recommend a straight yes/no from Michael before any copy is commissioned.
2. Day, time, meeting point, routes, distances, pace groups, wet weather policy — all required, all currently unknown.
3. Is it free and open, or is there any sign-up? Are dogs, prams and kids welcome?
4. Who runs it — Alpha staff, a volunteer, or jointly with a partner gym?
5. When did it start, and is there an origin story worth telling? Founding stories are what make community pages linkable.
6. **Are there photos, and is there participant consent for using them on a commercial domain?**
7. Does RunWest have its own social presence (Instagram, Strava club, Facebook group)? Those should be linked and cross-linked, and a Strava club is a legitimate `sameAs` entity signal.
8. Which partner gym relationships are current? The Newport brief already flags that the BFT and Movement Culture landing pages may be lapsed campaign assets. **Verify before naming anyone.**
9. **Who owns keeping this page current after launch?** Assign in the PM doc. Without an owner, recommend cutting the events block down to a single link to the social page rather than shipping a list that will rot.
