import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import validationSchema from "../../utils/validationSchema ";
import NavbarSecondary from "../navbarSecondary/NavbarSecondary";
import FooterMinimalista from "../footerMinimalista/footerMinimalista";

const CrearCuenta = () => {
  const theme = createTheme();
  const [UserData, setUserData] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
    ConfirmEmail: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

const AccountSucces=(data)=>{
  if (data.status === 200) {
    toast.success("¡Tu cuenta se ha creado correctamente. Serás redirigido para iniciar sesión con tu nueva cuenta.! ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setUserData({
      Email: "",
      Password: "",
      ConfirmPassword: "",
      ConfirmEmail: "",
    });
    setTimeout(()=>{
      navigate("/login")
    },7000)

   
  }
}
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(UserData, { abortEarly: false });
      let confirmEmailErrors = [];
      try {
        await validationSchema.validateAt("ConfirmEmail", UserData);
      } catch (error) {
        confirmEmailErrors = error.errors;
      }

      if (confirmEmailErrors.length > 0) {
        setPasswordError(confirmEmailErrors[0]);
        return;
      }

      const api = "https://sdlt2.azurewebsites.net/api/Account/Register";
      const data = await axios.post(api, {
        Email: UserData.Email,
        Password: UserData.Password,
        ConfirmPassword: UserData.ConfirmPassword,
      });

      AccountSucces(data)
    } catch (error) {
      const errorMessage = error.errors[0];
      setPasswordError(errorMessage);
    }
  };

  // const handleGoogleLoginSuccess = (credentialResponse) => {
  //   const { email } = credentialResponse.profileObj;

  //   setUserData({
  //     Email: email,
  //     Password: 'MeLoguieConGoogle123456!',
  //     ConfirmPassword: 'MeLoguieConGoogle123456!',
  //     ConfirmEmail: email,
  //   });

  //   toast.success("¡Su cuenta se creó correctamente!", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  //   navigate("/");
  // };
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
                fontFamily: 'Open Sans',
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
                value={UserData.Nombre}
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
                value={UserData.Password}
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
                value={UserData.ConfirmPassword}
                label=" Confirma la contraseña"
                type="password"
                id="ConfirmPassword"
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
                value={UserData.Email}
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
                name="ConfirmEmail"
                value={UserData.ConfirmEmail}
                label="Confirma tu correo electronico"
                type="email"
                id="ConfirmEmail"
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
            {/* <Box sx={{ marginTop: 3 }}>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  setToken(credentialResponse.credential);
                }}
              />
            </Box> */}
          </Box>
        </Container>
      </ThemeProvider>
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
      <FooterMinimalista />
    </>
  );
};

export default CrearCuenta;
