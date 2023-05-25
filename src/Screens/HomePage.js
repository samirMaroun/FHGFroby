import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import bgImage from "../assets/Images/20220114_101420.jpg";
import bgImage2 from "../assets/Images/20210820_075836.jpg";
import bgImage3 from "../assets/Images/20220219_095121.jpg";
import service1 from "../assets/Images/service1.jpg";
import service2 from "../assets/Images/service2.jpg";
import service3 from "../assets/Images/service3.jpg";
import service4 from "../assets/Images/service4.jpg";
import service5 from "../assets/Images/service5.jpg";
import service6 from "../assets/Images/service6.jpg";
import bgCf from "../assets/Images/bgCf.jpg";
import quotesIcon from "../assets/Images/quotesIcon.png";
import Hand from "../assets/Images/handGar.png";

import classes from "../assets/Styles/Navbar.module.css";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { CSSTransition } from "react-transition-group";
import "../assets/Styles/FadeFromTop.css";
import "../assets/Styles/FadingBackground.css";
import ServiceCard from "../Components/ServiceCard";
import CustomerFeedback from "../Components/CustomerFeedback";
const HomePage = () => {
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
    <Grid
      container
      paddingTop={12}
      paddingBottom={50}
      justifyContent={"center"}
    >
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
        height={"100vh"}
        width={"100%"}
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
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={"row"}
          >
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
              <ArrowRightOutlinedIcon fontSize="large" htmlColor={arr2Color} />
            </Grid>
          </Grid>
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
      <Grid item xs={8} className={classes["gardenText"]} paddingTop={3}>
        We provide ongoing property maintenance which includes lawn mowing,
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
        <ServiceCard
          imgUrl={service1}
          title={"Spring & Fall Cleanup"}
          description={
            "Our fall clean-up service is the process of removing all leaves, branches of the summer season"
          }
        />
        <ServiceCard
          imgUrl={service2}
          title={"Snow & Ice Removal"}
          description={
            "Snow and Ice removal services can be customized to the best possible solution in the huge area"
          }
        />
        <ServiceCard
          imgUrl={service3}
          title={"Lawn & Garden Care"}
          description={
            "Complete range of landscaping services all designed to enhance the beauty of your home and property"
          }
        />
        <ServiceCard
          imgUrl={service4}
          title={"Irrigation & Drainage"}
          description={
            "Watering your lawn and is the key to preserving its lushness and beauty the experts carefully design"
          }
        />
        <ServiceCard
          imgUrl={service5}
          title={"Stone and Hardscaping"}
          description={
            "Steady rains the leaves are dropping and each week our and hauling them off the properties"
          }
        />
        <ServiceCard
          imgUrl={service6}
          title={"Planting and Removal"}
          description={
            "Environmental problems result when exotic plants are placed in the landscape"
          }
        />
      </Grid>

      <CustomerFeedback indexCF={indexCF}></CustomerFeedback>
    </Grid>
  );
};

export default HomePage;
