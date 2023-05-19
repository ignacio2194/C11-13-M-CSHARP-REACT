import Eventos from "../especialDay/especialDay"
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/navbar"
import Hero from "../../components/hero/hero"
import { useRef } from "react";
import { Box } from "@mui/material";

const Home = () => {
  const menu = useRef(null);
  const events = useRef(null);
  const sucursales = useRef(null);

  return (
    <div>
      <Navbar menu={menu} events={events} sucursales={sucursales} />
      <Hero />
      <Box ref={menu} id="menu" sx={{ minHeight: "100vh", width: "100vw" }}>
        MENÚ
      </Box>
      <Box ref={events} id="events" sx={{ minHeight: "100vh", width: "100vw" }}>
        <Eventos />
      </Box>
      <Box ref={sucursales} id="sucursales" sx={{ minHeight: "100vh", width: "100vw" }}>
        SUCURSALES
      </Box>
      <h3>RESEÑAS</h3>
      <Footer />
    </div>
  )
}
export default Home