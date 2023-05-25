import React, { useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import classes from "../assets/Styles/Navbar.module.css";
import Logo from "../assets/Images/FHGLOGo.png";
import ClockIcon from "../assets/Images/CLockIcon.png";
import LocationIcon from "../assets/Images/locationIcon.png";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
const Navbar = () => {
  const targetRef = useRef(null);
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const handleScroll = () => {
    const targetElement = targetRef.current;
    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      setIsScrolledPast(top + 100 < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Grid
      container
      ref={targetRef}
      className={classes["navbar"]}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={1}
      direction={"row"}
      height={isScrolledPast ? 0 : 55}

      // position={"fixed"}
    >
      {isScrolledPast ? (
        <></>
      ) : (
        <>
          <Grid item lg={2}>
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
          md={6.5}
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
          >
            HOME
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
          >
            ABOUT US
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
          >
            SERVICES
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
          >
            PROJECTS
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
          >
            TESTIMONIALS
          </Grid>
          <Grid
            paddingTop={"18px"}
            item
            border={"0.1px dashed rgb(68, 68, 68)"}
            xs={2}
            className={classes["navButtons"]}
          >
            CONTACT US
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={2.5}
          height={70}
          bgcolor={"#73b21a"}
          direction={"row"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <PhoneInTalkOutlinedIcon htmlColor="#fff" fontSize="large" />
          <Grid item className={classes["PhoneNumber"]}>
            {" "}
            +61 4 5263 7128
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // <Grid
    //   container
    //   className={classes["navbar"]}
    //   direction={"row-reverse"}
    //   alignItems={"center"}
    //   position={"fixed"}
    // >
    //   <Grid
    //     item
    //     xs={8}
    //     container
    //     alignItems={"center"}
    //     justifyContent={"center"}
    //     className={classes["inclined"]}
    //     gap={15}
    //   >
    //     <Grid item className={classes["navButtons"]}>
    //       Home
    //     </Grid>
    //     <Grid item className={classes["navButtons"]}>
    //       Services
    //     </Grid>
    //     <Grid item className={classes["navButtons"]}>
    //       Projects
    //     </Grid>
    //     <Grid item className={classes["navButtons"]}>
    //       Abouts us
    //     </Grid>
    //     <Grid item className={classes["navButtons"]}>
    //       Contact us
    //     </Grid>
    //   </Grid>
    //   <Grid item lg={4} paddingLeft={8}>
    //     <img src={Logo} alt={"logo"} width={180} />
    //   </Grid>
    // </Grid>
  );
};

export default Navbar;
