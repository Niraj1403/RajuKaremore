import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa"; // Importing the caret down icon
import { HiMenu, HiX } from "react-icons/hi"; // Importing menu icons for mobile

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FFFA12]">
      <div className="flex justify-between items-center px-4 py-4 max-w-full"> {/* Use max-w-full to avoid gaps */}
        <div className="text-gray-800 font-bold text-3xl">
          <span className="text-gray-800">LOGO</span>
        </div>
        <div className="hidden md:flex space-x-10 text-gray-800 items-center">
          <Link to="/" className="text-gray-800 hover:text-yellow-400 transition duration-300">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-yellow-400 transition duration-300">About</Link>
          
          {/* Dropdown for Public Services */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-800 hover:text-yellow-400 transition duration-300 flex items-center"
            >
              Public Service
              <FaCaretDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 z-50 bg-white shadow-lg rounded-lg">
                <Link to="/public-service/education" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Education</Link>
                <Link to="/public-service/healthcare" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Healthcare</Link>
                <Link to="/public-service/agriculture" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Agriculture</Link>
              </div>
            )}
          </div>

          <Link to="/service" className="text-gray-800 hover:text-yellow-400 transition duration-300">Campaign & Program</Link>
          <Link to="/contact" className="text-gray-800 hover:text-yellow-400 transition duration-300">News</Link>
          <Link to="/" className="text-gray-800 hover:text-yellow-400 transition duration-300">Contact Us</Link>
          <Link to="/cart">
            <button className="bg-[#C6318B] text-white font-semibold rounded-full pt-3 pl-10 pr-10 pb-3 hover:bg-[#C6314B] transition">
              Join Member
            </button>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800">
            {isMobileMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden bg-white">
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Home</Link>
          <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">About</Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="block px-4 py-2 text-gray-800 hover:bg-yellow-200 flex items-center">
              Public Service
              <FaCaretDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 z-50 bg-white shadow-lg rounded-lg">
                <Link to="/public-service/education" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Education</Link>
                <Link to="/public-service/healthcare" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Healthcare</Link>
                <Link to="/public-service/agriculture" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Agriculture</Link>
              </div>
            )}
          </div>
          <Link to="/service" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Campaign & Program</Link>
          <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">News</Link>
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">Contact Us</Link>
          <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-yellow-200">
            <button className="bg-[#C6318B] text-white font-semibold rounded-full w-full pt-3 pb-3 hover:bg-[#C6314B] transition">
              Join Member
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
