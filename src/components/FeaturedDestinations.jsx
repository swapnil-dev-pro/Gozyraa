const destinations = [
  {
    name: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80',
  },
  {
    name: 'Prague',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80',
  },
  {
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
  },
  {
    name: 'Manama',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=600&q=80',
  },
]

const FeaturedDestinations = () => {
  return (
    <>
      <style>{`
        .featured-section {
          padding: 48px 60px;
          background: #fff;
        }
        .featured-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .featured-section {
            padding: 40px 40px !important;
          }
        }
        @media (max-width: 600px) {
          .featured-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .featured-section {
            padding: 32px 20px !important;
          }
        }
      `}</style>

      <div className="featured-section">

        {/* Section Title */}
        <h2 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '20px',
          paddingBottom: '12px',
          display: 'inline-block',
        }}>
          Featured Destination
        </h2>

        {/* Cards Grid */}
        <div className="featured-grid">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                aspectRatio: '4/3',
              }}
              onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
            >
              <img
                src={dest.image}
                alt={dest.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)',
              }} />
              <span style={{
                position: 'absolute',
                bottom: '14px',
                left: '16px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '0.3px',
              }}>
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FeaturedDestinations