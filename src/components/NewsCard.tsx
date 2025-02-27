import styled from "styled-components";
import Image from "../assets/image.png";

const CardWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  max-width: 750px;
  margin: 50px auto;
  background-color: #F9F9F9;
  

    @media (max-width: 768px) {
    display: block;
    max-width: 500px;
    margin: 30px auto;
    align-items: center;
  }
  
`;

const ImageWrapper = styled.img`
  width: 500px;
  height: 350px;
  object-fit: cover;

@media (max-width: 768px) {
    
    
  }

`;

const Content = styled.article`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 20px auto;
    width: 300px;
  }


  h2 {
    font-size: 1.3rem;
    margin: 0 0 10px;
  }

  p {
    font-size: 1.4rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 12px;
  }

  a {
    width: 300px;
    padding: 20px 0px;
    background-color: #2856C3;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    border-radius: 12px;
    font-size:1.2rem;
    text-align: center;
    text-transform: upperCase;
    
    }
  }

  @media (max-width: 768px) {
    width: 300px;
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
