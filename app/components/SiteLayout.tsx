import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { MobileNav } from "./MobileNav";

type CurrentPage = "home" | "media" | "about";

interface SiteLayoutProps {
  children: React.ReactNode;
  currentPage?: CurrentPage;
}

export function SiteLayout({ children, currentPage = "home" }: SiteLayoutProps) {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.container}>
          <div className={styles.topbarInner}>
            <Link href="/" className={styles.brand} aria-label="InsurAI home">
              <span className={styles.brandMark}>Insur</span>
              <span className={`${styles.brandMark} ${styles.brandAccent}`}>AI</span>
            </Link>

            <nav className={styles.nav} aria-label="Primary">
              <Link href="/#products" className={currentPage === "home" ? undefined : ""}>
                Products
              </Link>
              <Link href="/#why" className={currentPage === "home" ? undefined : ""}>
                Why InsurAI
              </Link>
              <Link href="/#how" className={currentPage === "home" ? undefined : ""}>
                How it works
              </Link>
              <Link href="/#contact" className={currentPage === "home" ? undefined : ""}>
                Contact
              </Link>
              <Link
                href="/about"
                className={currentPage === "about" ? styles.navActive : ""}
                aria-current={currentPage === "about" ? "page" : undefined}
              >
                About
              </Link>
              <Link
                href="/media"
                className={currentPage === "media" ? styles.navActive : ""}
                aria-current={currentPage === "media" ? "page" : undefined}
              >
                In the Media
              </Link>
            </nav>

            <div className={styles.actions}>
              <Link
                className={`${styles.btn} ${styles.btnPrimary}`}
                href={currentPage === "media" ? "/#contact" : "#contact"}
              >
                Book a demo
              </Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerInner}>
            <div>
              <div className={styles.brandFooter}>
                <span className={styles.brandMark}>Insur</span>
                <span className={`${styles.brandMark} ${styles.brandAccent}`}>AI</span>
              </div>
              <p className={`${styles.fine} ${styles.muted}`}>
                AI-powered insurance solutions built for broker workflows.
              </p>
            </div>

            <div className={styles.footerLinks}>
              <Link href="/#products">Products</Link>
              <Link href="/#why">Why</Link>
              <Link href="/#how">How</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/about">About</Link>
              <Link href="/media">In the Media</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>

            <div className={`${styles.fine} ${styles.muted}`}>
              © {new Date().getFullYear()} InsurAI Pty Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
