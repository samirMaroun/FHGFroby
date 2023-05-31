import React, { useState, useEffect } from "react";
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
import { Grid } from "@mui/material";
import arrowUp from "../assets/Images/arrowUp.png";
import classes from "../assets/Styles/Navbar.module.css";
import Project from "../Screens/Project";
const Navigate = () => {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const desiredPoint = 200; // Adjust this value to your desired point

      if (scrollY >= desiredPoint) {
        setScrolled(true);
        setWidth(40);
      } else {
        setScrolled(false);
        setWidth(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar />

        <Grid
          item
          position={"fixed"}
          right={40}
          bottom={40}
          onMouseOver={(e) => {
            e.target.style.cursor = "pointer";
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src={arrowUp}
            width={width}
            className={classes["arrowUp"]}
            alt="no"
          />
        </Grid>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/testimonials" element={<Testimonial />} />
          <Route exact path="/contactus" element={<ContactUs />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/project" element={<Project />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default Navigate;
