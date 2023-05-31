import { styled } from '@mui/system';
import { Button, Container, Typography } from '@mui/material';
import image from '../../img/hero-foto.png';
import { Link } from 'react-router-dom'

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
  fontSize: '1.125rem',
  backgroundColor: '#FBE19D',
  color: '#000000',
  fontFamily: "open sans",
  width: '224px',
  textTransform: "none",
  height: "63px"
}));

const TextContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '0%',
  // width: '50%',
  textAlign: 'left',
  // marginBottom: "5%"
  transform: "translateY(-50%)"
});

// Estilos para el contenedor de texto y botón
const TextButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  // marginBottom: '10%',
  // marginLeft: "96px",
  // width: "70%"
}));

// Componente Hero
const Hero = () => (
  <Container maxWidth="xlg" disableGutters>
    <ImageContainer sx={{ height: { xs: "220px" } }}>
      <BackgroundImage src={image} alt="img" />
      <TextContainer sx={{ paddingLeft: { lg: "96px" } }}>
        <TextButtonContainer sx={{ alignItems: { md: "start", xs: "center" } }}>
          <Typography variant="h5" component="span" sx={{ lineHeight: '1.2', maxWidth: '539px', whiteSpace: 'normal', wordWrap: 'break-word', color: '#FFFFFF', fontFamily: 'Open Sans', fontSize: "clamp(1rem, 5vw, 2.5rem)", textAlign: { md: "start", xs: "center" } }}>
            Sumérgete en una experiencia gastronómica sin igual que cautiva tus sentidos.
          </Typography>
          <ButtonContainer>
            <Link to='/reservas'>
              <Button variant="yellow">Reservar</Button>
            </Link>
          </ButtonContainer>
        </TextButtonContainer>
      </TextContainer>
    </ImageContainer>
  </Container>
);
export default Hero;