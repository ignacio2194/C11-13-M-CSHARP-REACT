import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "../card/card";

import BackgroundImg from "../../img/romero.png";
import Dishmenu from "../dishmenu/dishmenu";
import image from "../../img/AdobeStock_552068932.jpg";
import cat1 from "../../img/categorias/menu1.jpg";
import cat2 from "../../img/categorias/menu2.jpg";
import cat3 from "../../img/categorias/menu3.jpg";
import cat4 from "../../img/categorias/menu4.jpg";
import cat5 from "../../img/categorias/menu5.jpg";
import cat6 from "../../img/categorias/menu6.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getImgCat } from "../../store/actions/imgcategories";

const promocion = image;

const categories = [
  {
    image: cat1,
    dish: "Entradas ",
  },
  {
    image: cat2,
    dish: "Ensalada ",
  },
  {
    image: cat3,
    dish: "Sopas ",
  },
  {
    image: cat4,
    dish: "Pescados y Mariscos ",
  },
  {
    image: cat5,
    dish: "Carnes ",
  },
  {
    image: cat6,
    dish: "Postres ",
  },
];

const CardMenu = () => {
      
  const [selectedOption, setSelectedOption] = useState(true);
  const [categorytype, setCategorytype] = useState("menu");
  const [reduceImageSize, setReduceImageSize] = useState(true); // Nueva variable de estado
  const dispatch = useDispatch()


  const dataImg = useSelector((state) => state.imgcategories.data)


  useEffect(() => {
    dispatch(getImgCat())
    console.log('pepepeeee',dataImg)
  }, [dispatch]);

  const handleClick = () => {
    setSelectedOption((prevOption) => !prevOption);
  };

  const handleClickMenu = (e) => {
    setCategorytype(e);
  };

  const handleCategory = (dish) => {
    console.log(dish);
    setCategorytype(dish);
    console.log(categorytype);
    setReduceImageSize(true);
  };

  const promocionHeight = "5px";
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
        {selectedOption && (
          <Card
            image={promocion}
            large={true}
            square={false}
            style={{ height: promocionHeight }} // Agrega el estilo de altura a la imagen promocion
          />
        )}
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
                  square={index >= 0 && index <= 3}
                  large={(index >= 0 && index <= 5) || index <= 3}
                  category={handleCategory}
                  reduceSize={reduceImageSize} // Pasar el valor de reduceImageSize como prop
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <div>
        {categorytype !== "menu" && (
          <Dishmenu
            dish={categorytype}
            status={selectedOption}
            click={handleClickMenu}
            list={categories}
          />
        )}
      </div>
    </div>
  );
};

export default CardMenu;
