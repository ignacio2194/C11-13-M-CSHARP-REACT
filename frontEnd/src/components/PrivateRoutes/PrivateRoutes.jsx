import React from "react";
import { Route, useNavigate } from "react-router-dom";
const PrivateRoutes = ({ component: Component, role, ...rest }) => {
  const navigate = useNavigate(); // Hook useNavigate para realizar la redirección

  // Aquí puedes realizar la verificación del rol almacenado en el localStorage o en el estado de tu aplicación
  const isAuthenticated = role === "administrador"; // Ejemplo: el rol del administrador es 'administrador'

  if (isAuthenticated) {
    return <Route {...rest} element={<Component />} />;
  } else {
   alert('acceso denegado'); // Redirige a una página de acceso denegado si no se cumple la condición
    return null;
  }
};

export default PrivateRoutes;
