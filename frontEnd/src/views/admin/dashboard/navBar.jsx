import React, { useState } from 'react';
import { AppBar, Toolbar, Avatar, Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import avatar from "../../../assets/images/avatar.png";
import logo from "../../../assets/images/logo-color.png";
import { Home, Restaurant, Event, People, MenuBook, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: '#E5B89B',
  },
}));

//el avatar lo tiene que traer desde el logueo.
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#835C44', height: "94px" }}>
        <Toolbar sx={{ height: "100%", display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
          <Box><MenuIcon onClick={handleDrawerOpen} /></Box>
          <Avatar src={avatar} alt="Admin Photo" sx={{ width: 40, height: 40 }} />
        </Toolbar>
      </AppBar>
      <DrawerContainer open={open} sx={{ display: { xs: "block", md: "none" } }}>
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
        <Box sx={{ width: "100%", padding: "8px 16px", display: "flex", justifyContent: "flex-end" }} ><CloseIcon onClick={handleDrawerClose} sx={{ color: "#472C1B" }} /></Box>
        <List sx={{ marginTop: "16px" }}>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
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
        </List>
      </DrawerContainer>
    </>
  );
};

export default Navbar;

