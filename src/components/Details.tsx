import quoteLeftIcon from "../assets/quoteLeft.svg";
import quoteRightIcon from "../assets/quoteRight.svg";
import styled from "styled-components";

const Author = styled.p`
  color: #2856c3 !important ;
  text-align: center;
  font-size: 22px;
`;
const MainCard = styled.div`
  background-color: #e4f1ff;
  padding: 40px 20px;
  border-radius: 8px;
`;
const Quote = styled.p`
  font-size: 26px;
  color: #313033;
  text-align: center;
  font-weight: 400;
`;
const HeadingName = styled.span`
  font-size: 22px;
  padding: 10px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  text-align: center;
`;

const Left = styled.img`
  //  position: absolute;
  transform: translateY(-50%);
  top: -50%;
  @media (max-width: 768px) {
    transform: translateY(-30%);
  }
`;
const Right = styled.img`
  //  position: absolute;
  //  transform: translateX(-100%);
  //  left: 100%;
  //  top: 25%;
`;

const QuoteContainer = () => {
  return (
    <>
      <HeadingName>Welcome, Ayoola AbdulQudus</HeadingName>
      <MainCard>
        <Container>
          <Left src={quoteLeftIcon} alt="" />
          <div>
            <Quote>
              "What makes a child gifted and talented may not always be good grades in school, but a
              different way of looking at the world and learning."
            </Quote>
            <Author>Chuck Grassley</Author>
          </div>
          <Right src={quoteRightIcon} alt="" />
        </Container>
      </MainCard>
    </>
  );
};
export default QuoteContainer;
