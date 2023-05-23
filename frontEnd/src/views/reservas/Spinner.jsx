import { Box, Typography } from "@mui/material"
import CircularStatic from "./CircularStatic"

const Spinner = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Typography sx={{ textAlign: "center", margin: "32px 0" }} variant="h5">Generando tu ticket...</Typography>
      <Box>
        <CircularStatic />
      </Box>
    </Box>
  )
}

export default Spinner