import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const card = {
  background: "#0B1222",
  border: "1px solid #1A2744",
  borderRadius: 16,
  padding: 28,
};

const tabBase = {
  padding: "12px 24px",
  borderRadius: 10,
  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",
  border: "none",
  transition: "all 0.2s",
  letterSpacing: "0.02em",
};

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const [activeTab, setActiveTab] = useState("features");
  const THUMB_COUNT = 9;

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProduct(found || null);
      })
      .catch(() => {});
  }, [id]);

  if (!product) {
    return (
      <div
        style={{
          background: "#060B18",
          minHeight: "100vh",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "#5A6A8A", fontSize: 16 }}>Loading...</p>
      </div>
    );
  }

  const descBullets = product.short_description
    ? product.short_description.split("\n").filter(Boolean)
    : [];

  const tabs = [
    { key: "features", label: "Features" },
    { key: "specs", label: "Specifications" },
    ...(product.brochures?.length ? [{ key: "brochures", label: "Brochures" }] : []),
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

      {/* Breadcrumb */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "92px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3A4A6A" }}>
          <Link to="/" style={{ color: "#5A6A8A", textDecoration: "none" }}>Home</Link>
          <span>/</span>
          <Link to="/products" style={{ color: "#5A6A8A", textDecoration: "none" }}>Products</Link>
          <span>/</span>
          <span style={{ color: "#8BAAFE" }}>{product.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "32px 24px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div
              style={{
                ...card,
                padding: 0,
                overflow: "hidden",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                }}
              >
                <img
                  src={product.images?.[activeImg] || product.image}
                  alt={product.name}
                  style={{
                    maxWidth: "85%",
                    maxHeight: "85%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {/* Left arrow */}
                {product.images.length > THUMB_COUNT && (
                  <button
                    onClick={() =>
                      setThumbStart((prev) => Math.max(0, prev - THUMB_COUNT))
                    }
                    disabled={thumbStart === 0}
                    style={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      borderRadius: 8,
                      border: "1px solid #1A2744",
                      background: thumbStart === 0 ? "transparent" : "#0B1222",
                      color: thumbStart === 0 ? "#2A3352" : "#8BAAFE",
                      cursor: thumbStart === 0 ? "default" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}

                {/* Visible thumbnails */}
                <div style={{ display: "flex", gap: 8, flex: 1, justifyContent: "center" }}>
                  {product.images
                    .slice(thumbStart, thumbStart + THUMB_COUNT)
                    .map((img, i) => {
                      const realIndex = thumbStart + i;
                      return (
                        <button
                          key={realIndex}
                          onClick={() => setActiveImg(realIndex)}
                          style={{
                            width: 72,
                            height: 72,
                            flexShrink: 0,
                            borderRadius: 10,
                            border:
                              realIndex === activeImg
                                ? "2px solid #4F7BF7"
                                : "1px solid #1A2744",
                            background: "#fff",
                            cursor: "pointer",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 4,
                          }}
                        >
                          <img
                            src={img}
                            alt={`${product.name} ${realIndex + 1}`}
                            style={{
                              maxWidth: "100%",
                              maxHeight: "100%",
                              objectFit: "contain",
                            }}
                          />
                        </button>
                      );
                    })}
                </div>

                {/* Right arrow */}
                {product.images.length > THUMB_COUNT && (
                  <button
                    onClick={() =>
                      setThumbStart((prev) =>
                        Math.min(product.images.length - THUMB_COUNT, prev + THUMB_COUNT)
                      )
                    }
                    disabled={thumbStart + THUMB_COUNT >= product.images.length}
                    style={{
                      width: 32,
                      height: 32,
                      flexShrink: 0,
                      borderRadius: 8,
                      border: "1px solid #1A2744",
                      background:
                        thumbStart + THUMB_COUNT >= product.images.length
                          ? "transparent"
                          : "#0B1222",
                      color:
                        thumbStart + THUMB_COUNT >= product.images.length
                          ? "#2A3352"
                          : "#8BAAFE",
                      cursor:
                        thumbStart + THUMB_COUNT >= product.images.length
                          ? "default"
                          : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Brand badge */}
            <span
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                color: "#8BAAFE",
                background: "rgba(79,123,247,.1)",
                border: "1px solid rgba(79,123,247,.15)",
                marginBottom: 16,
              }}
            >
              {product.brand}
            </span>

            {/* Name */}
            <h1
              style={{
                fontSize: 28,
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: 8,
                letterSpacing: "-0.02em",
              }}
            >
              {product.name}
            </h1>

            {/* Sub title */}
            {product.sub_title && (
              <p style={{ color: "#5A6A8A", fontSize: 14, marginBottom: 16 }}>
                {product.sub_title}
              </p>
            )}

            {/* Part number */}
            {product.part_number && (
              <p style={{ color: "#3A4A6A", fontSize: 13, marginBottom: 20 }}>
                Part Number:{" "}
                <span style={{ color: "#8BAAFE" }}>{product.part_number}</span>
              </p>
            )}

            {/* Quick specs row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {product.product_type && (
                <QuickSpec label="Type" value={product.product_type} />
              )}
              {product.document_size && (
                <QuickSpec label="Doc Size" value={product.document_size} />
              )}
              {product.speed && (
                <QuickSpec label="Speed" value={product.speed} />
              )}
              {product.colored && (
                <QuickSpec label="Color" value={product.colored} />
              )}
              {product.simplexduplex && (
                <QuickSpec label="Scan" value={product.simplexduplex} />
              )}
            </div>

            {/* Divider */}
            <div
              style={{
                borderTop: "1px solid #1A2744",
                paddingTop: 24,
                marginBottom: 8,
              }}
            />

            {/* Short description bullets */}
            {descBullets.length > 0 && (
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
                {descBullets.map((line, i) => (
                  <li
                    key={i}
                    style={{
                      color: "#9AABBF",
                      fontSize: 14,
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
                        fontWeight: 700,
                      }}
                    >
                      •
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            )}

            {/* Category + Tags */}
            <div
              style={{
                marginTop: 28,
                paddingTop: 20,
                borderTop: "1px solid #1A2744",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {product.category && (
                <span
                  style={{
                    color: "#3A4A6A",
                    fontSize: 11,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "rgba(255,255,255,.04)",
                  }}
                >
                  {product.category}
                </span>
              )}
              {product.tags &&
                product.tags.split(", ").map((tag) => (
                  <span
                    key={tag}
                    style={{
                      color: "#3A4A6A",
                      fontSize: 11,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(255,255,255,.04)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div style={{ marginBottom: 48 }}>
          {/* Tab Headers */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 24,
              borderBottom: "1px solid #1A2744",
              paddingBottom: 0,
            }}
          >
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  ...tabBase,
                  borderRadius: "10px 10px 0 0",
                  background:
                    activeTab === key ? "#0B1222" : "transparent",
                  color: activeTab === key ? "#8BAAFE" : "#5A6A8A",
                  borderBottom:
                    activeTab === key
                      ? "2px solid #4F7BF7"
                      : "2px solid transparent",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div style={{ ...card }}>
            {activeTab === "features" && (
              <div>
                {product.description ? (
                  <div
                    style={{
                      color: "#9AABBF",
                      fontSize: 14,
                      lineHeight: 1.8,
                    }}
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                ) : (
                  <p style={{ color: "#3A4A6A", fontSize: 14 }}>
                    No detailed features available for this product.
                  </p>
                )}
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                {product.specs?.length > 0 ? (
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                    }}
                  >
                    <tbody>
                      {product.specs.map((spec, i) => (
                        <tr
                          key={i}
                          style={{
                            borderBottom:
                              i < product.specs.length - 1
                                ? "1px solid #1A2744"
                                : "none",
                          }}
                        >
                          <td
                            style={{
                              padding: "14px 16px",
                              color: "#5A6A8A",
                              fontSize: 13,
                              fontWeight: 600,
                              width: "35%",
                              verticalAlign: "top",
                            }}
                          >
                            {spec.name}
                          </td>
                          <td
                            style={{
                              padding: "14px 16px",
                              color: "#9AABBF",
                              fontSize: 13,
                            }}
                          >
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p style={{ color: "#3A4A6A", fontSize: 14 }}>
                    No specifications available.
                  </p>
                )}
              </div>
            )}

            {activeTab === "brochures" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {product.brochures?.length > 0 ? (
                  product.brochures.map((br, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 14,
                        padding: "16px 20px",
                        borderRadius: 12,
                        background: "rgba(79,123,247,.06)",
                        border: "1px solid rgba(79,123,247,.12)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4F7BF7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span
                          style={{
                            color: "#8BAAFE",
                            fontSize: 14,
                            fontWeight: 500,
                          }}
                        >
                          {br.name}
                        </span>
                      </div>
                      {br.url && (
                        <a
                          href={br.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            padding: "8px 20px",
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 600,
                            background: "#4F7BF7",
                            color: "#fff",
                            textDecoration: "none",
                            transition: "background 0.2s",
                            flexShrink: 0,
                          }}
                        >
                          Download
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p style={{ color: "#3A4A6A", fontSize: 14 }}>
                    No brochures available.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Accessories Section */}
        {product.accessories?.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Accessories
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
              }}
            >
              {product.accessories.map((acc, i) => (
                <div key={i} style={{ ...card, padding: 20 }}>
                  {acc.part_number && (
                    <p
                      style={{
                        color: "#4F7BF7",
                        fontSize: 12,
                        fontWeight: 600,
                        marginBottom: 8,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {acc.part_number}
                    </p>
                  )}
                  <p
                    style={{
                      color: "#9AABBF",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consumables Section */}
        {product.consumables?.length > 0 && (
          <div style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Consumables
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
              }}
            >
              {product.consumables.map((con, i) => (
                <div key={i} style={{ ...card, padding: 20 }}>
                  {con.name && (
                    <p
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: 600,
                        marginBottom: 6,
                      }}
                    >
                      {con.name}
                    </p>
                  )}
                  {con.part_number && (
                    <p
                      style={{
                        color: "#4F7BF7",
                        fontSize: 12,
                        fontWeight: 600,
                        marginBottom: 8,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {con.part_number}
                    </p>
                  )}
                  {con.description && (
                    <p
                      style={{
                        color: "#9AABBF",
                        fontSize: 13,
                        lineHeight: 1.6,
                      }}
                    >
                      {con.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Quick spec pill ─── */
function QuickSpec({ label, value }) {
  return (
    <div
      style={{
        padding: "8px 14px",
        borderRadius: 10,
        background: "rgba(255,255,255,.03)",
        border: "1px solid #1A2744",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <span style={{ color: "#3A4A6A", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </span>
      <span style={{ color: "#9AABBF", fontSize: 13, fontWeight: 500 }}>
        {value}
      </span>
    </div>
  );
}
