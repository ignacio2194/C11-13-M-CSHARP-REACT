import { Box, Divider, Stack, Typography } from "@mui/material";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

const NavbarSecondary = () => {
  const navigate = useNavigate();

  return (
    <Box component="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        sx={{ backgroundColor: "primary.main", color: "white", height: "68px" }}
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
      <Box sx={{ backgroundColor: "custom.lightBrown", width: "100%", height: "187px", display: "flex", alignItems: "center", justifyContent: "center", padding: "31px 0" }}>
        <img src={logo} alt="Logo Sabores De La Tierra" style={{ width: "246px", height: "auto", cursor: "pointer" }} onClick={() => navigate("/")} />
      </Box>
    </Box>
  )
}

export default NavbarSecondary