import React from "react";
import { Wrapper } from "./ButtonStyle";

const Button = (props) => {
  return (
    <Wrapper
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      type={props.type}
    >
      {props.children}
    </Wrapper>
  );
};

export default Button;
