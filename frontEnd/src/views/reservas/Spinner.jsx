import { Box, Typography } from "@mui/material"
import CircularStatic from "./CircularStatic"

const Spinner = () => {
  return (
    <Box sx={{ width: "100%", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <CircularStatic />
        <Typography sx={{ textAlign: "center", marginTop: { lg: "70px", xs: "32px" }, fontSize: "clamp(1.5rem, 6vw, 3rem)" }} variant="h5">Generando tu ticket...</Typography>
      </Box>
    </Box>
  )
}

export default Spinner