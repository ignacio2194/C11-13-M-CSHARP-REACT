
import { styled } from '@mui/system';
import { Typography, Grid } from '@mui/material';


// Estilos para el contenedor de la tarjeta
const CardWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(0),
}));

const Image = styled('img')(({ theme, large, square, reduceSize }) => ({
  width: (large && reduceSize) ? '10%' : '100%', // Reducir el tamaño solo si large y reduceSize son verdaderos
  transform: large ? 'scale(0.95)' : 'scale(1)',
  objectFit: square ? 'cover' : 'contain',
  borderRadius: square ? '0' : null,
}));

// Estilos para el texto del plato
const DishText = styled(Typography)(({ theme }) => ({
  fontSize: '3vw',
  marginTop: '-2vw'
}));

/**
 * Componente de Tarjeta
 * @param {Object} props - Propiedades de la tarjeta
 * @param {string} props.dish - Nombre del plato
 * @param {boolean} props.large - Indica si la imagen debe ser más grande y alargada
 * @param {boolean} props.square - Indica si la imagen debe ser más cuadrada
 * @returns {JSX.Element} Elemento de tarjeta
 */
function Card({ dish, image, large, square, category}) {

  const handleClick = () => {
    category(dish);
  };

  return (
    <CardWrapper onClick={category ? handleClick : null}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image src={image} alt="" large={large} square={square}/>
        </Grid>
        <Grid item>
          <DishText variant="body1">{dish}</DishText>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Card;
