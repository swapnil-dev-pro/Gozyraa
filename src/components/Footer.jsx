import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ background: "#f5f5f0" }}>
      {/* Main Footer */}
      <div
        style={{
          padding: "60px 60px 40px",
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.8fr",
          gap: "40px",
        }}
        className="footer-grid"
      >
        {/* Column 1 — Logo + Info */}
        <div>
          <Link to="/">
            <img
              src="/logo2.png"
              alt="Gozyraa"
              style={{
                height: "50px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
          </Link>
          <p
            style={{
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: "1.7",
              margin: "0 0 20px",
            }}
          >
            Short info about the brand sit amet consectetur. Id placerat eu
            augue lectus pulvinar tortor. Accumsan.
          </p>
          <p
            style={{
              fontSize: "11px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 6px",
              letterSpacing: "0.5px",
            }}
          >
            EMAIL
          </p>
          <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
            info@Gozyraa.com
          </p>
        </div>

        {/* Column 2 — Pages */}
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 16px",
              letterSpacing: "0.8px",
            }}
          >
            PAGES
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
              { name: "Visa", path: "/visa" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              { name: "Flights", path: "/flights" },
              { name: "Hotels", path: "/hotels" },
              { name: "Tours", path: "/tours" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — About */}
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 16px",
              letterSpacing: "0.8px",
            }}
          >
            ABOUT
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {["About Us"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Column 4 — Resources */}
        <div>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 16px",
              letterSpacing: "0.8px",
            }}
          >
            RESOURCES
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {[
              { name: "Testimonials", path: "/testimonials" },
              { name: "Blog", path: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div
            style={{
              marginTop: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms and Conditions", path: "/terms" },
              { name: "Terms of Service", path: "/services-terms" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontSize: "13px",
                  color: "#6b7280",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 5 — Newsletter + Social */}
        <div>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "800",
              color: "#111827",
              margin: "0 0 10px",
            }}
          >
            Stay Updated!
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#6b7280",
              lineHeight: "1.7",
              margin: "0 0 20px",
            }}
          >
            Sign up for our monthly email to get the inside scoop on deals,
            Flights deal, and more.
          </p>

          {/* Email Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1.5px solid #d1d5db",
              paddingBottom: "8px",
              marginBottom: "28px",
            }}
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                fontSize: "12px",
                fontWeight: "700",
                color: "#111827",
                letterSpacing: "0.5px",
                width: "100%",
              }}
            />
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#111827",
                flexShrink: 0,
              }}
            >
              →
            </button>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <a
              href="#"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "#e2e4ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3c4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" fill="#9ca3c4" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/p/DN90aKaEXAp/"
              target="blank"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "#e2e4ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3c4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#9ca3c4" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/gozyraa"
              target="blank"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "#e2e4ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#9ca3c4">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "20px 60px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "13px", color: "#6b7280" }}>©</span>
        <span style={{ fontSize: "13px", color: "#6b7280" }}>
          Gozyraa. All rights reserved.
        </span>
      </div>

      {/* Responsive Styles */}
      <style>{`
  @media (max-width: 1024px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr 1fr !important;
      padding: 40px 40px 30px !important;
    }
    .footer-grid > div {
      text-align: center;
      align-items: center;
    }
    .footer-grid > div img {
      margin: 0 auto 16px;
      display: block;
    }
    .footer-grid > div a,
    .footer-grid > div p {
      text-align: center;
    }
    .footer-grid > div div {
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      padding: 40px 24px 30px !important;
      gap: 32px !important;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr !important;
      padding: 32px 20px 24px !important;
      gap: 28px !important;
    }
  }
`}</style>
    </footer>
  );
};

export default Footer;
