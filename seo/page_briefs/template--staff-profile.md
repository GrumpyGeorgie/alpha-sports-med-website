---
title: "TEMPLATE — Staff Profile (15 practitioner pages)"
slug: /staff/{practitioner-slug}/
group: template
primary_keyword: "{practitioner name}"       # varies per entry — brand/navigational
primary_volume: 0                            # varies; name searches are low-volume, high-intent
secondary_keywords: ["{name} osteopath", "{name} physiotherapist", "osteopath {clinic suburb}"]
search_intent: navigational
word_count_target: 500                       # per profile minimum — see Content Floor
template: staff
existing_url: /staff/{practitioner-slug}/    # ALL 15 EXIST LIVE — migrate as-is
salvage_from: ["/staff/{practitioner-slug}/", "/meet-the-team/", "/our-qualifications-and-training/"]
status: draft
priority: P1
---

> **This is a template brief, not a page brief.** It defines the staff CPT template and the per-profile content requirements for 15 practitioners.

> 🚩 **BLOCKING GAP — READ FIRST.** **Discipline and qualifications are unconfirmed for most of the 15 practitioners.** The sitemap states this plainly ("Still to confirm with the client: discipline and qualifications per person") and nothing in the project folder resolves it. This is not a detail that can be filled in later. It is the **critical path for this entire batch**, because:
> - Every one of the six service×location pages is required to pull "the named practitioners delivering that modality at that clinic". Without discipline and clinic per person, that query returns nothing and six pages lose their sole doorway-content defence.
> - Both clinic-page practitioner sections depend on it.
> - The area page template's practitioner cards depend on it.
> - AHPRA registration numbers cannot be verified without knowing the discipline.
>
> **Nothing downstream of the staff CPT can be written until this is answered.** Escalate to Ashton and Will as a single consolidated request — one spreadsheet, 15 rows, five columns — rather than resolving it page by page.

> 🔒 **SLUGS ARE FROZEN.** All 15 URLs exist live and migrate unchanged with no redirect (decision 2026-07-21, confirmed by Michael). The CPT is retained specifically because these 15 pages carry equity and author authority that would be discarded by collapsing them into `/about/team/`.

## Purpose

Convert 15 practitioner profiles from staff bios into working E-E-A-T assets that establish who Alpha's people are, license the author-authority layer across the blog and condition content, and supply the named-practitioner data that makes the location and service×location pages defensible.

## Reader

Three distinct readers, in descending volume:

1. **The pre-appointment checker.** They have a booking, or are about to make one, and want to know who they'll be seeing. This is the highest-volume use and the most conversion-critical. They want a face, a discipline, credentials, and something human enough to reduce first-appointment anxiety. The playbook is explicit that this patient arrives frustrated and a bit scared; a warm, specific profile does real work before they walk in.
2. **The referrer or researcher.** A GP, another practitioner, or a detail-oriented patient checking credentials and AHPRA registration. They want the formal layer, findable in seconds.
3. **The content reader.** They arrived from a blog post or condition page byline and want to know whether the person who wrote it is credible. This reader is the reason the profiles exist as separate indexable pages rather than team-page anchors.

The template must serve all three without making the first scroll past a wall of credentials to find a human being.

## Search Intent

Navigational, name-driven. Nobody discovers Alpha through a practitioner profile — but practitioner name searches are high-intent (someone told them a name) and they convert well. The strategic value is not the direct traffic. It is:

- **Author authority.** These profiles are the `Person` entities that byline blog and condition content. Without them, Alpha's health content has no identifiable expert behind it — which matters increasingly for YMYL content and for AI-generated answer surfaces that look for named, credentialed sources.
- **Entity strength.** Fifteen credentialed practitioners linked bidirectionally to three clinics and ten services is a substantial entity graph and it reinforces every page in it.
- **Long-tail capture.** `{name} osteopath {suburb}` and similar strings.

Do not measure these pages on sessions. Measure them on whether the condition and blog pages that cite them perform.

## Required per profile (from the sitemap decision)

