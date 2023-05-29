import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/services.module.css";
import ServiceCard from "../Components/Services/ServiceCard";
import { ServicesOfFHG } from "../Data/Data";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceTab from "../Components/Services/ServiceTab";

const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [service, setService] = useState(null);
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();

  const Id = query.get("id");
  useEffect(() => {
    if (Id) {
      setService(ServicesOfFHG.find((x) => x.Id === +Id));
    }
  }, [Id]);
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
          {service?.Title}
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        gap={4}
        marginTop={10}
        justifyContent={"center"}
      >
        <Grid item container sm={2} gap={1}>
          {ServicesOfFHG.map((serviceTitle) => (
            <ServiceTab Id={serviceTitle.Id} Title={serviceTitle.Title} />
          ))}
        </Grid>
        <Grid sm={6.8} item direction={"row"} container gap={4}>
          <Grid item xs={5.7}>
            <img src={service?.Image1} width={"100%"} height={280} alt={"1"} />
          </Grid>
          <Grid item xs={5.7}>
            <img src={service?.Image2} width={"100%"} height={280} alt={"1"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
