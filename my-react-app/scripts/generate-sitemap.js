import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = "https://diginfoiq.com";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/products", priority: "0.9", changefreq: "weekly" },
  { path: "/archiving-systems", priority: "0.8", changefreq: "monthly" },
  { path: "/erp-digital-transformation", priority: "0.8", changefreq: "monthly" },
  { path: "/security-electronics", priority: "0.8", changefreq: "monthly" },
  { path: "/cybersecurity", priority: "0.8", changefreq: "monthly" },
  { path: "/contact-us", priority: "0.7", changefreq: "monthly" },
];

const products = JSON.parse(
  readFileSync(resolve(__dirname, "../public/products.json"), "utf-8"),
);

const urls = [
  ...staticPages.map(
    (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  ),
  ...products.map(
    (p) => `  <url>
    <loc>${SITE}/products/${p.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, sitemap, "utf-8");
console.log(`Sitemap generated: ${products.length} products + ${staticPages.length} pages → ${outPath}`);
