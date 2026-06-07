# Cofounder-Inspired Homepage Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the InsurAI homepage into cofounder.co's warm cream/ink aesthetic with Fraunces+Inter type, dark-ink pill buttons, two-tone headlines, soft cards, and a new full-bleed CSS/canvas pixel-art hero with floating "task" cards — keeping all existing content, products, forms, and SEO.

**Architecture:** Token-driven restyle. We change the design tokens in `app/globals.css` so every component that already uses CSS variables (`--primary`, `--dark`, `--white`, `--line`, etc.) inherits the new look automatically. We override the few button/accent rules that need solid-ink instead of blue, add Fraunces via `next/font`, and build one new client component (`HeroPixel`) that renders an insurance-themed pixel scene on a `<canvas>` with a DOM overlay. Content edits live in `app/page.tsx`.

**Tech Stack:** Next.js (App Router) + React, CSS Modules, `next/font/google` (Fraunces, Inter), HTML5 Canvas 2D.

**Verification note:** This is visual/CSS work — there are no meaningful unit tests for aesthetics. Each task is verified by (a) `npm run build` succeeding (catches type/import/CSS-module errors) and, where noted, (b) visual inspection in the running dev server (`npm run dev`, open http://localhost:3000). Commit after each task.

**Spec:** `docs/superpowers/specs/2026-06-07-cofounder-inspired-homepage-redesign-design.md`

---

## Locked decisions (from spec)
- Cream background `#F4F1EA`, warm ink text `#211E18`, **muted blue** accent `#3B6FD4` (links/active/highlights only).
- Fonts: **Fraunces** (wordmark + display headlines), **Inter** (body). Open Sans removed.
- Hero headline: "InsurAI helps you run a smarter brokerage with AI agents."
- Hero art: CSS/canvas pixel scene (no external image).
- Floating card labels: `✓ Consent request sent — ConsentAI`, `✓ Policy summarised — PolicyAI`, `● Renewal flagged — running`.
- Wordmark: single-ink serif (drop the blue "AI" split).

---

## File structure

| File | Responsibility | Action |
| --- | --- | --- |
| `app/layout.tsx` | Font wiring | Modify: add Fraunces, remove Open Sans |
| `app/globals.css` | Global tokens, base type, helpers | Modify: palette, body font, remove colorCycle, add helpers |
| `app/page.module.css` | Shared section/button/card/banner/header/footer styles | Modify: buttons→ink, headlines→serif, banner, logos |
| `app/components/IconButton.module.css` | Primary pill CTA | Modify: blue gradient → dark ink |
| `app/components/SiteLayout.tsx` | Header + footer markup | Modify: serif single-ink wordmark, header bar |
| `app/components/HeroPixel.tsx` | NEW canvas pixel hero + overlay | Create |
| `app/components/HeroPixel.module.css` | NEW hero layout/cards/pixel-edge | Create |
| `app/page.tsx` | Homepage content | Modify: headline, tagline band, value columns, swap hero |
| `app/components/ProductShowcase.module.css` | Product cards | Modify: soft-card polish, ink CTA |
| `app/components/WhySection.module.css` | Why tabs/section | Modify: cream-safe verify |

---

## Task 1: Add Fraunces font, remove Open Sans

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update font imports and wiring**

Replace the contents of `app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'InsurAI - AI-Powered Insurance Solutions',
  description: 'Transform your brokerage with intelligent, purpose-built tools designed specifically for the insurance industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build succeeds. (If any file still references `var(--font-open-sans)`, it falls back to the body stack — fixed in Task 2.)

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: swap Open Sans for Fraunces in font setup"
```

---

## Task 2: Retokenize globals.css (cream/ink palette, body font, helpers)

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Replace the `:root` block**

Replace lines 1–26 (the `:root { ... }` block) of `app/globals.css` with:

```css
:root {
  /* Cofounder-inspired warm palette */
  --primary: #3B6FD4;        /* muted blue accent — links/active/highlights only */
  --primary-dark: #2F59AA;
  --primary-light: #6E96E0;
  --dark: #1A1712;           /* warm near-black */
  --ink: #211E18;            /* warm body ink */
  --bg-cream: #F4F1EA;       /* page background */
  --surface-warm: #FBFAF6;   /* alt card surface */
  --light-bg: #EFEBE1;       /* subtle warm panel */
  --light-bg-gradient: #F4F1EA;
  --text: #211E18;
  --light-text: #6E665A;     /* warm grey */
  --white: #ffffff;
  --shadow-sm: 0 1px 2px rgba(26, 23, 18, 0.05);
  --shadow-md: 0 6px 20px rgba(26, 23, 18, 0.08);
  --shadow-lg: 0 18px 50px rgba(26, 23, 18, 0.12);
  --gradient-primary: var(--dark); /* CTAs now solid ink; keep var name for inheritance */

  --bg: var(--bg-cream);
  --muted: var(--light-text);
  --line: rgba(26, 23, 18, 0.10);
  --accent: var(--primary);
  --accent2: var(--primary);
  --shadow: 0 18px 50px rgba(26, 23, 18, 0.12);
  --radius: 18px;
  --max: 1120px;
}
```

- [ ] **Step 2: Update the `html, body` rule (lines ~34-40) to cream + Inter**

Replace the `html, body { ... }` block with:

```css
html, body {
  background: var(--bg-cream);
  color: var(--text);
  line-height: 1.6;
  font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}
```

- [ ] **Step 3: Neutralize the gradient-text helper**

Find the `.gradient-text` rule and replace its body so it renders as solid ink (the blue gradient clip no longer fits):

```css
.gradient-text {
  color: var(--dark);
}
```

- [ ] **Step 4: Add reusable serif + two-tone helpers at the end of the file**

Append to `app/globals.css`:

```css
/* Cofounder-inspired display + two-tone helpers */
.serif {
  font-family: var(--font-fraunces), Georgia, "Times New Roman", serif;
}

/* Two-tone headline: trailing clause dimmed */
.dim {
  color: var(--light-text);
}
```

- [ ] **Step 5: Verify build + visual**

Run: `npm run build` (expect success).
Run: `npm run dev`, open http://localhost:3000 — background should now be cream and text warm ink across all sections. Some blue tints (subtle `rgba(35,102,240,...)` backgrounds) remain; that is acceptable with the muted-blue accent and is polished in later tasks.

- [ ] **Step 6: Commit**

```bash
git add app/globals.css
git commit -m "feat: retokenize globals to cream/ink palette with serif helpers"
```

---

## Task 3: Buttons to solid ink + serif single-ink wordmark + header bar

**Files:**
- Modify: `app/page.module.css`
- Modify: `app/components/IconButton.module.css`
- Modify: `app/components/SiteLayout.tsx`

- [ ] **Step 1: Restyle `.btnPrimary` / `.btnGhost` in `app/page.module.css`**

Replace the `.btnPrimary`, `.btnPrimary:hover`, `.btnGhost`, `.btnGhost:hover` rules (lines ~64-85) with:

```css
.btnPrimary {
  border: none;
  background: var(--dark);
  box-shadow: var(--shadow-sm);
  color: var(--white);
}

.btnPrimary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  opacity: 1;
}

.btnGhost {
  background: var(--white);
  color: var(--dark);
  border-color: var(--line);
}

.btnGhost:hover {
  background: var(--surface-warm);
  border-color: var(--dark);
}
```

- [ ] **Step 2: Make the wordmark serif + single ink in `app/page.module.css`**

Replace the `.brand`, `.brandMark`, `.brandAccent` rules (lines ~110-126) with:

```css
.brand {
  font-family: var(--font-fraunces), Georgia, serif;
  font-weight: 600;
  letter-spacing: -0.01em;
  display: flex;
  align-items: baseline;
  gap: 0;
  text-decoration: none;
  color: var(--dark);
}

.brandMark {
  font-size: 24px;
}

.brandAccent {
  color: var(--dark); /* single-ink wordmark */
}
```

- [ ] **Step 3: Make headlines serif in `app/page.module.css`**

Replace the `.h1` rule (lines ~20-28) and the `.h2`/`.h3` rules with:

```css
.h1 {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 60px;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
  font-weight: 600;
  color: var(--dark);
}

.h2 {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 10px;
  color: var(--dark);
}

.h3 {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
  color: var(--dark);
}
```

- [ ] **Step 4: Recolor the topbar to translucent cream in `app/page.module.css`**

Replace the `.topbar` rule (lines ~92-100) with:

```css
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(244, 241, 234, 0.85);
  border-bottom: 1px solid var(--line);
  box-shadow: none;
}
```

- [ ] **Step 5: Restyle the IconButton to dark ink**

In `app/components/IconButton.module.css`, replace `.iconBtn` background/shadow (lines ~8-15) and `.iconBtn:hover` shadow, and `.circle` colors:

In `.iconBtn` change:
```css
  background: var(--dark);
  color: var(--white);
  box-shadow: var(--shadow-sm);
```
In `.iconBtn:hover` change:
```css
  box-shadow: var(--shadow-md);
```
In `.circle` change:
```css
  background: var(--white);
  color: var(--dark);
```

- [ ] **Step 6: Simplify the wordmark markup in `app/components/SiteLayout.tsx`**

In both the header (lines ~20-23) and footer (lines ~70-73), the brand currently renders two spans (`Insur` + `AI`). Leave the two-span structure but it now renders single-ink serif via Step 2 CSS. No markup change required — verify visually it reads as one serif word "InsurAI".

- [ ] **Step 7: Verify build + visual**

Run: `npm run build` (expect success).
Visual: header is cream/translucent, "InsurAI" is a serif word, "Contact sales" pill is dark ink with white text, headings render in Fraunces.

- [ ] **Step 8: Commit**

```bash
git add app/page.module.css app/components/IconButton.module.css app/components/SiteLayout.tsx
git commit -m "feat: ink pill buttons, serif wordmark and headlines, cream header"
```

---

## Task 4: Restyle the award announcement banner

**Files:**
- Modify: `app/page.module.css`

- [ ] **Step 1: Replace the `.announcementBanner` styling**

Replace the `.announcementBanner` rule and its `::before`/`::after` rules and the `shimmer` keyframes and `.bannerHighlight` / `.announcementBanner a` / `:hover` rules (lines ~158-232) with a calm cream strip:

```css
.announcementBanner {
  position: relative;
  background: var(--surface-warm);
  color: var(--ink);
  text-align: center;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-bottom: 1px solid var(--line);
}

.bannerHighlight {
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--dark);
}

.announcementBanner a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--white);
  font-size: 13px;
  transition: all 0.2s ease;
}

.announcementBanner a:hover {
  border-color: var(--dark);
}
```

- [ ] **Step 2: Verify build + visual**

Run: `npm run build` (expect success). Visual: the top banner is a subtle cream strip, no dark gradient or shimmer.

- [ ] **Step 3: Commit**

```bash
git add app/page.module.css
git commit -m "feat: calm cream award banner"
```

---

## Task 5: New HeroPixel component — canvas pixel scene

**Files:**
- Create: `app/components/HeroPixel.tsx`
- Create: `app/components/HeroPixel.module.css`

- [ ] **Step 1: Create `app/components/HeroPixel.module.css`**

```css
.hero {
  position: relative;
  width: 100%;
  min-height: 560px;
  overflow: hidden;
  isolation: isolate;
}

.canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  z-index: 0;
}

/* readability scrim behind the headline */
.scrim {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    100deg,
    rgba(20, 30, 50, 0.45) 0%,
    rgba(20, 30, 50, 0.18) 38%,
    rgba(20, 30, 50, 0) 62%
  );
  pointer-events: none;
}

.inner {
  position: relative;
  z-index: 2;
  max-width: var(--max);
  margin: 0 auto;
  padding: 84px 20px 120px;
}

.copy {
  max-width: 560px;
}

.h1 {
  font-family: var(--font-fraunces), Georgia, serif;
  color: #ffffff;
  font-weight: 600;
  font-size: 52px;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0 0 18px;
  text-shadow: 0 2px 18px rgba(10, 20, 40, 0.35);
}

.h1 .dim {
  color: rgba(255, 255, 255, 0.72);
}

.lead {
  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 26px;
  max-width: 480px;
  text-shadow: 0 1px 12px rgba(10, 20, 40, 0.35);
}

.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 13px 22px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.btnPrimary {
  background: #ffffff;
  color: var(--dark);
  box-shadow: 0 8px 24px rgba(10, 20, 40, 0.25);
}

.btnPrimary:hover {
  transform: translateY(-2px);
}

.btnGhost {
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(6px);
}

.btnGhost:hover {
  background: rgba(255, 255, 255, 0.24);
}

/* floating glassy task cards */
.cards {
  position: absolute;
  top: 96px;
  right: 24px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 280px;
}

.card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 10px 30px rgba(10, 20, 40, 0.18);
  font-size: 13px;
  font-weight: 600;
  color: var(--ink);
}

.cardDot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.dotDone { background: #3fae5a; }
.dotRun  { background: var(--primary); }

.cardSub {
  color: var(--light-text);
  font-weight: 500;
}

/* pixel-edge transition into the cream page */
.pixelEdge {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 24px;
  z-index: 2;
  pointer-events: none;
  background:
    repeating-linear-gradient(90deg, var(--bg-cream) 0 12px, transparent 12px 24px) 0 12px / 24px 12px no-repeat,
    repeating-linear-gradient(90deg, transparent 0 12px, var(--bg-cream) 12px 24px) 0 0 / 24px 12px no-repeat,
    linear-gradient(var(--bg-cream), var(--bg-cream)) 0 18px / 100% 6px no-repeat;
}

@media (max-width: 900px) {
  .cards { display: none; }
  .h1 { font-size: 38px; }
  .inner { padding: 64px 16px 96px; }
}

@media (max-width: 600px) {
  .h1 { font-size: 30px; }
  .lead { font-size: 16px; }
  .cta { flex-direction: column; }
  .btn { width: 100%; }
}
```

- [ ] **Step 2: Create `app/components/HeroPixel.tsx` (canvas scene only; overlay added next task)**

```tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroPixel.module.css";

const COLS = 220;
const ROWS = 124;
const HORIZON = 80;

export default function HeroPixel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = COLS;
    canvas.height = ROWS;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const px = (x: number, y: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
    };

    const buildings: Array<[number, number, number, string]> = [
      // x, width, top-y, color (hazy blue-greys; one taller "office")
      [8, 18, 60, "#7d93bc"],
      [28, 14, 66, "#8a9ec3"],
      [46, 22, 50, "#6f86b0"], // taller office
      [70, 16, 62, "#8294bd"],
      [90, 12, 68, "#90a2c8"],
      [120, 20, 56, "#7488b4"],
      [144, 14, 64, "#8597c0"],
      [162, 24, 52, "#6c83ae"],
      [190, 16, 60, "#8294bd"],
    ];

    const clouds: Array<{ x: number; y: number; w: number }> = [
      { x: 30, y: 16, w: 26 },
      { x: 110, y: 10, w: 34 },
      { x: 150, y: 24, w: 22 },
    ];

    let raf = 0;
    let offset = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawCloud = (cx: number, cy: number, w: number) => {
      const c = "#eef4fc";
      px(cx, cy, w, 4, c);
      px(cx + 4, cy - 3, w - 8, 4, c);
      px(cx + 8, cy - 6, w - 18, 4, c);
    };

    const draw = () => {
      // sky bands
      const sky = ["#5b8fd6", "#6f9cdb", "#84abe2", "#9bbcea", "#b3cdf0"];
      const band = HORIZON / sky.length;
      sky.forEach((col, i) => px(0, i * band, COLS, band + 1, col));

      // sun + glow
      px(168, 14, 12, 12, "#f7e9a0");
      px(166, 16, 16, 8, "#f7e9a0");
      px(170, 12, 8, 16, "#f7e9a0");
      px(170, 16, 8, 8, "#fff6cf");

      // clouds (drift on x)
      clouds.forEach((cl) => {
        let cx = cl.x + offset;
        cx = ((cx % (COLS + 60)) + (COLS + 60)) % (COLS + 60) - 30;
        drawCloud(cx, cl.y, cl.w);
      });

      // skyline silhouette
      buildings.forEach(([x, w, top, color]) => {
        px(x, top, w, HORIZON - top, color);
        // lit windows
        for (let wy = top + 3; wy < HORIZON - 2; wy += 5) {
          for (let wx = x + 2; wx < x + w - 2; wx += 5) {
            px(wx, wy, 2, 2, "#f3e6ad");
          }
        }
      });

      // ground bands (green)
      const grass = ["#62b257", "#57a64d", "#4f9a46", "#48913f"];
      const gband = (ROWS - HORIZON) / grass.length;
      grass.forEach((col, i) => px(0, HORIZON + i * gband, COLS, gband + 1, col));

      // simple path
      px(96, HORIZON, 8, ROWS - HORIZON, "#cdb98a");
      px(100, HORIZON, 16, ROWS - HORIZON, "#cdb98a");

      // foreground bushes / trees
      px(14, HORIZON - 8, 12, 10, "#3f7d39");
      px(18, HORIZON - 14, 4, 8, "#5a4327");
      px(190, HORIZON - 10, 14, 12, "#3f7d39");
      px(196, HORIZON - 16, 4, 8, "#5a4327");

      // pixel flowers
      px(40, HORIZON + 10, 2, 2, "#f4d23a");
      px(150, HORIZON + 16, 2, 2, "#e8657a");
      px(70, HORIZON + 22, 2, 2, "#f4d23a");
    };

    const loop = () => {
      offset += 0.06;
      draw();
      raf = requestAnimationFrame(loop);
    };

    draw();
    if (!reduced) raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.hero} aria-label="InsurAI hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />
      {/* overlay + cards + pixel edge added in Task 6 */}
      <div className={styles.pixelEdge} aria-hidden="true" />
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: success (component compiles; not yet rendered on the page).

- [ ] **Step 4: Commit**

```bash
git add app/components/HeroPixel.tsx app/components/HeroPixel.module.css
git commit -m "feat: add HeroPixel canvas scene component"
```

---

## Task 6: HeroPixel overlay — headline, buttons, floating cards

**Files:**
- Modify: `app/components/HeroPixel.tsx`

- [ ] **Step 1: Add the overlay markup**

In `app/components/HeroPixel.tsx`, replace the returned JSX (the `<section>...</section>` block) with:

```tsx
  return (
    <section className={styles.hero} aria-label="InsurAI hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.h1}>
            InsurAI helps you run a smarter brokerage{" "}
            <span className={styles.dim}>with AI agents.</span>
          </h1>
          <p className={styles.lead}>
            Automate compliance, policy answers, and client workflows&mdash;without the portal hopping.
          </p>
          <div className={styles.cta}>
            <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact">
              Contact sales
            </a>
            <a className={`${styles.btn} ${styles.btnGhost}`} href="#products">
              Explore products
            </a>
          </div>
        </div>
      </div>

      <div className={styles.cards} aria-hidden="true">
        <div className={styles.card}>
          <span className={`${styles.cardDot} ${styles.dotDone}`} />
          <span>Consent request sent <span className={styles.cardSub}>&middot; ConsentAI</span></span>
        </div>
        <div className={styles.card}>
          <span className={`${styles.cardDot} ${styles.dotDone}`} />
          <span>Policy summarised <span className={styles.cardSub}>&middot; PolicyAI</span></span>
        </div>
        <div className={styles.card}>
          <span className={`${styles.cardDot} ${styles.dotRun}`} />
          <span>Renewal flagged <span className={styles.cardSub}>&middot; running</span></span>
        </div>
      </div>

      <div className={styles.pixelEdge} aria-hidden="true" />
    </section>
  );
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: success.

- [ ] **Step 3: Commit**

```bash
git add app/components/HeroPixel.tsx
git commit -m "feat: HeroPixel overlay headline, CTAs, floating task cards"
```

---

## Task 7: Wire HeroPixel into page.tsx + add tagline band & value columns

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/page.module.css`

- [ ] **Step 1: Swap the hero import and markup in `app/page.tsx`**

Change the import line 8 from:
```tsx
import HeroSphere from "./components/HeroSphere";
```
to:
```tsx
import HeroPixel from "./components/HeroPixel";
```

Replace the entire `{/* Hero */}` `<section className={styles.hero}>...</section>` block (lines ~21-53) with:

```tsx
        {/* Hero */}
        <HeroPixel />

        {/* Tagline band */}
        <section className={styles.taglineBand}>
          <div className={styles.container}>
            <h2 className={styles.tagline}>
              InsurAI is an insurance-tuned AI platform{" "}
              <span className={styles.dim}>designed to help you run a smarter brokerage.</span>
            </h2>
          </div>
        </section>

        {/* Value columns */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.valueGrid}>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Insurance-tuned intelligence</h3>
                <p className={styles.muted}>
                  Models trained specifically for broker workflows&mdash;from policy insights to consent auditing.
                </p>
              </div>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Human in the loop</h3>
                <p className={styles.muted}>
                  You stay in control. Nothing happens without your approval.
                </p>
              </div>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Built for broker workflows</h3>
                <p className={styles.muted}>
                  Fits how brokers already work&mdash;no portal hopping, no busywork.
                </p>
              </div>
            </div>
          </div>
        </section>
```

Note: the `IconButton` import (line 9) is no longer used in `page.tsx` after this change. Remove the `import IconButton from "./components/IconButton";` line if no other usage remains in the file (it is still used in `SiteLayout.tsx`, which has its own import — safe to remove from `page.tsx`).

- [ ] **Step 2: Add `dim` class to page.module.css (scoped) + tagline & value styles**

Append to `app/page.module.css`:

```css
/* two-tone helper (module-scoped, mirrors globals .dim) */
.dim {
  color: var(--light-text);
}

/* tagline band */
.taglineBand {
  padding: 64px 0 24px;
  text-align: center;
}

.tagline {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 36px;
  line-height: 1.18;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--dark);
  max-width: 820px;
  margin: 0 auto;
}

