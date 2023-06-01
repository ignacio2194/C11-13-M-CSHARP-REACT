import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./paginaEventos.module.css";
import imagen1 from "../../img/evento1.png"
import imagen2 from "../../img/evento2.png"
import imagen3 from "../../img/evento3.png"
import imagen4 from "../../img/evento4.png"
import imagen5 from "../../img/evento5.png"

const PaginaEventos = () => {

  return (
    <>       
    <h1 style={{ textAlign: "center", color: "black", marginTop: "20px", fontFamily: "Parisienne, cursive", fontSize: "100px", fontWeight: "normal"}}>
    Eventos
  </h1>
  <p style={{textAlign: "center", color: "black", fontSize: "30px"}}>Estos son nuestros eventos del mes</p>
    <Grid container spacing={2} padding="0px 100px 150px 100px">
      {/* Fila 1 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '15px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <img src={imagen1} alt="Imagen 1" />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
          <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Sumérgete en el seductor ritmo del tango interpretado por talentosos músicos y bailarines en vivo, mientras degustas exquisitos platos preparados por nuestro renombrado chef.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Domingo 20 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 21:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 2 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <img src={imagen2} alt="Imagen 2" />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            ¿Eres amante de la pizza? ¿Te encanta experimentar con diferentes ingredientes y sabores? ¡Entonces este taller es para ti! Únete a nosotros para vivir una experiencia divertida y deliciosa en nuestro Taller de Pizza.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Viernes 18 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 19:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 3 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}}>
          <img src={imagen3} alt="Imagen 3" />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Déjate llevar por el encanto y la magia del jazz en nuestro evento Trdes de Jazz. Sumérgete en un ambiente lleno de melodías suaves, ritmos vibrantes y la improvisación única que caracteriza a este género musical.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Viernes 25 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 20:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 4 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginTop: '25px'}} >
          <img src={imagen4} alt="Imagen 4" />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Celebra la cultura de México con nuestra "Fiesta Mexicana" con el folclore y la gastronomía tradicional. Disfruta de una amplia variedad de platillos auténticos preparados por nuestro chef.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Sábado 19 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 09:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>

      {/* Fila 5 */}
      <Grid item xs={12} container justifyContent="center" style={{borderTop: '1px solid black', borderBottom:'1px solid black', marginTop: '45px'}}>
        <Grid item xs={6} container justifyContent="center" style={{marginBottom: '50px', marginTop: '25px'}}>
          <img src={imagen5} alt="Imagen 5" />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-start" alignItems="flex-start" direction="column" style={{ paddingLeft: "100px", textAlign: "left", paddingTop: '80px' }}>
        <Typography variant="body1" style={{ marginBottom: '10px', fontSize: '1.2rem' }}>
            Prepárate para una noche llena de música irresistble, coreografías emocionantes y un ambiente vibrante que te hará mover el cuerpo sin parar.
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Fecha: Domingo 27 de agosto
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Hora: 09:00
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px', fontWeight: 'bold', paddingTop:'30px' }}>
            Reservas: +54 11 1010-2020
          </Typography>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default PaginaEventos;
