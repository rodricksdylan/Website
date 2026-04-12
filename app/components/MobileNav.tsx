"use client";

import Link from "next/link";
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
          <Link href="/#products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/#why" onClick={() => setOpen(false)}>Why InsurAI</Link>
          <Link href="/#how" onClick={() => setOpen(false)}>How it works</Link>
          <Link href="/#contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/media" onClick={() => setOpen(false)}>In the Media</Link>

          <div className={styles.cta}>
            <Link className={styles.btnPrimary} href="/#contact" onClick={() => setOpen(false)}>
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
