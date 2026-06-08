# Carbon-Inspired Homepage Restyle — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing live InsurAI homepage + shared shell to an IBM-Carbon-inspired enterprise visual language (light site, dark hero/footer, sharp corners, hairline grid, minimal gradients) while keeping all real content, and add two new Carbon-styled sections (3-layer diagram, 6 use-cases).

**Architecture:** Most of the restyle is driven by redefining design tokens in `app/globals.css` — many components reference `var(--radius)`, `var(--gradient-primary)`, `var(--shadow-sm)`, so flattening those tokens cascades automatically. Remaining hard-coded radii/gradients/shadows are fixed with targeted edits. Two net-new components (`WorkflowDiagram`) and two new homepage sections add the brief's extra content.

**Tech Stack:** Next.js 14 (App Router), React 18, TypeScript, CSS Modules (no Tailwind/shadcn), `next/font` Inter.

**Verification model:** This is visual CSS work with no test framework. Each task verifies via the running dev server (`npm run dev`, view at the printed localhost port) and/or `npm run build`. Do NOT run `npm run build` while `npm run dev` is live (corrupts `.next`, per `docs/CHECKPOINT.md`) — stop dev first.

**Spec:** `docs/superpowers/specs/2026-06-08-carbon-restyle-design.md`

---

## File map

| File | Responsibility | Action |
|------|----------------|--------|
| `app/globals.css` | Design tokens, base body, remove rainbow keyframes | Modify |
| `app/layout.tsx` | Body font → Inter | Modify |
| `app/page.module.css` | Bulk homepage restyle + new section styles | Modify |
| `app/page.tsx` | Swap hero visual; insert 2 new sections | Modify |
| `app/components/SiteLayout.tsx` | Dark footer band markup | Modify |
| `app/components/IconButton.module.css` | Square Carbon button | Modify |
| `app/components/MobileNav.module.css` | Sharp menu | Modify |
| `app/components/WhySection.module.css` | Sharp underline tabs | Modify |
| `app/components/WorkflowAccordion.module.css` | Sharp hairline rows | Modify |
| `app/components/ProductShowcase.module.css` | Flat frame, square CTAs, drop blobs | Modify |
| `app/components/WorkflowDiagram.tsx` | NEW hero workflow diagram | Create |
| `app/components/WorkflowDiagram.module.css` | NEW diagram styles | Create |

`ContactForm.tsx` needs no change — it consumes `.form/.input/.textarea/.btn` from `page.module.css`, which Task 2/Task 12 restyle. `HeroSphere.tsx` stays in the repo, just unimported.

---

## Task 1: Design tokens (globals.css) + body font

**Files:**
- Modify: `app/globals.css:1-44` (`:root` + `html, body`)
- Modify: `app/globals.css` (remove `.cpu-architecture` rainbow? NO — keep; only used by CpuArchitecture) — leave CPU keyframes intact.
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace the `:root` block** (`app/globals.css` lines 1-26) with:

```css
:root {
  /* Brand blue (kept for continuity) */
  --primary: #2366f0;
  --primary-dark: #1a4fc4;
  --primary-light: #5b8dff;        /* blue for use on dark surfaces */

  /* Carbon-inspired surfaces */
  --ink: #0b0f17;                  /* dark hero / footer band */
  --ink-2: #111722;               /* raised panels on dark */
  --white: #ffffff;
  --grey-50: #f4f4f5;             /* alt section background */
  --grey-100: #e8e8ea;

  /* Text */
  --dark: #161616;
  --text: #161616;
  --light-text: #525252;

  /* Hairlines */
  --line: rgba(0, 0, 0, 0.12);
  --line-dark: rgba(255, 255, 255, 0.14);

  /* Compatibility aliases (existing components read these) */
  --bg: var(--grey-50);
  --muted: var(--light-text);
  --accent: var(--primary);
  --accent2: var(--primary);
  --light-bg: var(--grey-50);
  --light-bg-gradient: var(--white);

  /* Flattened gradients/shadows — restyles many components via the cascade */
  --gradient-primary: var(--primary);
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.10);
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.10);

  /* Geometry */
  --radius: 0px;
  --max: 1200px;
}
```

- [ ] **Step 2: Replace the `html, body` rule** (`app/globals.css` lines 34-40) with:

```css
html, body {
  background: var(--white);
  color: var(--text);
  line-height: 1.6;
  font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
```

- [ ] **Step 3: Set body font to Inter** — in `app/layout.tsx`, the body inherits via `html, body` font-family above, so no JSX change is strictly required. Confirm `inter.variable` is still on `<html>` (it is, line 32). No edit needed; leave `layout.tsx` as-is unless Step 2 didn't take effect.

- [ ] **Step 4: Verify**

