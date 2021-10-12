import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import "./Home.css";

// import services from "../data/services";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Articles />
      <Footer />
    </>
  );
};

export default Home;
