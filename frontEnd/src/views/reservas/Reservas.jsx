import { Box, Stack, Container, Typography, Button, Select, TextField, MenuItem } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Map from "./Map";
import schema from "../../utils/validateReservations";
import { useState } from "react";
import Ticket from "./Ticket";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import logo from '../../img/logo-sabores@2x.png';
import BadgeAvatars from "./Avatar";

const PERSONS_OPTIONS = [
  { text: "Una persona", value: 1 },
  { text: "Dos personas", value: 2 },
  { text: "Tres personas", value: 3 },
  { text: "Cuatro personas", value: 4 },
  { text: "Cinco personas", value: 5 },
]

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Reservas = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: new Date().toISOString().substring(0, 10),
      hour: "14:00",
      numPeople: 1
    }
  });

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);


  const onSubmit = async (data) => {
    console.log('data submitted: ', data);
    await sleep(5000);
    reset();
    setOpen(true);
  };

  return (
    <Box component="section">
      <Box sx={{ backgroundColor: "primary.main", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 60px" }}>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} onClick={() => navigate("/")} />
        <BadgeAvatars />
      </Box>
      <Container maxWidth="lg" sx={{ margin: "auto" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWight: "bold", fontSize: "50px", marginTop: "32px" }}>
          Reservación
        </Typography>
        <Box>
          {isSubmitting ? (
            <Spinner />
          ) : (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Condesa
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "left", lineHeight: "1.6em", width: "100%", margin: "16px 0" }}
                >
                  Av. Vicente Suárez 165, Col. Condesa, Cuauhtémoc C.P. 06140
                  Ciudad de México, CDMX
                </Typography>
                <Box sx={{ width: "100%", height: "500px" }}>
                  <Map />
                </Box>
              </Box>
              <Box sx={{ width: "100%", p: 2 }}>
                <Typography variant="h4" sx={{ textAlign: "left" }}>
                  Realizá tu reservación
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="date"
                        label="Selecciona la fecha"
                        variant="outlined"
                        error={!!errors.date}
                        helperText={errors.date ? errors.date?.message : ''}
                        fullWidth
                        margin="dense"
                      />
                    )}
                  />
                  <br />
                  <Controller
                    name="hour"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="time"
                        label="Selecciona la hora"
                        variant="outlined"
                        error={!!errors.hour}
                        helperText={errors.hour ? errors.hour?.message : ''}
                        fullWidth
                        margin="dense"
                      />
                    )}
                  />
                  <br />
                  <Controller
                    name="numPeople"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        type="select"
                        label="Selecciona el número de personas"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                      >
                        {PERSONS_OPTIONS.map((options, index) => (
                          <MenuItem key={index} value={options.value}>
                            {options.text}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                  <Button disabled={isSubmitting} type="submit" variant="contained" fullWidth sx={{ marginTop: "24px" }}>Reservar ahora</Button>
                </form>
              </Box>
            </Stack>
          )}
          <Ticket open={open} setOpen={setOpen} />
          <Box sx={{ marginBottom: "32px" }}>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              Elige otra sucursal
            </Typography>
            <Box>
              <Stack
                fullWidth
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                border={"2px dashed black"}
                borderRadius={2}
                p={2}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "left", fontWeight: "bold" }}
                  >
                    Sucursal B
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "left", lineHeight: "1.6em", width: "100%" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam commodi asperiores dolorem dignissimos
                  </Typography>
                </Box>
                <Button variant="contained">
                  Seleccionar
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Reservas;
