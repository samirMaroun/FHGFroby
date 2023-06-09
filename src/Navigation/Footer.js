import { Grid } from "@mui/material";
import React from "react";
import Logo from "../assets/Images/FHGLOGo.png";
import classes from "../assets/Styles/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ServiceFooter from "../Components/ServiceFooter";
const Footer = () => {
  return (
    <Grid
      bgcolor={"black"}
      container
      justifyContent={"center"}
      paddingBottom={20}
    >
      <Grid item container direction={"row"} xs={10} marginTop={10} gap={4}>
        <Grid item xs={2.5}>
          <img src={Logo} alt={"logo"} width={200} />
          <Grid item className={classes["infoCOm"]} marginTop={3}>
            Forever Home Gardens is company is made up of a group of highly
            skilled gardening, landscaping professionals and who pays a lot of
            attention to small details. In the 30+ years of experience our staff
            keep your property looking and functioning beautifully.
          </Grid>
          <Grid item gap={2} container direction={"row"} marginTop={3}>
            <Grid item>
              <FacebookIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#ffffff"
                fontSize="small"
              />
            </Grid>
            <Grid item>
              <TwitterIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#ffffff"
                fontSize="small"
              />
            </Grid>
            <Grid item>
              <InstagramIcon
                cursor={"pointer"}
                sx={{ "&:hover": { color: "#73b21a" } }}
                htmlColor="#ffffff"
                fontSize="small"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2.5}>
          <Grid item className={classes["titles"]} marginTop={5}>
            OUR SERVICES
          </Grid>
         <ServiceFooter title={"All Services"} margin6={true}/>
         <ServiceFooter title={"Spring & Fall Cleanup"}/>
         <ServiceFooter title={"Snow & Ice Removal"}/>
         <ServiceFooter title={"Lawn & Garden Care"}/>
         <ServiceFooter title={"Irrigation & Drainage"}/>
         <ServiceFooter title={"Stone and Hardscaping"}/>
         <ServiceFooter title={"Planting and Removal"}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
