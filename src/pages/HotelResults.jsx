import { useState } from "react";
import Navbar from "../components/Navbar";
import PartnerBanner from "../components/PartnerBanner";
import Footer from "../components/Footer";

const hotels = [
  {
    name: "Dhaka Guest House",
    address: "73650 West Ways Dhaka Street",
    price: 9987,
    rating: 4.0,
    reviews: 300,
    amenities: ["WIFI", "Free Parking", "Free Breakfast", "Metro"],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
  },
  {
    name: "Dhaka Guest House",
    address: "73650 West Ways Dhaka Street",
    price: 9987,
    rating: 4.0,
    reviews: 300,
    amenities: ["WIFI", "Free Parking", "Free Breakfast", "Metro"],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
  {
    name: "Dhaka Guest House",
    address: "73650 West Ways Dhaka Street",
    price: 9987,
    rating: 4.0,
    reviews: 300,
    amenities: ["WIFI", "Free Parking", "Free Breakfast", "Metro"],
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80",
  },
  {
    name: "Dhaka Guest House",
    address: "73650 West Ways Dhaka Street",
    price: 9987,
    rating: 4.0,
    reviews: 300,
    amenities: ["WIFI", "Free Parking", "Free Breakfast", "Metro"],
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
  },
];

const HotelSidebar = ({
  activeFilters,
  clearAll,
  removeFilter,
  rooms,
  setRooms,
  rating,
  setRating,
  priceRange,
  setPriceRange,
}) => (
  <div>
    {/* Active Filters */}
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "700", color: "#111827" }}>
          Active Filters
        </span>
        <button
          onClick={clearAll}
          style={{
            background: "#1e1b4b",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Clear All
        </button>
      </div>
      {activeFilters.map((f) => (
        <div
          key={f}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <span style={{ fontSize: "13px", color: "#374151" }}>{f}</span>
          <button
            onClick={() => removeFilter(f)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#9ca3af",
              fontSize: "16px",
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>

    {/* Rooms */}
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#111827",
          margin: "0 0 12px",
        }}
      >
        Rooms
      </p>
      {[0, 1, 2].map((r) => (
        <div
          key={r}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="rooms"
              checked={rooms === r}
              onChange={() => setRooms(r)}
              style={{ accentColor: "#f5a623", width: "16px", height: "16px" }}
            />
            <span style={{ fontSize: "13px", color: "#374151" }}>{r}</span>
          </label>
          <span
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              background: "#f3f4f6",
              borderRadius: "999px",
              padding: "2px 8px",
            }}
          >
            04
          </span>
        </div>
      ))}
    </div>

    {/* Rating */}
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#111827",
          margin: "0 0 12px",
        }}
      >
        Rating
      </p>
      {["01", "02", "03", "04", "05"].map((r) => (
        <div
          key={r}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name="rating"
              checked={rating === r}
              onChange={() => setRating(r)}
              style={{ accentColor: "#f5a623", width: "16px", height: "16px" }}
            />
            <span style={{ fontSize: "13px", color: "#374151" }}>{r}</span>
          </label>
          <span
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              background: "#f3f4f6",
              borderRadius: "999px",
              padding: "2px 8px",
            }}
          >
            04
          </span>
        </div>
      ))}
    </div>

    {/* Filter by Price */}
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: "700",
          color: "#111827",
          margin: "0 0 16px",
        }}
      >
        Filter by Price
      </p>
      <input
        type="range"
        min={0}
        max={500}
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        style={{ width: "100%", accentColor: "#f5a623", marginBottom: "8px" }}
      />
      <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
        Price: $0 — ${priceRange}
      </p>
    </div>
  </div>
);

