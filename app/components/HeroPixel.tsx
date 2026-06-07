"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroPixel.module.css";

const COLS = 300;
const ROWS = 130;
const HORIZON = 80;

// 3x5 pixel font for the towed ad banner
const FONT: Record<string, string[]> = {
  P: ["111", "101", "111", "100", "100"],
  I: ["111", "010", "010", "010", "111"],
  T: ["111", "010", "010", "010", "010"],
  C: ["111", "100", "100", "100", "111"],
  H: ["101", "101", "111", "101", "101"],
  L: ["100", "100", "100", "100", "111"],
  V: ["101", "101", "101", "101", "010"],
  E: ["111", "100", "111", "100", "111"],
  W: ["101", "101", "101", "111", "111"],
  N: ["101", "111", "111", "111", "101"],
  R: ["111", "101", "111", "110", "101"],
  O: ["111", "101", "101", "101", "111"],
  F: ["111", "100", "111", "100", "100"],
  S: ["111", "100", "111", "001", "111"],
  U: ["101", "101", "101", "101", "111"],
  "2": ["111", "001", "111", "100", "111"],
  "6": ["111", "100", "111", "101", "111"],
};

const BANNER_TEXT = "WINNER OF INSURTECH PITCHLIVE 26";
const BANNER_W = BANNER_TEXT.length * 4 - 1 + 4;
const PLANE_ALT = 14;

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

    const clouds: Array<{ x: number; y: number; w: number }> = [
      { x: 40, y: 30, w: 28 },
      { x: 150, y: 24, w: 36 },
      { x: 235, y: 34, w: 24 },
    ];

    const drawCloud = (cx: number, cy: number, w: number) => {
      const c = "#eef4fc";
      px(cx, cy, w, 4, c);
      px(cx + 4, cy - 3, w - 8, 4, c);
      px(cx + 8, cy - 6, w - 18, 4, c);
    };

    // tiny pixel text using the 3x5 FONT
    const drawText = (s: string, x: number, y: number, color: string) => {
      let cx = x;
      for (const ch of s) {
        const g = FONT[ch];
        if (g) {
          for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 3; c++) {
              if (g[r][c] === "1") px(cx + c, y + r, 1, 1, color);
            }
          }
        }
        cx += 4;
      }
    };

    // light aircraft flying right, towing the PitchLIVE banner behind it
    const drawAdPlane = (planeX: number) => {
      const ny = PLANE_ALT;
      const bannerRight = planeX - 4;
      const bannerLeft = bannerRight - BANNER_W;
      px(bannerLeft, ny - 4, BANNER_W, 9, "#d83a3a");
      px(bannerLeft, ny - 4, BANNER_W, 1, "#f0bdbd");
      px(bannerLeft, ny + 4, BANNER_W, 1, "#a82828");
      drawText(BANNER_TEXT, bannerLeft + 3, ny - 2, "#ffffff");
      px(bannerRight, ny, 4, 1, "#3a3a3a"); // tow line
      px(planeX, ny - 1, 12, 3, "#eef2f6"); // fuselage
      px(planeX + 12, ny, 2, 1, "#cfd8e0"); // nose
      px(planeX, ny - 3, 2, 3, "#d83a3a"); // tail fin
      px(planeX + 4, ny - 3, 4, 1, "#c2ccd6"); // upper wing
      px(planeX + 4, ny + 2, 5, 1, "#c2ccd6"); // lower wing
      px(planeX + 2, ny, 9, 1, "#d83a3a"); // stripe
      px(planeX + 9, ny - 1, 1, 1, "#3a6ea5"); // window
      px(planeX + 14, ny - 2, 1, 5, "#8a8f96"); // propeller
    };

    const drawTree = (x: number, groundY: number, scale = 1) => {
      const h = Math.round(14 * scale);
      const w = Math.round(14 * scale);
      px(x + w / 2 - 1, groundY - h / 2, 3, h / 2 + 2, "#5a4327"); // trunk
      px(x, groundY - h, w, h - 2, "#3f7d39"); // foliage
      px(x + 2, groundY - h - 2, w - 4, 4, "#356b30"); // top
      px(x + 2, groundY - h + 2, 3, 3, "#4f9050"); // highlight
    };

    const drawFlower = (x: number, y: number, color: string) => {
      px(x, y, 1, 2, "#3f7d39"); // stem
      px(x, y - 1, 1, 1, color);
    };

    // hazy Sydney CBD hint to the left of the bridge
    const drawSkyline = () => {
      px(40, 66, 8, 12, "#8294bd");
      px(50, 70, 6, 8, "#90a2c8");
      px(60, 60, 7, 18, "#7e90ba"); // a taller tower
      px(70, 68, 6, 10, "#8aa0c6");
      [42, 62, 71].forEach((bx, i) => {
        const top = [69, 63, 71][i];
        for (let wy = top; wy < 77; wy += 4) px(bx + 2, wy, 1, 1, "#e6dcac");
      });
    };

    // the Sydney Harbour Bridge across the harbour
    const drawBridge = () => {
      const x1 = 108;
      const x2 = 238;
      const cx = (x1 + x2) / 2;
      const hw = (x2 - x1) / 2;
      const peakY = 49;
      const deckY = 72;
      // harbour water (thin strip below the bridge, in front of the sky)
      px(0, 74, COLS, 6, "#3f6f9e");
      px(0, 74, COLS, 1, "#5a86b0");
      px(0, 77, COLS, 1, "#386690");
      // deck / roadway
      px(x1, deckY, x2 - x1, 2, "#566069");
      px(x1, deckY + 2, x2 - x1, 1, "#3f474e");
      // arch (upper chord) + vertical hangers
      for (let x = x1; x <= x2; x++) {
        const dx = x - cx;
        const ay = Math.round(peakY + ((dx * dx) / (hw * hw)) * (deckY - peakY));
        px(x, ay, 1, 3, "#6f7d8c");
        if ((x - x1) % 9 === 0 && ay + 3 < deckY) {
          for (let yy = ay + 3; yy < deckY; yy++) px(x, yy, 1, 1, "#62707d");
        }
      }
      // sandstone pylons at each end, rising above the deck and into the water
      const drawPylon = (pxx: number) => {
        px(pxx, 54, 7, 24, "#bcab8d");
        px(pxx, 53, 7, 2, "#a8967a"); // cap
        px(pxx + 1, 51, 1, 2, "#a8967a"); // battlements
        px(pxx + 5, 51, 1, 2, "#a8967a");
        px(pxx + 5, 56, 2, 18, "#a8967a"); // shading
      };
      drawPylon(112);
      drawPylon(220);
    };

    // a laptop resting in the garden (cofounder-style focal point)
    const drawLaptop = (frame: number) => {
      const blink = (frame >> 4) % 2 === 0;
      px(176, 103, 44, 2, "#3f7a39"); // shadow on grass
      // screen lid
      px(184, 82, 30, 18, "#2b2f36");
      px(186, 84, 26, 14, blink ? "#10202a" : "#12252f"); // screen
      px(186, 84, 26, 2, "#3a6ea5"); // sky reflection
      const bars = [3, 6, 4, 7, 5, 8, 5];
      bars.forEach((b, i) => px(188 + i * 3, 96 - b, 2, b, "#4ad6a0")); // activity chart
      px(184, 100, 30, 1, "#1f2329"); // hinge
      // base / keyboard
      px(180, 101, 38, 4, "#3a3f47");
      px(178, 105, 42, 2, "#2c3137"); // front lip
      for (let kx = 183; kx < 214; kx += 3) px(kx, 102, 2, 1, "#4a505a"); // keys
      px(195, 104, 8, 1, "#4a505a"); // trackpad
    };

    let raf = 0;
    let offset = 0;
    let frame = 0;
    let planeX = -(BANNER_W + 20);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      // sky bands
      const sky = ["#5b8fd6", "#6f9cdb", "#84abe2", "#9bbcea", "#b3cdf0"];
      const band = HORIZON / sky.length;
      sky.forEach((col, i) => px(0, i * band, COLS, band + 1, col));

      // sun + glow
      px(262, 12, 12, 12, "#f7e9a0");
      px(260, 14, 16, 8, "#f7e9a0");
      px(264, 10, 8, 16, "#f7e9a0");
      px(264, 14, 8, 8, "#fff6cf");

      // clouds (drift)
      clouds.forEach((cl) => {
        let cx = cl.x + offset;
        cx = ((cx % (COLS + 70)) + (COLS + 70)) % (COLS + 70) - 35;
        drawCloud(cx, cl.y, cl.w);
      });

      // PitchLIVE banner plane looping across the sky
      drawAdPlane(planeX);

      // distant city + Sydney Harbour Bridge over the water
      drawSkyline();
      drawBridge();

      // garden lawn (foreground, near shore)
      const grass = ["#62b257", "#57a64d", "#4f9a46", "#48913f"];
      const gband = (ROWS - HORIZON) / grass.length;
      grass.forEach((col, i) => px(0, HORIZON + i * gband, COLS, gband + 1, col));

      // trees + flowers
      drawTree(24, HORIZON + 8, 1.1);
      drawTree(108, HORIZON + 6, 0.9);
      drawTree(286, HORIZON + 10, 1.2);
      drawFlower(60, HORIZON + 16, "#f4d23a");
      drawFlower(96, HORIZON + 26, "#e8657a");
      drawFlower(150, HORIZON + 14, "#ffffff");
      drawFlower(240, HORIZON + 22, "#f4d23a");
      drawFlower(266, HORIZON + 30, "#e8657a");

      // the laptop in the grass
      drawLaptop(frame);
    };

    const loop = () => {
      offset += 0.06;
      frame += 1;
      planeX += 0.4;
      if (planeX > COLS + 16) planeX = -(BANNER_W + 20);
      draw();
      raf = requestAnimationFrame(loop);
    };

    if (reduced) planeX = Math.round(COLS * 0.42);
    draw();
    if (!reduced) raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

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
}
