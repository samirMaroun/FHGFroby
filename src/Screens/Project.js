import { Grid } from "@mui/material";
import React from "react";
import classes from "../assets/Styles/projects.module.css";
import { ProjectsFHG } from "../Data/Data";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProjectInfo from "../Components/Projects/ProjectInfo";
import challenges from "../assets/Images/challenges.jpeg";
import Results from "../assets/Images/results.jpeg";


const Project = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  const [project, setProject] = useState(null);
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();

  const Id = query.get("id");
  useEffect(() => {
    if (Id) {
      setProject(ProjectsFHG.find((x) => x.Id === +Id));
    }
  }, [Id]);
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
          {project?.Name}
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} sm={8.9} marginTop={10}>
        <Grid gap={3.5} item container xs={12} direction={"row"}>
          <Grid item xs={4}>
            <Grid className={classes["welcomet"]} marginTop={1}>
              <Grid item container direction={"row"}>
                Project&nbsp;
                <Grid item className={classes["garden"]}>
                  Info
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              width={200}
              border={"1px dashed #cccccc"}
              height={0}
              marginTop={2}
            ></Grid>
            <Grid item marginTop={2} className={classes["pinfo"]}>
              {project?.Brief}
            </Grid>
            <Grid item container marginTop={1} direction={"row"} gap={5}>
              <Grid item xs={5}>
                <ProjectInfo title="Category" type={project?.Types[0]} />
                <ProjectInfo title="Start Date" type={project?.StartDate} />
                <ProjectInfo
                  title="Project Value"
                  type={project?.ProjectValue}
                />
              </Grid>
              <Grid item xs={5}>
                <ProjectInfo title="Client" type={project?.Client} />
                <ProjectInfo title="End Date" type={project?.EndDate} />
                <ProjectInfo title="Location" type={project?.Location} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.7} container>
            <img
              src={project?.ImageBefore}
              width={"100%"}
              height={"86%"}
              alt="h"
            />
            <Grid item className={classes["banda"]} xs={12}>
              Before
            </Grid>
          </Grid>
          <Grid item xs={3.7} container>
            <img
              src={project?.ImageAfter}
              width={"100%"}
              height={"86%"}
              alt="h"
            />
            <Grid item className={classes["banda"]} xs={12}>
              After
            </Grid>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid
            item
            container
            direction={"row"}
            className={classes["welcomet"]}
            marginTop={10}
          >
            Project&nbsp;
            <Grid item className={classes["garden"]}>
              Description
            </Grid>
          </Grid>

          <Grid
            item
            width={200}
            border={"1px dashed #cccccc"}
            height={0}
            marginTop={2}
          ></Grid>
          <Grid item marginTop={2} className={classes["pinfo"]}>
            {project?.Description}
          </Grid>
        </Grid>

        <Grid item container direction={"row"}>
          <Grid item xs={6}>
            <Grid
              item
              container
              direction={"row"}
              className={classes["welcomet"]}
              marginTop={10}
            >
              Project&nbsp;
              <Grid item className={classes["garden"]}>
                Challenges
              </Grid>
            </Grid>

            <Grid
              item
              width={200}
              border={"1px dashed #cccccc"}
              height={0}
              marginTop={2}
            ></Grid>
            <Grid item xs={12} container direction={"row"} marginTop={5}>
              <Grid item xs={6}>
                <img src={challenges} width={"100%"} height={290} alt="hi" />
              </Grid>
              <Grid item xs={6} paddingLeft={4}>
                {project?.Challenges?.map((ch) => (
                  <Grid
                    item
                    container
                    direction={"row"}
                    gap={1}
                    alignItems={"center"}
                  >
                    <Grid
                      width={5}
                      height={5}
                      borderRadius={5}
                      bgcolor={"#848688"}
                    ></Grid>
                    <Grid item className={classes["pinfo"]}>
                      {ch}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              item
              container
              direction={"row"}
              className={classes["welcomet"]}
              marginTop={10}
            >
              Project&nbsp;
              <Grid item className={classes["garden"]}>
                Result
              </Grid>
            </Grid>

            <Grid
              item
              width={200}
              border={"1px dashed #cccccc"}
              height={0}
              marginTop={2}
            ></Grid>
            <Grid item xs={12} container direction={"row"} marginTop={5}>
              <Grid item xs={6}>
                <img src={Results} width={"100%"} height={290} alt="hi" />
              </Grid>
              <Grid item xs={6} paddingLeft={4}>
                {project?.Results?.map((ch) => (
                  <Grid
                    item
                    container
                    direction={"row"}
                    gap={1}
                    alignItems={"center"}
                  >
                    <Grid
                      width={5}
                      height={5}
                      borderRadius={5}
                      bgcolor={"#848688"}
                    ></Grid>
                    <Grid item className={classes["pinfo"]}>
                      {ch}
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Project;
