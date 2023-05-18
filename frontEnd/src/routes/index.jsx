import { createBrowserRouter } from "react-router-dom";
import CardMenu from "../components/cardMenu/cardMenu.jsx";
import Login from "../views/login/Login.jsx";
import App from "../App.js";
import Reservas from "../components/reservas/reservas.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reservas",
    element: <Reservas />,
  },
  {
    path: "/menu",
    element: <CardMenu />,
  },
]);