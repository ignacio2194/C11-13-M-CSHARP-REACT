import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./views/home/home";
import Menu from "./components/menu/menu";
import Eventos from "./views/especialDay/especialDay";
import Sucursales from "./components/sucursales/sucursales";
import Login from "./components/Form/Form"
import CrearCuenta from "./components/Form/CrearCuenta";
import RecuperarPassword from "./components/Form/RecuperarPassword";
import Reservas from "./components/reservas/reservas";
import Details from "./views/details/details";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sucursales" element={<Sucursales />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route
          path="/recuperar-password"
          element={<RecuperarPassword />}
        />
        <Route path="/reservas" element={<Reservas />} />
        <Route
          path="/detalles-pedido"
          element={<Details />}
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;