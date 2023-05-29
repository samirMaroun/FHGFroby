import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "../Screens/HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "../Screens/AboutUs";
import Services from "../Screens/Services";
import Projects from "../Screens/Projects";
import Testimonial from "../Screens/Testimonial";
import ContactUs from "../Screens/ContactUs";
import Service from "../Screens/Service";
const Navigate = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/testimonials" element={<Testimonial />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/service" element={<Service />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Navigate;
