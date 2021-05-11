import React from "react";

import Accordion from "./Accordion";
import AccordionGroup from "./AccordionGroup";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tenetur?
      Incidunt iure a totam magni, id blanditiis repudiandae, alias itaque
      excepturi quasi fugiat voluptatibus. Animi eligendi facere earum sed
      voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ducimus, beatae aspernatur at qui nihil maiores omnis numquam, culpa
      temporibus quod reprehenderit deserunt sed vel sint tempore odit
      dignissimos iste. Culpa?
    </Accordion>
  </AccordionGroup>
);
