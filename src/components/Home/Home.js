import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
