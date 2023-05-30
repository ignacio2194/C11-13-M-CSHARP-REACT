import { Box, Stack, Container, Typography, Button, Select, TextField, MenuItem, Divider } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Map from "./Map";
import schema from "../../utils/validateReservations";
import { useState, useEffect } from "react";
import Ticket from "./Ticket";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import logo from '../../img/logo-sabores@2x.png';
import BadgeAvatars from "../../components/avatar/Avatar";
import myFecha from "../../utils/fecha";
import axios from "axios";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

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
    formState: { errors, isSubmitting, touchedFields },
    reset
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      date: "",
      hour: "13:00",
      numPeople: 1
    }
  });

  const navigate = useNavigate();

  const [showTicket, setShowTicket] = useState(false);

  let [reserva, setReserva] = useState({});

  const onSubmit = async (data) => {
    const FechaHora = `${myFecha(data.date)} ${data.hour}`
    const Cantidad = data.numPeople;

    reserva = {
      FechaHora,
      Precio: 99.99,
      EventoId: 99,
      Cantidad
    }
    setReserva(reserva);
    setShowTicket(true);
    console.log("Reserva submitted: ", reserva);
    // createReserva(reserva);
    await sleep(5000);
    reset();
  };

  const createReserva = async (reserva) => {
    try {
      const api = 'https://sdlt2.azurewebsites.net/api/Reservas/Create'
      const data = await axios.post(api, reserva);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllReservas = async () => {
    try {
      const api = 'https://sdlt2.azurewebsites.net/api/Reservas/GetAll'
      const data = await axios.get(api);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getAllReservas();
  }, []);

  return (
    <Box component="section">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "68px", padding: "0 28px", backgroundColor: "primary.main", color: "custom.peachPuff" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px"
          }}
        >
          <LocalPhoneOutlinedIcon />
          <Typography>+54 11 1010-2020</Typography>
        </Box>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem sx={{ color: "custom.peachPuff" }} />}
          spacing={2}
          sx={{ color: "custom.peachPuff" }}
        >
          <Typography sx={{ fontWeight: "bold" }}>ES</Typography>
          <Typography>EN</Typography>
        </Stack>
      </Stack>
      <Box sx={{ backgroundColor: "custom.lightBrown", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 60px" }}>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} onClick={() => navigate("/")} />
        <BadgeAvatars />
      </Box>
      <Container maxWidth="lg" sx={{ margin: "auto" }}>
        <Typography variant="h3" sx={{ textAlign: "center", fontWight: "bold", fontSize: "50px", marginTop: "32px" }}>
          Reservación
        </Typography>
        <Box>
          {isSubmitting
            ? <Spinner />
            : showTicket ? <Ticket reserva={reserva} /> : (
              <>
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
                            // label="Selecciona la fecha"
                            variant="outlined"
                            error={!!errors.date}
                            helperText={errors.date ? errors.date?.message : ''}
                            margin="dense"
                            sx={{ width: "100%" }}
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
                            // label="Selecciona la hora"
                            variant="outlined"
                            error={!!errors.hour}
                            helperText={errors.hour ? errors.hour?.message : ''}
                            margin="dense"
                            sx={{ width: "100%" }}
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
                            // label="Selecciona el número de personas"
                            variant="outlined"
                            margin="dense"
                            sx={{ width: "100%" }}
                          >
                            {PERSONS_OPTIONS.map((options, index) => (
                              <MenuItem key={index} value={options.value} >
                                {options.text}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      />
                      <Button
                        disabled={
                          isSubmitting ||
                          !!(errors.date && touchedFields.date) ||
                          !!(errors.hour && touchedFields.hour) ||
                          !!(errors.numPeople && touchedFields.numPeople)
                        }
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: "24px", width: "100%" }}
                      >
                        Reservar ahora
                      </Button>
                    </form>
                  </Box>
                </Stack>
                <Box sx={{ marginBottom: "32px" }}>
                  <Typography variant="body1" sx={{ textAlign: "left" }}>
                    Elige otra sucursal
                  </Typography>
                  <Box>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                      border={"2px dashed black"}
                      borderRadius={2}
                      p={2}
                      sx={{ width: "100%" }}
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
              </>
            )
          }
        </Box>
      </Container >
    </Box >
  );
};

export default Reservas;
