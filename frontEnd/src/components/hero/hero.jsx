import { styled } from '@mui/system';
import { createTheme, Button, Container, Typography } from '@mui/material';
import image from '../../img/hero-foto.png';
import {Link} from 'react-router-dom'
// Creación del tema de Material-UI
const theme = createTheme();

// Estilos para el contenedor de la imagen
const ImageContainer = styled('div')({
  position: 'relative',
  height: 'auto',
  overflow: 'hidden',
  objectFit: 'contain',
});

// Estilos para la imagen de fondo
const BackgroundImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

// Estilos para el contenedor de texto superpuesto
const TextContainer = styled('div')({
  position: 'absolute',
  bottom: '10px',
  left: '5%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.5),
  color: 'white',
  textAlign: 'left',
  width: '50%',
});

// Estilos para el contenedor de botones
const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

// Estilos para el botón pequeño
const SmallButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  fontSize: 'clamp(10px, 1.5vw, 14px)',
}));

// Componente Hero
const Hero = () => (
  <Container maxWidth="xlg" disableGutters>
    <ImageContainer>
      <BackgroundImage src={image} alt="img" />
      <TextContainer>
        <Typography variant="h5" component="span" sx={{ fontSize: 'clamp(10px, 2vw, 14px)', lineHeight: '1.2', maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Vive una experiencia gastronómica única<br />que despierta tus sentidos y te transporta a tierras auténticas llenas de tradición
        </Typography>
        <ButtonContainer>
        <Link to='/reservas'>
          <SmallButton variant="contained">Reservar</SmallButton>
        </Link>
          <SmallButton variant="contained">Delivery</SmallButton>
        </ButtonContainer>
      </TextContainer>
    </ImageContainer>
  </Container>
);

export default Hero;