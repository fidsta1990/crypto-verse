import styled from "styled-components";
import { motion } from "framer-motion";
import { setFlex, sizes } from "../GlobalStyles/helper";

export const Wrapper = styled(motion.section)`
  /* min-height: 50vh; */
  width: 100%;
  max-width: ${sizes.xl};
  margin: 4rem auto;
  ${setFlex({ x: "", y: "center", d: "column" })}
`;
