import DashboardLayout from "../layouts/dashboard-layout";
import TableComponent from "../components/table";
import styled from "styled-components";
import StudentDetails from "../components/student-details";
import SelectComponent from "../components/select";

const ResultWrapper = styled.div``;
const Div = styled.div``;
const Results = () => {
  return (
    <DashboardLayout>
      <ResultWrapper>
        <StudentDetails
          name="Azeez Abdulrahman A."
          matric="250950"
          department="Civil Engineering"
          faculty="Technology"
        />
        <Div>
          <SelectComponent />
        </Div>
        <TableComponent />
      </ResultWrapper>
    </DashboardLayout>
  );
};

export default Results;
