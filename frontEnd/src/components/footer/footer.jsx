import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Logo */}
          <img src="/ruta/al/logo.png" alt="Logo" />
        </div>
        <div
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          {/* Enlaces centrales */}
          <Link  color="inherit" underline="none" sx={{ mx: 2 }}>
            About us
          </Link>
          <Link  color="inherit" underline="none" sx={{ mx: 2 }}>
            Reservas
          </Link>
          {/* Link "WhatsApp" */}
          <Link color="inherit" underline="none" sx={{ mx: 2 }}>
            WhatsApp
          </Link>
        </div>
        <div>
          {/* Dirección */}
          <Typography variant="body2" sx={{ textAlign: 'right' }}>
            Calle Falsa 1234
          </Typography>
        </div>
      </Container>
    </Box>
  );
}
