import Eventos from "../especialDay/especialDay"
import Hero from "../../components/hero/hero"
import Menu from "../../components/menu/menu";
import Sucursales from "../../components/sucursales/sucursales";
import Resenias from "../../components/resenias/resenias";

const Home = () => {
  return (
    <>
      <Hero />
      <Menu />
      <Eventos />
      <Sucursales />
      <Resenias />
    </>
  )
}

export default Home;