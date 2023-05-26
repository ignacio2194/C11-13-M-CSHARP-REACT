import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="226311912125-tpmbf5oplf7hbop4j78rvpj04tl7mjoe.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>

      <CssBaseline />
    </BrowserRouter>
  </React.StrictMode>
);
