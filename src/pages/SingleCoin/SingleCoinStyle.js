import styled from "styled-components";
import {
  setFlex,
  sizes,
  setColor,
  setGridRes,
  setGrid,
  transition,
} from "../../components/GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 4rem;
  padding-top: 8rem;
  ${setFlex({ x: "space-evenly", y: "center", d: "column" })};
`;

export const CoinWrapper = styled.div`
  ${setGridRes};
  align-content: center;
  width: 100%;
  max-width: ${sizes.xl};
  min-height: 80vh;

  @media (max-width: ${sizes.xs}) {
    max-width: 350px;
    margin: 0 auto;
  }

  @media (min-width: ${sizes.m}) {
    ${setGrid};

    margin: 3.2rem 0;
    padding: 4rem 0;
  }
`;

export const CoinImgWrap = styled.div`
  height: 400px;
  width: 100%;
  margin: 6rem 0 4rem;
  max-width: 400px;
  display: grid;
  place-items: center;

  img {
    width: 80%;
  }

  @media (max-width: ${sizes.xs}) {
    max-width: 350px;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }
`;

export const CoinInfoWrap = styled.article`
  ${setFlex({ x: "space-evenly", y: "flex-start", d: "column" })};
  width: 100%;
  max-width: 500px;

  a {
    padding: 2rem;
    font-size: 2.4rem;
    ${setFlex({ x: "space-evenly", y: "center", d: "row" })};
    background: ${setColor.primary};
    border-radius: 0.8rem;
    color: ${setColor.mainWhite};
    ${transition};
    margin-bottom: 2.4rem;

    .icon {
      margin-right: 0.8rem;
      margin-bottom: 0.4rem;
    }

    &:hover {
      background: ${setColor.darkGrey};
    }
  }

  @media (max-width: ${sizes.s}) {
    background: ${setColor.primary};
    padding: 1.6rem;
    border-radius: 0.8rem;
    max-width: 350px;
    margin: 0 auto;

    a {
      background: ${setColor.mainWhite};
      color: ${setColor.primeDark};

      &:hover {
        background: ${setColor.darkGrey};
        color: ${setColor.mainWhite};
      }
    }
  }
`;

export const CoinTitle = styled.h2`
  font-size: 3.2rem;
  padding: 0.8rem 0;
  margin-bottom: 1.6rem;
  width: 100%;
  ${setFlex({ x: "space-between", y: "center", d: "row" })};

  @media (max-width: ${sizes.s}) {
    color: ${setColor.mainWhite};
    font-size: 2.4rem;
  }
`;
export const CoinParagraph = styled.p`
  font-size: 2.4rem;
  width: 100%;
  ${setFlex({ x: "space-between", y: "center", d: "row" })};

  @media (max-width: ${sizes.s}) {
    color: ${setColor.mainWhite};
    font-size: 1.6rem;
  }
`;
export const CoinSpan = styled.span`
  color: ${setColor.mainWhite};
  background: ${setColor.primary};
  padding: 0.8rem;
  border-radius: 0.8rem;
`;

export const CoinDescription = styled.article`
  width: 100%;
  max-width: ${sizes.xl};
  margin: 0 auto;

  span {
    color: ${setColor.primary};
    margin-left: 0.8rem;
    cursor: pointer;
  }
`;

export const DescriptionPara = styled.p`
  font-size: 2.4rem;
  margin-top: 3.2rem;
  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
  }
`;
