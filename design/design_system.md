---
client: "Alpha Sports Medicine"
version: 1
status: approved
---

# Design System

## Platform Note

This build is **Astro**, not WordPress (see `website-project-management.md`). The reference template for this skill maps tokens to WordPress `theme.json` (`--wp--preset--*` variables); that naming doesn't apply here. Tokens below use plain CSS custom properties instead, so they drop straight into Astro's global stylesheet or a Tailwind config. If this project is ever ported back to WordPress, the slugs in each table are the theme.json-ready names.

**Most of these values are not new** — they're carried forward from the deployed production theme's actual `:root` token block (`../wordpress/custom-components.css`), confirmed working code, not a guess. Only the brand color tokens (which the old theme injected via the WP Customizer rather than hardcoding) come from the live-site inspection done in Step 4.1.

## Color Tokens

| Token | Slug | Hex | CSS Variable |
|-------|------|-----|-------------|
| Primary | primary | #F25F2D | `var(--color-primary)` |
| Primary — hover/dark | primary-dark | #D9521F | `var(--color-primary-dark)` |
| Primary — tint | primary-tint | #FDEEE8 | `var(--color-primary-tint)` |
| Navy | navy | #172B37 | `var(--color-navy)` |
| Background | background | #F9FAFB | `var(--color-background)` |
| Foreground | foreground | #374151 | `var(--color-foreground)` |
| Muted | muted | #6B7280 | `var(--color-muted)` |
| Border | border | #E5E7EB | `var(--color-border)` |
| White | white | #FFFFFF | `var(--color-white)` |
| Success | success | #10B981 | `var(--color-success)` |
| Star | star | #FBBF24 | `var(--color-star)` |

`primary-dark` is the confirmed hover state from the live site's floating-action-button CSS; `primary-tint` is the confirmed callout-background color. Source: `design/brand_guidelines.md`.

## Typography Tokens

### Font Families
| Token | Slug | Stack | CSS Variable |
|-------|------|-------|-------------|
| Heading | heading | 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif | `var(--font-heading)` |
| Body | body | 'Source Sans Pro', sans-serif | `var(--font-body)` |
| Eyebrow | eyebrow | 'Source Sans Pro', sans-serif | `var(--font-eyebrow)` |

### Font Sizes (Fluid — `clamp(min, preferred, max)`)
| Token | Slug | Min | Max | Clamp | CSS Variable |
|-------|------|-----|-----|-------|-------------|
| Eyebrow | eyebrow | 0.75rem | 0.8125rem | `clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)` | `var(--font-size-eyebrow)` |
| Small | small | 0.875rem | 1rem | `clamp(0.875rem, 0.83rem + 0.25vw, 1rem)` | `var(--font-size-small)` |
| Medium (body) | medium | 1rem | 1.125rem | `clamp(1rem, 0.96rem + 0.2vw, 1.125rem)` | `var(--font-size-medium)` |
| Large (H3) | large | 1.5rem | 1.75rem | `clamp(1.5rem, 1.4rem + 0.5vw, 1.75rem)` | `var(--font-size-large)` |
| X-Large (H2) | x-large | 2rem | 2.5rem | `clamp(2rem, 1.8rem + 1vw, 2.5rem)` | `var(--font-size-x-large)` |
| XX-Large (H1) | xx-large | 2.75rem | 3.5rem | `clamp(2.75rem, 2.4rem + 1.75vw, 3.5rem)` | `var(--font-size-xx-large)` |

Weights: Roboto 500 (H2/H3) and 700 (H1); Source Sans Pro 400 (body) and 600 (eyebrow, buttons, UI labels). Per `brand_guidelines.md`.

## Spacing Scale

**Carried forward unchanged from the confirmed production `:root` block** — this scale is already live and working, no reason to redefine it.

| Token | Slug | Size | CSS Variable | Usage |
|-------|------|------|-------------|-------|
| 2XS | space-1 | 4px | `var(--space-1)` | Icon gaps, tight inline spacing |
| XS | space-2 | 8px | `var(--space-2)` | Button icon gap, chip padding |
| S | space-3 | 12px | `var(--space-3)` | Button vertical padding, form field gaps |
| M | space-4 | 16px | `var(--space-4)` | Default component gap |
| ML | space-5 | 20px | `var(--space-5)` | Card padding (compact) |
| L | space-6 | 24px | `var(--space-6)` | Button horizontal padding, gutter (mobile) |
| XL | space-8 | 32px | `var(--space-8)` | Card padding, component spacing |
| 2XL | space-10 | 40px | `var(--space-10)` | Gutter (desktop), section sub-spacing |
| 3XL | space-12 | 48px | `var(--space-12)` | Section internal spacing |
| 4XL | space-16 | 64px | `var(--space-16)` | Section vertical padding |
| 5XL | space-20 | 80px | `var(--space-20)` | Large section spacing |
| 6XL | space-24 | 96px | `var(--space-24)` | Hero / feature section padding |

