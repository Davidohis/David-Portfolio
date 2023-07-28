import React from "react";
import {
  Section,
  SectionTitle,
  SectionText2,
} from "../../styles/GlobalComponents";
import { LeftSection, Span } from "./HeroStyles";

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
            David Igheose
          </Span>
          <br />
        </SectionTitle>
        <SectionText2>
          Experienced Software Engineer and Mobile Developer skilled in crafting
          simple and intuitive interfaces through design and code. Passionate
          about transforming problems into elegant solutions. Committed to
          delivering exceptional user experiences.
          <br />
        </SectionText2>
      </LeftSection>
    </Section>
  );
}

export default Hero;
