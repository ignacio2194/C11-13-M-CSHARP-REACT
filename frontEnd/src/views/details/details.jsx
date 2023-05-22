import { Box, Button, Paper, Stack, Typography } from "@mui/material";

const Details = () => {
  return (
    <Box>
      <Typography variant="h6">Tu reserva fue exitosa</Typography>
      <Typography variant="body2">Aquí te dejamos tu ticket de reservación</Typography>
      <Typography variant="body2">Logo</Typography>
      <Paper>
        <Typography variant="h6">Sabores de la Tierra</Typography>
        <Stack>
          <Box>
            <Typography variant="body1">Naruto Usumaki</Typography>
          </Box>
          <Box>
            {/* <Typography variant="body1">Fecha: {formData.date.toLocaleDateString()}</Typography> */}
          </Box>
          <Box>
            {/* <Typography variant="body1">Reservación: {formData.numPeople} {formData.numPeople == 1 ? "persona" : "personas"}</Typography> */}
          </Box>
          <Box>
            {/* <Typography variant="body1">Hora: {formData.hour}</Typography> */}
          </Box>
        </Stack>
        <Box>
          <Typography variant="body1">Sucursal A</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure voluptates, fuga eaque omnis deserunt aliquam nam, eius eum neque delectus consequuntur excepturi numquam quia et.</Typography>
        </Box>
      </Paper>
      <Button variant="contained" fullWidth>Enviar al email</Button>
      <Button variant="contained" fullWidth>Google Calendar</Button>
    </Box>
  )
}

export default Details;