**Gutter**: 24px mobile, 40px desktop (`@media` breakpoint switch — confirmed pattern from production CSS).

## Layout

**Content width confirmed from production; wide width deliberately widened during prototype review.**

| Property | Value | CSS Variable |
|----------|-------|-------------|
| Content width | 720px | `var(--width-content)` |
| Wide width | 1200px (was 1120px in production — widened during Step 4.4 prototype review for better visual consistency across sections) | `var(--width-wide)` |
| Full width | 100% | — |

### Breakpoints
| Name | Min-width | Notes |
|------|-----------|-------|
| Mobile | 0 | Base styles, gutter 24px |
| Tablet | 768px | — |
| Desktop | 1024px | Gutter switches to 40px |
| Wide | 1280px | Wide-width containers cap at 1120px content |

## Border & Radius

**Confirmed from production** (`--radius-sm/md/lg/xl`).

| Token | Slug | Value | CSS Variable | Usage |
|-------|------|-------|-------------|-------|
| Radius small | radius-sm | 4px | `var(--radius-sm)` | Chips, tags, small controls |
| Radius medium | radius-md | 6px | `var(--radius-md)` | Buttons, inputs — confirmed button radius |
| Radius large | radius-lg | 8px | `var(--radius-lg)` | Cards |
| Radius x-large | radius-xl | 12px | `var(--radius-xl)` | Feature sections, popups (matches live FAB popup) |
| Radius full | radius-full | 9999px | `var(--radius-full)` | Pills, avatars, location badges (hero pill buttons) |

## Shadows

**Confirmed from production** (`--shadow-sm/md/lg`).

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Shadow small | `0 1px 2px rgba(0,0,0,0.05)` | `var(--shadow-sm)` | Cards, subtle lift |
| Shadow medium | `0 4px 12px rgba(0,0,0,0.08)` | `var(--shadow-md)` | Dropdowns, floating buttons |
| Shadow large | `0 8px 24px rgba(0,0,0,0.12)` | `var(--shadow-lg)` | Modals, popovers (matches live FAB popup) |

## Motion

**Confirmed from production**: `--transition: 150ms ease` — used consistently for background/color/border-color transitions (buttons, hover states, popups).

## Component Specifications

### Buttons
Pattern below matches the confirmed production button implementation (`.wp-element-button` / `.wp-block-button__link` in the live theme) — carried forward as-is since it already works and reads as "confident, not clinical."

| Variant | Background | Text | Border | Radius | Padding | Hover |
|---------|-----------|------|--------|--------|---------|-------|
| Primary | primary (#F25F2D) | white | 2px solid primary | radius-md (6px) | space-3 space-6 (12px 24px) | background + border → primary-dark (#D9521F) |
| Secondary (outline) | transparent | navy | 2px solid navy | radius-md (6px) | space-3 space-6 (12px 24px) | background → primary-tint, border → primary |
| Ghost | transparent | primary | none | radius-md (6px) | space-2 space-4 (8px 16px) | background → primary-tint |

- Font: Source Sans Pro, 16px, weight 600, line-height 1.5
- Icon gap: space-2 (8px) — matches confirmed `gap: var(--space-2)` on live buttons
- Focus state: 2px solid primary outline, 2px offset
- Transition: all color/background/border changes use `var(--transition)` (150ms ease)

### Cards
- Background: white
- Border: none (use shadow-sm instead — matches live pattern of shadow-based elevation over hard borders)
- Radius: radius-lg (8px)
- Padding: space-8 (32px) desktop / space-5 (20px) mobile
- Gap between cards in a grid: space-6 (24px)

### Pills / Badges (location chips, category tags)
- Background: transparent (on navy) or primary-tint (on light)
- Border: 1px solid white/30% (on navy) or primary (on light)
- Radius: radius-full
- Padding: space-2 space-5 (8px 20px)
- Font: Source Sans Pro, 14px, weight 600

### Callout / Highlight Box
Matches the confirmed live pattern ("Not sure which practitioner..." boxes seen on service pages).
- Background: primary-tint (#FDEEE8)
- Left border accent: 4px solid primary
- Radius: radius-md (6px), left corners only (0 on the bordered side)
- Padding: space-6 (24px)

### Section Defaults
- Vertical padding: space-20 (80px) desktop / space-10 (40px) mobile
- Horizontal padding: gutter (24px mobile / 40px desktop)
- Background alternation: background (#F9FAFB) ↔ white, or navy for high-contrast feature sections (matches confirmed hero pattern)
- Max width: content-width (720px) for text-heavy sections, wide-width (1120px) for grids/cards

### Checkmarks / List Icons
- Icon: Font Awesome `far fa-check-circle` (confirmed live pattern)
- Color: primary (#F25F2D)
- Size: 1.125rem, gap to text: space-3 (12px)
