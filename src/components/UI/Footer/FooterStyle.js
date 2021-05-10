import styled from "styled-components";
import { setFlex, setColor } from "../../GlobalStyles/helper";

export const Wrapper = styled.footer`
  min-height: 15vh;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  color: ${setColor.primeDark};
  text-align: center;

  span {
    margin: 0 0.8rem;
  }
`;

export const SocialWrapper = styled.article`
  ${setFlex({ x: "space-between", y: "center", d: "row" })};
  width: 100%;
  max-width: 300px;
  margin-bottom: 1.6rem;
  a {
    font-size: 3.2rem;

    &:link {
      color: ${setColor.primary};
    }

    &:visited {
      color: ${setColor.primeDark};
    }
  }
`;
