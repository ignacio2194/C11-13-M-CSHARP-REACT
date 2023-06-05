import { Box, Button, Stack, Typography } from "@mui/material";
import BasicTable from "./Table";
//import MediaCard from "./Card";
import logo from '../../img/logo-sabores@2x.png';
import { useNavigate } from "react-router-dom";
import BadgeAvatars from "../../components/avatar/Avatar";
import AddressSelector from "./addressSelector";

const Details = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ backgroundColor: "primary.main", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 60px" }}>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} onClick={() => navigate("/")} />
        <BadgeAvatars />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", my: 8 }}>Detalles de pedidos</Typography>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
       <AddressSelector/>
      </Box>
        <BasicTable />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", p: "24px" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Button variant="contained">
              Eliminar pedido
            </Button>
            <Button variant="contained">
              Pagar
            </Button>
          </Stack>
        </Box>
        {/*<Box>
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: "16px" }}>¿Quieres agregar otro platillo?</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "wrap", gap: "16px", marginTop: "24px" }}>
            <MediaCard urlImage="https://minichef.net/wp-content/uploads/2020/05/empanadas.jpg" namePlato="Empanadas" />
            <MediaCard urlImage="https://fegasacruz.org/wp-content/uploads/2020/10/El-consumo-de-carne.jpg" namePlato="Carnes" />
            <MediaCard urlImage="https://www.chismestoday.com/wp-content/uploads/2019/07/Beneficios-del-Vino-Tinto.jpg" namePlato="Vinos" />
            <MediaCard urlImage="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg" namePlato="Sushi" />
          </Box>
        </Box>*/}
      </Box>
    </Box>
  )
}

export default Details;
