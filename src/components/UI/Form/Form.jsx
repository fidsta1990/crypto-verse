import React, { useState } from "react";
import {
  Wrapper,
  FormControl,
  FormTextArea,
  FormGroup,
  Button,
} from "./FormStyle";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");

  const validate = (fields, min = 4, max = 15) => {
    const { name, body } = fields;

    if (!name || name.length < min || name.length > max) {
      setError(true);
      setMsg(
        `Name must be more than ${min} characters and less than ${max} characters.`
      );
    } else if (!body || body.length < max) {
      setError(true);
      setMsg(`Please enter more than ${max} characters in comments.`);
    } else {
      setError(false);
      setMsg("Submission sent");
      setName("");
      setEmail("");
      setBody("");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const inputFields = { name, email, body };
    validate(inputFields);
    if (!error) {
      axios
        .get("https://formspree.io/f/xjvjgqdw", {
          method: "POST",
          body: JSON.stringify(inputFields),
          headers: { Accept: "application/json" },
        })
        .then((res) => setMsg("All submitted"))
        .catch((err) => {
          console.log(err.message);
          setError(true);
        });
    }
  };

  return (
    <Wrapper onSubmit={submitHandler}>
      <h2>Get in touch!</h2>
      {error && <p className="error">{msg}</p>}
      {!error && <p className="success">{msg}</p>}
      <FormGroup>
        <FormControl
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </FormGroup>

      <FormGroup>
        <FormControl
          type="text"
          id="email"
          value={email}
          name="_replyto"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="cryptoverse@gmail.com"
        />
      </FormGroup>

      <FormGroup>
        <FormTextArea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="24"
          rows="6"
          placeholder="Comments..."
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Wrapper>
  );
};

export default Form;
