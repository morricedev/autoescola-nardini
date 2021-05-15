import React from "react";

import Error from "../components/pages/Error";

import TakenImage from "../draws/Taken";

const error404 = () => (
  <Error
    image={<TakenImage />}
    title="Página não encontrada"
    description="Oops! Essa página foi abduzida."
  />
);
export default error404;
