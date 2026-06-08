# Checkpoint — InsurAI homepage (resume tomorrow)

**Date:** 2026-06-07
**Branch:** `redesign/cofounder-homepage` (NOT merged to `main`)
**Last commit:** `2ef8866` — content: mark PolicyAI live + add InsurAI Agent pilot callout
**Working tree:** clean (only untracked assets: `public/images/download.png`, `images/UAC logo proud member low res.jpg`)

## How to resume
```bash
cd C:\Users\rodri\website
git checkout redesign/cofounder-homepage
npm run dev        # serves on http://localhost:3000 (or next free port)
```
Note: the user also runs a separate app on **localhost:3000/3001** ("InsurAI — Insurance Management"), so this dev server usually lands on **3002+**.

## Where the site stands
**2026-06-08 — Carbon-inspired restyle applied** (this branch, not merged). The homepage + shared shell were retheme­d to an IBM-Carbon-inspired enterprise look:
- **Theme:** light site with a **dark (ink #0b0f17) hero and footer**, white/grey body, brand blue `#2366f0` kept as accent, **sharp corners** (`--radius: 0`), hairline dividers, flat surfaces (gradients/soft shadows removed), Inter + system-mono labels.
- **Hero visual:** Three.js sphere replaced by a new CSS/SVG `WorkflowDiagram` component (Policy knowledge → AI assistants → Broker review → Client outcome). `HeroSphere.tsx` is kept but unused on home.
- **New sections:** a 3-layer Knowledge/Intelligence/Control diagram (after value props) and a 6-block use-cases grid (after "Why this matters").
- Spec: `docs/superpowers/specs/2026-06-08-carbon-restyle-design.md`; plan: `docs/superpowers/plans/2026-06-08-carbon-restyle.md`.
- `npm run build` passes; dev served on 3001 during the work.

Prior state (for reference): the **original (pre-cofounder) design** — light-blue theme, Three.js wireframe-sphere hero, Inter/Open Sans, blue pill CTAs, blue "AI" wordmark. The cofounder redesign was built then fully reverted; only content/structure changes were kept before this restyle.

### Homepage section order (`app/page.tsx`)
1. **Announcement banner** — "Winner — PitchLIVE26 (Insurtech Australia)"
2. **Hero** — H1 "InsurAI is an orchestration platform designed to help you run a smarter brokerage" + PolicyAI-focused lead + HeroSphere
3. **Value props** — "Built for the way brokers work" (3 cards)
4. **Products** — status pills (🟢 PolicyAI · Live / 🟡 InsurAI Agent · In development); PolicyAI ProductShowcase
5. **InsurAI Agent callout** — "In development" dashed card: orchestration layer, seeking a brokerage for an early-access pilot, mutual benefit, CTAs → contact
6. **Why InsurAI** — `WhySection` (tabs). NOTE: still has a "Compliance" tab framed around consent/ConsentAI (leftover) — candidate to re-point or remove.
7. **Built for insurance workflows, not generic chat** — intro + **WorkflowAccordion** (5 steps: Understand / Apply your brokerage's rules / Retrieve your firm's knowledge / Reason / Execute; steps 2 & 3 are brokerage-specific "unique advantage")
8. **Why this matters** — bordered **features grid** (6 cells with icons)
9. **Closing CTA** — "Give every broker an AI policy expert"
10. **Contact** + **Trust band** + **Footer**

### Copy decisions kept
- Headline = the "orchestration platform" line.
- "augmented" replaces "tuned/trained" throughout.
- Only **PolicyAI** as a live product (ConsentAI removed).

## Components added (all ported to CSS Modules — no Tailwind/shadcn introduced)
- `app/components/WorkflowAccordion.tsx` (+ `.module.css`) — React state + CSS grid-rows animation, inline SVG icons.
- Bordered features grid — inline in `page.tsx` using `.featGrid` styles in `page.module.css`.
- InsurAI Agent callout + status pills — inline in `page.tsx` using `.agentCard`/`.statusPill` styles.

### Removed during iteration (don't re-add unless asked)
- Shader feature cards (`@paper-design/shaders-react`) — user disliked.
- Generic-AI-vs-InsurAI comparison — user reverted.
- Workflow step carousel (`embla-carousel-react`) — replaced by the accordion.
- The `Action = Execute(Reason(...))` formula box — removed.
- All deps for the above were uninstalled.

## Open / candidate next steps
- **WhySection tabs** still reference consent/ConsentAI — re-point to PolicyAI/decision-engine themes or remove for full consistency. (User was asked, hasn't decided.)
- A shadcn "Features section" (3-row illustrated) was offered for the workflow section; the clarifying question was rejected — revisit if the user wants it.
- Decide whether to **merge `redesign/cofounder-homepage` → `main`** or keep iterating.
- `public/images/download.png` (the generated Sydney pixel art) is untracked and currently unused — keep or remove.

## Process notes
- This project uses **CSS Modules**, not Tailwind. When integrating shadcn-block components, port them (CSS Modules + inline SVGs) rather than adding Tailwind (its global reset would break the existing design).
- Pitfall observed: running `npm run build` while `npm run dev` is live corrupts the dev `.next` ("Cannot find module './xxx.js'"). Stop dev before building, or just rely on hot-reload. Orphaned dev servers pile up on ports 3002–3010; kill with PowerShell `Get-NetTCPConnection -LocalPort <p> | Stop-Process`.
