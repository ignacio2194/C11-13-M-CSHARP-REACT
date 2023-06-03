import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./menuForm.css"
import SideBar from '../dashboard/sideBar';
import Navbar from '../../admin/dashboard/navBar';

const MenuForm = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Descripcion: '',
    Precio: '',
    CategoriaId: '',
    Stock: '',
    EstaActivo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://sdlt2.azurewebsites.net/api/Productos/Create',
        formData
      );
      console.log(response.data); // Puedes mostrar o utilizar la respuesta recibida aquí
      // Restablecer los valores del formulario
      setFormData({
        Nombre: '',
        Descripcion: '',
        Precio: '',
        CategoriaId: '',
        Stock: '',
        EstaActivo: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SideBar />
      <Navbar />
      <div className="container">

        <h1 className="title">Crear Producto</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <TextField
            label="Nombre"
            name="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="form-field"
          />

          <TextField
            label="Descripción"
            name="Descripcion"
            value={formData.Descripcion}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="form-field"
          />

          <TextField
            label="Precio"
            name="Precio"
            value={formData.Precio}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="form-field"
          />

          <TextField
            label="Categoría ID"
            name="CategoriaId"
            value={formData.CategoriaId}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="form-field"
          />

          <TextField
            label="Stock"
            name="Stock"
            value={formData.Stock}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="form-field"
          />

          <div className="button-container">
            <Button type="submit" variant="contained" color="primary">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuForm;
