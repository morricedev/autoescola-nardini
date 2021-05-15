import React from "react";
import { render, screen } from "../../test-utils";

import ProductDetailRoot from "./index";

import { useProduct } from "../../hooks/Products";

import { buildProduct } from "../../models/builders/products";

jest.mock("../../hooks/Products");

test("renders with a product", () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailRoot />);

  expect(
    screen.getByText("Generic Frozen Car", { selector: "h1" })
  ).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoot />);

  expect(
    screen.getByText("Serviço não encontrado", { selector: "h1" })
  ).toBeInTheDocument();
});
