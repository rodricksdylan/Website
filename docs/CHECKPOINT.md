# Checkpoint — InsurAI site (resume tomorrow)

**Date:** 2026-06-08
**Branch:** `redesign/cofounder-homepage` (NOT merged to `main`)
**Last commit:** `eab8577` — content: trim partnerships page to high-level (protect secret sauce)
**Working tree:** clean (only untracked assets: `public/images/download.png`, `images/UAC logo proud member low res.jpg`)
**Build:** `npm run build` passed after the Carbon restyle; later changes are copy/new-page only (no build re-run needed, dev hot-reload was green throughout).

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
- **Hero visual:** the Three.js orb (`HeroSphere`) was briefly swapped for a `WorkflowDiagram`, then **restored at the user's request** — the orb is back on the dark hero (glowing blue wireframe on ink). `WorkflowDiagram.tsx`/`.module.css` now exist but are **unused** (candidate to delete).
- **New sections:** a 3-layer diagram (now headed "InsurAI integrates insurance-augmented AI with your current workflow") and a 6-block use-cases grid (after "Why this matters").
- Spec: `docs/superpowers/specs/2026-06-08-carbon-restyle-design.md`; plan: `docs/superpowers/plans/2026-06-08-carbon-restyle.md`.
- `npm run build` passes; dev served on 3001 during the work.

**2026-06-08 (later) — copy pass + new Partnerships page + brochure.** See the sections below.

Prior state (for reference): the **original (pre-cofounder) design** — light-blue theme, Three.js wireframe-sphere hero, Inter/Open Sans, blue pill CTAs, blue "AI" wordmark. The cofounder redesign was built then fully reverted; only content/structure changes were kept before this restyle.

### Homepage section order (`app/page.tsx`)
1. **Announcement banner** — "Winner — PitchLIVE26 (Insurtech Australia)"
2. **Hero** — H1 "InsurAI is an orchestration platform designed to help you run a smarter brokerage" + PolicyAI-focused lead + **HeroSphere orb** (restored). Hero ticks include "Precise data extraction from documents". The "AI-assisted. Broker-approved." tag was **removed**.
3. **Value props** — **"Built for brokers, by a broker"** (3 cells, bordered grid)
4. **3-layer diagram** — "InsurAI integrates insurance-augmented AI with your current workflow"; copy uses "scour approved insurance material…"
5. **Products** — status pills (🟢 PolicyAI · Live / 🟡 InsurAI Agent · In development); PolicyAI ProductShowcase
6. **InsurAI Agent callout** — flat grey panel; single **"Request early access"** CTA (the "Partner on the pilot" button was removed; extra top spacing added). Copy now "looking for **brokerages**" (plural).
7. **Why InsurAI** — `WhySection` (tabs). NOTE: still has a "Compliance" tab framed around consent/ConsentAI (leftover) — candidate to re-point or remove.
8. **Built for insurance workflows, not generic chat** — intro (the leading "So" was removed) + **WorkflowAccordion** (5 steps). Step 1 = "InsurAI first identifies the broker's task…"; step 2 = "…built to function as per your brokerage's requirement, not forced to use a generic template."; step 4 = "work out the next best step".
9. **Why this matters** — bordered **features grid** (6 cells). "AI reasoning" cell = "Works out next best step, not just a reply."; intro trimmed (removed the "considering the request, the rules…" clause).
10. **Use-cases grid** — "Designed around real broking workflows" (6 cells)
11. **Closing CTA** — "Give every broker an AI policy expert"
12. **Contact** + **Trust band** + **Footer** (footer is now the dark ink band)

### Copy decisions kept
- Headline = the "orchestration platform" line.
- "augmented" replaces "tuned/trained" throughout.
- Only **PolicyAI** as a live product (ConsentAI removed).
- "long policy documents" → **"complex and large policy documents"** throughout.
- Typos in user-dictated copy were silently corrected to correct (AU) spelling (requirement, function, forced, template).

