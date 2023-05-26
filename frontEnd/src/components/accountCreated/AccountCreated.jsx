import Lottie from "lottie-react";
import preparedFood from "./prepared-food.json";
import { Box, Typography } from "@mui/material";

const AccountCreated = () => {
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: "400px" }}>
          <Lottie animationData={preparedFood} />
        </Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "45px" }}>¡Has creado tu cuenta satisfactoriamente! </Typography>
      </Box>
    </>
  )
}

export default AccountCreated;