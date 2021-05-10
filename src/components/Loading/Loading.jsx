import React, { Fragment } from "react";
import { loaderVariants } from "../../animation/loaderAnim";
import { motion } from "framer-motion";
import styled from "styled-components";
import { setColor } from "../../components/GlobalStyles/helper";

const Loading = () => {
  return (
    <Fragment>
      <Wrapper variants={loaderVariants} animate="animationOne"></Wrapper>
    </Fragment>
  );
};

const Wrapper = styled(motion.div)`
  width: 10px;
  height: 10px;
  margin: 4rem auto;
  border-radius: 50%;
  background: ${setColor.primary};
`;

export default Loading;
