import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApp } from "../context/AppContext";

const Navbar = ({ dark = false }) => {
  const navigate = useNavigate();
  const {
    selectedCountry,
    setSelectedCountry,
    selectedLang,
    setSelectedLang,
    selectedCurrency,
    setSelectedCurrency,
  } = useApp();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const countries = [
    { flag: "https://flagcdn.com/w40/bd.png", name: "Bangladesh", code: "BD" },
    { flag: "https://flagcdn.com/w40/us.png", name: "USA", code: "US" },
    { flag: "https://flagcdn.com/w40/gb.png", name: "UK", code: "GB" },
    { flag: "https://flagcdn.com/w40/in.png", name: "India", code: "IN" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (name) =>
    setOpenDropdown((prev) => (prev === name ? null : name));

  const textColor = dark ? "#111827" : "#fff";
  const hoverBg = dark ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.1)";
  const dividerColor = dark ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.25)";
  const navbarBg = menuOpen
    ? "rgba(10,8,5,0.98)"
    : dark
      ? "rgba(255,255,255,0.95)"
      : "rgba(255,255,255,0.1)";
  const navbarBorder = dark
    ? "1px solid rgba(0,0,0,0.1)"
    : "1px solid rgba(255,255,255,0.2)";
  const navbarBlur = dark ? "none" : "blur(16px)";
  const hamburgerColor = dark && !menuOpen ? "#111827" : "#fff";

  const navBtnStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "transparent",
    border: "none",
    color: menuOpen ? "#fff" : textColor,
    fontSize: "14px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "999px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };

  const dropdownBoxStyle = {
    position: "absolute",
    top: "44px",
    left: "0",
    background: dark ? "#fff" : "rgba(20,15,10,0.9)",
    backdropFilter: "blur(12px)",
    border: dark ? "1px solid #e5e7eb" : "1px solid rgba(255,255,255,0.15)",
    borderRadius: "14px",
    overflow: "hidden",
    minWidth: "150px",
    zIndex: 100,
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
  };

  const dropdownBtnStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "100%",
    padding: "10px 16px",
    background: "transparent",
    border: "none",
    color: dark ? "#111827" : "#fff",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-account { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
          .nav-links { display: flex !important; }
          .nav-account { display: flex !important; }
        }
      `}</style>

      <div
        style={{
          position: menuOpen ? "fixed" : "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "95%",
          maxWidth: "1100px",
          zIndex: 50,
        }}
      >
        <div
          ref={dropdownRef}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderRadius: menuOpen ? "20px" : "999px",
            border: navbarBorder,
            background: navbarBg,
            backdropFilter: menuOpen ? "none" : navbarBlur,
            WebkitBackdropFilter: menuOpen ? "none" : navbarBlur,
            flexWrap: "wrap",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <img
              src={dark ? "/logo2.png" : "/logo (4).png"}
              alt="Gozyraa Logo"
              style={{
                height: "40px",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            {/* Country Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => toggle("country")}
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = hoverBg)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  style={{
                    width: "22px",
                    height: "15px",
                    borderRadius: "2px",
                    objectFit: "cover",
                  }}
                />
                {selectedCountry.name}
                <span style={{ fontSize: "10px" }}>▾</span>
              </button>
              {openDropdown === "country" && (
                <div style={dropdownBoxStyle}>
                  {countries.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedCountry(c);
                        setOpenDropdown(null);
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = dark
                          ? "#f3f4f6"
                          : "rgba(255,255,255,0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <img
                        src={c.flag}
                        alt={c.name}
                        style={{
                          width: "22px",
                          height: "15px",
                          borderRadius: "2px",
                          objectFit: "cover",
                        }}
                      />
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => toggle("lang")}
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = hoverBg)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {selectedLang}
                <span style={{ fontSize: "10px" }}>▾</span>
              </button>
              {openDropdown === "lang" && (
                <div style={{ ...dropdownBoxStyle, minWidth: "100px" }}>
                  {["EN", "বাং", "AR", "FR"].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setSelectedLang(l);
                        setOpenDropdown(null);
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = dark
                          ? "#f3f4f6"
                          : "rgba(255,255,255,0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => toggle("currency")}
                style={navBtnStyle}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = hoverBg)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {selectedCurrency}
                <span style={{ fontSize: "10px" }}>▾</span>
              </button>
              {openDropdown === "currency" && (
                <div style={{ ...dropdownBoxStyle, minWidth: "100px" }}>
                  {["TK", "USD", "EUR", "GBP"].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setOpenDropdown(null);
                      }}
                      style={dropdownBtnStyle}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = dark
                          ? "#f3f4f6"
                          : "rgba(255,255,255,0.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div
              style={{
                width: "1px",
                height: "20px",
                background: dividerColor,
                margin: "0 4px",
              }}
            />

            <button
              onClick={() => navigate("/visa")}
              style={navBtnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Visa
            </button>

            <button
              onClick={() => navigate("/contact")}
              style={navBtnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Contact
            </button>
          </div>

          {/* Account Button */}
          <button
            className="nav-account"
            onClick={() => navigate("/profile")}
            style={{
              background: "#f5a623",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "9px 24px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Account
          </button>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen((p) => !p)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span
              style={{
                width: "22px",
                height: "2px",
                background: hamburgerColor,
                borderRadius: "2px",
                display: "block",
                transform: menuOpen
                  ? "rotate(45deg) translate(5px, 5px)"
                  : "none",
                transition: "0.3s",
              }}
            />
            <span
              style={{
                width: "22px",
                height: "2px",
                background: hamburgerColor,
                borderRadius: "2px",
                display: "block",
                opacity: menuOpen ? 0 : 1,
                transition: "0.3s",
              }}
            />
            <span
              style={{
                width: "22px",
                height: "2px",
                background: hamburgerColor,
                borderRadius: "2px",
                display: "block",
                transform: menuOpen
                  ? "rotate(-45deg) translate(5px, -5px)"
                  : "none",
                transition: "0.3s",
              }}
            />
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="mobile-menu"
              style={{
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.25)",
                marginTop: "12px",
                paddingTop: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              {/* Country */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => toggle("country")}
                  style={{
                    ...navBtnStyle,
                    color: "#fff",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      src={selectedCountry.flag}
                      alt={selectedCountry.name}
                      style={{
                        width: "22px",
                        height: "15px",
                        borderRadius: "2px",
                        objectFit: "cover",
                      }}
                    />
                    {selectedCountry.name}
                  </span>
                  <span style={{ fontSize: "10px" }}>▾</span>
                </button>
                {openDropdown === "country" && (
                  <div
                    style={{
                      ...dropdownBoxStyle,
                      position: "relative",
                      top: 0,
                      marginTop: "4px",
                      minWidth: "100%",
                    }}
                  >
                    {countries.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => {
                          setSelectedCountry(c);
                          setOpenDropdown(null);
                        }}
                        style={{ ...dropdownBtnStyle, color: "#fff" }}
                      >
                        <img
                          src={c.flag}
                          alt={c.name}
                          style={{
                            width: "22px",
                            height: "15px",
                            borderRadius: "2px",
                            objectFit: "cover",
                          }}
                        />
                        {c.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => toggle("lang")}
                  style={{
                    ...navBtnStyle,
                    color: "#fff",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ flex: 1, textAlign: "left" }}>
                    {selectedLang}
                  </span>
                  <span style={{ fontSize: "10px" }}>▾</span>
                </button>
                {openDropdown === "lang" && (
                  <div
                    style={{
                      ...dropdownBoxStyle,
                      position: "relative",
                      top: 0,
                      marginTop: "4px",
                      minWidth: "100%",
                    }}
                  >
                    {["EN", "বাং", "AR", "FR"].map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setSelectedLang(l);
                          setOpenDropdown(null);
                        }}
                        style={{ ...dropdownBtnStyle, color: "#fff" }}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency */}
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => toggle("currency")}
                  style={{
                    ...navBtnStyle,
                    color: "#fff",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ flex: 1, textAlign: "left" }}>
                    {selectedCurrency}
                  </span>
                  <span style={{ fontSize: "10px" }}>▾</span>
                </button>
                {openDropdown === "currency" && (
                  <div
                    style={{
                      ...dropdownBoxStyle,
                      position: "relative",
                      top: 0,
                      marginTop: "4px",
                      minWidth: "100%",
                    }}
                  >
                    {["TK", "USD", "EUR", "GBP"].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setSelectedCurrency(c);
                          setOpenDropdown(null);
                        }}
                        style={{ ...dropdownBtnStyle, color: "#fff" }}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.15)",
                  margin: "4px 0",
                }}
              />

              <button
                onClick={() => {
                  navigate("/visa");
                  setMenuOpen(false);
                }}
                style={{
                  ...navBtnStyle,
                  color: "#fff",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                Visa
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setMenuOpen(false);
                }}
                style={{
                  ...navBtnStyle,
                  color: "#fff",
                  width: "100%",
                  justifyContent: "flex-start",
                }}
              >
                Contact
              </button>

              <button
                onClick={() => {
                  navigate("/profile");
                  setMenuOpen(false);
                }}
                style={{
                  background: "#f5a623",
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "10px 24px",
                  fontSize: "14px",
                  fontWeight: "700",
                  cursor: "pointer",
                  marginTop: "8px",
                  width: "100%",
                }}
              >
                Account
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
