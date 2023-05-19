import { styled } from '@mui/system';
import { createTheme, Button, Container, Grid, Typography } from '@mui/material';
import image from '../../img/hero-foto.png';

const theme = createTheme();

const ImageContainer = styled('div')({
  position: 'relative',
  width: '100%',
  overflow: 'hidden', // Oculta cualquier contenido que se desborde del contenedor
  margin: 0, // Elimina los márgenes por defecto
});

const BackgroundImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const TextContainer = styled('div')({
  position: 'absolute',
  bottom: '10px', // Alineación a 10px del borde inferior
  left: '5%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(0.5), // Espacio reducido entre líneas del texto
  color: 'white', // Cambio de color de texto a blanco
  textAlign: 'left', // Alineación del párrafo a la izquierda
  width: '50%', // Anchura del contenedor de texto
});

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: theme.spacing(1), // Espacio entre botones
  marginTop: theme.spacing(1), // Espacio superior
}));

const SmallButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  fontSize: 'clamp(10px, 1.5vw, 14px)',
}));

const Hero = () => (
  <Container maxWidth="xlg" disableGutters>
    <ImageContainer>
      <BackgroundImage src={image} alt="img"/>
      <TextContainer>
        <Typography variant="h5" component="span" sx={{ fontSize: 'clamp(10px, 2vw, 14px)', lineHeight: '1.2', maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word' }}>
          Vive una experiencia gastronómica única<br />que despierta tus sentidos y te transporta a tierras auténticas llenas de tradición
        </Typography>
        <ButtonContainer>
          <SmallButton variant="contained">Reservar</SmallButton>
          <SmallButton variant="contained">Delivery</SmallButton>
        </ButtonContainer>
      </TextContainer>
    </ImageContainer>
  </Container>
);

export default Hero;