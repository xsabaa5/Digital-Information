import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const solutionPages = [
  { label: "Archiving Systems Software", href: "/archiving-systems" },
  {
    label: "ERP & Digital Transformation Software",
    href: "/erp-digital-transformation",
  },
  { label: "Security & Office Electronics", href: "/security-electronics" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Scanners", href: "/products" },
];

const dropdownItemStyle = {
  display: "block",
  padding: "12px 20px",
  color: "#9AABBF",
  fontSize: 17,
  textDecoration: "none",
  transition: "background 0.15s, color 0.15s",
};

export default function Navbar() {
  const [solOpen, setSolOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        background: "rgba(6,11,24,0.50)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1120px",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
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
        </Link>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {isHome ? (
            <a
              href="#"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 18,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              Home
            </a>
          ) : (
            <Link
              to="/"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 18,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              Home
            </Link>
          )}

          {isHome ? (
            <a
              href="#about"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 18,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              About Us
            </a>
          ) : (
            <Link
              to="/#about"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 18,
                fontWeight: 400,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              About Us
            </Link>
          )}

          {/* Solutions dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <button
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 18,
                fontWeight: 400,
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              Solutions
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transition: "transform 0.2s",
                  transform: solOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {solOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  paddingTop: 12,
                }}
              >
                <div
                  style={{
                    background: "#0B1222",
                    border: "1px solid #1A2744",
                    borderRadius: 12,
                    padding: "8px 0",
                    minWidth: 260,
                    boxShadow: "0 12px 40px rgba(0,0,0,.5)",
                  }}
                >
                  {solutionPages.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      style={dropdownItemStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(79,123,247,.08)";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#9AABBF";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/contact-us"
          style={{
            background: "#0075FFFF",
            color: "#fff",
            fontSize: 17,
            fontWeight: 600,
            padding: "10px 24px",
            borderRadius: 999,
            border: "none",
            cursor: "pointer",
            boxShadow:
              "0 0 20px rgba(79,123,247,.35), 0 4px 12px rgba(79,123,247,.2)",
            letterSpacing: "0.01em",
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
