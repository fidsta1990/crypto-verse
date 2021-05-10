import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import { Wrapper, Title, SubText } from "./HomeStyle";
import TypeWrite from "./TypeWrite";
import { homeVariants } from "../../animation/homeAnim";

const Home = () => {
  return (
    <Wrapper variants={homeVariants} initial="hidden" animate="visible">
      <Title>Crypto Verse</Title>
      <SubText style={{ textAlign: "center" }}>
        <TypeWrite />
      </SubText>
      <Link to="/market">
        <Button type="button">Get Started</Button>
      </Link>
      <a
        href="https://coingecko.com/api/documentations/v3"
        target="_blank"
        rel="noreferrer"
        className="gecko"
      >
        Powered by CoinGecko API
      </a>
    </Wrapper>
  );
};

export default Home;