## Partnerships page (`app/partnerships/`) — NEW 2026-06-08
- Route `/partnerships`, Carbon-styled, reuses `page.module.css` classes + small `partnerships.module.css`. Linked in header nav, footer, and MobileNav; `SiteLayout` `CurrentPage` type now includes `"partnerships"`.
- Sections: Hero ("Bring insurance-grade AI to your platform") → Who we partner with (CRM / workflow / underwriting agencies & networks / tech & AI partners) → "Enhance your AI with insurance intelligence" (statement "Your interface. Your model. Our insurance grounding." + 3 benefit tiles) → "Built to connect, not to silo" (Agent ecosystem) → CTA.
- **Deliberately high-level** — user said the first draft gave away too much "secret sauce", so the architecture diagram and mechanism wording (how grounding works) were removed. Keep it at this altitude.
- Copy guideline: **avoid the bare term "RAG"** in user-facing copy — use "grounded / source-aware insurance intelligence" / "safety net".

## Brochure (`brochure/`) — NEW 2026-06-08
- One-page A4 print-ready PDF: `brochure/InsurAI-flyer.pdf`; editable source `brochure/insurai-flyer.html`.
- Self-contained HTML using the brand tokens; rendered with **headless Chrome**:
  `& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --no-pdf-header-footer --no-sandbox --allow-file-access-from-files "--print-to-pdf=C:\Users\rodri\website\brochure\InsurAI-flyer.pdf" "file:///C:/Users/rodri/website/brochure/insurai-flyer.html"`
- Partner logos are referenced via `file:///` absolute paths to `public/images/`. To verify the PDF, open it with the Read tool (it renders pages). Re-render after editing the HTML.
- Mirrors homepage copy (kept in sync: "Built for brokers, by a broker"; "complex and large documents").

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
- **Branch decision pending:** finishing-a-development-branch reached but the user kept iterating. Still need to decide **merge `redesign/cofounder-homepage` → `main`** / open a PR / keep.
- **WhySection tabs** still reference consent/ConsentAI — re-point to PolicyAI/decision-engine themes or remove for full consistency. (User asked, hasn't decided.)
- **Unused `WorkflowDiagram`** component (`app/components/WorkflowDiagram.*`) — orphaned after the orb was restored. Delete if not wanted.
- **PolicyAI "AI" renders gold** (#D4AF37) in the ProductShowcase title (its own product brand), not the InsurAI blue. Intentional for now; user aware. Unify to blue only if asked.
- **Partner CTA** currently points to `/#contact` + `contact@insurai.com.au`. User may want a partner-specific email/form on `/partnerships`.
- Minor leftovers flagged in the restyle review (non-blocking): `.cpuStage` in WhySection still uses gradient/shadow; soft `--shadow-lg` remains on image frames; dead pre-existing CSS rules in `page.module.css` (`.arrow*`, `.productsLayout`, `.formula`, etc.).
- `public/images/download.png` (the generated Sydney pixel art) is untracked and currently unused — keep or remove.

## What changed today, file-by-file (2026-06-08)
- `app/globals.css`, `app/page.module.css` — Carbon tokens + full restyle (see plan).
- `app/page.tsx` — restyle + many copy edits + 3-layer & use-cases sections + orb restored.
- `app/components/` — `IconButton`, `MobileNav`, `WhySection`, `WorkflowAccordion`, `ProductShowcase`, `SiteLayout` restyled/updated; `WorkflowDiagram.*` added (now unused).
- `app/partnerships/` — NEW page + module.
- `brochure/` — NEW flyer PDF + HTML.
- `docs/superpowers/` — spec + plan.

## Process notes
- This project uses **CSS Modules**, not Tailwind. When integrating shadcn-block components, port them (CSS Modules + inline SVGs) rather than adding Tailwind (its global reset would break the existing design).
- Pitfall observed: running `npm run build` while `npm run dev` is live corrupts the dev `.next` ("Cannot find module './xxx.js'"). Stop dev before building, or just rely on hot-reload. Orphaned dev servers pile up on ports 3002–3010; kill with PowerShell `Get-NetTCPConnection -LocalPort <p> | Stop-Process`.
