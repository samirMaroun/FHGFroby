import { Grid } from "@mui/material";
import React from "react";
import classes from "../../assets/Styles/testimonial.module.css";
import notActiveQuotes from "../../assets/Images/notAquotes.png";
import ActiveQuotes from "../../assets/Images/activeQuotes.png";
import { useState } from "react";

const TestimonialCard = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Grid
      item
      lg={3.7}
      md={3.7}
      sm={5}
      xs={10}
      justifyContent={"center"}
      className={classes["box"]}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <Grid item xs={12} justifyContent={"center"} container>
        <img
          src={hovered ? ActiveQuotes : notActiveQuotes}
          className={classes["img2"]}
          alt={"hii"}
          width={100}
        />
      </Grid>

      <Grid item xs={12} className={classes["title"]}>
        {props.test?.Title}
      </Grid>
      <Grid item xs={12} className={classes["desc"]} marginTop={3}>
        {props.test?.Desciption}
      </Grid>
      <Grid item xs={12} justifyContent={"center"} container marginTop={3}>
        <Grid item height={0} width={200} border={"1px dashed #ececec"} />
      </Grid>
      <Grid item xs={12} className={classes["title"]} marginTop={1}>
        {props.test?.Name}
      </Grid>
    </Grid>
  );
};

export default TestimonialCard;
