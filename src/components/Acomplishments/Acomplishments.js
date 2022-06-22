import React from "react";
import Link from "next/link";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  {
    number: "✍🏾 Blog",
    text: "Read my technical and non-technical articles.",
    link: "https://davidigheose.hashnode.dev/",
  },
  {
    number: "👨🏾‍💻 GitHub",
    text: "Checkout or contribute to my open source projects.",
    link: "https://github.com/davidohis",
  },
  {
    number: "🐦 Twitter",
    text: "Follow me, interact with my tweets and maybe send a DM.",
    link: "https://twitter.com/DavidIgheose",
  },
  {
    number: "💌 Newsletter",
    text: "Subscribe to and read my weekly newsletter.",
    link: "https://davidigheose.hashnode.dev/",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Let's Connect ✨</SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Link href={card.link}>
          <Box key={index}>
            <BoxNum>{card.number}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        </Link>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
