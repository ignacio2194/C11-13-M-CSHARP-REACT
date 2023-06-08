import Hero from "../../components/hero/hero"
import Menu from "../../components/menu/menu";
import Sucursales from "../../components/sucursales/sucursales";
import Resenias from "../../components/resenias/resenias";
import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import SeccionEventos from "../../components/seccionEventos/seccionEventos"
import { useRef } from "react"
import { Box } from "@mui/material";

const Home = () => {
  const menu = useRef(null);
  const seccionEventos = useRef(null);
  const sucursales = useRef(null);

  return (
    <>
      <Navbar menu={menu} seccionEventos={seccionEventos} sucursales={sucursales} />
      <Hero />
      <div ref={menu} id='menu' >
        <Menu />
      </div>
      <div ref={seccionEventos} id='seccionEventos'>
        <SeccionEventos />
      </div>
      <div ref={sucursales} id='sucursales'>
        <Sucursales />
      </div>
      <Resenias />
      <Footer menu={menu} seccionEventos={seccionEventos} sucursales={sucursales} />
    </>
  )
}

export default Home;
