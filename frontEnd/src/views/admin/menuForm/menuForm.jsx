  import React, { useState } from 'react';
  import axios from 'axios';
  import TextField from '@mui/material/TextField';
  import Button from '@mui/material/Button';
  import "./menuForm.css"
  import SideBar from '../dashboard/sideBar';
  import Navbar from '../../admin/dashboard/navBar';

  const MenuForm = () => {
    const [form, setForm] = useState({
      Nombre: '',
      Descripcion: '',
      Precio: '',
      CategoriaId: '',
      Stock: '',
      EstaActivo: '',
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
       await axios.post(
          'https://sdlt2.azurewebsites.net/api/Productos/Create',
          form
        );
        alert('Product Created!');
       
        // Restablecer los valores del formulario
        setForm({
          Nombre: '',
          Descripcion: '',
          Precio: '',
          CategoriaId: '',
          Stock: '',
          EstaActivo: '',
        });
      } catch (error) {
       alert(error);
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
              value={form.Nombre}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
            />

            <TextField
              label="Descripción"
              name="Descripcion"
              value={form.Descripcion}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
            />

            <TextField
              label="Precio"
              name="Precio"
              value={form.Precio}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
            />

            <TextField
              label="Categoría ID"
              name="CategoriaId"
              value={form.CategoriaId}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              className="form-field"
            />

            <TextField
              label="Stock"
              name="Stock"
              value={form.Stock}
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
