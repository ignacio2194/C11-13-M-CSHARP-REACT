import {
  AppBar,
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
import NavListDrawerResponsive from "./navListDrawerResponsive.jsx";

export default function Navbar({ menu, events, sucursales }) {
  const [open, setOpen] = useState(false);

  return (
    <>
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
                <NavLink
                  to="/"
                  style={({ isActive }) => isActive
                    ? { color: "white", backgroundColor: "black", padding: "4px" }
                    : {}
                  }
                >
                  <Typography>Inicio</Typography>
                </NavLink>
                <NavLink
                  to="/menu"
                  style={({ isActive }) => isActive
                    ? { color: "white", backgroundColor: "black", padding: "4px" }
                    : {}
                  }
                >
                  <Typography>Menú</Typography>
                </NavLink>
                <NavLink
                  to="/eventos"
                  style={({ isActive }) => isActive
                    ? { color: "white", backgroundColor: "black", padding: "4px" }
                    : {}
                  }
                >
                  <Typography>Eventos</Typography>
                </NavLink>
                <NavLink
                  to="/sucursales"
                  style={({ isActive }) => isActive
                    ? { color: "white", backgroundColor: "black", padding: "4px" }
                    : {}
                  }
                >
                  <Typography>Sucursales</Typography>
                </NavLink>
                <NavLink
                  to="/login"
                  style={({ isActive }) => isActive
                    ? { color: "white", backgroundColor: "black", padding: "4px" }
                    : {}
                  }
                >
                  <Typography>Iniciar Sesíon</Typography>
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
        />
      </Drawer>
    </>
  );
}
