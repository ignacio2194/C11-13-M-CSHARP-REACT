import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, Typography } from '@mui/material';

const Cantidad = ({ cantidad }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
      <AddCircleOutlineIcon />
      <Box sx={{ padding: "2px", borderRadius: "4px", border: "1px solid black", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px" }}>{cantidad}</Box>
      <RemoveCircleOutlineIcon />
    </Box>
  )
}

function createData(menu, cantidad, precio, icon) {
  return { menu, cantidad, precio, icon };
}

const rows = [
  createData(<Typography sx={{ fontWeight: "bold" }}>Empanada de jamón de la sierra y queso azul.</Typography>, <Cantidad cantidad={8} />, 24.00, < DeleteForeverOutlinedIcon />),
  createData(<Typography sx={{ fontWeight: "bold" }}>Corte de cerdo o pollo con chorizo, morcillas y dos ensaladas italianas.</Typography>, <Cantidad cantidad={2} />, 24.00, < DeleteForeverOutlinedIcon />),
  createData("", <Typography sx={{ fontWeight: "bold" }}>Total: </Typography>, 48.00, ""),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "1200px", margin: "auto" }}>
      <Table sx={{ minWidth: "800px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>Cantidad</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>Precio</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.menu}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.menu}
              </TableCell>
              <TableCell align="right">
                {row.cantidad}
              </TableCell>
              <TableCell align="right">$ {row.precio}</TableCell>
              <TableCell align="right">{row.icon}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;