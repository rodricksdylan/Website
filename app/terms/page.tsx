import { SiteLayout } from "../components/SiteLayout";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Service | InsurAI",
  description: "InsurAI Pty Ltd terms of service.",
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <div className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Entity: InsurAI Pty Ltd (ACN: 694 113 445)</p>

          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using InsurAI&rsquo;s products and services (including PolicyAI, ConsentAI, JordanAI, and related platforms), you agree to these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Nature of Services</h2>
            <p>InsurAI Pty Ltd provides:</p>
            <ul>
              <li>AI-powered software tools</li>
              <li>Document analysis and automation</li>
              <li>Workflow orchestration and integrations</li>
            </ul>
            <p><strong>InsurAI is a technology provider, not an insurer.</strong></p>
          </section>

          <section className={styles.section}>
            <h2>3. No Personal Advice</h2>
            <div className={styles.notice}>
              <strong>Important:</strong>
              <ul>
                <li>InsurAI does not provide personal financial or insurance advice</li>
                <li>Outputs are general information only</li>
                <li>Users must seek advice from a licensed insurance professional before acting</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use the platform lawfully</li>
              <li>Not misuse, interfere with, or reverse engineer the system</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. AI Limitations</h2>
            <p>You acknowledge:</p>
            <ul>
              <li>AI outputs may be incomplete, outdated, or incorrect</li>
              <li>Results depend on the data provided</li>
              <li>InsurAI does not guarantee accuracy</li>
            </ul>
            <p><strong>Users must independently verify outputs.</strong></p>
          </section>

          <section className={styles.section}>
            <h2>6. Broker &amp; Regulatory Responsibilities</h2>
            <p>Where used by brokers:</p>
            <ul>
              <li>Brokers remain responsible for advice and recommendations</li>
              <li>Brokers remain responsible for compliance with AFSL obligations</li>
              <li>InsurAI provides tools only and does not replace professional judgment</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Intellectual Property</h2>
            <ul>
              <li>All software, systems, and models remain the property of InsurAI Pty Ltd</li>
              <li>Users retain ownership of their data</li>
              <li>Users grant InsurAI a licence to process data for service delivery</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Third-Party Integrations</h2>
            <p>InsurAI may integrate with third-party systems (e.g., insurer platforms, broker systems).</p>
            <p>We are not responsible for:</p>
            <ul>
              <li>Third-party system failures</li>
              <li>Data accuracy from external sources</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Fees &amp; Payments</h2>
            <ul>
              <li>Fees may apply for usage or subscriptions</li>
              <li>Pricing may change with notice</li>
              <li>Non-payment may result in suspension</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Limitation of Liability</h2>
            <p>To the extent permitted by law, InsurAI is not liable for:</p>
            <ul>
              <li>Decisions made based on AI outputs</li>
              <li>Business or financial losses</li>
            </ul>
            <p>Liability is limited to fees paid (if any).</p>
          </section>

          <section className={styles.section}>
            <h2>11. Indemnity</h2>
            <p>You agree to indemnify InsurAI Pty Ltd against claims arising from:</p>
            <ul>
              <li>Misuse of the platform</li>
              <li>Breach of laws or regulations</li>
              <li>Reliance on outputs without verification</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>12. Termination</h2>
            <p>We may suspend or terminate access if:</p>
            <ul>
              <li>Terms are breached</li>
              <li>Misuse or security risks are identified</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>13. Governing Law</h2>
            <p>These Terms are governed by the laws of Tasmania, Australia.</p>
          </section>

          <section className={styles.section}>
            <h2>14. Updates</h2>
            <p>We may update these Terms from time to time. Continued use constitutes acceptance.</p>
          </section>

          <section className={styles.section}>
            <h2>15. Contact</h2>
            <p><a href="mailto:contact@insurai.com.au">contact@insurai.com.au</a></p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
