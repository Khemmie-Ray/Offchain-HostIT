import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TableData = ({ currentData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#0D0042" }}>
          <TableRow>
            <TableCell
              sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
            >
              ID
            </TableCell>
            <TableCell
              sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
            >
              Name
            </TableCell>
            <TableCell
              sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
            >
              Location
            </TableCell>
            <TableCell
              sx={{ color: "#11EBF2", fontWeight: "700", fontSize: "16px" }}
            >
              Role
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>
                {item.country} {item.location}
              </TableCell>
              <TableCell>{item.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;