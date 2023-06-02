import React from "react";
import hoja2 from "../../img/hoja2.png";
import fondoSucursales from "../../img/fondo-sucursales.png";
import "./sucursales.module.css";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sucursales = () => {
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    event.target.style.color = "#FBE19D"; // Cambia el color de texto al pasar el mouse
  };

  const handleMouseLeave = (event) => {
    event.target.style.color = "#ffffff"; // Restaura el color de texto al salir el mouse
  };

  return (
    <div
      style={{
        backgroundImage: `url(${fondoSucursales})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1440px",
      }}
      id='sucursales'
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ffffff",
          marginTop: "20px",
          fontFamily: "Parisienne, cursive",
          fontSize: "clamp(2rem, 5vw, 4.375rem)",
          // fontSize: "70px",
          fontWeight: "normal",
        }}
      >
        Nuestras sucursales
      </h1>
      <Box sx={{ marginTop: { lg: "150px" } }}>
        <Box sx={{
          background: "rgba(255, 255, 255, 0.07)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(12px)",
          padding: "8px",
          margin: { xs: "0 16px" }
        }}>
          <Typography variant="h2" sx={{ textAlign: "center", color: "#ffffff", fontSize: "clamp(1.5rem, 6vw, 3.125rem)", fontWeight: "700" }}>
            Condesa
          </Typography>
          <p style={{ textAlign: "center", color: "#ffffff", fontSize: "20px" }}>
            Av. Vicente Suárez 165,
            <br />
            Col. Condesa, Cuauhtémoc C.P. 06140
            <br />
            Ciudad de México, CDMX
          </p>
        </Box>
        <p
          style={{
            paddingTop: "1vw",
            textAlign: "center",
            color: "#ffffff",
            fontSize: "25px",
            cursor: "pointer",
            transition: "color 0.3s ease", // Añade una transición suave al cambio de color
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/reservas")}
        >
          Cómo llegar
        </p>
      </Box>
      {/* <div
        style={{
          position: "relative",
          width: "100%",
          backgroundColor: "#050507", // Aplica un fondo negro a hoja2
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "3vw"
        }}
      >
        <img
          src={hoja2}
          alt="hojas"
          style={{
            width: "140px",
            height: "50px",
          }}
        />
      </div> */}
    </div>
  );
};

export default Sucursales;
