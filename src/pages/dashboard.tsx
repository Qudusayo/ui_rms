import styled from "styled-components";
import QuoteContainer from "../components/Details";
import DetailsCard from "../components/details-card";
import DashboardLayout from "../layouts/dashboard-layout";
import NewsCard from "../components/NewsCard";

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const News = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Container = styled.div`
  margin: 75px 0;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Container>
        <h2>Welcome, Ayoola AbdulQudus</h2>
        <QuoteContainer />
      </Container>

      <Container>
        <h2>Your Details</h2>
        <Details>
          <DetailsCard title="Matric" value="223023" />
          <DetailsCard title="Department" value="Computer Science" />
          <DetailsCard title="Faculty" value="Science" />
          <DetailsCard title="Level" value="200 level" />
          <DetailsCard title="Current Session" value="2021/2022" />
          <DetailsCard title="Registered Courses" value="24" />
          <DetailsCard title="Results Available" value="18" />
          <DetailsCard title="Results under review" value="6" />
        </Details>
      </Container>

      <Container>
        <h2>News</h2>
        <News>
          <NewsCard />
          <NewsCard />
        </News>
      </Container>
    </DashboardLayout>
  );
};
