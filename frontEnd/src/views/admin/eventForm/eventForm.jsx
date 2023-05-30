import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid } from '@mui/material';
import Dashboard from '../../admin/dashboard/dashboard';
import './eventForm.css';
import Navbar from '../../admin/dashboard/navBar';

const EventForm = () => {
  const [form, setForm] = useState({
    Nombre: '',
    Descripcion: '',
    RestauranteId: '',
    Stock: '',
    Precio: '',
  });

  const [error, setError] = useState({
    Nombre: '',
    Descripcion: '',
    RestauranteId: '',
    Stock: '',
    Precio: '',
  });

  const validate = (input) => {
    let errors = {};
    if (!input.Nombre) errors.Nombre = 'Insert a Name';
    if (!input.Descripcion) errors.Descripcion = 'Insert a Description';
    if (!input.RestauranteId) errors.RestauranteId = 'Insert a Restaurant ID';
    if (!input.Stock) errors.Stock = 'Insert a Stock';
    if (!input.Precio) errors.Precio = 'Insert a Price';

    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://sdlt2.azurewebsites.net/api/Eventos/Create', form);
      alert('Event Created!');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      
      <Dashboard />
      <Navbar/>
      <form onSubmit={handleSubmit} className="container">
        <h1 className="title">Crear Evento</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              name="Nombre"
              value={form.Nombre}
              onChange={handleInputChange}
              error={!!error.Nombre}
              helperText={error.Nombre}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              name="Descripcion"
              value={form.Descripcion}
              onChange={handleInputChange}
              error={!!error.Descripcion}
              helperText={error.Descripcion}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Restaurante ID"
              name="RestauranteId"
              value={form.RestauranteId}
              onChange={handleInputChange}
              error={!!error.RestauranteId}
              helperText={error.RestauranteId}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Stock"
              name="Stock"
              type="number"
              value={form.Stock}
              onChange={handleInputChange}
              error={!!error.Stock}
              helperText={error.Stock}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Precio"
              name="Precio"
              type="number"
              value={form.Precio}
              onChange={handleInputChange}
              error={!!error.Precio}
              helperText={error.Precio}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} className="button-container">
            <Button type="submit" variant="contained" color="primary">
              Crear Evento
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EventForm;
