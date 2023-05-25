import React from "react";
import { Grid } from "@mui/material";
import classes from "../../assets/Styles/Footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
const ContactUsFooter = (props) => {
  return (
    <Grid
      item
      container
      direction={"row"}
      gap={2}
      marginTop={props.margin6 ? 4 : 2.5}
      alignItems={"center"}
    >
      {props.icon === "world" ? (
        <LanguageIcon fontSize="medium" htmlColor="#73b21a" />
      ) : props.icon === "email" ? (
        <EmailOutlinedIcon fontSize="medium" htmlColor="#73b21a" />
      ) : props.icon === "phone" ? (
        <ContactPhoneOutlinedIcon fontSize="medium" htmlColor="#73b21a" />
      ) : (
        <QueryBuilderOutlinedIcon fontSize="medium" htmlColor="#73b21a" />
      )}

      <Grid item className={classes["infoCOm2"]} color={"#848484"}>
        {props.title}
      </Grid>
      <Grid item className={classes["infoCOm2"]} color={"#848484"} marginLeft={4.4}>
        {props.title2}
      </Grid>
    </Grid>
  );
};

export default ContactUsFooter;