Run: `npm run dev` and open the printed URL. Expected: page background is flat white (no light-blue gradient), corners on existing cards look square, body text renders in Inter. Layout may look "unstyled-ish" in spots — that's expected mid-restyle.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: Carbon design tokens — sharp corners, flat surfaces, ink palette"
```

---

## Task 2: Shared primitives in page.module.css (buttons, cards, sections, headings)

**Files:**
- Modify: `app/page.module.css`

- [ ] **Step 1: Sharpen buttons.** Replace `.btn` (lines 48-62), `.btnPrimary` (64-74), `.btnGhost` (76-85) with:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0;
  padding: 14px 22px;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  text-decoration: none;
  transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
}

.btnPrimary {
  border: 1px solid var(--primary);
  background: var(--primary);
  box-shadow: none;
  color: var(--white);
}

.btnPrimary:hover {
  transform: none;
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  box-shadow: none;
}

.btnGhost {
  background: transparent;
  color: var(--dark);
  border-color: var(--line);
}

.btnGhost:hover {
  background: var(--grey-50);
  border-color: var(--dark);
}
```

- [ ] **Step 2: Headings.** Replace `.h1` (20-28) and `.h2` (37-41), `.h3` (43-46):

```css
.h1 {
  font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  font-size: 60px;
  line-height: 1.04;
  letter-spacing: -0.03em;
  margin: 0 0 22px;
  font-weight: 700;
  color: var(--dark);
}

.h2 {
  font-size: 36px;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0 0 10px;
  font-weight: 700;
  color: var(--dark);
}

.h3 {
  font-size: 18px;
  margin: 0 0 8px;
  font-weight: 700;
  color: var(--dark);
}
```

- [ ] **Step 3: Cards & sections.** Replace `.card` (906-912):

```css
.card {
  border-radius: 0;
  border: 1px solid var(--line);
  background: var(--white);
  padding: 28px;
  box-shadow: none;
}
```

Replace `.sectionAlt` (589-593):

```css
.sectionAlt {
  background: var(--grey-50);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
```

Add a hairline top divider to every section — append to `.section` (526-530) so it reads:

```css
.section {
  padding: 88px 0;
  position: relative;
  overflow: hidden;
  border-top: 1px solid var(--line);
}
```

- [ ] **Step 4: Eyebrow → mono technical label.** Replace `.eyebrowText` (277-284):

```css
.eyebrowText {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary);
}
```

- [ ] **Step 5: Pills/tags sharpen.** Replace `.pill` (248-261):

```css
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid var(--line);
  background: var(--white);
  border-radius: 0;
  color: var(--dark);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 14px;
  box-shadow: none;
}
```

- [ ] **Step 6: Verify** — reload dev server. Expected: all buttons are sharp rectangles; primary buttons solid blue (no gradient/shadow); sections separated by thin top lines; alt sections are light grey.

- [ ] **Step 7: Commit**

```bash
git add app/page.module.css
git commit -m "style: sharp Carbon buttons, cards, sections, headings"
```

---

## Task 3: IconButton → Carbon square button

The primary CTA across the site. Carbon style = square, text left, fixed arrow icon right (no sliding pill circle).

**Files:**
- Modify: `app/components/IconButton.module.css` (full replace)

- [ ] **Step 1: Replace the entire file** `app/components/IconButton.module.css` with:

```css
.iconBtn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 40px;
  height: 48px;
  padding: 0 16px 0 16px;
  border-radius: 0;
  border: 1px solid var(--primary);
  background: var(--primary);
  color: var(--white);
  font: 600 14px/1 var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s ease, border-color 0.18s ease;
}

.iconBtn:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
}

.label {
  position: relative;
  z-index: 1;
  white-space: nowrap;
}

/* keep the .circle span as a plain icon slot (no circle, no slide) */
.circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background: transparent;
  transition: transform 0.18s ease;
}

.iconBtn:hover .circle {
  transform: translateX(3px);
}

.icon {
  width: 16px;
  height: 16px;
}

@media (prefers-reduced-motion: reduce) {
  .iconBtn, .circle { transition: none; }
  .iconBtn:hover .circle { transform: none; }
}
```

(The `IconButton.tsx` markup is unchanged — `.circle` now just holds the arrow with no animated background.)

- [ ] **Step 2: Verify** — the header "Contact sales" button is now a sharp blue rectangle with the arrow on the right; arrow nudges right on hover. No pill, no sliding circle.

- [ ] **Step 3: Commit**

```bash
git add app/components/IconButton.module.css
git commit -m "style: Carbon square IconButton with fixed arrow"
```

---

## Task 4: Header / topbar + nav + MobileNav

**Files:**
- Modify: `app/page.module.css` (`.topbar`, `.brand`, `.nav a`, `.actions`)
- Modify: `app/components/MobileNav.module.css`

- [ ] **Step 1: Topbar.** Replace `.topbar` (92-100):

```css
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid var(--line);
  box-shadow: none;
}
```

- [ ] **Step 2: Brand + nav.** Replace `.brandMark` (120-122) to keep size, and `.nav a` (134-140):

```css
.brandMark {
  font-size: 20px;
}
```
```css
.nav a {
  color: var(--light-text);
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  letter-spacing: -0.005em;
  transition: color 0.18s ease;
}
```

