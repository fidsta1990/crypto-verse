import styled from "styled-components";
import { setFlex, sizes, setColor } from "../../components/GlobalStyles/helper";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem;
  padding-top: 8rem;
  ${setFlex({ x: "space-evenly", y: "center", d: "column" })};
`;

export const Title = styled.h2`
  margin-top: 3.2rem;
  padding-top: 4rem;
  color: ${setColor.primary};
  @media (max-width: ${sizes.m}) {
    padding-bottom: 2.4rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 1.6rem auto;

  @media (max-width: ${sizes.m}) {
    max-width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 2.4rem;
  padding: 1.6rem;
  padding-left: 2.4rem;
  border: 1px solid ${setColor.primary};
  border-radius: 0.8rem;
  box-shadow: 0 0 5px ${setColor.primary};

  &:focus {
    outline: none;
  }

  @media (max-width: ${sizes.m}) {
    max-width: 300px;
  }
`;
