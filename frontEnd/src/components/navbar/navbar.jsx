import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Stack,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box } from "@mui/system";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "./scrollToTop";
import NavListDrawerResponsive from "./navListDrawerResponsive.jsx";

export default function Navbar({ menu, events, sucursales }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <>
      <ScrollToTop />
      <AppBar position="static">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          p={2}
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
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Typography>ES</Typography>
            <Typography>EN</Typography>
          </Stack>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography ml={2}>Logo</Typography>
          </Box>
          <Toolbar>
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
              <Box>
                <NavLink to="#menu" onClick={() => scrollToSection(menu)}>
                  <Button sx={{ color: "#fff" }}>
                    <Typography>Menú</Typography>
                  </Button>
                </NavLink>
                <NavLink to="#events" onClick={() => scrollToSection(events)}>
                  <Button sx={{ color: "#fff" }}>
                    <Typography>Eventos</Typography>
                  </Button>
                </NavLink>
                <NavLink to="#sucursales" onClick={() => scrollToSection(sucursales)}>
                  <Button sx={{ color: "#fff" }}>
                    <Typography>Sucursales</Typography>
                  </Button>
                </NavLink>
                <NavLink to="/login" >
                  <Button variant="contained">Iniciar Sesión</Button>
                </NavLink>
              </Box>
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
        <NavListDrawerResponsive
          onClick={() => setOpen(false)}
          menu={menu}
          events={events}
          sucursales={sucursales}
        />
      </Drawer>
    </>
  );
}
