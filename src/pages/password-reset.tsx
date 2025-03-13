import styled from "styled-components";
import InputContainer from "../components/input";
import Button from "../components/Button"
import { Link } from "react-router";

const Container = styled.section`
  width: 40%;
  margin: auto;
  box-sizing: border-box;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  @media (max-width: 700px) {
    width: 90%;
  }

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
  width: 70%;
  margin: auto;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  @media (max-width: 700px) {
    width: 90%;
  }
`
export const PasswordResetPage = () => {
  return (
    <Container>
      <H1>University of Ibadan Result Management System</H1>
      <P>Input your detail to have your password reset link sent directly to your mail</P>
      <div style={{width: "80%", margin: "30px auto 0px"}}>
        <InputContainer name="password reser detail" placeholder="Input your Matric number/ School email"/>
        <article style={{margin: "24px 0px"}}>
          <Button name="Send Details"></Button>
        </article>
        
        <Link to="/" style={{textDecoration: "none", color: "#2856C3", fontSize: "15px", fontWeight: "600"}}>RETURN TO LOG IN</Link>
      </div>
      
    </Container>
  )
};

export default PasswordResetPage
