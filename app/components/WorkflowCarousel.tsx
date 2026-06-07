"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./WorkflowCarousel.module.css";

const ArrowRightSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const ArrowLeftSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
);

const Understand = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
  </svg>
);
const Rules = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="14" width="6" height="6" rx="1" /><path d="M9 7h6a3 3 0 0 1 3 3v4" />
  </svg>
);
const Retrieve = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 1 2-2h12" />
  </svg>
);
const Reason = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);
const Execute = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15l2 2 4-4" />
  </svg>
);

const steps = [
  { n: "01", title: "Understand the request", summary: "Identify what the broker is trying to do — quote, renewal, endorsement, comparison, a policy condition, or missing underwriting information.", icon: Understand, gradient: "linear-gradient(135deg, #2366f0, #1a4fc4)" },
  { n: "02", title: "Apply your brokerage's rules", summary: "Configured per firm: your insurer panel, product set, underwriting questions, referral triggers, and compliance requirements.", icon: Rules, gradient: "linear-gradient(135deg, #1f7ae0, #1559b8)" },
  { n: "03", title: "Retrieve your firm's knowledge", summary: "Search your trusted material — policy wordings, insurer guides, product rules, and underwriting criteria — instead of guessing.", icon: Retrieve, gradient: "linear-gradient(135deg, #1aa3c4, #127a9a)" },
  { n: "04", title: "Reason through the next step", summary: "Combine the request, rules, and retrieved information to work out the best next step — or flag items for human review.", icon: Reason, gradient: "linear-gradient(135deg, #4d85f5, #2366f0)" },
  { n: "05", title: "Execute or assist with the workflow", summary: "Help with the next action — quote info, renewal notes, endorsement details, client summaries, or system-ready outputs.", icon: Execute, gradient: "linear-gradient(135deg, #2db0a6, #1c8f86)" },
];

export default function WorkflowCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    breakpoints: { "(max-width: 768px)": { dragFree: true } },
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.wrap}>
      <div className={styles.controls}>
        <button
          type="button"
          aria-label="Previous"
          className={styles.navBtn}
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ArrowLeftSvg className={styles.navIcon} />
        </button>
        <button
          type="button"
          aria-label="Next"
          className={styles.navBtn}
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ArrowRightSvg className={styles.navIcon} />
        </button>
      </div>

      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.track}>
          {steps.map((s) => (
            <div className={styles.slide} key={s.n}>
              <div className={styles.card}>
                <div className={styles.media} style={{ background: s.gradient }}>
                  <span className={styles.num}>{s.n}</span>
                  <span className={styles.mediaIcon}>{s.icon}</span>
                </div>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.summary}>{s.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
