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
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Dashboard from "../../dashboard/dashboard";
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
            onClick={() => toggleCategory(index)}
            startIcon={openCategories[index] ? <ExpandLess /> : <ExpandMore />}
          >
            {categoryId}
          </Button>
          <Collapse in={openCategories[index]} timeout="auto" unmountOnExit>
            <List>
              {products.map((product) => (
                <ListItem key={product.ProductoId}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <ListItemText
                        primary={product.Nombre}
                        secondary={
                          <React.Fragment>
                            <span>{product.Descripcion}</span>
                            <br />
                            <span>$ {product.Precio}</span>
                          </React.Fragment>
                        }
                      />
                    </Grid>
                    <Grid item>
                      <ListItemIcon className="modify-icon">
                        <RouterLink
                          to={`/admin/menu/${product.ProductoId}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button variant="contained" color="primary">
                            Ver detalle
                          </Button>
                        </RouterLink>
                      </ListItemIcon>
                    </Grid>
                  </Grid>
                </ListItem>
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
      <Dashboard />
      <Navbar />
      <div className="lista">{renderProductsByCategory()}</div>
    </div>
  );
};

export default AllMenu;