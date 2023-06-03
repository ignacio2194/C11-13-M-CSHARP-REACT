import React from 'react';
import CarouselEventos from '../carouselEventos/carouselEventos';
import hojas from '../../img/hojas.svg';
import './seccionEventos.module.css';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

const seccionEventos = () => {
  return (
    <div id='eventos' style={{
      width: '100%',
      height: '120vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E5B89B',
      backgroundImage: `url(${hojas})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: '50%',
    }}>
      <h2 style={{ textAlign: 'center', color: 'black', marginTop: '-50px', fontFamily: 'Parisienne, cursive', fontSize: '80px', fontWeight: 'normal' }}>Eventos</h2>
      <CarouselEventos />
      <div style={{paddingTop:'100px'}}>
      <Link to="/eventos" style={{ textDecoration: 'none' }}>
       <Button
        variant="contained"
        color="primary"
      sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "2.67vw 9.47vw",
      gap: "0.267vw",
      width: "17.5vw",
      height: "5.25vw",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      background: "#835C44",
      borderRadius: "0.375vw",
      textTransform: "none",
      fontSize: "1.67vw",
      color: "#FFFFFF", // Color de texto normal
      "&:hover": {
      color: "#FBE19D", // Cambia el color de texto al pasar el mouse
      background: "#835C44", // Mantiene el color de fondo constante
    },
  }}
>
  Eventos
</Button>
</Link>
      </div>
     
    </div>
  );
};

export default seccionEventos;
