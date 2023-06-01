import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/projects.module.css";
import { ProjectsFHG, ServiceTypes, ServicesOfFHG } from "../Data/Data";
import ServiceTab from "../Components/Services/ServiceTab";
import { useState } from "react";
import ProjectCard from "../Components/Projects/ProjectCard";
import { useEffect } from "react";
const Projects = () => {
  const [activeId, setActiveId] = useState(0);
  const [projects, setProjects] = useState(ProjectsFHG);
  useEffect(() => {
    if (activeId === 0) {
      setProjects(ProjectsFHG);
    } else {
      setProjects(ProjectsFHG.filter((x) => x.Types.includes(activeId)));
    }
  }, [activeId]);
  return (
    <Grid
      container
      paddingTop={12}
      paddingBottom={10}
      justifyContent={"center"}
    >
      <Grid
        item
        container
        bgcolor={"black"}
        height={"45vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item className={classes["Title"]}>
          Projects
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        gap={2}
        sm={9}
        xs={10}
        marginTop={10}
        justifyContent={"center"}
      >
        <Grid
          item
          className={0 === +activeId ? classes["boxActive"] : classes["box"]}
          onClick={() => {
            setActiveId(0);
          }}
        >
          <Grid
            item
            className={
              0 === +activeId ? classes["box2Active"] : classes["box2"]
            }
          >
            View All
          </Grid>
        </Grid>
        {ServiceTypes?.map((ser, index) => (
          <Grid
            item
            className={
              ser.Name === activeId ? classes["boxActive"] : classes["box"]
            }
            onClick={() => {
              setActiveId(ser.Name);
            }}
          >
            <Grid
              item
              className={
                ser.Name === activeId ? classes["box2Active"] : classes["box2"]
              }
            >
              {ser.Name}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        container
        direction={"row"}
        gap={4}
        sm={10}
        xs={10}
        marginTop={10}
        justifyContent={"center"}
      >
        {projects?.map((pr) => (
          <ProjectCard
            id={pr.Id}
            imgUrl={pr.ImageBG}
            title={pr.Name}
            servicesTypes={pr.Types}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Projects;
