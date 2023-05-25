import React from "react";
import { Grid, IconButton } from "@mui/material";
import classes from "../../assets/Styles/Navbar.module.css";
import StarRateIcon from "@mui/icons-material/StarRate";
const CustomerFeedbackCard = (props) => {
  return (
    <Grid item container justifyContent={"center"} alignItems={"center"} xs={7} sm={12}>
      <Grid item className={classes["carouselText"]} sm={9} xs={12}>
        {props.description}
      </Grid>
      <Grid item paddingTop={3} xs={12} className={classes["feedbacker"]}>
        {props.author}
      </Grid>
      <Grid
        item
        container
        sm={12}
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
