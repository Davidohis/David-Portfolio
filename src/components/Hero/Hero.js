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
          Hi There 👋🏾, I'm
          <br />
          <Span
            style={{
              color: "#e7f6ba",
            }}
          >
            David Igheose ,
          </Span>
          <br />
        </SectionTitle>
        <SectionText2>
          A Software Engineer{" "}
          <span
            style={{
              color: "#e7f6ba",
              textDecoration: "underline",
            }}
          >
            (Front-End)
          </span>{" "}
          at Asset & Equity Group 🏆, I focus majorly on the frontend side of
          applications, with professional experience in React (and its
          frameworks) and basic experience of Vue. I also love building
          accessible applications, passionate about clean, testable, and
          maintainable code. In my free time, I attend online meetups and
          conferences, listen to podcasts, read blogs and take online courses in
          order to help me become a better developer.
          <br />
        </SectionText2>
        <ListTitle
          style={{
            color: "#e7f6ba",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location =
              "https://drive.google.com/file/d/1H11e2Q1nXuhoafTiW3J7NU9RSfYcj8DO/view?usp=sharing")
          }
        >
          Resume
        </ListTitle>
      </LeftSection>
    </Section>
  );
}

export default Hero;
