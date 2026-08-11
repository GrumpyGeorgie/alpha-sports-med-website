---
title: "What We Support"
slug: /about/community/
group: core
primary_keyword: "—"
primary_volume: 0            # no primary keyword — community brand asset, playbook pillar 4
secondary_keywords: ["run club melbourne west", "sports club sponsorship melbourne west"]
search_intent: informational
word_count_target: 700
template: default
existing_url: /what-we-support/
salvage_from: ["/what-we-support/", "/yarraville-festival/"]
status: draft
priority: P3
---

## Purpose

Prove that Alpha is embedded in Melbourne's west rather than merely located in it — turning "a clinic near me" into "our clinic".

## Reader

Someone already partway to booking who wants to like the business, plus three specific groups: run club and gym members checking whether Alpha is the clinic their community uses, club committee members or event organisers looking for a partner, and locals who recognised the Alpha tent at an event and are following up.

In five seconds they need to see something they recognise — their club, their gym, their local event.

## Search Intent

Low-volume, high-affinity. **No primary keyword** — this is a community brand asset, not a demand page, and a brand-prefix term ("alpha sports medicine community") would be a fabricated target with no volume. Almost nobody searches this cold; it is reached from the nav, the homepage community band, and from partner clubs linking in. Its real SEO value is **local relevance and link acquisition** — this page is the natural landing spot for backlinks from run clubs, gyms, festivals and community groups, which is exactly the link profile a multi-location local business needs.

## Sections

### 1. Hero
**Component:** `hero-banner`
**Direction:** Lead with the belief, not the sponsor list. Alpha's stated value is Community & Legacy — leadership means leaving something behind. Say why a clinic bothers with any of this: because the people we treat are the people we run, train and live alongside.
**Key points:**
- H1
- One line of positioning: we're not sponsors who write a cheque and turn up for the photo
- Avoid corporate CSR language entirely

### 2. RunWest Run Club
**Component:** feature block
**Direction:** The flagship. Give it a proper section — this is a genuine owned community asset, not a sponsorship. Explain what it is, who it's for (all paces, explicitly including people coming back from injury), where and when it meets, and how to join.
**Key points:**
- Links to /runwest-run-club/ as the full page
- Emphasise the beginner-and-comeback-friendly angle; it is the natural on-ramp for the exact patient Alpha wants
- Ties into the running cluster: /conditions/running-injuries/ and /running-assessment/
- Confirm current meeting details before publishing — nothing kills a community page faster than a defunct meet time

### 3. Gyms and training partners
**Component:** `location-cards` variant or logo/name grid
**Direction:** Name the partners and say what the partnership actually gives their members. The playbook says Alpha's patients come from group fitness gyms and running clubs — this section is the proof and the referral engine.
**Key points:**
- Known partners from the live site's landing pages: BFT Essendon, BFT Yarraville, BFT Altona North, HeadStrong Gym, Movement Culture Altona North, ANCC, ParaMount. **Verify each is a current partner before naming.**
- Describe the practical benefit: on-site screenings, member offers, direct lines between coaches and clinicians so a coach can adjust a programme around an injury
- This is the "integration" value made visible outside the clinic
- Any member-offer pricing must be current and accurately stated

### 4. Clubs and teams
**Component:** content block
**Direction:** Sporting clubs Alpha supports — sideline coverage, screenings, sponsorship. Group by clinic catchment so a Bacchus Marsh reader sees Bacchus Marsh clubs.
**Key points:**
- Group under Ascot Vale / Newport / Bacchus Marsh headings
- Cross-link to the relevant location pages, and to /conditions/sports-injuries/ and its children (ACL, concussion, ankle sprain) since those are the injuries club sport generates

### 5. Events
**Component:** content block with imagery
**Direction:** Local events Alpha shows up to. This is where the /yarraville-festival/ pages land after redirect, so the section needs enough substance to justify absorbing them.
**Key points:**
- Yarraville Festival, FitHer Expo, Melbourne Marathon recovery/flush sessions
- Write it as recurring involvement, not a one-off event archive — the old site had dated one-off pages (Yarraville Festival 2025, FitHer Expo October 2024) and that pattern should not be recreated
- If the client wants event-by-event coverage in future, it belongs on the blog, not as new pages here

### 6. Work with us
**Component:** `cta-section` (secondary)
**Direction:** Explicit invitation for clubs, gyms and event organisers to get in touch. This is the section that earns backlinks.
**Key points:**
- What Alpha can offer: event coverage, screening days, education sessions for members, injury workshops
- Link to /contact/ with a note to mention the club or gym name

### 7. CTA
**Component:** `cta-section`
**Direction:** Book online, plus a link into /about/ for the reader who came here for character and now wants the full story.

## SEO Requirements

- **Title tag (≤60):** `What We Support | Alpha Sports Medicine Community`
- **Meta description (≤155):** `The run clubs, gyms, sporting clubs and local events Alpha Sports Medicine backs across Melbourne's west — including our own RunWest Run Club.`
- **H1:** `The community we're part of`
- **Link relationship:** `/runwest-run-club/` owns `runwest run club` as its primary keyword. This page **links to it and must not compete for it** — section 2 is a signpost with a link, not a description of the club that could rank in its place. `runwest run club` has been removed from this page's secondaries for that reason.
- **Internal links out:** /runwest-run-club/, /running-assessment/, /conditions/running-injuries/, /conditions/sports-injuries/, 3 clinic location pages, /about/, /contact/
- **Internal links in:** homepage community band, /about/, footer, /runwest-run-club/, location pages
- **Schema:** `WebPage`; consider `Event` markup only for genuinely recurring, dated events with confirmed details
- **Off-page:** this is the page to request links to from every partner club, gym and event site. Flag to the SEO lead as the primary local link target.

## AHPRA Compliance Notes

- Lowest-risk page on the site, but the guardrails still apply. Do not use community involvement to imply clinical outcomes ("the club that stopped getting injured").
- Photographs of identifiable patients, club members or children require consent. Event crowd shots need particular care where minors are visible.
- Any member offer or discount must state its conditions accurately.
- Naming a partner organisation requires their agreement — check before publishing logos or names.

## Voice Notes

- The warmest page on the site. Fun, energetic, local. Use names of places and events, not abstractions.
- Write like a member, not a sponsor. "We're at the Yarraville Festival every year, usually with a coffee in hand" beats "Alpha Sports Medicine is proud to partner with the Yarraville Festival".
- No "performance". Talk about running, lifting, playing, showing up.

## Migration Notes

- `/what-we-support/` and `/yarraville-festival/` both 301 to this page. The dated variants (`/yarraville-festival-2025/`, `/fither-expo-october-2024/`, `/melbourne-marathon-flush-2025/`) were not in the v5 redirect map — **check whether they are still live and add them to this page's redirect targets**, since they have no other logical destination.
- Salvage from the live page: partner names, event photography, any existing club relationships.
- Old Newport mobile appears on both `/what-we-support/` and `/yarraville-festival/`; replace with (03) 9962 5539.

## Open Questions

- Which gym and club partnerships are current as at launch? The list above is inferred from live landing pages and may be stale.
- Do we have permission from each partner to name them and use their logo?
- RunWest current meeting day, time and start point.
- Should the dated event pages (Yarraville Festival 2025, FitHer Expo, Melbourne Marathon Flush) redirect here, or be retired to 410?
- Are there current sponsorships (jersey, ground signage) that should be named?
