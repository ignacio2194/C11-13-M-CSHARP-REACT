import React,{useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../footer/footer";
const RecuperarPassword = () => {
  const theme = createTheme();
  return (
 <>
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center',
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

        </Typography>
        <Box
          component="form"
          // onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="Nombre"
            label="Ingresa tu email"
            name="Nombre"
            autoComplete="Nombre"
            autoFocus 
            sx={{backgroundColor:'#fff'}}
           ></TextField>
        
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#855D44" }}
          >
   RESETEAR CONTRASEÑA
          </Button>
          <Grid container justifyContent="center">
            <Grid item xs={12} textAlign="center">
            
              
            </Grid>
            <Grid
              item
              xs={12}
              textAlign="center"
              sx={{ marginBottom: "10px" }}
            >
            </Grid>
          </Grid>
          
        </Box>
    
      </Box>
    </Container>
    <Footer />
  </ThemeProvider>
 </>
  );
};

export default RecuperarPassword;