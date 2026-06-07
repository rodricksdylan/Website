"use client";

import { Warp } from "@paper-design/shaders-react";
import styles from "./WhyShaderCards.module.css";

type ShaderConfig = {
  proportion: number;
  softness: number;
  distortion: number;
  swirl: number;
  swirlIterations: number;
  shape: "checks" | "stripes" | "edge";
  shapeScale: number;
  colors: string[];
};

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  shader: ShaderConfig;
};

const ShieldCheck = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Workflow = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="6" height="6" rx="1" />
    <rect x="15" y="14" width="6" height="6" rx="1" />
    <path d="M9 7h6a3 3 0 0 1 3 3v4" />
  </svg>
);
const BookSearch = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19a2 2 0 0 1 2-2h12" />
  </svg>
);
const Cpu = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
  </svg>
);
const UserCheck = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M16 11l2 2 4-4" />
  </svg>
);
const FileCheck = (
  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15l2 2 4-4" />
  </svg>
);

const features: Feature[] = [
  {
    title: "Insurance domain logic",
    description: "Purpose-built rules for how broking actually works—not a generic chatbot.",
    icon: ShieldCheck,
    shader: { proportion: 0.3, softness: 0.95, distortion: 0.15, swirl: 0.6, swirlIterations: 8, shape: "checks", shapeScale: 0.08, colors: ["hsl(214, 100%, 92%)", "hsl(210, 95%, 74%)", "hsl(218, 100%, 86%)", "hsl(206, 100%, 80%)"] },
  },
  {
    title: "Structured workflow rules",
    description: "Each request follows the right steps, in the right order, every time.",
    icon: Workflow,
    shader: { proportion: 0.4, softness: 1.25, distortion: 0.2, swirl: 0.9, swirlIterations: 12, shape: "stripes", shapeScale: 0.12, colors: ["hsl(190, 95%, 90%)", "hsl(186, 85%, 72%)", "hsl(196, 95%, 85%)", "hsl(188, 90%, 78%)"] },
  },
  {
    title: "Retrieval from trusted sources",
    description: "Answers grounded in your policy wordings and insurer material, not guesses.",
    icon: BookSearch,
    shader: { proportion: 0.35, softness: 1.0, distortion: 0.18, swirl: 0.7, swirlIterations: 10, shape: "checks", shapeScale: 0.1, colors: ["hsl(200, 100%, 92%)", "hsl(196, 90%, 74%)", "hsl(205, 100%, 86%)", "hsl(198, 95%, 80%)"] },
  },
  {
    title: "AI reasoning",
    description: "Works out the best next step for the broker, not just a reply.",
    icon: Cpu,
    shader: { proportion: 0.45, softness: 1.15, distortion: 0.22, swirl: 0.8, swirlIterations: 15, shape: "stripes", shapeScale: 0.09, colors: ["hsl(224, 100%, 93%)", "hsl(220, 90%, 78%)", "hsl(230, 100%, 88%)", "hsl(222, 95%, 82%)"] },
  },
  {
    title: "Human review where needed",
    description: "Flags items for a broker to confirm before anything is acted on.",
    icon: UserCheck,
    shader: { proportion: 0.38, softness: 1.0, distortion: 0.16, swirl: 0.85, swirlIterations: 11, shape: "checks", shapeScale: 0.11, colors: ["hsl(210, 100%, 92%)", "hsl(206, 92%, 76%)", "hsl(216, 100%, 86%)", "hsl(208, 95%, 80%)"] },
  },
  {
    title: "Action-ready outputs",
    description: "Quote info, renewal notes, and client summaries ready to use.",
    icon: FileCheck,
    shader: { proportion: 0.42, softness: 1.05, distortion: 0.19, swirl: 0.75, swirlIterations: 9, shape: "stripes", shapeScale: 0.13, colors: ["hsl(194, 100%, 91%)", "hsl(190, 90%, 74%)", "hsl(200, 100%, 86%)", "hsl(192, 95%, 80%)"] },
  },
];

export default function WhyShaderCards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.h2}>Why this matters</h2>
          <p className={styles.sub}>
            Generic AI tools can read documents and produce answers. InsurAI is designed to understand insurance
            workflows&mdash;considering the request, the rules, the source documents, the workflow stage, and the action
            required, not just generating a response.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.shaderWrap}>
                <Warp
                  style={{ height: "100%", width: "100%" }}
                  proportion={feature.shader.proportion}
                  softness={feature.shader.softness}
                  distortion={feature.shader.distortion}
                  swirl={feature.shader.swirl}
                  swirlIterations={feature.shader.swirlIterations}
                  shape={feature.shader.shape}
                  shapeScale={feature.shader.shapeScale}
                  scale={1}
                  rotation={0}
                  speed={0.8}
                  colors={feature.shader.colors}
                />
              </div>

              <div className={styles.panel}>
                <div className={styles.iconWrap}>{feature.icon}</div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.desc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
