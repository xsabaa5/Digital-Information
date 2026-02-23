import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Threads from "../components/Threads";

/* ─── Reusable wrapper ─── */
function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full px-6 ${className}`}
      style={{ maxWidth: "1120px", marginLeft: "auto", marginRight: "auto" }}
    >
      {children}
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "120px",
        background: "#060B18",
      }}
    >
      {/* Threads Background */}
      <div className="absolute inset-0" style={{ overflow: "hidden" }}>
        <Threads
          color={[0.32, 0.15, 1]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
        />
      </div>

      <div
        className="relative z-10"
        style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px" }}
      >
        <h1
          className="font-bold text-white"
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Empowering Productivity
          <br />
          Through <span style={{ color: "#4F7BF7" }}>Precision Scanning</span>
        </h1>

        <p
          style={{
            color: "#6B7A99",
            fontSize: 16,
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 525,
            margin: "0 auto 40px",
          }}
        >
          From compact office scanners to industrial-grade imaging systems — we
          distribute world-class brands powering digital workflows across Iraq.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            to="/products"
            className="text-white font-semibold rounded-full cursor-pointer"
            style={{
              padding: "14px 28px",
              background: "#4F7BF7",
              boxShadow: "0 0 30px rgba(79,123,247,.4)",
              textDecoration: "none",
            }}
          >
            Explore Products
          </Link>
          <a
            href="#about"
            className="text-white font-semibold rounded-full cursor-pointer"
            style={{
              padding: "14px 28px",
              background: "transparent",
              border: "1px solid #2A3352",
              textDecoration: "none",
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Terrain */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 140,
          background: "linear-gradient(to top, #060B18, transparent)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: 60 }}
        >
          <path
            d="M0 100V70C200 35 400 18 720 44C1040 70 1240 25 1440 52V100H0Z"
            fill="#060B18"
          />
          <path
            d="M0 70C200 35 400 18 720 44C1040 70 1240 25 1440 52"
            stroke="rgba(79,123,247,.12)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Stats ─── */
function Stats() {
  const data = [
    { label: "Projects Completed", value: "50+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Technical Support", value: "24/7" },
    { label: "Years in Market", value: "5+" },
  ];
  return (
    <section style={{ padding: "48px 0", background: "#060B18" }}>
      <Container
        className="flex items-center justify-center"
        style={{ gap: 48 }}
      >
        {data.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="text-center">
              <p style={{ color: "#5A6A8A", fontSize: 13, marginBottom: 8 }}>
                {s.label}
              </p>
              <p
                className="text-white font-bold"
                style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
              >
                {s.value}
              </p>
            </div>
            {i < data.length - 1 && (
              <div style={{ width: 1, height: 50, background: "#1A2744" }} />
            )}
          </React.Fragment>
        ))}
      </Container>
    </section>
  );
}

/* ─── Shared card style ─── */
const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

const iconBox = (size = 48) => ({
  width: size,
  height: size,
  borderRadius: 12,
  background: "#131D36",
  border: "1px solid #1E2D50",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#7B9BFF",
  flexShrink: 0,
});

/* ─── Our Services ─── */
function Services() {
  return (
    <section id="services" style={{ padding: "96px 0", background: "#060B18" }}>
      <Container>
        <div className="text-center" style={{ marginBottom: 64 }}>
          <h2
            className="text-white font-bold"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginBottom: 16 }}
          >
            Our Services
          </h2>
          <p
            style={{
              color: "#6B7A99",
              fontSize: 15,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Comprehensive technology solutions combining innovation, security,
            and integration to build a smarter, connected business.
          </p>
        </div>

        {/* Row 1 — 2 cols */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 20, marginBottom: 20 }}
        >
          {/* Document Scanning */}
          <div style={card}>
            <div
              className="flex items-center"
              style={{ marginBottom: 24, minHeight: 48 }}
            >
              <div style={{ ...iconBox(48), borderRadius: 999 }}>
                <Icon name="search" />
              </div>
              <div
                style={{ ...iconBox(48), borderRadius: 999, marginLeft: -8 }}
              >
                <Icon name="filter" />
              </div>
            </div>
            <h3
              className="text-white font-bold"
              style={{ fontSize: 17, marginBottom: 8 }}
            >
              Document Scanning Solutions
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7 }}>
              From compact office scanners to industrial-grade imaging systems —
              we distribute world-class brands like Ricoh, Epson, Avision, and
              Image Access powering digital workflows across Iraq.
            </p>
          </div>

          {/* Security & Office Electronics */}
          <div style={card}>
            <div
              className="flex items-center"
              style={{ marginBottom: 24, minHeight: 48, gap: 12 }}
            >
              <div style={{ ...iconBox(48), borderRadius: 999 }}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
            </div>
            <h3
              className="text-white font-bold"
              style={{ fontSize: 17, marginBottom: 8 }}
            >
              Security & Office Electronics
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7 }}>
              X-ray scanners, metal detectors, access control, surveillance
              systems, and communication devices from brands like RAPISCAN,
              HIKVISION, and Motorola for safer, smarter workplaces.
            </p>
          </div>
        </div>

        {/* Row 2 — 3 cols */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 20 }}>
          {/* ERP */}
          <div style={card}>
            <div
              className="flex items-end"
              style={{ gap: 10, marginBottom: 24, minHeight: 72 }}
            >
              {[
                { h: 52, f: "60%" },
                { h: 62, f: "42%" },
                { h: 68, f: "78%" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{
                    width: 44,
                    height: b.h,
                    borderRadius: 8,
                    background: "#131D36",
                    border: "1px solid #1E2D50",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                      height: b.f,
                      borderRadius: 8,
                      background:
                        "linear-gradient(to top, #4F7BF7, rgba(79,123,247,.3))",
                    }}
                  />
                </div>
              ))}
            </div>
            <h3
              className="text-white font-bold"
              style={{ fontSize: 17, marginBottom: 8 }}
            >
              ERP & Digital Transformation
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7 }}>
              Advanced ERP systems and workflow automation — including our own
              Torch ERP — for financial, HR, supply chain, and operational
              management.
            </p>
          </div>

          {/* Cybersecurity */}
          <div style={card}>
            <div
              className="flex items-center justify-center"
              style={{ marginBottom: 24, minHeight: 72 }}
            >
              <div style={iconBox(64)}>
                <Icon name="lock" />
              </div>
            </div>
            <h3
              className="text-white font-bold"
              style={{ fontSize: 17, marginBottom: 8 }}
            >
              Cybersecurity Solutions
            </h3>
            <p style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7 }}>
              AI-driven threat protection, 24/7 SOC monitoring, and
              enterprise-grade cybersecurity with a 99.7% protection rate
              against modern risks.
            </p>
          </div>

          {/* Archiving */}
          <div style={card}>
            <div style={{ marginBottom: 20 }}>
              {[
                {
                  label: "Documents",
                  color: "#fff",
                  time: "Secure",
                  text: "Digitized & indexed for instant retrieval",
                },
                {
                  label: "Archives",
                  color: "#4F7BF7",
                  text: "Long-term preservation with full compliance",
                },
                {
                  label: "Records",
                  color: "#F59E0B",
                  text: "Automated classification & metadata tagging",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#080E1E",
                    borderRadius: 10,
                    padding: "10px 14px",
                    border: "1px solid #151F3A",
                    marginBottom: 8,
                  }}
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: 2 }}
                  >
                    <span
                      style={{
                        color: item.color,
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </span>
                    {item.time && (
                      <span style={{ color: "#3A4A6A", fontSize: 10 }}>
                        {item.time}
                      </span>
                    )}
                  </div>
                  <p style={{ color: "#4A5A7A", fontSize: 10 }}>{item.text}</p>
                </div>
              ))}
            </div>
            <h3
              className="text-white font-bold"
              style={{ fontSize: 17, marginBottom: 6 }}
            >
              Archiving Solutions
            </h3>
            <span
              className="inline-flex items-center"
              style={{
                gap: 6,
                color: "#34D399",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#34D399",
                  boxShadow: "0 0 6px rgba(52,211,153,.5)",
                }}
                className="animate-pulse"
              />
              Store, Manage & Retrieve
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Products (Home Preview — 6 items) ─── */
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)))
      .catch(() => {});
  }, []);

  return (
    <section id="products" style={{ padding: "96px 0", background: "#060B18" }}>
      <Container>
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 48 }}>
          <h2
            className="text-white font-bold"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", marginBottom: 16 }}
          >
            Our Products
          </h2>
          <p
            style={{
              color: "#6B7A99",
              fontSize: 15,
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Explore Our Full Range Of Document Scanners From The World's Leading
            Brands.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: 20 }}
        >
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/products/${p.id}`}
              style={{
                ...card,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "border-color 0.2s, box-shadow 0.2s",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2A3F6F";
                e.currentTarget.style.boxShadow =
                  "0 4px 24px rgba(79,123,247,.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1A2744";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: 10,
                  marginBottom: 20,
                  overflow: "hidden",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Brand badge */}
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#8BAAFE",
                  background: "rgba(79,123,247,.1)",
                  border: "1px solid rgba(79,123,247,.15)",
                  marginBottom: 12,
                  alignSelf: "flex-start",
                }}
              >
                {p.brand}
              </span>

              {/* Name */}
              <h3
                className="text-white font-bold"
                style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}
              >
                {p.name}
              </h3>

              {/* Description as bullet points */}
              <ul
                style={{
                  color: "#6B7A99",
                  fontSize: 13,
                  lineHeight: 1.9,
                  flex: 1,
                  listStyle: "disc",
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                {p.short_description
                  .split("\n")
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((point, i) => (
                    <li key={i} style={{ color: "#fff" }}>
                      <span style={{ color: "#6B7A99" }}>{point}</span>
                    </li>
                  ))}
              </ul>

              {/* Category tag */}
              <div
                style={{
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: "1px solid #1A2744",
                }}
              >
                <span style={{ color: "#3A4A6A", fontSize: 11 }}>
                  {p.category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products Button */}
        <div className="text-center" style={{ marginTop: 48 }}>
          <Link
            to="/products"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 36px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              background: "#4F7BF7",
              color: "#fff",
              boxShadow: "0 0 30px rgba(79,123,247,.35)",
              transition: "all 0.2s",
            }}
          >
            All Products
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ─── About Us ─── */
function About() {
  const values = [
    {
      icon: "star",
      title: "Innovation",
      desc: "Continuously enhancing products and services, embracing creativity and new technologies for modern business challenges.",
    },
    {
      icon: "bolt",
      title: "Excellence",
      desc: "Maintaining the highest quality standards in products, services, and support with exceptional customer experience.",
    },
    {
      icon: "wifi",
      title: "Reliability",
      desc: "Providing consistent around-the-clock technical support and accountability in every engagement.",
    },
  ];

  return (
    <section id="about" style={{ padding: "96px 0", background: "#060B18" }}>
      <Container>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: 56, alignItems: "center" }}
        >
          <div>
            <h2
              className="text-white font-bold"
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              About{" "}
              <span style={{ color: "#4F7BF7" }}>Digital Information</span>
            </h2>
            <p
              style={{
                color: "#6B7A99",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: 460,
              }}
            >
              Founded in 2020, Digital Information has grown from a specialized
              technology provider into one of Iraq's most diversified technology
              companies — delivering digital transformation, ERP, archiving,
              cybersecurity, and electronics solutions.
            </p>
            <p
              style={{
                color: "#6B7A99",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 40,
                maxWidth: 460,
              }}
            >
              Our mission is to empower businesses with smart, secure, and
              scalable technology solutions that help them digitize operations,
              protect assets, and accelerate growth across Iraq and the region.
            </p>

            <div className="flex" style={{ gap: 56, marginBottom: 40 }}>
              {[
                { label: "Projects Completed", value: "50+" },
                { label: "Client Satisfaction", value: "98%" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{ color: "#6B7A99", fontSize: 12, marginBottom: 8 }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="text-white font-semibold rounded-full cursor-pointer"
              style={{
                display: "inline-block",
                padding: "13px 28px",
                background: "transparent",
                border: "1px solid #1A2744",
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              Get In Touch
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {values.map((f) => (
              <div
                key={f.title}
                className="flex items-start"
                style={{ ...card, padding: 20, gap: 16 }}
              >
                <div style={iconBox(44)}>
                  <Icon name={f.icon} />
                </div>
                <div>
                  <h3
                    className="text-white font-bold"
                    style={{ fontSize: 15, marginBottom: 6 }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{ color: "#6B7A99", fontSize: 13, lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "#050A15", borderTop: "1px solid #1A2744" }}
    >
      <Container>
        <div
          className="grid grid-cols-1 md:grid-cols-4"
          style={{ gap: 40, padding: "64px 0 48px" }}
        >
          {/* Company */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src="/diginfo logo.webp"
                alt="Digital Information"
                style={{
                  height: 18,
                  objectFit: "contain",
                }}
              />
            </div>
            <p style={{ color: "#5A6A8A", fontSize: 13, lineHeight: 1.7 }}>
              Iraq's leading technology provider — combining innovation,
              security, and integration since 2020.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold"
              style={{ fontSize: 14, marginBottom: 16 }}
            >
              Services
            </h4>
            {[
              "Document Scanners",
              "Security Electronics",
              "ERP Solutions",
              "Cybersecurity",
              "Archiving Solutions",
            ].map((s) => (
              <p
                key={s}
                style={{ color: "#5A6A8A", fontSize: 13, marginBottom: 10 }}
              >
                {s}
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold"
              style={{ fontSize: 14, marginBottom: 16 }}
            >
              Quick Links
            </h4>
            {[
              { label: "Home", href: "#" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "All Products", href: "/products" },
            ].map((l) =>
              l.href.startsWith("/") ? (
                <Link
                  key={l.label}
                  to={l.href}
                  style={{
                    display: "block",
                    color: "#5A6A8A",
                    fontSize: 13,
                    marginBottom: 10,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "block",
                    color: "#5A6A8A",
                    fontSize: 13,
                    marginBottom: 10,
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              ),
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white font-bold"
              style={{ fontSize: 14, marginBottom: 16 }}
            >
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href="mailto:info@diginfoiq.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#5A6A8A",
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F7BF7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@diginfoiq.com
              </a>
              <a
                href="tel:+9647811070080"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#5A6A8A",
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F7BF7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +964 781 107 0080
              </a>
              <a
                href="https://diginfoiq.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#5A6A8A",
                  fontSize: 13,
                  textDecoration: "none",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4F7BF7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
                diginfoiq.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1A2744",
            padding: "24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ color: "#3A4A6A", fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Digital Information. All rights
            reserved.
          </p>
          <p style={{ color: "#3A4A6A", fontSize: 12 }}>
            Digital Transformation Company in Iraq
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ─── Icon lookup (keeps JSX clean) ─── */
function Icon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const social = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
  };

  const map = {
    users: (
      <svg {...props}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    lock: (
      <svg {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    search: (
      <svg {...props}>
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21L16.65 16.65" />
      </svg>
    ),
    radar: (
      <svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2V12L18 18" />
      </svg>
    ),
    bolt: (
      <svg {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    filter: (
      <svg {...props}>
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    trend: (
      <svg {...props}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    wifi: (
      <svg {...props}>
        <path d="M5 12.55a11 11 0 0114.08 0" />
        <path d="M1.42 9a16 16 0 0121.16 0" />
        <path d="M8.53 16.11a6 6 0 016.95 0" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
    star: (
      <svg {...props}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    vote: (
      <svg {...props}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    fire: (
      <svg {...props}>
        <path d="M12 22c4-4 8-7.33 8-12A8 8 0 004 10c0 4.67 4 8 8 12z" />
        <path d="M12 22c-2-2-4-3.67-4-6a4 4 0 018 0c0 2.33-2 4-4 6z" />
      </svg>
    ),
    x: (
      <svg {...social}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    discord: (
      <svg {...social}>
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
      </svg>
    ),
    facebook: (
      <svg {...social}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    telegram: (
      <svg {...social}>
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    linkedin: (
      <svg {...social}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    youtube: (
      <svg {...social}>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };
  return map[name] || null;
}

/* ─── Page ─── */
export default function Home() {
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
      <Hero />
      <Stats />
      <Services />
      <Products />
      <About />
      <Footer />
    </div>
  );
}
