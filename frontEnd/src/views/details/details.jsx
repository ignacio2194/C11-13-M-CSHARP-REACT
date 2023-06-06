import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { Box, Button, Stack, Typography } from "@mui/material";
import BasicTable from "./Table";
<<<<<<< HEAD
//import MediaCard from "./Card";
import logo from '../../img/logo-sabores@2x.png';
import { useNavigate } from "react-router-dom";
import BadgeAvatars from "../../components/avatar/Avatar";
import AddressSelector from "./addressSelector";
=======
import logo from "../../img/logo-sabores@2x.png";
import { useNavigate } from "react-router-dom";
import BadgeAvatars from "../../components/avatar/Avatar";
import { useEffect, useState } from "react";
import { resetStore } from "../../store/store";
import { clearCart } from "../../store/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { payment } from "../../store/actions/payment";
import { deliverySaveAction } from "../../store/actions/delivery";

>>>>>>> 41933e1c3e7feeaff180c8851c5d84b68958b314

const Details = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(true);

  const data = useSelector((state) => state.shopingCart.data);
  let idMP = useSelector((state) => state.Idpago.Id);

 
  const resetStr = () => {

    dispatch(clearCart());
    resetStore();
    //agregué este:
    idMP = "";
    window.walletBrickController?.unmount()
    navigate("/");
  };

  const isempty = () => {
    setEmpty(!empty);
  };

  const botonMP = <Wallet
    initialization={{ preferenceId: idMP, redirectMode: "modal" }}
    onSubmit={() => {
      resetStr();
    }}
  />
  
  const pay = () => {

    setVisible(!visible)
    initMercadoPago("TEST-fc30be2e-cc40-46a2-9ca5-2ab08c73ada4");

    const total = data.reduce((accumulator, currentObject) => {
      const partialResult = currentObject.cantidad * currentObject.Precio;
      return accumulator + partialResult;
    }, 0);

    const totalcarrito = {
      total,
      descriptions: "Comidas.",
    };

    
    dispatch(payment(totalcarrito));

    // dispatch(deliverySaveAction(data))

   setVisible(!visible);
    
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px 60px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "150px", height: "auto" }}
          onClick={() => navigate("/")}
        />
        <BadgeAvatars />
      </Box>
      <Box>
<<<<<<< HEAD
        <Typography variant="h4" sx={{ textAlign: "center", my: 8 }}>Detalles de pedidos</Typography>
        <Box sx={{ display: "flex", justifyContent: "center"}}>
       <AddressSelector/>
      </Box>
        <BasicTable />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", p: "24px" }}>
=======
        <Typography variant="h4" sx={{ textAlign: "center", my: 8 }}>
          Detalles de pedidos
        </Typography>
        <BasicTable isempty={isempty} total={total} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            p: "24px",
          }}
        >
>>>>>>> 41933e1c3e7feeaff180c8851c5d84b68958b314
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Button variant="contained" onClick={resetStr}>
              Eliminar pedido
            </Button>
            {/* agregué este */}
            {visible && 
              <Button variant="contained" onClick={pay} isVisible={visible}>
                Pagar
              </Button>
            }
            {botonMP}
          </Stack>
        </Box>
<<<<<<< HEAD
        {/*<Box>
          <Typography variant="h4" sx={{ textAlign: "center", marginTop: "16px" }}>¿Quieres agregar otro platillo?</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "wrap", gap: "16px", marginTop: "24px" }}>
            <MediaCard urlImage="https://minichef.net/wp-content/uploads/2020/05/empanadas.jpg" namePlato="Empanadas" />
            <MediaCard urlImage="https://fegasacruz.org/wp-content/uploads/2020/10/El-consumo-de-carne.jpg" namePlato="Carnes" />
            <MediaCard urlImage="https://www.chismestoday.com/wp-content/uploads/2019/07/Beneficios-del-Vino-Tinto.jpg" namePlato="Vinos" />
            <MediaCard urlImage="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2020/02/p3wdfm-1.jpg" namePlato="Sushi" />
          </Box>
        </Box>*/}
=======
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexFlow: "wrap",
              gap: "16px",
              marginTop: "24px",
            }}
          ></Box>
        </Box>
>>>>>>> 41933e1c3e7feeaff180c8851c5d84b68958b314
      </Box>
    </Box>
  );
};

export default Details;
