import { styled } from '@mui/system';
import {  Button, Container, Typography } from '@mui/material';
import image from '../../img/hero-foto.png';
import {Link} from 'react-router-dom'

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
  fontFamily:"open sans",
  width: '200px',
}));

const TextContainer = styled('div')({
  position: 'absolute',
  bottom: '3%',
  left: '5%',
  width: '50%',
  textAlign: 'left',
  marginBottom:"5%"

});

// Estilos para el contenedor de texto y botón
const TextButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  marginBottom: '10%',
  marginLeft:"8%",
  width:"70%"
}));

// Componente Hero
const Hero = () => (
  <Container maxWidth="xlg" disableGutters>
    <ImageContainer>
      <BackgroundImage src={image} alt="img" />
      <TextContainer>
        <TextButtonContainer>
          <Typography variant="h5" component="span" sx={{ lineHeight: '1.2', maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word', fontSize: '2.5rem', color: '#FFFFFF' }}>
            Sumérgete en una experiencia gastronómica sin igual que cautiva tus sentidos.
          </Typography>
          <ButtonContainer>
            <Link to='/reservas'>
              <SmallButton>Reservar</SmallButton>
            </Link>
          </ButtonContainer>
        </TextButtonContainer>
      </TextContainer>
    </ImageContainer>
  </Container>
);
export default Hero;