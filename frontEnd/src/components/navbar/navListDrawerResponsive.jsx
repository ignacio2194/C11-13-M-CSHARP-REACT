import { Button, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "./navlink";
import scrollToSection from "../../utils/scrollToSection.js";

export default function NavListDrawerResponsive({ onClick, closeSession, menu, seccionEventos, sucursales }) {
  const [show, setShow] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "custom.sienna",
        width: "100%",
        m: "auto",
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              alignItems: "center",
              color: "white",
              padding: "32px 0",
            }}
          >
            <a
              href='#menu'
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff"
              }}
            >
              <Typography variante='h5'>Menú</Typography>
            </a
            >
            <a
              href='#seccionEventos'
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff"
              }}
            >
              <Typography variante='h5'>Eventos</Typography>
            </a>
            <a
              href='#sucursales'
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff"
              }}
            >
              <Typography variante='h5'>Sucursales</Typography>
            </a>
            {sessionStorage.getItem("token") ? (
              <NavLink to="/" onClick={closeSession}>
                <Button variant="yellow" size="small">
                  Cerrar Sesión
                </Button>
              </NavLink>
            ) : (
              <NavLink to="/login">
                <Button variant="yellow" size="small">
                  Iniciar Sesión
                </Button>
              </NavLink>
            )}
          </Box>
        </List>
      </nav>
    </Box>
  );
}
