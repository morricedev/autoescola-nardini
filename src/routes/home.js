import React from "react";

import HomePage from "../components/pages/Home";

import { useProducts } from "../hooks/Products";

const Home = () => {
  const products = useProducts();

  return <HomePage products={products} />;
};

export default Home;
