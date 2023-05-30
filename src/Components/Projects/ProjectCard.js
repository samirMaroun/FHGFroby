import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "../../assets/Styles/ServiceCard.module.css";
import { useNavigate } from "react-router-dom";

const ProjectCard = (props) => {
  const [color, setColor] = useState("#00000");
  const [fullBg, setFullBg] = useState(false);
  const navigate = useNavigate();
  return (
    <Grid
      item
      container
      justifyContent={"center"}
      md={2.5}
      onMouseOver={(e) => {
        setFullBg(true);
        setColor("#73b21a");
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
        overflow={"hidden"}
      >
        <Grid
          item
          container
          style={{
            backgroundImage: `url(${props.imgUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={classes["expanded2"]}
        >
          <Grid
            item
            container
            width={"100%"}
            height={"100%"}
            bgcolor={fullBg ? "rgba(0,0,0,0.7)" : "transparent"}
          ></Grid>
        </Grid>
      </Grid>
      <Grid item className={classes["title2"]} color={color} paddingTop={2}>
        {props.title}
      </Grid>
      <Grid item className={classes["desc3"]} paddingTop={1}>
        {props.servicesTypes?.map((ser, index) =>
          index === 0 ? ser : ", " + ser
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
