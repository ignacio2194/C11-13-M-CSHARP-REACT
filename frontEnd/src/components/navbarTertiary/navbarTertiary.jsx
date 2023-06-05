import { AppBar, Toolbar, Typography, Stack,Divider } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { Box } from "@mui/system";
import logo from "../../assets/images/logo.png";
import BadgeAvatars from "../avatar/Avatar";
import { Link } from "react-router-dom";
  
const NavbarTertiary = () => {
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
              <Typography>+54 11 1010-2020</Typography>
            </Box>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem color={"white"} />}
              spacing={2}
            >
              <Typography sx={{ fontWeight: "bold" }}>ES</Typography>
              <Typography>EN</Typography>
            </Stack>
          </Stack>
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
          </Box>
        </AppBar>
      </nav>
    );
  }
  
  export default NavbarTertiary