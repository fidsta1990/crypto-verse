import React from "react";
import styled from "styled-components";
import { setFlex, setColor } from "../../components/GlobalStyles/helper";
import Button from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        The page you are looking for might have been removed <br />
        had it's name changed or is temporarily unavailble
      </p>
      <Link to="/">
        <Button>GO TO HOMEPAGE</Button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  ${setFlex({ x: "center", y: "center", d: "column" })}
  font-size: 3.2rem;
  text-align: center;

  h1 {
    font-size: 12rem;
    color: ${setColor.primary};
  }

  h2 {
    color: ${setColor.darkGrey};
    margin: 1.6rem;
  }

  p {
    color: ${setColor.darkGrey};
    opacity: 0.9;
    margin: 1.6rem;
  }
`;

export default Error;
