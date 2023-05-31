  

import React from 'react';
import  { useEffect, useState } from "react"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailMenu = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://sdlt2.azurewebsites.net/api/Productos/GetProducto?id=${id}`);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.Nombre}</h2>
      <p>Descripción: {product.Descripcion}</p>
      <p>$ {product.Precio}</p>
     
    </div>
  );
};


export default DetailMenu;