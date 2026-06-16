# Design — InsurAI homepage: IBM-Carbon-inspired restyle

**Date:** 2026-06-08
**Branch:** `redesign/cofounder-homepage`
**Author:** brainstorming session (Rodricks Dylan + Claude)

## Goal

Apply an IBM-Carbon-inspired enterprise visual language to the **existing, live**
InsurAI homepage and shared shell (header/footer), while **keeping all real
content and brand truth** (PolicyAI live, InsurAI Agent in development, the
PitchLIVE26 award, partner logos, Hobart/Tasmania contact). Add two new
Carbon-styled content sections from the brief. The brief is a **style guide, not
a content replacement**.

This is a restyle, not a rebuild. Copy stays as-is except for the two new
sections.

## Decisions (locked during brainstorming)

1. **Scope:** Restyle the existing site; keep real content.
2. **Theme:** Light site with **dark (ink) hero and footer bands**; white & grey
   body sections; blue accent. (Matches IBM.com's actual feel and the brief.)
3. **Hero visual:** Replace the Three.js wireframe sphere with a new
   **Carbon-style workflow diagram** (Policy knowledge → AI assistants → broker
   review → client outcome). `HeroSphere.tsx` is left in the repo, just unused on
   home.
4. **Reach:** Homepage + shared shell (header/footer) only. Other routes
   (`/about`, `/media`, `/privacy`, `/terms`) inherit token changes but are not
   hand-tuned.
5. **Extra sections:** Add BOTH a 3-layer Knowledge/Intelligence/Control diagram
   and a 6-block use-cases grid as new Carbon-styled sections.

## Hard constraints

- **No IBM assets**: no IBM logo, name, icons, or the IBM Plex typeface. Use
  **Inter** (already loaded) + a system monospace for technical labels. Distinct
  InsurAI blue.
- No fake/unlabelled metrics. No emojis (swap the `✓` glyph for a thin SVG check).
- Do not overclaim (no "eliminates compliance risk" / "guarantees accuracy").
- Subtle, professional motion only. Remove the rainbow color-cycle shapes.
- Keep CSS Modules. **No Tailwind / shadcn** (their global resets would break the
  existing styles — per project history).

## Design language / tokens (`app/globals.css`)

| Token | From | To | Notes |
|-------|------|----|-------|
| `--radius` | `18px` | `0` | Sharp rectangular corners |
| body bg | light-blue gradient | `#ffffff` | Flat white |
| alt section bg | `--white` | `#f4f4f5` | Carbon grey |
| ink (hero/footer) | — | `#0b0f17` | New deep navy-black |
| ink-2 (panels on dark) | — | `#111722` | New |
| `--dark` (text) | `#111827` | `#161616` | Carbon-ish near-black |
| `--muted` text | `#6b7280` | `#525252` | |
| `--accent` | `#2366f0` | `#2366f0` (kept) | Brand continuity |
| accent-on-dark | — | `#5b8dff` | Links/text on ink |
| `--line` | `rgba(0,0,0,.08)` | `rgba(0,0,0,.12)` | Hairline |
| line-on-dark | — | `rgba(255,255,255,.14)` | |
| shadows | soft/large | mostly removed | Flat + 1px borders |

- **Type:** Inter for headings + UI; system mono (`ui-monospace, …`) for small
  uppercase technical eyebrow labels. Open Sans retired from primary use (body →
  Inter). Large headings, tight letter-spacing.
- **Buttons/pills:** lose `border-radius: 999px` → sharp rectangles. Primary =
  solid blue, square. Ghost = transparent + hairline border.
- **Grid-line texture:** generalize the existing masked thin-line grid
  (`heroVisual::before`) as a reusable subtle technical background accent.
- Remove `.heroShape*` / `.shape*` color-cycling blocks and `colorCycle*`
  keyframes.

## Layout system

- Container max ~1200px, generous whitespace.
- Sections divided by **full-width hairline lines** (`border-top: 1px`) rather
  than floating shadowed cards.
- Cards → **bordered panels** with hairline borders, sharp corners, no shadow.
  Reuse the existing `.featGrid` 1px-gap bordered-grid pattern for other grids.

## Section plan (homepage, top → bottom)

Content unchanged unless marked **NEW**.

1. **Announcement banner** — slim flat ink bar, left accent rule; drop
   shimmer-rainbow.
2. **Header (shell)** — flat white, hairline bottom border, square "Contact
   sales" button.
3. **Hero** — dark (ink). Mono eyebrow; Inter H1 (existing "orchestration
   platform" headline); lead; "AI-assisted. Broker-approved." as a labelled tag;
   square primary + ghost CTAs.
4. **Hero visual — NEW `WorkflowDiagram`** — four linked panels *Policy knowledge
   → AI assistants → Broker review → Client outcome*, thin connector lines, small
   labels, subtle connector pulse. CSS/SVG only. Replaces `HeroSphere` import in
   `page.tsx`.
5. **Value props** ("Built for the way brokers work") — 3 cards → bordered Carbon
   panel grid.
6. **NEW — Solution 3-layer diagram** ("InsurAI brings insurance knowledge into
   the workflow"): three stacked horizontal layer panels —
   - *Knowledge Layer*: "Policy wordings, underwriting notes, product guides,
     brokerage knowledge"
   - *Intelligence Layer*: "AI assistants that retrieve, structure, compare,
     summarise, and prepare information"
   - *Control Layer*: "Broker review, source visibility, workflow checkpoints,
     and human approval"

   Placed in the solution area (after value props / around the workflow content).
7. **Products + status pills** — pills → flat square tags. PolicyAI live / Agent
   in dev.
8. **ProductShowcase (PolicyAI)** — bordered panel, sharp image frame.
9. **InsurAI Agent callout** — keep concept; sharpen to hairline + small "IN
   DEVELOPMENT" tag, flat.
10. **WhySection** (tabs) — Carbon underline-tabs, sharp.
11. **"Built for insurance workflows"** + **WorkflowAccordion** — sharp hairline
    rows.
12. **Why this matters** grid — refine the existing bordered grid.
13. **NEW — Use-cases grid** ("Designed around real broking workflows"): six
    bordered cells, each one line —
    - Policy research, Renewal preparation, Insurer comparison, Underwriting
      question support, Quote workflow assistance, Internal knowledge support.
14. **Closing CTA** — flat bordered panel.
15. **Contact** — square inputs, hairline.
16. **Trust band / partner logos** — logos kept; boxes → sharp hairline (drop
    dashed-rounded).
17. **Footer (shell)** — dark (ink) band, white text, blue links, hairline
    columns.

## New component: `WorkflowDiagram`

- Files: `app/components/WorkflowDiagram.tsx` + `WorkflowDiagram.module.css`.
- Four stacked panels with a vertical/stepped connector spine; each panel has a
  mono index label, a title, and a one-line caption.
- Steps: `Policy knowledge` → `AI assistants` → `Broker review` → `Client
  outcome`.
- Subtle motion: a pulse/highlight travelling the connector (CSS animation,
  respects `prefers-reduced-motion`). No robots, no cartoons.
- Sits inside the dark hero; readable on `#0b0f17` (light text, hairline panels,
  blue accent on the active node).

## Files touched

- `app/globals.css` — token overhaul, remove rainbow keyframes.
- `app/page.module.css` — bulk restyle; new styles for solution-diagram &
  use-cases grid.
- `app/page.tsx` — swap hero visual import; insert two NEW sections with editable
  copy comments.
- `app/components/SiteLayout.tsx` — dark footer band classes.
- `app/components/IconButton.*`, `MobileNav.*` — square/sharp.
- `app/components/WhySection.module.css`, `WorkflowAccordion.module.css`,
  `ProductShowcase.module.css`, `ContactForm.tsx` — sharpen to match.
- **New:** `app/components/WorkflowDiagram.tsx` + `.module.css`.

## Out of scope

- Layout tuning of `/about`, `/media`, `/privacy`, `/terms` (inherit tokens only).
- Brief's standalone "Problem cards" section (existing value-props cover it).
- Content/copy rewrites of existing sections.
- Re-pointing the WhySection "Compliance/ConsentAI" tab (tracked separately in
  `docs/CHECKPOINT.md`).

## Verification

- `npm run dev`, visually confirm each section at desktop + mobile widths.
- Check dark hero/footer contrast (text legible on `#0b0f17`).
- Confirm no rainbow shapes remain, corners are sharp, no emoji glyphs.
- Confirm `prefers-reduced-motion` disables the diagram pulse.
