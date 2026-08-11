---
client: "Alpha Sports Medicine"
version: 1
status: approved
---

# Brand Guidelines

## Approach

This is a rebuild, not a rebrand. The existing site's orange-and-navy identity (logo, accent color, tone) already carries recognition and equity across 3 clinics and ~9 years of trading — it just hasn't been built out into a proper system. This document formalises what's already working and fills the gaps (typography hierarchy, full palette, imagery direction) so it can support a "modern, premium, fun, athletic" build instead of the clinical-default look most allied health sites default to.

Source material: `../campaign-playbook.md` (brand personality, voice, positioning — extensive, treat as authoritative), `content/home.md` (copy voice in practice), existing live site assets (`../wordpress/favicon.png`, `../wordpress/custom-components.css`, `../wordpress/alpha-sports-med-live-check.png`).

## Brand Personality

**Tone of voice**: Casual but authoritative. Direct without being cold, educating without lecturing, warm without being soft, confident without being arrogant.

**Brand adjectives**: Fun & energetic, authentic, community-led, confident & authoritative, modern & athletic, a leader.

**North Star**: "We get to the root of the problem to unlock your potential."

**Communication style**:
- We say: community, leader, legacy, root cause, long-term, tailored, active, get back to, we get it, we're here for you, we have your back, multidisciplinary, integrative
- We don't say: "performance" (specifically flagged by the founder as a cringe word — use "results," "outcomes," "getting back to what you love" instead), quick fix, instant results, guaranteed cure, generic jargon, anything that talks down to a patient or trash-talks another practitioner

**AHPRA guardrail**: All practitioner-facing and marketing copy must avoid outcome guarantees. This affects copy more than visual design, but keep it in mind for any imagery implying "cured" or before/after framing.

## Color Palette

**CONFIRMED** against the actual deployed production theme CSS (`../wordpress/theme-updates/fab-css.css`, pushed live via `deploy.sh`), which defines these as CSS custom properties (`--healthcare-primary`, `--healthcare-heading`, `--healthcare-primary-light`) — not just inferred from screenshots. Carried forward and formalised into a documented system; not new colors.

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Alpha Orange | #F25F2D | 242, 95, 45 | Primary CTAs, key accents, active states, logo mark |
| Navy | #172B37 | 23, 43, 55 | Headings, primary text on light backgrounds, dark-mode surfaces |

### Neutral Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | #F9FAFB | 249, 250, 251 | Page backgrounds, section alternation |
| Foreground | #374151 | 55, 65, 81 | Body text |
| Muted | #6B7280 | 107, 114, 128 | Secondary text, captions, timestamps |
| Border | #E5E7EB | 229, 231, 235 | Dividers, card borders, input borders |
| White | #FFFFFF | 255, 255, 255 | Cards, reversed text on navy/orange |

### Accent Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Orange Tint | #FDEEE8 | 253, 238, 232 | Callout/highlight box backgrounds (e.g. "not sure which practitioner" prompts) |
| Success | #10B981 | 16, 185, 129 | Confirmation states, availability indicators |
| Star | #FBBF24 | 251, 191, 36 | Review/rating stars only |

**Do not introduce**: pastel "healthcare blue," teal, or mint — these read as the generic allied-health aesthetic the brand is explicitly positioned against. Orange stays the only warm accent; navy carries all the "premium" weight.

## Typography

**Eyebrow, heading, and body fonts all confirmed directly against the live site (2026-08-03).**

### Eyebrow Font
- **Family**: Source Sans Pro
- **Weights**: 600
- **Source**: Google Fonts
- **Usage**: Small uppercase/label text above headings (section eyebrows, category tags)
- **Fallback stack**: `'Source Sans Pro', sans-serif`

### Heading Font
- **Family**: Roboto
- **Weights**: 500, 700
- **Source**: Google Fonts
- **Usage**: All headings (H1–H6), hero statements, section titles
- **Fallback stack**: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Body Font
- **Family**: Source Sans Pro
- **Weights**: 400, 600
- **Source**: Google Fonts
- **Usage**: Body text, navigation, UI elements, forms
- **Fallback stack**: `'Source Sans Pro', sans-serif`

### Hierarchy
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Eyebrow | Source Sans Pro | 0.8125rem | 600 | 1.4 |
| H1 | Roboto | 2.75–3.5rem | 700 | 1.05 |
| H2 | Roboto | 2–2.5rem | 700 | 1.15 |
| H3 | Roboto | 1.5–1.75rem | 500 | 1.25 |
| Body | Source Sans Pro | 1–1.125rem | 400 | 1.6 |
| Small | Source Sans Pro | 0.875rem | 400 | 1.5 |
| Button/UI label | Source Sans Pro | 0.9375rem | 600 | 1.2 |

## Imagery

### Photography Style
Real people in real environments — never stock-photo hospital settings. Per the playbook: "team in activewear, not scrubs," clinic environment that feels like a performance facility. Prioritise:
- Practitioners actively treating/assessing patients (hands-on, in motion)
- Patients mid-activity — running, gym, playing with kids — not just sitting in a waiting room
- Natural light, real clinic spaces (Ascot Vale / Newport / Bacchus Marsh), not staged corporate stock

Avoid: clinical white-coat imagery, sterile equipment close-ups, generic stock photos of unrelated "diverse smiling people in scrubs."

### Illustration
Minimal to none. Where diagrams are needed (e.g. body/anatomy references for condition pages), keep them simple, single-color-line style using Navy or Orange — not full-color medical illustration, which skews clinical.

### Iconography
**CONFIRMED** against the live site (2026-08-03): Font Awesome 5 (Free) — regular weight for line-style icons (`far fa-check-circle`, `far fa-clock`), solid weight for filled markers (`fas fa-map-marker-alt`, `fas fa-phone-alt`), brand icons for social (`fab fa-facebook`, `fab fa-instagram`, `fab fa-tiktok`, `fab fa-youtube`). Checkmarks are the outlined `fa-check-circle`, consistently orange — that's a recognizable existing pattern used across symptom/condition lists, keep it. Carry Font Awesome 5 Free forward as the icon library for the rebuild (regular for default/outline contexts, solid for filled/marker contexts); Orange for active/accent icons, Navy or Muted gray for default/inactive.

## Logo Usage

**CONFIRMED** and downloaded from the live site (2026-08-03) to `design/assets/logo/`:

- `alpha-logo-lockup.webp` — full lockup: orange "α" mark + white "ALPHA / SPORTS MEDICINE" wordmark, two-line stacked. Designed for dark (navy) backgrounds — the wordmark is white and won't show on light backgrounds as-is.
- `alpha-icon-32x32.png`, `alpha-icon-192x192.png`, `alpha-icon-180x180.png` — icon-only mark (orange "α" with a stylised medical/measurement motif through it), used as favicon and apple-touch-icon on the live site.

- **Minimum size**: 32px height (favicon/UI contexts), 48px height (header/nav)
- **Clear space**: minimum 0.5x the mark's height on all sides
- **Color variations confirmed in use**: full lockup (orange mark + white wordmark) on navy — primary, as seen in the live header; icon-only mark on transparent/light background — favicon and compact UI contexts
- **Do not**: recolor the mark outside orange/white/navy, stretch or distort proportions, or place on busy photographic backgrounds without a solid or scrim behind it
- **Still open**: no version of the lockup with a dark wordmark (for light-background headers) was found on the live site — if the rebuild needs the logo on a white/light header, either source one from Ashton/Will or generate a navy-wordmark variant during the prototype build
