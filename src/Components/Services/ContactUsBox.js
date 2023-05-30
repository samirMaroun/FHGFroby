import React from "react";
import { Grid } from "@mui/material";
import classes from "../../assets/Styles/services.module.css";
import ContactUsBG from "../../assets/Images/contactBg.jpg";
import ContactUsFooter from "../Footer/ContactUsFooter";
const ContactUsBox = () => {
  return (
    <Grid
      item
      container
      xs={12}
      style={{
        backgroundImage: `url(${ContactUsBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        container
        width={"100%"}
        height={"100%"}
        bgcolor={"rgba(0,0,0,0.7)"}
        paddingLeft={1}
        paddingTop={3}
        paddingBottom={3}

      >
        <Grid item className={classes["titles"]} xs={12}>
          Contact Us
        </Grid>

        <Grid
          item
          width={90}
          border={"1px dashed #c4c4c4c4"}
          marginTop={2}
          height={0}
        ></Grid>
        <Grid item className={classes["JobDescText"]} marginTop={4}>
          Please find below contact details and contact us today!
        </Grid>
        <ContactUsFooter
          title={"info@foreverhomegradens.com"}
          title2={null}
          icon={"email"}
          fontSize={14}
        />
        <ContactUsFooter
          title={"+61 4 5263 7128"}
          title2={null}
          icon={"phone"}
          fontSize={14}
        />
      </Grid>
    </Grid>
  );
};

export default ContactUsBox;
