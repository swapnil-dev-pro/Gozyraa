import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PartnerBanner from "../components/PartnerBanner";
import Footer from "../components/Footer";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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

      {/* Hero Text */}
      <div
        style={{
          textAlign: "center",
          padding: isMobile ? "32px 16px 28px" : "48px 16px 40px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#f5a623",
            color: "#fff",
            fontSize: "13px",
            fontWeight: "600",
            padding: "8px 20px",
            borderRadius: "999px",
            marginBottom: "20px",
          }}
        >
          We Love To Hear From You
        </span>
        <h1
          style={{
            fontSize: isMobile ? "24px" : "32px",
            fontWeight: "700",
            color: "#111827",
            margin: "0 0 14px",
          }}
        >
          Contact Us
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            maxWidth: "420px",
            margin: "0 auto",
            lineHeight: "1.7",
          }}
        >
          Lorem Ipsum Dolor Sit Amet Consectetur. Phasellus Ultrices Ac Augue
          Nisl Purus. Vitae Porta Eu Risus Arcu. Nisl Sodales Ac Sed.
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", // mobile/tablet: stack, desktop: side by side
          gap: "40px",
          maxWidth: "900px",
          margin: "0 auto",
          padding: isMobile
            ? "0 16px 48px"
            : isTablet
              ? "0 32px 52px"
              : "0 40px 60px",
          alignItems: "start",
        }}
      >
        {/* Left — Contact Info */}
        <div>
          {/* Follow Us */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "36px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}
            >
              Follow Us
            </span>
            <a
              href="#"
              style={{
                color: "#f5a623",
                fontSize: "18px",
                textDecoration: "none",
                fontWeight: "800",
              }}
            >
              𝕏
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
                <circle cx="12" cy="12" r="10" />
                <path
                  fill="#fff"
                  d="M14.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 5c-.7.7-1.9 1-3.5 1s-2.8-.3-3.5-1"
                />
              </svg>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#f5a623">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  fill="#fff"
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                />
              </svg>
            </a>
          </div>

          {/* Contact Items */}
          {[
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              ),
              text: "+1 544544451",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              ),
              text: "+1 84512121111",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
              text: "info@Gozyraa.com",
            },
            {
              icon: (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              text: "5264 Lang Land",
            },
          ].map((item, i) => (
            <div key={i}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 0",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: "15px",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  {item.text}
                </span>
              </div>
              {i < 3 && (
                <div style={{ height: "1px", background: "#e5e7eb" }} />
              )}
            </div>
          ))}
        </div>

        {/* Right — Contact Form */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: isMobile ? "24px 20px" : "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827",
              margin: "0 0 24px",
            }}
          >
            Get In Touch With Us
          </h2>

          {/* First + Last Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", // mobile: stack, বাকি: side by side
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div>
              <label
                style={{
                  fontSize: "12px",
                  color: "#374151",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                First name *
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  color: "#111827",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f5a623")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
            <div>
              <label
                style={{
                  fontSize: "12px",
                  color: "#374151",
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "6px",
                }}
              >
                Last name *
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  color: "#111827",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#f5a623")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                fontSize: "12px",
                color: "#374151",
                fontWeight: "600",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Email *
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@mail.com"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                color: "#111827",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f5a623")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                fontSize: "12px",
                color: "#374151",
                fontWeight: "600",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Message *
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                color: "#111827",
                resize: "vertical",
                boxSizing: "border-box",
                fontFamily: "Inter, sans-serif",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#f5a623")}
              onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
            />
          </div>

          {/* Privacy Policy */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{
                width: "16px",
                height: "16px",
                accentColor: "#f5a623",
                cursor: "pointer",
              }}
            />
            <span style={{ fontSize: "13px", color: "#6b7280" }}>
              You agree to our friendly{" "}
              <a
                href="#"
                style={{
                  color: "#111827",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                privacy policy.
              </a>
            </span>
          </div>

          {/* Send Button */}
          <button
            style={{
              background: "#1e1b4b",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 32px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "background 0.2s",
              width: isMobile ? "100%" : "auto", // mobile: full width
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#2d2a5e")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1e1b4b")}
          >
            Send
          </button>
        </div>
      </div>
      <PartnerBanner />
      <Footer />
    </div>
  );
};

export default Contact;
