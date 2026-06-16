import { SiteLayout } from "../components/SiteLayout";
import IconButton from "../components/IconButton";
import styles from "../page.module.css";
import p from "./partnerships.module.css";

export default function PartnershipsPage() {
  return (
    <SiteLayout currentPage="partnerships">
      <>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={p.heroInner}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} />
                <span className={styles.eyebrowText}>Partnerships</span>
              </div>
              {/* EDIT COPY: hero headline */}
              <h1 className={styles.h1}>
                Bring insurance-grade AI to your platform.
              </h1>
              <p className={styles.lead}>
                We partner with CRM and workflow providers, networks, and technology
                partners to bring InsurAI&rsquo;s insurance intelligence to the tools
                brokers already use.
              </p>
              <div className={styles.heroCta}>
                <IconButton href="/#contact">Become a partner</IconButton>
                <a className={`${styles.btn} ${styles.btnGhost}`} href="/#contact">
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who we partner with */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Who we partner with</h2>
              <p className={styles.muted}>
                We work alongside the platforms brokers and underwriters already rely on.
              </p>
            </div>

            <div className={p.pGrid2}>
              {/* EDIT COPY: partner types */}
              <div className={p.pCell}>
                <h3>CRM providers</h3>
                <p>Insurance intelligence inside the CRM brokers use every day.</p>
              </div>
              <div className={p.pCell}>
                <h3>Workflow &amp; practice-management platforms</h3>
                <p>Smarter quoting, renewals, and admin for your users.</p>
              </div>
              <div className={p.pCell}>
                <h3>Underwriting agencies &amp; networks</h3>
                <p>Make your products easier for brokers to work with.</p>
              </div>
              <div className={p.pCell}>
                <h3>Technology &amp; AI partners</h3>
                <p>An insurance-specific layer, built with human review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What we bring */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Enhance your AI with insurance intelligence</h2>
              <p className={styles.muted}>
                PolicyAI can strengthen the AI you already offer &mdash; adding
                insurance-grade accuracy and broker review, without changing your product
                or your model.
              </p>
            </div>

            {/* EDIT COPY: statement */}
            <div className={p.statement}>
              Your interface. Your model. <span>Our insurance grounding.</span>
            </div>

            <div className={p.pGrid3}>
              <div className={p.pCell}>
                <h3>Insurance-grade accuracy</h3>
              </div>
              <div className={p.pCell}>
                <h3>A safety net for AI answers</h3>
              </div>
              <div className={p.pCell}>
                <h3>Human review by design</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Built to connect, not to silo</h2>
              <p className={styles.muted}>
                We&rsquo;re connecting the InsurAI Agent to work within a broader ecosystem,
                so intelligence travels with the workflow instead of living in another
                standalone tool.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <div>
                <h2 className={styles.h2}>Let&rsquo;s build together</h2>
                <p className={styles.muted}>
                  Tell us about your platform and the brokers you serve.
                </p>
              </div>
              <div className={styles.heroCta}>
                <IconButton href="/#contact">Become a partner</IconButton>
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  href="mailto:contact@insurai.com.au"
                >
                  contact@insurai.com.au
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </SiteLayout>
  );
}
