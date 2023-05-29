import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bgImage from "../assets/Images/20220114_101420.jpg";
import bgImage2 from "../assets/Images/20210820_075836.jpg";
import bgImage3 from "../assets/Images/20220219_095121.jpg";
import Hand from "../assets/Images/handGar.png";
import { ServicesOfFHG } from "../Data/Data";
import classes from "../assets/Styles/Navbar.module.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { CSSTransition } from "react-transition-group";
import "../assets/Styles/FadeFromTop.css";
import "../assets/Styles/FadingBackground.css";
import ServiceCard from "../Components/Home/ServiceCard";
import CustomerFeedback from "../Components/Home/CustomerFeedback";
import useWindowDimensions from "../Components/WindowDimensions";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
const HomePage = () => {
  const { width } = useWindowDimensions();
  const [arrColor, setArrColor] = useState("white");
  const [arr2Color, setArr2Color] = useState("white");

  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(1);
  const [indexCF, setIndexCF] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500);
  }, [visible]);

  return (
    <Grid container paddingTop={12} paddingBottom={5} justifyContent={"center"}>
      <Grid
        // className={`fading-background ${visible ? "visible" : ""}`}
        item
        bgcolor={"rgba(0,0,0,0.5)"}
        style={{
          backgroundImage: `url(${
            index === 1 ? bgImage : index === 2 ? bgImage2 : bgImage3
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        height={{ sm: "100vh", xs: "70vh" }}
        width={window.innerWidth}
      >
        <Grid
          item
          container
          width={"100%"}
          height={"100%"}
          className={classes["bgimage"]}
          // justifyContent={"center"}
          alignItems={"center"}
          paddingLeft={5}
          paddingRight={5}
        >
          <Grid
            container
            xs={12}
            justifyContent={{ md: "space-between", xs: "center" }}
            alignItems={"center"}
            direction={"row"}
          >
            {width > 1100 ? (
              <Grid
                item
                border={"0.1px dashed #fff"}
                width={60}
                height={60}
                container
                className={classes["arrCont"]}
                onMouseOver={(e) => {
                  setArrColor("#73b21a");
                }}
                onMouseLeave={(e) => {
                  setArrColor("white");
                }}
                onClick={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    if (index === 1) {
                      setIndex(3);
                    } else {
                      setIndex(index - 1);
                    }
                  }, 500);
                }}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ArrowLeftOutlinedIcon fontSize="large" htmlColor={arrColor} />
              </Grid>
            ) : (
              <></>
            )}

            <Grid item>
              <CSSTransition
                in={visible}
                timeout={1000}
                classNames="fade-from-top"
                unmountOnExit
              >
                <Grid className={classes["silderText"]}>
                  Professional Gardening, Landscaping & Maintenance Service
                </Grid>
              </CSSTransition>
              <CSSTransition
                in={visible}
                timeout={1000}
                classNames="fade-from-top"
                unmountOnExit
              >
                <Grid className={classes["silderText2"]}>
                  {index === 1
                    ? "Extend Your Home With a"
                    : index === 2
                    ? "We Providing Landscaping "
                    : "We Are Certified & Insured"}
                </Grid>
              </CSSTransition>

              <CSSTransition
                in={visible}
                timeout={1000}
                classNames="fade-from-top"
                unmountOnExit
              >
                <Grid className={classes["silderText2"]}>
                  {index === 1
                    ? "Beautiful Garden"
                    : index === 2
                    ? "Services Since 1947"
                    : "Landscapers"}
                </Grid>
              </CSSTransition>
              <CSSTransition
                in={visible}
                timeout={1000}
                classNames="fade-from-top"
                unmountOnExit
              >
                <Grid
                  item
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <button className={classes["SeivicesBut"]}>
                    Our Services
                  </button>
                </Grid>
              </CSSTransition>
            </Grid>
            {width > 1100 ? (
              <Grid
                item
                border={"0.1px dashed #fff"}
                width={60}
                height={60}
                container
                className={classes["arrCont"]}
                onMouseOver={(e) => {
                  setArr2Color("#73b21a");
                }}
                onMouseLeave={(e) => {
                  setArr2Color("white");
                }}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    if (index === 3) {
                      setIndex(1);
                    } else {
                      setIndex(index + 1);
                    }
                  }, 500);
                }}
              >
                <ArrowRightOutlinedIcon
                  fontSize="large"
                  htmlColor={arr2Color}
                />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
          {width < 1100 ? (
            <Grid
              item
              container
              direction={"row"}
              gap={2}
              justifyContent={"center"}
            >
              <Grid
                item
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    setIndex(1);
                  }, 500);
                }}
              >
                {index === 1 ? (
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                ) : (
                  <RadioButtonUncheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                )}
              </Grid>
              <Grid
                item
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    setIndex(2);
                  }, 500);
                }}
              >
                {index === 2 ? (
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                ) : (
                  <RadioButtonUncheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                )}
              </Grid>
              <Grid
                item
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => {
                  setVisible(!visible);
                  setTimeout(() => {
                    setIndex(3);
                  }, 500);
                }}
              >
                {index === 3 ? (
                  <RadioButtonCheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                ) : (
                  <RadioButtonUncheckedOutlinedIcon
                    fontSize="medium"
                    htmlColor="#ffffff"
                  />
                )}
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        direction={"row"}
        className={classes["welcomet"]}
        marginTop={9}
      >
        Welcome To &nbsp;
        <Grid item className={classes["garden"]}>
          Forever Home Gardens
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"}>
        <img src={Hand} width={50} alt={"hi"} />
      </Grid>

      <Grid item width={200} border={"1px dashed #73b21a"} height={0}></Grid>
      <Grid item xs={12}></Grid>
      <Grid
        item
        sm={8}
        xs={11}
        className={classes["gardenText"]}
        paddingTop={3}
      >
        We provide on going property maintenance which includes lawn mowing,
        fertilizing, spring and fall cleanups, de-thatching, aerating, seeding,
        mulching, edging, herbicide application, plant health care, snow
        plowing, pruning, and tree care and removal.
      </Grid>
      <Grid
        item
        container
        xs={12}
        justifyContent={"center"}
        direction={"row"}
        className={classes["welcomet"]}
        marginTop={9}
      >
        Feature &nbsp;
        <Grid item className={classes["garden"]}>
          Services
        </Grid>
      </Grid>
      <Grid item width={200} border={"1px dashed #cccccc"} height={0}></Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        rowGap={5}
        columnGap={3}
        paddingTop={3}
      >
        {ServicesOfFHG?.map((service) => (
          <ServiceCard
            key={service.Id}
            imgUrl={service.Image}
            title={service.Title}
            description={service.Desciption}
          />
        ))}
      </Grid>

      <CustomerFeedback indexCF={indexCF}></CustomerFeedback>
    </Grid>
  );
};

export default HomePage;
