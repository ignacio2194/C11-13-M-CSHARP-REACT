import React from 'react';
import { styled } from '@mui/system';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import { Home, Restaurant, Event, People, MenuBook, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const DrawerContainer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: '#E5B89B',
  },
}));

const Toolbar = styled('div')(({ theme }) => theme.mixins.toolbar);
//Este dashboard es solo la sideBar, faltan los dibujos del diseño
const DashBoard = () => {
  return (
    <DrawerContainer variant="permanent">
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            {/* ACÁ VA EL LOGO */}
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
  );
};

export default DashBoard;