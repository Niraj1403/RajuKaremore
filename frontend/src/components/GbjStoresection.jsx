import React from "react";

const GBJstoreSection = () => {
  return (
    <footer className="bg-[#C6318B] h-auto md:h-[500px] text-white p-5 md:p-40"> {/* Adjusted padding and height */}
      <div className="container mx-auto mb-20 grid grid-cols-1 md:grid-cols-4 gap-8"> {/* Responsive grid columns */}
        {/* Logo Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Logo</h3>
          <p className="text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul className="text-sm space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Public Services</li>
            <li>Campaign & Programs</li>
            <li>News</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="text-sm space-y-2">
            <li>Infrastructure</li>
            <li>Education</li>
            <li>Health Care</li>
            <li>Agriculture</li>
            <li>Employment</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <div className="text-sm space-y-2">
            <p>
              <span className="font-bold">Location:</span> Lorem Ipsum is simply
              dummy text of the printing
            </p>
            <p>
              <span className="font-bold">Mail Us:</span>{" "}
              rajukaremoteoffice@gmail.com
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-8">
        <p>Design and Developed by GBJ Buzz Pvt Ltd ©Copyright 2024</p>
      </div>
    </footer>
  );
};

export default GBJstoreSection;
