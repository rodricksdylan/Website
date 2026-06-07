import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { SiteLayout } from "./components/SiteLayout";
import ProductShowcase from "./components/ProductShowcase";
import ContactForm from "./components/ContactForm";
import WhySection from "./components/WhySection";
import HeroPixel from "./components/HeroPixel";

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
        <HeroPixel />

        {/* Tagline band */}
        <section className={styles.taglineBand}>
          <div className={styles.container}>
            <h2 className={styles.tagline}>
              InsurAI is an orchestration platform{" "}
              <span className={styles.dim}>designed to help you run a smarter brokerage</span>
            </h2>
          </div>
        </section>

        {/* Value columns */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.valueGrid}>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Insurance-tuned intelligence</h3>
                <p className={styles.muted}>
                  Models trained specifically for broker workflows&mdash;from policy insights to consent auditing.
                </p>
              </div>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Human in the loop</h3>
                <p className={styles.muted}>
                  You stay in control. Nothing happens without your approval.
                </p>
              </div>
              <div className={styles.valueCol}>
                <h3 className={styles.h3}>Built for broker workflows</h3>
                <p className={styles.muted}>
                  Fits how brokers already work&mdash;no portal hopping, no busywork.
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
