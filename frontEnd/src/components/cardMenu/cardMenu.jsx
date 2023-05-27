import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Card from "../card/card";

import { getImgCat } from "../../store/actions/imgcategories";

import BackgroundImg from "../../img/romero.png";
import Dishmenu from "../dishmenu/dishmenu";
import image from "../../img/Promocion banner.png";
import cat1 from "../../img/categorias/menu1.jpg";
import cat2 from "../../img/categorias/menu2.jpg";
import cat3 from "../../img/categorias/menu3.jpg";
import cat4 from "../../img/categorias/menu4.jpg";
import cat5 from "../../img/categorias/menu5.jpg";
import cat6 from "../../img/categorias/menu6.jpg";

const promocion = image;

const categories = [
  {
    CategoriaId: 2,
    image: cat1,
    dish: "Entradas",
  },
  {
    CategoriaId: 3,
    image: cat2,
    dish: "Ensalada",
  },
  {
    CategoriaId: 4,
    image: cat3,
    dish: "Sopas",
  },
  {
    CategoriaId: 5,
    image: cat4,
    dish: "Pescados y Mariscos",
  },
  {
    CategoriaId: 6,
    image: cat5,
    dish: "Carnes",
  },
  {
    CategoriaId: 7,
    image: cat6,
    dish: "Postres",
  },
];

const CardMenu = () => {
  const [selectedOption, setSelectedOption] = useState(true);
  const [categorytype, setCategorytype] = useState("menu");
  const dispatch = useDispatch();
  const dataImg = useSelector((state) => state.imgcategories.data);

  useEffect(() => {
    dispatch(getImgCat());
  }, [dispatch]);

  const handleClick = () => {
    setSelectedOption((prevOption) => !prevOption);
  };

  const handleClickMenu = (e) => {
    setCategorytype(e);
  };

  const handleCategory = (dish) => {
    setCategorytype(dish);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid
        display="flex"
        width="100%"
        marginTop="15%"
        container
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap="15%"
        paddingBottom="10%"
      >
        <Grid item>
          <div
            variant="contained"
            onClick={handleClick}
            disabled={selectedOption}
            style={{
              textDecoration: selectedOption ? "underline" : "",
              fontSize: "1.25rem", paddingRight:"25%", fontFamily:"open sans"
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
              fontSize: "1.25rem",
            }}
          >
            Delivery
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {selectedOption && (
          <img src={promocion} alt="promocion" style={{ height: "20vw" }} />
        )}
      </Grid>
      {categorytype === "menu" && (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ margin: "auto", maxWidth: "1250px", paddingTop: "10%" }}
        >
          {categories.map((e, index) => (
            <Grid item xs={12} sm={6} md={4} key={e.dish}>
              <Card
                image={e.image}
                dish={e.dish}
                CategoriaId={e.CategoriaId}
                category={handleCategory}
                large={window.innerWidth >= 428} // Establece large a true en iPhones 12 y dispositivos más grandes
              />
            </Grid>
          ))}
        </Grid>
      )}
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
