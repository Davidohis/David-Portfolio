import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  UtilityList,
  ProjectsWrapper,
  HeaderPreTitle,
  HeaderTitle,
  SectionHeader,
} from "./ProjectsStyles";
import { projects } from "../../constants/constants";
import Image from "next/image";

const ProjectsComponent = () => (
  <ProjectsWrapper id="projects">
    <SectionHeader>
      <HeaderPreTitle>Featured Projects</HeaderPreTitle>
      <HeaderTitle>Some of the projects I have worked on.</HeaderTitle>
    </SectionHeader>

    <GridContainer>
      {projects.map(({ id, image, title, description, visit }) => (
        <BlogCard key={id}>
          <Image src={image} width={750} height={450} />

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
