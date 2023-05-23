import {
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import scrollToSection from "../../utils/scrollToSection";

export default function NavListDrawerResponsive({ onClick, menu, events, sucursales }) {
  return (
    <Box sx={{ backgroundColor: "custom.lightBrown", width: "100%", m: "auto", p: 2 }} onClick={onClick} >
      <nav aria-label="main mailbox folders">
        <List>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "center" }}>
            <Box
              onClick={() => scrollToSection(menu)}
            >
              <Typography>Menú</Typography>
            </Box>
            <Box
              onClick={() => scrollToSection(events)}
            >
              <Typography>Eventos</Typography>
            </Box>
            <Box
              onClick={() => scrollToSection(sucursales)}
            >
              <Typography>Sucursales</Typography>
            </Box>
            <NavLink
              to="/login"
            >
              <Typography>Iniciar Sesíon</Typography>
            </NavLink>
          </Box>
        </List>
      </nav>
    </Box>
  );
}
