import Image from 'next/image'

export default function Contact() {
  return (
    <>
      {/* Our Partners Section */}
      <section style={{
        background: 'var(--white)',
        padding: '60px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            color: 'var(--primary)',
            marginBottom: '40px',
            fontSize: '42px',
          }}>Our Partners</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
            <div style={{ maxWidth: '300px' }}>
              <Image
                src="/images/MEMBER_rectangle.png"
                alt="Member Logo"
                width={300}
                height={150}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div style={{ maxWidth: '300px' }}>
              <Image
                src="/images/Tasmanian-Proud-Partner--Pos-PRIMARY.png"
                alt="Tasmanian Proud Partner"
                width={300}
                height={150}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{
        background: 'var(--white)',
        padding: '60px 0',
        borderTop: '1px solid #e1eaff',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{
            color: 'var(--primary)',
            marginBottom: '16px',
            fontSize: '42px',
          }}>Contact Us</h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--light-text)',
            marginBottom: '12px',
          }}>Have questions or want to get in touch?</p>
          <a href="mailto:contact@insurai.com.au" style={{
            fontSize: '20px',
            color: 'var(--primary)',
            textDecoration: 'underline',
            fontWeight: 600,
            marginBottom: '12px',
            display: 'inline-block',
          }}>contact@insurai.com.au</a>
          <p style={{
            fontSize: '18px',
            color: 'var(--light-text)',
            marginBottom: '20px',
          }}>Based in Hobart, Tasmania</p>
          <div style={{ marginTop: '20px' }}>
            <a href="https://www.linkedin.com/company/insur-ai" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '18px',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary)' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--dark)',
        color: 'var(--white)',
        padding: '20px 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: '14px' }}>InsurAI 2025 ©. All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
