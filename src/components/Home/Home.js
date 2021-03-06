import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
