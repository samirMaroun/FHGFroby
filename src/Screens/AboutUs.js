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
      <Grid item container padding={{ sm: 10, xs: 5 }} direction={"row"}>
        <Grid item md={7} xs={12}>
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
              Welcome to&nbsp;
            </Grid>

            <Grid item className={classes["info1"]} color={"#73b21a"}>
              Forever Home Gardens,
            </Grid>
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={3}>
            your ultimate resource for all things gardening and landscaping! We
            are passionate about transforming outdoor spaces into breathtaking
            havens of natural beauty. With our extensive knowledge and
            expertise, we strive to provide you with the inspiration, guidance,
            and tools you need to create and maintain your dream garden.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            At Forever Home Gardens , we understand that every garden is unique,
            and we believe in tailoring our services to meet your specific needs
            and preferences. Whether you are a gardening enthusiast, a homeowner
            looking to enhance your property's curb appeal, or a business owner
            seeking to create a welcoming outdoor environment, we've got you
            covered.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            Our team of dedicated and experienced professionals is committed to
            delivering exceptional results. We take pride in our attention to
            detail, creativity, and commitment to customer satisfaction. From
            conceptualizing and designing stunning landscapes to providing
            ongoing maintenance and care, we offer a comprehensive range of
            services to cater to all aspects of your gardening and landscaping
            requirements.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            What sets us apart is our unwavering dedication to sustainable and
            environmentally-friendly practices. We believe in preserving and
            nurturing the natural ecosystem while creating stunning outdoor
            spaces. Our team incorporates eco-friendly techniques, utilizes
            organic fertilizers, and promotes water conservation to ensure that
            your garden thrives in harmony with nature.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            In addition to our services, we are committed to sharing valuable
            knowledge and insights with our audience. Through our website, we
            aim to be a reliable source of information, offering tips, guides,
            and articles on various gardening and landscaping topics. Whether
            you're a beginner looking to start your first garden or a seasoned
            gardener seeking new ideas, our content will inspire and empower you
            on your journey.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            We value the trust you place in us, and we continually strive to
            exceed your expectations. Our commitment to quality,
            professionalism, and customer satisfaction is the foundation of our
            business. We invite you to explore our website, browse our services,
            and discover the endless possibilities that await you.
          </Grid>
          <Grid item className={classes["aboutus"]} marginTop={1.5}>
            Thank you for choosing Forever Home Gardens . Let's embark on this
            gardening and landscaping adventure together and create outdoor
            spaces that truly reflect your vision and passion.
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
        <Grid item md={3} display={{ xs: "none", sm: "inherit" }}>
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
          padding={{xs:5,md:15}}
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
