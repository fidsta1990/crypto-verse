import React from "react";
import { Wrapper, SocialWrapper } from "./FooterStyle";
import { socials } from "./socialDetails";
import moment from "moment";

const Footer = () => {
  const year = moment().format("YYYY");
  const socialLinks = socials.map((social) => (
    <a key={social.id} href={social.url}>
      {social.icon}
    </a>
  ));

  return (
    <Wrapper>
      <SocialWrapper>{socialLinks}</SocialWrapper>
      <p>
        © CryptoVerse Inc <span>{year}</span>All Rights Reserved
      </p>
    </Wrapper>
  );
};

export default Footer;
