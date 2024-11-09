import React from "react";
import HomeMain from "../assets/homemain.png"; // Correct path to the image

const Hero = () => {
  return (
    <section
      className="h-[60vh] w-full bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${HomeMain})`,
        backgroundSize: "contain", // Ensures the entire image fits within the section
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    ></section>
  );
};

export default Hero;
