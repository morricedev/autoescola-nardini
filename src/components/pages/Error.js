import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Button from "../atoms/Button";

const ImageContainer = styled.div`
  text-align: right;

  svg {
    width: 100%;
    height: auto;
    max-width: 400px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const ErrorContent = styled.div`
  h1 {
    margin-top: 0;
  }

  p {
    margin: 24px 0;
    font-size: 1.3rem;
  }
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <ErrorContent>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <p>{description}</p>
        <div>
          <Button as={Link} to="/" color="primary">
            Ir para página inicial
          </Button>
        </div>
      </ErrorContent>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