/* value columns */
.valueGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.valueCol {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

@media (max-width: 900px) {
  .tagline { font-size: 27px; }
  .valueGrid { grid-template-columns: 1fr; gap: 24px; }
}
```

- [ ] **Step 3: Verify build + visual**

Run: `npm run build` (expect success).
Run: `npm run dev`, open http://localhost:3000. Expect: full-bleed pixel hero with sky/skyline/ground, white headline with dimmed trailing clause, two pill buttons, three glassy cards top-right (hidden on narrow screens), pixel edge dissolving into cream, then the tagline band and three value columns.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/page.module.css
git commit -m "feat: render pixel hero, add tagline band and value columns"
```

---

## Task 8: Polish product showcases, why-tabs, and trust logos

**Files:**
- Modify: `app/components/ProductShowcase.module.css`
- Modify: `app/components/WhySection.module.css`
- Modify: `app/page.module.css`

- [ ] **Step 1: Restyle showcase CTAs + titles in `app/components/ProductShowcase.module.css`**

Replace `.title` weight and `.ctaPrimary` / `.ctaPrimary:hover` / `.ctaSecondary:hover` (lines ~34-41 and ~73-111) with:

```css
.title {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 44px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--dark);
  margin: 0;
  font-weight: 600;
}
```

and

```css
.ctaPrimary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 999px;
  background: var(--dark);
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}

.ctaPrimary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

and update `.ctaSecondary` border-radius to `999px` and its hover:

```css
.ctaSecondary:hover {
  background: var(--surface-warm);
  border-color: var(--dark);
}
```

- [ ] **Step 2: Soften the showcase background shapes to neutral**

The `.bgShape*` rules use blue/green/gold tints that now clash with cream. Tone them down: in `app/components/ProductShowcase.module.css`, change the three base `.bgShapePrimary/Secondary/Tertiary` backgrounds to warm neutral:

```css
.bgShapePrimary { background: rgba(26, 23, 18, 0.05); }
.bgShapeSecondary { background: rgba(26, 23, 18, 0.04); }
.bgShapeTertiary { background: rgba(26, 23, 18, 0.03); }
```

Leave the color-specific `.bgShapeGreen.*` and `.bgShapeGold.*` overrides as-is (they keep a subtle product-colour hint via `!important`); this is acceptable and on-brand per spec ("keep the per-product title color combos").

- [ ] **Step 3: Restyle Why tabs in `app/components/WhySection.module.css`**

Replace `.whySection` background and `.tab*` rules (lines ~1-55) so they sit on cream:

```css
.whySection {
  padding: 100px 0;
  background: var(--bg-cream);
  position: relative;
}
```

and the tab block:

```css
.tab {
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--white);
  color: var(--light-text);
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
}

