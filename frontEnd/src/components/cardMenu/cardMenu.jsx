import image from "../../img/AdobeStock_552068932.jpeg";
import { useState } from "react";
import { Grid, Button } from "@mui/material";

import Card from "../card/card";

import './cardMenu.css'

const promocion = [
  {
    image,
    dish: "papa",
  },
  {
    image,
    dish: "pera",
  },
  {
    image,
    dish: "zanahoria",
  },
];

const categories = [
  {
    image,
    dish: "Entradas",
  },
  {
    image,
    dish: "Ensalada",
  },
  {
    image,
    dish: "Sopas",
  },
  {
    image,
    dish: "Pescados y Mariscos",
  },
  {
    image,
    dish: "Carnes",
  },
  {
    image,
    dish: "Postres",
  },
];

const CardMenu = () => {
  const [selectedOption, setSelectedOption] = useState(true);

  const handleClick = () => {
    setSelectedOption(prevOption => !prevOption);
  };

  const Cul = () => {
    console.log("hola");
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" height="30px">
        <Grid item>
        <div
            variant="contained"
            onClick={handleClick}
            disabled={selectedOption}
            style={{
              textDecoration: selectedOption ?"underline" : "",
            }}
          >
            Menú
          </div>
        </Grid>
        <Grid item>
          <div
            
            onClick={handleClick}
            style={{
              textDecoration: !selectedOption ? "underline" : ""
            }}
          >
            Delivery
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "40px", height: "25vw" }}
      >
        {promocion.map((e, index) => (
          <Grid item xs={4} key={e.dish}>
            {selectedOption && (
              <Card image={e.image} dish={e.dish} large={index < 3} square={false} altt={false} />
            )}
          </Grid>
        ))}
      </Grid>

      <div style={{ marginTop: "20px" }}>
        <Grid container spacing={2} justifyContent="center">
          {categories.map((e, index) => (
            <Grid item xs={4} key={e.dish} height="20vw" onClick={Cul}>
              <Card
                image={e.image}
                dish={e.dish}
                square={index >= 0 && index <= 5}
                large={(index >= 0 && index <= 5) || index < 3}
                altt={index >= 0 && index <= 5}
                style={{ marginTop: "10px" }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CardMenu;