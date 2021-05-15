import React from "react";
import styled from "styled-components";

import { useScrollToTop } from "../../hooks/Scroll";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Grid from "../atoms/Grid";
import Footer from "../organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "../atoms/Card";
import BreadCrumb from "../atoms/BreadCrumb";

import HeroImage from "../../assets/hero.jpg";
import AboutImage from "../../draws/About";
import InstImage1 from "../../assets/instructors/inst1.jpg";
import InstImage2 from "../../assets/instructors/inst2.jpg";
import InstImage3 from "../../assets/instructors/inst3.jpg";
import InstImage4 from "../../assets/instructors/inst4.jpg";
import InstImage5 from "../../assets/instructors/inst5.jpg";
import InstImage6 from "../../assets/instructors/inst6.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 380px;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  { id: 1, name: "Thor", avatar: InstImage1 },
  { id: 2, name: "Mel", avatar: InstImage2 },
  { id: 3, name: "Bolinha", avatar: InstImage3 },
  { id: 4, name: "Mike", avatar: InstImage4 },
  { id: 5, name: "Emmy", avatar: InstImage5 },
  { id: 6, name: "Bob", avatar: InstImage6 },
];

const About = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Auto Escola Nardini</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
        />
      </Hero>
      <Section>
        <Grid md={2}>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
              iusto, saepe dolorem voluptatem enim tempora explicabo sed maiores
              earum velit perspiciatis aliquid excepturi deleniti repellendus
              accusamus a numquam temporibus nostrum.
            </p>
            <p>
              Facere excepturi quo cumque quos odio nihil aperiam rem soluta
              saepe, sunt ex, odit nesciunt ab voluptatibus repellat incidunt
              eveniet, aliquid illo nobis nemo dolores vitae nisi? Voluptate,
              sapiente numquam.
            </p>
            <p>
              Voluptate dolor doloremque id at quia vero? Earum, qui
              voluptatibus eaque adipisci corporis recusandae consequatur
              maiores incidunt? Officiis beatae asperiores amet atque
              reprehenderit quas, harum minus veritatis? Laboriosam, voluptate!
              Blanditiis.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            </ul>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              cumque, commodi architecto sint possimus odio consequuntur rem
              fugiat id et voluptatum quam pariatur asperiores illum?
              Perferendis vel sint dicta quae!
            </p>
            <center>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>

      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              distinctio provident officiis non aliquid nihil, natus quae
              dolorem velit soluta minus repudiandae numquam est tempore
              voluptas, harum praesentium quidem incidunt?
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Quae maiores eum velit sed? Cumque et voluptatibus cum quisquam!
              Voluptatum vero possimus id aliquam autem modi dignissimos tenetur
              nam eos eaque? Ad ipsa minima quibusdam ut repudiandae eius sequi.
            </p>
          </div>
        </Grid>
      </Section>

      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

About.defaultProps = {};

About.propTypes = {};

export default About;
