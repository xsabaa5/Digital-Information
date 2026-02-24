import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

const iconBox = {
  width: 48,
  height: 48,
  borderRadius: 12,
  background: "rgba(79,123,247,.1)",
  border: "1px solid rgba(79,123,247,.15)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#4F7BF7",
  flexShrink: 0,
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid #1A2744",
  background: "#080E1E",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(form.subject || "Contact Form Inquiry");
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@diginfoiq.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Visit Our Office",
      lines: ["Baghdad, Iraq", "Al-Mansour District"],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "Call Us",
      lines: ["+964 781 107 0080"],
      href: "tel:+9647811070080",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email Us",
      lines: ["info@diginfoiq.com"],
      href: "mailto:info@diginfoiq.com",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Working Hours",
      lines: ["Sun – Thu: 9:00 AM – 5:00 PM", "Fri – Sat: Closed"],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/diginfoiq",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/diginfoiq",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/diginfoiq",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
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
            Get In Touch
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
            Contact <span style={{ color: "#4F7BF7" }}>Us</span>
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
            Have a question or need a custom solution? Reach out to our team and
            we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* Contact Info Cards */}
        <section style={{ marginBottom: 64 }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ gap: 16 }}
          >
            {contactInfo.map((item, i) => (
              <div
                key={i}
                style={{
                  ...card,
                  padding: 24,
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#2A3F6F";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(79,123,247,.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#1A2744";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ ...iconBox, marginBottom: 16 }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                {item.lines.map((line, j) =>
                  item.href ? (
                    <a
                      key={j}
                      href={item.href}
                      style={{
                        display: "block",
                        color: "#8492af",
                        fontSize: 16,
                        lineHeight: 1.7,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#4F7BF7")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A99")}
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={j}
                      style={{
                        color: "#8492af",
                        fontSize: 16,
                        lineHeight: 1.7,
                      }}
                    >
                      {line}
                    </p>
                  )
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section style={{ marginBottom: 64 }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: 24 }}
          >
            {/* Contact Form */}
            <div style={{ ...card, padding: 36 }}>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 8,
                  letterSpacing: "-0.02em",
                }}
              >
                Send Us a Message
              </h2>
              <p
                style={{
                  color: "#8492af",
                  fontSize: 16,
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Fill out the form below and our team will respond within 24
                hours.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: 16 }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#9AABBF",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === "name" ? "#4F7BF7" : "#1A2744",
                      }}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#9AABBF",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === "email" ? "#4F7BF7" : "#1A2744",
                      }}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{ gap: 16 }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#9AABBF",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+964 XXX XXX XXXX"
                      style={{
                        ...inputStyle,
                        borderColor: focused === "phone" ? "#4F7BF7" : "#1A2744",
                      }}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#9AABBF",
                        marginBottom: 8,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === "subject" ? "#4F7BF7" : "#1A2744",
                      }}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "#9AABBF",
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                      borderColor: focused === "message" ? "#4F7BF7" : "#1A2744",
                    }}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "14px 36px",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 600,
                    background: "#4F7BF7",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 30px rgba(79,123,247,.35)",
                    transition: "all 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 40px rgba(79,123,247,.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 30px rgba(79,123,247,.35)";
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + Social */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Map */}
              <div
                style={{
                  ...card,
                  padding: 0,
                  overflow: "hidden",
                  flex: 1,
                  minHeight: 300,
                }}
              >
                <iframe
                  title="Digital Information Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.5!2d44.3661!3d33.3152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzU0LjciTiA0NMKwMjEnNTguMCJF!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: 300,
                    border: "none",
                    filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div style={{ ...card, padding: 24 }}>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    marginBottom: 16,
                  }}
                >
                  Follow Us
                </h3>
                <div style={{ display: "flex", gap: 12 }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "#080E1E",
                        border: "1px solid #1A2744",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#6B7A99",
                        textDecoration: "none",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#4F7BF7";
                        e.currentTarget.style.color = "#4F7BF7";
                        e.currentTarget.style.background = "rgba(79,123,247,.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#1A2744";
                        e.currentTarget.style.color = "#6B7A99";
                        e.currentTarget.style.background = "#080E1E";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
              Ready to Transform Your Business?
            </h2>
            <p
              style={{
                color: "#8492af",
                fontSize: 16,
                marginBottom: 28,
                maxWidth: 480,
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              From document scanning to cybersecurity — Digital Information
              provides end-to-end technology solutions for businesses across
              Iraq.
            </p>
            <Link
              to="/products"
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
              Explore Our Products
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
