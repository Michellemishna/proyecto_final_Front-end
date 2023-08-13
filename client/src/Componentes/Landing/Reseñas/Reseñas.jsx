import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Reseñas.module.css";

const Reseñas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cambiar a la siguiente diapositiva
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 1000); // Cambiar imágenes cada 3 segundos (3000 milisegundos)

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  const totalSlides = 3;

  return (
    <div className={styles.fondo}>
      <div className={styles.carouselContainer}>
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          onChange={(index) => setCurrentSlide(index)} // Cambiar imágenes cada 3 segundos (3000 milisegundos)
          // O ajusta el tiempo que desees en milisegundos
        >
          <div>
            <div className={styles.reseña1}>
              <div className={styles.reseña2}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit ."
              </div>
              <div className={styles.reseña3}>Nombre comprador/a</div>
            </div>
          </div>
          <div>
            <div className={styles.reseña1}>
              <div className={styles.reseña2}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit ."
              </div>
              <div className={styles.reseña3}>Nombre comprador/a</div>
            </div>
          </div>

          {/* Agrega más diapositivas según tus necesidades */}
        </Carousel>
      </div>
    </div>
  );
};

export default Reseñas;
