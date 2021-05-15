import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "../molecules/Hero";
import Heading from "../atoms/Heading";
import Section from "../molecules/Section";
import Footer from "../organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "../atoms/Callout";
import Button from "../atoms/Button";
import BreadCrumb from "../atoms/BreadCrumb";

import SpeedImage from "../../draws/Speed";
import HeroImage from "../../assets/hero.jpg";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;
const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Nome do serviço</h1>
      </Heading>
      <BreadCrumb
        items={[
          { label: "Início", link: "/" },
          { label: "Serviços" },
          { label: "Nome do Serviço" },
        ]}
      />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        modi culpa? Aliquam eaque voluptate laudantium reiciendis, dolores
        voluptatibus eum consequuntur iusto. Veritatis et iste earum recusandae
        autem. Vitae, esse minus.
      </p>
      <p>
        Dolores est voluptates, excepturi consequuntur nihil doloremque quam
        illo iure quas consectetur officiis sint qui asperiores quaerat animi!
        Labore et omnis magni nulla in suscipit accusantium eius laborum
        perferendis quae!
      </p>
      <p>
        Eos aliquam molestiae numquam tenetur esse itaque ab. Ullam ratione
        officia incidunt odio vero, repellendus nemo deserunt? Officiis nisi vel
        sit reiciendis dolorum eius distinctio doloribus, nam at nostrum! Nulla?
      </p>
      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            officia. Rerum, veniam neque! Veritatis repellat quaerat repudiandae
            repellendus, beatae deserunt reprehenderit earum et nulla corporis
            suscipit officiis aut rerum dignissimos.
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <SpeedImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
