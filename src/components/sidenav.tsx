import styled from "styled-components";
import Logo from "../assets/uilogo.svg";
import Home from "../assets/Home.svg";
import Result from "../assets/Result.svg";
import Shape from "../assets/Shape.svg";

const UiLogo = styled.img`
  color: white;
  width: 100%;
`;
const LogoContainer = styled.div`
  width: 120px;
  margin: auto;
`;

const SideNav = styled.div`
  width: 25%;
  height: 100vh;
  background-color: #2856c3;
  padding: 30px 0px;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 90%;
  height: 10vh;
  padding: 30px 0px;
  gap: 100px;
  div:hover {
    background-color: #e4f1ff;
    border-raduis: 0px 8px 8px 0px;
    width: 90%;
  }
`;
const Image = styled.img`
  padding: 30px 0px;
  width: 60px;
  height: 40px;
`;

const DIV = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: auto;
  width: 50%;
`;
const SideNavPage = () => {
  return (
    <SideNav>
      <LogoContainer>
        <UiLogo src={Logo} alt="logo" />
      </LogoContainer>

      <Container>
        <DIV>
          <Image src={Home} alt="icon" />
          <p>HOME</p>
        </DIV>

        <DIV>
          <Image src={Result} alt="mus" />
          <p>RESULTS</p>
        </DIV>

        <DIV>
          <Image src={Shape} alt="baam" />
          <p>COURSES</p>
        </DIV>
      </Container>
    </SideNav>
  );
};

export default SideNavPage;
