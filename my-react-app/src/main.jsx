import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import ProductDetail from "./Pages/ProductDetail";
import ArchivingSystems from "./Pages/ArchivingSystems";
import ERPDigital from "./Pages/ERPDigital";
import SecurityElectronics from "./Pages/SecurityElectronics";
import Cybersecurity from "./Pages/Cybersecurity";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/archiving-systems" element={<ArchivingSystems />} />
        <Route path="/erp-digital-transformation" element={<ERPDigital />} />
        <Route path="/security-electronics" element={<SecurityElectronics />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
