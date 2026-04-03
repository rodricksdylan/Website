import { SiteLayout } from "../components/SiteLayout";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy | InsurAI",
  description: "InsurAI Pty Ltd privacy policy.",
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <div className={styles.legalPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Entity: InsurAI Pty Ltd (ACN: 694 113 445)</p>

          <section className={styles.section}>
            <h2>1. Overview</h2>
            <p>
              InsurAI Pty Ltd (&ldquo;InsurAI&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) provides AI-powered software and services for insurance workflows, including:
            </p>
            <ul>
              <li><strong>PolicyAI</strong> &ndash; document intelligence and Q&amp;A</li>
              <li><strong>ConsentAI</strong> &ndash; consent and disclosure capture</li>
              <li><strong>JordanAI</strong> &ndash; conversational intake and assistance</li>
              <li>Platform tools (including policy management systems, workflow engines, and integrations)</li>
              <li>Any current or future products developed by InsurAI</li>
            </ul>
            <p>
              We are committed to protecting personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. What Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name, email address, phone number</li>
              <li>Address and business details</li>
              <li>Insurance-related information (e.g., policy details, risk information)</li>
            </ul>
            <h3>Sensitive Information (where applicable)</h3>
            <ul>
              <li>Financial or insurance disclosures</li>
              <li>Claims-related information</li>
            </ul>
            <h3>Technical &amp; Usage Data</h3>
            <ul>
              <li>IP address, browser type, device information</li>
              <li>Chat interactions with AI systems</li>
              <li>Uploaded documents (e.g., PDS, policy schedules)</li>
              <li>API and system logs</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Collect Information</h2>
            <p>We collect information when you:</p>
            <ul>
              <li>Use our website or applications</li>
              <li>Interact with AI systems (e.g., PolicyAI, JordanAI)</li>
              <li>Upload documents or data</li>
              <li>Integrate with third-party systems</li>
              <li>Communicate with us</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. How We Use Your Information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Deliver and improve our services</li>
              <li>Process insurance-related workflows</li>
              <li>Generate AI-driven outputs</li>
              <li>Maintain compliance records (e.g., consent logs via ConsentAI)</li>
              <li>Ensure security, performance, and system integrity</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. AI &amp; Automated Processing</h2>
            <p>InsurAI uses artificial intelligence to:</p>
            <ul>
              <li>Analyse user inputs and documents</li>
              <li>Extract structured information</li>
              <li>Generate responses and workflow actions</li>
            </ul>
            <div className={styles.notice}>
              <strong>Important:</strong>
              <ul>
                <li>AI outputs are informational and assistive only</li>
                <li>Outputs may require review by a licensed broker or adviser</li>
                <li>InsurAI does not make binding insurance decisions</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2>6. Disclosure of Information</h2>
            <p>We may disclose information to:</p>
            <ul>
              <li>Insurance brokers, insurers, and underwriting partners</li>
              <li>Technology providers (hosting, analytics, APIs)</li>
              <li>Regulatory authorities where required</li>
              <li>Integration partners (e.g., broker management systems)</li>
            </ul>
            <p><strong>We do not sell personal information.</strong></p>
          </section>

          <section className={styles.section}>
            <h2>7. Data Storage &amp; Security</h2>
            <ul>
              <li>Data is stored on secure cloud infrastructure</li>
              <li>Encryption is used in transit and at rest</li>
              <li>Access is restricted to authorised personnel</li>
            </ul>
            <p>Where possible, data is stored in Australia. Some services may involve overseas processing.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Data Retention</h2>
            <p>We retain information only as long as necessary for:</p>
            <ul>
              <li>Service delivery</li>
              <li>Compliance and regulatory obligations</li>
              <li>Audit trails (especially for consent and transaction records)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>9. Access &amp; Correction</h2>
            <p>You may:</p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request corrections if inaccurate</li>
            </ul>
            <p>Contact us at <a href="mailto:contact@insurai.com.au">contact@insurai.com.au</a></p>
          </section>

          <section className={styles.section}>
            <h2>10. Cookies &amp; Analytics</h2>
            <p>We use cookies and analytics tools to:</p>
            <ul>
              <li>Improve system performance</li>
              <li>Understand user behaviour</li>
            </ul>
            <p>You can manage cookies via your browser settings.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Updates will be published on our website.</p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact</h2>
            <p><a href="mailto:contact@insurai.com.au">contact@insurai.com.au</a></p>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}