| Field | Required | Notes |
|---|---|---|
| `name` | ✅ | As per AHPRA register, plus preferred/display name if different |
| `slug` | ✅ | **Frozen.** Must match live URL. |
| `discipline` | ✅ | 🚩 **Unconfirmed for most.** Osteopath / Physiotherapist / Chiropractor / Myotherapist / Exercise Physiologist / Dietitian |
| `clinics` | ✅ (array) | One or more of ascot-vale / newport / bacchus-marsh. **Include days per clinic where a practitioner splits sites** — Dr Nick Naimo appears at both Ascot Vale and Newport and the two chiropractic pages cannot be differentiated without it. |
| `ahpra_registration` | ✅ | 🚩 Unconfirmed. **Not applicable to Alexandra Clay** — see below. |
| `qualifications` | ✅ | 🚩 Unconfirmed. Post-nominals plus institution. |
| `special_interests` | ✅ (2–4) | Drives the service×location matching and the Newport osteo "right fit" angle. Must be **distinct across practitioners at the same clinic** — seven Newport osteopaths with identical interests defeat the purpose. |
| `role` | Where applicable | Founder & Director (Ashton Wilson), Co-Director (Will Krithararis) |
| `bio` | ✅ | 250–350 words. See Content Floor. |
| `photo` | ✅ | See Photo Requirements. |
| `treats` | ✅ (3–5) | Condition pages this practitioner links to |
| `services` | ✅ (1–3) | Modality service pages this practitioner links to |
| `year_joined` | Optional | Useful for the founders and long-tenured staff |

### Credential accuracy — a specific and important exception

**Alexandra Clay is an Accredited Practising Dietitian (APD).** APD is a Dietitians Australia credential. **Dietitians are not registered with AHPRA** — it is a self-regulating profession. Her profile must **not** carry an AHPRA registration field, and the template must handle a null AHPRA value gracefully rather than rendering an empty label or a placeholder. Listing a non-existent AHPRA registration is a factual misrepresentation of regulatory status.

Similarly, **myotherapists and exercise physiologists** are not AHPRA-registered (ESSA accredits exercise physiologists; myotherapy is self-regulated). If Wei Song is a myotherapist, and if any of the 15 are exercise physiologists, the same handling applies. **The template must treat "registration body" as a variable field, not a hardcoded AHPRA label.** This is the most likely factual error in the whole staff build and it is one an informed reader or a regulator would notice immediately.

### Practitioners (15)

Dr Ashton Wilson (Founder & Director, osteopath) · Dr Will Krithararis (Co-Director, osteopath) · Dr Nick Naimo (chiropractor — Ascot Vale + Newport) · Dr Patricia Macandog (osteopath — Bacchus Marsh) · Dr Lara Trevorrow · Dr Matt O'Neill · Dr Disha Ganglani · Dr Caitlin O'Farrell (osteopath + S&C coach — Bacchus Marsh) · Dr Christina Kripintiris (osteopath — Bacchus Marsh) · Wei Song (myotherapist — Ascot Vale) · Anna Lawther (physiotherapist — Ascot Vale) · Jordan Tripodi · Felicity Lorimer · Oscar Taylor · Alexandra Clay (APD, dietitian — Newport)

Disciplines and clinics shown above are drawn from the June 2026 GBP optimisation plans and are **indicative, not confirmed**. Five practitioners have no discipline attribution anywhere in the project folder.

## Content Floor (per profile)

1. **≥500 words**, of which the bio is 250–350.
2. **The bio must be individually written.** A three-sentence template with a swapped name is worse than useless — it actively undermines the E-E-A-T purpose the CPT was retained for. If 15 individual bios cannot be resourced, that is an argument for interviewing the practitioners, not for templating.
3. **Bio must contain, in a human order:** why they do this work; what they're most interested in clinically and why; how they actually work with patients; something genuinely personal (what they train for, what they did before, where they're from). The playbook's authenticity value — "just like you, but confident in what we know" — is the target register. Not a CV in prose.
4. **A first-person or quoted line.** The founders' profiles have strong material already in the playbook (Ashton's jellyfish-keeper line; Will's "I want clients to feel empowered"). Every practitioner should have their own equivalent — one sentence in their own voice. This is what makes 15 profiles read as 15 people.
5. **Distinct special interests** from others at the same clinic.
6. **Credentials block, formally set out** — discipline, registration body and number (or the correct alternative credential), qualifications with institution.
7. **Bidirectional links:** to their modality service page(s) and their clinic location page(s); those pages link back via practitioner cards.

## Sections (repeating, all 15)

