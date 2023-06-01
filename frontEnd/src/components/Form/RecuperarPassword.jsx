import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FooterMinimalista from "../footerMinimalista/footerMinimalista";
import NavbarSecondary from "../navbarSecondary/NavbarSecondary";
import { ToastContainer, toast } from "react-toastify";

const RecuperarPassword = () => {
  const theme = createTheme();
  const [dataUser, setDataUser] = useState({});

  const showMeMessage = () => {
    toast.success(
      "¡Te enviamos los pasos para resetear tu cuenta a tu email!",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataUser.Email !== "") {
      showMeMessage();
    } else {
      toast.error(
        "Por favor ingresa un email para poder enviarte las instrucciones de reseteo de contraseña",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

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
              Recupera tu contraseña
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
                label="Ingresa tu email"
                name="Email"
                autoComplete="Nombre"
                autoFocus
                sx={{ backgroundColor: "#fff" }}
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#855D44" }}
                onClick={handleSubmit}
              >
                RESETEAR CONTRASEÑA
              </Button>
              <Grid container justifyContent="center">
                <Grid item xs={12} textAlign="center"></Grid>
                <Grid
                  item
                  xs={12}
                  textAlign="center"
                  sx={{ marginBottom: "10px" }}
                ></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <FooterMinimalista />
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

export default RecuperarPassword;
