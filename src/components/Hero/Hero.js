import React from "react";
import {
  Section,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import { LeftSection, Span } from "./HeroStyles";
import { ListTitle } from "../Technologies/TechnologiesStyles";

function Hero() {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there 👋🏾, I'm
          <br />
          <Span
            style={{
              color: "#BF7506",
            }}
          >
            David Igheose ,
          </Span>
          <br />
        </SectionTitle>
        <SectionText2>
          A{" "}
          <span
            style={{
              color: "#BF7506",
            }}
          >
            Front-End Engineer
          </span>{" "}
          at Asset & Equity Group 🏆 with 3 years of experience, I focus majorly
          on the frontend side of applications, with professional experience in
          React (and its frameworks) and basic experience of Vue. I also love
          building accessible applications, passionate about clean, testable,
          and maintainable code. In my free time, I attend online meetups and
          conferences, listen to podcasts, read blogs and take online courses in
          order to help me become a better developer.
          <br />
        </SectionText2>
        <ListTitle
          style={{
            color: "#BF7506",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/18DLFkEBvKhRSRsjHK-SVsXzTZlRx1G9Y/view?usp=sharing")
          }
        >
          Download CV
        </ListTitle>
      </LeftSection>
    </Section>
  );
}

export default Hero;
