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
