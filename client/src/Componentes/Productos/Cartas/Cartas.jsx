import React from "react";
// import s from "./Cartas.module.css";

function Cartas({ item }) {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })
  return (
    <div className="mt-4 h-80 w-60 border-2 shadow-lg hover:shadow-2xl transition delay-200 duration-300 " >
      <div className="h-48 w-62 flex items-center justify-center">
        <img src={item.image} alt="" className="h-full object-cover max-w-[115%] transition duration-500 group-hover:scale-105 hover:scale-110 sm:h-[56%]" />
      </div>
      <div  className="relative bg-white pt-3">
      <div className="font-sans mt-4 ml-3 mr-3 text-sm text-start text-gray-700 w-[340] h-[26px] truncate">{item.title}</div>
      </div>
      <div className="mt-2">
        <h3 className="font-sans text-lg font-extralight text-black-500 text-center group-hover:underline group-hover:underline-offset-4" >{formatter.format(item.price)}</h3>
      </div>
    </div>
  );
}

export default Cartas;