- [ ] **Step 3: MobileNav sharpen.** In `app/components/MobileNav.module.css`, change these radii: `.burger` `border-radius: 12px` → `0` (line 9); `.panel` `border-radius: 16px` → `0` (line 38) and `box-shadow: var(--shadow-lg)` stays; `.panel a` `border-radius: 12px` → `0` (line 61); `.btnPrimary, .btnGhost` `border-radius: 12px` → `0` (line 84). Replace `.btnPrimary` background `var(--gradient-primary)` is already flat blue via token; set its `box-shadow: none` (lines 96-97 hover and 94-95 base → remove box-shadow / transform).

Concretely replace `.btnPrimary` (92-102) with:

```css
.btnPrimary {
  background: var(--primary);
  color: var(--white);
  border: 1px solid var(--primary);
  box-shadow: none;
}

.btnPrimary:hover {
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  transform: none;
  box-shadow: none;
}
```

- [ ] **Step 4: Verify** — header is flat white with a hairline bottom border; nav links lighter weight; at <760px the burger is a sharp square and the menu panel is sharp.

- [ ] **Step 5: Commit**

```bash
git add app/page.module.css app/components/MobileNav.module.css
git commit -m "style: flat Carbon header and mobile nav"
```

---

## Task 5: Announcement banner

**Files:**
- Modify: `app/page.module.css` (`.announcementBanner` + pseudo-elements + `.announcementBanner a`)

- [ ] **Step 1: Flatten to a slim ink bar.** Replace `.announcementBanner` (158-173) with:

```css
.announcementBanner {
  position: relative;
  overflow: hidden;
  background: var(--ink);
  color: var(--white);
  text-align: center;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid var(--line-dark);
}
```

- [ ] **Step 2: Remove the radial glow + shimmer.** Delete the `.announcementBanner::before` (175-185) and `.announcementBanner::after` (187-204) rules and the `@keyframes shimmer` (206-209). Replace the `.bannerHighlight` (211-214) with a blue accent label:

```css
.bannerHighlight {
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--primary-light);
}
```

- [ ] **Step 3: Square the link tag.** Replace `.announcementBanner a` (216-227) with:

```css
.announcementBanner a {
  position: relative;
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--line-dark);
  font-size: 13px;
  transition: background 0.18s ease;
}

.announcementBanner a:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.3);
}
```

- [ ] **Step 4: Verify** — banner is a slim near-black bar, "Winner — PitchLIVE26…" with a blue highlight and a sharp "Read more" tag; no rainbow shimmer.

- [ ] **Step 5: Commit**

```bash
git add app/page.module.css
git commit -m "style: slim ink announcement banner"
```

---

## Task 6: Hero section — dark + remove rainbow shapes

**Files:**
- Modify: `app/page.module.css` (`.hero`, `.heroGrid`, `.lead`, `.ticks`, `.heroVisual`, remove `.heroShape*`/`colorCycle*`)

- [ ] **Step 1: Make the hero dark.** Replace `.hero` (235-239) with:

```css
.hero {
  padding: 110px 0 96px;
  position: relative;
  overflow: hidden;
  background: var(--ink);
  color: var(--white);
}
```

- [ ] **Step 2: Recolour hero text.** Append these overrides right after the `.hero` rule:

```css
.hero .h1 { color: var(--white); }
.hero .lead { color: rgba(255, 255, 255, 0.72); }
.hero .ticks li { color: rgba(255, 255, 255, 0.9); }
.hero .ticks li::before { content: ""; }
```

(The `✓` glyph is removed; Step 3 adds an SVG-free thin marker.)

- [ ] **Step 3: Replace tick marker with a thin square (no emoji glyph).** Replace `.ticks li` (319-324) and `.ticks li::before` (326-333) with:

```css
.ticks li {
  position: relative;
  padding-left: 22px;
  color: var(--dark);
  font-weight: 500;
}

.ticks li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 8px;
  height: 8px;
  background: var(--primary-light);
}
```

- [ ] **Step 4: Add a labelled "AI-assisted. Broker-approved." tag.** This is supporting copy from the brief. In `app/page.tsx`, inside `.heroCopy`, after the `.heroCta` div (around line 39), add:

```tsx
{/* EDIT COPY: hero supporting line */}
<div className={styles.heroTag}>
  <span className={styles.heroTagDot} />
  AI-assisted. Broker-approved.
</div>
```

Add styles to `page.module.css`:

```css
.heroTag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 28px;
  padding: 6px 12px;
  border: 1px solid var(--line-dark);
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
}
.heroTagDot {
  width: 7px;
  height: 7px;
  background: var(--primary-light);
}
```

- [ ] **Step 5: Tidy hero visual grid texture for dark bg.** Replace `.heroVisual::before` (340-352) `background-image` colours to light hairlines:

```css
.heroVisual::before {
  content: "";
  position: absolute;
  inset: -10% -8% -10% -8%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, #000 30%, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 65% 65% at 50% 50%, #000 30%, transparent 78%);
  pointer-events: none;
  z-index: 0;
}
```

