import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "I Choosed Gozyraa to pick my travel tickets. and So far its been always best.",
    author: "CEO, Sean Williams",
  },
  {
    quote:
      "Gozyraa made our honeymoon trip absolutely seamless. Best travel platform ever!",
    author: "Travel Blogger, Ayesha Rahman",
  },
  {
    quote:
      "Booking flights and hotels together was so easy. Highly recommend Gozyraa to everyone.",
    author: "Engineer, James Carter",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const slide = (dir) => {
    setFade(false);
    setTimeout(() => {
      setCurrent((c) =>
        dir === "next"
          ? c === testimonials.length - 1
            ? 0
            : c + 1
          : c === 0
            ? testimonials.length - 1
            : c - 1,
      );
      setFade(true);
    }, 200);
  };

  const arrowBase = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "1.5px solid #d1d5db",
    background: "#fff",
    cursor: "pointer",
    fontSize: "20px",
    color: "#374151",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    transition: "all 0.2s",
    flexShrink: 0,
  };

  const ArrowButton = ({ dir, extraStyle = {} }) => (
    <button
      onClick={() => slide(dir)}
      style={{ ...arrowBase, ...extraStyle }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#9ca3af";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#d1d5db";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
      }}
    >
      {dir === "prev" ? "‹" : "›"}
    </button>
  );

  const content = (
    <div
      style={{
        maxWidth: "500px",
        textAlign: "center",
        padding: isMobile ? "0" : "0 40px",
        opacity: fade ? 1 : 0,
        transition: "opacity 0.2s ease",
        minHeight: isMobile ? "220px" : "unset",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: isMobile ? "48px" : "64px",
          lineHeight: "0.8",
          color: "#111827",
          marginBottom: "20px",
          fontFamily: "Georgia, serif",
          fontWeight: "900",
        }}
      >
        "
      </div>
      <p
        style={{
          fontSize: isMobile ? "18px" : "22px",
          fontWeight: "600",
          color: "#111827",
          lineHeight: "1.65",
          margin: "0 0 28px",
          fontFamily: "Georgia, serif",
        }}
      >
        {testimonials[current].quote}
      </p>
      <p
        style={{
          fontSize: "13px",
          color: "#6b7280",
          margin: 0,
          fontWeight: "500",
          letterSpacing: "0.2px",
        }}
      >
        —{testimonials[current].author}
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <div
        style={{
          background: "#F2F2F2",
          padding: "40px 24px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {content}
        <div style={{ display: "flex", gap: "16px" }}>
          <ArrowButton dir="prev" />
          <ArrowButton dir="next" />
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#F2F2F2",
        padding: "80px 0",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "280px",
      }}
    >
      <ArrowButton
        dir="prev"
        extraStyle={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "40px",
        }}
      />
      {content}
      <ArrowButton
        dir="next"
        extraStyle={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "40px",
        }}
      />
    </div>
  );
};

export default Testimonials;
