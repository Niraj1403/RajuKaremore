import React, { useState } from "react";
import axios from "axios";
import backgroundImage from "../assets/bgimg.jpeg"; // Replace this with your actual image path

const Member = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Email validation regex
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/members/add", {
        name,
        email,
      });
      console.log("Response:", response.data);
      setMessage("Member registered successfully!");
      setName(''); // Clear the name field
      setEmail(''); // Clear the email field
    } catch (error) {
      console.error("Error Adding Member:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        setMessage("Server error: " + error.response.data.message);
      } else if (error.request) {
        setMessage("No response received from the server. Please check the server connection.");
      } else {
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <section
      className="relative h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-pink-700 opacity-60"></div>

      <div className="relative z-10 text-center p-8">
        <h3 className="text-white text-lg font-semibold mb-2">Get Involved!</h3>
        <h1 className="text-white text-4xl font-bold mb-8">Become a Member</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white text-gray-800 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-[300px] bg-[#FFFA12] text-gray-800 font-bold py-3 rounded-full mt-4"
          >
            Register Now
          </button>
        </form>

        {message && <p className="text-white mt-4">{message}</p>}
      </div>
    </section>
  );
};

export default Member;
