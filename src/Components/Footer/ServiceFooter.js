import React from "react";
import { Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "../../assets/Styles/Footer.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ServiceFooter = (props) => {
  const [active, setActive] = useState("#848484");
  const navigate = useNavigate();
  return (
    <Grid
      item
      container
      direction={"row"}
      gap={1}
      marginTop={props.margin6 ? 4 : 2.5}
      alignItems={"center"}
      onMouseOver={(e) => {
        e.target.style.cursor = "pointer";
        setActive("#73b21a");
      }}
      onMouseLeave={() => {
        setActive("#848484");
      }}
      onClick={() => {
        navigate(`/Service?id=${props.id}`);
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
