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
  "2": ["111", "001", "111", "100", "111"],
  "6": ["111", "100", "111", "101", "111"],
};

const BANNER_TEXT = "PITCHLIVE26";
const BANNER_W = BANNER_TEXT.length * 4 - 1 + 4; // glyphs (3w +1 gap) + side padding
const PLANE_ALT = 14; // flight centre-line y

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

    // hazy office buildings far on the horizon
    const buildings: Array<[number, number, number, string]> = [
      [10, 16, 64, "#8294bd"],
      [28, 12, 68, "#90a2c8"],
      [120, 18, 62, "#8597c0"],
      [150, 12, 68, "#90a2c8"],
      [250, 20, 60, "#8294bd"],
      [274, 14, 66, "#9aaccf"],
    ];

    const clouds: Array<{ x: number; y: number; w: number }> = [
      { x: 40, y: 30, w: 28 },
      { x: 150, y: 24, w: 36 },
      { x: 230, y: 34, w: 24 },
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
      // banner
      px(bannerLeft, ny - 4, BANNER_W, 9, "#d83a3a");
      px(bannerLeft, ny - 4, BANNER_W, 1, "#f0bdbd");
      px(bannerLeft, ny + 4, BANNER_W, 1, "#a82828");
      drawText(BANNER_TEXT, bannerLeft + 3, ny - 2, "#ffffff");
      // tow line
      px(bannerRight, ny, 4, 1, "#3a3a3a");
      // plane (nose to the right)
      px(planeX, ny - 1, 12, 3, "#eef2f6"); // fuselage
      px(planeX + 12, ny, 2, 1, "#cfd8e0"); // nose
      px(planeX, ny - 3, 2, 3, "#d83a3a"); // tail fin
      px(planeX + 4, ny - 3, 4, 1, "#c2ccd6"); // upper wing
      px(planeX + 4, ny + 2, 5, 1, "#c2ccd6"); // lower wing
      px(planeX + 2, ny, 9, 1, "#d83a3a"); // red stripe
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

    // pixel monitor showing "agent activity", facing the broker
    const drawMonitor = (x: number, y: number, frame: number) => {
      px(x, y, 18, 16, "#2b2f36"); // bezel
      px(x + 1, y + 1, 16, 13, "#0e1f29"); // screen
      const bars = [3, 6, 4, 8, 5, 7];
      bars.forEach((b, i) => {
        const grow = (frame >> 3) % 3 === 0 && i % 2 === 0 ? 1 : 0;
        px(x + 2 + i * 2.4, y + 12 - b - grow, 2, b + grow, "#4ad6a0");
      });
      px(x + 7, y + 16, 4, 2, "#2b2f36"); // stand
      px(x + 4, y + 18, 10, 1, "#23262c"); // base
    };

    // the agent bots doing the work
    const drawRobot = (
      x: number,
      groundY: number,
      body: string,
      head: string,
      tip: string,
      frame: number,
      phase: number
    ) => {
      const blink = ((frame >> 4) + phase) % 2 === 0;
      px(x + 2, groundY - 14, 8, 4, head); // head
      px(x + 4, groundY - 12, 2, 2, "#3fd0e0"); // eye
      px(x + 5, groundY - 17, 1, 3, "#7f8893"); // antenna
      px(x + 5, groundY - 18, 1, 1, blink ? tip : "#5a6068"); // antenna tip
      px(x + 1, groundY - 10, 10, 8, body); // torso
      px(x + 3, groundY - 8, 6, 1, "#6b7680"); // panel line
      px(x, groundY - 8, 2, 5, body); // left arm
      px(x + 10, groundY - 8, 2, 5, body); // right arm
      px(x + 2, groundY - 2, 3, 2, "#5a6068"); // legs
      px(x + 7, groundY - 2, 3, 2, "#5a6068");
      // terminal the bot works at
      px(x + 12, groundY - 9, 7, 7, "#2b2f36");
      px(x + 13, groundY - 8, 5, 5, blink ? "#10303a" : "#143a44");
      px(x + 14, groundY - 7, 3, 1, "#4ad6a0");
      px(x + 14, groundY - 5, 2, 1, "#4ad6a0");
    };

    // broker reclining at his garden desk, feet up, coffee in hand
    const drawBroker = () => {
      px(150, 64, 5, 28, "#6b4a2c"); // backrest
      px(150, 88, 20, 4, "#6b4a2c"); // seat
      px(151, 90, 3, 6, "#553a22"); // chair legs
      px(166, 90, 3, 6, "#553a22");
      px(158, 82, 14, 8, "#2f3b5c"); // hips/pants
      px(155, 72, 12, 12, "#6fa8dc"); // shirt
      px(156, 71, 9, 2, "#5b95cc"); // collar
      px(157, 65, 8, 8, "#e8b07a"); // head
      px(157, 63, 8, 3, "#5a3b22"); // hair top
      px(156, 65, 2, 5, "#5a3b22"); // hair back
      px(159, 68, 5, 1, "#1c1c1c"); // sunglasses
      px(152, 66, 3, 7, "#e8b07a"); // arm behind head
      px(152, 65, 6, 2, "#e8b07a");
      px(170, 84, 18, 5, "#2f3b5c"); // thigh
      px(186, 82, 16, 4, "#3a466b"); // shin
      px(200, 80, 8, 4, "#3a2c20"); // shoes on desk
    };

    const drawDesk = (frame: number) => {
      px(196, 80, 50, 4, "#a9753f"); // surface
      px(196, 80, 50, 1, "#c08b50"); // top highlight
      px(198, 84, 46, 22, "#8a5e30"); // front panel
      px(200, 106, 4, 14, "#6f4a24"); // legs
      px(238, 106, 4, 14, "#6f4a24");
      px(210, 77, 12, 3, "#f3efe6"); // papers
      px(211, 78, 10, 1, "#cfc6b4");
      px(204, 75, 5, 5, "#d9534f"); // mug
      px(208, 76, 1, 3, "#d9534f"); // handle
      px(205, 76, 3, 1, "#3a2418"); // coffee
      if (((frame >> 3) % 2) === 0) px(206, 72, 1, 2, "#cdd6df"); // steam
      drawMonitor(222, 62, frame);
      px(236, 76, 4, 4, "#b5613a"); // pot
      px(235, 72, 6, 4, "#3f7d39"); // plant
      px(237, 70, 2, 3, "#356b30");
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

      // the PitchLIVE banner plane flying its loop across the sky
      drawAdPlane(planeX);

      // hazy skyline
      buildings.forEach(([x, w, top, color]) => {
        px(x, top, w, HORIZON - top, color);
        for (let wy = top + 3; wy < HORIZON - 2; wy += 5) {
          for (let wx = x + 2; wx < x + w - 2; wx += 5) {
            px(wx, wy, 2, 2, "#eadfae");
          }
        }
      });

      // garden ground bands
      const grass = ["#62b257", "#57a64d", "#4f9a46", "#48913f"];
      const gband = (ROWS - HORIZON) / grass.length;
      grass.forEach((col, i) => px(0, HORIZON + i * gband, COLS, gband + 1, col));

      // background trees
      drawTree(24, HORIZON + 6, 1.1);
      drawTree(108, HORIZON + 4, 0.9);
      drawTree(282, HORIZON + 8, 1.2);

      // flowers
      drawFlower(60, HORIZON + 14, "#f4d23a");
      drawFlower(96, HORIZON + 22, "#e8657a");
      drawFlower(130, HORIZON + 12, "#ffffff");
      drawFlower(176, HORIZON + 26, "#f4d23a");
      drawFlower(255, HORIZON + 18, "#e8657a");

      // foreground vignette: desk, broker, then the working bots
      drawDesk(frame);
      drawBroker();
      drawRobot(250, HORIZON + 40, "#aab3bd", "#7f8893", "#ff6b5e", frame, 0);
      drawRobot(274, HORIZON + 44, "#9aa3ad", "#727b85", "#4ad6a0", frame, 1);
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
