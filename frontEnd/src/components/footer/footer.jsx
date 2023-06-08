import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Stack, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../../img/logo-sabores@2x.png';
import { Link } from '../navbar/navlink';

const Footer = ({ menu, events, sucursales }) => {
  const [show, setShow] = useState(false);

  return (
    <Box position="static" sx={{ backgroundColor: '#835c44', color: "#fff", padding: { lg: "16px 96px", sm: "16px 32px", xs: "16px" } }}>
      <Toolbar>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem color={"white"} />}
          spacing={2}
          sx={{ margin: { lg: "68px auto 0", sm: "32px auto 0", xs: "16px auto 0" } }}
        >
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
        </Stack>
      </Toolbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { lg: "200px", sm: "175px", xs: "110px" },
          height: "auto",
          margin: { lg: "78px auto 92px", sm: "32px auto 48px", xs: "16px auto 32px" }
        }}
      >
        <img src={logo} alt="Logo Sabores De La Tierra" style={{ width: "100%" }} />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginBottom: '10px' }}>
        <Stack display="flex" alignItems={{ xs: "start", sm: "start" }} direction={{ xs: "column", sm: "column", md: "row" }}>
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
        </Stack>
        <Box display="flex" alignItems="center" style={{ marginTop: { sx: '30px', md: "0" } }}>
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
          <Typography variant="body2" style={{ marginTop: '8px' }}>
            Aviso de Privacidad
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
