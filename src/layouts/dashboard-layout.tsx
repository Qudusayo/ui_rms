import styled from "styled-components";
import SideNavContainer from "../components/sidenav";

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f4f4f4;
`;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutWrapper>
      <SideNavContainer />
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default DashboardLayout;
