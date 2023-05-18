import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../img/logo-sabores@2x.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#835c44', padding: '50px' }}>
      <Toolbar>
        <Typography variant="body1" style={{ flexGrow: 1, textAlign: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <span style={{ marginRight: '8px' }}>Inicio</span>
          </Link>
          |
          <Link to="/menu" style={{ textDecoration: 'none', color: 'white'}}>
            <span style={{ margin: '0 8px' }}>Menú</span>
          </Link>
          |
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <span style={{ margin: '0 8px' }}>Eventos</span>
          </Link>
          |
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <span style={{ marginLeft: '8px' }}>Sucursales</span>
          </Link>
        </Typography>
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
          <FacebookIcon style={{ marginRight: '4px' }} />
          <InstagramIcon />
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
