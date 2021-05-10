import styled from "styled-components";
import {
  setColor,
  setFlex,
  sizes,
  transition,
  letterSpacing,
} from "../../GlobalStyles/helper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  min-height: 5vh;
  z-index: 5;

  .nav-links__animate {
    display: none;
    @media (max-width: ${sizes.m}) {
      ${setFlex}
      margin: 1.6rem;
      background: ${setColor.primary};
      height: 10rem;
      border-radius: 1.6rem;
      font-weight: 600;
      letter-spacing: ${letterSpacing("2")};
    }
  }

  .active {
    background: ${setColor.primary};
    color: ${setColor.mainWhite};

    @media (max-width: ${sizes.m}) {
      background: ${setColor.mainWhite};
      color: ${setColor.primeDark};
    }
  }

  @media (min-width: ${sizes.m}) {
    ${setFlex({ x: "space-between" })};
    padding: 1.6rem;
  }
`;

export const NavHeader = styled.div`
  .cv-logo {
    width: 60px;
    height: 60px;
  }

  @media (max-width: ${sizes.m}) {
    ${setFlex({ x: "space-between", y: "", d: "" })}
    padding: 1.6rem;

    .cv-logo {
      width: 70px;
      height: 70px;
    }
  }
`;

export const Title = styled(Link)`
  ${setFlex}
  color: ${setColor.primary};
`;

export const TitleSpan = styled.span`
  margin: 0 0.4rem;
  font-size: 3.2rem;
  font-weight: 550;

  @media (max-width: ${sizes.m}) {
    display: none;
  }
`;

export const NavBtn = styled.button`
  display: none;
  border: 0;
  padding: 0.8rem;
  cursor: pointer;
  background: transparent;
  ${transition};
  font-size: 2.4rem;

  &:hover {
    background: ${setColor.primary};
    color: ${setColor.mainWhite};
    border-radius: 0.8rem;
  }

  @media (max-width: ${sizes.m}) {
    display: block;
  }
`;

export const NavLinks = styled.div`
  @media (max-width: 799px) {
    display: none;
  }

  @media (min-width: ${sizes.m}) {
    ${setFlex}
    border-radius: 1.6rem;
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  font-size: 2.4rem;
  ${transition};
  border-radius: 1.6rem;
  margin: 0 1.6rem;
  color: ${setColor.primary};
  letter-spacing: ${letterSpacing("2")};
  &:hover {
    background: ${setColor.primary};
    color: ${setColor.mainWhite};
  }

  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
    display: block;
    width: 100%;
    color: ${setColor.mainWhite};
    text-align: center;

    &:hover {
      background: ${setColor.mainWhite};
      color: ${setColor.primeDark};
    }
  }
`;
