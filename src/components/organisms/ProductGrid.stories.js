import React from "react";

import ProductGrid from "./ProductGrid";
import PlaceholderImage from "../../../src/assets/serv-03.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      {
        id: 1,
        image: PlaceholderImage,
        title: "Title 1",
        summary: "Lorem Ipsum",
      },
      {
        id: 2,
        image: PlaceholderImage,
        title: "Title 2",
        summary: "Lorem Ipsum",
      },
      {
        id: 3,
        image: PlaceholderImage,
        title: "Title 3",
        summary: "Lorem Ipsum",
      },
      {
        id: 4,
        image: PlaceholderImage,
        title: "Title 4",
        summary: "Lorem Ipsum",
      },
      {
        id: 5,
        image: PlaceholderImage,
        title: "Title 5",
        summary: "Lorem Ipsum",
      },
      {
        id: 6,
        image: PlaceholderImage,
        title: "Title 6",
        summary: "Lorem Ipsum",
      },
    ]}
  />
);
