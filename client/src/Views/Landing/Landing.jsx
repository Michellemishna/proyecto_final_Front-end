import React from "react";
import Productos from "../../Componentes/Landing/Productos/Productos.jsx";
import Baner from "../../Componentes/Landing/Baner/Baner.jsx";
//import Categorias from "../../Componentes/Landing/Categorias/Categorias";
import Reseñas from "../../Componentes/Landing/Reseñas/Reseñas";
import Info from "../../Componentes/Landing/Info/Info";
import Carrusel from "../../Componentes/Landing/Carrusel/Carrusel";

function Landing() {
  return (
    <div>
      <Carrusel />
      <Productos />
      <Baner />
      <Reseñas />
      <Info />
    </div>
  );
}

export default Landing;
