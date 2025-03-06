 
import quoteLeftIcon from "../assets/quoteLeft.svg";
import quoteRightIcon from "../assets/quoteRight.svg";
import styled from 'styled-components';



const Author = styled.p`
 color : #2856C3 !important ;

`
const MainCard = styled.div`
    width: 100%;
  background-color: #E4F1FF;
  padding: 40px 0px;
`
const Quote = styled.p`
   font-size: 26px;
  width: 870px;
  color: #313033;
  margin: 20px ;
  font-weight: 400;
`
const HeadingName = styled.span `
    font-size: 16px;
    padding: 10px;
`
const Quotecontainer = styled.div`
    display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`
const Quotecontainerimg = styled.img`
   padding: 9px 10px;
  width: 36px;

  @media screen and (max-width: 700px) {
     display: none;
    padding: 100px;

  }
`


const QuoteContainer =() => {
    return (
        <>
            <HeadingName>Welcome, Ayoola AbdulQudus</HeadingName>
            <MainCard>
                <Quotecontainer>
                    <Quotecontainerimg src={quoteLeftIcon} alt="" />
                    <Quotecontainerimg src={quoteRightIcon} alt="" />
                </Quotecontainer>

                <div>
                    <Quote>"What makes a child gifted and talented may not always be good grades in school, but a different way of looking at the world and learning."</Quote>
                    <Author>Chuck Grassley</Author>
                </div>
            </MainCard>
        </>
    )
} 
export default QuoteContainer;