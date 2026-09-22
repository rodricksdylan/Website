import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'InsurAI — AI-Powered Insurance Solutions for Insurance Brokers'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b0f17 0%, #101a30 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 110,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          <span>Insur</span>
          <span style={{ color: '#5b8dff' }}>AI</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 40,
            color: '#c7d2e5',
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          AI-powered insurance solutions built for broker workflows
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 28,
            color: '#5b8dff',
          }}
        >
          insurai.com.au
        </div>
      </div>
    ),
    { ...size }
  )
}
