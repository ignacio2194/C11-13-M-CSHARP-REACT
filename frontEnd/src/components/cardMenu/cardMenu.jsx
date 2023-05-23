import { useState } from "react";
import { Grid } from "@mui/material";
import Card from "../card/card";
import Dishmenu from "../dishmenu/dishmenu";
import image from "../../img/AdobeStock_552068932.jpeg";

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

  const [categorytype, setCategorytype] = useState("menu");

  const handleClick = () => {
    setSelectedOption((prevOption) => !prevOption);
  };

  const handleCategory = (dish) => {
    console.log(dish);
    setCategorytype(dish);
    console.log(categorytype);
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <div
            variant="contained"
            onClick={handleClick}
            disabled={selectedOption}
            style={{
              textDecoration: selectedOption ? "underline" : "",
              fontSize: "1.5rem",
              marginBottom: "30px",
            }}
          >
            Menú
          </div>
        </Grid>
        <Grid item>
          <div
            onClick={handleClick}
            style={{
              textDecoration: !selectedOption ? "underline" : "",
              fontSize: "1.5rem",
            }}
          >
            Delivery
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {promocion.map((e, index) => (
          <Grid
            item
            xs={3}
            key={e.dish}
            style={{ padding: "0px", margin: "0px" }}
          >
            {selectedOption && categorytype === "menu" && (
              <Card
                image={e.image}
                dish={e.dish}
                large={index < 3}
                square={false}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <Grid style={{ paddingTop: "15px", padding: "5px" }}>
        {categorytype === "menu" && (
          <Grid
            container
            spacing={0}
            justifyContent="center"
            alignItems={"center"}
          >
            {categories.map((e, index) => (
              <Grid item xs={4} key={e.dish}>
                <Card
                  image={e.image}
                  dish={e.dish}
                  square={index >= 0 && index <= 5}
                  large={(index >= 0 && index <= 5) || index < 3}
                  altt={index >= 0 && index <= 5}
                  category={handleCategory}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <div>
        {categorytype !== "menu" && (
          <Dishmenu dish={categorytype} status={selectedOption} />
        )}
      </div>
    </div>
  );
};

export default CardMenu;
