import CarPlaceholder from "../../stories/assets/car-placeholder.jpg";
import products from "../../products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      ...products[i],
      image: CarPlaceholder,
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
