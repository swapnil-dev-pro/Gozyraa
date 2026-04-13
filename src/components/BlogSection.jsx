const BlogSection = () => {
  return (
    <div style={{ padding: '60px 60px', background: '#fff' }}>

      {/* Top Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
            fontSize: '32px',
            fontWeight: '800',
            color: '#111827',
            margin: 0,
            lineHeight: '1.25',
          }}>
            Make Every Journey<br />Unforgettable
          </h2>
        </div>

        {/* Right */}
        <div style={{ maxWidth: '320px', textAlign: 'left' }}>
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
          }}>
            Explore All Destinations
          </button>
        </div>
      </div>

      {/* Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
      }}>

        {/* Card 1 */}
        <div style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '280px',
        }}>
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=800&q=80"
            alt="Expert Tour Guides"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* White Card Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '24px',
            transform: 'translateY(-50%)',
            background: '#fff',
            borderRadius: '16px',
            padding: '24px 20px',
            width: '180px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#111827',
              margin: '0 0 8px',
              lineHeight: '1.3',
            }}>
              Expert<br />Tour Guides
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: '0 0 16px',
            }}>
              Explore with local experts who bring destinations to life.
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

        {/* Card 2 */}
        <div style={{
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '280px',
        }}>
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
            alt="Travel Community"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {/* White Card Overlay */}
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '24px',
            transform: 'translateY(-50%)',
            background: '#fff',
            borderRadius: '16px',
            padding: '24px 20px',
            width: '180px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            textAlign: 'center',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#111827',
              margin: '0 0 8px',
              lineHeight: '1.3',
            }}>
              Travel<br />Community
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: '0 0 16px',
            }}>
              Connect, share, and make lifelong memories with fellow explorers.
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

      </div>
    </div>
  )
}

export default BlogSection