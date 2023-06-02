import React from "react";
import { Grid } from "@mui/material";
import classes from "../../assets/Styles/contactus.module.css";
const WorkTime = (props) => {
  return (
    <Grid
      item
      container
      paddingTop={2}
      direction={"row"}
    >
      <Grid item className={classes["infoCOm2"]} xs={6}>
        {props.title}
      </Grid>
      <Grid
        item
        className={classes["infoCOm2"]}
        xs={6}
        container
        direction={"row-reverse"}
      >
        {props.title2}
      </Grid>
    </Grid>
  );
};

export default WorkTime;
