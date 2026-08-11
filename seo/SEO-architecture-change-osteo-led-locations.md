# SEO architecture change: osteo-led location pages

**Decided:** July 2026 · **Owner:** Michael
**Change in one line:** The main `/locations/[suburb]/` page targets **osteopathy** at every clinic. Every other main modality (physio, chiro, etc.) gets its own `/locations/[suburb]/[modality]/` child page.

**Rationale:** Alpha is an osteo-led business (founders are osteopaths, osteo is the flagship). Leading each clinic's strongest page with osteopathy aligns the site with the brand, with the likely GBP primary category, and, at Newport at least, with the actual staffing. The trade-off (accepted): the higher-volume modality term at some suburbs moves off the flagship page onto a child page. Numbers below so the cost is explicit.

**Handy framing:** Ascot Vale is *already* built this way (osteo main, physio + chiro children). This change simply standardises Newport and Bacchus Marsh onto the Ascot Vale pattern.

---

## The rule

- `/locations/[suburb]/` (main) → **osteopath [suburb]**. This page *is* the osteo × location page. There is no separate `/locations/[suburb]/osteopathy/`.
- `/locations/[suburb]/physiotherapy/` → physio [suburb]
- `/locations/[suburb]/chiropractic/` → chiropractor [suburb]
- Further modality × location children (pilates, exercise physiology, etc.) only where intent and volume justify a page (same test as today; e.g. the sitemap deliberately rejected a Clinical Pilates × Newport page on studio-intent grounds).

---

## Per-location keyword remap

| Clinic | Old primary (main page) | New primary (main page) | Volume moved to a child page |
|---|---|---|---|
| Ascot Vale | osteopath ascot vale (390) | osteopath ascot vale (390) | No change, already osteo-led |
| Newport | physio newport (390) | **osteopath newport (90)** | physio newport (390) → `/locations/newport/physiotherapy/` |
| Bacchus Marsh | chiropractor bacchus marsh (320) | **osteopath bacchus marsh (110)** | none — chiro not offered at BM; physio child pending confirmation |

**Read the trade-off honestly:** at Newport the flagship page goes from a 390 term to a 90 term. At Bacchus Marsh the old plan targeted chiropractor (320), but **chiro isn't actually offered there** (client-confirmed, July 2026), so that term was never really addressable — osteopath (110) is the correct primary regardless of the architecture rule. The Newport physio term (390) is not lost, it moves to a child page, which typically ranks a little less easily and carries fewer internal links. For a local-pack term much of the ranking is driven by GBP (category + proximity) rather than the page's H1, which is why this is a reasonable trade for brand and entity consistency.

**Bacchus Marsh (resolved + one open item):** confirmed osteo-led, chiro not offered, so there is **no BM chiropractic child page**. The June 2026 GBP plan says BM is osteopathy + telehealth only — so **confirm whether physiotherapy is offered at BM** before building or keeping `/locations/bacchus-marsh/physiotherapy/`. If physio isn't offered there, cancel that child page (it would be doorway content) and drop the physio term for BM.

---

## Page / redirect changes needed

**Newport**
- `/locations/newport/` → rewritten osteo-led (done, see `../content/newport.md`).
- New child page required: `/locations/newport/physiotherapy/` (targets physio newport 390, lead physio Anna Lawther). This did not exist under the old plan.
- The planned `/locations/newport/osteopathy/` is **absorbed into the main page**. If that URL is ever published, 301 it to `/locations/newport/`. (The existing brief `svcloc--newport-osteopathy.md` should be retired or repurposed as the physiotherapy child brief.)
- `/locations/newport/chiropractic/` unchanged (keep).

**Ascot Vale**
- No change. Already osteo-led main with physio + chiro children.

**Bacchus Marsh** (osteo-led confirmed; one open item)
- `/locations/bacchus-marsh/` → flip to osteo-led (targets osteopath bacchus marsh). Brief updated.
- **No BM chiropractic page** — chiro is not offered at Bacchus Marsh (client-confirmed).
- `/locations/bacchus-marsh/osteopathy/` absorbed into main; svcloc retired; 301 if ever published.
- `/locations/bacchus-marsh/physiotherapy/` → **confirm physio is offered at BM before keeping.** GBP plan says osteo + telehealth only; if no physio, cancel this child page.
- Give telehealth real prominence on the BM page (confirmed service, matters in a regional catchment).

---

## Brief files to update (in `astro-new/seo/page_briefs/`)

- `location--newport.md` → primary keyword `physio newport` becomes `osteopath newport`; retitle "Physio Newport" → "Osteopath Newport"; rework hero/team/service-linking sections to match the rewritten copy.
- `location--bacchus-marsh.md` → primary keyword becomes `osteopath bacchus marsh` (pending confirmation).
- `location--ascot-vale.md` → no change.
- `svcloc--newport-osteopathy.md` → retire; create `svcloc--newport-physiotherapy.md` in its place.
- New: `svcloc--bacchus-marsh-chiropractic.md`.
- `keyword_map.md` → update the Newport and Bacchus Marsh primary-term rows to reflect the flip, and move the displaced modality terms to their child-page rows.

## Other pages affected by the cannibalisation change

- **Osteopathy service page** (`../content/osteopathy.md`): its cannibalisation guard said `osteopath newport (90)` is owned by `/locations/newport/osteopathy/`. Update to: owned by `/locations/newport/` (the main location page). Same for `osteopath bacchus marsh` → `/locations/bacchus-marsh/`.
- **Location links on the osteopathy service page**: the "where to see us" links to `/locations/newport/osteopathy/` and `/locations/bacchus-marsh/osteopathy/` should now point to `/locations/newport/` and `/locations/bacchus-marsh/`.

---

## Skill implication

The `sitemap-architect` and `page-brief-generator` skills currently encode "lead each clinic with its strongest local modality." That rule produced the physio-led Newport and chiro-led Bacchus Marsh briefs. If this osteo-led standard is permanent, update those skills' location logic to: **main location page = the brand's flagship modality (osteopathy); other modalities are modality × location children.** Same apply-it caveat as the health-led change (see `../content/SKILL-UPDATE-health-led-angle.md`): I can't edit the installed skill from a Cowork session, so this needs doing in the plugin source or via Settings → Capabilities.
