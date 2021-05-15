import React from "react";
import { useParams } from "react-router-dom";

import ProductDetailPage from "../../components/pages/ProductDetail";
import Error from "../../components/pages/Error";

import NotFoundImage from "../../draws/NotFound";

import { useScrollToTop } from "../../hooks/Scroll";
import { useProduct } from "../../hooks/Products";

const ProductDetail = () => {
  useScrollToTop();

  const { slang } = useParams();
  const product = useProduct({ slang });

  if (!product) {
    return (
      <Error
        image={<NotFoundImage />}
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível."
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
