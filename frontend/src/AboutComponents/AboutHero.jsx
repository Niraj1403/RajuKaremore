import React from "react";
import "../About/About.css";
import { AboutUs } from "../About/AboutUs/AboutUs";
import { Stands } from "../About/Stands/Stands";
import { History } from "../About/History/History";
import MainImage from "../assets/Main-image.png";
const AboutHero = () => {
  return (
    <>
      <div className="about-section">
        <div className="about-info">
          <h1>About Us</h1>
          <p>
            Raju Karemore is a dedicated political leader committed to fostering
            sustainable development and empowering communities through
            transparent governance and innovative policies.
          </p>
        </div>
        <div className="about-image">
          <img src={MainImage} alt="" />
        </div>
      </div>
      <AboutUs />
      <Stands />
      <History />
    </>
  );
};

export default AboutHero;
