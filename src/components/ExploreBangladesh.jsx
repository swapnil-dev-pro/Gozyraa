const places = [
  {
    name: "Cox's Bazar",
    image: "https://thumbs.dreamstime.com/b/cox-s-bazar-k-ks-z-b-bengali-romanized-ksbajar-pronounced-ksbad-city-fishing-port-tourism-centre-district-headquarters-313661021.jpg",
    big: false,
  },
  {
    name: "Saint Martin",
    image: "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/st_martins_island.webp",
    big: true,
  },
  {
    name: "Srimangal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcBLPUI0QAA17qrriEjH7XVkPQQ0gASehPQ&s",
    big: false,
  },
  {
    name: "Bandarban",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/77/22/14/amiakhum.jpg?w=1200&h=700&s=1",
    big: false,
  },
  {
    name: "Rangamati",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Rangamati1.jpg",
    big: true,
  },
  {
    name: "Inani Beach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAld3-nOgM_MGbv3sGaYvnvJeyC5I1lEvLoQ&s",
    big: false,
  },
]

const ExploreBangladesh = () => {
  return (
    <>
      <style>{`
        .explore-section {
          padding: 60px 80px;
          background: #fff;
        }
        .explore-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 780px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .explore-section {
            padding: 40px 24px !important;
          }
          .explore-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            max-width: 100% !important;
          }
          .explore-card {
            height: 180px !important;
          }
        }

        @media (max-width: 480px) {
          .explore-section {
            padding: 32px 16px !important;
          }
          .explore-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .explore-card {
            height: 200px !important;
          }
        }
      `}</style>

      <div className="explore-section">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", margin: "0 0 12px" }}>
            Explore Bangladesh
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: "1.7" }}>
            Find unique stays for every journey—cozy, stylish, and unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="explore-grid">
          {places.map((place, i) => (
            <div
              key={i}
              className="explore-card"
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
                height: place.big ? "300px" : "240px",
              }}
              onMouseEnter={e => e.currentTarget.querySelector("img").style.transform = "scale(1.06)"}
              onMouseLeave={e => e.currentTarget.querySelector("img").style.transform = "scale(1)"}
            >
              <img
                src={place.image}
                alt={place.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
              }} />
              <span style={{
                position: "absolute",
                bottom: "14px",
                left: "16px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
              }}>
                {place.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExploreBangladesh