import React from 'react';
import { AppBar, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterMinimalista = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#835c44', padding: '30px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" style={{ marginRight: '10px' }}>
            Av. Vicente Suárez 165, Col. Condesa, Cuauhtémoc
          </Typography>
          <Typography variant="body2" style={{ marginRight: '10px' }}>
            C.P. 06140
          </Typography>
          <Typography variant="body2" style={{ marginRight: '15px' }}>
           CDMX
          </Typography>
          <Typography variant="body2">
            Tel +52 11 1010-2020
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" >
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            Síguenos:
          </Typography>
          <a href="https://www.facebook.com/" target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">
            <FacebookIcon style={{ marginRight: '4px' }} /></a>
          <a href="https://www.instagram.com/" target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">
            <InstagramIcon /></a>
        </Box>
      </Box>
      <hr style={{ margin: '0', border: 'none', borderTop: '1px solid white' }} />
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginTop: '10px' }}>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" style={{ marginTop: '8px' }}>
            Sabores de la Tierra ® 2023
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            Aviso de Privacidad
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
};

export default FooterMinimalista;
