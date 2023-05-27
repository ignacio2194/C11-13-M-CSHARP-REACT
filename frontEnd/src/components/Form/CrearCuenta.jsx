import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import "../Form/Form.css";
import jwt_decode from "jwt-decode";
import FooterSecondary from "../footerSecondary/FooterSecondary";
import NavbarSecondary from "../navbarSecondary/NavbarSecondary";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ValidatePass from "../../utils/ValidatePass";
import confirmPass from "../../utils/confirmPass";
const CrearCuenta = () => {
  const theme = createTheme();
  const [UserData, setUserData] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const [userDataGoogle, setUserDataGoogle] = useState({
    Nombre: "",
    email: "",
  });

  const [token, setToken] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ConfirmpasswordError, setConfirmpasswordError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validar la contraseña utilizando la función de validación
    if (!ValidatePass.isValidSync(UserData.Password)) {
      setPasswordError("La contraseña no es valida, por favor agregue mayus, numeros y un caracter especial");
      return;
    }
 
    try {
      const api = "https://sdlt2.azurewebsites.net/api/Account/Register";
      const data = await axios.post(api, {
        Email: `${UserData.Email}`,
        Password: `${UserData.Password}`,
        ConfirmPassword: `${UserData.ConfirmPassword}`,
      });
      
      await confirmPass.validate({
        password: UserData.Password,
        confirmPassword: UserData.ConfirmPassword
      });
 
      if (data.status === 200) {
        toast.success("¡Su cuenta se creo correctamente! ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Error interno, por favor intente más tarde.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  
  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode(token);
        const { name, email } = decoded;
        setUserDataGoogle({
          Nombre: name,
          email: email,
        });
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, [token]);

  return (
    <>
      <NavbarSecondary />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFD7BD",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                fontFamily: "Balsamiq Sans, cursive",
                fontWeight: "700",
              }}
            >
              Crear cuenta
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                marginTop: "10px",
                fontFamily: "Open Sans",
                fontWeight: 400,
                fontSize: "25px",
                lineHeight: "40px",
              }}
            >
              Para crear tu cuenta ingresa los siguientes datos
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => handleSubmit(e)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Nombre"
                label="Nombre"
                name="Nombre"
                autoComplete="Nombre"
                autoFocus
                sx={{ backgroundColor: "#fff" }}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: "#fff" }}
                onChange={(e) => {
                  setUserData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }));
        
                }}
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="ConfirmPassword"
                label=" Confirma la contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ backgroundColor: "#fff" }}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
                error={Boolean(passwordError)}
                helperText={passwordError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Email"
                label="Escribe tu correo electronico"
                type="email"
                id="email"
                autoComplete="current-password"
                sx={{ backgroundColor: "#fff", border: 0 }}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Email"
                label="Confirma tu correo electronico"
                type="email"
                id="email"
                autoComplete="current-password"
                sx={{ backgroundColor: "#fff" }}
                onChange={(e) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#855D44" }}
               
              >
                Quiero crear mi cuenta
              </Button>
              <Grid container justifyContent="center">
                <Grid item xs={12} textAlign="center">
                  <Typography
                    variant="body2"
                    sx={{ display: "inline-block", marginRight: "10px" }}
                  >
                    ¿No tienes cuenta?
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  textAlign="center"
                  sx={{ marginBottom: "10px" }}
                ></Grid>
              </Grid>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box flex={1}>
                  <hr />
                </Box>
                <Typography variant="body1" align="center" sx={{ px: 1 }}>
                  o crea tu cuenta con
                </Typography>
                <Box flex={1}>
                  <hr />
                </Box>
              </Box>
            </Box>
            {/* botonsito de google */}
            <Box sx={{ marginTop: 3 }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  setToken(credentialResponse.credential);
                }}
              />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <FooterSecondary />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default CrearCuenta;
