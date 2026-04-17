const PartnerBanner = () => {
  return (
    <div style={{
      padding: 'clamp(20px, 4vw, 40px) clamp(16px, 5vw, 60px)',
      background: '#fff',
    }}>
      <a href="/">
        <img
          src="/22.png"
          alt="Grow your business with us"
          style={{
            width: '100%',
            maxWidth: '1200px',
            display: 'block',
            margin: '0 auto',
            borderRadius: 'clamp(12px, 2vw, 24px)',
          }}
        />
      </a>
    </div>
  )
}

export default PartnerBanner