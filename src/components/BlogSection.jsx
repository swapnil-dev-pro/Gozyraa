import { useState, useEffect } from 'react'

const BlogSection = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const cards = [
    {
      src: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=800&q=80',
      alt: 'Expert Tour Guides',
      title: 'Expert\nTour Guides',
      desc: 'Explore with local experts who bring destinations to life.',
    },
    {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
      alt: 'Travel Community',
      title: 'Travel\nCommunity',
      desc: 'Connect, share, and make lifelong memories with fellow explorers.',
    },
  ]

  return (
    <div style={{ padding: isMobile ? '40px 20px' : '60px 60px', background: '#fff' }}>

      {/* Top Row */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'flex-start',
        gap: isMobile ? '24px' : '0',
        marginBottom: '40px',
      }}>

        {/* Left */}
        <div>
          <span style={{
            display: 'inline-block',
            border: '1.5px solid #d1d5db',
            borderRadius: '999px',
            padding: '4px 16px',
            fontSize: '13px',
            color: '#374151',
            marginBottom: '16px',
          }}>Blog</span>

          <h2 style={{
            fontSize: isMobile ? '26px' : '32px',
            fontWeight: '800',
            color: '#111827',
            margin: 0,
            lineHeight: '1.25',
          }}>
            Make Every Journey<br />Unforgettable
          </h2>
        </div>

        {/* Right */}
        <div style={{ maxWidth: isMobile ? '100%' : '320px', textAlign: 'left' }}>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.7',
            margin: '0 0 20px',
          }}>
            Travel isn't just about places—it's about the people,
            stories, and experiences that shape every adventure.
          </p>
          <button style={{
            background: '#f5a623',
            color: '#fff',
            border: 'none',
            borderRadius: '999px',
            padding: '12px 28px',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            width: isMobile ? '100%' : 'auto',
          }}>
            Explore All Destinations
          </button>
        </div>
      </div>

      {/* Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '20px',
      }}>
        {cards.map((card) => (
          <div key={card.alt} style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: isMobile ? '240px' : '280px',
          }}>
            <img
              src={card.src}
              alt={card.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              right: '24px',
              transform: 'translateY(-50%)',
              background: '#fff',
              borderRadius: '16px',
              padding: isMobile ? '16px 14px' : '24px 20px',
              width: isMobile ? '150px' : '180px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '700',
                color: '#111827',
                margin: '0 0 8px',
                lineHeight: '1.3',
                whiteSpace: 'pre-line',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '12px',
                color: '#6b7280',
                lineHeight: '1.6',
                margin: '0 0 16px',
              }}>
                {card.desc}
              </p>
              <button style={{
                background: 'transparent',
                border: 'none',
                fontSize: '13px',
                fontWeight: '600',
                color: '#111827',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                margin: '0 auto',
              }}>
                Learn More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection