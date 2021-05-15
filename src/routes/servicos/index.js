import React from "react";

import ProductDetailPage from "../../components/pages/ProductDetail";

import { useScrollToTop } from "../../hooks/Scroll";

const ProductDetail = () => {
  useScrollToTop();

  return <ProductDetailPage />;
};

export default ProductDetail;
