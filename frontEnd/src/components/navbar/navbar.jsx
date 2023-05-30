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
import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavListDrawerResponsive from "./navListDrawerResponsive.jsx";
import scrollToSection from "../../utils/scrollToSection.js";
import logo from "../../assets/images/logo.png";

export default function Navbar({ menu, events, sucursales }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: "sticky", top: "0", right: "0", zIndex: "9", width: "100%" }}>
      <AppBar position="static" >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "68px", padding: "0 28px" }}
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
            divider={<Divider orientation="vertical" flexItem color={"white"} />}
            spacing={2}
          >
            <Typography sx={{ fontWeight: "bold" }}>ES</Typography>
            <Typography>EN</Typography>
          </Stack>
        </Stack>
        <Box sx={{ backgroundColor: "custom.lightBrown", display: "flex", justifyContent: "space-between", height: "133px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // width: "155px",
              marginLeft: "28px",
              width: { xs: "100px", sm: "175px" }
            }}
          >
            <img src={logo} alt="Logo Sabores De La Tierra" style={{ width: "100%" }} />
          </Box>
          <Toolbar >
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
              <Box sx={{ display: "flex", gap: "32px" }}>
                <Box
                  onClick={() => scrollToSection(menu)}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Menú</Typography>
                </Box>
                <Box
                  onClick={() => scrollToSection(events)}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Eventos</Typography>
                </Box>
                <Box
                  onClick={() => scrollToSection(sucursales)}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography>Sucursales</Typography>
                </Box>
                <NavLink
                  to="/login"
                >
                  <Button variant="yellow">Iniciar Sesión</Button>
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
    </nav>
  );
}
