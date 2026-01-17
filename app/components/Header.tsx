export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--white)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div className="container">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}>
            <span style={{
              fontSize: '24px',
              fontWeight: 800,
              color: 'var(--dark)',
              letterSpacing: '-0.5px',
            }}>Insur</span>
            <div style={{
              color: 'var(--primary)',
              fontWeight: 800,
              fontSize: '24px',
              letterSpacing: '-0.5px',
            }}>AI</div>
          </div>
        </nav>
      </div>
    </header>
  )
}
