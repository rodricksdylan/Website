"use client";

import { useState } from "react";
import styles from "./WorkflowAccordion.module.css";

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

const items = [
  { id: "1", icon: Understand, question: "Understand the request", answer: "InsurAI first identifies the broker's task — get a quote, process a renewal, request an endorsement, compare policy options, check a condition, or find missing underwriting information — before trying to answer." },
  { id: "2", icon: Rules, question: "Apply your brokerage's rules", answer: "Configured per firm. InsurAI applies your brokerage's own logic — your insurer panel, product set, mandatory underwriting questions, referral triggers, and compliance requirements — built to function as per your brokerage's requirement, not forced to use a generic template." },
  { id: "3", icon: Retrieve, question: "Retrieve your firm's knowledge", answer: "InsurAI searches your trusted material — your policy wordings, insurer guides, product rules, and underwriting criteria — instead of guessing. Your rules and knowledge become an advantage no competitor can copy." },
  { id: "4", icon: Reason, question: "Reason through the next step", answer: "It combines the request, the applicable rules, and the retrieved information to work out the next best step: explain a condition, compare options, highlight gaps, prepare a summary, or flag items for human review." },
  { id: "5", icon: Execute, question: "Execute or assist with the workflow", answer: "Where appropriate, InsurAI helps with the next action — quote information, renewal notes, endorsement details, client summaries, or system-ready outputs — always keeping broker judgement in the loop." },
];

export default function WorkflowAccordion() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <div className={styles.accordion}>
      {items.map(({ id, icon, question, answer }) => {
        const isOpen = openId === id;
        return (
          <div className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`} key={id}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenId((cur) => (cur === id ? null : id))}
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.question}>{question}</span>
              <span className={styles.toggle} aria-hidden="true">
                <span className={styles.barH} />
                <span className={styles.barV} />
              </span>
            </button>
            <div className={styles.contentWrap}>
              <div className={styles.contentInner}>
                <p className={styles.answer}>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
