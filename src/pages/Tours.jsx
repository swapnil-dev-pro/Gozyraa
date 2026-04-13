import Navbar from "../components/Navbar"
import PartnerBanner from '../components/PartnerBanner'
import Footer from '../components/Footer'

const tours = [
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80",
  },
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80",
  },
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80",
  },
  {
    title: "By Air 05 Days Dhaka Private Tour With Air Tickets",
    duration: "5 Days & 4 Nights",
    price: "Rs 197,000",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=600&q=80",
  },
]

const Tours = () => {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Navbar */}
       <div style={{ marginTop:"130px"  }}>
          <Navbar dark={true} />
        </div>

      {/* Content */}
      <div style={{ padding: "40px 60px", maxWidth: "1200px", margin: "0 auto" }}>

        {/* Title */}
        <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>
          Tours
        </h1>
        <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 32px" }}>
          Book a ticket for the ongoing tour.
        </p>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}>
          {tours.map((tour, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)"
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)"
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)"
              }}
            >
              {/* Image */}
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={tour.image}
                  alt={tour.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "14px 16px" }}>
                <h3 style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: "0 0 10px",
                  lineHeight: "1.5",
                }}>
                  {tour.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>{tour.duration}</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>{tour.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PartnerBanner />
      <Footer />
    </div>
  )
}

export default Tours