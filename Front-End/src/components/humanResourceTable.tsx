import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function HumanResourceTable() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/retrieve-data");
        setData(res.data);
      } catch (err) {
        alert(`Sorry, Couldn't connect with the Server to load data.`);
      }
    };
    LoadData();
  }, []);
  return (
    <TableContainer component={Paper} sx={{ mt: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              CheckIn
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              CheckOut
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Total Working Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.schedule.employee.employee_name}
                </TableCell>
                <TableCell align="right">
                  {row.schedule.shift.check_in}
                </TableCell>
                <TableCell align="right">
                  {row.schedule.shift.check_out}
                </TableCell>
                <TableCell align="right">
                  {row.schedule.shift.total_working_hours}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
