import { Box, Stack, Container, Typography, Button, Select, TextField, MenuItem } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Map from "./Map";
import schema from "../../utils/validateReservations";
import CircularStatic from "./Spinner";
import { useNavigate } from "react-router-dom"

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

  const onSubmit = async (data) => {
    console.log('data submitted: ', data);
    await sleep(5000);
    reset();
    navigate("/detalles-pedido")
  };

  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ textAlign: "center", fontWight: "bold", fontSize: "50px" }}>
          Reservación
        </Typography>
        <Box>
          {isSubmitting ? (
            <Box sx={{ width: "100vw", height: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Box sx={{ textAlign: "center" }}>
                <CircularStatic />
                <Typography variant="h5" mt={4}>Generando tu ticket uwu</Typography>
              </Box>
            </Box>
          ) : (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
                  Tu sucursal más cercana
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textAlign: "left", lineHeight: "1.6em", width: "100%" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Numquam commodi asperiores dolorem dignissimos, nisi, architecto
                  voluptatum quidem quo inventore sed impedit natus, praesentium
                  omnis rerum. Dolores minima necessitatibus autem porro?
                </Typography>
                <Box sx={{ width: "100%", height: "500px" }}>
                  <Map />
                </Box>
              </Box>
              <Box sx={{ width: "100%", p: 2 }}>
                <Typography variant="body1" sx={{ textAlign: "left" }}>
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
                  <Button disabled={isSubmitting} type="submit" variant="contained" fullWidth my={4}>Reservar ahora</Button>
                </form>
              </Box>
            </Stack>
          )}
          <Box>
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
