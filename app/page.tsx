import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { SiteLayout } from "./components/SiteLayout";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";
import WhySection from "./components/WhySection";
import HeroSphere from "./components/HeroSphere";
import IconButton from "./components/IconButton";
import WorkflowCarousel from "./components/WorkflowCarousel";

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
              <p className={styles.muted}>Conversational AI policy intelligence, purpose-built for brokers.</p>
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

            <WorkflowCarousel />
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

            <div className={styles.grid3}>
              {[
                ["Insurance domain logic", "Purpose-built rules for how broking actually works."],
                ["Structured workflow rules", "Each request follows the right steps, in the right order."],
                ["Retrieval from trusted sources", "Answers grounded in policy wordings and insurer material."],
                ["AI reasoning", "Works out the best next step, not just a reply."],
                ["Human review where needed", "Flags items for a broker to confirm before acting."],
                ["Action-ready outputs", "Quote info, renewal notes, and summaries ready to use."],
              ].map(([t, d]) => (
                <div className={styles.card} key={t}>
                  <h3 className={styles.h3}>{t}</h3>
                  <p className={styles.muted}>{d}</p>
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
