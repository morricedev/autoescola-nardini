import React from "react";

import Card, { CardBody, CardMedia, CardMediaDescription } from "./Card";
import Section from "../molecules/Section";
import Button from "./Button";
import Heading from "./Heading";
import PlaceholderImage from "../../../src/assets/serv-03.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h6>Title</h6>
        </Heading>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage}>
        <CardMediaDescription>
          <h5>Description</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
);
