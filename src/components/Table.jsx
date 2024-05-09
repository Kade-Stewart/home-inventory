import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
`;

const TableHead = styled.thead`
  background-color: #3b3a3a;
  color: #51e6ff;
  text-align: left;
  font-weight: bold;
`;

const TableHeadData = styled.th`
  padding: 12px 15px;
`;

const TableRow = styled.tr`
  color: #eeeeee;
  background-color: #242323;
  border-bottom: 1px solid #eeeeee;
  &:hover {
    background-color: #23444b;
  }
`;

const TableData = styled.td`
  padding: 12px 15px;
  margin: 10px;
`;

function Table() {
  const data = [
    {
      itemName: "Hand Soap",
      category: "Bathroom",
      quantity: "2",
      expirationDate: "--",
    },
    {
      itemName: "Conditioner",
      category: "Bathroom",
      quantity: "1",
      expirationDate: "--",
    },
    {
      itemName: "Paper Towel",
      category: "Kitchen",
      quantity: "2",
      expirationDate: "--",
    },
    {
      itemName: "Doritos",
      category: "Food",
      quantity: "1",
      expirationDate: "--",
    },
  ];
  return (
    <StyledTable>
      <TableHead>
        <tr>
          <TableHeadData>Product</TableHeadData>
          <TableHeadData>Category</TableHeadData>
          <TableHeadData>Quantity</TableHeadData>
          <TableHeadData>Expiration Date</TableHeadData>
        </tr>
      </TableHead>
      <tbody>
        {data.map((item) => (
          <TableRow key={item.itemName}>
            <TableData>{item.itemName}</TableData>
            <TableData>{item.category}</TableData>
            <TableData>{item.quantity}</TableData>
            <TableData>{item.expirationDate}</TableData>
          </TableRow>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;
