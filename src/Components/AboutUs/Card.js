import { Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "../../assets/Styles/aboutsus.module.css";
const Card = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(props.number);
    if (counter < props.number) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 30);

      return () => {
        clearInterval(interval);
      };
    }
  }, [counter]);
  return (
    <Grid
      container
      width={300}
      height={300}
      border={"1px dashed rgba(255, 255, 255, 0.15)"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <img src={props.icon} alt={"icon"} width={80} />
      <Grid item className={classes["number"]} xs={12}>
        {counter}
      </Grid>
      <Grid item className={classes["numberText"]}>
        {props.text}
      </Grid>
    </Grid>
  );
};

export default Card;
