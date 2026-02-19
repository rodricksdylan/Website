import Image from "next/image";
import styles from "./page.module.css";
import { SiteLayout } from "./components/SiteLayout";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";
import WhySection from "./components/WhySection";

export default function HomePage() {
  return (
    <SiteLayout currentPage="home">
      <>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <div className={styles.pill}>Built for insurance brokers</div>
                <h1 className={styles.h1}>AI-powered insurance workflows—without the portal hopping.</h1>
                <p className={styles.lead}>
                  Transform your brokerage with intelligent, purpose-built tools for insurance.
                  Improve compliance, reduce manual work, and deliver a smoother client experience.
                </p>

                <div className={styles.heroCta}>
                  <a className={`${styles.btn} ${styles.btnPrimary}`} href="#contact">
                    Book a demo
                  </a>
                  <a className={`${styles.btn} ${styles.btnGhost}`} href="#products">
                    Explore products
                  </a>
                </div>

                <ul className={styles.ticks}>
                  <li>Broker systems interface</li>
                  <li>Insurance-tuned AI intelligence</li>
                  <li>Precision document & data extraction</li>
                </ul>
              </div>

              {/* Hero visual */}
              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.heroGeometricBg}>
                  <div className={styles.heroShape1}></div>
                  <div className={styles.heroShape2}></div>
                  <div className={styles.heroShape3}></div>
                  <div className={styles.heroShape4}></div>
                </div>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/images/Broker Systems.jpg"
                    alt="Broker Systems Interface"
                    width={1600}
                    height={900}
                    className={styles.heroImage}
                    priority
                  />
                </div>
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
              <p className={styles.muted}>Start with compliance automation today. Add AI policy intelligence next.</p>
            </div>
          </div>
        </section>

        {/* Product Showcases */}
        <ProductShowcase
          title="ConsentAI"
          description="Your complete consent-compliance platform: automated requests, real-time tracking, clear audit trails, and broker-friendly workflows. Transform how you manage consent requests with intelligent automation."
          imageSrc="/images/consent ai dashboard.png"
          imageAlt="ConsentAI Dashboard Interface"
          primaryCta={{ label: "Open ConsentAI", href: "https://www.consentai.com.au/", external: true }}
          secondaryCta={{ label: "Request pricing", href: "https://www.consentai.com.au/pricing", external: true }}
          titleColorCombo="consentai"
          chatImageSrc="/images/consentai-chat.png"
          chatImageAlt="ConsentAI Chat Interface"
          chatDescription="Use the AI chat assistant to quickly get answers about consent requests, compliance requirements, and workflow guidance. Simply ask questions in natural language and receive instant, accurate information to help you manage consent requests more efficiently."
        />

        <ProductShowcase
          title="PolicyAI"
          description="A conversational assistant that helps brokers extract and work with policy information instantly—fewer tabs, faster answers, better advice. Ask questions across long policy documents and get instant insights."
          imageSrc="/images/policyai dashboard.png"
          imageAlt="PolicyAI Interface"
          reverse={true}
          primaryCta={{ label: "Open PolicyAI", href: "https://www.policyai.com.au", external: true }}
          secondaryCta={{ label: "See how it works", href: "https://www.policyai.com.au/features", external: true }}
          titleColorCombo="policyai"
        />

        <ProductShowcase
          title="JordanAI"
          description="An AI front-desk assistant that captures quote-ready information, answers policy questions instantly, and guides claims. Easily integrated into your website and workflow to reduce admin, eliminate document searching, and improve broker efficiency."
          imageSrc="/images/insurance broker website.png"
          imageAlt="JordanAI Insurance Broker Website"
          primaryCta={{ label: "Open JordanAI", href: "https://jordan-ai-ruddy.vercel.app/", external: true }}
          secondaryCta={{ label: "Request pricing", href: "https://jordan-ai-ruddy.vercel.app/#demo", external: true }}
          titleColorCombo="jordanai"
        />

        {/* Why */}
        <WhySection />

        {/* How */}
        <section className={styles.section} id="how">
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.h2}>How It Works</h2>
            </div>

            <div className={styles.steps}>
              {[
                ["Insurance-Tuned Language Models", "Our models are trained and optimised specifically for insurance workflows, enabling accurate responses—from policy insights to consent auditing."],
                ["Interactive Chat Interfaces", "Navigate your workflows using a conversational assistant that understands and executes your requests. From managing consents today to retrieving policy insights tomorrow, everything is at your fingertips."],
              ].map(([t, d], i) => (
                <div className={styles.step} key={t}>
                  <div className={styles.stepNum}>{i + 1}</div>
                  <div>
                    <h3 className={styles.h3}>{t}</h3>
                    <p className={styles.muted}>{d}</p>
                  </div>
                </div>
              ))}
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
              </div>
            </div>
          </div>
        </section>

      </>
    </SiteLayout>
  );
}
