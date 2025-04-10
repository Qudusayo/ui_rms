import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 840px;
`;
const Div = styled.div`
  width: 280px;
`;
const Name = styled.p`
  font-family: Proxima Nova;
  font-size: 17px;
  font-weight: 400;
  color: #181818;
  width: 168px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const Value = styled.p`
  font-family: Proxima Nova;
  font-size: 12px;
  color: #939094;
  letter-spacing: 0.25%;
  width: 80px;
`;

type InputProps = {
  name: string;
  matric: string;
  department: string;
  faculty: string;
};

const StudentDetails = (props: InputProps) => {
  return (
    <Container>
      <Div>
        <Wrapper>
          <Value>Name</Value>
          <Name>{props.name}</Name>
        </Wrapper>
        <Wrapper>
          <Value>Matric</Value>
          <Name>{props.matric}</Name>
        </Wrapper>
      </Div>
      <Div>
        <Wrapper>
          <Value>Department</Value>
          <Name>{props.department}</Name>
        </Wrapper>
        <Wrapper>
          <Value>Faculty</Value>
          <Name>{props.faculty}</Name>
        </Wrapper>
      </Div>
    </Container>
  );
};

export default StudentDetails;
