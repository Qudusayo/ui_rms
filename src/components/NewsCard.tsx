import styled from "styled-components";
import Image from "../assets/image.png";

const CardWrapper = styled.section`
  background: #fff;
  max-width: 531.5px;
  background-color: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: block;
    width: 320px;
    margin: 30px auto;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
  /* width: 45%; */
  max-width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 20px auto;
  }

  h2 {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 10px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
    /* width: 90%; */
    padding: 10px 0px;
    background-color: #2856c3;
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
      <ImageWrapper>
        <Img src={Image} alt="UI Petroquiz winners" />
      </ImageWrapper>
      <Content>
        <h2>UI Students Win the National Petroquiz 2nd Time in a Row.</h2>
        <p>
          Students from the petroleum engineering department of the University
          of Ibadan...
        </p>
        <a href="#">Read full story</a>
      </Content>
    </CardWrapper>
  );
};

export default NewsCard;
