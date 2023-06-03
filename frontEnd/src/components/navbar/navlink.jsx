import { styled } from '@mui/material';
import { Link as LinkScroll } from "react-scroll";

export const Link = styled(LinkScroll)(({ theme }) => ({
  color: theme.palette.primary,
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0.5rem 0",
  height: "100%",
  cursor: "pointer",
  fontSize: "18px",

  // "&.active": {
  //   textShadow: "0 0 20px #FBE19D, 0 0 15px #FBE19D",
  //   borderBottom: "3px solid #FBE19D",
  // },

  "&:hover": {
    // color: "#FBE19D",
    fontWeight: "700",
    transition: "all 0.3s ease",
  }
}));