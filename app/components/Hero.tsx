import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="hero-content fade-in-up" style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: '40px',
          width: '100%',
        }}>
          <div style={{ flex: 1 }} className="hero-text">
            <h1 style={{
              fontSize: '54px',
              lineHeight: 1.1,
              marginBottom: '24px',
              color: 'var(--dark)',
            }}>
              <span style={{ color: 'var(--primary)' }}>AI-Powered</span><br />
              Insurance Solutions
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'var(--light-text)',
              marginBottom: '32px',
              maxWidth: '600px',
            }}>
              Transform your brokerage with intelligent, purpose-built tools designed specifically for the insurance industry. Improve compliance, reduce manual work, and deliver a smarter experience for both brokers and clients.
            </p>
          </div>
          <div style={{
            flex: 1,
            maxWidth: '900px',
          }} className="hero-images">
            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              maxWidth: '900px',
              minHeight: '400px',
              borderRadius: '18px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }} className="hero-image card-hover">
              <Image
                src="/images/Broker Systems.jpg"
                alt="Broker Systems Interface"
                width={900}
                height={506}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '18px',
                }}
                priority
              />
            </div>
          </div>
        </div>

        <div className="feature-list" style={{ margin: '30px 0' }}>
          <div className="feature-item" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
          }}>
            <div className="feature-icon" style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#e1eaff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              color: 'var(--primary)',
            }}>✓</div>
            <div>Broker Systems Interface</div>
          </div>
          <div className="feature-item" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
          }}>
            <div className="feature-icon" style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#e1eaff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              color: 'var(--primary)',
            }}>✓</div>
            <div>AI-Driven Intelligence</div>
          </div>
          <div className="feature-item" style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
          }}>
            <div className="feature-icon" style={{
              width: '24px',
              height: '24px',
              backgroundColor: '#e1eaff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              color: 'var(--primary)',
            }}>✓</div>
            <div>Precision Data Extraction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
