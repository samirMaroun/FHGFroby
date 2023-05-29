import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/services.module.css";
import ServiceCard from "../Components/Services/ServiceCard";
import { ServicesOfFHG } from "../Data/Data";

const Services = () => {
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
          Services
        </Grid>
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        rowGap={5}
        columnGap={3}
        paddingTop={10}
      >
        {ServicesOfFHG?.map((service) => (
          <ServiceCard
            key={service.Id}
            id={service.Id}
            imgUrl={service.Image}
            title={service.Title}
            description={service.Desciption}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Services;