- [ ] **Step 6: Delete the rainbow hero shapes.** Remove `.heroGeometricBg` (354-363), `@keyframes colorCycle`/`colorCycle2`/`colorCycle3`/`colorCycle4` (365-412), and `.heroShape1`–`.heroShape4` (414-452). These are unused once the sphere is removed (Task 7) but delete now to keep CSS clean.

- [ ] **Step 7: Verify** — hero is near-black with white headline, muted subhead, a mono "AI-ASSISTED. BROKER-APPROVED." tag, square CTAs, and tick rows with small blue square markers. (The right column still shows the old sphere until Task 7.)

- [ ] **Step 8: Commit**

```bash
git add app/page.module.css app/page.tsx
git commit -m "style: dark Carbon hero, remove rainbow shapes, add supporting tag"
```

---

## Task 7: WorkflowDiagram component (new hero visual)

**Files:**
- Create: `app/components/WorkflowDiagram.tsx`
- Create: `app/components/WorkflowDiagram.module.css`
- Modify: `app/page.tsx` (swap `HeroSphere` → `WorkflowDiagram`)

- [ ] **Step 1: Create `app/components/WorkflowDiagram.tsx`:**

```tsx
import styles from "./WorkflowDiagram.module.css";

/* EDIT COPY: hero workflow diagram steps */
const STEPS = [
  { id: "01", title: "Policy knowledge", caption: "Wordings, guides, brokerage knowledge" },
  { id: "02", title: "AI assistants", caption: "Retrieve, structure, compare, summarise" },
  { id: "03", title: "Broker review", caption: "Source visibility, human approval" },
  { id: "04", title: "Client outcome", caption: "Faster, consistent, broker-led advice" },
];

export default function WorkflowDiagram() {
  return (
    <div className={styles.diagram} aria-hidden="true">
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li
            key={s.id}
            className={styles.step}
            style={{ ["--i" as unknown as string]: i } as React.CSSProperties}
          >
            <div className={styles.node}>
              <span className={styles.index}>{s.id}</span>
              <div className={styles.body}>
                <span className={styles.title}>{s.title}</span>
                <span className={styles.caption}>{s.caption}</span>
              </div>
              <span className={styles.dot} />
            </div>
            {i < STEPS.length - 1 && <span className={styles.connector} />}
          </li>
        ))}
      </ol>
    </div>
  );
}
```

- [ ] **Step 2: Create `app/components/WorkflowDiagram.module.css`:**

```css
.diagram {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
  padding: 8px;
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.step {
  position: relative;
}

.node {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  background: var(--ink-2);
  border: 1px solid var(--line-dark);
  opacity: 0;
  animation: nodeIn 0.5s ease forwards;
  animation-delay: calc(var(--i) * 0.12s);
}

.index {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  color: var(--primary-light);
  letter-spacing: 0.06em;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: var(--white);
}

.caption {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.4;
}

.dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  flex-shrink: 0;
}

.connector {
  display: block;
  width: 1px;
  height: 22px;
  margin-left: 30px;
  background: var(--line-dark);
  position: relative;
  overflow: hidden;
}

.connector::after {
  content: "";
  position: absolute;
  left: -1px;
  top: -50%;
  width: 3px;
  height: 50%;
  background: linear-gradient(180deg, transparent, var(--primary-light), transparent);
  animation: pulse 2.4s linear infinite;
  animation-delay: calc(var(--i) * 0.3s);
}

@keyframes nodeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { top: -55%; }
  100% { top: 105%; }
}

@media (prefers-reduced-motion: reduce) {
  .node { opacity: 1; animation: none; }
  .connector::after { animation: none; display: none; }
}

@media (max-width: 980px) {
  .diagram { max-width: 520px; margin-top: 8px; }
}
```

- [ ] **Step 3: Wire into `page.tsx`.** Change the import (line 8) from:

```tsx
import HeroSphere from "./components/HeroSphere";
```
to:
```tsx
import WorkflowDiagram from "./components/WorkflowDiagram";
```

And in the hero visual block (lines 49-51) replace `<HeroSphere />` with `<WorkflowDiagram />`:

```tsx
{/* Hero visual */}
<div className={styles.heroVisual} aria-hidden="true">
  <WorkflowDiagram />
</div>
```

- [ ] **Step 4: Verify** — the hero right column shows four stacked dark panels (Policy knowledge → AI assistants → Broker review → Client outcome) with mono indices, blue dots, thin connectors with a travelling blue pulse, fading in on load. With OS "reduce motion" on, panels are static and pulses hidden.

- [ ] **Step 5: Commit**

```bash
git add app/components/WorkflowDiagram.tsx app/components/WorkflowDiagram.module.css app/page.tsx
git commit -m "feat: Carbon workflow-diagram hero visual (replaces sphere)"
```

---

## Task 8: Value props grid + Products section + status pills

