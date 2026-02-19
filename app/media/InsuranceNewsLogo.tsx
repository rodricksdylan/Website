"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./media.module.css";

export function InsuranceNewsLogo() {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Image
      src="https://www.insurancenews.com.au/images/inews-logo.svg"
      alt="Insurance News"
      width={260}
      height={80}
      className={styles.cardSourceLogo}
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
