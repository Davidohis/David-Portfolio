import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineContacts,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LET'S WORK TOGETHER</LinkTitle>
          <LinkItem href="mailto:davidigheose@gmail.com">
            davidigheose@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer></CompanyContainer>

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
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
