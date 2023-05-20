
import { styled } from '@mui/system';
import { Typography, Grid } from '@mui/material';


// Estilos para el contenedor de la tarjeta
const CardWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(0),
}));

const Image = styled('img')(({ theme, large, square, altt }) => ({
  width: large ? '100%' : '100%',
  height: altt ? 'auto' : "50%",
  transform: large ? 'scale(0.9)' : 'scale(1)',
  objectFit: square ? 'cover' : 'contain',
  borderRadius: square ? '10px' : null,
}));

// Estilos para el texto del plato
const DishText = styled(Typography)(({ theme }) => ({
  fontSize: '2.2vw',
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
function Card({ dish, image, large, square, altt}) {
  return (
    <CardWrapper>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image src={image} alt="" large={large} square={square} altt={altt}/>
        </Grid>
        <Grid item>
          <DishText variant="body1">{dish}</DishText>
        </Grid>
      </Grid>
    </CardWrapper>
  );
}

export default Card;
{/* <CardWrapper>
        <Typography variant="h6" component="h3">
          {props.dish}
        </Typography>
        <Typography variant="subtitle1" component="h4">
          {props.description}
        </Typography>
        <Price variant="body1" component="h5">
          Price: {props.price}
        </Price>
      </CardWrapper> */}