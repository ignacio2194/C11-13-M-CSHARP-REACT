import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import Dashboard from '../../dashboard/dashboard';
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
      <ListItem key={event.id}>
        <div className="event-container">
          <ListItemText
            primaryTypographyProps={{ variant: 'h6' }}
            primary={event.Nombre}
            secondary={
              <React.Fragment>
                <span>Descripción:{event.Descripcion}</span>
                <br />
                <span>Stock: {event.Stock}</span>
                <br />
                <span>${event.Precio}</span>
                <br />
              </React.Fragment>
            }
          />
        </div>
      </ListItem>
    ));
  };

  return (
    <div>
      <Dashboard />
      <Navbar />
      <div className="dashboard-container">
        <Paper className="container" style={{ backgroundColor: '#FFEBDE', padding: '20px' }}>
          <Typography variant="h5" component="h2" align="center" className='title'>
            Todos los Eventos
          </Typography>
          <List>{renderEvents()}</List>
        </Paper>
      </div>
    </div>
  );
};

export default AllEvents;

