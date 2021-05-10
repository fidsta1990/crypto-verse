import styled from "styled-components";
import { setColor, sizes } from "../../GlobalStyles/helper";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.button)`
  border: 0;
  background: ${setColor.mainDark};
  color: ${setColor.mainWhite};
  padding: 0.8rem 3.2rem;
  font-size: 3.2rem;
  border-radius: 0.8rem;
  margin: 1.6rem 0;
  cursor: pointer;

  @media (max-width: ${sizes.m}) {
    padding: 0.8rem 2.4rem;
    font-size: 2.4rem;
  }
`;
