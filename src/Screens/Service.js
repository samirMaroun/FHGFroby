import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/services.module.css";
import { ServicesOfFHG } from "../Data/Data";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceTab from "../Components/Services/ServiceTab";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ContactUsBox from "../Components/Services/ContactUsBox";
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
  const TotalUnitCost = service?.Items?.reduce(
    (total, obj) => total + obj.UnitCost,
    0
  );

  const TotalQuantity = service?.Items?.reduce(
    (total, obj) => total + obj.Quantity,
    0
  );
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
        sm={12}
        xs={10}
      >
        <Grid item width={{ sm: 250, xs: 320 }} gap={1}>
          {ServicesOfFHG.map((serviceTitle, index) => (
            <ServiceTab
              index={index}
              Id={serviceTitle.Id}
              ActiveId={Id}
              Title={serviceTitle.Title}
            />
          ))}
        </Grid>
        <Grid sm={6.8} item direction={"row"} container gap={4}>
          <Grid item lg={5.7} md={5.5} sm={5.3} xs={12}>
            <img src={service?.Image1} width={"100%"} height={280} alt={"1"} />
          </Grid>
          <Grid item lg={5.7} md={5.5} sm={5.3} xs={12}>
            <img src={service?.Image2} width={"100%"} height={280} alt={"1"} />
          </Grid>
          <Grid item xs={12} className={classes["JobDescText"]}>
            {service?.JobDesciption}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        gap={4}
        marginTop={7}
        justifyContent={"center"}
        sm={12}
        xs={10}
      >
        <Grid item display={{ xs: "none", sm: "unset" }} width={250} gap={1}>
          <ContactUsBox />
        </Grid>
        <Grid sm={6.8} container item>
          <Grid
            item
            container
            xs={12}
            direction={"row"}
            className={classes["garden"]}
          >
            Key Benefits&nbsp;
            <Grid item className={classes["welcomet"]}>
              of Service
            </Grid>
          </Grid>
          <Grid item lg={5} className={classes["JobDescText"]} marginTop={3}>
            {service?.BenifitsDescription}
          </Grid>
          <Grid item lg={7} marginTop={3}>
            {service?.Benefits?.map((benefit, index) => (
              <Grid
                item
                xs={12}
                container
                direction={"row"}
                gap={2}
                key={benefit.Id}
                paddingLeft={{ lg: 5, md: 0 }}
                paddingTop={index === 0 ? 0 : 1}
                alignItems={"center"}
              >
                <CheckCircleOutlineRoundedIcon
                  fontSize="small"
                  htmlColor="#73b21a"
                />
                <Grid item className={classes["JobDescText"]}>
                  {benefit.Name}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        gap={4}
        marginTop={7}
        justifyContent={"center"}
        sm={12}
        xs={10}
      >
        <Grid item sm={2}></Grid>
        <Grid sm={6.8} container item>
          <Grid
            item
            container
            xs={12}
            direction={"row"}
            className={classes["garden"]}
          >
            Planting & Removal&nbsp;
            <Grid item className={classes["welcomet"]}>
              Charges
            </Grid>
          </Grid>
          <Grid item marginTop={3}>
            You can enhance the appearance of your home within your budget by
            making some essential upgrades to your plants. Opting for a new
            gravel driveway or concrete walkway can give your home a rejuvenated
            look. When working with limited funds, it's advantageous to tackle a
            larger project in smaller portions. For instance, you could invest
            in a beautiful walkway this year and address the driveway at a later
            time.
          </Grid>
          <Grid item xs={12} marginTop={3}>
            <Grid item container direction={"row"} bgcolor={"#f7f7f7"}>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader2"]}
              >
                Item Name
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader"]}
              >
                Unit Cost
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader"]}
              >
                Quantity
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader"]}
              >
                Line Cost
              </Grid>
            </Grid>
            {service?.Items.map((item, index) => (
              <Grid
                item
                container
                direction={"row"}
                bgcolor={index % 2 === 0 ? "#ffffff" : "#f7f7f7"}
              >
                <Grid
                  item
                  xs={3}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={classes["tablerow2"]}
                >
                  {item.Name}
                </Grid>
                <Grid
                  item
                  xs={3}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={classes["tableData"]}
                >
                  ${item.UnitCost} Per Day
                </Grid>
                <Grid
                  item
                  xs={3}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={classes["tableData"]}
                >
                  {item.Quantity}
                </Grid>
                <Grid
                  item
                  xs={3}
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  className={classes["tableData"]}
                >
                  ${item.UnitCost * item.Quantity}
                </Grid>
              </Grid>
            ))}
            <Grid item container direction={"row"} bgcolor={"#f7f7f7"}>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader2"]}
              >
                Total Cost
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableData"]}
              >
                ${TotalUnitCost}
                &nbsp;Per Day
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableData"]}
              >
                {TotalQuantity}
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["tableHeader"]}
              >
                $
                {service?.Items?.reduce(
                  (total, obj) => total + obj.UnitCost * obj.Quantity,
                  0
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Service;
