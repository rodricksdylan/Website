"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MobileNav.module.css";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  return (
    <div className={styles.wrap}>
      <button
        className={styles.burger}
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className={styles.panel} ref={panelRef}>
          <a href="#products" onClick={() => setOpen(false)}>Products</a>
          <a href="#why" onClick={() => setOpen(false)}>Why InsurAI</a>
          <a href="#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <div className={styles.cta}>
            <a
              className={styles.btnGhost}
              href="https://www.consentai.com.au/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              View ConsentAI
            </a>
            <a className={styles.btnPrimary} href="#contact" onClick={() => setOpen(false)}>
              Book a demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
