import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050A15] border-t border-[#1A2744]">
      <div className="w-full px-6 max-w-280 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-16 pb-12">
          {/* Company */}
          <div className="col-span-1">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 mb-4 no-underline"
            >
              <img
                src="/diginfo logo.webp"
                alt="Digital Information"
                className="h-4.5 object-contain"
              />
            </Link>
            <p className="text-[#8A9BBF] text-[15px] leading-[1.7]">
              Iraq's leading technology provider — combining innovation,
              security, and integration since 2020.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.facebook.com/diginfoiq"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6B7A99] no-underline transition-all duration-200 hover:border-[#4F7BF7] hover:text-[#4F7BF7] hover:bg-[rgba(79,123,247,.08)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/diginfoiq"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6B7A99] no-underline transition-all duration-200 hover:border-[#4F7BF7] hover:text-[#4F7BF7] hover:bg-[rgba(79,123,247,.08)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://t.me/diginfoiq"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#6B7A99] no-underline transition-all duration-200 hover:border-[#4F7BF7] hover:text-[#4F7BF7] hover:bg-[rgba(79,123,247,.08)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-base mb-4.5">Solutions</h4>
            {[
              { label: "Security Electronics", href: "/security-electronics" },
              { label: "ERP Solutions", href: "/erp-digital-transformation" },
              { label: "Cybersecurity", href: "/cybersecurity" },
              { label: "Archiving Solutions", href: "/archiving-systems" },
              { label: "Document Scanners", href: "/products" },
            ].map((s) => (
              <Link
                key={s.label}
                to={s.href}
                className="block text-[#8A9BBF] text-[15px] mb-3 no-underline"
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4.5">
              Quick Links
            </h4>
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="block text-[#8A9BBF] text-[15px] mb-3 no-underline"
            >
              Home
            </Link>
            <a
              href="#about"
              className="block text-[#8A9BBF] text-[15px] mb-3 no-underline"
            >
              About Us
            </a>
            <Link
              to="/products"
              className="block text-[#8A9BBF] text-[15px] mb-3 no-underline"
            >
              All Products
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4.5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5 text-[#8A9BBF] text-[15px]">
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
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Baghdad, Karrada, Al-Sinaa Street
              </div>
              <a
                href="tel:+9647811070080"
                className="flex items-center gap-2.5 text-[#8A9BBF] text-[15px] no-underline"
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
                className="flex items-center gap-2.5 text-[#8A9BBF] text-[15px] no-underline"
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
        <div className="border-t border-[#1A2744] py-6 flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
          <p className="text-[#8A9BBF] text-[15px]">
            &copy; {new Date().getFullYear()} Digital Information. All rights
            reserved.
          </p>
          <p className="text-[#5A6A8A] text-base">
            This site Powered by{" "}
            <a
              href="https://torchcorp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-['Chromia',sans-serif] no-underline transition-colors duration-200 hover:text-[#AE71FFFF]"
            >
              TORCHCORP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
