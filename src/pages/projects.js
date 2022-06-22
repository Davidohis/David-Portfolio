import React from "react";
import Header2 from "../components/Header/Header2";
import { Container } from "../layout/LayoutStyles";
import Footer from "../components/Footer/Footer";
import ProjectsComponent from "../components/Projects/Projects";

const Projects = () => (
  <React.Fragment>
    <Container>
      <Header2 />
    </Container>
    <ProjectsComponent />
    <Footer />
  </React.Fragment>
);

export default Projects;
