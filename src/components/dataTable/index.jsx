import * as React from "react";
import useStyles from "./index.css";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const DataTable = (props) => {
  const classes = useStyles();
  const { patientList, filteredPatientList, handelModalOpen } = props;

  let patientData = patientList
  if (filteredPatientList.length > 0) {
    patientData = filteredPatientList
  }

  const renderRow = () => {
    let rowData = []
    patientData && patientData.map((data) => {
      let row = (
        <TableRow hover>
          <TableCell align="left">{data.resource.id}</TableCell>
          <TableCell align="left">{data.resource.name && data.resource.name[0] && data.resource.name[0].family + " " + data.resource.name[0].given}</TableCell>
          <TableCell align="left">{data.resource.gender ? data.resource.gender : "N/A"}</TableCell>
          <TableCell align="left">{data.resource.birthDate ? data.resource.birthDate : "N/A"}</TableCell>
          <TableCell align="left">{data.resource.address && data.resource.address[0] && data.resource.address[0].text ? data.resource.address[0].text + ", " + data.resource.address[0].city : "N/A"}</TableCell>
          <TableCell align="left">{data.resource.telecom && data.resource.telecom[0] && data.resource.telecom[0].value ? data.resource.telecom[0].value : "N/A"}</TableCell>
          <TableCell align="left">
            <Button variant="outlined" onClick={() => handelModalOpen(data.fullUrl)}>Details</Button>
          </TableCell>
        </TableRow>
      );
      rowData.push(row)
    });
    return rowData;
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table aria-label="collapsible table" className={classes.tableStyle}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">BirthDate</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left" colSpan={2}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientData.length > 0 ? renderRow() : (
            <TableRow>
              <TableCell align="left" colSpan={6} className={classes.pageLoader}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
