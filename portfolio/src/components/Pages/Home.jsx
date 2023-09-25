import React from "react";

import HeroSection from "../Portfolio/HeroSection";
import Header from "../Portfolio/Header";
import About from "../Portfolio/About";
import Facts from "../Portfolio/Facts";
import Skills from "../Portfolio/Skills";
import Resume from "../Portfolio/Resume";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Portfolio/Services";
import Testimonials from "../Portfolio/Testimonials";
import Contact from "../Portfolio/Contact";
import Footer from "../Portfolio/Footer";

const Home = () => {
  return (
    <React.Fragment>

      <HeroSection />
      <Header />
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      
    </React.Fragment>
  );
};

export default Home;
