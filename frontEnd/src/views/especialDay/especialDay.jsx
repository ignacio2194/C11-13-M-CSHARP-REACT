//ESTE VA A SER EL componente de los eventos
import { useNavigate } from "react-router-dom";
import Eventox from "../../components/eventos/eventos";

const Eventos = () => {
  // const navigate = useNavigate();

  // const handleReserva = () => {
  //   // Lógica para dirigirnos a la página de reserva
  //   navigate("/reserva");
  // };


  //tener en cuenta que vamos a estar haciendo un mapeo de los eventos que haya
  //ergo, tener en cuenta a la hora de hacer el css.
  //según el diseño deberían renderizar dos, en el caso de ser más
  //habría que hacer que se puedan mostrar el resto siguiendo el diseño.
  //este código será modificado

  return (
    <div>
        {/* <h1>EVENTOS</h1>
      <div onClick={handleReserva}>
        <h3>EVENTO UNO</h3>
      </div> 
      <div onClick={handleReserva}>
        <h3>EVENTO DOS</h3>
      </div> */}

      <Eventox/>
    </div>
  );
}

export default Eventos;