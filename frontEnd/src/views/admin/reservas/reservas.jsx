import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import SideBar from '../dashboard/sideBar';
import Navbar from '../../admin/dashboard/navBar';


const AllReservas = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get('https://sdlt2.azurewebsites.net/api/Reservas/GetAll');
        const reservationsData = response.data;
        setReservations(reservationsData);
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }

    };

    fetchReservations();
  }, []);

  const groupReservationsByCategory = () => {
    const reservationsByCategory = {};

    reservations.forEach((reservation) => {
      const { EventoId, Cantidad } = reservation;

      if (reservationsByCategory[EventoId]) {
        reservationsByCategory[EventoId].count += Cantidad;
      } else {
        reservationsByCategory[EventoId] = {
          count: Cantidad,
          reservation: reservation,
        };
      }
    });

    return reservationsByCategory;
  };

  const renderReservationsByCategory = () => {
    const reservationsByCategory = groupReservationsByCategory();

    return Object.entries(reservationsByCategory).map(([eventId, data]) => {
      const { count, reservation } = data;

      return (
        <ListItem key={eventId}>
          <div className="reservation-container">
            <ListItemText
              primaryTypographyProps={{ variant: 'h6' }}
              primary={`Evento ID: ${eventId}`}
              secondary={
                <React.Fragment>
                  <span>Cantidad de Reservas: {count}</span>
                  <br />
                  <span>Fecha y Hora: {reservation.FechaHora}</span>
                  <br />
                  <span>Precio: ${reservation.Precio}</span>
                  <br />
                  <span>Cantidad: {reservation.Cantidad}</span>
                </React.Fragment>
              }
            />
          </div>
        </ListItem>
      );
    });
  };

  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="dashboard-container">
        <Paper className="container" style={{ backgroundColor: '#FFEBDE', padding: '20px' }}>
          <Typography variant="h4" component="h1" align="center">
            Reservas por Categoría
          </Typography>
          <List>{renderReservationsByCategory()}</List>
        </Paper>
      </div>
    </div>
  );
};

export default AllReservas;
