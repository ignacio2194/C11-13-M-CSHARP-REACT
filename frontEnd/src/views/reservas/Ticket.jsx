import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack } from '@mui/material';

const Ticket2 = ({ reserva }) => {
  const fechaYHora = reserva["FechaHora"].split(" ");
  const people = reserva.Cantidad;

  const handleClose = () => {
    // setOpen(false);
    // setShowTicket(false);
    // navigate("/detalles-pedido")
  };

  return (
    <Box>
      <Box onClose={handleClose} sx={{ backgroundColor: "custom.yellow", textAlign: "center" }}>
        ¡Tu reservación fue exitosa!
      </Box>
      <Paper sx={{ backgroundColor: "custom.yellow" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>Sabores de la Tierra</Typography>
        <Box>
          <Typography gutterBottom>Nombre: Michael Kelso</Typography>
          <Typography gutterBottom>Fecha: {fechaYHora[0]} </Typography>
          <Typography gutterBottom>Reservación: {people} {people === 1 ? "persona" : "personas"}</Typography>
          <Typography gutterBottom>Hora: {fechaYHora[1]}hs</Typography>
        </Box>
        <Box>
          <Typography gutterBottom>Sucursal A</Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", p: "24px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Button variant="contained" autoFocus onClick={handleClose}>
            Enviar al Email
          </Button>
          <Button variant="contained" onClick={handleClose}>
            Google Calendar
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Ticket2;