import { useState } from "react"
import Navbar from "../components/Navbar"
import PartnerBanner from '../components/PartnerBanner'
import Footer from '../components/Footer'

const Profile = () => {
  const [activeTab, setActiveTab] = useState("basics")
  const [form, setForm] = useState({
    name: "Jonnie Dawson",
    email: "hello@Gozyraa.com",
    location: "South Africa",
    bio: "Lorem ipsum dolor sit amet, consectetur",
  })

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const tabs = [
    { id: "basics", label: "Basics" },
    { id: "bookings", label: "Bookings" },
    { id: "saved", label: "Saved Items" },
    { id: "wallet", label: "Wallet Balance" },
  ]

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#111827",
    outline: "none",
    boxSizing: "border-box",
    background: "#fff",
    fontFamily: "Inter, sans-serif",
  }

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Navbar */}

        <div style={{ position: "relative", height: "70px" }}>
          <Navbar dark={true} />
        </div>
     

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "24px", alignItems: "start" }}>

          {/* Left Sidebar — Tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "10px",
                  border: "none",
                  background: activeTab === tab.id ? "#f5a623" : "#fff",
                  color: activeTab === tab.id ? "#fff" : "#374151",
                  fontSize: "14px",
                  fontWeight: activeTab === tab.id ? "700" : "500",
                  cursor: "pointer",
                  textAlign: "left",
                  boxShadow: activeTab === tab.id ? "0 4px 12px rgba(245,166,35,0.3)" : "0 2px 6px rgba(0,0,0,0.05)",
                  transition: "all 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right — Content */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "28px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>

            {activeTab === "basics" && (
              <div>
                {/* Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
                  <div style={{ width: "4px", height: "22px", background: "#f5a623", borderRadius: "2px" }} />
                  <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>
                    Profile information
                  </h2>
                </div>

                {/* Avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    overflow: "hidden", flexShrink: 0,
                    border: "3px solid #f5a623",
                  }}>
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                      alt="Profile"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      background: "#fff", border: "1.5px solid #e5e7eb",
                      borderRadius: "999px", padding: "8px 18px",
                      fontSize: "13px", fontWeight: "600", color: "#374151",
                      cursor: "pointer",
                    }}>
                      <span style={{ fontSize: "16px" }}>+</span> Upload new picture
                    </button>
                    <button style={{
                      background: "#fff", border: "1.5px solid #e5e7eb",
                      borderRadius: "999px", padding: "8px 18px",
                      fontSize: "13px", fontWeight: "600", color: "#374151",
                      cursor: "pointer",
                    }}>
                      Remove
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                  {/* Name */}
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#374151", letterSpacing: "0.8px", display: "block", marginBottom: "6px" }}>
                      NAME
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#f5a623"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#374151", letterSpacing: "0.8px", display: "block", marginBottom: "6px" }}>
                      EMAIL
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#f5a623"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#374151", letterSpacing: "0.8px", display: "block", marginBottom: "6px" }}>
                      LOCATION
                    </label>
                    <input
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#f5a623"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label style={{ fontSize: "11px", fontWeight: "700", color: "#374151", letterSpacing: "0.8px", display: "block", marginBottom: "6px" }}>
                      BIO
                    </label>
                    <textarea
                      name="bio"
                      value={form.bio}
                      onChange={handleChange}
                      rows={4}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => e.target.style.borderColor = "#f5a623"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>

                  {/* Save Button */}
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button style={{
                      background: "#f5a623", color: "#fff", border: "none",
                      borderRadius: "999px", padding: "10px 32px",
                      fontSize: "14px", fontWeight: "700", cursor: "pointer",
                    }}>
                      Save Changes
                    </button>
                  </div>

                </div>
              </div>
            )}

            {activeTab === "bookings" && (
              <div style={{ textAlign: "center", padding: "40px 0", color: "#9ca3af" }}>
                <p style={{ fontSize: "16px" }}>No bookings yet.</p>
              </div>
            )}

            {activeTab === "saved" && (
              <div style={{ textAlign: "center", padding: "40px 0", color: "#9ca3af" }}>
                <p style={{ fontSize: "16px" }}>No saved items.</p>
              </div>
            )}

            {activeTab === "wallet" && (
              <div style={{ textAlign: "center", padding: "40px 0", color: "#9ca3af" }}>
                <p style={{ fontSize: "16px" }}>Wallet balance: TK 0</p>
              </div>
            )}

          </div>
        </div>
      </div>
       <PartnerBanner />
       <Footer />
    </div>
  )
}

export default Profile