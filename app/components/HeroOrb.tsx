import styles from "./HeroOrb.module.css";

export default function HeroOrb() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.stars} />
      <div className={styles.glow} />
      <div className={`${styles.ring} ${styles.ring2}`} />
      <div className={`${styles.ring} ${styles.ring1}`} />
      <div className={styles.orb} />
      <div className={styles.satellite}>
        <span className={styles.satelliteDot} />
      </div>
      <span className={`${styles.spark} ${styles.spark1}`} />
      <span className={`${styles.spark} ${styles.spark2}`} />
      <span className={`${styles.spark} ${styles.spark3}`} />
      <span className={`${styles.spark} ${styles.spark4}`} />
      <span className={`${styles.spark} ${styles.spark5}`} />
    </div>
  );
}