**Files:**
- Modify: `app/page.module.css` (`.grid3`, value-prop `.card` spacing, `.statusPill`, `.statusRow`, remove `.shape*`)
- Modify: `app/page.tsx` (value props wrapper class)

- [ ] **Step 1: Convert value props to a bordered Carbon grid.** Add a dedicated class so the 3 cards form a hairline grid (mirrors `.featGrid`). In `page.module.css` add:

```css
/* Bordered value-prop grid (Carbon tile pattern) */
.valueGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-top: 8px;
}
.valueCell {
  background: var(--white);
  padding: 36px;
}
@media (max-width: 900px) {
  .valueGrid { grid-template-columns: 1fr; }
  .valueCell { padding: 28px; }
}
```

In `app/page.tsx`, replace the value-props `.grid3` wrapper (line 65) `<div className={styles.grid3}>` with `<div className={styles.valueGrid}>`, and change each of the three `<div className={styles.card}>` (lines 66, 72, 78) to `<div className={styles.valueCell}>`.

- [ ] **Step 2: Square the status pills.** Replace `.statusPill` (1245-1256):

```css
.statusPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--dark);
  padding: 7px 12px;
  border-radius: 0;
  border: 1px solid var(--line);
  background: var(--white);
}
```

- [ ] **Step 3: Remove the products-section rainbow shapes.** Delete `.geometricBg` (532-541) and `.shape1`–`.shape4` (543-581) from `page.module.css`, and remove the `<div className={styles.geometricBg}>…</div>` block (lines 90-95) from `page.tsx`. Keep the `#products .container { position: relative; z-index: 1; }` rule.

- [ ] **Step 4: Verify** — "Built for the way brokers work" is a 3-column bordered tile grid with hairline dividers; status pills are sharp; the Products section has no rainbow blobs behind it.

- [ ] **Step 5: Commit**

```bash
git add app/page.module.css app/page.tsx
git commit -m "style: bordered value-prop grid, square status pills, drop section blobs"
```

---

## Task 9: NEW — Solution 3-layer diagram section

Brief content: Knowledge / Intelligence / Control layers. Place it after the value-props section, before Products.

**Files:**
- Modify: `app/page.tsx` (insert section)
- Modify: `app/page.module.css` (add styles)

- [ ] **Step 1: Insert the section** in `app/page.tsx` immediately after the Value props `</section>` (after line 86) and before the Products `<section>` (line 88):

```tsx
{/* Solution — 3-layer diagram. EDIT COPY below. */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionHead}>
      <h2 className={styles.h2}>InsurAI brings insurance knowledge into the workflow</h2>
      <p className={styles.muted}>
        Our platform helps teams search approved insurance material, compare product
        information, prepare submissions, and move through quote and renewal workflows
        with more confidence.
      </p>
    </div>

    <div className={styles.layerStack}>
      <div className={styles.layer}>
        <span className={styles.layerTag}>Knowledge layer</span>
        <p className={styles.layerText}>
          Policy wordings, underwriting notes, product guides, brokerage knowledge
        </p>
      </div>
      <div className={styles.layer}>
        <span className={styles.layerTag}>Intelligence layer</span>
        <p className={styles.layerText}>
          AI assistants that retrieve, structure, compare, summarise, and prepare information
        </p>
      </div>
      <div className={styles.layer}>
        <span className={styles.layerTag}>Control layer</span>
        <p className={styles.layerText}>
          Broker review, source visibility, workflow checkpoints, and human approval
        </p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add styles** to `app/page.module.css`:

```css
/* Solution 3-layer diagram */
.layerStack {
  display: grid;
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-top: 24px;
}
.layer {
  background: var(--white);
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  align-items: center;
  padding: 32px 36px;
}
.layer:nth-child(2) {
  background: var(--grey-50);
}
.layerTag {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--primary);
}
.layerText {
  margin: 0;
  font-size: 17px;
  line-height: 1.55;
  color: var(--dark);
}
@media (max-width: 760px) {
  .layer {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 24px;
  }
}
```

- [ ] **Step 3: Verify** — a new section shows three stacked full-width layer rows (Knowledge / Intelligence / Control), each with a mono blue tag on the left and the descriptive line on the right; the middle row is subtly greyed; hairline dividers between rows.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/page.module.css
git commit -m "feat: Carbon 3-layer solution diagram (knowledge/intelligence/control)"
```

---

## Task 10: ProductShowcase restyle

**Files:**
- Modify: `app/components/ProductShowcase.module.css`

- [ ] **Step 1: Square the CTAs.** Replace `.ctaPrimary` (73-91) and `.ctaSecondary` (93-111):

```css
.ctaPrimary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 0;
  background: var(--primary);
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border: 1px solid var(--primary);
  transition: background 0.18s ease, border-color 0.18s ease;
  box-shadow: none;
}
.ctaPrimary:hover {
  transform: none;
  background: var(--primary-dark);
  border-color: var(--primary-dark);
  box-shadow: none;
}
.ctaSecondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  border-radius: 0;
  background: transparent;
  color: var(--dark);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border: 1px solid var(--line);
  transition: background 0.18s ease, border-color 0.18s ease;
}
.ctaSecondary:hover {
  background: var(--grey-50);
  border-color: var(--dark);
}
```

