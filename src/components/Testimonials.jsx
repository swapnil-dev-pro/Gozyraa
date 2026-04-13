import { useState } from 'react'

const testimonials = [
  {
    quote: 'I Choosed Gozyraa to pick my travel tickets. and So far its been always best.',
    author: 'CEO, Sean Williams',
  },
  {
    quote: 'Gozyraa made our honeymoon trip absolutely seamless. Best travel platform ever!',
    author: 'Travel Blogger, Ayesha Rahman',
  },
  {
    quote: 'Booking flights and hotels together was so easy. Highly recommend Gozyraa to everyone.',
    author: 'Engineer, James Carter',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  const slide = (dir) => {
    setFade(false)
    setTimeout(() => {
      setCurrent(c =>
        dir === 'next'
          ? (c === testimonials.length - 1 ? 0 : c + 1)
          : (c === 0 ? testimonials.length - 1 : c - 1)
      )
      setFade(true)
    }, 200)
  }

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1.5px solid #d1d5db',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    transition: 'all 0.2s',
  }

  return (
    <div style={{
      background: '#F2F2F2',
      padding: '80px 0',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '280px',
    }}>

      {/* Left Arrow — far left */}
      <button
        onClick={() => slide('prev')}
        style={{ ...arrowStyle, left: '40px' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)' }}
      >‹</button>

      {/* Content */}
      <div style={{
        maxWidth: '500px',
        textAlign: 'center',
        padding: '0 40px',
        opacity: fade ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}>

        {/* Big Quote Mark */}
        <div style={{
          fontSize: '64px',
          lineHeight: '0.8',
          color: '#111827',
          marginBottom: '20px',
          fontFamily: 'Georgia, serif',
          fontWeight: '900',
        }}>"</div>

        {/* Quote */}
        <p style={{
          fontSize: '22px',
          fontWeight: '600',
          color: '#111827',
          lineHeight: '1.65',
          margin: '0 0 28px',
          fontFamily: 'Georgia, serif',
        }}>
          {testimonials[current].quote}
        </p>

        {/* Author */}
        <p style={{
          fontSize: '13px',
          color: '#6b7280',
          margin: 0,
          fontWeight: '500',
          letterSpacing: '0.2px',
        }}>
          —{testimonials[current].author}
        </p>

      </div>

      {/* Right Arrow — far right */}
      <button
        onClick={() => slide('next')}
        style={{ ...arrowStyle, right: '40px' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)' }}
      >›</button>

    </div>
  )
}

export default Testimonials