1. **Header** — photo, name, discipline, clinic(s) with days, role if applicable, book-with-this-practitioner CTA. Everything the pre-appointment checker needs, above the fold.
2. **Bio** — the individually written 250–350 words. Human first.
3. **Special interests** — 2–4, each one line, each linking to the relevant condition page.
4. **Credentials** — formal block. Discipline, registration body and number (variable label), qualifications, memberships, additional training.
5. **Where you'll find me** — clinic card(s) with NAP pulled from the clinic entry, and days. Links to the clinic location page and, where relevant, that clinic's page for this practitioner's modality. Under the osteo-led architecture osteopathy is the main location page (a Newport osteopath links to `/locations/newport/`), while other modalities link to their child page (a Newport physio links to `/locations/newport/physiotherapy/`).
6. **What I treat** — `condition-cards`, 3–5, from the `treats` field.
7. **Articles by {name}** — auto-populated list of blog and condition pages bylined to this practitioner. Empty for most at launch; the template must degrade gracefully (hide the section entirely, don't render an empty heading). This section is the visible half of the author-authority system.
8. **Booking** — `cta-section`, practitioner-specific if Cliniko supports deep-linking to a practitioner, otherwise the clinic booking.

## Author-Authority Linkage

The strategic reason the CPT was retained. Requirements:

- **Blog posts and condition pages carry a practitioner byline** linking to `/staff/{slug}/`, with the byline rendering discipline alongside name ("Reviewed by Dr Will Krithararis, Osteopath").
- **Two byline roles supported:** `author` and `medically reviewed by`. Most condition content will realistically be written by a copywriter and reviewed by a practitioner — that is normal and honest, and the reviewer byline is the compliant and accurate way to represent it. **Do not attribute authorship to a practitioner who did not write the piece.**
- **Schema:** bylined pages carry `author` and/or `reviewedBy` pointing at the practitioner's `Person` `@id`. The `Person` entity is defined once, on the profile, and referenced everywhere else — never redefined inline.
- **The profile lists its bylined content** (section 7), closing the loop bidirectionally.
- **Assign reviewers by special interest, not by availability.** The hypermobility page reviewed by a practitioner with a stated hypermobility interest is a genuine signal; reviewed by whoever was free is theatre, and the mismatch is visible to anyone comparing the byline to the profile.

## Photo Requirements

Consistent with the playbook's brand direction — **activewear, not scrubs.** This is a stated founder position, not a stylistic preference: Ashton built the clinic specifically so practitioners could work in activewear, and the visual identity brief calls for "the intersection of a high-end sports brand and a health-forward community space".

- Shot in the actual clinics, not a studio backdrop
- Consistent treatment across all 15 — same lighting approach, same crop ratio, same background family. Fifteen photos taken on fifteen different days by fifteen different phones reads as amateur and undermines the credential content beside it.
- Natural and warm, not corporate-formal and not stiff-clinical
- Landscape or square variant needed for practitioner cards on the location, svcloc and area pages; portrait for the profile header. **Brief both crops in the same shoot** — retrofitting a second crop later is the standard failure here.
- No before/after or treatment-in-progress imagery that could read as a therapeutic claim
- Patient faces must not appear without written consent

## SEO Requirements

- **Title tag formula (≤60):** `{Name} | {Discipline} | Alpha Sports Medicine` — check per entry; drop to `{Name} | {Discipline}` on overflow
- **Meta description formula (≤155):** `{Name} is a {discipline} at Alpha Sports Medicine {clinic}. Special interest in {interest 1} and {interest 2}. Book online.`
- **H1:** `{Name}`
- **Internal links in:** `/about/team/` (the index — this is the primary hub for all 15), clinic location pages, svcloc pages, area pages, bylines on blog and condition content, `/about/qualifications/`
- **Internal links out:** modality service page(s), clinic location page(s), relevant svcloc page, 3–5 condition pages, Cliniko
- **Schema:** `Person` — `name`, `jobTitle`, `worksFor` (→ Alpha Organization `@id`), `workLocation` (→ clinic `LocalBusiness` `@id`), `hasCredential`, `knowsAbout` (special interests), `image`, `url`. Plus `ProfilePage` and `BreadcrumbList`. The `Person` node is the canonical definition referenced by every byline on the site.
- **Breadcrumbs:** Home > About > Our Team > {Name}
- **Indexing:** all 15 indexable. No noindex, no canonicalising to `/about/team/`.

## AHPRA Compliance Notes

The staff profiles are the **highest-consequence compliance surface in the build**, because credentials replicate: an error here propagates onto every location page, svcloc page and area page that pulls the card, and onto every bylined article.

- **"Specialist" is a protected title.** Do not use it for any practitioner without the corresponding recognised specialist endorsement. "Special interest in" is the correct phrasing and should be used consistently across all 15.
- **"Dr" usage** — Australian convention requires the discipline be evident wherever the title appears, so that a reader cannot infer medical qualification. The template should render discipline adjacent to name in every context the card appears, not only on the profile itself. **Build this into the component, not the copy.**
- **Registration body must be accurate per profession** — see the Alexandra Clay exception above. AHPRA is not universal across allied health.
- **No comparative claims** — no "our most experienced", no "the best practitioner for X", no ranking of the team.
- **No outcome claims in bios.** "I love seeing people get back to running" is a description of motivation and is fine. "I get runners back on the road" is an outcome claim and is not.
- **Testimonials on profiles** — if practitioner-level reviews are displayed, they must meet AHPRA testimonial rules. Simplest compliant position is not to carry them on profiles at all. Recommend that unless the client asks otherwise.
- **Every AHPRA number should be verified against the public register before publication.** Fifteen numbers is a real QA task; assign it explicitly to someone rather than assuming.

## Voice Notes

First person or close to it. These should sound like the practitioner, not like the marketing team describing the practitioner — the playbook's authenticity value and its "no corporate scripts" instruction apply most directly here. Different profiles should genuinely sound different; that variation is the asset.

Keep the founders' profiles consistent with the playbook material rather than rewriting it. Ashton's origin story and Will's "I wanted more" line are already strong, already in his own words, and already approved — use them.

And still no "performance" — founder-flagged. Use "getting back to what you love".

## Migration Notes

- **All 15 migrate as-is. No redirects. Slugs frozen.** Decision 2026-07-21.
- Harvest all 15 live profiles first — existing bios may contain qualification and interest detail that answers part of the blocking gap without needing the client. **Do this before escalating the data request; it may shrink it substantially.**
- `/meet-the-team/` 301s to `/about/team/`, which becomes an index linking out to the 15, not a replacement for them.
- `/our-qualifications-and-training/` 301s to `/about/qualifications/` — harvest for credential detail, likely the single richest existing source for the blocking gap.
- Verify all 15 live slugs against `/staff/` before building the collection. The sitemap's list is the authority but was assembled from a partial crawl — and the same v2 audit missed 26 area pages entirely. **Re-crawl `/staff/` and confirm the count is 15, not 14 or 17.**

## Open Questions

1. **🚩 BLOCKING — discipline and qualifications per practitioner.** Unconfirmed for the majority of the 15. Blocks the staff pages, both clinic pages' practitioner sections, all six svcloc pages, and the area page template's practitioner cards. **Request as one consolidated spreadsheet:** name · discipline · clinic(s) and days · registration body and number · qualifications with institution · 2–4 special interests. Fifteen rows. This single artefact unblocks more of the build than anything else outstanding.
2. **Which practitioners are at which clinic, and on which days?** Particularly Dr Nick Naimo (named at both Ascot Vale and Newport — the two chiropractic svcloc pages cannot be differentiated without his split) and the seven Newport osteopaths (unnamed; the Newport osteopathy page's entire angle depends on naming them with distinct interests).
3. **Is the roster still 15 as at Phase 3?** The staff list and the GBP plans are June–July 2026. Allied health rosters move. Confirm no departures or additions before building the collection.
4. **Confirm Alexandra Clay's credential handling** and identify any other non-AHPRA practitioners among the 15 (likely: Wei Song if myotherapist, plus any exercise physiologists).
5. **Are practitioner-level photos available in the required consistency, or is a shoot needed?** Given the activewear brand direction and the need for two crops, assume a shoot is needed until told otherwise, and flag the lead time.
6. **Does Cliniko support deep-linking a booking to a named practitioner?** Determines the section 8 CTA and materially affects profile conversion.
7. **Who reviews and signs off the medical accuracy of bylined content?** The author-authority system needs a named process owner, not just a schema field. Without one, the reviewer bylines are decorative.
8. **Does the client want practitioner-level testimonials?** Recommend no, on AHPRA grounds. Confirm the position rather than assuming it.
