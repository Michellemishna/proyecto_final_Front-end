import React, { useState, useEffect } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import "./Filtros.css";
import {
  getCategories,
  getSearchAdnFilterProducts,
  cleanState,
  getAllProductos,
  setLoading,
} from "../../../Redux/Actions/action";

function Filtros() {
  const categories = useSelector((state) => state.categories);
  const [price, setPrice] = useState({ min: "", max: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // MANEJADOR CATEGORIES:
  const handlecategories = (event) => {
    const { value } = event.target;
    const categoryVal = value === "Todas" ? "" : value;
    dispatch(getSearchAdnFilterProducts({ category: categoryVal }));
  };

  // MANEJADOR ORDEN PRECIO MAYOR/MENOR
  const handlePriceSorts = (event) => {
    const { value } = event.target;
    const sortOrder = value === "Ninguno" ? "" : value;
    dispatch(
      getSearchAdnFilterProducts({ sort_by: "price", order: sortOrder })
    );
  };

  // MANEJADORES PRECIO MAYOR A Y MENOR A:
  const handleMinPriceChange = (event) => {
    const { value } = event.target;
    setPrice({ ...price, min: value });
    dispatch(getSearchAdnFilterProducts({ price_min: value }));
  };

  const handleMaxPriceChange = (event) => {
    const { value } = event.target;
    setPrice({ ...price, max: value });
    dispatch(getSearchAdnFilterProducts({ price_max: value }));
  };

  // MANEJADOR BOTÓN CLEAN:
  function handlerClean() {
    dispatch(cleanState());
    // Restablece los valores por defecto de los selects
    document.querySelectorAll("select").forEach((select) => {
      select.value = "-1";
    });
    //reset valores price
    setPrice({ min: "", max: "" });
    dispatch(setLoading());
    dispatch(getAllProductos());
  }

  // MANEJADOR BOTÓN APLICAR
  const handleAplicarClick = () => {
    dispatch(getSearchAdnFilterProducts({ aplicar: true }));
    navigate(`/productos/page/${1}`);
  };

  

  return (
    <div className="mr-16 space-y-3 bg-gray-800">
      <div className="mt-8 mr-10 ml-8 w-80 overflow-hidden rounded ">
        <div className="mt-4 mr-4 ml-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300 ">
          <label className="font-sans font-semibold text-sm text-gray-600">Filtrar por categorias:</label>
          <select
            className="transition group-open:-rotate-180 font-sans text-sm text-gray-600"
            onChange={handlecategories}
          >
            <option className="font-sans text-sm text-gray-600" value="Todas">Todas</option>
            {categories.map((e, index) => (
              <option key={index} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 mr-4 ml-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300">
          <label className="font-sans font-semibold text-sm text-gray-600">Ordenar precio por:</label>
          <select
          className="font-sans text-sm text-gray-600"
            onChange={handlePriceSorts}
          >
            <option className="font-sans text-sm text-gray-600" value="Ninguno">Ninguno</option>
            <option className="font-sans text-sm text-gray-600" value="asc">Menor</option>
            <option className="font-sans text-sm text-gray-600" value="desc">Mayor</option>
          </select>
        </div>

        <div className="mt-4 mr-4 ml-4 mb-4 flex cursor-pointer items-center justify-between gap-4 bg-white p-4 text-gray-900 transition rounded border border-gray-300">
          <label className="font-sans font-semibold text-sm text-gray-600">Filtrar por precio:</label>
          <input
            type="number"
            placeholder="min"
            value={price.min}
            onChange={handleMinPriceChange}
            className="h-8 w-full sm:text-sm font-sans text-sl text-gray-600"
          />
          <input
            type="number"
            placeholder="max"
            value={price.max}
            onChange={handleMaxPriceChange}
            className="h-8 w-full sm:text-sm font-sans text-sl text-gray-600"
          />
        </div>
      </div>

      <div className="mt-4 mr-4 ml-20 flex overflow-hidden">
        <button
          className="ml-6 mr-6 inline-block px-5 py-3 block rounded border text-gray-700 hover:bg-gray-500 focus:relative bg-teal-400 text-white font-bold"
          onClick={handlerClean}
        >
          Clean
        </button>
        <button
          className="inline-block border-e px-5 py-3 block rounded border text-gray-700 hover:bg-gray-500 focus:relative bg-blue-400 text-white font-bold"
          onClick={handleAplicarClick}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}

export default Filtros;
