import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'InsurAI — We’ll be right back',
  description: 'InsurAI is briefly offline while we roll out new features. We’ll be back shortly.',
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(1200px 600px at 50% -10%, #16203a 0%, #0b0f17 60%)',
        color: '#ffffff',
        padding: '32px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 640, width: '100%' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '6px 14px',
            border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 999,
            fontSize: 13,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#5b8dff',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#5b8dff',
              boxShadow: '0 0 0 4px rgba(91,141,255,0.18)',
            }}
          />
          Scheduled update
        </div>

        <h1
          style={{
            fontSize: 'clamp(32px, 6vw, 52px)',
            lineHeight: 1.1,
            fontWeight: 800,
            margin: '0 0 18px',
            letterSpacing: '-0.02em',
          }}
        >
          We’re rolling out new features
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 2.4vw, 19px)',
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.72)',
            margin: '0 auto 36px',
            maxWidth: 520,
          }}
        >
          InsurAI is briefly offline while we update the platform with
          improvements built for your brokerage. We’ll be back online shortly —
          thank you for your patience.
        </p>

        <a
          href="mailto:rodricksdylan@gmail.com"
          style={{
            display: 'inline-block',
            padding: '13px 26px',
            background: '#2366f0',
            color: '#ffffff',
            fontWeight: 600,
            fontSize: 15,
            textDecoration: 'none',
            border: '1px solid #2366f0',
          }}
        >
          Contact us
        </a>

        <p
          style={{
            marginTop: 40,
            fontSize: 13,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          InsurAI
        </p>
      </div>
    </main>
  )
}
