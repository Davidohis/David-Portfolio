import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineContacts,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "16px",
          }}
        >
          <img
            style={{
              marginRight: "5px",
              borderRadius: "50%",
            }}
            src="/assets/3.png"
            width={30}
            height={30}
            alt={"personal"}
          />
          <Span>DI</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="https://davidigheose.hashnode.dev/">
          <NavLink>Blog</NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/davidohis">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/davidigheose/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/DavidIgheose">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="mailto:davidigheose@gmail.com">
        <AiOutlineContacts size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
