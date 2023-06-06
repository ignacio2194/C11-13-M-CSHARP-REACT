import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

const AddressSelector = () => {
  const [addressText, setAddressText] = useState('');

  useEffect(() => {
    // Realizar la solicitud a la API para obtener la información
    axios
      .get('URL_DE_LA_API')
      .then(response => {
        setAddressText(response.data.texto);
      })
      .catch(error => {
        console.error('Error al obtener la información de la API:', error);
      });
  }, []);

  return (
    <div>
      <Typography style={{ textAlign: 'center' }} variant="h5">
        Ingresa tu dirección
      </Typography>
      <Box
        style={{
          backgroundColor: '#fcecdc',
          borderRadius: '8px',
          border: '2px solid black',
          padding: '16px',
          margin: '16px',
        }}
      >
        <Typography variant="body1">{addressText}</Typography>
      </Box>
    </div>
  );
};

export default AddressSelector;
