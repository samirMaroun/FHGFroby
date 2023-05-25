import React from "react";
import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "../../assets/Styles/Footer.module.css";
import { useState } from "react";
const WorkingTimeFooter = (props) => {
  const [active, setActive] = useState("#848484");
  return (
    <Grid
      item
      container
      direction={"row"}
      gap={4}
      marginTop={props.margin6 ? 4 : 2.5}
      alignItems={"center"}
      onMouseOver={(e) => {
        e.target.style.cursor = "pointer";
        setActive("#73b21a");
      }}
      onMouseLeave={() => {
        setActive("#848484");
      }}
    >
      <Grid item className={classes["infoCOm2"]} color={active} width={100}>
        {props.title}
      </Grid>
      <Grid item className={classes["infoCOm2"]} color={active}>
        {props.title2}
      </Grid>
    </Grid>
  );
};

export default WorkingTimeFooter;
