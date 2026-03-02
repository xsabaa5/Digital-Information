import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PAGE_SIZE = 12;

/* ─── Tailwind class constants (replace former JS style objects) ─── */
const selectClasses =
  "flex-1 min-w-45 py-4 pl-4.5 pr-11 rounded-xl border border-[#1A2744] bg-[#0B1222] text-white text-sm font-semibold tracking-[0.04em] uppercase cursor-pointer outline-none appearance-none bg-no-repeat bg-[length:14px] bg-[position:right_16px_center]";

const selectArrowBg = `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`;

const cardClasses =
  "bg-[#1A1A1A] rounded-[32px] p-2.5 flex flex-col no-underline text-inherit transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,.4)]";

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
    <div className="bg-black min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Page Content */}
      <div className="max-w-280 mx-auto pt-30 px-6 pb-12">
        {/* Filters Bar */}
        <div className="p-6 mb-8">
          {/* Row 1: Search + Brand + Product Type + Document Size + Speed */}
          <div className="flex flex-wrap gap-3 mb-3">
            {/* Search */}
            <div className="relative flex-1 min-w-45">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5A6A8A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
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
                className="flex-1 min-w-45 py-4 pl-10.5 pr-11 rounded-xl border border-[#1A2744] bg-[#0B1222] text-white text-sm font-normal tracking-normal cursor-pointer outline-none appearance-none w-full"
              />
            </div>

            {/* First 4 dropdown filters */}
            {FILTER_FIELDS.slice(0, 4).map(({ key, label }) => (
              <select
                key={key}
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
                className={selectClasses}
                style={{ backgroundImage: selectArrowBg }}
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
          <div className="flex flex-wrap gap-3">
            {FILTER_FIELDS.slice(4).map(({ key, label }) => (
              <select
                key={key}
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
                className={selectClasses}
                style={{ backgroundImage: selectArrowBg }}
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
        <div className="flex items-center justify-between mb-5">
          <p className="text-[#3A4A6A] text-[13px]">
            Showing {visible.length} of {filtered.length} products
            {search && (
              <span>
                {" "}
                for &ldquo;<span className="text-[#8BAAFE]">{search}</span>
                &rdquo;
              </span>
            )}
          </p>
          {(activeFilterCount > 0 || search) && (
            <button
              onClick={clearFilters}
              className="py-2 px-5 rounded-full text-sm font-semibold cursor-pointer border border-[rgba(79,123,247,.35)] bg-transparent text-white tracking-[0.01em] transition-all duration-200 hover:bg-[rgba(79,123,247,.1)] hover:border-[#4F7BF7]"
            >
              Clear all filters
              {activeFilterCount > 0 && ` (${activeFilterCount})`}
            </button>
          )}
        </div>

        {/* Product Grid */}
        {visible.length === 0 ? (
          <div className="text-center py-20 text-[#3A4A6A]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2A3352"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21L16.65 16.65" />
            </svg>
            <p className="text-[15px] mb-3">No products found</p>
            <button
              onClick={clearFilters}
              className="py-2.5 px-6 rounded-full text-[17px] font-semibold cursor-pointer border border-[rgba(79,123,247,.35)] bg-transparent text-white tracking-[0.01em] hover:bg-[rgba(79,123,247,.1)] hover:border-[#4F7BF7] transition-all duration-200"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className={cardClasses}
              >
                {/* Image area */}
                <div className="relative w-full aspect-square rounded-[22px] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                  {/* Cart button */}
                  <span className="absolute top-1.5 right-1.5 w-10.5 h-10.5 rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
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
                <div className="pt-4 px-1.5 pb-1.5 flex-1 flex flex-col">
                  {/* Brand badge */}
                  <span className="inline-block py-1 px-2.5 rounded-md text-[11px] font-semibold text-white bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] mb-3 self-start">
                    {p.brand}
                  </span>

                  {/* Name */}
                  <h3 className="text-white font-bold text-xl mb-2 leading-[1.3]">
                    {p.name}
                  </h3>

                  {/* Description as bullet points */}
                  <ul className="text-[#8492af] text-base leading-[1.9] flex-1 list-disc pl-5 m-0">
                    {p.short_description
                      .split("\n")
                      .map((s) => s.trim())
                      .filter(Boolean)
                      .map((point, i) => (
                        <li key={i} className="text-white">
                          <span className="text-[#B0B4BBFF]">{point}</span>
                        </li>
                      ))}
                  </ul>

                  {/* Category tag */}
                  <div className="mt-4 pt-4 border-t border-[#2A2A2A]">
                    <span className="text-[#5A5A5A] text-[11px]">
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
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="py-2.5 px-6 rounded-full text-[17px] font-semibold cursor-pointer border border-[rgba(79,123,247,.35)] bg-transparent text-white tracking-[0.01em] transition-all duration-200 hover:bg-[rgba(79,123,247,.1)] hover:border-[#4F7BF7]"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