- [ ] **Step 2: Flatten the image frame.** Replace `.imageWrapper` (258-273):

```css
.imageWrapper {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  border-radius: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow-lg);
  background: var(--white);
  padding: 8px;
  transition: transform 0.3s ease;
}
```

And `.productImage` (279-287) `border-radius: 12px` → `0`. And `.chatImageWrapper` (146-161) `border-radius: 16px` → `0`, `.chatImage` (167-173) `border-radius: 12px` → `0`.

- [ ] **Step 3: Remove the blob background shapes.** In `ProductShowcase.tsx`, delete the `<div className={styles.bgShapes}>…</div>` block (lines 105-110). In `ProductShowcase.module.css`, delete `.bgShapes` (176-186), `.bgShapePrimary/Secondary/Tertiary` (188-216), and all `.bgShape{Green,Gold,Purple}` rules (218-255). Reduce `.visualBlock` `min-height` (118) from `600px` to `auto`.

- [ ] **Step 4: Square the popup.** `.popupContent` (315-328) `border-radius: 16px` → `0`; `.popupLink` (330-339) `border-radius: 12px` → `0`; `.popupImage` (345-357) `border-radius: 12px` → `0`.

- [ ] **Step 5: Verify** — the PolicyAI showcase has a sharp bordered screenshot frame (no floating coloured blobs), square CTAs, and the hover-zoom popup is sharp-cornered.

- [ ] **Step 6: Commit**

```bash
git add app/components/ProductShowcase.tsx app/components/ProductShowcase.module.css
git commit -m "style: flat Carbon ProductShowcase (sharp frame, square CTAs, no blobs)"
```

---

## Task 11: InsurAI Agent callout

**Files:**
- Modify: `app/page.module.css` (`.agentCard`, `.agentBadge`)

- [ ] **Step 1: Sharpen the callout.** Replace `.agentCard` (1274-1283):

```css
.agentCard {
  position: relative;
  border: 1px solid var(--line);
  border-left: 3px solid var(--primary);
  border-radius: 0;
  padding: 40px;
  background: var(--grey-50);
  box-shadow: none;
}
```

- [ ] **Step 2: Square the badge.** Replace `.agentBadge` (1285-1299):

```css
.agentBadge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
  background: transparent;
  border: 1px solid var(--line);
  padding: 5px 10px;
  border-radius: 0;
  margin-bottom: 16px;
}
```

- [ ] **Step 3: Verify** — the "InsurAI Agent / In development" card is a flat grey panel with a blue left rule and a sharp mono "IN DEVELOPMENT" tag.

- [ ] **Step 4: Commit**

```bash
git add app/page.module.css
git commit -m "style: sharp InsurAI Agent callout"
```

---

## Task 12: WhySection tabs + Contact form fields

**Files:**
- Modify: `app/components/WhySection.module.css`
- Modify: `app/page.module.css` (form inputs, metaRow)

- [ ] **Step 1: Carbon underline tabs.** Replace `.tabs` (23-29), `.tab` (31-42), `.tab:hover` (44-48), `.tabActive` (50-55):

```css
.tabs {
  display: flex;
  gap: 0;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
  border-bottom: 1px solid var(--line);
}
.tab {
  padding: 14px 24px;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  background: transparent;
  color: var(--light-text);
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.18s ease, border-color 0.18s ease;
  font-family: inherit;
}
.tab:hover {
  color: var(--dark);
  border-bottom-color: var(--line);
}
.tabActive {
  color: var(--primary);
  border-bottom-color: var(--primary);
  box-shadow: none;
}
```

- [ ] **Step 2: Sharpen the WhySection image frame.** `.imageWrapper` (108-117) `border-radius: 16px` → `0` and `box-shadow` → `var(--shadow-lg)`; `.featureImage` (119-125) `border-radius: 12px` → `0`; `.cpuStage` (127-144) `border-radius: 12px` → `0`.

- [ ] **Step 3: Square the contact form fields** in `app/page.module.css`. `.metaRow` (971-979) `border-radius: 14px` → `0`; `.form` (995-1001) `border-radius: var(--radius)` already 0, set `box-shadow: none`; `.input, .textarea` (1012-1022) `border-radius: 14px` → `0`; `.formSuccess` (1034-1043) and `.formError` (1045-1054) `border-radius: 12px` → `0`.

- [ ] **Step 4: Verify** — WhySection tabs are a Carbon underline row (active tab = blue text + blue underline); contact inputs and meta rows are sharp rectangles.

- [ ] **Step 5: Commit**

```bash
git add app/components/WhySection.module.css app/page.module.css
git commit -m "style: Carbon underline tabs and sharp form fields"
```

---

## Task 13: WorkflowAccordion

