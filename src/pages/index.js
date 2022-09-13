import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import ProjectsComponent from "../components/Projects/Projects";

const Home = () => {
  return (
    <Layout>
      {/* <Section grid>
        <Hero />
        <BgAnimation />
      </Section> */}
      <Hero />
      <ProjectsComponent />
      <Timeline />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
