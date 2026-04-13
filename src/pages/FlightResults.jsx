import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PartnerBanner from '../components/PartnerBanner'
import Footer from '../components/Footer'

const flights = [
  {
    airline: "Emirates",
    from: "DHK",
    to: "JED",
    depart: "3:05",
    arrive: "5:05",
    duration: "3h 00m",
    price: 9987,
    stops: 0,
  },
  {
    airline: "Emirates",
    from: "DHK",
    to: "JED",
    depart: "3:05",
    arrive: "5:05",
    duration: "3h 00m",
    price: 9987,
    stops: 1,
  },
  {
    airline: "Emirates",
    from: "DHK",
    to: "JED",
    depart: "3:05",
    arrive: "5:05",
    duration: "3h 00m",
    price: 9987,
    stops: 0,
  },
  {
    airline: "Emirates",
    from: "DHK",
    to: "JED",
    depart: "3:05",
    arrive: "5:05",
    duration: "3h 00m",
    price: 9987,
    stops: 2,
  },
];

const airlines = [
  { name: "Emirates", color: "#cc0001" },
  { name: "Saudi Airline", color: "#006400" },
  { name: "Fly Dubai", color: "#003580" },
];

const FlightResults = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState("oneway");
  const [stops, setStops] = useState(0);
  const [departTime, setDepartTime] = useState("00-06");
  const [priceRange, setPriceRange] = useState(76);
  const [adults, setAdults] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [activeFilters, setActiveFilters] = useState(["0 Stops", "Upto $76"]);

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
      {/* Navbar — white background */}
      <div style={{ marginTop:"130px"  }}>
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
        {/* Trip Type + Adults + Class + Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { id: "oneway", label: "One Way" },
              { id: "roundtrip", label: "Round Trip" },
              { id: "multicity", label: "Multi City" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTripType(t.id)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border:
                    tripType === t.id
                      ? "2px solid #1e1b4b"
                      : "1.5px solid #e5e7eb",
                  background: tripType === t.id ? "#1e1b4b" : "#fff",
                  color: tripType === t.id ? "#fff" : "#6b7280",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "999px",
                padding: "8px 16px",
              }}
            >
              <select
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "#374151",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Adult{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "999px",
                padding: "8px 16px",
              }}
            >
              <select
                value={cabinClass}
                onChange={(e) => setCabinClass(e.target.value)}
                style={{
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "#374151",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                {["Economy", "Business", "First Class"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
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
              }}
            >
              Search
            </button>
          </div>
        </div>

        {/* From / To / Date Row */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            border: "1.5px solid #e5e7eb",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
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
              From
            </p>
            <input
              type="text"
              defaultValue="Dhaka, Bangladesh"
              style={inputStyle}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
              borderRight: "1px solid #e5e7eb",
            }}
          >
            <button
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "1.5px solid #e5e7eb",
                background: "#fff",
                cursor: "pointer",
                fontSize: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6b7280",
              }}
            >
              ⇄
            </button>
          </div>
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
              To
            </p>
            <input type="text" placeholder="Select City" style={inputStyle} />
          </div>
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
              Depart
            </p>
            <input
              type="text"
              defaultValue="Fri, 25 July 2025"
              style={{ ...inputStyle, fontWeight: "700" }}
            />
          </div>
          <div style={{ flex: 1, padding: "14px 18px" }}>
            <p
              style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px" }}
            >
              Return On
            </p>
            <input
              type="text"
              placeholder="Select Date"
              style={{ ...inputStyle, color: "#9ca3af", fontWeight: "400" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "220px 1fr 200px",
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

          {/* Stops */}
          <div style={filterBoxStyle}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Stops
            </p>
            {[0, 1, 2].map((s) => (
              <div
                key={s}
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
                    name="stops"
                    checked={stops === s}
                    onChange={() => setStops(s)}
                    style={{
                      accentColor: "#f5a623",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {s}
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

          {/* Depart Time */}
          <div style={filterBoxStyle}>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Depart Time
            </p>
            {["00-06", "06-12", "12-18", "18-24"].map((t) => (
              <div
                key={t}
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
                    name="depart"
                    checked={departTime === t}
                    onChange={() => setDepartTime(t)}
                    style={{
                      accentColor: "#f5a623",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {t}
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

        {/* Center — Flight Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {flights.map((flight, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            >
              {/* Airline Logo + Name */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  minWidth: "120px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#cc0001",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    color: "#fff",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png"
                    alt="Emirates"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {flight.airline}
                </span>
              </div>

              {/* Flight Info */}
              <div style={{ flex: 1, padding: "0 24px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#111827",
                    }}
                  >
                    {flight.depart}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        position: "relative",
                        height: "2px",
                        background: "#e5e7eb",
                        borderRadius: "999px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "10%",
                          transform: "translateY(-50%)",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#d1d5db",
                          border: "2px solid #fff",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10%",
                          transform: "translateY(-50%)",
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#d1d5db",
                          border: "2px solid #fff",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        textAlign: "center",
                        margin: "4px 0 0",
                      }}
                    >
                      {flight.duration}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "800",
                      color: "#111827",
                    }}
                  >
                    {flight.arrive}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "4px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                    {flight.from}
                  </span>
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>
                    {flight.to}
                  </span>
                </div>
              </div>

              {/* Price + Select */}
              <div style={{ textAlign: "right", minWidth: "130px" }}>
                <div style={{ marginBottom: "2px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      fontWeight: "600",
                    }}
                  >
                    TK
                  </span>
                  <span
                    style={{
                      fontSize: "26px",
                      fontWeight: "800",
                      color: "#111827",
                    }}
                  >
                    {flight.price.toLocaleString()}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#9ca3af",
                    margin: "0 0 12px",
                  }}
                >
                  Per Person
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
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            height: "fit-content",
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
            Search by Flight
          </p>
          {airlines.map((a, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: a.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#fff",
                }}
              >
                ✈
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                {a.name}
              </span>
            </div>
          ))}
        </div>
      </div>
       <PartnerBanner />
      <Footer />
    </div>
    
  );
};

export default FlightResults;
