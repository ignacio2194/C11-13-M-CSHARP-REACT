import { useNavigate } from "react-router-dom";
import NavbarTertiary from "../../components/navbarTertiary/navbarTertiary";
import PaginaEventos from "../../components/paginaEventos/paginaEventos";
import FooterMinimalista from "../../components/footerMinimalista/footerMinimalista"

const Eventos = () => {
  // const navigate = useNavigate();

  // const handleReserva = () => {
  //   // Lógica para dirigirnos a la página de reserva
  //   navigate("/reserva");
  // };


  return (
    <div>
      <NavbarTertiary/>
      <PaginaEventos/>
      <FooterMinimalista/>
    </div>
  );
}

export default Eventos;