.tab:hover {
  background: var(--surface-warm);
  border-color: var(--dark);
  color: var(--dark);
}

.tabActive {
  background: var(--dark);
  border-color: var(--dark);
  color: var(--white);
  box-shadow: var(--shadow-sm);
}
```

Also make `.mainHeading` and `.title` serif:

```css
.mainHeading {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 44px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--dark);
  text-align: center;
  margin: 0 0 48px;
}

.title {
  font-family: var(--font-fraunces), Georgia, serif;
  font-size: 34px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--dark);
  margin: 0;
}
```

- [ ] **Step 4: Clean the trust-band logo boxes in `app/page.module.css`**

Replace the `.band` and `.logoBox` rules (lines ~475-523) with clean cream tiles (no dashed border):

```css
.band {
  padding: 40px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--surface-warm);
}
```

and

```css
.logoBox {
  border: 1px solid var(--line);
  border-radius: 14px;
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

- [ ] **Step 5: Verify build + visual**

Run: `npm run build` (expect success).
Visual: product showcases read as soft cards with serif titles and dark-ink pill CTAs; Why tabs are pill-shaped with a dark active tab; trust logos sit in clean white tiles with no dashed borders.

- [ ] **Step 6: Commit**

```bash
git add app/components/ProductShowcase.module.css app/components/WhySection.module.css app/page.module.css
git commit -m "feat: polish showcases, why-tabs, and trust logos for cream theme"
```

---

## Task 9: Full-page verification pass

**Files:** none (verification + any small fixes uncovered)

- [ ] **Step 1: Production build**

Run: `npm run build`
Expected: compiles with no type errors and no CSS-module "class not found" issues.

- [ ] **Step 2: Visual sweep in dev**

Run: `npm run dev`, open http://localhost:3000. Walk top to bottom and confirm against the spec's success criteria:
  - Cream background throughout; warm-ink text.
  - Serif "InsurAI" wordmark; Fraunces headlines with two-tone dimmed clauses.
  - Dark-ink pill buttons everywhere (header, hero, showcases).
  - Pixel-art hero renders (sky, sun, drifting clouds, skyline, ground, path), white headline legible over scrim, three floating cards, pixel-edge transition into cream.
  - Tagline band + three value columns present.
  - ConsentAI + PolicyAI showcases, Why, How, Contact form, trust logos, footer all present and styled.
  - Muted blue only appears on links/active states/small highlights.

- [ ] **Step 3: Responsive check**

Resize the browser to ~375px and ~768px widths. Confirm: hero cards hide on mobile, headline scales down, value grid stacks, nav collapses (existing MobileNav), buttons go full-width in hero.

- [ ] **Step 4: Reduced-motion check**

In browser devtools, emulate `prefers-reduced-motion: reduce` and reload. Confirm the hero clouds stop animating (static scene still renders).

- [ ] **Step 5: Fix any issues found, then final commit**

```bash
git add -A
git commit -m "chore: homepage redesign verification fixes"
```

(If no fixes were needed, skip the commit.)

---

## Self-review notes
- **Spec coverage:** palette (T2), fonts (T1), wordmark (T3), buttons (T3/T5/T8), banner (T4), pixel hero + cards + edge (T5/T6), tagline band (T7), value columns (T7), showcases (T8), why/how/contact/footer inherit tokens (T2/T8), trust logos (T8), responsive + reduced-motion (T5/T9). All spec sections mapped.
- **Out-of-scope honored:** legacy hero components (HeroSphere/Blob/Network/Orb/Scan) are left untouched and simply unreferenced by the home page; About/Media/legal pages inherit tokens for free with no dedicated tasks.
- **Type consistency:** `HeroPixel` is the single new component/import name used in both T5/T6 (definition) and T7 (usage); CSS-module class names referenced in T6 JSX (`inner`, `copy`, `cta`, `btnPrimary`, `btnGhost`, `cards`, `card`, `cardDot`, `dotDone`, `dotRun`, `cardSub`, `pixelEdge`) are all defined in T5's stylesheet.
