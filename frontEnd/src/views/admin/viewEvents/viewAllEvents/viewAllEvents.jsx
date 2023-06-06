import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import SideBar from '../../dashboard/sideBar';
import './viewAllEvents.css';
import Navbar from '../../dashboard/navBar';

const AllEvents = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const AllEvents = async () => {
      try {
        const response = await axios.get('https://sdlt2.azurewebsites.net/api/Eventos/GetAll');
        const events = response.data;
        setAllEvents(events);
      } catch (error) {
        console.error(error);
      }
    };

    AllEvents();
  }, []);

  const renderEvents = () => {
    return allEvents.map((event) => (
      <Paper key={event.id} sx={{ backgroundColor: '#FFEBDE', borderRadius: "20px", border: "4px solid #472C1B", maxHeight: "250px", width: "300px" }}>
        <ListItem>
          <ListItemText
            primaryTypographyProps={{ variant: 'h6' }}
            primary={event.Nombre}
            secondaryTypographyProps={{ color: "custom.text" }}
            secondary={
              <React.Fragment>
                <span>Descripción: {event.Descripcion}</span>
                <br />
                <span>Stock: {event.Stock}</span>
                <br />
                <span>$ {event.Precio}</span>
                <br />
              </React.Fragment>
            }
          />
        </ListItem>
      </Paper>
    ));
  };

  return (
    <>
      <SideBar />
      <Navbar />
      <Box sx={{ marginLeft: { md: "240px" }, width: { xs: "100%", md: "calc(100% - 240px)" } }}>
        <Typography m={"32px auto"} variant="h5" component="h2" align="center" className='title'>
          Todos los Eventos
        </Typography>
        <List sx={{ width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "32px" }}>
          {renderEvents()}
        </List>
      </Box>
    </>
  );
};

export default AllEvents;

