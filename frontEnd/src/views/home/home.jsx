import Eventos from "../especialDay/especialDay"
import Hero from "../../components/hero/hero"
import Menu from "../../components/menu/menu";
import Sucursales from "../../components/sucursales/sucursales";
import Resenias from "../../components/resenias/resenias";
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import { useRef } from "react"
import { Box } from "@mui/material";

const Home = () => {
  const menu = useRef(null);
  const events = useRef(null);
  const sucursales = useRef(null);

  return (
    <>
      <Navbar menu={menu} events={events} sucursales={sucursales} />
      <Hero />
      <Box ref={menu} >
        <Menu />
      </Box>
      <Box ref={events}>
        <Eventos />
      </Box>
      <Box ref={sucursales}>
        <Sucursales />
      </Box>
      <Resenias />
      <Footer menu={menu} events={events} sucursales={sucursales} />
    </>
  )
}

export default Home;