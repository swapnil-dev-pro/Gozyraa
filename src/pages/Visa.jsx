import { useState } from "react";
import Navbar from "../components/Navbar";
import PartnerBanner from '../components/PartnerBanner'
import Footer from '../components/Footer'

const countries = [
  { name: "Oman", flag: "https://flagcdn.com/w40/om.png" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Qatar", flag: "https://flagcdn.com/w40/qa.png" },
  { name: "UAE", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
];

const Visa = () => {
  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      style={{
        background: "#f9fafb",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Navbar */}
      <div style={{ position: "relative", height: "70px" }}>
        <Navbar dark={true} />
      </div>

      {/* Content */}
      <div
        style={{ padding: "40px 60px", maxWidth: "900px", margin: "0 auto" }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "800",
            color: "#111827",
            margin: "0 0 6px",
          }}
        >
          VISA
        </h1>
        <p style={{ fontSize: "13px", color: "#9ca3af", margin: "0 0 24px" }}>
          Get your visa with help of us
        </p>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "24px",
            alignItems: "start",
            gridTemplateRows: "auto",
          }}
        >
          {/* Left — Search + Country List */}
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              minHeight: "420px",
            }}
          >
            {/* Search */}
            <div
              style={{
                padding: "14px 16px",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  padding: "8px 14px",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "14px",
                    color: "#374151",
                    width: "100%",
                  }}
                />
              </div>
            </div>

            {/* Country List */}
            {filtered.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 20px",
                  borderBottom:
                    i < filtered.length - 1 ? "1px solid #f3f4f6" : "none",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#f9fafb")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#fff")
                }
              >
                <img
                  src={c.flag}
                  alt={c.name}
                  style={{
                    width: "36px",
                    height: "24px",
                    borderRadius: "4px",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  {c.name}
                </span>
              </div>
            ))}

            {filtered.length === 0 && (
              <div
                style={{
                  padding: "24px",
                  textAlign: "center",
                  color: "#9ca3af",
                  fontSize: "14px",
                }}
              >
                No countries found
              </div>
            )}
          </div>

          {/* Right — Apply for Visa Card */}
          <div
            style={{
              background: "#f5a623",
              borderRadius: "16px",
              padding: "28px 24px",
              boxShadow: "0 4px 20px rgba(245,166,35,0.3)",
              position: "sticky",
              top: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#fff",
                margin: "0 0 14px",
                lineHeight: "1.3",
              }}
            >
              Apply for Visa
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.7",
                margin: "0 0 28px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Scelerisque aliquet
              tristique nulla vitae augue in iaculis.
            </p>
            <button
              style={{
                background: "#1e1b4b",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "12px 0",
                width: "100%",
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                letterSpacing: "0.5px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2d2a5e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1e1b4b")
              }
            >
              APPLY
            </button>
          </div>
        </div>
      </div>
      <PartnerBanner />
      <Footer />
    </div>
  );
};

export default Visa;
