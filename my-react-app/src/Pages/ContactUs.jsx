import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      form.subject || "Contact Form Inquiry",
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`,
    );
    window.location.href = `mailto:info@diginfoiq.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const contactInfo = [
    {
      icon: (
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
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Address",
      lines: ["Baghdad, Karrada, Al-Sinaa Street"],
    },
    {
      icon: (
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
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "Phone",
      lines: ["+964 781 107 0080"],
    },
    {
      icon: (
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
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      lines: ["info@diginfoiq.com", "tony@diginfoiq.com"],
      href: "mailto:info@diginfoiq.com",
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
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] mb-6">
            Get In Touch
          </span>
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]">
            Contact <span className="text-[#4F7BF7]">Us</span>
          </h1>
          <p className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto">
            Have a question or need a custom solution? Reach out to our team and
            we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((item, i) => (
              <div
                key={i}
                className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-6 transition-all duration-300 hover:border-[#2A3F6F] hover:shadow-[0_4px_24px_rgba(79,123,247,.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] flex items-center justify-center text-[#4F7BF7] shrink-0 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.lines.map((line, j) =>
                  item.href ? (
                    <a
                      key={j}
                      href={item.href}
                      className="block text-[#8492af] text-base leading-[1.7] no-underline transition-all duration-300 hover:text-[#4F7BF7]"
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={j}
                      className="text-[#8492af] text-base leading-[1.7]"
                    >
                      {line}
                    </p>
                  ),
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-9">
              <h2 className="text-[22px] font-bold mb-2 tracking-[-0.02em]">
                Send Us a Message
              </h2>
              <p className="text-[#8492af] text-base leading-[1.7] mb-7">
                Fill out the form below and our team will respond within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#9AABBF] mb-2 uppercase tracking-[0.05em]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full py-3.5 px-4 rounded-xl border border-[#1A2744] bg-[#080E1E] text-white text-sm outline-none transition-all duration-200 font-[inherit] focus:border-[#4F7BF7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9AABBF] mb-2 uppercase tracking-[0.05em]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full py-3.5 px-4 rounded-xl border border-[#1A2744] bg-[#080E1E] text-white text-sm outline-none transition-all duration-200 font-[inherit] focus:border-[#4F7BF7]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#9AABBF] mb-2 uppercase tracking-[0.05em]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+964 XXX XXX XXXX"
                      className="w-full py-3.5 px-4 rounded-xl border border-[#1A2744] bg-[#080E1E] text-white text-sm outline-none transition-all duration-200 font-[inherit] focus:border-[#4F7BF7]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#9AABBF] mb-2 uppercase tracking-[0.05em]">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="w-full py-3.5 px-4 rounded-xl border border-[#1A2744] bg-[#080E1E] text-white text-sm outline-none transition-all duration-200 font-[inherit] focus:border-[#4F7BF7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#9AABBF] mb-2 uppercase tracking-[0.05em]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    rows={5}
                    className="w-full py-3.5 px-4 rounded-xl border border-[#1A2744] bg-[#080E1E] text-white text-sm outline-none transition-all duration-200 font-[inherit] resize-y min-h-30 focus:border-[#4F7BF7]"
                  />
                </div>

                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white border-none cursor-pointer shadow-[0_0_20px_rgba(79,123,247,.35),0_4px_12px_rgba(79,123,247,.2)] tracking-[0.01em] transition-all duration-200 self-start hover:shadow-[0_0_30px_rgba(79,123,247,.5),0_4px_16px_rgba(79,123,247,.3)]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map + Social */}
            <div className="flex flex-col gap-6">
              {/* Map */}
              <div className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-0 overflow-hidden flex-1 min-h-75">
                <iframe
                  title="Digital Information Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.5!2d44.4395625!3d33.3136875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578110d15d9783:0xe564b68da80e0c80!2sAl+Seraj+Co.+for+Information+Technology+Services+and+Integrated+Solutions!5e0!3m2!1sen!2siq!4v1700000000000!5m2!1sen!2siq"
                  className="w-full h-full min-h-75 border-none"
                  style={{
                    filter:
                      "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-11 h-11 rounded-xl bg-[#080E1E] border border-[#1A2744] flex items-center justify-center text-[#6B7A99] no-underline transition-all duration-200 hover:border-[#4F7BF7] hover:text-[#4F7BF7] hover:bg-[rgba(79,123,247,.08)]"
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
        <section className="text-center py-12">
          <div className="bg-[#0B1222] border border-[rgba(79,123,247,.2)] rounded-2xl py-12 px-8">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[#8492af] text-base mb-7 max-w-130 mx-auto leading-[1.7]">
              From document scanning to cybersecurity — Digital Information
              provides end-to-end technology solutions for businesses across
              Iraq.
            </p>
            <Link
              to="/products"
              className="inline-block py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white no-underline shadow-[0_0_20px_rgba(79,123,247,.35),0_4px_12px_rgba(79,123,247,.2)] tracking-[0.01em]"
            >
              Explore Our Products
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
