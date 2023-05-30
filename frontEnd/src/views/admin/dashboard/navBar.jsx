import React from 'react';
import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//el avatar lo tiene que traer desde el logueo.
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#835C44' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          Admin Panel
        </Typography>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'white', marginRight: '10px' }}>
           
          </Typography>
          <Avatar src="ruta/a/tu/foto.png" alt="User Photo" sx={{ width: 40, height: 40 }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

