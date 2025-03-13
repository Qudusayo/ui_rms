import styled from "styled-components";
import InputContainer from "../components/input";
import { Link } from "react-router";
import Button from "../components/Button";

const FormContainer = styled.section`
  width: 90%;
  max-width: 500px;
  margin: 0px auto;
  text-align: center;
`;

const H1 = styled.h1`
  font: Proxima Nova;
  font-size: 2.3rem;
  font-weight: 600;
`;

const Pg = styled.p`
  font-size: 1.05rem;
  letter-spacing: 0.25%;
  padding: 0 100px;
  font-weight: 400;
`;

const InputSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  margin: 20px auto;
`;

export const LoginPage = () => {
  return (
    <FormContainer>
      <H1>University of Ibadan Result Management System</H1>
      <Pg>Input your matric number and your student’s portal’s password to access your results</Pg>
      <form action="#">
        <InputSide>
          <InputContainer name="Matric Number" placeholder="Input your Matric number here" />
          <InputContainer name="Password" placeholder="Input your password" />
        </InputSide>
        <ButtonWrapper>
          <Button name="Login" handleClick={() => console.log("Logging in")} />
        </ButtonWrapper>
        <FormFooter>
          <CheckboxContainer>
            <input type="checkbox" />
            <span>Remind me</span>
          </CheckboxContainer>
          <Link to="/password-reset">Forgot password?</Link>
        </FormFooter>
      </form>
    </FormContainer>
  );
};
