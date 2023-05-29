import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import EventoCard from '../eventocard/eventocard';

import hojas from '../../img/4. Eventos/hojas.svg'
import ev1 from '../../img/4. Eventos/evento1.png';
import ev2 from '../../img/4. Eventos/evento2.png';
import ev3 from '../../img/4. Eventos/evento3.png';
import ev4 from '../../img/4. Eventos/evento4.png';

const evimg = [
  {
    img: ev1,
    desc: 'Noche de Tango',
  },
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
];

export default function Eventox() {
  const renderCarouselItem = (index) => {
    const currentItemIndex = index % evimg.length;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '1%', paddingRight: '1%'}}>
        <div style={{ margin: '0 10px', width: '100%', height: 'auto' }}>
          <EventoCard img={evimg[currentItemIndex].img} txt={evimg[currentItemIndex].desc} />
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#E5B89B', minHeight: '100vh', display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
      <div style={{ backgroundImage: `url(${hojas})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '2rem' }}>
        <label style={{
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Parisienne',
          fontSize: '6vw',
          fontWeight: 400,
          lineHeight: '1.2',
          letterSpacing: '0',
          textAlign: 'center',
          paddingBottom: '10vw'
        }}>Eventos</label>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          swipeable={true}
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          centerMode={true}
          centerSlidePercentage={50.33}
        >
          {evimg.map((item, index) => (
            <div key={index}>{renderCarouselItem(index)}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
