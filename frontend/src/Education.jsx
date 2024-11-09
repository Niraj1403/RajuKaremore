import React from 'react';

const Education = () => {
  return (
    <div className="bg-yellow-400 font-sans">
      {/* Hero Section */}
      <section className="relative text-center bg-pink-500 text-white py-12">
        <h1 className="text-5xl font-bold">EDUCATION</h1>
      </section>

      {/* Content Section */}
      <section className="bg-white text-gray-800 py-8">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-pink-500">Education</h2>
            <p className="text-lg mt-4">
              Raju Karmore emphasizes enhancing access to quality education by building new schools, supporting students with scholarships and free educational materials. The goal is to uplift the overall standard of learning in his constituency.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Establishment of New Schools and Colleges
              </h3>
              <p className="text-gray-600 mb-4">
                Establishing new schools marks a significant investment in the future of our community. These institutions will provide enhanced learning opportunities for students, fostering academic growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Infrastructure Improvements in Existing Schools
              </h3>
              <p className="text-gray-600 mb-4">
                Upgrading infrastructure in existing schools is crucial to provide modern facilities such as classrooms, laboratories, and sports complexes, enhancing students' experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Free Educational Materials
              </h3>
              <p className="text-gray-600 mb-4">
                Providing free textbooks and essential supplies helps remove financial barriers, empowering students from all backgrounds to focus on their studies and achieve their academic goals.
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
          <p className="text-xs">Design and Developed by GBU Buzz Pvt Ltd © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Education;
