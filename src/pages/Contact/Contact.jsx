import React from "react";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/UI/Form/Form";
import { Wrapper } from "./ContactStyle";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Wrapper>
      <Link to="/" className="back-btn">
        <Button>back home</Button>
      </Link>
      <div className="wrap">
        <Form />
      </div>
    </Wrapper>
  );
};

export default Contact;
