import { Grid } from "@mui/material";
import React from "react";
import classes from "../../assets/Styles/services.module.css";

const ServiceTab = (props) => {
  return (
    <Grid item container className={classes["box"]}>
    <Grid item className={classes["box2"]}>
      {props.Title}
      </Grid>
    </Grid>
  );
};

export default ServiceTab;
