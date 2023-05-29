import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EventoCard({ img, txt }) {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <img
          src={img}
          alt="Imagen evento"
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontWeight: 10,
            fontSize: '1.5vw', // Tamaño de fuente ajustado en unidades responsivas (ejemplo: 3% del ancho de la pantalla)
            lineHeight: '4vw', // Altura de línea ajustada en unidades responsivas (ejemplo: 4% del ancho de la pantalla)
            color: '#ffffff',
            zIndex: 1,
          }}
        >
          {txt}
        </Typography>
      </Box>
    </Box>
  );
}
