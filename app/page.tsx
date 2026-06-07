import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { SiteLayout } from "./components/SiteLayout";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";
import WhySection from "./components/WhySection";
import HeroSphere from "./components/HeroSphere";
import IconButton from "./components/IconButton";
import WorkflowAccordion from "./components/WorkflowAccordion";

export default function HomePage() {
  return (
    <SiteLayout currentPage="home">
      <>
        {/* Announcement Banner */}
        <div className={styles.announcementBanner}>
          <span className={styles.bannerHighlight}>Winner — PitchLIVE26 (Insurtech Australia)</span>
          <Link href="/media">Read more &rarr;</Link>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <h1 className={styles.h1}>
                  InsurAI is an orchestration platform designed to help you run a smarter brokerage
                </h1>
                <p className={styles.lead}>
                  Give your brokers an AI assistant that reads every policy&mdash;instant answers, fewer tabs, and better advice for your clients.
                </p>

                <div className={styles.heroCta}>
                  <IconButton href="#contact">Contact sales</IconButton>
                  <a className={`${styles.btn} ${styles.btnGhost}`} href="#products">
                    Explore products
                  </a>
                </div>

                <ul className={styles.ticks}>
                  <li>Broker systems interface</li>
                  <li>Insurance-augmented AI intelligence</li>
                  <li>Precision document &amp; data extraction</li>
                </ul>
              </div>

              {/* Hero visual */}
              <div className={styles.heroVisual} aria-hidden="true">
                <HeroSphere />
              </div>
            </div>
          </div>
        </section>

        {/* Value props */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Built for the way brokers work</h2>
              <p className={styles.muted}>
                InsurAI puts insurance-augmented AI right inside your workflow&mdash;so brokers spend less time digging through policies and more time advising clients.
              </p>
            </div>
            <div className={styles.grid3}>
              <div className={styles.card}>
                <h3 className={styles.h3}>Insurance-augmented intelligence</h3>
                <p className={styles.muted}>
                  Models augmented specifically for broker workflows&mdash;from policy insights to coverage questions.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Human in the loop</h3>
                <p className={styles.muted}>
                  You stay in control. InsurAI surfaces the answer and its source&mdash;you make the call.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>Built for broker workflows</h3>
                <p className={styles.muted}>
                  Ask in plain language and get answers across long policy documents&mdash;no portal hopping.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className={styles.section} id="products">
          <div className={styles.geometricBg}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
            <div className={styles.shape4}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Products</h2>
              <p className={styles.muted}>Conversational AI policy intelligence today&mdash;and an orchestration agent on the way.</p>
              <div className={styles.statusRow}>
                <span className={styles.statusPill}>
                  <span className={`${styles.statusDot} ${styles.dotLive}`} />
                  PolicyAI &middot; Live
                </span>
                <span className={styles.statusPill}>
                  <span className={`${styles.statusDot} ${styles.dotDev}`} />
                  InsurAI Agent &middot; In development
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcases */}
        <ProductShowcase
          title="PolicyAI"
          description="A conversational assistant that helps brokers extract and work with policy information instantly—fewer tabs, faster answers, better advice. Ask questions across long policy documents and get instant insights."
          imageSrc="/images/policyai dashboard.png"
          imageAlt="PolicyAI Interface"
          primaryCta={{ label: "Open PolicyAI", href: "https://www.policyai.com.au", external: true }}
          secondaryCta={{ label: "See how it works", href: "https://www.policyai.com.au/features", external: true }}
          titleColorCombo="policyai"
        />

        {/* InsurAI Agent — in development */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.agentCard}>
              <span className={styles.agentBadge}>
                <span className={styles.agentBadgeDot} />
                In development
              </span>
              <h2 className={styles.h2}>InsurAI Agent</h2>
              <p className={styles.agentLead}>
                The orchestration layer for your brokerage. The Agent ties policy intelligence, your firm&rsquo;s rules, and your data into one assistant that acts across the whole broking workflow&mdash;quoting, renewals, endorsements and more.
              </p>
              <p className={styles.muted}>
                We&rsquo;re looking for one brokerage to partner with us on an early-access pilot. You get a first-mover advantage and a real say in how it&rsquo;s built; we get real-world feedback to shape it. A genuine win for your firm and for us.
              </p>

              <ul className={styles.ticks}>
                <li>Early access to the orchestration technology</li>
                <li>Shaped around your firm&rsquo;s own rules and data</li>
                <li>Partner pricing while we build it together</li>
              </ul>

              <div className={styles.heroCta}>
                <IconButton href="#contact">Partner on the pilot</IconButton>
                <a className={`${styles.btn} ${styles.btnGhost}`} href="#contact">
                  Request early access
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <WhySection />

        {/* How it works — insurance decision engine */}
        <section className={styles.section} id="how">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Built for insurance workflows, not generic chat</h2>
              <p className={styles.muted}>
                Insurance work isn&rsquo;t just answering questions. Brokers interpret client requests, check policy wording, follow insurer rules, spot missing information, compare options, and complete actions accurately. So InsurAI is built around a structured insurance decision engine&mdash;not a generic document chatbot. The rules and knowledge steps are configured to each brokerage, so every firm gets an assistant shaped around its own way of working. Every broker request passes through our insurance workflow algorithm:
              </p>
            </div>

            <WorkflowAccordion />
          </div>
        </section>

        {/* Why this matters */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>Why this matters</h2>
              <p className={styles.muted}>
                Generic AI tools can read documents and produce answers. InsurAI is designed to understand insurance workflows &mdash; considering the request, the rules, the source documents, the workflow stage, and the action required, not just generating a response. That&rsquo;s what makes it different.
              </p>
            </div>

            <div className={styles.featGrid}>
              {[
                {
                  t: "Insurance domain logic",
                  d: "Purpose-built rules for how broking actually works.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" /><path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  t: "Structured workflow rules",
                  d: "Each request follows the right steps, in the right order.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="14" width="6" height="6" rx="1" /><path d="M9 7h6a3 3 0 0 1 3 3v4" />
                    </svg>
                  ),
                },
                {
                  t: "Retrieval from trusted sources",
                  d: "Answers grounded in policy wordings and insurer material.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 1 2-2h12" />
                    </svg>
                  ),
                },
                {
                  t: "AI reasoning",
                  d: "Works out the best next step, not just a reply.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                    </svg>
                  ),
                },
                {
                  t: "Human review where needed",
                  d: "Flags items for a broker to confirm before acting.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M16 11l2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  t: "Action-ready outputs",
                  d: "Quote info, renewal notes, and summaries ready to use.",
                  icon: (
                    <svg className={styles.featIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 15l2 2 4-4" />
                    </svg>
                  ),
                },
              ].map((f) => (
                <div className={styles.featCell} key={f.t}>
                  <div className={styles.featCellHead}>
                    {f.icon}
                    <h3 className={styles.featTitle}>{f.t}</h3>
                  </div>
                  <p className={styles.featText}>{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <div>
                <h2 className={styles.h2}>Give every broker an AI policy expert</h2>
                <p className={styles.muted}>See how PolicyAI answers complex policy questions in seconds.</p>
              </div>
              <div className={styles.heroCta}>
                <IconButton href="#contact">Contact sales</IconButton>
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  href="https://www.policyai.com.au"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PolicyAI
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={`${styles.section} ${styles.sectionAlt}`} id="contact">
          <div className={styles.container}>
            <div className={styles.contact}>
              <div>
                <h2 className={styles.h2}>Talk to us</h2>
                <p className={styles.muted}>
                  Tell us what you're trying to automate and we'll show you the fastest path.
                </p>

                <div className={styles.contactMeta}>
                  <div className={styles.metaRow}>
                    <span>Email</span>
                    <a href="mailto:contact@insurai.com.au">contact@insurai.com.au</a>
                  </div>
                  <div className={styles.metaRow}>
                    <span>Location</span>
                    <span>Hobart, Tasmania</span>
                  </div>
                  <div className={styles.metaRow}>
                    <span>LinkedIn</span>
                    <a href="https://www.linkedin.com/company/insur-ai" target="_blank" rel="noreferrer">
                      Follow us
                    </a>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className={styles.band}>
          <div className={styles.container}>
            <div className={styles.bandInner}>
              <p className={styles.bandLabel}>Proudly building from Hobart, Tasmania</p>

              {/* Partner logos */}
              <div className={styles.logos}>
                <div className={styles.logoBox}>
                  <Image
                    src="/images/MEMBER_rectangle.png"
                    alt="Member Logo"
                    width={300}
                    height={150}
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.logoBox}>
                  <Image
                    src="/images/Tasmanian-Proud-Partner--Pos-PRIMARY.png"
                    alt="Tasmanian Proud Partner"
                    width={300}
                    height={150}
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.logoBox}>
                  <Image
                    src="/images/uac-proud-member.jpg"
                    alt="Proud Member of the Underwriting Agencies Council"
                    width={300}
                    height={150}
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    </SiteLayout>
  );
}
