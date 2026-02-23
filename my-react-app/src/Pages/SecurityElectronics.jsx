import React from "react";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

export default function SecurityElectronics() {
  const sections = [
    {
      title: "X-Ray Scanners & Metal Detectors",
      desc: "Advanced screening and detection for airports, ministries, logistics centers, and corporate facilities across Iraq.",
      brands: "RAPISCAN, GARRETT, ASTROPHYSICS",
      features: [
        "Multi-view imaging with deep penetration capability",
        "Weather-resistant designs for indoor and outdoor deployment",
        "Instant alerts and intuitive user interfaces enabling quick response",
      ],
    },
    {
      title: "Access Control & Surveillance Systems",
      desc: "Smart monitoring and access solutions for facility protection using biometric readers, facial recognition, turnstiles, CCTV, and thermal imaging.",
      brands: "HIKVISION, MEERAAG, SAFRAN, Motorola",
      features: [
        "Government and public institutions",
        "Corporate offices and banks",
        "Industrial and educational campuses",
      ],
      featureLabel: "Target Applications",
    },
    {
      title: "Communication & Office Automation",
      desc: "Professional communication systems and office management solutions enabling seamless coordination.",
      brands: "Icom, Hytera, Motorola",
      features: [
        "Two-way radios and dispatch communication",
        "Integrated automation and office management systems",
      ],
    },
  ];

  const whyChoose = [
    "Trusted by Iraq's leading enterprises and institutions",
    "Authorized distributor of premier global security and electronics brands",
    "Local installation, training, and 24/7 technical support",
    "Custom solutions for government, commercial, and industrial clients",
  ];

  return (
    <div
      style={{
        background: "#060B18",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section style={{ padding: "100px 0 60px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              color: "#8BAAFE",
              background: "rgba(79,123,247,.1)",
              border: "1px solid rgba(79,123,247,.15)",
              marginBottom: 24,
            }}
          >
            Solutions
          </span>
          <h1
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 20,
              letterSpacing: "-0.03em",
            }}
          >
            Security &{" "}
            <span style={{ color: "#4F7BF7" }}>Office Electronics</span>
          </h1>
          <p
            style={{
              color: "#6B7A99",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            Complete hardware solutions for a safer, smarter workplace.
            Integrated security and office electronics protecting operations and
            enhancing workplace productivity.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Solution Cards */}
        <section style={{ marginBottom: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {sections.map((s, i) => (
              <div key={i} style={{ ...card }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 600 }}>{s.title}</h3>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#8BAAFE",
                      background: "rgba(79,123,247,.1)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {s.brands}
                  </span>
                </div>
                <p style={{ color: "#6B7A99", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  {s.desc}
                </p>
                {s.featureLabel && (
                  <p style={{ color: "#5A6A8A", fontSize: 12, fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {s.featureLabel}
                  </p>
                )}
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#4F7BF7" }}>&#8226;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Why Choose Digital Information
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {whyChoose.map((item, i) => (
              <div key={i} style={{ ...card, display: "flex", alignItems: "center", gap: 16, padding: 20 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "rgba(79,123,247,.1)",
                    border: "1px solid rgba(79,123,247,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#4F7BF7",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  &#10003;
                </div>
                <p style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "48px 0" }}>
          <div style={{ ...card, padding: "48px 32px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Secure & Modernize Your Workplace
            </h2>
            <p style={{ color: "#6B7A99", fontSize: 14, marginBottom: 28 }}>
              Contact us for a consultation or on-site product demonstration.
            </p>
            <a
              href="mailto:info@diginfoiq.com"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                background: "#4F7BF7",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(79,123,247,.35)",
              }}
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
