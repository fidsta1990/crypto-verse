import styled from "styled-components";
import { setColor, setFont, sizes, setFlex } from "../../GlobalStyles/helper";

export const Wrapper = styled.form`
  width: 100%;
  height: 500px;
  max-width: 340px;
  margin: 0 auto;
  ${setFlex({ x: "center", y: "center", d: "column" })}
  box-shadow: 0 0 10px grey;
  background: ${setColor.primary};
  border-radius: 1.6rem;
  padding: 2.4rem;

  h2 {
    color: ${setColor.mainWhite};
    margin: 2.4rem 0;
    font-size: 2.4rem;
  }

  .success,
  .error {
    text-align: center;
    font-size: 1.6rem;
  }

  .success {
    color: green;
  }
  .error {
    color: coral;
  }

  @media (min-width: ${sizes.m}) {
    max-width: 550px;
    height: 600px;

    h2 {
      font-size: 3.2rem;
    }

    .success,
    .error {
      font-size: 2.4rem;
    }
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0.8rem auto;
  display: flex;
`;

export const FormControl = styled.input`
  font-size: 2.4rem;
  padding: 2.4rem;
  width: 100%;
  color: ${setColor.primeDark};

  &:focus {
    outline: 0;
  }

  @media (max-width: ${sizes.m}) {
    font-size: 1.6rem;
  }
`;

export const FormTextArea = styled.textarea`
  font-size: 2.4rem;
  width: 90%;
  ${setFont.main};
  padding: 0.8rem;
  margin: 0 auto;
  &:focus {
    outline: 0;
  }

  @media (max-width:${sizes.m}) {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button`
  background: ${setColor.primeDark};
  color: ${setColor.mainWhite};
  cursor: pointer;
  font-size: 2.4rem;
  padding: 1.6rem;
  width: 92%;
  margin: 1.6rem auto 3.2rem auto;
  border: 0;
  border-radius: 0.8rem;
  font-weight: 500;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${sizes.m}) {
    padding: 0.8rem;
  }
`;
