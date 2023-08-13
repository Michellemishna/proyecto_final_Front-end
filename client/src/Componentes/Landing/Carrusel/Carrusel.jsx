// import React, { useState, useEffect } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./carrusel.module.css";

// const Carrusel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Cambiar a la siguiente diapositiva
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//     }, 1000); // Cambiar imágenes cada 3 segundos (3000 milisegundos)

//     // Limpiar el intervalo cuando el componente se desmonta
//     return () => clearInterval(intervalId);
//   }, []);

//   const totalSlides = 3;

//   const imagen1 =
//     "https://img.global.news.samsung.com/ar/wp-content/uploads/2022/06/4693_VD_DIGITAL_Banner-DDP_TV-Monitores-1000x383.png";
//   const imagen2 =
//     "https://img.global.news.samsung.com/ar/wp-content/uploads/2022/10/BANNER-Gen%C3%A9rico_1280x490px.jpg";
//   const imagen3 =
//     "https://img.pccomponentes.com/pcblog/2937/275707319-10160277142034345-651651715846927330-n-1.png";

//   return (
//     <div className={styles.fondo}>
//       <div className={styles.carouselContainer}>
//         <Carousel
//           showArrows={true}
//           showStatus={false}
//           showIndicators={true}
//           showThumbs={false}
//           infiniteLoop={true}
//           onChange={(index) => setCurrentSlide(index)} // Cambiar imágenes cada 3 segundos (3000 milisegundos)
//           // O ajusta el tiempo que desees en milisegundos
//         >
//           <div>
//             <img src={imagen1} alt="Imagen 1" />
//           </div>
//           <div>
//             <img src={imagen2} alt="Imagen 2" />
//           </div>
//           <div>
//             <img src={imagen3} alt="Imagen 3" />
//           </div>
//           {/* Agrega más diapositivas según tus necesidades */}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Carrusel;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { generateTechProductSlides } from "./slides";

const Carrusel = () => {
  const slides = generateTechProductSlides(5);

  return (
    <div className="bg-white p-6">
      {" "}
      {/* Aplicar un fondo gris oscuro y padding */}
      <Carousel
        className="rounded-md overflow-hidden" // Estilo de contenedor utilizando clases de Tailwind
        showThumbs={false}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-80" // Estilo de diapositiva utilizando clases de Tailwind
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="object-contain h-full w-full rounded-md" // Estilo de imagen utilizando clases de Tailwind
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Carrusel;
