import React from "react";

import AboutPage from "../components/pages/About";

import { useScrollToTop } from "../hooks/Scroll";

const About = () => {
  useScrollToTop();

  return <AboutPage />;
};

export default About;
