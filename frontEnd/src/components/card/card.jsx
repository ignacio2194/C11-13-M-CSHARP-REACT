import { styled } from "@mui/system";
import { Typography, Grid } from "@mui/material";

// Estilos para el texto del plato
const DishText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#000",
}));

// Estilos para el contenedor de la tarjeta
const CardContainer = styled(Grid)({
  position: "relative",
});

// Estilos para la imagen
const CardImage = styled("img")({
  width: "100%",
  display: "block",
});

// Estilos para el contenedor del texto
const CardTextContainer = styled(Grid)({
  fontFamily: "Open Sans",
  position: "absolute",
  left: 0,
  right: 0,
  bottom: "-30px",
  textAlign: "center",
  marginBottom: "3vm"
});

/**
 * Componente de Tarjeta
 * @param {Object} props - Propiedades de la tarjeta
 * @param {string} props.dish - Nombre del plato
 * @param {boolean} props.large - Indica si la imagen debe ser más grande y alargada
 * @param {boolean} props.square - Indica si la imagen debe ser más cuadrada
 * @returns {JSX.Element} Elemento de tarjeta
 */
function Card({ dish, image, category, CategoriaId }) {
  const handleClick = () => {
    category(dish);
  };

  return (
    <CardContainer container direction="column" alignItems="center" onClick={category ? handleClick : null} style={{ marginBottom: "10%" }}>
      <Grid item>
        <CardImage src={image} alt="" />
      </Grid>
      <CardTextContainer item>
        <DishText variant="h3">{dish}</DishText>
      </CardTextContainer>
    </CardContainer>
  );
}

export default Card;