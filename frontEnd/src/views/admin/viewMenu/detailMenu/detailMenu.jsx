import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import NavBar from "../../dashboard/navBar";
import SideBar from "../../dashboard/sideBar";

const DetailMenu = () => {
  const { ProductoId } = useParams();
  console.log("ProductoId recibido:", ProductoId);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://sdlt2.azurewebsites.net/api/Productos/GetProducto?id=${ProductoId}`
        );
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [ProductoId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <SideBar />
      <Container maxWidth="md" style={{ marginTop: "2rem", textAlign: "center" }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {product.Nombre}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Descripción: {product.Descripcion}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          $ {product.Precio}
        </Typography>
        <Button
          component={Link}
          to={`/admin/modifyMenu/${ProductoId}`}
          variant="contained"
          color="primary"
          style={{ marginTop: "1rem" }}
        >
          Modificar
        </Button>
      </Container>
    </div>
  );
};

export default DetailMenu;