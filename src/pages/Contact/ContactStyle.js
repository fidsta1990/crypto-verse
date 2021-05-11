import styled from "styled-components";
import { setFlex, sizes } from "../../components/GlobalStyles/helper";

export const Wrapper = styled.section`
  min-height: 100vh;
  padding: 2.4rem;
  padding-bottom: 4rem;
  ${setFlex({ x: "center", y: "space-evenly", d: "column" })};

  .back-btn {
    margin: 1.6rem 0 8rem;
    width: 165px;
  }

  @media (min-width: ${sizes.xss}) {
    .back-btn {
      margin-top: 8rem;
    }
  }

  @media (min-width: ${sizes.m}) {
    .back-btn {
      width: 220px;
    }
  }

  .wrap {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 4.8rem 0;
  }
`;
