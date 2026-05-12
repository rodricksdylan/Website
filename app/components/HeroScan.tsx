import styles from "./HeroScan.module.css";

export default function HeroScan() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />
      <svg
        className={styles.svg}
        viewBox="-200 -200 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hs-beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"  stopColor="#2366f0" stopOpacity="0" />
            <stop offset="50%" stopColor="#4d85f5" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2366f0" stopOpacity="0" />
          </linearGradient>

          <clipPath id="hs-doc-clip">
            <rect x="-100" y="-95" width="180" height="190" rx="8" />
          </clipPath>
        </defs>

        {/* back document, tilted */}
        <g transform="rotate(-7) translate(-30 -22)">
          <rect className={styles.docShadow} x="-96" y="-91" width="180" height="190" rx="8" />
          <rect className={styles.docBack}   x="-100" y="-95" width="180" height="190" rx="8" />
          <rect className={styles.headerBar}  x="-86" y="-78" width="60" height="6" rx="2" opacity="0.6" />
          {[...Array(8)].map((_, i) => (
            <rect key={i} className={styles.textLineDim}
              x="-86" y={-58 + i * 16} width={i % 3 === 0 ? 130 : i % 2 === 0 ? 150 : 110}
              height="4" rx="2" />
          ))}
        </g>

        {/* front-right small document */}
        <g transform="rotate(8) translate(50 35)">
          <rect className={styles.docShadow} x="-66" y="-71" width="130" height="150" rx="8" />
          <rect className={styles.docFront}  x="-70" y="-75" width="130" height="150" rx="8" />
          <rect className={styles.headerBar} x="-56" y="-60" width="45" height="5" rx="2" opacity="0.8" />
          {[...Array(7)].map((_, i) => (
            <rect key={i} className={styles.textLineDim}
              x="-56" y={-42 + i * 14} width={i % 2 === 0 ? 90 : 70}
              height="3.5" rx="2" />
          ))}
        </g>

        {/* main focused document */}
        <g>
          <rect className={styles.docShadow} x="-96" y="-91" width="180" height="190" rx="8" />
          <rect className={styles.docMid}    x="-100" y="-95" width="180" height="190" rx="8" />

          <g clipPath="url(#hs-doc-clip)">
            {/* header bar */}
            <rect className={styles.headerBar} x="-86" y="-78" width="80" height="7" rx="2.5" />

            {/* text lines */}
            {[
              -56, -42, -28, -14, 0, 14, 28, 42, 56, 70,
            ].map((y, i) => (
              <rect key={i} className={styles.textLine}
                x="-86" y={y}
                width={
                  i === 2 ? 140 :
                  i === 5 ? 130 :
                  i === 7 ? 100 :
                  i % 2 === 0 ? 150 : 120
                }
                height="4.5" rx="2"
              />
            ))}

            {/* clause highlights that pulse in sequence */}
            <rect className={`${styles.highlight} ${styles.highlight1}`}
              x="-90" y="-32" width="160" height="12" rx="3" />
            <rect className={`${styles.highlight} ${styles.highlight2}`}
              x="-90" y="10"  width="160" height="12" rx="3" />
            <rect className={`${styles.highlight} ${styles.highlight3}`}
              x="-90" y="38"  width="160" height="12" rx="3" />

            {/* scanning beam */}
            <g className={styles.scanBeam}>
              <rect x="-100" y="-50" width="180" height="50" fill="url(#hs-beam)" />
            </g>
            <line className={styles.scanLine}
              x1="-100" y1="-25" x2="80" y2="-25" />
          </g>

          {/* corner accents */}
          <circle className={styles.cornerDot} cx="-100" cy="-95" r="2" />
          <circle className={styles.cornerDot} cx="80"   cy="-95" r="2" />
          <circle className={styles.cornerDot} cx="-100" cy="95"  r="2" />
          <circle className={styles.cornerDot} cx="80"   cy="95"  r="2" />
        </g>

        {/* extracted data pills appearing on the right */}
        <g transform="translate(95 -50)">
          <g className={`${styles.pill} ${styles.pill1}`}>
            <rect className={styles.pillBg} x="0" y="-10" width="86" height="20" rx="10" />
            <circle className={styles.pillDot} cx="10" cy="0" r="3" />
            <text className={styles.pillText} x="20" y="3">Effective date</text>
          </g>
          <g className={`${styles.pill} ${styles.pill2}`} transform="translate(8 36)">
            <rect className={styles.pillBg} x="0" y="-10" width="76" height="20" rx="10" />
            <circle className={styles.pillDot} cx="10" cy="0" r="3" />
            <text className={styles.pillText} x="20" y="3">Sum insured</text>
          </g>
          <g className={`${styles.pill} ${styles.pill3}`} transform="translate(4 72)">
            <rect className={styles.pillBg} x="0" y="-10" width="92" height="20" rx="10" />
            <circle className={styles.pillDot} cx="10" cy="0" r="3" />
            <text className={styles.pillText} x="20" y="3">Excess clause</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
