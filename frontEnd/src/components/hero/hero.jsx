import { styled } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import image from '../../img/salmon2.jpg';

// Estilos del contenedor principal
const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    alignItems: 'center',
  },
}));

// Estilos del contenedor de la imagen
const ImageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

// Estilos del botón
const SmallButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  fontSize: '40%',
}));

// Estilos del contenedor de los botones
const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
  gap: theme.spacing(2), // Agrega espacio entre los botones
}));

const Hero = () => (
  <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: 400, flexDirection: 'row', width: '400px', paddingTop: '50px' }}>
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        {/* Contenido de la columna izquierda */}
        <ContentWrapper>
          {/* Título */}
          <Typography variant="h5" component="span" sx={{ fontSize: '180%' }}>
            Sabores de la Tierra
          </Typography>
          {/* Contenedor de los botones */}
          <ButtonContainer>
            {/* Botón Reservar */}
            <SmallButton variant="contained">Reservar</SmallButton>
            {/* Botón Delivery */}
            <SmallButton variant="contained">Delivery</SmallButton>
          </ButtonContainer>
        </ContentWrapper>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Contenedor de la imagen */}
        <ImageContainer>
          {/* Imagen */}
          <img src={image} alt="img" style={{ width: '100%', paddingTop: '15px' }} />
        </ImageContainer>
      </Grid>
    </Grid>
  </Container>
);

export default Hero;