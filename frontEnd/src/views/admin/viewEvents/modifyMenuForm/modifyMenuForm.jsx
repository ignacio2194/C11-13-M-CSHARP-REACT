//FORMULARIO MODIFICACIÓN DE MENÚ
//NOMBRE
//DESCRIPCION
//PRECIO
//REGION/PAIS
//CATEGORIA
//STOCK
//IMAGEN

import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function ModifyMenuForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const [ form, setForm]= useState


  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  
  //   useEffect(() => {
  //dispatch para obtener el detalle del producto a modificar

  //     const changeProduct = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:3001/menu/productId');
  //         const productData = response.data;
  //         setForm({
  //           name: productData.name,
  //           description: productData.description,
  //           price: productData.price,
  //           country: productData.country,
  //           category: productData.category,
  //           stock: productData.stock,
  //          
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchProduct();
  //   }, []);

  return (
    <form>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Región/País:</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Categoría:</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ModifyMenuForm;
