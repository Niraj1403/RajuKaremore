
import React from 'react';

const PublicServices = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Infrastructure Development</h1>
        <p className="mt-4 mx-auto max-w-4xl text-lg">
          Innovation is at the core of Raju Karemore’s approach, driving him to explore uncharted territories and develop cutting-edge solutions.
        </p>
        <img
          className="absolute top-0 right-0 w-1/4 h-auto"
          src="https://via.placeholder.com/250x350"
          alt="Header Image"
        />
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Road and Highway Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          <div>
            <h2 className="text-3xl font-semibold text-pink-600">Road and Highway Expansion</h2>
            <p className="mt-4 text-gray-700">
              The expansion and maintenance of roads and highways are crucial for improving connectivity and boosting economic growth. 
              Projects may include the construction of new highways, widening of existing roads, and development of bypasses to ease traffic congestion.
            </p>
            <p className="mt-2 text-gray-700">
              Upgraded roads reduce travel time, lower transportation costs, and improve access to markets, education, and healthcare facilities.
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/500x300"
              alt="Road and Highway Expansion"
            />
          </div>
        </div>

        {/* Public Transportation Systems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          <div>
            <img
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/500x300"
              alt="Public Transportation Systems"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-pink-600">Public Transportation Systems</h2>
            <p className="mt-4 text-gray-700">
              The development of efficient and accessible public transportation systems is key to reducing traffic congestion, lowering carbon emissions, and providing affordable mobility options.
            </p>
            <p className="mt-2 text-gray-700">
              Projects may include the expansion of bus networks, metro rail systems, and integrated transport hubs to ensure seamless connectivity.
            </p>
          </div>
        </div>

        {/* Water and Sanitation Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
          <div>
            <h2 className="text-3xl font-semibold text-pink-600">Water and Sanitation Infrastructure</h2>
            <p className="mt-4 text-gray-700">
              Ensuring access to clean water and sanitation is vital to public health and environmental sustainability. Projects include developing water treatment plants, reservoirs, and pipelines.
            </p>
            <p className="mt-2 text-gray-700">
              Sanitation initiatives such as sewage systems, water management facilities, and public toilets are crucial, especially in underserved areas.
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto rounded-lg"
              src="https://via.placeholder.com/500x300"
              alt="Water and Sanitation Infrastructure"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-pink-600 text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Footer Logo and Text */}
          <div>
            <h3 className="text-2xl font-semibold">Logo</h3>
            <p className="mt-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text since the 1500s.
            </p>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-2xl font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Public Services</a></li>
              <li><a href="#" className="hover:underline">Campaigns & Programs</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Footer Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-4">Location: Lorem ipsum is simply dummy text of the printing</p>
            <p className="mt-2">Email: raju.karemore.office@gmail.com</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicServices;
