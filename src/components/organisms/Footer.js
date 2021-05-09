import React from "react";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Container from "../atoms/Container";
import Grid from "../atoms/Grid";
import Heading from "../atoms/Heading";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: white;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardini Auto Escola</h6>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            illo porro, repellendus obcaecati voluptate quidem omnis
            perspiciatis eos quibusdam explicabo at sit totam quis dignissimos
            accusamus ut reprehenderit odio? Ad.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Contato</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes sociais</h6>
          </Heading>
          <p>
            <FooterLink target="_blank" href="http://facebook.com">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="http://linkedin.com">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              Linkedin
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="http://twitter.com">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default Footer;
