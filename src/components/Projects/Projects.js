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
  TagList,
  Tag,
} from "./ProjectsStyles";
import { SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const ProjectsComponent = () => (
  <ProjectsWrapper id="projects">
    <SectionDivider id="projects" />
    <SectionTitle id="projects">Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <HeaderThree title>{title}</HeaderThree>
          {/* <TagList>
            <Tag>HTML HTML</Tag>
            <Tag>HTML HTML</Tag>
            <Tag>HTML HTML</Tag>
            <Tag>HTML HTML</Tag>
            <Tag>HTML HTML</Tag>
          </TagList> */}
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            {visit === "none" ? (
              ""
            ) : (
              <>
                {/* <ExternalLinks href={visit} target={"_blank"}>
                  Code
                </ExternalLinks> */}
                <ExternalLinks href={visit} target={"_blank"}>
                  Demo
                </ExternalLinks>
              </>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </ProjectsWrapper>
);

export default ProjectsComponent;
