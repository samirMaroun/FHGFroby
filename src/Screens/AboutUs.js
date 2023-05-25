import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/aboutsus.module.css";
import Gardener from "../assets/Images/gardner.jpeg";
import bgIm from "../assets/Images/AboutsUs.jpg";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import Card from "../Components/AboutUs/Card";
import handMake from "../assets/Images/handMake.png";
import achievments from "../assets/Images/achievments.png";
import workers from "../assets/Images/workers.png";
import projects from "../assets/Images/projects.png";

const AboutUs = () => {
  return (
    <Grid container paddingTop={12} paddingBottom={5} justifyContent={"center"}>
      <Grid
        item
        container
        bgcolor={"black"}
        height={"45vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item className={classes["Title"]}>
          About Us
        </Grid>
      </Grid>
      <Grid item container padding={10} direction={"row"}>
        <Grid item xs={7}>
          <Grid
            item
            container
            xs={12}
            direction={"row"}
            className={classes["welcomet"]}
          >
            About &nbsp;
            <Grid item className={classes["garden"]}>
              Our Company
            </Grid>
          </Grid>
          <Grid
            item
            width={200}
            border={"1px dashed #c4c4c4c4"}
            marginTop={2}
            height={0}
          ></Grid>
          <Grid item container direction={"row"} marginTop={5}>
            <Grid item className={classes["info1"]} color={"#292929"}>
              We are providing best Landscaping services to our valuable
              customers&nbsp;
            </Grid>
            <Grid item className={classes["info1"]} color={"#292929"}>
              who hires&nbsp;
            </Grid>
            <Grid item className={classes["info1"]} color={"#73b21a"}>
              Forever Home Gardens.
            </Grid>
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={3}>
            Forever Home Gardens is a full-service landscaping company with a
            straightforward and unique design/build philosophy. We believe in
            having one landscape designer handle the job from its conception on
            paper, to the realization on your property. The Landscaper is made
            up of a group of highly skilled landscaping professionals who pays a
            lot of attention to small details. In the 30+ years of experience
            our staff keep your property looking and functioning beautifully.
          </Grid>
          <Grid item borderLeft={"3px solid #73b21a"} marginTop={3}>
            <FormatQuoteOutlinedIcon
              fontSize="large"
              htmlColor="#73b21a"
              style={{ paddingLeft: 20 }}
            />
            <Grid
              item
              className={classes["aboutus"]}
              fontStyle={"italic"}
              paddingLeft={7}
            >
              Who loves or pursues or desires to obtain pain of itself, because
              it is pain, because The GardenHub is a full-service landscaping
              company with a straightforward and unique design.
            </Grid>
            <Grid
              item
              className={classes["author"]}
              paddingTop={1}
              paddingLeft={7}
            >
              – Astley Feltcher
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <img src={Gardener} alt={"lol"} />
        </Grid>
      </Grid>
      <Grid
        // className={`fading-background ${visible ? "visible" : ""}`}
        item
        style={{
          backgroundImage: `url(${bgIm})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        width={window.innerWidth}
      >
        <Grid
          item
          container
          width={"100%"}
          height={"100%"}
          bgcolor={"rgba(0,0,0,0.5)"}
          // justifyContent={"center"}
          alignItems={"center"}
          padding={15}
          gap={3}
        >
          <Card
            number={30}
            text={"Year Of Experience"}
            icon={handMake}
            addplus={true}
          />
          <Card number={2345} text={"Successfull Projects"} icon={projects} />
          <Card number={347} text={"Team Members"} icon={workers} />
          <Card number={85} text={"Winning Awards"} icon={achievments} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
