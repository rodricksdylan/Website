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
                Bring grounded insurance intelligence to your platform.
              </h1>
              <p className={styles.lead}>
                We partner with CRM and workflow providers to embed PolicyAI&rsquo;s
                source-aware insurance intelligence into their products &mdash; and
                we&rsquo;re connecting the InsurAI Agent to work inside the tools brokers
                already use.
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
                We work alongside the platforms brokers and underwriters already rely on
                &mdash; adding insurance-grade intelligence without asking anyone to change
                how they work.
              </p>
            </div>

            <div className={p.pGrid2}>
              {/* EDIT COPY: partner types */}
              <div className={p.pCell}>
                <h3>CRM providers</h3>
                <p>
                  Give brokers source-aware policy answers and AI assistance inside the
                  CRM where they already manage clients.
                </p>
              </div>
              <div className={p.pCell}>
                <h3>Workflow &amp; practice-management platforms</h3>
                <p>
                  Add insurance intelligence to quoting, renewals, and admin workflows so
                  your users move faster with fewer tabs.
                </p>
              </div>
              <div className={p.pCell}>
                <h3>Underwriting agencies &amp; networks</h3>
                <p>
                  Make product wordings, guides, and underwriting criteria easy to search
                  and compare for the brokers you support.
                </p>
              </div>
              <div className={p.pCell}>
                <h3>Technology &amp; AI partners</h3>
                <p>
                  Combine your platform with an insurance-specific grounding layer and
                  human-in-the-loop review built for the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The offering — grounding layer over your AI */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>A grounding layer over your existing AI</h2>
              <p className={styles.muted}>
                Generic models can sound confident and still be wrong on insurance.
                PolicyAI adds a grounded, source-aware insurance layer that sits over your
                existing LLM &mdash; a safety net that checks answers against approved
                insurance material before they reach your users.
              </p>
            </div>

            {/* Reuses the home 3-layer diagram styling */}
            <div className={styles.layerStack}>
              <div className={styles.layer}>
                <span className={styles.layerTag}>Your platform</span>
                <p className={styles.layerText}>
                  Your product, your interface, and your existing language model
                </p>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerTag}>PolicyAI grounding layer</span>
                <p className={styles.layerText}>
                  A source-aware insurance safety net &mdash; answers checked against
                  approved material, with the source in view
                </p>
              </div>
              <div className={styles.layer}>
                <span className={styles.layerTag}>Approved insurance material</span>
                <p className={styles.layerText}>
                  Policy wordings, insurer guides, product rules, and brokerage knowledge
                </p>
              </div>
            </div>

            {/* EDIT COPY: statement */}
            <div className={p.statement}>
              Your interface. Your model. <span>Our insurance grounding.</span>
            </div>
          </div>
        </section>

        {/* Ways to partner */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Ways to partner</h2>
              <p className={styles.muted}>
                From a light integration to a deep one &mdash; we meet your platform where
                it is.
              </p>
            </div>

            <div className={p.pGrid3}>
              <div className={p.pCell}>
                <span className={p.pCellTag}>01</span>
                <h3>Embed PolicyAI</h3>
                <p>
                  Add source-aware policy intelligence directly inside your product, with
                  your branding and your UX.
                </p>
              </div>
              <div className={p.pCell}>
                <span className={p.pCellTag}>02</span>
                <h3>Ground your existing assistant</h3>
                <p>
                  Put PolicyAI&rsquo;s insurance layer over the LLM you already run &mdash;
                  a safety net that keeps answers accurate and source-aware.
                </p>
              </div>
              <div className={p.pCell}>
                <span className={p.pCellTag}>03</span>
                <h3>Connect the InsurAI Agent</h3>
                <p>
                  Let the InsurAI Agent act within your ecosystem across broking workflows,
                  with broker review kept in the loop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why partner */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Why partner with InsurAI</h2>
            </div>

            <div className={p.pGrid3}>
              <div className={p.pCell}>
                <h3>Insurance-specific accuracy</h3>
                <p>Grounded in real insurance material, not generic web text.</p>
              </div>
              <div className={p.pCell}>
                <h3>A safety net for AI answers</h3>
                <p>Reduce the risk of confident-but-wrong responses on policy questions.</p>
              </div>
              <div className={p.pCell}>
                <h3>Keep your UX and your model</h3>
                <p>We sit over what you have &mdash; no rip-and-replace.</p>
              </div>
              <div className={p.pCell}>
                <h3>Faster time-to-value</h3>
                <p>Add an insurance-ready capability without building it from scratch.</p>
              </div>
              <div className={p.pCell}>
                <h3>Human review by design</h3>
                <p>Brokers keep judgement, advice, and final approval.</p>
              </div>
              <div className={p.pCell}>
                <h3>Built with the industry</h3>
                <p>Shaped with brokers, underwriting agencies, and networks.</p>
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
                We&rsquo;re connecting the InsurAI Agent to work within a broader ecosystem
                &mdash; an insurance-aware layer that plugs into the platforms brokers
                already use, so intelligence travels with the workflow instead of living in
                another standalone tool.
              </p>
            </div>
            <div className={p.statement}>
              One insurance-aware layer, <span>working across your stack.</span>
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
                  Tell us about your platform and the brokers you serve &mdash; we&rsquo;ll
                  show you the fastest path to insurance-grade AI.
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
