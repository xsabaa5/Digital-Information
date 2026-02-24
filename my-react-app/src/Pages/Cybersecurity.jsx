import React from "react";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

export default function Cybersecurity() {
  const capabilities = [
    {
      title: "24/7 SOC Monitoring & Threat Intelligence",
      desc: "Our Security Operations Center operates continuously, identifying and neutralizing threats instantly with proactive monitoring, threat hunting, and incident response.",
      features: [
        "Real-time monitoring & behavioral analysis",
        "Advanced threat intelligence (IoCs & anomaly detection)",
        "<15s average response time",
      ],
    },
    {
      title: "Zero-Day Exploit & Malware Protection",
      desc: "AI-driven analytics and quantum-resistant encryption block zero-day exploits, malware, and ransomware before they spread.",
      features: [
        "99.7% protection rate",
        "AI & machine-learning based threat prediction",
        "Automated patch and containment systems",
      ],
    },
    {
      title: "Multi-Layered Network & System Defense",
      desc: "Integration of firewalls, intrusion detection, DDoS protection, endpoint security, and data encryption.",
      features: [
        "Perimeter Defense: Next-gen firewalls, IDS, DDoS protection",
        "Threat Intelligence: Real-time analytics & behavioral tracking",
        "Endpoint Protection: Device control, advanced antivirus, encryption",
        "Data Protection: Backup, recovery, access control, audit trails",
      ],
    },
    {
      title: "Cyber Defense Consulting & Training",
      desc: "Security audits, risk assessments, compliance guidance, and customized cybersecurity training for IT and management staff.",
      features: [],
    },
  ];

  const whyChoose = [
    { stat: "2020", label: "Trusted cybersecurity provider in Iraq since" },
    { stat: "99.98%", label: "Threat detection rate" },
    {
      stat: "24/7",
      label: "Local technical support and fast on-site response",
    },
    {
      stat: "AI",
      label: "Driven security architecture for proactive protection",
    },
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
            Enterprise-Grade{" "}
            <span style={{ color: "#4F7BF7" }}>Cybersecurity</span>
          </h1>
          <p
            style={{
              color: "#8492af",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 660,
              margin: "0 auto",
            }}
          >
            Protect your digital infrastructure with AI-powered, multi-layered
            defense systems. Safeguarding Iraqi businesses, government entities,
            and institutions from cyber threats.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Capabilities */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Our Capabilities
          </h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {capabilities.map((cap, i) => (
              <div key={i} style={{ ...card }}>
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
                    fontSize: 16,
                    marginBottom: 16,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>
                  {cap.title}
                </h3>
                <p
                  style={{
                    color: "#8492af",
                    fontSize: 16,
                    lineHeight: 1.7,
                    marginBottom: cap.features.length ? 16 : 0,
                  }}
                >
                  {cap.desc}
                </p>
                {cap.features.length > 0 && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                    }}
                  >
                    {cap.features.map((f, j) => (
                      <li
                        key={j}
                        style={{
                          color: "#9AABBF",
                          fontSize: 16,
                          lineHeight: 1.6,
                          paddingLeft: 20,
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "#4F7BF7",
                          }}
                        >
                          &#8226;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            Why Choose Digital Information
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {whyChoose.map((item, i) => (
              <div
                key={i}
                style={{ ...card, textAlign: "center", padding: 24 }}
              >
                <p
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#4F7BF7",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.stat}
                </p>
                <p style={{ color: "#8492af", fontSize: 16, lineHeight: 1.5 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "48px 0" }}>
          <div
            style={{
              ...card,
              padding: "48px 32px",
              border: "1px solid rgba(79,123,247,.2)",
            }}
          >
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Protect Your Business Today
            </h2>
            <p
              style={{
                color: "#8492af",
                fontSize: 16,
                marginBottom: 28,
                maxWidth: 480,
                margin: "0 auto 28px",
              }}
            >
              Cyber threats don't wait. Contact Digital Information to secure
              your infrastructure with advanced cybersecurity solutions.
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
