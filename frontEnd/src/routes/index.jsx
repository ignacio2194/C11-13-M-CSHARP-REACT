import { createBrowserRouter } from "react-router-dom";
import CardMenu from "../components/cardMenu/cardMenu.jsx";
import Login from "../views/login/Login.jsx";
import App from "../App.js";

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
    path: "/menu",
    element: <CardMenu />,
  },
]);