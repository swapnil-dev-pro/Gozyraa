import SearchCard from './SearchCard'

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: `url('/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />

      <div
        className="hero-content"
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: '140px 16px 40px',
        }}
      >
        <SearchCard />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-content {
            padding: '180px 16px 40px' !important;
            align-items: flex-start !important;
            padding-top: 180px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content {
            padding-top: 200px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSection