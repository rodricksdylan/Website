import styles from "./HeroBlob.module.css";

export default function HeroBlob() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />
      <svg
        className={styles.svg}
        viewBox="-200 -200 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hb-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 22 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          <radialGradient id="hb-blob" cx="35%" cy="30%" r="80%">
            <stop offset="0%"  stopColor="#1f2a44" />
            <stop offset="100%" stopColor="#0b1020" />
          </radialGradient>
        </defs>

        <g filter="url(#hb-gooey)">
          <circle className={styles.blobA} cx="-85"  cy="-85" r="78" fill="url(#hb-blob)" />
          <circle className={styles.blobB} cx="92"   cy="-72" r="70" fill="url(#hb-blob)" />
          <circle className={styles.blobC} cx="-95"  cy="80"  r="74" fill="url(#hb-blob)" />
          <circle className={styles.blobD} cx="90"   cy="90"  r="80" fill="url(#hb-blob)" />
          <circle className={styles.blobE} cx="0"    cy="0"   r="56" fill="url(#hb-blob)" />
        </g>
      </svg>
    </div>
  );
}
