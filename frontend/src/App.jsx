import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import GBJstoreSection from "./components/GbjStoresection";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutusPage";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Pages/Cart";
import Service from "./Pages/Service";
import Contact from "./components/Contact";
import ContactPage from "./Pages/ContactPage";
import AboutHero from "./AboutComponents/AboutHero";
import Education from "./Education";
import Healthcare from "./Healthcare";
import Agriculture from "./Agriculture";
import Gallery from "./Gallery";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutHero />} />
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Gallery />} />
          <Route path="/public-service/education" element={<Education />} />
          <Route path="/public-service/healthcare" element={<Healthcare />} />
          <Route path="/public-service/agriculture" element={<Agriculture />} />
        </Routes>

        <GBJstoreSection />
      </div>
    </Router>
  );
};

export default App;
