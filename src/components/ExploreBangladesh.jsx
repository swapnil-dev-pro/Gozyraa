const places = [
  {
    name: "Cox's Bazar",
    image:
      "https://thumbs.dreamstime.com/b/cox-s-bazar-k-ks-z-b-bengali-romanized-ksbajar-pronounced-ksbad-city-fishing-port-tourism-centre-district-headquarters-313661021.jpg",
    big: false,
  },
  {
    name: "Saint Martin",
    image:
      "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/st_martins_island.webp",
    big: true,
  },
  {
    name: "Srimangal",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcBLPUI0QAA17qrriEjH7XVkPQQ0gASehPQ&s",
    big: false,
  },
  {
    name: "Bandarban",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/77/22/14/amiakhum.jpg?w=1200&h=700&s=1",
    big: false,
  },
  {
    name: "Rangamati",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Rangamati1.jpg",
    big: true,
  },
  {
    name: "Inani Beach",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAld3-nOgM_MGbv3sGaYvnvJeyC5I1lEvLoQ&s",
    big: false,
  },
];

const ExploreBangladesh = () => {
  return (
    <div style={{ padding: "60px 80px", background: "#fff" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#111827",
            margin: "0 0 12px",
          }}
        >
          Explore Bangladesh
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            margin: 0,
            lineHeight: "1.7",
          }}
        >
          Find unique stays for every journey—cozy, stylish, and unforgettable.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: "12px",
          maxWidth: "780px",
          margin: "0 auto",
        }}
      >
        {places.map((place, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              cursor: "pointer",
              height: place.big ? "300px" : "240px",
              gridRow: place.big ? "span 1" : "span 1",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector("img").style.transform =
                "scale(1.06)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector("img").style.transform =
                "scale(1)")
            }
          >
            {/* Image */}
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

            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)",
              }}
            />

            {/* Name */}
            <span
              style={{
                position: "absolute",
                bottom: "14px",
                left: "16px",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              {place.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreBangladesh;
