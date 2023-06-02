import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/testimonial.module.css";
import TestimonialCard from "../Components/Testimonials/TestimonialCard";
import { TestimonialsData } from "../Data/Data";


const Testimonial = () => {
  return (
    <Grid
      container
      paddingTop={12}
      paddingBottom={10}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        bgcolor={"black"}
        height={"45vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item className={classes["Title"]}>
          Testimonials
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        lg={9}
        md={11}
        sm={11}
        marginTop={10}
        gap={3}
      >
        {TestimonialsData?.map((test) => (
          <TestimonialCard test={test} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Testimonial;
