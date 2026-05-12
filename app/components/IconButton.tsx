import Link from "next/link";
import styles from "./IconButton.module.css";

interface IconButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

function ArrowUpRight() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function IconButton({ children, href, className, onClick }: IconButtonProps) {
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.circle} aria-hidden="true">
        <ArrowUpRight />
      </span>
    </>
  );

  const cls = `${styles.iconBtn} ${className ?? ""}`.trim();

  if (href) {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer" onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return <button className={cls} type="button" onClick={onClick}>{content}</button>;
}
