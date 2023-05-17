import {
  Button,
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function NavListDrawerResponsive({ onClick, menu, events, sucursales }) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <Box sx={{ width: 250, m: "auto", p: 2 }} onClick={onClick} >
      <nav aria-label="main mailbox folders">
        <List>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "center" }}>
            <NavLink to="#menu" onClick={() => scrollToSection(menu)}>
              <Button variant="text">
                <Typography>Menú</Typography>
              </Button>
            </NavLink>
            <NavLink to="#events" onClick={() => scrollToSection(events)}>
              <Button variant="text">
                <Typography>Eventos</Typography>
              </Button>
            </NavLink>
            <NavLink to="#sucursales" onClick={() => scrollToSection(sucursales)}>
              <Button variant="text">
                <Typography>Sucursales</Typography>
              </Button>
            </NavLink>
            <Box sx={{ margin: "auto", mb: "32px" }}>
              <NavLink to="/login">
                <Button variant="contained">
                  <Typography variant="body1">Iniciar Sesión</Typography>
                </Button>
              </NavLink>
            </Box>
          </Box>
        </List>
      </nav>
    </Box>
  );
}
