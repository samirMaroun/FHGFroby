import React from "react";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Grid } from "@mui/material";
import classes from "../../assets/Styles/projects.module.css";
const ProjectInfo = (props) => {
  return (
    <Grid item container direction={"row"} gap={2} marginTop={2}>
      {props.title === "Category" ? (
        <FolderOpenIcon htmlColor="#73b21a" fontSize="small" />
      ) : props.title === "Start Date" || props.title === "End Date" ? (
        <CalendarMonthIcon htmlColor="#73b21a" fontSize="small" />
      ) : props.title === "Client" ? (
        <PersonIcon htmlColor="#73b21a" fontSize="small" />
      ) : props.title === "Project Value" ? (
        <AttachMoneyIcon htmlColor="#73b21a" fontSize="small" />
      ) : props.title === "Location" ? (
        <LocationOnIcon htmlColor="#73b21a" fontSize="small" />
      ) : (
        <></>
      )}
      <Grid item>
        <Grid item className={classes["infotitle"]}>
          {props.title}
        </Grid>
        <Grid item className={classes["infoData"]}>
          {props.type}
        </Grid>
      </Grid>
      <Grid item xs={12} border={"0.5px solid #ececec"} height={0}></Grid>
    </Grid>
  );
};

export default ProjectInfo;
