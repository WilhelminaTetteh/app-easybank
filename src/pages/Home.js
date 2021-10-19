import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Articles from "../components/Articles";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Articles />
    </>
  );
};

export default Home;
