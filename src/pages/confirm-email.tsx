import styled from "styled-components";
import illustration from "../assets/undraw_mail_sent_re_0ofv 1.png";
import Button from "../components/Button";

const H1 = styled.h1`
  text-align: center;
  font-size: 37px;
  max-width: 500px;
  margin: auto;
  color: #313033;
  line-height: normal;
`;
const Info = styled.p`
  text-align: center;
  font-size: 17px;
  max-width: 300px;
  margin: 20px auto;
`;
const VerifiedForm = styled.section`
  width: 100%;
`;
const Asset = styled.img`
  padding: 10px;
  display: flex;
  width: 280px;
  margin: auto;
`;
const BtnComponent = styled.div`
  max-width: 300px;
  margin: auto;
`;

export const ConfirmEmailPage = () => {
  return (
    <VerifiedForm>
      <H1> University of Ibadan Result Management System </H1>
      <Asset src={illustration} alt="" />
      <Info>
        A password resent link has been sent to your school e-mail, click the link to reset your
        password
      </Info>
      <BtnComponent>
        <Button name="Back to Login"> </Button>
      </BtnComponent>
    </VerifiedForm>
  );
};
