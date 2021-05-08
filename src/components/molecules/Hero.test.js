import React from "react";
import { render } from "../../test-utils";

import Hero from "./Hero";

test("renders Hero children", () => {
  const { /*debug,*/ getByText } = render(
    <Hero>
      <p>Morrice Sousa</p>
    </Hero>
  );

  // debug();

  expect(getByText("Morrice Sousa")).toBeInTheDocument(); /*toBeTruthy()*/
});

test("renders background image", () => {
  const imageUrl = "https://picsum.photos/200";
  const { getByTestId } = render(<Hero image={imageUrl} />);

  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage: imageUrl,
  });
});
