import { useState } from "react";

const offers = [
  {
    gradient: "linear-gradient(135deg, #0f4c23 0%, #1a7a3c 50%, #22c55e 100%)",
    title: "Upto 50% Off",
    description: "Lorem ipsum dolor sit amet consectetur.",
    code: "GET50",
    discount: "Up to 50%Discount for Flights",
    validUntil: "31 September",
  },
  {
    gradient: "linear-gradient(135deg, #1a1a6e 0%, #2563eb 60%, #06b6d4 100%)",
    title: "Upto 50% Off",
    description: "Lorem ipsum dolor sit amet consectetur.",
    code: "GET50",
    discount: "Up to 50%Discount for Flights",
    validUntil: "31 September",
  },
  {
    gradient:
      "linear-gradient(135deg, #78350f 0%, #d97706 40%, #fbbf24 65%, #db2777 100%)",
    title: "Upto 50% Off",
    description: "Lorem ipsum dolor sit amet consectetur.",
    code: "GET50",
    discount: "Up to 50%Discount for Flights",
    validUntil: "31 September",
  },
];

const Offers = () => {
  const [copied, setCopied] = useState({});

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopied((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [index]: false })), 2000);
  };

  return (
    <div style={{ padding: "60px 60px", background: "#F2F2F2" }}>
      {/* Section Title */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#111827",
          marginBottom: "28px",
        }}
      >
        Offers
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {offers.map((offer, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              border: "1px solid #f3f4f6",
            }}
          >
            {/* Top Banner */}
            <div
              style={{
                background: offer.gradient,
                padding: "28px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "110px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "22px",
                    fontWeight: "800",
                    margin: "0 0 6px",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {offer.title}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "12px",
                    margin: 0,
                    maxWidth: "160px",
                    lineHeight: "1.6",
                  }}
                >
                  {offer.description}
                </p>
              </div>

              {/* Logo Box — same as Navbar */}
              <div
                style={{
                  background: "rgba(0,0,0,0.25)",
                  borderRadius: "10px",
                  padding: "20px 14px",
                  backdropFilter: "blur(4px)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/logo (4).png"
                  alt="Gozyraa"
                  style={{ height: "32px", objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Bottom Content */}
            <div style={{ padding: "20px 24px" }}>
              {/* Discount Label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "14px",
                }}
              >
                {/* Yellow airplane icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#f5a623"
                  style={{ transform: "rotate(-45deg)" }}
                >
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#111827",
                  }}
                >
                  {offer.discount}
                </span>
              </div>

              {/* Coupon Code Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    border: "1.5px solid #e5e7eb",
                    borderRadius: "8px",
                    padding: "8px 14px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      color: "#9ca3af",
                      margin: "0 0 2px",
                    }}
                  >
                    Use This Code
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111827",
                      margin: 0,
                    }}
                  >
                    {offer.code}
                  </p>
                </div>
                <button
                  onClick={() => handleCopy(offer.code, i)}
                  style={{
                    background: copied[i] ? "#22c55e" : "#f5a623",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 22px",
                    fontSize: "14px",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "background 0.3s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied[i] ? "✓ Copied" : "Copy"}
                </button>
              </div>

              {/* Valid Until + View Details */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                <span>Valid Until {offer.validUntil}</span>
                <span style={{ color: "#9ca3af" }}>•</span>
                <span
                  style={{
                    color: "#3b82f6",
                    fontWeight: "600",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  View Details
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
