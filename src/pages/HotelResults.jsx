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

const HotelResults = () => {
  const [rooms, setRooms] = useState(0);
  const [rating, setRating] = useState("01");
  const [priceRange, setPriceRange] = useState(76);
  const [activeFilters, setActiveFilters] = useState(["0 Stops", "Upto $76"]);
  const [guests, setGuests] = useState(1);

  const removeFilter = (f) => setActiveFilters((p) => p.filter((x) => x !== f));
  const clearAll = () => setActiveFilters([]);

  const filterBoxStyle = {
    background: "#fff",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Navbar */}
      <div style={{ marginTop: "130px" }}>
        <Navbar dark={true} />
      </div>

      {/* Search Bar */}
      <div
        style={{
          background: "#fff",
          padding: "16px 40px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          borderTop: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            border: "1.5px solid #e5e7eb",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {/* City */}
          <div
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
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  background: "transparent",
                  width: "100%",
                }}
              />
            </div>
          </div>

          {/* Check In */}
          <div
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
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111827",
                background: "transparent",
                width: "100%",
              }}
            />
          </div>

          {/* Check Out */}
          <div
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
              style={{
                border: "none",
                outline: "none",
                fontSize: "14px",
                fontWeight: "700",
                color: "#111827",
                background: "transparent",
                width: "100%",
              }}
            />
          </div>

          {/* Number of Guest */}
          <div
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
          </div>

          {/* Search Button */}
          <div
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "20px",
          padding: "24px 40px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Left Sidebar */}
        <div>
          {/* Active Filters */}
          <div style={filterBoxStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
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
          <div style={filterBoxStyle}>
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
                    style={{
                      accentColor: "#f5a623",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {r}
                  </span>
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
          <div style={filterBoxStyle}>
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
                    style={{
                      accentColor: "#f5a623",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {r}
                  </span>
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
          <div style={{ ...filterBoxStyle, marginBottom: 0 }}>
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
              style={{
                width: "100%",
                accentColor: "#f5a623",
                marginBottom: "8px",
              }}
            />
            <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>
              Price: $0 — ${priceRange}
            </p>
          </div>
        </div>

        {/* Hotel Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {hotels.map((hotel, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image */}
              <div style={{ width: "220px", flexShrink: 0 }}>
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

                {/* Amenities */}
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

                {/* Rating */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
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
                <div style={{ textAlign: "center" }}>
                  <span
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}
                  >
                    TK
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
      <PartnerBanner />
      <Footer />
    </div>
  );
};

export default HotelResults;
