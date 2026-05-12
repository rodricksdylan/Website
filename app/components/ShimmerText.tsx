import styles from "./ShimmerText.module.css";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ShimmerText({ children, className }: ShimmerTextProps) {
  return (
    <span className={`${styles.shimmer} ${className ?? ""}`.trim()}>
      {children}
    </span>
  );
}
