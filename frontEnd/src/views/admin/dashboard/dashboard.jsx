import SideBar from "./sideBar";
import Navbar from "./navBar";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import StoreIcon from "@mui/icons-material/Store";
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const menusActivos = [
  {
    id: 1,
    title: "Menú Principal",
    icon: <MenuBookIcon sx={{ fontSize: "60px", color: "#472C1B" }} />,
  },
  {
    id: 2,
    title: "Menú Delivery",
    icon: <FastfoodIcon sx={{ fontSize: "60px", color: "#472C1B" }} />,
  },
];

const deliveriesActivos = [{ id: 1, sucursal: "Condesa", pedidosActivos: 10 }];

const sucursalesActivas = [
  {
    id: 1,
    name: "Condesa",
    address:
      "Av. Vicente Suárez 165,  Col. Condesa, Cuauhtémoc C.P. 06140 CDMX, México",
    publicada: true,
  },
];

const Dashboard = () => {
  const [totalReservas, setTotalReservas] = useState(0);
  useEffect(() => {
    const Reservas = async () => {
      try {
        const response = await axios.get(
          "https://sdlt2.azurewebsites.net/api/Reservas/GetAll"
        );
        const reservas = response.data; // Asumiendo que la respuesta contiene un arreglo de objetos de reservas
        const total = reservas.length; // Obtener el número total de reservas
        setTotalReservas(total);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    Reservas();
  }, []);

  return (
    <>
      <SideBar />
      <Navbar />
      <Box
        sx={{
          width: { xs: "100%", md: "calc(100vw - 240px)" },
          marginLeft: { xs: "0", md: "240px" },
          padding: { xs: "16px", md: "64px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "open sans",
            fontWeight: "700",
            fontSize: "clamp(1rem, 5vw, 2.5rem)",
            marginLeft: { xs: "0", md: "32px" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          Dashboard
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          divider={<Divider orientation="vertical" variant="middle" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{
            margin: "36px auto 52px",
            padding: "32px",
            border: "4px solid #472C1B",
            borderRadius: "26px",
            backgroundColor: "#FFEBDE",
            justifyContent: { md: "center" },
          }}
        >
          {/* Info de la cantidad de sucursales que están activas */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              Sucursales Activas
            </Typography>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              }}
            >
              {sucursalesActivas.length === 0 ? "0" : 1 / 1}
            </Typography>
          </Box>
          {/* Info del total de reservaciones */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              Total Reservaciones
            </Typography>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              }}
            >
              {totalReservas}
            </Typography>
          </Box>
          {/* Info de la cantidad de deliveries que están activos */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              Deliveries Activos
            </Typography>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              }}
            >
              0
            </Typography>
          </Box>
          {/* Info de la cantidad de menús que están activos */}
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1rem, 2vw, 2rem)",
              }}
            >
              Menús Activos
            </Typography>
            <Typography
              href="/admin/allMenu"
              sx={{
                fontFamily: "open sans",
                fontWeight: "700",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              }}
            >
              {menusActivos.length}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ height: "5px" }} />
        <Box sx={{ margin: "30px 0", color: "#472C1B" }}>
          {/* <Cards /> */}
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* Card Menú */}
            <Grid item xs={12} md={6}>
              {menusActivos?.length === 0 ? (
                // Tarjeta por defecto si no hay menús activos
                <Paper
                  sx={{
                    minHeight: { lg: "532px" },
                    maxHeight: { sm: "532px" },
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Box>
                    <RestaurantMenuIcon
                      sx={{ fontSize: "50px", color: "#472C1B" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Menú
                  </Typography>
                  <Typography>No hay información que mostrar</Typography>
                  <Button size="large" sx={{ margin: "52px 0 100px" }}>
                    Configurar
                  </Button>
                </Paper>
              ) : (
                // Tarjeta con donde se mapean 2 menús con esta en el figma
                <Paper
                  sx={{
                    maxHeight: { sm: "532px" },
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Menú
                  </Typography>
                  <Typography>
                    Tienes {menusActivos.length}{" "}
                    {menusActivos.length === 1
                      ? "menú activo"
                      : "menús activos"}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: "32px" },
                      justifyContent: "space-around",
                      margin: "64px 0",
                    }}
                  >
                    {menusActivos.map((item) => (
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Box sx={{ textAlign: "center" }}>{item.icon}</Box>
                        <Typography
                          sx={{
                            fontFamily: "open sans",
                            fontWeight: "700",
                            fontSize: "20px",
                            margin: "8px 0 48px",
                            textAlign: "center",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Button
                          size="small"
                          component={Link}
                          to="/admin/allMenu"
                        >
                          Ver
                        </Button>
                      </Box>
                    ))}
                  </Box>
                </Paper>
              )}
            </Grid>
            {/* Card Reservaciones */}
            <Grid item xs={12} md={6}>
              {totalReservas?.length === 0 ? (
                // Tarjeta por defecto si no hay reservaciones
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Box>
                    <MenuBookIcon sx={{ fontSize: "50px", color: "#472C1B" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Reservación
                  </Typography>
                  <Typography>No hay información que mostrar</Typography>
                  <Button size="large" sx={{ margin: "52px 0 100px" }}>
                    Configurar
                  </Button>
                </Paper>
              ) : (
                // Reservas en sucursal Condesa
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Reservaciones
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    ></Box>
                    <Divider orientation="horizontal" variant="middle" />
                  </Box>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography>Reservaciones </Typography>
                      <Typography>{totalReservas}</Typography>
                    </Box>
                    <Divider orientation="horizontal" variant="middle" />
                  </Box>
                </Paper>
              )}
            </Grid>
            {/* Card Deliveries */}
            <Grid item xs={12} md={6}>
              {deliveriesActivos?.length === 0 ? (
                // Tarjeta por defecto si no hay deliveries activos
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Box>
                    <DeliveryDiningOutlinedIcon
                      sx={{ fontSize: "50px", color: "#472C1B" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Delivery
                  </Typography>
                  <Typography>No hay información que mostrar</Typography>
                  <Button size="large" sx={{ margin: "52px 0 100px" }}>
                    Configurar
                  </Button>
                </Paper>
              ) : (
                // Deliveries en sucursal Condesa
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Delivery
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    {deliveriesActivos.map(
                      ({ id, sucursal, pedidosActivos }) => (
                        <Box key={id}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "600",
                                fontSize: "24px",
                              }}
                            >
                              {" "}
                              {sucursal}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "700",
                                fontSize: "48px",
                              }}
                            >
                              {pedidosActivos}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "600",
                                fontSize: "12px",
                              }}
                            >
                              pedidos activos
                            </Typography>
                            <Button
                              variant="large"
                              sx={{ margin: "51px auto 71px" }}
                            >
                              Ver detalle
                            </Button>
                          </Box>
                        </Box>
                      )
                    )}
                  </Box>
                </Paper>
              )}
            </Grid>
            {/* Card Sucursales */}
            <Grid item xs={12} md={6}>
              {totalReservas?.length === 0 ? (
                // Tarjeta por defecto si no hay sucursales
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Box>
                    <StoreIcon sx={{ fontSize: "50px", color: "#472C1B" }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Sucursales
                  </Typography>
                  <Typography>No hay información que mostrar</Typography>
                  <Button size="large" sx={{ margin: "52px 0 100px" }}>
                    Configurar
                  </Button>
                </Paper>
              ) : (
                // Reservas en sucursal Condesa
                <Paper
                  sx={{
                    minHeight: "532px",
                    padding: "18px",
                    border: "4px solid #472C1B",
                    borderRadius: "30px",
                    backgroundColor: "#FFEBDE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MenuIcon />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "open sans",
                      fontWeight: "700",
                      fontSize: "32px",
                      margin: "32px 0 16px",
                    }}
                  >
                    Sucursales Activas
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    {sucursalesActivas.map(
                      ({ id, name, address, publicada }) => (
                        <Box key={id}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "open sans",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              {name}
                            </Typography>
                            <Typography
                              sx={{ fontFamily: "open sans", fontSize: "14px" }}
                            >
                              {address}
                            </Typography>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box sx={{ display: "flex", padding: "0 4px" }}>
                                <Typography
                                  sx={{
                                    fontFamily: "open sans",
                                    fontWeight: "700",
                                    fontSize: "14px",
                                    marginRight: "4px",
                                  }}
                                >
                                  Estado:
                                </Typography>
                                {publicada ? (
                                  <Typography
                                    sx={{
                                      fontFamily: "open sans",
                                      fontWeight: "700",
                                      fontSize: "14px",
                                      color: "#0CA808",
                                    }}
                                  >
                                    Publicada
                                  </Typography>
                                ) : (
                                  <Typography
                                    sx={{
                                      fontFamily: "open sans",
                                      fontWeight: "700",
                                      fontSize: "14px",
                                      color: "#FF0202",
                                    }}
                                  >
                                    Sin publicar
                                  </Typography>
                                )}
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "8px",
                                  padding: "4px",
                                }}
                              >
                                <FileDownloadOutlinedIcon />
                                <EditOutlinedIcon />
                                <DeleteOutlinedIcon />
                              </Box>
                            </Box>
                          </Box>
                          <Divider orientation="horizontal" variant="middle" />
                        </Box>
                      )
                    )}
                  </Box>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
