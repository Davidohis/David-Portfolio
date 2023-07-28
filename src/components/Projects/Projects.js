import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  UtilityList,
  Img,
  ProjectsWrapper,
  HeaderPreTitle,
  HeaderTitle,
  SectionHeader,
} from "./ProjectsStyles";
import { projects } from "../../constants/constants";

const ProjectsComponent = () => (
  <ProjectsWrapper id="projects">
    <SectionHeader>
      <HeaderPreTitle>Featured Projects</HeaderPreTitle>
      <HeaderTitle>Some of the projects I have worked on.</HeaderTitle>
    </SectionHeader>

    <GridContainer>
      {projects.map(({ id, image, title, description, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <HeaderThree title>{title}</HeaderThree>

          <CardInfo>{description}</CardInfo>

          <UtilityList>
            {visit === "none" ? (
              ""
            ) : (
              <ExternalLinks href={visit} target={"_blank"}>
                visit product
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </ProjectsWrapper>
);

export default ProjectsComponent;
