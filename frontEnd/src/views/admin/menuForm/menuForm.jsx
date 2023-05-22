//FORMULARIO CREACION DE MENÚ
//NOMBRE
//DESCRIPCION
//PRECIO
//REGION/PAIS
//CATEGORIA
//STOCK
//IMAGEN


import React, { useState } from 'react';

function MenuForm() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    country: '',
    category: '',
    stock: '',
    image: null,
  });

  const [error, setError] = useState({
    name: '',
    description: '',
    price: '',
    country: '',
    category: '',
    stock: '',
    image: null,
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
    if (!input.image) error.image = "Insert an Image";

    return error;  
  }



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios
  //   .post("http://localhost:3001/menu", form)
  //   .then((response)=> alert ("Product Created"))
        

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
    <form>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={form.description}
          // onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={form.price}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label>Región/País:</label>
        <input
          type="text"
          name="country"
          value={form.country}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label>Categoría:</label>
        <input
          type="text"
          name="category"
          value={form.category}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={form.stock}
          // onChange={handleChange}
        />
      </div>
      <div>
        <label>Imagen:</label>
        <input
          type="file"
          name="image"
          // onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MenuForm;


