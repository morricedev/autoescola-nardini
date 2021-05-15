import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";
import ProductDetail from "./servicos";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetail />} />
  </Routes>
);

export default AppRoutes;
