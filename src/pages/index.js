import Acomplishments from "../components/Acomplishments/Acomplishments";
import Hero from "../components/Hero/Hero";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Timeline />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
