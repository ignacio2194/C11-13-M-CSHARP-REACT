import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
  Grid,
  Box,
  Typography,
  Divider
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SideBar from "../../dashboard/sideBar";
import Navbar from "../../dashboard/navBar";
import "./allMenu.css";

const AllMenu = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);

  useEffect(() => {
    const menuProducts = async () => {
      try {
        const response = await axios.get(
          "https://sdlt2.azurewebsites.net/api/Productos/GetAll"
        );
        const products = response.data;
        setAllProducts(products);
        setOpenCategories(new Array(products.length).fill(false));
      } catch (error) {
        console.error(error);
      }
    };

    menuProducts();
  }, []);

  const toggleCategory = (index) => {
    setOpenCategories((prevOpenCategories) => {
      const updatedOpenCategories = [...prevOpenCategories];
      updatedOpenCategories[index] = !prevOpenCategories[index];
      return updatedOpenCategories;
    });
  };

  const renderProductsByCategory = () => {
    const groupedProducts = groupProductsByCategory();
    return Object.entries(groupedProducts).map(
      ([categoryId, products], index) => (
        <div key={categoryId}>
          <Button
            sx={{ backgroundColor: "transparent", color: "custom.text", padding: "0" }}
            onClick={() => toggleCategory(index)}
            startIcon={openCategories[index] ? <ExpandLess /> : <ExpandMore />}
          >
            {categoryId}
          </Button>
          <Collapse in={openCategories[index]} timeout="auto" unmountOnExit>
            <List sx={{ color: "custom.text" }}>
              {products.map((product) => (
                <>
                  <ListItem key={product.ProductoId}>
                    <Grid container alignItems="center">
                      <Grid item xs={12} md={12} lg={9}>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontFamily: "Open sans", fontWeight: "700" }}>
                              {product.Nombre}
                            </Typography>}
                          secondary={
                            <>
                              <Typography sx={{ color: "custom.text" }}>
                                {product.Descripcion}
                              </Typography>
                              <Typography sx={{ color: "custom.text" }}>
                                $ {product.Precio}
                              </Typography>
                            </>
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={12} lg={3}>
                        <ListItemIcon className="modify-icon" sx={{ width: "100%", display: "flex", justifyContent: { xs: "center", lg: "end" } }}>
                          <RouterLink
                            to={`/admin/menu/${product.ProductoId}`}
                            style={{ textDecoration: "none", margin: { xs: "auto", lg: "unset" } }}
                          >
                            <Button size="small" sx={{ margin: { xs: "8px 0", lg: "unset" } }}>
                              Ver detalle
                            </Button>
                          </RouterLink>
                        </ListItemIcon>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider orientation="horizontal" variant="middle" />
                </>
              ))}
            </List>
          </Collapse>
        </div>
      )
    );
  };

  const groupProductsByCategory = () => {
    const groupedProducts = allProducts.reduce((result, product) => {
      const categoryId = product.Categoria;
      if (!result[categoryId]) {
        result[categoryId] = [];
      }
      result[categoryId].push(product);
      return result;
    }, {});
    return groupedProducts;
  };

  return (
    <div>
      <SideBar />
      <Navbar />
      <Box sx={{ marginLeft: { xs: "0", md: "240px" }, width: { xs: "100vw", md: "calc(100% - 240px)" } }}>
        <Typography variant="h1" sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "clamp(1.5rem, 5vw, 2.5rem)", margin: { xs: "64px auto 0", md: "64px 0 0 64px" }, textAlign: { xs: "center", md: "unset" } }}>
          Menú
        </Typography>
        <Typography variant="h1" sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "clamp(1rem, 5vw, 2rem)", margin: "16px 0 48px", textAlign: "center" }}>
          Menú principal
        </Typography>
        <div className="lista">
          {renderProductsByCategory()}
        </div>
      </Box>
    </div>
  );
};

export default AllMenu;