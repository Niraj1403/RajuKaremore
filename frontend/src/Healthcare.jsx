import React from "react";

const Healthcare = () => {
  return (
    <div className="bg-yellow-400 font-sans">
      {/* Hero Section */}
      <section className="relative text-center bg-pink-500 text-white py-12">
        <h1 className="text-5xl font-bold">HEALTH CARE</h1>
      </section>

      {/* Content Section */}
      <section className="bg-white text-gray-800 py-8">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-pink-500">
              Health care
            </h2>
            <p className="text-lg mt-4">
              Health care Raju Karmore has spearheaded the establishment of
              state-of-the-art hospitals and health clinics, ensuring accessible
              and affordable healthcare for all. His initiatives also include
              organizing health camps and launching health insurance schemes for
              underprivileged communities.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Establishment of Primary Healthcare Centers
              </h3>
              <p className="text-gray-600 mb-4">
                Raju Karmore has spearheaded the establishment of numerous
                primary healthcare centers in rural and underserved areas. These
                centers provide essential medical services, reducing the need
                for long-distance travel to urban hospitals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Health Insurance Schemes for the Underprivileged
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding the financial barriers to healthcare, Raju Karmore
                introduced health insurance schemes targeting low-income
                families. These schemes cover a range of medical expenses,
                ensuring affordable access to healthcare.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Health Awareness and Preventive Care Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Raju Karmore places a strong emphasis on preventive care,
                educating the public on lifestyle diseases, nutrition, hygiene,
                and early intervention through community workshops and health
                programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-pink-600 text-white py-8 mt-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-sm">rajuKarmoreOffice@gmail.com</p>
          </div>
          <p className="text-xs">
            Design and Developed by GBU Buzz Pvt Ltd © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Healthcare;