const HotelResults = () => {
  const [rooms, setRooms] = useState(0);
  const [rating, setRating] = useState("01");
  const [priceRange, setPriceRange] = useState(76);
  const [activeFilters, setActiveFilters] = useState(["0 Stops", "Upto $76"]);
  const [guests, setGuests] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const removeFilter = (f) => setActiveFilters((p) => p.filter((x) => x !== f));
  const clearAll = () => setActiveFilters([]);

  const inputStyle = {
    border: "none",
    outline: "none",
    fontSize: "14px",
    fontWeight: "700",
    color: "#111827",
    background: "transparent",
    width: "100%",
  };

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        /* ── Navbar ── */
        .hr-navbar { margin-top: 100px; }
        @media (max-width: 768px) { .hr-navbar { margin-top: 80px; } }

        /* ── Search bar ── */
        .hr-search { background:#fff; padding:16px 40px; box-shadow:0 2px 8px rgba(0,0,0,0.06); border-top:1px solid #f3f4f6; }
        @media (max-width: 768px) { .hr-search { padding:12px 16px; } }

        .hr-search-row { display:flex; align-items:stretch; border:1.5px solid #e5e7eb; border-radius:16px; overflow:hidden; }
        @media (max-width: 768px) {
          .hr-search-row { flex-direction:column; border-radius:12px; }
          .hr-search-cell { border-right:none !important; border-bottom:1px solid #e5e7eb; }
          .hr-search-cell:last-child { border-bottom:none; }
          .hr-search-btn-cell { padding:12px 16px !important; justify-content:stretch; }
          .hr-search-btn-cell button { width:100%; }
        }

        /* ── Main grid ── */
        .hr-grid { display:grid; grid-template-columns:220px 1fr; gap:20px; padding:24px 40px; max-width:1300px; margin:0 auto; }
        @media (max-width: 900px) { .hr-grid { grid-template-columns:1fr; padding:16px; } }
        @media (max-width: 768px) { .hr-grid { padding:12px; } }

        /* ── Sidebar ── */
        .hr-sidebar { display:block; }
        @media (max-width: 900px) { .hr-sidebar { display:none; } }

        /* ── Mobile filter btn ── */
        .hr-filter-toggle { display:none; }
        @media (max-width: 900px) { .hr-filter-toggle { display:flex; } }

        /* ── Mobile filter drawer ── */
        .hr-filter-drawer { display:none; }
        @media (max-width: 900px) {
          .hr-filter-drawer.open { display:block; margin-bottom:16px; }
        }

        /* ── Hotel card ── */
        .hr-card { background:#fff; border-radius:16px; overflow:hidden; display:flex; box-shadow:0 2px 8px rgba(0,0,0,0.05); }
        @media (max-width: 600px) {
          .hr-card { flex-direction:column; }
          .hr-card-img { width:100% !important; height:200px !important; flex-shrink:unset; }
          .hr-card-img img { height:200px; }
          .hr-card-price { min-width:unset !important; flex-direction:row; padding:16px !important; gap:16px; align-items:center; justify-content:space-between; }
          .hr-card-price-text { text-align:left; }
        }
      `}</style>

      {/* Navbar */}
      <div className="hr-navbar">
        <Navbar dark={true} />
      </div>

      {/* Search Bar */}
      <div className="hr-search">
        <div className="hr-search-row">
          {/* City */}
          <div
            className="hr-search-cell"
            style={{
              flex: 1.5,
              padding: "14px 18px",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <p
              style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}
            >
              City
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#9ca3af", fontSize: "14px" }}>🔍</span>
              <input
                type="text"
                defaultValue="Dhaka, Bangladesh"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Check In */}
          <div
            className="hr-search-cell"
            style={{
              flex: 1,
              padding: "14px 18px",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <p
              style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}
            >
              Check In
            </p>
            <input
              type="text"
              defaultValue="Fri, 25 July 2025"
              style={inputStyle}
            />
          </div>

          {/* Check Out */}
          <div
            className="hr-search-cell"
            style={{
              flex: 1,
              padding: "14px 18px",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <p
              style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}
            >
              Check Out
            </p>
            <input
              type="text"
              defaultValue="Fri, 25 July 2025"
              style={inputStyle}
            />
          </div>

          {/* Guests */}
          <div
            className="hr-search-cell"
            style={{
              flex: 1,
              padding: "14px 18px",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <p
              style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}
            >
              Number of Guest
            </p>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111827",
                background: "transparent",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div
            className="hr-search-cell hr-search-btn-cell"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
            }}
          >
            <button
              style={{
                background: "#f5a623",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "10px 32px",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="hr-grid">
        {/* Left Sidebar — desktop only */}
        <div className="hr-sidebar">
          <HotelSidebar
            activeFilters={activeFilters}
            clearAll={clearAll}
            removeFilter={removeFilter}
            rooms={rooms}
            setRooms={setRooms}
            rating={rating}
            setRating={setRating}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* Right — Cards */}
        <div>
          {/* Mobile filter toggle */}
          <button
            className="hr-filter-toggle"
            onClick={() => setShowFilters((p) => !p)}
            style={{
              background: "#1e1b4b",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "12px",
              alignItems: "center",
              gap: "8px",
            }}
          >
            🔧 {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          {/* Mobile filter drawer */}
          <div className={`hr-filter-drawer ${showFilters ? "open" : ""}`}>
            <HotelSidebar
              activeFilters={activeFilters}
              clearAll={clearAll}
              removeFilter={removeFilter}
              rooms={rooms}
              setRooms={setRooms}
              rating={rating}
              setRating={setRating}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>

          {/* Hotel Cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {hotels.map((hotel, i) => (
              <div key={i} className="hr-card">
                {/* Image */}
                <div
                  className="hr-card-img"
                  style={{ width: "220px", flexShrink: 0 }}
                >
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ flex: 1, padding: "20px 24px" }}>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#111827",
                      margin: "0 0 6px",
                    }}
                  >
                    {hotel.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#9ca3af",
                      margin: "0 0 14px",
                    }}
                  >
                    {hotel.address}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      flexWrap: "wrap",
                      marginBottom: "14px",
                    }}
                  >
                    {hotel.amenities.map((a) => (
                      <span
                        key={a}
                        style={{
                          fontSize: "12px",
                          color: "#374151",
                          fontWeight: "500",
                          background: "#f3f4f6",
                          borderRadius: "999px",
                          padding: "4px 12px",
                        }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        background: "#f5a623",
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "13px",
                        padding: "3px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {hotel.rating.toFixed(1)}
                    </span>
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>
                      {hotel.reviews} Reviews
                    </span>
                  </div>
                </div>

                {/* Price + Select */}
                <div
                  className="hr-card-price"
                  style={{
                    background: "#1e1b4b",
                    padding: "24px 20px",
                    minWidth: "160px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    className="hr-card-price-text"
                    style={{ textAlign: "center" }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      TK{" "}
                    </span>
                    <span
                      style={{
                        fontSize: "26px",
                        fontWeight: "800",
                        color: "#fff",
                      }}
                    >
                      {hotel.price.toLocaleString()}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.6)",
                      margin: 0,
                    }}
                  >
                    Per Night
                  </p>
                  <button
                    style={{
                      background: "#f5a623",
                      color: "#fff",
                      border: "none",
                      borderRadius: "999px",
                      padding: "9px 28px",
                      fontSize: "13px",
                      fontWeight: "700",
                      cursor: "pointer",
                      marginTop: "8px",
                    }}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PartnerBanner />
      <Footer />
    </div>
  );
};

export default HotelResults;
