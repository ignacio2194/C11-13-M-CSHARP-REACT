import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavListDrawerResponsive from "./navListDrawerResponsive.jsx";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "./navlink.jsx";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const closeSession = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  useEffect(() => {
    if (!token) {
      toast.success("¡Su cuenta se cerro correctamente 😎!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [token]);
  return (
    <Box
      component="nav"
      sx={{
        position: "sticky",
        top: "0",
        right: "0",
        zIndex: "9",
        width: "100%",
        maxWidth: "1440px",
      }}
    >
      <AppBar position="static">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "68px",
            padding: { lg: "16px 96px", sm: "16px 32px", xs: "16px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { lg: "8px", sm: "6px", xs: "4px" },
            }}
          >
            <LocalPhoneOutlinedIcon />
            <Typography>+54 11 1010-2020</Typography>
          </Box>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" flexItem color={"white"} />
            }
            spacing={2}
          >
            <Typography sx={{ fontWeight: "bold" }}>ES</Typography>
            <Typography>EN</Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            backgroundColor: "custom.sienna",
            display: "flex",
            justifyContent: "space-between",
            height: { lg: "133px", sm: "112px", xs: "96px" },
            padding: { lg: "16px 96px", sm: "16px 32px", xs: "16px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { lg: "200px", sm: "135px", xs: "110px" },
              height: "auto",
            }}
          >
            <img
              src={logo}
              alt="Logo Sabores De La Tierra"
              style={{ width: "100%" }}
            />
          </Box>
          <Toolbar style={{ padding: "0" }}>
            <IconButton
              color="inherit"
              size="large"
              aria-label="menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { lg: "64px", sm: "22px", xs: "16px" },
                }}
              >
                <Link
                  spy={true}
                  duration={500}
                  smooth={true}
                  exact="true"
                  offset={-201}
                  onClick={() => setShow(false)}
                  to="menu"
                >
                  <Typography>Menú</Typography>
                </Link>
                <Link
                  spy={true}
                  duration={500}
                  smooth={true}
                  exact="true"
                  offset={-201}
                  onClick={() => setShow(false)}
                  to="eventos"
                >
                  <Typography>Eventos</Typography>
                </Link>
                <Link
                  spy={true}
                  duration={500}
                  smooth={true}
                  exact="true"
                  offset={-201}
                  onClick={() => setShow(false)}
                  to="sucursales"
                />
                <Typography>Sucursales</Typography>
              </Box>
              {token ? (
                <Box>
                  <Box>
                    {token ? (
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "auto",
                            height: "71.86px",
                          }}
                        >
                          <img
                            src={avatar}
                            alt="avatar"
                            style={{ width: "35%" }}
                          />
                        </Box>
                        <Box>
                          {" "}
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "custom.yellow",
                              color: "black",
                            }}
                            onClick={closeSession}
                          >
                            {" "}
                            cerrar session
                          </Button>{" "}
                        </Box>
                      </Box>
                    ) : (
                      <p>iniciar sesion </p>
                    )}
                  </Box>
                </Box>
              ) : (
                <NavLink to="/login">
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "custom.yellow", color: "black" }}
                  >
                    {" "}
                    iniciar sesion
                  </Button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <NavListDrawerResponsive onClick={() => setOpen(false)} />
      </Drawer>
    </Box>
  );
}