**Files:**
- Modify: `app/components/WorkflowAccordion.module.css`

- [ ] **Step 1: Sharpen rows.** Replace `.item` (9-15), `.itemOpen` (17-20):

```css
.item {
  border: 1px solid var(--line);
  border-radius: 0;
  overflow: hidden;
  background: var(--white);
  transition: border-color 0.18s ease;
}
.itemOpen {
  border-color: var(--primary);
  box-shadow: none;
}
```

- [ ] **Step 2: Flatten gap to a single hairline stack.** Replace `.accordion` (1-7):

```css
.accordion {
  max-width: 820px;
  margin: 36px auto 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid var(--line);
}
```

And remove the per-item top border doubling: change `.item` `border` to `border: 1px solid var(--line); border-top: none;` — i.e. update the Step 1 `.item` block to:

```css
.item {
  border: 1px solid var(--line);
  border-top: none;
  border-radius: 0;
  overflow: hidden;
  background: var(--white);
  transition: border-color 0.18s ease;
}
```

- [ ] **Step 3: Verify** — the workflow accordion is a flush stack of hairline-separated rows; the open row has a blue border; +/- toggle still animates.

- [ ] **Step 4: Commit**

```bash
git add app/components/WorkflowAccordion.module.css
git commit -m "style: flush hairline workflow accordion"
```

---

## Task 14: Why-this-matters grid refine + NEW Use-cases grid

**Files:**
- Modify: `app/page.module.css` (`.featGrid`/`.featCell` already Carbon — minor refine; add `.useGrid`)
- Modify: `app/page.tsx` (insert use-cases section)

- [ ] **Step 1: Refine the existing features grid.** Replace `.featGrid` (1177-1186):

```css
.featGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 0;
  overflow: hidden;
  margin-top: 8px;
}
```

(Cells already use `--white` + 36px padding — fine.)

- [ ] **Step 2: Add use-cases grid styles** to `app/page.module.css`:

