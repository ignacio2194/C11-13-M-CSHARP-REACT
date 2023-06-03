import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined'; import StoreIcon from '@mui/icons-material/Store';
import { Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const data = [
  { id: 1, title: "Menú", info: "No hay información que mostrar", icon: <RestaurantMenuIcon sx={{ fontSize: "50px", color: "#472C1B" }} /> },
  { id: 2, title: "Reservacion", info: "No hay información que mostrar", icon: <MenuBookIcon sx={{ fontSize: "50px", color: "#472C1B" }} /> },
  { id: 3, title: "Delivery", info: "No hay información que mostrar", icon: <DeliveryDiningOutlinedIcon sx={{ fontSize: "50px", color: "#472C1B" }} /> },
  { id: 4, title: "Sucursales", info: "No hay información que mostrar", icon: <StoreIcon sx={{ fontSize: "50px", color: "#472C1B" }} /> }
];

const Cards = () => {
  return (
    <Box sx={{ margin: "30px 0", color: "#472C1B" }}>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          data.map(item => (
            <Grid key={item.id} item xs={12} md={6}>
              <Paper sx={{ padding: "18px", border: "4px solid #472C1B", borderRadius: "30px", backgroundColor: "#FFEBDE", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                  <MenuIcon />
                </Box>
                <Box >{item.icon}</Box>
                <Typography sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "32px", margin: "32px 0 16px" }}>
                  {item.title}
                </Typography>
                <Typography>{item.info}</Typography>
                <Button size="large" sx={{ margin: "52px 0 100px" }}>Configurar</Button>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

export default Cards;