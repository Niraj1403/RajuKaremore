import React from "react";
import ab1 from "../assets/ab1.jpeg";
import ab2 from "../assets/ab2.jpeg"; // Adjust the path if necessary

const AboutUsPage = () => {
  return (
    <section className="bg-white p-5 md:p-20"> {/* Adjusted padding for mobile */}
      <h2 className="text-3xl font-bold text-center text-[#C6318B] mb-4">
        About Us
      </h2>
      <h3 className="text-xl text-center mb-6">
        From Vision to Reality: The Inspirational Story of Raju Karemore
      </h3>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full md:w-1/2"> {/* Ensured full width on mobile */}
          <p className="text-gray-700 mb-4 mt-10 mx-4 md:mx-0"> {/* Added horizontal margin */}
            Raju Karemore’s journey is a shining example of how vision,
            perseverance, and innovation can turn dreams into reality. Starting
            from humble beginnings, he faced numerous challenges that tested his
            resolve, yet he remained undeterred. Each obstacle became a stepping
            stone, propelling him closer to his goals. Raju's relentless pursuit
            of excellence pushed him to achieve groundbreaking milestones in his
            field, setting new standards and inspiring those around him.
            <span className="text-[#C6318B] cursor-pointer"> Read more</span>
          </p>
          <div className="w-full mt-10 mx-4 md:mx-0"> {/* Added horizontal margin */}
            <h4 className="text-3xl text-[#C6318B] font-semibold">My Stands</h4>
            <ul className="list-disc text-lg font-semibold list-inside mt-2">
              <li>Innovation</li>
              <li>Leadership</li>
              <li>Inspiration</li>
              <li>Perseverance</li>
              <li>Excellence</li>
              <li>Community Impact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center mt-4"> {/* Center images on larger screens */}
          <img
            src={ab1}
            alt="Raju Karemore"
            className="h-[400px] w-[200px] object-cover shadow-lg mb-4 md:mb-0" // Fixed width class
          />
          <img
            src={ab2}
            alt="Raju Karemore"
            className="h-[300px] w-[200px] object-cover shadow-lg" // Fixed width class
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
