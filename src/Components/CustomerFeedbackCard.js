import React from "react";
import { Grid, IconButton } from "@mui/material";
import classes from "../assets/Styles/Navbar.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
const CustomerFeedbackCard = (props) => {
  return (
    <Grid item container justifyContent={"center"} alignItems={"center"}>
      <Grid item className={classes["carouselText"]} xs={9}>
        {props.description}
      </Grid>
      <Grid item paddingTop={3} xs={12} className={classes["feedbacker"]}>
        {props.author}
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"row"}
        gap={1}
        paddingTop={1}
      >
        <StarRateIcon fontSize="medium" htmlColor="#73b21a" />
        <StarRateIcon fontSize="medium" htmlColor="#73b21a" />
        <StarRateIcon fontSize="medium" htmlColor="#73b21a" />
        <StarRateIcon fontSize="medium" htmlColor="#73b21a" />
        <StarRateIcon fontSize="medium" htmlColor="#73b21a" />
      </Grid>
    </Grid>
  );
};

export default CustomerFeedbackCard;
