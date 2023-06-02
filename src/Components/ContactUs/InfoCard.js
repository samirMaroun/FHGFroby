import React from "react";
import { Grid } from "@mui/material";
import classes from "../../assets/Styles/contactus.module.css";
import CardRow from "./CardRow";
import WorkTime from "./WorkTime";
const InfoCard = (props) => {
  return (
    <Grid item container xs={12} border={"2px solid #ececec"}>
      {props.type === "contact" ? (
        <Grid
          item
          container
          width={"100%"}
          height={"100%"}
          paddingLeft={3}
          paddingBottom={4}
        >
          <CardRow
            title={"200K Camden Borough,"}
            title2={"London, United Kingdom"}
            icon={"world"}
          />
          <CardRow
            title={"info@foreverhomegradens.com"}
            title2={null}
            icon={"email"}
          />
          <CardRow title={"+61 4 5263 7128"} title2={null} icon={"phone"} />
        </Grid>
      ) : (
        <Grid item padding={2} xs={12}>
          <WorkTime title={"Monday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Tuesday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Wednesday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Thursday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Friday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Saturday"} title2={"9:30 am - 6.00 pm"} />
          <WorkTime title={"Sunday"} title2={"9:30 am - 6.00 pm"} />
        </Grid>
      )}
    </Grid>
  );
};

export default InfoCard;
