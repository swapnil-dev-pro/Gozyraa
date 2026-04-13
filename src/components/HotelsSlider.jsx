import { useState, useRef, useEffect } from "react";

const hotels = [
  {
    name: "Ocean View Villa",
    location: "Maldives, South Asia",
    price: 410,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
  },
  {
    name: "Urban Brick Loft",
    location: "Amsterdam, Netherlands",
    price: 410,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    name: "Hillside Retreat",
    location: "Ubud, Bali, Indonesia",
    price: 410,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    name: "Desert Hideaway",
    location: "Sedona, Arizona, USA",
    price: 410,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
  },
  {
    name: "Alpine Chalet",
    location: "Zermatt, Switzerland",
    price: 520,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
  },
  {
    name: "Kyoto Ryokan",
    location: "Kyoto, Japan",
    price: 380,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80",
  },
];

const HotelsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState({});
  const [visible, setVisible] = useState(4);
  const containerRef = useRef(null);

  // Screen size অনুযায়ী visible card count
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 480) setVisible(1);
      else if (w < 768) setVisible(2);
      else if (w < 1024) setVisible(3);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, hotels.length - visible);

  // visible বদলালে current reset
  useEffect(() => {
    setCurrent((c) => Math.min(c, maxIndex));
  }, [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));
  const toggleLike = (i) => setLiked((p) => ({ ...p, [i]: !p[i] }));

  const getMarginTop = (i) => (i % 2 === 0 ? "0px" : "50px");
  const cardWidthPercent = 100 / visible;
  const offsetPercent = cardWidthPercent / 2;

  return (
    <>
      <style>{`
        .hotels-section {
          padding: 60px 0;
          background: #fff;
          overflow: hidden;
        }
        .hotels-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 16px;
        }
        .slider-outer {
          width: 100%;
          overflow: hidden;
          padding-bottom: 80px;
        }
        .slider-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        .nav-btns {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: -20px;
        }
        .nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid #e5e7eb;
          background: #fff;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.2s;
        }
        .nav-btn:not(:disabled) {
          cursor: pointer;
          color: #374151;
        }
        .nav-btn:not(:disabled):hover {
          border-color: #9ca3af;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .nav-btn:disabled {
          cursor: not-allowed;
          color: #d1d5db;
        }
        @media (max-width: 768px) {
          .hotels-section {
            padding: 40px 0 !important;
          }
        }
      `}</style>

      <div className="hotels-section">

        {/* Header */}
        <div className="hotels-header">
          <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#111827", marginBottom: "12px" }}>
            BEST HOTELS FOR YOUR NEXT TRIP
          </h2>
          <p style={{ fontSize: "14px", color: "#6b7280", maxWidth: "420px", margin: "0 auto", lineHeight: "1.6" }}>
            From serene beachside cottages to luxurious city apartments, discover stays that match your travel style.
          </p>
        </div>

        {/* Slider */}
        <div className="slider-outer" ref={containerRef}>
          <div
            className="slider-track"
            style={{
              transform: `translateX(calc(-${current} * ${cardWidthPercent}%))`,
              gap: '16px',
              padding: '10px 0',
            }}
          >
            {hotels.map((hotel, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: `calc(${cardWidthPercent}% - 14px)`,
                  height: "360px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  marginTop: getMarginTop(i),
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  transition: "margin-top 0.4s ease",
                }}
              >
                {/* Image */}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                {/* Gradient */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
                }} />

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(i)}
                  style={{
                    position: "absolute", top: "12px", right: "12px",
                    width: "32px", height: "32px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)", border: "none",
                    cursor: "pointer", fontSize: "15px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {liked[i] ? "❤️" : "🤍"}
                </button>

                {/* Price */}
                <div style={{
                  position: "absolute", bottom: "56px", left: "12px",
                  background: "rgba(0,0,0,0.55)", color: "#fff",
                  fontSize: "12px", fontWeight: "600",
                  padding: "4px 10px", borderRadius: "999px",
                }}>
                  ${hotel.price} night
                </div>

                {/* Info */}
                <div style={{
                  position: "absolute", bottom: "12px", left: "12px", right: "12px",
                  display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                }}>
                  <div>
                    <p style={{ color: "#fff", fontSize: "14px", fontWeight: "700", margin: "0 0 3px" }}>
                      {hotel.name}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px", margin: 0 }}>
                      📍 {hotel.location}
                    </p>
                  </div>
                  <span style={{ color: "#fff", fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>
                    ☆ {hotel.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="nav-btns">
          <button className="nav-btn" onClick={prev} disabled={current === 0}>‹</button>
          <button className="nav-btn" onClick={next} disabled={current === maxIndex}>›</button>
        </div>

      </div>
    </>
  );
};

export default HotelsSlider;