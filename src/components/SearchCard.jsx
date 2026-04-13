import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("flights");
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Dhaka, Bangladesh");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("2025-07-25");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");

  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const tabs = [
    { id: "flights", label: "Flights", icon: "🪑", route: "/flights" },
    { id: "hotels", label: "Hotels", icon: "✈️", route: "/hotels" },
    { id: "tours", label: "Tours", icon: "🧭", route: "/tours" },
  ];

  const tripTypes = [
    { id: "oneway", label: "One Way" },
    { id: "roundtrip", label: "Round Trip" },
    { id: "multicity", label: "Multi City" },
  ];

  return (
    <>
      <style>{`
        .search-input-row {
          display: flex;
          align-items: stretch;
          border: 1.5px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        .search-input-col {
          flex: 1;
          padding: 14px 18px;
          border-right: 1px solid #e5e7eb;
        }
        .search-input-col:last-child {
          border-right: none;
        }
        .search-bottom-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
        }
        .tab-bar {
          display: inline-flex;
          background: #F5F5F5;
          border-radius: 999px;
          padding: 8px;
          margin-bottom: -17px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          gap: 4px;
        }
        .trip-type-row {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .search-input-row {
            flex-direction: column !important;
            border-radius: 16px !important;
          }
          .search-input-col {
            border-right: none !important;
            border-bottom: 1px solid #e5e7eb !important;
          }
          .search-input-col:last-child {
            border-bottom: none !important;
          }
          .swap-btn-wrapper {
            display: none !important;
          }
          .search-bottom-row {
            flex-wrap: wrap;
            justify-content: center !important;
          }
          .tab-bar {
            width: 100%;
            justify-content: center;
          }
          .trip-type-row {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .tab-label {
            display: none;
          }
        }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Tab Bar */}
        <div className="tab-bar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                navigate(tab.route);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 22px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.2s",
                background: activeTab === tab.id ? "#ffffff" : "transparent",
                color: activeTab === tab.id ? "#1e1b4b" : "#9ca3af",
                boxShadow:
                  activeTab === tab.id ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <span>{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* White Card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "0 24px 24px 24px",
            padding: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Trip Type Buttons */}
          <div className="trip-type-row">
            {tripTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setTripType(type.id)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  border:
                    tripType === type.id
                      ? "2px solid #1e1b4b"
                      : "1.5px solid #e5e7eb",
                  background: tripType === type.id ? "#1e1b4b" : "#ffffff",
                  color: tripType === type.id ? "#ffffff" : "#6b7280",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                {type.label}
              </button>
            ))}
          </div>

          {/* Input Row */}
          <div className="search-input-row">
            {/* From */}
            <div className="search-input-col">
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  margin: "0 0 4px",
                }}
              >
                From
              </p>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  background: "transparent",
                }}
              />
            </div>

            {/* Swap */}
            <div
              className="swap-btn-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 8px",
              }}
            >
              <button
                onClick={swapCities}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1.5px solid #e5e7eb",
                  background: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7280",
                }}
              >
                ⇄
              </button>
            </div>

            {/* To */}
            <div className="search-input-col">
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  margin: "0 0 4px",
                }}
              >
                To
              </p>
              <input
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Select City"
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  background: "transparent",
                }}
              />
            </div>

            {/* Depart */}
            <div className="search-input-col">
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  margin: "0 0 4px",
                }}
              >
                Depart
              </p>
              <input
                type="date"
                value={depart}
                onChange={(e) => setDepart(e.target.value)}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#111827",
                  background: "transparent",
                  cursor: "pointer",
                }}
              />
            </div>

            {/* Return On */}
            <div
              className="search-input-col"
              style={{
                background: tripType !== "roundtrip" ? "#fafafa" : "#fff",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "#9ca3af",
                  margin: "0 0 4px",
                }}
              >
                Return On
              </p>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={tripType !== "roundtrip"}
                style={{
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  fontWeight: "700",
                  background: "transparent",
                  color: tripType === "roundtrip" ? "#111827" : "#d1d5db",
                  cursor: tripType === "roundtrip" ? "pointer" : "not-allowed",
                }}
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="search-bottom-row">
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
                color: "#ffffff",
                border: "none",
                borderRadius: "999px",
                padding: "10px 36px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
