import styled from "styled-components";
import Image from "../assets/image.png";

const CardWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  max-width: 531.5px;
  margin: 50px auto;
  background-color: #F9F9F9;
  

    @media (max-width: 768px) {
    display: block;
    width: 320px;
    margin: 30px auto;
    align-items: center;
  }
  
`;

const ImageWrapper = styled.img`
  width: 45%;
  object-fit: cover;

@media (max-width: 768px) {
    width: 100%;
    
  }

`;

const Content = styled.article`

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }


  h2 {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 10px;
  }

  p {
    font-size: 17px;
    color: #555;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 12px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  a {
    width: 90%;
    padding: 10px 0px;
    background-color: #2856C3;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    
    }

  @media (max-width: 768px) {
    width: 80%;
    margin: 20px auto;

    
  }

  
`;

const NewsCard = () => {
  return (
    <CardWrapper>
      <ImageWrapper src={Image} alt="UI Petroquiz winners" />
      <Content>
        <h2>UI Students Win the National Petroquiz 2nd Time in a Row.</h2>
        <p>Students from the petroleum engineering department of the University of
          Ibadan...</p>
        <a href="#">Read full story</a>
      </Content>
    </CardWrapper>
  );
};

export default NewsCard;
