import React from "react";
import s from "./Home.module.css";
import Filtros from "../../Componentes/Productos/Filtros/Filtros";
import ContenedorCartas from "../../Componentes/Productos/ContenedorCartas/ContenedorCartas";



function Home() {
  return (
    <div>
      <div className={s.fondo}>
        <Filtros  />
        <ContenedorCartas />
      </div>
    </div>
  );
}

export default Home;
