import React from "react";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

export default function ArchivingSystems() {
  const capabilities = [
    "Securely store and organize documents and records",
    "Search and retrieve files instantly",
    "Integrate seamlessly with existing systems",
    "Ensure compliance with local and international standards",
    "Reduce physical storage and streamline operations",
  ];

  const mediaInfoFeatures = [
    "Interactive viewing and browsing with zoom/comparison tools",
    "Smart search and cataloging functionality",
    "Flexible integration with document management systems",
    "Secure access through DRM and user controls",
    "Customizable and scalable architecture",
  ];

  const mediaInfoUsers = [
    "Libraries and archives",
    "Publishers and educational institutions",
    "Decor and design industries",
    "Engineering and technical teams",
    "Scanning bureaus",
  ];

  const whyChoose = [
    "Tailored archiving software for local institutions",
    "Expert installation, training, and technical support",
    "Integration with ERP, workflow, and security systems",
    "Proven reliability with 500+ successful projects",
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
            Secure, Smart, and Scalable{" "}
            <span style={{ color: "#4F7BF7" }}>Archiving Solutions</span>
          </h1>
          <p
            style={{
              color: "#6B7A99",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Enterprise-grade archiving software for Iraqi organizations to
            digitize, organize, and protect records. Serving government
            institutions, enterprises, banks, and educational organizations.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Key Capabilities */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Key Capabilities
          </h2>
          <div style={{ ...card }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {capabilities.map((item, i) => (
                <li key={i} style={{ color: "#9AABBF", fontSize: 15, lineHeight: 1.6, paddingLeft: 24, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#4F7BF7", fontWeight: 700 }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MediaINFO Section */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
            MediaINFO Digital Library Software
          </h2>
          <p style={{ color: "#6B7A99", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
            Powerful digital library and content management platform for storing,
            accessing, and sharing digitized assets. Used by libraries, publishers,
            universities, and archives globally.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            <div style={{ ...card }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "#8BAAFE" }}>
                Features
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {mediaInfoFeatures.map((f, i) => (
                  <li key={i} style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#4F7BF7" }}>&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ ...card }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16, color: "#8BAAFE" }}>
                Who Uses MediaINFO
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {mediaInfoUsers.map((u, i) => (
                  <li key={i} style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#4F7BF7" }}>&#8226;</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Why Choose Digital Information
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {whyChoose.map((item, i) => (
              <div key={i} style={{ ...card, textAlign: "center", padding: 24 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "rgba(79,123,247,.1)",
                    border: "1px solid rgba(79,123,247,.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    color: "#4F7BF7",
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </div>
                <p style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6 }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "48px 0" }}>
          <div style={{ ...card, padding: "48px 32px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Ready to Digitize Your Records?
            </h2>
            <p style={{ color: "#6B7A99", fontSize: 14, marginBottom: 28 }}>
              Contact us for a consultation on archiving solutions tailored to
              your organization.
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
