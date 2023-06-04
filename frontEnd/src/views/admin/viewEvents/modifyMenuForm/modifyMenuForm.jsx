import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./modifyMenuForm.css";
import SideBar from '../../dashboard/sideBar';
import { useNavigate } from 'react-router-dom';

const ModifyMenuForm = () => {
  const { ProductoId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Nombre: '',
    Descripcion: '',
    Precio: '',
    CategoriaId: '',
    Stock: '',
    EstaActivo: '',
  });

  useEffect(() => {

    const getAllProducts = async () => {
      try {
        const response = await axios.get(
          `https://sdlt2.azurewebsites.net/api/Productos/GetProducto?id=${ProductoId}`
        );
        const menuData = response.data;
        setFormData(menuData);
      } catch (error) {
        console.error(error);
      }
    };

    getAllProducts();
  }, [ProductoId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://sdlt2.azurewebsites.net/api/Productos/Modify?id=${ProductoId}`,
        formData
      );
      console.log(response.data);
      navigate('/admin/AllMenu');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SideBar />
      <div className="container">
        <h1 className="title">Modificar Producto</h1>
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

export default ModifyMenuForm;

