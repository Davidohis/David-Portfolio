import React, { useState, useRef, useEffect } from "react";
import { TimelineWrapper } from "./TimeLineStyles";
import {
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (window, left) => {
    return window?.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <TimelineWrapper id="about">
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        As a Senior Frontend Engineer specializing in web & mobile development,
        with a passion for crafting exceptional web applications. With years of
        professional experience, I have honed my skills in analyzing software
        requirements and prioritizing them effectively. My keen eye for software
        engineering best practices ensure that I consistently deliver clean,
        testable, and maintainable code.
        <br />
        <br />
        Working collaboratively in a team is where I thrive, leveraging my
        strong communication skills and ability to observe and learn from
        others. I bring a proactive mindset to every project, always striving to
        understand user needs deeply and translate them into intuitive
        solutions. My dedication to delivering high-quality software aligns with
        my commitment to continuously improving the user experience.
        <br />
        <br />
        Driven by my love for front-end development, I enjoy staying updated
        with the latest technologies and industry trends. I find joy in the
        the challenge of crafting elegant solutions that combine functionality,
        aesthetics, and optimal performance.
        <br />
        <br />
        I am a highly motivated and skilled Frontend Engineer who excels in
        frontend development. My expertise and focus on clean code, effective
        collaboration, and adherence to best practices allow me to make a
        meaningful impact on projects and create exceptional user experiences.
        <br />
        <br />
        In my free time, I attend online meetups and conferences, listen to
        podcasts, read blogs and take online courses to help me become
        a better developer also 💙 A Fun fact: I'm in a blissful relationship{" "}
        <a
          style={{
            color: "#BF7506",
            textDecoration: "underline",
          }}
          href="https://www.bible.com/bible/111/jhn.3.16"
          target={"_blank"}
        >
          {" "}
          with Jesus Christ.
        </a>
      </SectionText>

      <SectionDivider />
    </TimelineWrapper>
  );
};

export default Timeline;
