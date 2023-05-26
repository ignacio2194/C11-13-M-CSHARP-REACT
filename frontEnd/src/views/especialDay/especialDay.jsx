//ESTE VA A SER EL componente de los eventos
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from '@mui/material';



const Eventos = () => {
  const navigate = useNavigate();

  const handleReserva = () => {
    // Lógica para dirigirnos a la página de reserva
    navigate("/reserva");
  };


  //tener en cuenta que vamos a estar haciendo un mapeo de los eventos que haya
  //ergo, tener en cuenta a la hora de hacer el css.
  //según el diseño deberían renderizar dos, en el caso de ser más
  //habría que hacer que se puedan mostrar el resto siguiendo el diseño.
  //este código será modificado

  return (
    <Box>
    </Box>
  );
}

export default Eventos;