import React from "react";
import Drawer from "@mui/material/Drawer";
import { Grid } from "@mui/material";
import Logo from "../assets/Images/FHGLOGo.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import classes from "../assets/Styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";
const PhoneNav = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (open) setOpen(true);
    else setOpen(false);
  };

  return (
    <Grid
      container
      width={"100%"}
      height={50}
      padding={3}
      alignItems={"center"}
    >
      <Grid
        item
        xs={6}
        onMouseOver={(e) => {
          e.target.style.cursor = "pointer";
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={Logo} alt={"logo"} width={180} />
      </Grid>
      <Grid item container xs={6} direction={"row-reverse"}>
        <Grid
          item
          onMouseOver={(e) => {
            e.target.style.cursor = "pointer";
          }}
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <MenuOutlinedIcon
            fontSize="large"
            htmlColor="#000000"
          ></MenuOutlinedIcon>
        </Grid>
      </Grid>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Grid container width={{ xs: 300, sm: 400 }}>
          <Grid
            padding={3}
            item
            onMouseOver={(e) => {
              e.target.style.cursor = "pointer";
            }}
            onClick={(e) => {
              setOpen(false);
            }}
            xs={12}
          >
            <CloseOutlinedIcon fontSize="large" htmlColor="#000000" />
          </Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "Home" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            HOME
          </Grid>
          <Grid item xs={12} border={"1px dashed #cccccc"} height={0}></Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "AboutUs" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/aboutus");
              setOpen(false);
            }}
          >
            ABOUT US
          </Grid>
          <Grid item xs={12} border={"1px dashed #cccccc"} height={0}></Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "Services" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/services");
              setOpen(false);
            }}
          >
            SERVICES
          </Grid>
          <Grid item xs={12} border={"1px dashed #cccccc"} height={0}></Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "Projects" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/projects");
              setOpen(false);
            }}
          >
            PROJECTS
          </Grid>
          <Grid item xs={12} border={"1px dashed #cccccc"} height={0}></Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "Testimonials" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/testimonials");
              setOpen(false);
            }}
          >
            TESTIMONIALS
          </Grid>
          <Grid item xs={12} border={"1px dashed #cccccc"} height={0}></Grid>
          <Grid
            item
            className={classes["phoenNavButt"]}
            padding={3}
            color={props.activeTab === "ContactUs" ? "#73b21a" : "#222222"}
            onClick={() => {
              navigate("/contactus");
              setOpen(false);
            }}
          >
            CONTACT US
          </Grid>
        </Grid>
      </Drawer>
    </Grid>
  );
};

export default PhoneNav;
