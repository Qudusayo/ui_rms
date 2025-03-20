import React from "react";
import styled from "styled-components";

// Types
interface CourseResult {
  id: number;
  course: string;
  title: string;
  type: string;
  unit: number;
  ca?: number;
  exam?: number;
  total?: number | "NA";
}

// Sample Data
const courseResults: CourseResult[] = [
  {
    id: 1,
    course: "CSC101",
    title: "Introduction to Computer Science",
    type: "Core",
    unit: 3,
    ca: 30,
    exam: 60,
    total: 90
  },
  {
    id: 2,
    course: "MTH201",
    title: "Linear Algebra",
    type: "Core",
    unit: 4,
    ca: 25,
    exam: 55,
    total: 80
  },
  {
    id: 3,
    course: "PHY102",
    title: "Physics II",
    type: "Required",
    unit: 3,
    total: "NA"
  },
  {
    id: 4,
    course: "ENG103",
    title: "Technical Writing",
    type: "Elective",
    unit: 2,
    ca: 28,
    exam: 52,
    total: 80
  },
  {
    id: 5,
    course: "CHM101",
    title: "General Chemistry",
    type: "Required",
    unit: 3,
    total: "NA"
  }
];

// Styled Components
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

const Th = styled.th`
  background: #e6e1e5;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
`;

const ResultsUnderReview = styled.div`
  background: #e8be2b;
  color: black;
  padding: 4px 0;
  border-radius: 8px;
  font-size: 0.875rem;
  display: inline-block;
  text-align: center;
  width: 100%;
`;

const ResultCell = ({ value }: { value: number | string | undefined }) => {
  if (value === "NA") {
    return <ResultsUnderReview>Results Under review</ResultsUnderReview>;
  }
  return <>{value}</>;
};

function TableComponent() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>S/N</Th>
            <Th>Course</Th>
            <Th>Title</Th>
            <Th>Type</Th>
            <Th>Unit</Th>
            <Th>CA</Th>
            <Th>Exam</Th>
            <Th>Total</Th>
          </tr>
        </thead>
        <tbody>
          {courseResults.map((result) => (
            <tr key={result.id}>
              <Td>{result.id}</Td>
              <Td>{result.course}</Td>
              <Td>{result.title}</Td>
              <Td>{result.type}</Td>
              <Td>{result.unit}</Td>
              {result.total === "NA" ? (
                <Td colSpan={3}>
                  <ResultsUnderReview>Results Under review</ResultsUnderReview>
                </Td>
              ) : (
                <>
                  <Td>
                    <ResultCell value={result.ca} />
                  </Td>
                  <Td>
                    <ResultCell value={result.exam} />
                  </Td>
                  <Td>
                    <ResultCell value={result.total} />
                  </Td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
