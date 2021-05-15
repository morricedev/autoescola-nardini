import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "../atoms/Button";

import SpeedImage from "../../draws/Speed";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
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
);
