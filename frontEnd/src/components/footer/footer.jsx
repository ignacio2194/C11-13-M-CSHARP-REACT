import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../img/logo-sabores@2x.png';
import { Link } from '../navbar/navlink';

const Footer = ({ menu, events, sucursales }) => {
  const [show, setShow] = useState(false);

  return (
    <AppBar position="static" style={{ backgroundColor: '#835c44', padding: '50px' }}>
      <Toolbar>
        <Box style={{ display: "flex", gap: 8, margin: "auto" }}>
          <Link
            spy={true}
            duration={500}
            smooth={true}
            exact="true"
            offset={-201}
            onClick={() => setShow(false)}
            to="menu"
          >
            <Typography>Menú</Typography>
          </Link>
          <Link
            spy={true}
            duration={500}
            smooth={true}
            exact="true"
            offset={-201}
            onClick={() => setShow(false)}
            to="eventos"
          >
            <Typography>Eventos</Typography>
          </Link>
          <Link
            spy={true}
            duration={500}
            smooth={true}
            exact="true"
            offset={-201}
            onClick={() => setShow(false)}
            to="sucursales"
          >
            <Typography>Sucursales</Typography>
          </Link>
        </Box>
      </Toolbar>
      <Box display="flex" justifyContent="center" style={{ padding: '30px' }}>
        <img src={logo} alt="Logo" style={{ height: '100px' }} />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
        <Box display="flex" alignItems="center" style={{ marginTop: '30px' }}>
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
