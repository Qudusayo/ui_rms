import styled from "styled-components";
import Logo from "../assets/uilogo.svg";
import { Link, useLocation } from "react-router";
import { AppListIcon, HomeIcon, WhiteBoardIcon } from "./icons";

const UiLogo = styled.img`
  width: 60px;
  height: 60px;
`;
const LogoContainer = styled.div`
  margin: auto;
  text-align: center;
  padding: 20px 0px 0px;
`;

const SideNav = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #2856c3;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const DIV = styled(Link)<{
  active?: boolean;
}>`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 90%;
  border-radius: 0px 8px 8px 0px;
  justify-content: center;
  padding: 10px 0px;
  background-color: ${(props) => (props.active ? "#e4f1ff" : "transparent")};
  text-decoration: none;

  div {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  span {
    color: ${(props) => (props.active ? "#2856c3" : "#fff")};
    font-size: 15px;
    flex: 1;
  }
`;

const sideBarItems = [
  {
    name: "HOME",
    icon: HomeIcon,
    destination: "/dashboard"
  },
  {
    name: "RESULTS",
    icon: AppListIcon,
    destination: "/results"
  },
  {
    name: "COURSES",
    icon: WhiteBoardIcon,
    destination: "/"
  }
];

const SideNavContainer = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <SideNav>
      <LogoContainer>
        <UiLogo src={Logo} alt="logo" />
      </LogoContainer>

      <Container>
        {/* <DIV to="/dashboard" active={isActive("/dashboard")}>
          <div>
            <HomeIcon fill={isActive("/dashboard") ? "#2856c3" : "#fff"} />
          </div>
          <span>HOME</span>
        </DIV>

        <DIV to="/results" active={isActive("/results")}>
          <div>
            <AppListIcon fill={isActive("/results") ? "#2856c3" : "#fff"} />
          </div>
          <span>RESULTS</span>
        </DIV>

        <DIV to="/" active={isActive("/")}>
          <div>
            <WhiteBoardIcon fill={isActive("/") ? "#2856c3" : "#fff"} />
          </div>
          <span>COURSES</span>
        </DIV> */}

        {sideBarItems.map((item) => {
          const Icon = item.icon;
          return (
            <DIV to={item.destination} key={item.name} active={isActive(item.destination)}>
              <div>
                <Icon fill={isActive(item.destination) ? "#2856c3" : "#fff"} />
              </div>
              <span>{item.name}</span>
            </DIV>
          );
        })}
      </Container>
    </SideNav>
  );
};

export default SideNavContainer;
