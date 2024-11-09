import React from 'react';

const Agriculture = () => {
  return (
    <div className="bg-yellow-400 font-sans">
      {/* Hero Section */}
      <section className="relative text-center bg-pink-500 text-white py-12">
        <h1 className="text-5xl font-bold">AGRICULTURE</h1>
      </section>

      {/* Content Section */}
      <section className="bg-white text-gray-800 py-8">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-pink-500">Agriculture</h2>
            <p className="text-lg mt-4">
              Raju Karmore's agriculture service provides expert guidance on crop management and sustainable farming practices, helping farmers maximize their yields while protecting the environment. The service also specializes in advanced irrigation solutions, ensuring efficient water use for optimal crop growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Comprehensive Crop Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Raju Karmore's agricultural service offers expert crop consultation tailored to the specific needs of farmers. With a deep understanding of local soil types, climate conditions, and crop varieties, the service provides personalized advice to optimize yields.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Advanced Irrigation Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Water management is crucial for successful farming, and Raju Karmore’s service specializes in advanced irrigation solutions. From designing efficient irrigation systems to advising on water conservation techniques, Raju ensures that farmers make the best use of water resources.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-pink-500 text-xl font-bold mb-4">
                Sustainable Farming Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Sustainability is at the heart of Raju Karmore's agricultural service, which promotes eco-friendly farming practices. Raju educates farmers on organic farming methods, integrated pest management, and crop rotation techniques that preserve soil fertility.
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

export default Agriculture;
