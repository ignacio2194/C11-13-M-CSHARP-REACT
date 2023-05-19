import {
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

export default function NavListDrawerResponsive({ onClick }) {
  return (
    <Box sx={{ width: 250, m: "auto", p: 2 }} onClick={onClick} >
      <nav aria-label="main mailbox folders">
        <List>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "center" }}>
            <NavLink
              to="/"
              style={({ isActive }) => isActive
                ? { color: "white", backgroundColor: "black", padding: "4px" }
                : {}
              }
            >
              <Typography>Inico</Typography>
            </NavLink>
            <NavLink
              to="/menu"
              style={({ isActive }) => isActive
                ? { color: "white", backgroundColor: "black", padding: "4px" }
                : {}
              }
            >
              <Typography>Menú</Typography>
            </NavLink>
            <NavLink
              to="/eventos"
              style={({ isActive }) => isActive
                ? { color: "white", backgroundColor: "black", padding: "4px" }
                : {}
              }
            >
              <Typography>Eventos</Typography>
            </NavLink>
            <NavLink
              to="/sucursales"
              style={({ isActive }) => isActive
                ? { color: "white", backgroundColor: "black", padding: "4px" }
                : {}
              }
            >
              <Typography>Sucursales</Typography>
            </NavLink>
            <NavLink
              to="/login"
              style={({ isActive }) => isActive
                ? { color: "white", backgroundColor: "black", padding: "4px" }
                : {}
              }
            >
              <Typography>Iniciar Sesíon</Typography>
            </NavLink>
          </Box>
        </List>
      </nav>
    </Box>
  );
}
