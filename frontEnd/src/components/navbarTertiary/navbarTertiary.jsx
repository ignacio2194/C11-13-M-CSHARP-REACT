import { AppBar, Toolbar, Typography, Stack, Divider, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box } from "@mui/system";
import logo from "../../assets/images/logo.png";
<<<<<<< HEAD
import BadgeAvatars from "../avatar/Avatar";
import { Link } from "react-router-dom";
  
=======
import { NavLink, useNavigate } from "react-router-dom";
import AccountMenu from "../navbar/menu";
import { useState } from "react";

>>>>>>> 41933e1c3e7feeaff180c8851c5d84b68958b314
const NavbarTertiary = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [rol, setRol] = useState(sessionStorage.getItem("rol"));

  const closeSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("rol");
    setToken(null);
    setRol(null);
  };

  const navigate = useNavigate();

  return (
    <nav style={{ position: "sticky", top: "0", right: "0", zIndex: "9", width: "100%" }}>
      <AppBar position="static" >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "68px", padding: "0 28px" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px"
            }}
          >
            <LocalPhoneOutlinedIcon />
            <Typography>+52 11 1010-2020</Typography>
          </Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem color={"white"} />}
            spacing={2}
          >
            <Typography sx={{ fontWeight: "bold" }}>ES</Typography>
            <Typography>EN</Typography>
          </Stack>
<<<<<<< HEAD
          <Box sx={{ backgroundColor: "835C44", display: "flex", justifyContent: "space-between", height: "133px" }}>
         <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // width: "155px",
                marginLeft: "28px",
                width: { xs: "100px", sm: "175px" }
              }}
            >
            <Link to='/'><img src={logo} alt="Logo Sabores De La Tierra" style={{ width: "100%" }} /></Link>
            </Box>
            <Toolbar>
             <BadgeAvatars/>
            </Toolbar>
=======
        </Stack>
        <Box sx={{ backgroundColor: "#835C44", display: "flex", justifyContent: "space-between", height: "133px", padding: "0 28px" }}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { lg: "200px", sm: "175px", xs: "110px" },
            height: "auto",
            cursor: "pointer"
          }}>
            <img src={logo} alt="Logo" style={{ width: "100%", height: "auto" }} onClick={() => navigate("/")} />
>>>>>>> 41933e1c3e7feeaff180c8851c5d84b68958b314
          </Box>
          <Toolbar>
            {token ? (
              <Box>
                <Box>
                  {token ? (
                    <AccountMenu closeSession={closeSession} />
                  ) : (
                    <NavLink
                      to="/login"
                    >
                      <Button variant="yellow" size="small">Iniciar Sesión</Button>
                    </NavLink>
                  )}
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <NavLink
                  to="/login"
                >
                  <Button variant="yellow" size="small">Iniciar Sesión</Button>
                </NavLink>
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </nav>
  );
}

export default NavbarTertiary