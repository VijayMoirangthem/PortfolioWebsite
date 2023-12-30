import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of my projects I have worked on.</Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "cdac project" ? (
            <ToggleButton
              active
              value="cdac project"
              onClick={() => setToggle("cdac project")}
            >
              CDAC PROJECT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="cdac project"
              onClick={() => setToggle("cdac project")}
            >
              CDAC PROJECT
            </ToggleButton>
          )}
          <Divider />
          {toggle === "personal project" ? (
            <ToggleButton
              active
              value="personal project"
              onClick={() => setToggle("personal project")}
            >
              PERSONAL PROJECT
            </ToggleButton>
          ) : (
            <ToggleButton
              value="personal project"
              onClick={() => setToggle("personal project")}
            >
              PERSONAL PROJECT
            </ToggleButton>
          )}
          <Divider />

          {toggle === "assignments" ? (
            <ToggleButton
              active
              value="assignments"
              onClick={() => setToggle("assignments")}
            >
              ASSIGNMENTS
            </ToggleButton>
          ) : (
            <ToggleButton
              value="assignments"
              onClick={() => setToggle("assignments")}
            >
              ASSIGNMENTS
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
