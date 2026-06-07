# InsurAI Homepage Redesign — Cofounder.co-Inspired Design

**Date:** 2026-06-07
**Status:** Approved design, pending spec review
**Author:** Brainstormed with Dylan Rodricks

## Goal

Redesign the InsurAI homepage to adopt the visual language of [cofounder.co](https://cofounder.co/) — a warm, editorial, "playful-but-premium" aesthetic — while keeping all existing InsurAI content, products, forms, images, CTAs, and SEO intact. The theme is adapted from "run a company with agents" to **"run a brokerage with AI."**

## Locked decisions

| Decision | Choice |
| --- | --- |
| Scope | Full homepage redesign (hero + all sections). Other pages restyled later/lightly via shared tokens. |
| Hero art | Pixel-art, insurance-themed scene, built in **CSS/canvas code** (no external image asset). |
| Accent | Cream + ink overall, **muted blue** retained for links, active nav, and small highlights. |
| Fonts | **Fraunces** (serif) for wordmark + display headlines; **Inter** for body. Open Sans removed. |
| Hero headline | "InsurAI helps you run a smarter brokerage with AI agents." (cofounder cadence) |

## Approach

**Token-driven restyle + one new pixel hero component.** Rather than rebuilding from scratch, we swap the global design tokens in `globals.css` (color, type, surfaces) so every existing section inherits cofounder's look, build a single new pixel-art hero component to replace `HeroSphere`, and adjust copy in `page.tsx`. This preserves all working content/forms/SEO and is lower-risk than a rewrite.

## Design system

### Color tokens (`globals.css` `:root`)
Replace the blue-gradient light theme with a warm cream/ink palette:

| Token | Old | New |
| --- | --- | --- |
| `--bg` / page background | `#f0f5ff` gradient | `#F4F1EA` (warm cream, flat — no gradient) |
| Card surface (`--white`) | `#ffffff` | keep `#ffffff`; introduce `--surface-warm: #FBFAF6` for alt cards |
| `--text` | `#333` | `#211E18` (warm ink) |
| `--dark` | `#111827` | `#1A1712` (warm near-black) |
| `--light-text` / `--muted` | `#6b7280` | `#6E665A` (warm grey) |
| `--line` | `rgba(0,0,0,0.08)` | `rgba(33,30,24,0.10)` (warm hairline) |
| `--primary` (accent) | `#2366f0` | `#3B6FD4` (muted/desaturated blue) for links, active nav, small highlights only |
| Shadows | blue-tinted | neutral soft: `0 1px 2px rgba(0,0,0,.04)`, `0 12px 40px rgba(33,30,24,.10)` |

Remove the multi-color `colorCycle` animations and blue geometric `shape1–4` backgrounds (they clash with the calm cream aesthetic). Sections sit on flat cream.

### Typography
- Add **Fraunces** via `next/font/google` in `layout.tsx` → CSS var `--font-fraunces`. Remove Open Sans.
- Keep **Inter** for body/UI.
- `body` font-family → Inter.
- Wordmark "InsurAI" → Fraunces (serif), single ink color (drop the `Insur`+blue`AI` split; or keep a subtle blue `AI` — implementer's call, default to single ink for cofounder fidelity).
- `.h1` / `.h2` / display headlines → Fraunces, slightly tighter tracking, weight 500–600 (cofounder headlines are not heavy).
- **Two-tone headline treatment:** a reusable pattern where the first clause is `--dark` and the trailing clause is `--muted`. Implemented via a `<span>` wrapper class (e.g. `.h2 .dim { color: var(--muted) }`).

### Buttons
Keep pill shape (`border-radius: 999px`). Redefine:
- `.btnPrimary` → solid dark ink (`background: var(--dark)`, white text), no gradient, no blue glow. Subtle lift on hover.
- `.btnGhost` / secondary → white/cream pill with warm hairline border, ink text.
- Reconcile with existing `IconButton` component so it matches (audit `IconButton.tsx`/`.module.css` during implementation; restyle to dark-ink pill).

## Section-by-section

### 1. Header (`SiteLayout.tsx` + tokens)
- Bar background: translucent cream (`rgba(244,241,234,0.85)` + blur) instead of white.
- Wordmark in Fraunces.
- Nav links warm grey → ink on hover; keep existing links (Products, Why InsurAI, How it works, Contact, About, In the Media).
- Actions: dark-ink pill "Contact sales".

### 2. Award banner (`page.tsx` + `.announcementBanner`)
- Replace dark navy→blue glowing gradient + shimmer with a subtle cream/ink strip: thin, low-contrast, small text, a small pill "Read more →".
- Keep content: "Winner — PitchLIVE26 (Insurtech Australia)".

### 3. Hero — NEW component `HeroPixel.tsx` (+ `HeroPixel.module.css`)
Replaces `HeroSphere` in `page.tsx`. Full-bleed, breaks out of the centered container to span viewport width.

**Pixel scene (canvas):**
- A `<canvas>` rendered with `image-rendering: pixelated`, drawn on a low-resolution grid (e.g. 160×90 logical pixels) then scaled up, so everything reads as chunky pixel art.
- Scene contents (insurance-themed, calm daytime): banded sky gradient, a pixel sun, a few pixel clouds, a city skyline silhouette including a taller "office" building, rolling green ground in the foreground. Optional small motifs (a pixel shield or umbrella) kept subtle.
- Gentle motion optional (drifting clouds) — implementer's discretion; must respect `prefers-reduced-motion`.
- Self-contained: no external image asset; deterministic drawing (no `Math.random` at module scope issues — fixed layout).

**Overlay (DOM, above canvas):**
- Two-tone headline (Fraunces): "InsurAI helps you run a smarter brokerage **with AI agents.**" (trailing clause dimmed or in a lighter tint readable over sky).
- Sub-line: short, e.g. "Automate compliance, policy answers, and client workflows — without the portal hopping."
- Two pill buttons: primary "Contact sales" (→ `#contact`), secondary "Explore products" (→ `#products`).
- **Floating glassy task cards** (echoing the products), e.g.:
  - `✓ Consent request sent — ConsentAI`
  - `✓ Policy summarised — PolicyAI`
  - `● Renewal flagged — running`
  Styled as small rounded translucent cards with blur and soft shadow, positioned over the scene.
- Text must stay legible over the art (use a subtle scrim/gradient behind text if needed).

**Pixel-edge transition:** bottom of the hero dissolves into the cream page via a CSS pixel-step mask / repeating-linear-gradient row of cream "pixels," echoing cofounder's grass edge.

**Responsive:** scene scales; on mobile the overlay stacks, cards reduce/hide, headline shrinks (reuse existing breakpoints at 980/760/600).

### 4. Tagline band (`page.tsx`)
New centered two-tone section between hero and products:
> "InsurAI is an insurance-tuned AI platform **designed to help you run a smarter brokerage.**"

### 5. Three value columns (`page.tsx`, reuse `.grid3`)
A 3-up row (cofounder's "Agentic departments / Human in loop / Fully extensible" analog):
- **Insurance-tuned intelligence** — models trained specifically for broker workflows: policy insights, consent auditing.
- **Human in the loop** — you stay in control; nothing happens without your approval.
- **Built for broker workflows** — fits how brokers already work, no portal hopping.

### 6. Product showcases (`ProductShowcase.tsx` + `.module.css`)
ConsentAI + PolicyAI, content unchanged. Restyle the card container to cofounder's soft mockup-card look: white/`--surface-warm` surface, warm hairline, large soft shadow, rounded corners, generous padding; screenshot sits in a rounded inner frame. Remove blue arrow ornaments / blue-tinted accents that clash; keep the per-product title color combos but desaturate toward the palette.

### 7. Why / How it works / Contact / Trust / Footer
- **Why** (`WhySection.tsx`), **How** (steps), **Contact** (form + meta), **Footer** (`SiteLayout.tsx`): inherit new tokens; verify each reads correctly on cream and uses ink/warm-grey. Steps and cards get the soft-shadow card treatment.
- **Trust band logos:** remove the dashed borders on `.logoBox`; present logos cleanly on cream (or in flat white tiles), centered. Keep all three partner logos.
- **Contact form** inputs: cream/white fields with warm hairlines; focus state uses the muted blue.

## Files affected

| File | Change |
| --- | --- |
| `app/layout.tsx` | Add Fraunces font, remove Open Sans, wire `--font-fraunces`. |
| `app/globals.css` | New color/type tokens; remove colorCycle + blue gradient bg; body→Inter. |
| `app/page.module.css` | Restyle buttons, headlines (two-tone helper), banner, sections, cards, steps, logos, contact, footer; remove blue geometric shapes. |
| `app/page.tsx` | New headline copy; add tagline band + 3 value columns; swap `HeroSphere`→`HeroPixel`; restyle banner markup. |
| `app/components/HeroPixel.tsx` (NEW) | Canvas pixel scene + DOM overlay (headline, buttons, floating cards). |
| `app/components/HeroPixel.module.css` (NEW) | Hero layout, overlay, glassy cards, pixel-edge transition. |
| `app/components/SiteLayout.tsx` | Header/footer restyle (wordmark serif, nav, pill). |
| `app/components/Header.tsx` | Unused on home (SiteLayout has its own header) — verify; restyle or leave. |
| `app/components/ProductShowcase.tsx` + `.module.css` | Soft mockup-card restyle; remove clashing accents. |
| `app/components/IconButton.tsx` + `.module.css` | Match new dark-ink pill. |
| `app/components/WhySection.tsx` + `.module.css` | Token/cream verification. |
| `app/components/ContactForm.tsx` | Inherit token styles; verify focus colors. |
| Old hero components (`HeroSphere`, `HeroBlob`, `HeroNetwork`, `HeroOrb`, `HeroScan`) | Left in place but unused by home; not deleted in this change. |

## Out of scope (this spec)
- Restyling About / Media / Privacy / Terms pages beyond what shared tokens give them for free.
- Sourcing real bitmap pixel art (decided: CSS/canvas scene).
- New copywriting beyond the headline/tagline/value-column lines above.
- Deleting the unused legacy hero components.

## Success criteria
- Homepage reads as clearly cofounder-inspired: cream background, Fraunces serif headlines with two-tone treatment, dark-ink pill buttons, soft cards, and a full-bleed pixel-art hero with floating task cards and a pixel-edge transition.
- All existing content, links, product showcases, contact form (and its API), and partner logos still present and functional.
- Muted-blue accent used sparingly (links/active nav/highlights).
- Responsive across existing breakpoints; respects `prefers-reduced-motion`.
- `npm run build` succeeds with no type errors.
