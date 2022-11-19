import React from "react";

import "./Main.css";
import About from "./About";
import Hero from "./Hero";
import Tech from "./Tech";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

function Main(props) {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Tech />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  );
}

export default Main;
