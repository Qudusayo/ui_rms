import styled from "styled-components";
import InputContainer from "../components/input";
import Button from "../components/Button"
import { Link } from "react-router";

const Container = styled.section`
  width: 90%;
  max-width: 480px;
  margin: auto;
  box-sizing: border-box;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

`
const H1 = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 37px; 
  @media (max-width: 700px) {
  font-size: 22px; 
  }
`
const P = styled.p`
  width: 90%;
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
`
const CustomLink = styled(Link)`
  text-decoration: none;
   color: #2856C3;
    fontSize: 15px;
    fontWeight: 600;
`
const ButtonWrapper = styled.div`
  margin: 24px 0px;
`
const Div = styled.div`
  width: 80%;
   margin: 30px auto 0px;
`
export const PasswordResetPage = () => {
  return (
    <Container>
      <H1>University of Ibadan Result Management System</H1>
      <P>Input your detail to have your password reset link sent directly to your mail</P>
      <Div>
        <InputContainer name="password reser detail" placeholder="Input your Matric number/ School email"/>
        <ButtonWrapper>
          <Button name="Send Details"  handleClick={() => console.log("Send")}/>
        </ButtonWrapper>
        
        <CustomLink to="/">RETURN TO LOG IN</CustomLink>
      </Div>
      
    </Container>
  )
};

export default PasswordResetPage
