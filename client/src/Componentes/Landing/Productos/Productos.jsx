import React, { useEffect } from "react";
import s from "./Productos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductos } from "../../../Redux/Actions/action";
import Cartas from "../../Productos/Cartas/Cartas";
import { Link } from "react-router-dom";

function ProducLanding() {
  const dispatch = useDispatch();
  const los4Productos = useSelector((state) => state.productos);
  const primerosCuatroElementos = los4Productos.slice(0, 4);

  useEffect(() => {
    dispatch(getAllProductos());
  }, []);

  return (
    <div className="flex-center ml-20 mt-2 mb-2" >
      <div className="text-center">
        <span className="font-sans flex-center font-sans text-xl font-bold">Productos Destacados  </span>
      </div>
    <div className={s.fondo}>
      <div className={s.caja1}>
        {primerosCuatroElementos?.map((item, index) => (
          <div key={index}  className="mr-2">
          <Cartas item={item} />
          </div>
        ))}
      </div>
      <Link  className="place-self-end justify-items-end group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-purple-700 transition-colors hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-700" to="/Productos/page/1">
      <button className="font-sans transition-colors group-hover:text-white ">Ver más...</button>
      </Link>
    </div>
    </div>
  );
}

export default ProducLanding;
