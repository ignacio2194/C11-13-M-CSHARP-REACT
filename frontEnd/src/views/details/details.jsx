import { Box, Button, Stack, Typography } from "@mui/material";
import BasicTable from "./Table";
import logo from '../../img/logo-sabores@2x.png';
import { useNavigate } from "react-router-dom";
import BadgeAvatars from "../../components/avatar/Avatar";
import { useState } from "react";
import { resetStore } from "../../store/store";


const Details = () => {
  const navigate = useNavigate();

  const [empty, setEmpty] = useState(false)
  const [total, setTotal] = useState(0)

  const resetStr = ()=>{
    resetStore()
  }

  const  isempty = () =>{
    setEmpty(!empty)
  } 

  return (
    <Box>
      <Box sx={{ backgroundColor: "primary.main", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px 60px" }}>
        <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} onClick={() => navigate("/")} />
        <BadgeAvatars />
      </Box>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", my: 8 }}>Detalles de pedidos</Typography>
        <BasicTable isempty={isempty} total={total}/>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", p: "24px" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Button variant="contained" onClick={resetStr}>
              Eliminar pedido
            </Button>
            <Button variant="contained" disabled={empty} >
              Pagar
            </Button>
          </Stack>
        </Box>
        <Box>
          
          <Box sx={{ display: "flex", justifyContent: "center", flexFlow: "wrap", gap: "16px", marginTop: "24px" }}>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Details;