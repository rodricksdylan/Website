import Image from "next/image";
import styles from "./HeroPixel.module.css";

export default function HeroPixel() {
  return (
    <section className={styles.hero} aria-label="InsurAI hero">
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

        <div className={styles.visual}>
          <div className={styles.frame}>
            <Image
              src="/images/download.png"
              alt="Pixel-art scene of the Sydney Harbour Bridge and Opera House across the harbour, with a laptop resting in a lush garden"
              width={512}
              height={512}
              className={styles.art}
              style={{ imageRendering: "pixelated" }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
