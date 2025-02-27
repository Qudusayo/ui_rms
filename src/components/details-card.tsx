import styled from "styled-components";

const Card = styled.div`
  background-color: #f9f9f9;
  border: 1px solid red;
`;

const Title = styled.span``;

const Value = styled.span`
  display: block;
  font-size: xx-large;
`;

const DetailsCard = () => {
  return (
    <Card>
      <Title>Department</Title>
      <Value>Computer Science</Value>
    </Card>
  );
};

export default DetailsCard;
