import React from 'react';
import fondoSucursales from '../../img/fondo-sucursales.png';
import './sucursales.module.css';

const Sucursales = () => {
  const handleMouseEnter = (event) => {
    event.target.style.fontSize = '30px';
  };

  const handleMouseLeave = (event) => {
    event.target.style.fontSize = '25px';
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondoSucursales})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#ffffff', marginTop: '20px', fontFamily:'Parisienne, cursive', fontSize:'70px', fontWeight: 'normal' }}>Nuestras sucursales</h1>
      <div style={{ marginTop: '150px' }}>
        <h2 style={{ textAlign: 'center', color: '#ffffff', fontSize:'50px' }}>Condesa</h2>
        <p style={{ textAlign: 'center', color: '#ffffff', fontSize:'20px' }}>
          Av. Vicente Suárez 165,
          <br />
          Col. Condesa, Cuauhtémoc C.P. 06140
          <br />
          Ciudad de México, CDMX
        </p>
        <p
          style={{
            textAlign: 'center',
            color: '#ffffff',
            fontSize:'25px',
            cursor: 'pointer',
            transition: 'font-size 0.3s ease',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Cómo llegar
        </p>
      </div>
    </div>
  );
};

export default Sucursales;
