import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle2,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const ProjectsComponent = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle2 main>Projects</SectionTitle2>
    <GridContainer>
      {projects.map(({ id, image, title, description, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            {visit === "none" ? (
              ""
            ) : (
              <ExternalLinks href={visit} target={"_blank"}>
                Visit
              </ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default ProjectsComponent;
