import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import "./Home.css";
// import services from "../data/services";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <section className="articles"></section>
    </>
  );
};

export default Home;
