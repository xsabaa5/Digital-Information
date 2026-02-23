import React from "react";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

export default function ERPDigital() {
  const erpModules = [
    "Financial, HR, supply chain, and operational management",
    "Customizable to fit organizational workflow and goals",
    "Scalable and adaptable for growing businesses",
    "Integration-ready with third-party and legacy systems",
    "Available in on-premises or cloud deployments",
  ];

  const transformationServices = [
    "Business process re-engineering",
    "System integration and workflow automation",
    "Data migration and analytics enablement",
    "Employee training and local support",
  ];

  const torchFeatures = [
    "Unified dashboard for all operations",
    "AI-driven reporting and analytics",
    "Multi-language and multi-currency support",
    "Cloud-based access with advanced data security",
    "Continuous updates and dedicated technical support",
  ];

  const whyChoose = [
    { title: "Proven Success", desc: "ERP implementations across Iraq and the region" },
    { title: "Local Presence", desc: "On-ground support from Baghdad to Basra and Erbil" },
    { title: "Deep Expertise", desc: "Digital transformation and enterprise software specialists" },
    { title: "Partnership Approach", desc: "From consultation through post-deployment support" },
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
            ERP &{" "}
            <span style={{ color: "#4F7BF7" }}>Digital Transformation</span>{" "}
            Software
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
            Streamline your operations and accelerate growth with advanced ERP
            and automation solutions — including our in-house Torch ERP platform.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* ERP Modules */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Comprehensive ERP Modules
          </h2>
          <div style={{ ...card }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16 }}>
              {erpModules.map((item, i) => (
                <li key={i} style={{ color: "#9AABBF", fontSize: 15, lineHeight: 1.6, paddingLeft: 24, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#4F7BF7", fontWeight: 700 }}>&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Two columns: Transformation + Torch */}
        <section style={{ marginBottom: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ ...card }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              Digital Transformation Services
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              More than software — we enable organizational transformation.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {transformationServices.map((s, i) => (
                <li key={i} style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#4F7BF7" }}>&#8226;</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ ...card, border: "1px solid rgba(79,123,247,.25)" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 600,
                color: "#8BAAFE",
                background: "rgba(79,123,247,.1)",
                marginBottom: 14,
              }}
            >
              Flagship Product
            </span>
            <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
              Torch ERP Platform
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
              Our in-house enterprise platform designed for businesses in Iraq
              and the Middle East.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {torchFeatures.map((f, i) => (
                <li key={i} style={{ color: "#9AABBF", fontSize: 14, lineHeight: 1.6, paddingLeft: 20, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, color: "#4F7BF7" }}>&#8226;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Choose */}
        <section style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Why Choose Digital Information
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
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
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>
                  {item.title}
                </h4>
                <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "48px 0" }}>
          <div style={{ ...card, padding: "48px 32px" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ color: "#6B7A99", fontSize: 14, marginBottom: 28 }}>
              From Baghdad to Basra and Erbil — serving Iraq's growing business
              ecosystem.
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
