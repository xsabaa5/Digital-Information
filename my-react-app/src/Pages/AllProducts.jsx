import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PAGE_SIZE = 12;

const card = {
  background: "#1A1A1A",
  borderRadius: 32,
  padding: 10,
};

/* ─── Dropdown select styled to match design ─── */
const selectStyle = {
  flex: 1,
  minWidth: 180,
  padding: "16px 44px 16px 18px",
  borderRadius: 12,
  border: "1px solid #1A2744",
  background: "#0B1222",
  color: "#fff",
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  cursor: "pointer",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 16px center",
  backgroundSize: 14,
};

/* ─── Filter config ─── */
const FILTER_FIELDS = [
  { key: "brand", label: "Brand" },
  { key: "product_type", label: "Product Type" },
  { key: "document_size", label: "Document Size" },
  { key: "speed", label: "Speed" },
  { key: "capacity", label: "Capacity" },
  { key: "standard_interface", label: "Standard Interface" },
  { key: "colored", label: "Colored" },
  { key: "simplexduplex", label: "Simplex/Duplex" },
  { key: "duty_cycle", label: "Duty Cycle" },
];

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => {});
  }, []);

  /* Build unique options for each filter from the data */
  const filterOptions = useMemo(() => {
    const opts = {};
    FILTER_FIELDS.forEach(({ key }) => {
      const values = [
        ...new Set(products.map((p) => p[key]).filter(Boolean)),
      ].sort();
      opts[key] = values;
    });
    return opts;
  }, [products]);

  const filtered = products.filter((p) => {
    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase()) &&
      !p.short_description.toLowerCase().includes(search.toLowerCase())
    )
      return false;

    for (const { key } of FILTER_FIELDS) {
      if (filters[key] && p[key] !== filters[key]) return false;
    }
    return true;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(PAGE_SIZE);
  };

  const clearFilters = () => {
    setFilters({});
    setSearch("");
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Navbar />

      {/* Page Content */}
      <div
        style={{ maxWidth: 1120, margin: "0 auto", padding: "120px 24px 48px" }}
      >
        {/* Filters Bar */}
        <div
          style={{
            padding: 24,
            marginBottom: 32,
          }}
        >
          {/* Row 1: Search + Brand + Product Type + Document Size + Speed */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 12,
            }}
          >
            {/* Search */}
            <div style={{ position: "relative", flex: 1, minWidth: 180 }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A6A8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: "absolute",
                  left: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21L16.65 16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                style={{
                  ...selectStyle,
                  paddingLeft: 42,
                  textTransform: "none",
                  fontWeight: 400,
                  letterSpacing: "normal",
                  backgroundImage: "none",
                  width: "100%",
                }}
              />
            </div>

            {/* First 4 dropdown filters */}
            {FILTER_FIELDS.slice(0, 4).map(({ key, label }) => (
              <select
                key={key}
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
                style={{
                  ...selectStyle,
                  color: "#fff",
                }}
              >
                <option value="">{label}</option>
                {(filterOptions[key] || []).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            ))}
          </div>

          {/* Row 2: Capacity + Standard Interface + Colored + SimplexDuplex + Duty Cycle */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {FILTER_FIELDS.slice(4).map(({ key, label }) => (
              <select
                key={key}
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
                style={{
                  ...selectStyle,
                  color: "#fff",
                }}
              >
                <option value="">{label}</option>
                {(filterOptions[key] || []).map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            ))}
          </div>
        </div>

        {/* Results count + Clear */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: 20 }}
        >
          <p style={{ color: "#3A4A6A", fontSize: 13 }}>
            Showing {visible.length} of {filtered.length} products
            {search && (
              <span>
                {" "}
                for &ldquo;<span style={{ color: "#8BAAFE" }}>{search}</span>
                &rdquo;
              </span>
            )}
          </p>
          {(activeFilterCount > 0 || search) && (
            <button
              onClick={clearFilters}
              style={{
                padding: "6px 16px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                border: "1px solid #1A2744",
                background: "transparent",
                color: "#5A6A8A",
                transition: "all 0.2s",
              }}
            >
              Clear all filters
              {activeFilterCount > 0 && ` (${activeFilterCount})`}
            </button>
          )}
        </div>

        {/* Product Grid */}
        {visible.length === 0 ? (
          <div
            className="text-center"
            style={{ padding: "80px 0", color: "#3A4A6A" }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2A3352"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ margin: "0 auto 16px" }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
            <p style={{ fontSize: 15, marginBottom: 12 }}>No products found</p>
            <button
              onClick={clearFilters}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: "1px solid #1A2744",
                background: "transparent",
                color: "#8BAAFE",
              }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: 24 }}
          >
            {visible.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                style={{
                  ...card,
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0,0,0,.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image area */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: 22,
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
                    loading="lazy"
                    decoding="async"
                    style={{
                      maxWidth: "80%",
                      maxHeight: "80%",
                      objectFit: "contain",
                    }}
                  />
                  {/* Cart button */}
                  <span
                    style={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      width: 42,
                      height: 42,
                      borderRadius: 16,
                      background: "#1A1A1A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 01-8 0" />
                    </svg>
                  </span>
                </div>

                {/* Info area */}
                <div
                  style={{
                    padding: "16px 6px 6px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Brand badge */}
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#fff",
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
                    style={{ fontSize: 20, marginBottom: 8, lineHeight: 1.3 }}
                  >
                    {p.name}
                  </h3>

                  {/* Description as bullet points */}
                  <ul
                    style={{
                      color: "#8492af",
                      fontSize: 16,
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
                          <span style={{ color: "#B0B4BBFF" }}>{point}</span>
                        </li>
                      ))}
                  </ul>

                  {/* Category tag */}
                  <div
                    style={{
                      marginTop: 16,
                      paddingTop: 16,
                      borderTop: "1px solid #2A2A2A",
                    }}
                  >
                    <span style={{ color: "#5A5A5A", fontSize: 11 }}>
                      {p.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="text-center" style={{ marginTop: 48 }}>
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              style={{
                padding: "14px 36px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                border: "1px solid #1A2744",
                background: "transparent",
                color: "#8BAAFE",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(79,123,247,.1)";
                e.currentTarget.style.borderColor = "#4F7BF7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "#1A2744";
              }}
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
