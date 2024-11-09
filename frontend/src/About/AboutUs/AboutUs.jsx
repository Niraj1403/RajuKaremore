import React from "react";
import "./AboutUs.css";
import about1 from "../../assets/about1.png";


export const AboutUs = () => {
  return (
    <>
      <div className="aboutus-section">
        <div className="aboutus-image w-full">
          <img src={about1} alt="" />
        </div>

        <div className="aboutus-info">
          <h1 className="heading">About Us</h1>
          <h2>
            From Vision to Reality: The Inspirational Story of{" "}
            <span>Raju Karemore</span>
          </h2>
          <div className="para">
            <p>
              Raju Karemore’s journey is a shining example of how vision,
              perseverance, and innovation can turn dreams into reality.
              Starting from humble beginnings, he faced numerous challenges that
              tested his resolve, yet he remained undeterred. Each obstacle
              became a stepping stone, propelling him closer to his goals.
              Raju’s relentless pursuit of excellence pushed him to achieve
              groundbreaking milestones in his field, setting new standards and
              inspiring those around him.{" "}
            </p>
            <p>
              His leadership extended beyond personal success; he became a
              beacon of hope, encouraging others to pursue their dreams with the
              same fervor. Raju’s story is not just about reaching the pinnacle
              of success but about embracing the journey of growth, learning,
              and making a meaningful impact on the community. His dedication to
              giving back and uplifting others exemplifies the true essence of
              leadership and success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
