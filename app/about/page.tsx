import Image from "next/image";
import { SiteLayout } from "../components/SiteLayout";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <SiteLayout currentPage="about">
      <div className={styles.aboutPage}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>
            Meet the <span className={styles.titleAccent}>Team</span>
          </h1>
          <p className={styles.pageSubtitle}>
            InsurAI was founded by professionals with deep experience across
            insurance, finance, healthcare, and AI—united by a mission to
            modernise how the industry works.
          </p>

          <div className={styles.foundersGrid}>
            {/* Dylan Rodricks */}
            <div className={styles.founderCard}>
              <Image
                src="/images/dylan-rodricks.jpg"
                alt="Dylan Rodricks"
                width={180}
                height={180}
                className={styles.founderPhoto}
              />
              <div className={styles.founderName}>Dylan Rodricks, CPA</div>
              <div className={styles.founderTitle}>Co-Founder | InsurAI</div>
              <div className={styles.founderBio}>
                <p>
                  Dylan combines deep industry experience across insurance and
                  accounting with hands-on product building to drive InsurAI's
                  vision. As a CPA, he brings strong expertise in financial
                  systems, compliance, and structured decision-making.
                </p>
                <p>
                  His background spans insurance broking and reinsurance, where
                  he worked closely with brokers, insurers, and clients—giving
                  him firsthand insight into the operational challenges across
                  quoting, renewals, and client servicing.
                </p>
                <p>
                  Dylan founded InsurAI and personally leads the design and
                  development of its core systems, translating real-world broker
                  workflows into intelligent, AI-driven solutions.
                </p>
                <p>
                  At InsurAI, he drives product strategy and business
                  development—building AI that works alongside existing systems
                  to reduce friction, improve compliance, and help professionals
                  get work done.
                </p>
              </div>
            </div>

            {/* Dr Sohm Shivkumar */}
            <div className={styles.founderCard}>
              <Image
                src="/images/sohm-shivkumar.jpg"
                alt="Dr Sohm Shivkumar"
                width={180}
                height={180}
                className={styles.founderPhoto}
              />
              <div className={styles.founderName}>Dr Sohm Shivkumar</div>
              <div className={styles.founderTitle}>Co-Founder | InsurAI</div>
              <div className={styles.founderBio}>
                <p>
                  Sohm brings over a decade of experience across healthcare,
                  automation, and AI operations. A trained physician, he has
                  worked in complex, high-stakes environments where accuracy,
                  compliance, and decision-making are critical.
                </p>
                <p>
                  He has led digital transformation initiatives in healthcare and
                  built AI-driven teams supporting large-scale data and machine
                  learning systems.
                </p>
                <p>
                  At InsurAI, Sohm focuses on scaling AI workflows and ensuring
                  automation aligns seamlessly with real-world business
                  processes—delivering solutions that are practical, reliable,
                  and built for industry use.
                </p>
                <p>
                  Through his work at Sofscript and PipeRx, he has built and
                  managed teams delivering workflow automation, data processing,
                  and quality assurance at scale—bringing a strong operational
                  focus to how systems are designed and implemented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
