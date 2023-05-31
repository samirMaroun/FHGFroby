import React, { useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import classes from "../assets/Styles/Navbar.module.css";
import Logo from "../assets/Images/FHGLOGo.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import useWindowDimensions from "../Components/WindowDimensions";
import PhoneNav from "./PhoneNav";
import { useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";
import { ServicesOfFHG } from "../Data/Data";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");
  const [serviceId, setServiceId] = useState(null);

  const targetRef = useRef(null);
  const { width } = useWindowDimensions();
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const handleScroll = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      setIsScrolledPast(top + 100 < 0);
    }
  };
  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveTab("Home");
    } else if (window.location.pathname === "/aboutus") {
      setActiveTab("AboutUs");
    } else if (window.location.pathname === "/services") {
      setActiveTab("Services");
    } else if (window.location.pathname === "/projects") {
      setActiveTab("Projects");
    } else if (window.location.pathname === "/testimonials") {
      setActiveTab("Testimonials");
    } else if (window.location.pathname === "/contactus") {
      setActiveTab("ContactUs");
    } else if (window.location.pathname.includes("/Service")) {
      setActiveTab("Services");
    }
  }, [window.location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(true);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };
  return width > 1100 ? (
    <Grid
      container
      ref={targetRef}
      className={classes["navbar"]}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={1}
      direction={"row"}
      height={isScrolledPast ? 0 : 55}
      width={"100%"}
      // position={"fixed"}
    >
      {isScrolledPast ? (
        <></>
      ) : (
        <>
          <Grid
            item
            lg={2}
            onMouseOver={(e) => {
              e.target.style.cursor = "pointer";
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt={"logo"} width={180} />
          </Grid>
          <Grid item container lg={6.5} md={7.5} direction="row-reverse">
            <Grid item container direction="row" paddingTop={1} xs={5}>
              <Grid item paddingTop={1}>
                <AccessTimeIcon htmlColor="#73b21a" fontSize="large" />
              </Grid>
              <Grid item paddingLeft={2}>
                <Grid item xs={12} className={classes["infoText"]}>
                  Working Hours:
                </Grid>
                <Grid item xs={12} className={classes["infoText2"]}>
                  MON - FRI: 8AM - 5PM
                </Grid>
              </Grid>
            </Grid>
            <Grid item container direction="row" paddingTop={1} xs={5}>
              <Grid item paddingTop={1}>
                <PlaceOutlinedIcon htmlColor="#73b21a" fontSize="large" />
              </Grid>
              <Grid item paddingLeft={2}>
                <Grid item xs={12} className={classes["infoText"]}>
                  Address : GreenHub,
                </Grid>
                <Grid item xs={12} className={classes["infoText2"]}>
                  NEWYORK 10012, USA
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={1.5}
            md={2}
            gap={2}
            container
            direction={"row"}
            paddingLeft={4}
          >
            <Grid item>
              <FacebookIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#000000"
                fontSize="small"
              />
            </Grid>
            <Grid item>
              <TwitterIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#000000"
                fontSize="small"
              />
            </Grid>
            <Grid item>
              <InstagramIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#000000"
                fontSize="small"
              />
            </Grid>
          </Grid>
        </>
      )}
      <Grid
        item
        container
        direction={"row"}
        justifyContent={"center"}
        marginTop={isScrolledPast ? 6 : 4}
        position={isScrolledPast ? "fixed" : "relative"}
        gap={2}
        zIndex={1}
      >
        <Grid
          item
          container
          lg={6.5}
          md={7}
          height={70}
          bgcolor={"#1d1d1d"}
          padding={1}
          direction={"row"}
        >
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "Home" ? "#73b21a" : "#ffff"}
            onClick={() => {
              navigate("/");
            }}
          >
            HOME
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "AboutUs" ? "#73b21a" : "#ffff"}
            onClick={() => {
              navigate("/aboutus");
            }}
          >
            ABOUT US
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "Services" ? "#73b21a" : "#ffff"}
            onMouseOver={handleClick}
            onMouseLeave={handleClose}
          >
            <Grid
              item
              onClick={() => {
                navigate("/services");
              }}
            >
              SERVICES
            </Grid>

            {anchorEl ? (
              <Grid
                item
                container
                sx={{
                  position: "absolute",
                  width: 300,
                  bgcolor: "#1d1d1d",
                  borderTop: "solid 1px #73b21a",
                  color: "#ffffff",
                  top: 60,
                }}
              >
                <Grid
                  onClick={handleClose}
                  xs={12}
                  className={classes["services"]}
                >
                  All Services
                </Grid>
                {ServicesOfFHG.map((service) => (
                  <Grid
                    onClick={(e) => {
                      navigate(`/Service?id=${service.Id}`);
                      handleClose();
                    }}
                    xs={12}
                    className={classes["services"]}
                  >
                    {service.Title}
                  </Grid>
                ))}
              </Grid>
            ) : (
              <></>
            )}
          </Grid>

          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "Projects" ? "#73b21a" : "#ffff"}
            onClick={() => {
              navigate("/projects");
            }}
          >
            PROJECTS
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "Testimonials" ? "#73b21a" : "#ffff"}
            onClick={() => {
              navigate("/testimonials");
            }}
          >
            TESTIMONIALS
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
            color={activeTab === "ContactUs" ? "#73b21a" : "#ffff"}
            onClick={() => {
              navigate("/contactus");
            }}
          >
            CONTACT US
          </Grid>
        </Grid>
        <Grid
          item
          container
          lg={2.5}
          md={3}
          height={70}
          bgcolor={"#73b21a"}
          direction={"row"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PhoneInTalkOutlinedIcon htmlColor="#fff" fontSize="large" />
          <Grid item className={classes["PhoneNumber"]}>
            +61 4 5263 7128
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <PhoneNav activeTab={activeTab} />
  );
};

export default Navbar;