```css
/* Use cases — bordered Carbon grid */
.useGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  margin-top: 8px;
}
.useCell {
  background: var(--white);
  padding: 32px;
}
.useIndex {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  color: var(--primary);
  letter-spacing: 0.06em;
}
.useTitle {
  font-size: 17px;
  font-weight: 700;
  color: var(--dark);
  margin: 12px 0 6px;
}
.useText {
  font-size: 14px;
  line-height: 1.55;
  color: var(--light-text);
  margin: 0;
}
@media (max-width: 900px) {
  .useGrid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .useGrid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Insert the use-cases section** in `app/page.tsx` after the "Why this matters" `</section>` (after line 251) and before the Closing CTA section (line 253):

```tsx
{/* Use cases. EDIT COPY in the array below. */}
<section className={styles.section}>
  <div className={styles.container}>
    <div className={styles.sectionHead}>
      <h2 className={styles.h2}>Designed around real broking workflows</h2>
      <p className={styles.muted}>
        InsurAI supports the day-to-day work brokers already do &mdash; faster, and with
        the source in view.
      </p>
    </div>
    <div className={styles.useGrid}>
      {[
        { t: "Policy research", d: "Find and interpret wording across long documents in plain language." },
        { t: "Renewal preparation", d: "Pull the context and prior terms together ahead of each renewal." },
        { t: "Insurer comparison", d: "Compare product information side by side from approved material." },
        { t: "Underwriting question support", d: "Draft well-formed questions grounded in the relevant policy." },
        { t: "Quote workflow assistance", d: "Prepare submissions and move through quoting with more confidence." },
        { t: "Internal knowledge support", d: "Surface your brokerage's own knowledge when your team needs it." },
      ].map((u, i) => (
        <div className={styles.useCell} key={u.t}>
          <span className={styles.useIndex}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.useTitle}>{u.t}</h3>
          <p className={styles.useText}>{u.d}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 4: Verify** — a new "Designed around real broking workflows" section shows six bordered cells with mono indices (01–06), titles, and one-line captions; 3-col desktop → 2-col → 1-col.

- [ ] **Step 5: Commit**

```bash
git add app/page.module.css app/page.tsx
git commit -m "feat: Carbon use-cases grid; refine features grid"
```

---

## Task 15: Closing CTA + Trust band / partner logos

**Files:**
- Modify: `app/page.module.css` (`.ctaCard`, `.band`, `.logoBox`)

- [ ] **Step 1: Flatten the closing CTA.** Replace `.ctaCard` (943-955):

```css
.ctaCard {
  margin-top: 18px;
  display: flex;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  border-radius: 0;
  border: 1px solid var(--line);
  border-top: 3px solid var(--primary);
  background: var(--grey-50);
  box-shadow: none;
}
```

- [ ] **Step 2: Sharpen partner logo boxes.** Replace `.logoBox` (505-517):

```css
.logoBox {
  border: 1px solid var(--line);
  border-radius: 0;
  padding: 24px;
  text-align: center;
  color: var(--light-text);
  background: var(--white);
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

- [ ] **Step 3: Verify** — closing CTA is a flat grey panel with a blue top rule; partner-logo boxes are sharp white panels with hairline borders (no dashed rounded boxes).

- [ ] **Step 4: Commit**

```bash
git add app/page.module.css
git commit -m "style: flat closing CTA and sharp partner-logo boxes"
```

---

## Task 16: Footer dark band

**Files:**
- Modify: `app/components/SiteLayout.tsx` (footer markup classes)
- Modify: `app/page.module.css` (`.footer`, `.footerLinks`, `.brandFooter`)

- [ ] **Step 1: Make the footer dark.** Replace `.footer` (1057-1060):

```css
.footer {
  padding: 48px 0;
  border-top: 1px solid var(--line);
  background: var(--ink);
  color: rgba(255, 255, 255, 0.7);
}
```

- [ ] **Step 2: Recolour footer text/links.** Replace `.footerLinks` (1069-1075), `.footerLinks a` (1077-1081), `.footerLinks a:hover` (1083-1085), `.brandFooter` (1087-1094):

```css
.footerLinks {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
  font-size: 14px;
}
.footerLinks a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.18s ease;
}
.footerLinks a:hover {
  color: var(--primary-light);
}
.brandFooter {
  font-weight: 800;
  letter-spacing: -0.02em;
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: var(--white);
}
```

- [ ] **Step 3: Ensure the footer tagline + copyright read on dark.** In `app/components/SiteLayout.tsx`, the `.fine .muted` paragraph and copyright use `var(--light-text)` (#525252) which is too dark on ink. Add an inline override class. In `page.module.css` add:

```css
.footer .muted { color: rgba(255, 255, 255, 0.55); }
```

(No JSX change needed — the existing `${styles.fine} ${styles.muted}` spans inherit this.)

- [ ] **Step 4: Verify** — the footer is a near-black band: white "InsurAI" wordmark (blue "AI"), muted-white tagline/links, links turn blue on hover, light copyright line legible.

- [ ] **Step 5: Commit**

```bash
git add app/components/SiteLayout.tsx app/page.module.css
git commit -m "style: dark Carbon footer band"
```

---

## Task 17: Final verification pass

**Files:** none (verification only)

- [ ] **Step 1: Stop the dev server** (avoid the `.next` corruption pitfall), then production build:

Run: `npm run build`
Expected: "Compiled successfully" / route `/` builds with no TypeScript or CSS-module errors.

- [ ] **Step 2: Restart dev and walk the homepage top-to-bottom** at 1440px, 768px, 375px widths. Confirm:
  - Dark hero + dark footer; everything else light/grey.
  - Sharp corners everywhere (no rounded pills/cards remain).
  - No rainbow/colour-cycling shapes anywhere.
  - No emoji glyphs (hero ticks use square markers).
  - Hero workflow diagram renders and pulses; static under `prefers-reduced-motion`.
  - Both new sections present (3-layer diagram; 6 use-cases).
  - Buttons solid blue, square; ghost buttons hairline.

- [ ] **Step 3: Quick contrast check** — hero headline, hero tag, footer links all legible on `#0b0f17`.

- [ ] **Step 4: Update the checkpoint doc.** In `docs/CHECKPOINT.md`, note the homepage is now on the Carbon-inspired restyle (dark hero/footer, sharp corners, workflow-diagram hero, +3-layer +use-cases sections) and the WhySection "Compliance/ConsentAI" tab is still an open content decision.

- [ ] **Step 5: Commit**

```bash
git add docs/CHECKPOINT.md
git commit -m "docs: checkpoint — Carbon restyle complete"
```

---

## Self-review notes (author)

- **Spec coverage:** tokens (T1), buttons/cards/sections (T2), IconButton (T3), header/mobile (T4), banner (T5), dark hero + supporting line (T6), WorkflowDiagram hero visual (T7), value grid + products + pills (T8), 3-layer diagram NEW (T9), ProductShowcase (T10), Agent callout (T11), WhySection tabs + forms (T12), accordion (T13), features grid + use-cases NEW (T14), closing CTA + logos (T15), dark footer (T16), verify (T17). All spec sections mapped.
- **No emoji:** hero `✓` replaced with a CSS square (T6 Step 3). No other emoji glyphs in source.
- **No IBM assets:** Inter + system mono only; brand blue `#2366f0` retained; no IBM Plex.
- **Token cascade caveat:** `--gradient-primary: var(--primary)` and `--shadow-sm: none` intentionally flatten components that reference them (ProductShowcase, page buttons, MobileNav) — explicit edits still applied where radii/shadows are hard-coded.
- **Class-name consistency:** new classes `valueGrid/valueCell`, `layerStack/layer/layerTag/layerText`, `useGrid/useCell/useIndex/useTitle/useText`, `heroTag/heroTagDot`, and `WorkflowDiagram` module classes are each defined once and referenced consistently.
- **Out of scope (unchanged):** `/about`, `/media`, `/privacy`, `/terms` layouts; WhySection ConsentAI tab content.
