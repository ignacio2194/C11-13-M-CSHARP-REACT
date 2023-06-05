import React from 'react';
import CarouselEventos from '../carouselEventos/carouselEventos';
import hojas from '../../img/hojas.svg';
import './seccionEventos.module.css';

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
    </div>
  );
};

export default seccionEventos;
