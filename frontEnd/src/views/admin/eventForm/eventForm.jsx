//FORMULARIO DE CREACION DE EVENTOS
//CANTIDAD
//DIA
//HORA
//DESCUENTO
//PRECIO TOTAL?????
//ESEVENTO
//STOCKEVENTO

import React, { useState } from 'react';
// import { useDispatch } from "react-redux";


//import axios from 'axios';

const EventForm = () => {
  // const dispatch = useDispatch();

  const [form, setForm] = useState({
    amount: 0,
    day: '',
    hour: '',
    discount: 0,
    totalPrice: 0,
    nameEvent: '',
    stockEvent: 0,
  });
  const [error, setError] = useState({
    amount: 0,
    day: '',
    hour: '',
    discount: 0,
    totalPrice: 0,
    nameEvent: '',
    stockEvent: 0,
  });

  function validate(input) {
    let error = {};
    if (!input.amount) error.amount = "Insert an amount";
    if (!input.day) error.day = "Insert a Day";
    if (!input.hour) error.amount = "Insert an hour";
    if (!input.discount) error.discount = "Insert a discount";
    if (!input.totalPrice) error.total = "Insert a Total Price";
    if (!/^[A-Za-z]+$/.test(input.nameEvent)) error.nameEvent = "The Name is invalid";
    if (!input.stockEvent) error.stockEvent = "Insert a Stock";

    return error;
  }



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await axios
//         .post("http://localhost:3001/event", form)
//         .then((response) => alert("Event Created!"))
//         .catch((error) => alert(error));
//   };

  return (
     <form>
      <label>
        Cantidad:
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInputChange}
        />
        {error.amount && <span>{error.amount}</span>}
      </label>
      <br />
      <label>
        Día:
        <input
          type="text"
          name="day"
          value={form.day}
          onChange={handleInputChange}
        />
        {error.day && <span>{error.day}</span>}
      </label>
      <br />
      <label>
        Hora:
        <input
          type="text"
          name="hour"
          value={form.hour}
          onChange={handleInputChange}
        />
        {error.hour && <span>{error.hour}</span>}
      </label>
      <br />
      <label>
        Descuento:
        <input
          type="number"
          name="discount"
          value={form.discount}
          onChange={handleInputChange}
        />
        {error.discount && <span>{error.discount}</span>}
      </label>
      <br />
      <label>
        Precio Total:
        <input
          type="number"
          name="totalPrice"
          value={form.totalPrice}
          onChange={handleInputChange}
        />
        {error.totalPrice && <span>{error.totalPrice}</span>}
      </label>
      <br />
      <label>
        Nombre del Evento:
        <input
          type="text"
          name="nameEvent"
          value={form.nameEvent}
          onChange={handleInputChange}
        />
        {error.nameEvent && <span>{error.nameEvent}</span>}
      </label>
      <br />
      <label>
        Stock del Evento:
        <input
          type="number"
          name="stockEvent"
          value={form.stockEvent}
          onChange={handleInputChange}
        />
        {error.stockEvent && <span>{error.stockEvent}</span>}
      </label>
      <br />
      <button type="submit">Crear Evento</button>
    </form>
  );
};

export default EventForm;
