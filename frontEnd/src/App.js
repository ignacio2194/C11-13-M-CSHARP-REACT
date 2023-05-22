import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/home/home";
import Login from "./components/Form/Form"
import CrearCuenta from "./components/Form/CrearCuenta";
import RecuperarPassword from "./components/Form/RecuperarPassword";
import Details from "./views/details/details";
import Reservas from "./views/reservas/Reservas";
import MuiThemeProvider from "./theme";
import Dashboard from "./views/admin/dashboard/dashboard";
import allMenu from "./views/admin/viewMenu/allMenu/allMenu";
import allUsers from "./views/admin/viewUser/allUser/allUser"
import detailUser from "./views/admin/viewUser/detailUser/detailUser"
import ModifyMenuForm from "./views/admin/viewEvents/modifyMenuForm/modifyMenuForm";
import detailMenu from "./views/admin/viewMenu/detailMenu/detailMenu";
import viewAllEvents from "./views/admin/viewEvents/viewAllEvents/viewAllEvents";
import EventForm from "./views/admin/eventForm/eventForm";
import CategoryForm from "./views/admin/categoyForm/categoryForm";
import MenuForm from "./views/admin/menuForm/menuForm";

function App() {
  return (
    <MuiThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/detalles-pedido" element={<Details />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/allMenu" element={<allMenu />} />
        <Route path="/admin/allUsers" element={<allUsers />} />
        <Route path="/admin/detailUser" element={<detailUser />} />
        <Route path="/admin/modifyMenu" element={<ModifyMenuForm />} />
        <Route path="/admin/menu/:id" element={<detailMenu />} />
        <Route path="/allEvents" element={<viewAllEvents />} />
        <Route path="/eventForm" element={<EventForm />} />
        <Route path="/createCategory" element={<CategoryForm />} />
        <Route path="/createMenu" element={<menuForm />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </MuiThemeProvider>
  );
}

export default App;