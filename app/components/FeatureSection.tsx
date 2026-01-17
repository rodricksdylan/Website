interface FeatureItemProps {
  title: string
  description: string
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '20px',
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        backgroundColor: '#e1eaff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '15px',
        color: 'var(--primary)',
        flexShrink: 0,
        marginTop: '2px',
      }}>✓</div>
      <div>
        <strong style={{ color: 'var(--dark)', display: 'block', marginBottom: '4px' }}>{title}</strong>
        <span style={{ color: 'var(--light-text)' }}>{description}</span>
      </div>
    </div>
  )
}

interface FeatureSectionProps {
  title: string
  features: FeatureItemProps[]
  backgroundColor?: string
}

export default function FeatureSection({ title, features, backgroundColor = 'var(--white)' }: FeatureSectionProps) {
  return (
    <section style={{
      padding: '80px 0',
      backgroundColor,
    }}>
      <div className="container">
        <h2 style={{
          fontSize: '42px',
          color: 'var(--dark)',
          marginBottom: '40px',
          textAlign: 'center',
        }}>{title}</h2>
        <div style={{ marginTop: '40px' }}>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
