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
          As a{" "}
          <span
            style={{
              color: "#BF7506",
            }}
          >
           Senior Frontend Engineer
          </span>{" "}
         About
 with years of professional experience building web applications, with a focus on frontend development.
I enjoy critically analyzing software requirements and effectively prioritize them. 
I'm a good observer of software engineering best practices and work well in a team. I have a strong interest in clean,
testable, and maintainable code.
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
