import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { breakAt, BreakpointSizes } from "../styles/Breakpoints";

const colorYellow = "#ffc107";

//EXEMPLO USANDO PROPS ABAIXO
const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `};
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${colorYellow};
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSizes.lg)} {
    width: 1140px;
    margin: 0 auto;
  }

  ${breakAt(BreakpointSizes.xl)} {
    padding: 0;
    width: 1140px;
    margin: 0 auto;
  }
`;

const Hero = ({ image, children }) => (
  <Root image={image} data-testid="hero">
    <div>
      <Container>
        <Content>{children}</Content>
      </Container>
    </div>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;