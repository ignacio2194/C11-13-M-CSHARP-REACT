//FORMULARIO CREACION DE MENÚ
//NOMBRE
//DESCRIPCION
//PRECIO
//REGION/PAIS
//CATEGORIA
//STOCK
//IMAGEN


import React, { useState } from 'react';
import style from "./menuForm.module.css"

function MenuForm() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    country: '',
    category: '',
    stock: '',
    
  });

  const [error, setError] = useState({
    name: '',
    description: '',
    price: '',
    country: '',
    category: '',
    stock: '',
    
  });

  function validate(input){
    let error ={}
    if (!input.name) error.name = "Insert a Name";
    if (!/^[A-Za-z]+$/.test(input.name)) error.name = "The Name is invalid";
    if (!input.description) error.description = "Insert a Description";
    if (!input.price) error.price = "Insert a Price";
    if (!input.country) error.country = "Insert a Country";
    if (!input.category) error.category = "Insert a Category";
    if (!input.stock) error.stock = "Insert a Stock";
   

    return error;  
  }
  const handleForm = (event) => {
    setError(validate({ ...form, [event.target.name]: event.target.value }));
    setForm({ ...form, [event.target.name]: event.target.value });
  };



   const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios
  //   .post("http://localhost:3001/menu", form)
  //   .then((response)=> alert ("Product Created"))
   }   

  //   // Reiniciamos  los valores del formulario después del envío
  //   setForm({
  //     name: '',
  //     description: '',
  //     price: '',
  //     country: '',
  //     category: '',
  //     stock: '',
  //     image: null,
  //   });
  // };

  

  return (
    <form className={style.container}>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleForm}
        ></textarea>
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleForm}
        />
      </div>
      <div>
        <label>Región/País:</label>
        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleForm}
        />
      </div>
      <div>
        <label>Categoría:</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleForm}
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          onChange={handleForm}
        />
      </div>
     
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MenuForm;


