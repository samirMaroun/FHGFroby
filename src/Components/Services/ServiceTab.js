import { Grid } from "@mui/material";
import React from "react";
import classes from "../../assets/Styles/services.module.css";
import { useNavigate } from "react-router-dom";

const ServiceTab = (props) => {
  const navigate = useNavigate()
  return (
    <Grid
      marginTop={props.index === 0 ? 0 : 1}
      item
      container
      className={
        props.Id === +props.ActiveId ? classes["boxActive"] : classes["box"]
      }
      onClick={()=>{
        navigate(`/Service?id=${props.Id}`);
      }}
    >
      <Grid
        item
        className={
          props.Id === +props.ActiveId ? classes["box2Active"] : classes["box2"]
        }
      >
        {props.Title}
      </Grid>
    </Grid>
  );
};

export default ServiceTab;
