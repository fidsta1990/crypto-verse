import styled from "styled-components";
import {
  setColor,
  setFlex,
  sizes,
  transition,
} from "../../components/GlobalStyles/helper";

export const Wrapper = styled.div`
  padding: 1.6rem;
  width: 100%;
  max-width: ${sizes.xl};
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${transition};

  &:hover {
    background: ${setColor.primary};
    box-shadow: 0 0 5px white;
    border-bottom: 2px solid rgba(255, 255, 255);

    .hoverEffect {
      color: ${setColor.mainWhite};
      font-weight: bolder;
    }
  }
`;

export const CoinLink = styled.div`
  ${setFlex({ x: "space-evenly", y: "center", d: "row" })};
  width: 100%;
  color: black;
  padding: 0.8rem;
  font-size: 1.6rem;
`;

export const Field = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 0.8rem;

  @media (max-width: 1000px) {
    &:nth-of-type(4),
    &:nth-of-type(6) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    &:nth-of-type(6),
    &:nth-of-type(7),
    &:nth-of-type(8) {
      display: none;
    }

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(5) {
      width: 80px;
    }
  }

  @media (max-width: ${sizes.s}) {
    &:nth-of-type(2) {
      display: none;
    }
  }
`;

export const FieldText = styled.p`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 0.8rem;

  &:nth-of-type(7),
  &:nth-of-type(8) {
    word-wrap: break-word;
  }

  @media (max-width: ${sizes.m}) {
    &:nth-of-type(4) {
      color: red;
    }
  }
`;

export const CoinName = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinImg = styled.img`
  width: 3rem;
  height: 3rem;
  display: block;
`;
