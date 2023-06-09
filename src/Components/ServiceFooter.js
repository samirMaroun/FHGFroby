import React from "react";
import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "../assets/Styles/Footer.module.css";
import { useState } from "react";
const ServiceFooter = (props) => {
  const [active, setActive] = useState("#848484");
  return (
    <Grid
      item
      container
      direction={"row"}
      gap={1}
      marginTop={props.margin6 ? 6 : 2.5}
      alignItems={"center"}
      onMouseOver={(e) => {
        e.target.style.cursor = "pointer";
        setActive("#73b21a");
      }}
      onMouseLeave={() => {
        setActive("#848484");
      }}
    >
      <ChevronRightIcon fontSize="small" htmlColor="#73b21a" />
      <Grid item className={classes["infoCOm2"]} color={active}>
        {props.title}
      </Grid>
    </Grid>
  );
};

export default ServiceFooter;
