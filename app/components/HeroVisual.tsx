"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroOrb from "./HeroOrb";

// three.js is ~140 KB of JS and the sphere runs a per-frame noise shader over
// ~17k vertices. Load it only when we've decided the device should get it, so
// phones never download or execute it.
const HeroSphere = dynamic(() => import("./HeroSphere"), {
  ssr: false,
  loading: () => <HeroOrb />,
});

export default function HeroVisual() {
  // Server-render the CSS orb, then upgrade to WebGL only on large screens
  // where motion is welcome. Both stages share the same box, so the swap
  // causes no layout shift.
  const [useWebGL, setUseWebGL] = useState(false);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 980px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () => setUseWebGL(!small.matches && !reduced.matches);

    decide();
    small.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      small.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  return useWebGL ? <HeroSphere /> : <HeroOrb />;
}
