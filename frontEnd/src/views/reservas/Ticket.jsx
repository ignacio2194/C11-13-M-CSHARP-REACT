import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Ticket = ({ reserva }) => {
  const fechaYHora = reserva.FechaHora.split(" ")
  const people = reserva.Cantidad;
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("token")));

  const getUserInfo = async () => {
    try {
      const api = "https://sdlt2.azurewebsites.net/api/Account/UserInfo";
      const response = await axios.get(api, {
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      setUserName(response.data.Email);
    } catch (error) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    getUserInfo();

    return (
      localStorage.removeItem("reserva")
    )
  }, [token]);

  return (
    <Box sx={{ width: { lg: "700px", sm: "600px", xs: "300px" }, margin: "0 auto" }}>
      <Box sx={{ textAlign: "center" }}>
        <CheckCircleIcon sx={{ backgroundColor: "#24A138", color: "custom.peachPuff", width: { lg: "128px", xs: "50px" }, height: { lg: "128px", xs: "50px" }, borderRadius: "50%", border: "none" }} />
        <Typography sx={{ fontSize: "clamp(1rem, 3vw, 2.5rem)", fontWeight: "700", margin: { lg: "16px" } }}>¡Tu reservación fue exitosa!</Typography>
        <Typography sx={{ fontSize: "clamp(1rem, 3vw, 2rem)", margin: { lg: "27px 0 34px", xs: "16px auto" } }}>Aquí te dejamos tu ticket de reservación</Typography>
      </Box>
      <Paper sx={{ backgroundColor: "#FAEECF", padding: "16px" }}>
        <Typography variant="h6" sx={{ textAlign: "center", margin: "0 auto 16px" }}>Sabores de la Tierra</Typography>
        <Box>
          <Typography gutterBottom>Usuario: {userName}</Typography>
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

export default Ticket;