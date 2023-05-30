import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import evento1 from "../../img/evento1.png";
import evento2 from "../../img/evento2.png";
import evento3 from "../../img/evento3.png";
import evento4 from "../../img/evento4.png";
import evento5 from "../../img/evento5.png";
import styles from './carousel.module.css';

const CarouselEventos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [evento1, evento2, evento3, evento4, evento5];

  const handleOnSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        className={styles.carousel}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={100}
        showStatus={false}
        selectedItem={currentIndex}
        onChange={handleOnSelect}
        showIndicators={false}
      >
        {images.map((_, index) => (
          <div key={index} className={styles.page}>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={images[(currentIndex + index) % images.length]} alt={`Foto ${index + 1}`} />
                <button className={styles.button}>Detalle del evento</button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={images[(currentIndex + index + 1) % images.length]} alt={`Foto ${index + 2}`} />
                <button className={styles.button}>Detalle del evento</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselEventos;
