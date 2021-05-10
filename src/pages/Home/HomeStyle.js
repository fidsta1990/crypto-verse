import styled from "styled-components";
import { setFlex, setColor, sizes } from "../../components/GlobalStyles/helper";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  min-height: 85vh;
  ${setFlex({ x: "center", y: "center", d: "column" })};
  font-size: 3.2rem;

  strong {
    text-align: center;
    font-weight: 550;
    font-size: 3.2rem;
    color: ${setColor.primary};
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    @media (max-width: ${sizes.s}) {
      font-size: 2rem;
      max-width: 340px;
      text-align: center;
    }
  }

  .gecko {
    padding: 3.2rem;
    text-align: center;
    font-size: 1.6rem;

    &:link {
      color: ${setColor.primary};
    }

    &:visited {
      color: ${setColor.primeDark};
    }
  }
`;

export const SubText = styled.div`
  padding-bottom: 2.4rem;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${setColor.primary};
  padding: 1.6rem 0;
  margin: 1.6rem 0;
`;
