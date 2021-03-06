import React from "react";
import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import { Link } from "react-router-dom";

import ProductType from "../../models/types/ProductType";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import Feature from "../atoms/Feature";
import Grid from "../atoms/Grid";
import Section from "../molecules/Section";
import Footer from "../organisms/Footer";
import ProductGrid from "../organisms/ProductGrid";
import Accordion, { AccordionGroup } from "../atoms/Accordion/index";

import HeroImage from "../../assets/hero.jpg";
import AboutVideo from "../../assets/about.mp4";

const Home = ({ products }) => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Ganhe sua <strong>liberdade</strong> <br /> para ir e vir
        </h1>
      </Heading>

      <ul>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
      </ul>
      <Button variant="outlined" color="primary">
        Matricule-se agora
      </Button>
    </Hero>

    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor Frota">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>

    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Nardini Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quos
            cupiditate dolores adipisci dicta laudantium ratione, quis officia
            sit nostrum et, iure asperiores quaerat ullam? Perspiciatis libero
            voluptas tenetur perferendis.
          </p>
          <div>
            <Button as={Link} to="/sobre" color="primary">
              Saiba mais
            </Button>
          </div>
        </div>
        <div>
          <video
            src={AboutVideo}
            width="100%"
            autoPlay
            playsInline
            loop
            muted
          />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          tenetur? Incidunt iure a totam magni, id blanditiis repudiandae, alias
          itaque excepturi quasi fugiat voluptatibus. Animi eligendi facere
          earum sed voluptate? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus, beatae aspernatur at qui nihil maiores
          omnis numquam, culpa temporibus quod reprehenderit deserunt sed vel
          sint tempore odit dignissimos iste. Culpa?
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          tenetur? Incidunt iure a totam magni, id blanditiis repudiandae, alias
          itaque excepturi quasi fugiat voluptatibus. Animi eligendi facere
          earum sed voluptate? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus, beatae aspernatur at qui nihil maiores
          omnis numquam, culpa temporibus quod reprehenderit deserunt sed vel
          sint tempore odit dignissimos iste. Culpa?
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          tenetur? Incidunt iure a totam magni, id blanditiis repudiandae, alias
          itaque excepturi quasi fugiat voluptatibus. Animi eligendi facere
          earum sed voluptate? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus, beatae aspernatur at qui nihil maiores
          omnis numquam, culpa temporibus quod reprehenderit deserunt sed vel
          sint tempore odit dignissimos iste. Culpa?
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
