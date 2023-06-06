import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Ticket2 = ({ reserva, userName }) => {
  const fechaYHora = reserva["FechaHora"].split(" ");
  const people = reserva.Cantidad;

  const handleClose = () => {
    // setOpen(false);
    // setShowTicket(false);
    // navigate("/detalles-pedido")
  };

  return (
    <Box sx={{ width: { lg: "700px", sm: "600px", xs: "300px" }, margin: "0 auto" }}>
      <Box onClose={handleClose} sx={{ textAlign: "center" }}>
        <CheckCircleIcon sx={{ backgroundColor: "#24A138", color: "custom.peachPuff", width: { lg: "128px", xs: "50px" }, height: { lg: "128px", xs: "50px" }, borderRadius: "50%", border: "none" }} />
        <Typography sx={{ fontSize: "clamp(1rem, 3vw, 2.5rem)", fontWeight: "700", margin: { lg: "16px" } }}>¡Tu reservación fue exitosa!</Typography>
        <Typography sx={{ fontSize: "clamp(1rem, 3vw, 2rem)", margin: { lg: "27px 0 34px", xs: "16px auto" } }}>Aquí te dejamos tu ticket de reservación</Typography>
      </Box>
      <Paper sx={{ backgroundColor: "#FAEECF", padding: "16px" }}>
        <Typography variant="h6" sx={{ textAlign: "center", margin: "0 auto 16px" }}>Sabores de la Tierra</Typography>
        <Box>
          <Typography gutterBottom>Nombre de usuario: {userName}</Typography>
          <Typography gutterBottom>Fecha: {fechaYHora[0]} </Typography>
          <Typography gutterBottom>Reservación: {people} {people === 1 ? "persona" : "personas"}</Typography>
          <Typography gutterBottom>Hora: {fechaYHora[1]}hs</Typography>
        </Box>
        <Box>
          <Typography gutterBottom>Sucursal: Condesa</Typography>
          <Typography gutterBottom>
            Av. Vicente Suárez 165, Col. Condesa, Cuauhtémoc C.P. 06140 Ciudad de México, CDMX.
          </Typography>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", p: "24px 0", width: { sm: "100%" } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          sx={{ margin: { lg: "0 auto 243px", xs: "0 auto 48px" }, width: "100%" }}
        >
          <Button variant="contained" sx={{ width: "100%" }}>
            Enviar al Email
          </Button>
          <Button variant="contained" sx={{ width: "100%" }}>
            Google Calendar
          </Button>
        </Stack>
      </Box>
    </Box >
  );
}

export default Ticket2;