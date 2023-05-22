import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/home/home";
import Login from "./components/Form/Form"
import CrearCuenta from "./components/Form/CrearCuenta";
import RecuperarPassword from "./components/Form/RecuperarPassword";
import Reservas from "./components/reservas/reservas";
import Details from "./views/details/details";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/detalles-pedido" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;