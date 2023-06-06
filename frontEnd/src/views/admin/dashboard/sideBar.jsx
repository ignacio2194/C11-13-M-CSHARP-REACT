import React from 'react';
import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider, Button } from '@mui/material';
import { Home, Restaurant, Event, People, MenuBook, ListAlt, ExitToApp } from '@mui/icons-material';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../../assets/images/logo-color.png"

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: '#E5B89B',
  },
}));

const SideBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("Email");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");
    navigate("/login");
  };

  return (
    <DrawerContainer variant="permanent" sx={{ display: { xs: "none", md: "block" } }}>
      <Box
        sx={{
          width: "154px",
          height: "69px",
          margin: "38px auto 29px"
        }}
      >
        <img
          src={logo}
          alt="Logo Sabores De La Tierra"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Divider variant="middle" />
      <List sx={{ marginTop: "51px" }}>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
          >
            <ListItemText primary="Inicio" primaryTypographyProps={{ color: "#000000DE" }} />
          </NavLink>
        </ListItem>
        <ListItem button component={Link} to="/admin/createMenu">
          <ListItemIcon>
            <Restaurant />
          </ListItemIcon>
          <ListItemText primary="Crear Menú" />
        </ListItem>
        <ListItem button component={Link} to="/admin/allMenu">
          <ListItemIcon>
            <MenuBook />
          </ListItemIcon>
          <ListItemText primary="Ver Menú" />
        </ListItem>
        <ListItem button component={Link} to="/admin/eventForm">
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Crear Evento" />
        </ListItem>
        <ListItem button component={Link} to="/admin/allEvents">
          <ListItemIcon>
            <ListAlt />
          </ListItemIcon>
          <ListItemText primary="Ver Eventos" />
        </ListItem>
        <ListItem button component={Link} to="/admin/allreservas">
          <ListItemIcon>
            <Event />
          </ListItemIcon>
          <ListItemText primary="Ver Reservas" />
        </ListItem>
        <ListItem button component={Link} to="/admin/allUsers">
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Ver Usuarios" />
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <Button
            startIcon={<ExitToApp />}
            onClick={handleLogout}
            sx={{ color: '#472C1B', fontWeight: 'bold' }}
          >
            Salir de sesión
          </Button>
        </ListItem>
      </List>
    </DrawerContainer>
  );
};

export default SideBar;

