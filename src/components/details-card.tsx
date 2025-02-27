import styled from "styled-components";

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 24px;
`;

const Title = styled.span`
  color: #484649;
  font-size: 12px;
`;

const Value = styled.span`
  display: block;
  font-size: 22px;
  color: #2856c3;
  margin-top: 8px;
`;

type DetailsCardProps = {
  title: string;
  value: string;
};

const DetailsCard = ({ title, value }: DetailsCardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </Card>
  );
};

export default DetailsCard;
