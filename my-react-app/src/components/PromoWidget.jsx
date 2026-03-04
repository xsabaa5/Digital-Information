import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const isMobile = () => window.innerWidth < 640;

export default function PromoWidget() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [promo, setPromo] = useState(null);
  const [mobile, setMobile] = useState(isMobile);

  useEffect(() => {
    const handler = () => setMobile(isMobile());
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Pick a random product on mount
  useEffect(() => {
    fetch("/products.json")
      .then((r) => r.json())
      .then((data) => {
        const withImage = data.filter((p) => p.image && p.name);
        const pick = withImage[Math.floor(Math.random() * withImage.length)];
        setPromo({ id: pick.id, name: pick.name, image: pick.image });
      })
      .catch(() => {});
  }, []);

  // Slide in after promo is loaded
  useEffect(() => {
    if (!promo) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, [promo]);

  if (!promo || dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        ...(mobile
          ? { left: "50%", transform: visible ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(120px)" }
          : { left: 24, transform: visible ? "translateY(0)" : "translateY(120px)" }
        ),
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          background: "#fff",
          borderRadius: 16,
          padding: "14px 16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
          width: mobile ? "calc(100vw - 48px)" : undefined,
          minWidth: mobile ? undefined : 280,
          maxWidth: mobile ? 420 : 320,
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: "absolute",
            top: -10,
            left: isAr ? "auto" : 14,
            right: isAr ? 14 : "auto",
            background: "#4F7BF7",
            color: "#fff",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.06em",
            padding: "3px 10px",
            borderRadius: 20,
            textTransform: "uppercase",
          }}
        >
          {isAr ? "منتج مميز" : "Featured"}
        </div>

        {/* Close button */}
        <button
          onClick={() => setDismissed(true)}
          style={{
            position: "absolute",
            top: 8,
            right: isAr ? "auto" : 8,
            left: isAr ? 8 : "auto",
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,0.08)",
            color: "#555",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            lineHeight: 1,
            padding: 0,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {/* Product image */}
        <div
          style={{
            width: 64,
            height: 64,
            flexShrink: 0,
            borderRadius: 10,
            background: "#F5F7FA",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={promo.image}
            alt={promo.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              fontWeight: 700,
              color: "#0B1222",
              lineHeight: 1.35,
              wordBreak: "break-word",
            }}
          >
            {promo.name}
          </p>
          <Link
            to={`/products/${promo.id}`}
            style={{
              display: "inline-block",
              marginTop: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#4F7BF7",
              textDecoration: "none",
            }}
          >
            {isAr ? "استكشف المزيد" : "Explore More"} →
          </Link>
        </div>
      </div>
    </div>
  );
}
