import React from "react";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Button from "../atoms/Button";
import HeroImage from "../../assets/hero.jpg";
import Feature from "../atoms/Feature";
import Grid from "../atoms/Grid";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "../molecules/Section";
import AboutVideo from "../../assets/about.mp4";
import Footer from "../organisms/Footer";

const Home = () => (
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
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>

    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

export default Home;
