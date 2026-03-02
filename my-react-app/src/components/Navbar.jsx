import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const productPages = [
  {
    label: "Archiving Systems Software",
    desc: "Document management & digital archiving",
    href: "/archiving-systems",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18v4H3z" />
        <path d="M3 7v13a1 1 0 001 1h16a1 1 0 001-1V7" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    label: "ERP & Digital Transformation Software",
    desc: "Enterprise resource planning & digital solutions",
    href: "/erp-digital-transformation",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="8" height="6" rx="1" />
        <rect x="14" y="3" width="8" height="6" rx="1" />
        <rect x="8" y="15" width="8" height="6" rx="1" />
        <path d="M6 9v3h12V9" />
        <path d="M12 12v3" />
      </svg>
    ),
  },
  {
    label: "Security & Office Electronics",
    desc: "Surveillance, access control & office tech",
    href: "/security-electronics",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14" />
        <rect x="3" y="7" width="12" height="10" rx="2" />
      </svg>
    ),
  },
  {
    label: "Cybersecurity",
    desc: "Threat intelligence & digital protection",
    href: "/cybersecurity",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Scanners",
    desc: "High-speed document & image scanning",
    href: "/products",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M7 6V4a1 1 0 011-1h8a1 1 0 011 1v2" />
        <path d="M2 12h20" />
        <path d="M7 16h.01" />
        <path d="M11 16h2" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", hash: "home", href: "/" },
  { label: "About", hash: "about", href: "/#about" },
  { label: "Solutions", hasDropdown: true },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track scroll for navbar bg change
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileProductsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hamburger line positions (two-line X animation like alseraj.ae)
  const line1Top = mobileOpen ? 19 : 14;
  const line1Transform = `translateX(-50%) ${mobileOpen ? "rotate(45deg)" : "rotate(0)"}`;
  const line2Top = mobileOpen ? 19 : 20;
  const line2Transform = `translateX(-50%) ${mobileOpen ? "rotate(-45deg)" : "rotate(0)"}`;

  const hoverTimeout = React.useRef(null);

  const handleNavClick = (item) => {
    if (item.hash === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.hash && isHome) {
      const el = document.getElementById(item.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ─── DESKTOP + MOBILE NAV BAR ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-1000 flex items-center justify-between px-4 py-3 transition-all duration-300 sm:px-10 sm:py-4 ${
          scrolled
            ? "border-b border-white/6 bg-[rgba(10,10,15,0.2)] backdrop-blur-[20px]"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 no-underline"
        >
          <img
            src="/diginfo logo.webp"
            alt="Digital Information Logo"
            className="h-5 w-auto max-w-35 sm:h-6 sm:max-w-42.5 lg:max-w-none object-contain"
          />
        </Link>

        {/* ─── Desktop Center Nav ─── */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex font-medium list-none m-0 p-0">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(hoverTimeout.current);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  hoverTimeout.current = setTimeout(
                    () => setDropdownOpen(false),
                    150,
                  );
                }}
              >
                <button className="rounded-md px-3.5 py-2 text-[15px] text-white/75 transition-all duration-300 hover:text-white cursor-pointer bg-transparent border-none flex items-center gap-1.5 font-semibold tracking-wide">
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Desktop Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${
                    dropdownOpen
                      ? "visible opacity-100 translate-y-0"
                      : "invisible opacity-0 -translate-y-2"
                  }`}
                >
                  <div className="w-90 rounded-xl border border-white/10 bg-[#060B18] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    {productPages.map((prod) => (
                      <Link
                        key={prod.label}
                        to={prod.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-white/8 group no-underline"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors duration-200 group-hover:border-white/20 group-hover:bg-white/10">
                          <span className="text-base text-white/50 group-hover:text-white/90 transition-colors duration-200">
                            {prod.icon}
                          </span>
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-white/90 m-0 leading-tight">
                            {prod.label}
                          </p>
                          <p className="text-[12px] text-white/45 m-0 mt-0.5 leading-tight">
                            {prod.desc}
                          </p>
                        </div>
                      </Link>
                    ))}

                    {/* View All */}
                    <Link
                      to="/products"
                      onClick={() => setDropdownOpen(false)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[12px] text-white/40 transition-all duration-200 hover:bg-white/5 hover:text-white/70 no-underline mt-1"
                    >
                      View All Products
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                {item.hash && isHome ? (
                  <a
                    href={`#${item.hash}`}
                    onClick={() => handleNavClick(item)}
                    className="rounded-md px-3.5 py-2 text-[15px] text-white/75 transition-all duration-300 hover:text-white cursor-pointer no-underline font-semibold tracking-wide"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className="rounded-md px-3.5 py-2 text-[15px] text-white/75 transition-all duration-300 hover:text-white no-underline font-semibold tracking-wide"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ),
          )}
        </ul>

        {/* ─── Desktop Right Buttons ─── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact-us"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-2.5 text-[14px] font-semibold text-white/90 transition-all duration-300 hover:border-white/20 hover:bg-white/10 no-underline tracking-wide"
          >
            Contact Us
          </Link>
        </div>

        {/* ─── Hamburger (mobile only) ─── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-1001 block h-10 w-10 cursor-pointer border-none bg-transparent p-2 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className="absolute left-1/2 block h-px w-4.25 bg-white transition-all duration-300"
            style={{ top: line1Top, transform: line1Transform }}
          />
          <span
            className="absolute left-1/2 block h-px w-4.25 bg-white transition-all duration-300"
            style={{ top: line2Top, transform: line2Transform }}
          />
        </button>
      </nav>

      {/* ─── MOBILE FULLSCREEN OVERLAY ─── */}
      <div
        className={`fixed inset-0 z-999 flex flex-col items-center justify-center bg-[#060B18]/98 backdrop-blur-2xl transition-all duration-400 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Nav Items */}
        <nav className="flex flex-col items-center">
          {navLinks.map((item, idx) =>
            item.hasDropdown ? (
              <div key={item.label} className="flex flex-col items-center">
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`px-10 py-4 text-[clamp(20px,5vw,28px)] font-extralight text-white transition-all duration-400 hover:text-white/50 cursor-pointer bg-transparent border-none flex items-center gap-2 ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${0.1 + idx * 0.05}s` : "0s",
                  }}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Mobile Products Accordion */}
                <div
                  className={`flex flex-col items-center overflow-hidden transition-all duration-400 ${
                    mobileProductsOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {productPages.map((prod, pIdx) => (
                    <Link
                      key={prod.label}
                      to={prod.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-8 py-2.5 transition-all duration-300 hover:text-white/50 no-underline ${
                        mobileProductsOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-3 opacity-0"
                      }`}
                      style={{
                        transitionDelay: mobileProductsOpen
                          ? `${pIdx * 0.05}s`
                          : "0s",
                      }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                        <span className="text-sm text-white/50">
                          {prod.icon}
                        </span>
                      </div>
                      <span className="text-[clamp(14px,3.5vw,18px)] font-extralight text-white/70">
                        {prod.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <React.Fragment key={item.label}>
                {item.hash && isHome ? (
                  <a
                    href={`#${item.hash}`}
                    onClick={() => {
                      setMobileOpen(false);
                      handleNavClick(item);
                    }}
                    className={`px-10 py-4 text-[clamp(20px,5vw,28px)] font-extralight text-white transition-all duration-400 hover:text-white/50 cursor-pointer no-underline ${
                      mobileOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileOpen
                        ? `${0.1 + idx * 0.05}s`
                        : "0s",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-10 py-4 text-[clamp(20px,5vw,28px)] font-extralight text-white transition-all duration-400 hover:text-white/50 no-underline ${
                      mobileOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileOpen
                        ? `${0.1 + idx * 0.05}s`
                        : "0s",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            ),
          )}
        </nav>

        {/* Divider */}
        <div
          className={`mb-2 mt-6 h-px w-10 bg-white/15 transition-opacity duration-400 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: mobileOpen ? "0.3s" : "0s" }}
        />

        {/* Contact CTA pill */}
        <Link
          to="/contact-us"
          onClick={() => setMobileOpen(false)}
          className={`mt-4 rounded-full border border-white/10 bg-white/6 px-7 py-3.5 text-[15px] text-white/90 transition-all duration-400 hover:bg-white/10 no-underline ${
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: mobileOpen ? "0.32s" : "0s" }}
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}
