import { Box, Typography } from "@mui/material"
import CircularStatic from "./CircularStatic"

const Spinner = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box>
        <CircularStatic />
      </Box>
      <Typography sx={{ textAlign: "center", margin: "32px 0", fontSize: "clamp(1.5rem, 6vw, 2.5rem)" }} variant="h5">Generando tu ticket...</Typography>
    </Box>
  )
}

export default Spinner