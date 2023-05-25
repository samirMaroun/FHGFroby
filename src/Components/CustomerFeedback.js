import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bgCf from "../assets/Images/bgCf.jpg";
import quotesIcon from "../assets/Images/quotesIcon.png";
import classes from "../assets/Styles/Navbar.module.css";
import CustomerFeedbackCard from "./CustomerFeedbackCard";
const CustomerFeedback = (props) => {
  useEffect(() => {}, [props.indexCF]);
  return (
    <Grid
   
      item
      container
      style={{
        backgroundImage: `url(${bgCf})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={10}
    >
      <Grid
        item
        paddingBottom={10}
        container
        width={"100%"}
        height={"100%"}
        bgcolor={"rgba(0,0,0,0.5)"}
        justifyContent={"center"}
        paddingTop={9}
      >
        <img src={quotesIcon} width={50} alt={"quote"} />
        <Grid
          item
          container
          xs={12}
          justifyContent={"center"}
          direction={"row"}
          className={classes["welcomet"]}
          color={"#ffffff"}
        >
          Customer &nbsp;
          <Grid item className={classes["garden"]}>
            Feedback
          </Grid>
        </Grid>
        <Grid item xs={12} container justifyContent={"center"}>
          <Grid
            item
            width={200}
            border={"1px dashed #cccccc"}
            height={0}
          ></Grid>
        </Grid>

        <Grid item container direction={"row"} marginTop={5} xs={10}>
          <Carousel
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
            showStatus={false}
            swipeable={true}
            className={classes["slider"]}
          >
            <CustomerFeedbackCard
              description={
                "I hired XYZ Landscaping to transform my backyard, and I couldn't be happier with the results. Their team was professional, skilled, and attentive to every detail. They turned my dull and overgrown yard into a beautiful oasis. I highly recommend their services"
              }
              author={"Fedo Elweard - Washington"}
            />

            <CustomerFeedbackCard
              description={
                " I recently had ABC Landscaping take care of my lawn maintenance, and they exceeded my expectations. They consistently provided excellent service, always arriving on time and leaving my lawn looking neat and well-maintained. Their attention to detail and friendly staff make them a top-notch landscaping company."
              }
              author={"Fedo Elweard - Washington"}
            />
            <CustomerFeedbackCard
              description={
                " I am extremely pleased with the hardscape project completed by DEF Landscaping. They created a stunning patio and walkway that perfectly complements my outdoor space. The team was knowledgeable, professional, and worked diligently to deliver exceptional results. I would definitely hire them again for future projects."
              }
              author={"Fedo Elweard - Washington"}
            />
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomerFeedback;
