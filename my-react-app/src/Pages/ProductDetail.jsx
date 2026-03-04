import React, { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const card = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function ProductDetail() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const [activeTab, setActiveTab] = useState("features");
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const imgContainerRef = useRef(null);
  const THUMB_COUNT = 5;

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
      <div className="bg-[#060B18] min-h-screen text-white font-sans flex items-center justify-center antialiased">
        <p className="text-[#5A6A8A] text-base">Loading...</p>
      </div>
    );
  }

  const descBullets = product.short_description
    ? product.short_description.split("\n").filter(Boolean)
    : [];

  const tabs = [
    { key: "features", label: t("productDetail.features") },
    { key: "specs", label: t("productDetail.specifications") },
    ...(product.brochures?.length
      ? [{ key: "brochures", label: t("productDetail.brochures") }]
      : []),
  ];

  const activeDescription =
    i18n.language === "ar" && product.description_ar
      ? product.description_ar
      : product.description;

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <style>{`
        .product-description img {
          margin-top: 24px;
          margin-bottom: 24px;
        }
        .product-description ul {
          list-style: disc;
          padding-left: 1.5rem;
          margin: 12px 0 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .product-description li {
          color: #C8D8EE;
          line-height: 1.7;
        }
        .product-description h1,
        .product-description h2,
        .product-description h3 {
          color: #ffffff;
          margin-top: 24px;
          margin-bottom: 10px;
        }
        .product-description p {
          color: #9AABBF;
          margin-bottom: 12px;
        }
      `}</style>
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-280 mx-auto px-6 pt-23">
        <div className="flex items-center gap-2 text-[13px] text-[#3A4A6A]">
          <Link
            to="/"
            className="text-[#5A6A8A] no-underline hover:text-[#8BAAFE] transition-colors"
          >
            {t("productDetail.home")}
          </Link>
          <span>/</span>
          <Link
            to="/products"
            className="text-[#5A6A8A] no-underline hover:text-[#8BAAFE] transition-colors"
          >
            {t("productDetail.products")}
          </Link>
          <span>/</span>
          <span className="text-[#8BAAFE]">{product.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-280 mx-auto px-6 pt-8 pb-16">
        {/* Top grid: image + info */}
        <div className="grid grid-cols-2 gap-10 mb-12">
          {/* Left: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-[#0B1222] border border-[#1A2744] rounded-2xl overflow-hidden mb-3">
              <div
                ref={imgContainerRef}
                className="w-full aspect-4/3 bg-white flex items-center justify-center rounded-2xl relative cursor-crosshair"
                onMouseEnter={() => setZoomActive(true)}
                onMouseLeave={() => setZoomActive(false)}
                onMouseMove={(e) => {
                  if (!imgContainerRef.current) return;
                  const rect = imgContainerRef.current.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setZoomPos({ x, y });
                }}
              >
                <img
                  src={product.images?.[activeImg] || product.image}
                  alt={product.name}
                  className="max-w-[85%] max-h-[85%] object-contain transition-opacity duration-200"
                  style={{ opacity: zoomActive ? 0 : 1 }}
                />
                {zoomActive && (
                  <div
                    className="absolute inset-0 rounded-2xl bg-no-repeat"
                    style={{
                      backgroundImage: `url(${product.images?.[activeImg] || product.image})`,
                      backgroundSize: "170%",
                      backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                    }}
                  />
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="flex items-center gap-2">
                {/* Left arrow */}
                {product.images.length > THUMB_COUNT && (
                  <button
                    onClick={() =>
                      setThumbStart((prev) => Math.max(0, prev - THUMB_COUNT))
                    }
                    disabled={thumbStart === 0}
                    className={`w-8 h-8 shrink-0 rounded-lg border border-[#1A2744] flex items-center justify-center p-0 transition-colors ${
                      thumbStart === 0
                        ? "bg-transparent text-[#2A3352] cursor-default"
                        : "bg-[#0B1222] text-[#8BAAFE] cursor-pointer"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}

                {/* Visible thumbnails */}
                <div className="flex gap-2 flex-1 justify-center">
                  {product.images
                    .slice(thumbStart, thumbStart + THUMB_COUNT)
                    .map((img, i) => {
                      const realIndex = thumbStart + i;
                      return (
                        <button
                          key={realIndex}
                          onClick={() => setActiveImg(realIndex)}
                          className={`w-18 h-18 shrink-0 rounded-[10px] bg-white cursor-pointer overflow-hidden flex items-center justify-center p-1 transition-all ${
                            realIndex === activeImg
                              ? "border-2 border-[#4F7BF7]"
                              : "border border-[#1A2744]"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} ${realIndex + 1}`}
                            className="max-w-full max-h-full object-contain"
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
                        Math.min(
                          product.images.length - THUMB_COUNT,
                          prev + THUMB_COUNT,
                        ),
                      )
                    }
                    disabled={thumbStart + THUMB_COUNT >= product.images.length}
                    className={`w-8 h-8 shrink-0 rounded-lg border border-[#1A2744] flex items-center justify-center p-0 transition-colors ${
                      thumbStart + THUMB_COUNT >= product.images.length
                        ? "bg-transparent text-[#2A3352] cursor-default"
                        : "bg-[#0B1222] text-[#8BAAFE] cursor-pointer"
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
            <span className="inline-block px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,0.1)] border border-[rgba(79,123,247,0.15)] mb-4">
              {product.brand}
            </span>

            {/* Name */}
            <h1 className="text-[28px] font-bold leading-[1.3] mb-2 tracking-[-0.02em]">
              {product.name}
            </h1>

            {/* Sub title */}
            {product.sub_title && (
              <p className="text-[#8A9EC0] text-[15px] mb-4">
                {product.sub_title}
              </p>
            )}

            {/* Part number */}
            {product.part_number && (
              <p className="text-[#7A8AAA] text-[14px] mb-5">
                {t("productDetail.partNumber")}{" "}
                <span className="text-[#8BAAFE]">{product.part_number}</span>
              </p>
            )}

            {/* Quick specs row */}
            <div className="flex flex-wrap gap-2 mb-6">
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
            <div className="border-t border-[#1A2744] pt-6 mb-2" />

            {/* Short description bullets */}
            {descBullets.length > 0 && (
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {descBullets.map((line, i) => (
                  <li
                    key={i}
                    className="text-[#D0DCF0] text-[18px] leading-[1.6] pl-5 relative"
                  >
                    <span className="absolute left-0 text-[#4F7BF7] font-bold">
                      •
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            )}

            {/* Category + Tags */}
            <div className="mt-7 pt-5 border-t border-[#1A2744] flex flex-wrap gap-1.5">
              {product.category && (
                <span className="text-[#6A7A9A] text-xs px-2.5 py-1 rounded-md bg-white/4">
                  {product.category}
                </span>
              )}
              {product.tags &&
                product.tags.split(", ").map((tag) => (
                  <span
                    key={tag}
                    className="text-[#6A7A9A] text-xs px-2.5 py-1 rounded-md bg-white/4"
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-12">
          {/* Tab Headers */}
          <div className="flex gap-2 border-b border-[#1A2744] mb-6">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-7 py-3.5 rounded-t-[10px] text-[15px] font-semibold cursor-pointer border-0 transition-all duration-200 tracking-[0.02em] border-b-2 -mb-px ${
                  activeTab === key
                    ? "bg-[#0B1222] text-[#8BAAFE] border-[#4F7BF7]"
                    : "bg-transparent text-[#5A6A8A] border-transparent hover:text-[#8BAAFE]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className={card}>
            {activeTab === "features" && (
              <div>
                {activeDescription ? (
                  <div
                    className="product-description text-[#9AABBF] text-lg leading-[1.8]"
                    dangerouslySetInnerHTML={{ __html: activeDescription }}
                  />
                ) : (
                  <p className="text-[#3A4A6A] text-sm">
                    {t("productDetail.noFeatures")}
                  </p>
                )}
              </div>
            )}

            {activeTab === "specs" && (
              <div>
                {(() => {
                  const topFields = [
                    { name: "Scanner Type", value: product.product_type },
                    { name: "Scanning Color Mode", value: product.colored },
                    { name: "Document Size", value: product.document_size },
                    { name: "Scanning Speed", value: product.speed },
                    { name: "Capacity", value: product.capacity },
                    { name: "Simplex / Duplex", value: product.simplexduplex },
                    {
                      name: "Standard Interface",
                      value: product.standard_interface,
                    },
                    { name: "Duty Cycle", value: product.duty_cycle },
                  ].filter((f) => f.value && f.value !== "Blanks");
                  const allSpecs = [...topFields, ...(product.specs || [])];
                  return allSpecs.length > 0 ? (
                    <table className="w-full border-collapse">
                      <tbody>
                        {allSpecs.map((spec, i) => (
                          <tr
                            key={i}
                            className={
                              i < allSpecs.length - 1
                                ? "border-b border-[#1A2744]"
                                : ""
                            }
                          >
                            <td className="py-3.5 px-4 text-[#8A9EC0] text-[14px] font-semibold w-[35%] align-top">
                              {i18n.language === "ar"
                                ? t(`productDetail.specNames.${spec.name}`, {
                                    defaultValue: spec.name,
                                  })
                                : spec.name}
                            </td>
                            <td className="py-3.5 px-4 text-[#C8D8EE] text-[14px]">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-[#3A4A6A] text-sm">
                      {t("productDetail.noSpecs")}
                    </p>
                  );
                })()}
              </div>
            )}

            {activeTab === "brochures" && (
              <div className="flex flex-col gap-3">
                {product.brochures?.length > 0 ? (
                  product.brochures.map((br, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3.5 px-5 py-4 rounded-xl bg-[rgba(79,123,247,0.06)] border border-[rgba(79,123,247,0.12)]"
                    >
                      <div className="flex items-center gap-3.5">
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
                        <span className="text-[#8BAAFE] text-sm font-medium">
                          {br.name}
                        </span>
                      </div>
                      {br.url && (
                        <a
                          href={br.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 rounded-lg text-[13px] font-semibold bg-[#4F7BF7] text-white no-underline shrink-0 hover:bg-[#3d6be0] transition-colors"
                        >
                          {t("productDetail.download")}
                        </a>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-[#3A4A6A] text-sm">
                    {t("productDetail.noBrochures")}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Accessories Section */}
        {product.accessories?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-5 tracking-[-0.02em]">
              {t("productDetail.accessories")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {product.accessories.map((acc, i) => (
                <div
                  key={i}
                  className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-6"
                >
                  {acc.part_number && (
                    <p className="text-[#4F7BF7] text-sm font-bold mb-3 tracking-[0.04em]">
                      {acc.part_number}
                    </p>
                  )}
                  <p className="text-[#C8D8EE] text-[15px] leading-[1.7]">
                    {acc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consumables Section */}
        {product.consumables?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-5 tracking-[-0.02em]">
              {t("productDetail.consumables")}
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
              {product.consumables.map((con, i) => (
                <div
                  key={i}
                  className="bg-[#0B1222] border border-[#1A2744] rounded-2xl p-6"
                >
                  {con.name && (
                    <p className="text-white text-[15px] font-semibold mb-2">
                      {con.name}
                    </p>
                  )}
                  {con.part_number && (
                    <p className="text-[#4F7BF7] text-sm font-bold mb-3 tracking-[0.04em]">
                      {con.part_number}
                    </p>
                  )}
                  {con.description && (
                    <p className="text-[#C8D8EE] text-[15px] leading-[1.7]">
                      {con.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

/* ─── Quick spec pill ─── */
function QuickSpec({ label, value }) {
  return (
    <div className="px-3.5 py-2 rounded-[10px] bg-white/3 border border-[#1A2744] flex flex-col gap-0.5">
      <span className="text-[#6A7A9A] text-[11px] font-semibold uppercase tracking-[0.06em]">
        {label}
      </span>
      <span className="text-[#C8D8EE] text-[14px] font-medium">{value}</span>
    </div>
  );
}
