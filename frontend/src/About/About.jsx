import React from "react";
import "./About.css";
import { Navbar } from "../Navbar/Navbar";
import  AboutUs  from "./AboutUs/AboutUs";
import { Stands } from "./Stands/Stands";
import { History } from "./History/History";
import { Footer } from "../Footer/Footer";

export const About = () => {
  return (
    <>
      <Navbar />
      {/* <h1>About </h1> */}
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
          <img src="./assets/Main-image.png" alt="" />
        </div>
      </div>
      <AboutUs />
      <Stands />
      <History />
      <Footer />
    </>
  );
};
