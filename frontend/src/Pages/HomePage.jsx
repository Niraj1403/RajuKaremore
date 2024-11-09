import React from "react";
import Hero from "../components/Hero";
import AboutUsPage from "./AboutusPage";
import OurVision from "../components/OurVision";
import Feature from "../components/Feature";
import Member from "../components/Member.jsx";
import Campaign from "../Campaign.jsx";
import Gallery from "../Gallery.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUsPage />
      <OurVision />
      <Feature />
      <Campaign/>
      <Member />
      <Gallery/>
    </div>
  );
};

export default HomePage;
