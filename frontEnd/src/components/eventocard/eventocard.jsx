import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function EventoCard({ img, txt }) {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src={img}
          alt="Imagen evento"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
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
            fontSize: '2.5vw',
            lineHeight: '4vw',
            color: '#ffffff',
            zIndex: 1,
          }}
        >
          {txt}
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Link to='/eventos'>
            <Button variant="yellow" sx={{ fontSize: '1vw', maxWidth: '200px', whiteSpace: 'nowrap'}}>Detalle del evento</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
