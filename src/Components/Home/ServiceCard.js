import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "../../assets/Styles/ServiceCard.module.css";
import { useNavigate } from "react-router-dom";
const ServiceCard = (props) => {
  const [color, setColor] = useState("#000000");
  const [fullBg, setFullBg] = useState(false);
  const navigate = useNavigate();
  return (
    <Grid
      item
      md={2.9}
      onMouseOver={(e) => {
        setFullBg(true);
        setColor("#ffffff");
      }}
      onMouseLeave={(e) => {
        setFullBg(false);
        setColor("#000000");
      }}
      onClick={() => {
        navigate(`/Service?id=${props.id}`);
      }}
    >
      <Grid
        item
        container
        xs={12}
        height={200}
        border={"1px solid #ccc"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          container
          direction={"column"}
          style={{
            backgroundImage: `url(${props.imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={fullBg ? classes["expanded"] : classes["image"]}
        >
          {fullBg ? (
            <Grid
              item
              container
              width={"100%"}
              height={"100%"}
              className={classes["image-container"]}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid
                xs={10}
                item
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid
                  item
                  className={classes["title"]}
                  color={color}
                  paddingTop={2}
                >
                  {props.title}
                </Grid>
                <Grid item className={classes["desc"]} paddingTop={1}>
                  {props.description}
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        {fullBg ? (
          <></>
        ) : (
          <Grid
            item
            className={classes["title"]}
            color={color}
            paddingTop={2}
            xs={12}
          >
            {props.title}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default ServiceCard;
