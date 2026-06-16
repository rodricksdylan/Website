import styles from "./WorkflowDiagram.module.css";

/* EDIT COPY: hero workflow diagram steps */
const STEPS = [
  { id: "01", title: "Policy knowledge", caption: "Wordings, guides, brokerage knowledge" },
  { id: "02", title: "AI assistants", caption: "Retrieve, structure, compare, summarise" },
  { id: "03", title: "Broker review", caption: "Source visibility, human approval" },
  { id: "04", title: "Client outcome", caption: "Faster, consistent, broker-led advice" },
];

export default function WorkflowDiagram() {
  return (
    <div className={styles.diagram} aria-hidden="true">
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li
            key={s.id}
            className={styles.step}
            style={{ ["--i" as unknown as string]: i } as React.CSSProperties}
          >
            <div className={styles.node}>
              <span className={styles.index}>{s.id}</span>
              <div className={styles.body}>
                <span className={styles.title}>{s.title}</span>
                <span className={styles.caption}>{s.caption}</span>
              </div>
              <span className={styles.dot} />
            </div>
            {i < STEPS.length - 1 && <span className={styles.connector} />}
          </li>
        ))}
      </ol>
    </div>
  );
}
