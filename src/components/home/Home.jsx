import React from "react";
//import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Footer from "../common/footer/Footer";
import Head from "../common/header/Head";

const Home = () => {
  return (
    <>
      <Head />
      <Hero />

      <HAbout />

      <Footer />
    </>
  );
};

export default Home;
