import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductType from "../../models/types/ProductType";

import Grid from "../atoms/Grid";
import Card, { CardMedia, CardBody } from "../atoms/Card";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map(({ id, image, title, summary, slang }) => {
          return (
            <div key={id}>
              <Card>
                <CardMedia image={image} />
                <CardBody>
                  <Heading>
                    <h6>{title}</h6>
                  </Heading>
                  <p>{summary}</p>
                  <div>
                    <Button
                      color="primary"
                      variant="link"
                      as={Link}
                      to={`/servicos/${slang}`}
                    >
                      Saiba mais
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </Grid>
      {!showAll && (
        <Toolbar>
          <Button
            variant="outlined"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Lista completa de serviços
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default ProductGrid;
