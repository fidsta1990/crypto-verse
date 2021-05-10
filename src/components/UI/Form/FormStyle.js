import styled from "styled-components";
import { setColor, setFont } from "../../GlobalStyles/helper";

export const Wrapper = styled.form`
  width: 100%;
  height: 500px;
  max-width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 10px grey;

  background: ${setColor.primary};
  border-radius: 1.6rem;
  padding: 2.4rem;

  h2 {
    color: ${setColor.mainWhite};
    margin: 2.4rem 0;
    font-size: 2.4rem;
  }

  .success {
    text-align: center;
    color: green;
    font-size: 1.6rem;
  }
  .error {
    text-align: center;
    color: coral;
    font-size: 1.6rem;
  }

  @media (min-width: 800px) {
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
  display: block;
`;

export const FormControl = styled.input`
  font-size: 2.4rem;
  padding: 2.4rem;
  width: 100%;
  margin: 0 auto;
  color: ${setColor.primeDark};

  &:focus {
    outline: 0;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

export const FormTextArea = styled.textarea`
  font-size: 2.4rem;
  width: 100%;
  max-width: 460px;
  margin: 0.8rem 2.1rem 1.6rem;
  ${setFont.main};
  padding: 0.8rem;

  &:focus {
    outline: 0;
  }

  @media (max-width: 800px) {
    font-size: 1.6rem;
    max-width: 260px;
    margin: 0.8rem 1.6rem 1.6rem;
  }
`;

export const Button = styled.button`
  background: ${setColor.primeDark};
  color: ${setColor.mainWhite};
  cursor: pointer;
  font-size: 2.4rem;
  padding: 1.6rem;
  width: 92%;
  margin: 0 auto;
  border: 0;
  border-radius: 0.8rem;
  font-weight: 500;

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 800px) {
    padding: 0.8rem;
  }
`;
