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
        A Senior Frontend Engineer with years of experience in building web
        applications specializing in frontend development & scalable
        applications. I analyze software requirements critically and prioritize
        effectively. I’m a good observer of software engineering best practices
        and work efficiently in a team. I’m passionate about clean, testable,
        and maintainable code. I believe that through code we can create a
        better place for everyone. In my free time, I attend online meetups and
        conferences, listen to podcasts, read blogs and take online courses in
        order to help me become a better developer also 💙 A Fun fact: I'm in a
        blissful relationship{" "}
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
