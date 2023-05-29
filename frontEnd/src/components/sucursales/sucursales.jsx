import React from "react";
import hoja2 from "../../img/hoja2.png";
import fondoSucursales from "../../img/fondo-sucursales.png";
import "./sucursales.module.css";

const Sucursales = () => {
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
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ffffff",
          marginTop: "20px",
          fontFamily: "Parisienne, cursive",
          fontSize: "70px",
          fontWeight: "normal",
        }}
      >
        Nuestras sucursales
      </h1>
      <div style={{ marginTop: "150px" }}>
        <h2 style={{ textAlign: "center", color: "#ffffff", fontSize: "50px" }}>
          Condesa
        </h2>
        <p style={{ textAlign: "center", color: "#ffffff", fontSize: "20px" }}>
          Av. Vicente Suárez 165,
          <br />
          Col. Condesa, Cuauhtémoc C.P. 06140
          <br />
          Ciudad de México, CDMX
        </p>
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
        >
          Cómo llegar
        </p>
      </div>
      <div
  style={{
    position: "relative",
    width: "100%",
    backgroundColor: "#050507", // Aplica un fondo negro a hoja2
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:"3vw"
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
</div>
    </div>
  );
};

export default Sucursales;
