import SideBar from "./sideBar"
import Navbar from "./navBar"
import Cards from "./cards";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

const data = [
  { id: 1, title: "Sucursales Activas", info: "1/2" },
  { id: 2, title: "Total Reservaciones", info: "8/20" },
  { id: 3, title: "Deliveries Activos", info: "0" },
  { id: 4, title: "Menús Activos", info: "0" }
];

const Dashboard = () => {
  return (
    <>
      <SideBar />
      <Navbar />
      <Box sx={{ width: { xs: "100%", md: 'calc(100vw - 240px)' }, marginLeft: { xs: "0", md: "240px" }, padding: { xs: "16px", md: "64px" } }}>
        <Typography sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "clamp(1rem, 5vw, 2.5rem)", marginLeft: { xs: "0", md: "32px" }, textAlign: { xs: "center", md: "unset" } }}>Dashboard</Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          divider={<Divider orientation="vertical" variant="middle" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
          sx={{ margin: "36px auto 52px", padding: "32px", border: "4px solid #472C1B", borderRadius: "26px", backgroundColor: "#FFEBDE", justifyContent: { md: "center" } }}
        >
          {
            data.map(item => (
              <Box sx={{ textAlign: "center" }} key={item.id}>
                <Typography sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "clamp(1rem, 2vw, 2rem)" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontFamily: "open sans", fontWeight: "700", fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}>
                  {item.info}
                </Typography>
              </Box>
            ))
          }
        </Stack>
        <Divider sx={{ height: "5px" }} />
        <Cards />
      </Box >
    </>
  )

}

export default Dashboard;