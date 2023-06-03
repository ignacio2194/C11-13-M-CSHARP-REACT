import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventoCard from '../eventocard/eventocard';
import ev1 from '../../img/4. Eventos/evento1.png';
import ev2 from '../../img/4. Eventos/evento2.png';
import ev3 from '../../img/4. Eventos/evento3.png';
import ev4 from '../../img/4. Eventos/evento4.png';
import ev5 from '../../img/4. Eventos/evento5.png';
import { Box } from '@mui/material';

const evimg = [
  {


    img: ev2,
    desc: 'Taller de Pizzas',
  },
  {
    img: ev3,
    desc: 'Tarde de Jazz',
  },
  {
    img: ev4,
    desc: 'Fiesta Mexicana', 
  },
  {
    img: ev5,
    desc: 'Noches de Baile',
  },
  {
    img: ev1,
    desc: 'Noche de Tango',
  }
];

export default function CarouselEventos() {
  const renderCarouselItem = (index) => {
    const currentItemIndex = index % evimg.length;

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingLeft: '1%', paddingRight: '1%', maxWidth: "1440px" }} >
        <div style={{ margin: '0 10px', width: '100%', height: 'auto' }}>
          <EventoCard img={evimg[currentItemIndex].img} txt={evimg[currentItemIndex].desc} />
        </div>
      </Box>
    );
  };

  return (
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          centerMode={true}
          centerSlidePercentage={30.33}
        >
          {evimg.map((item, index) => (
            <div key={index}>{renderCarouselItem(index)}</div>
          ))}
        </Carousel>
  );
}


