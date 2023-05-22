import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../img/logo-sabores@2x.png';
import scrollToSection from '../../utils/scrollToSection';
import GoogleBtn from '../googleButton/GoogleBtn';

const Footer = ({ menu, events, sucursales }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#835c44', padding: '50px' }}>
      <Toolbar>
        <Box style={{ display: "flex", gap: 8, margin: "auto" }}>
          <Box
            onClick={() => scrollToSection(menu)}
          >
            <Typography>Menú</Typography>
          </Box>
          |
          <Box
            onClick={() => scrollToSection(events)}
          >
            <Typography>Eventos</Typography>
          </Box>
          |
          <Box
            onClick={() => scrollToSection(sucursales)}
          >
            <Typography>Sucursales</Typography>
          </Box>
        </Box>
      </Toolbar>
      <Box display="flex" justifyContent="center" style={{ padding: '30px' }}>
        <img src={logo} alt="Logo" style={{ height: '100px' }} />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
        <Box display="flex" alignItems="center" style={{ marginTop: '30px' }}>
          <Typography variant="body2" style={{ marginRight: '30px' }}>
            Av. Vicente Suárez 165, Col. Condesa, Cuauhtémoc C.P. 06140 CDMX
          </Typography>
          <Typography variant="body2" style={{ marginRight: '8px' }}>
            Tel +52 11 1010-2020
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" style={{ marginTop: '30px' }}>
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

export default Footer;
