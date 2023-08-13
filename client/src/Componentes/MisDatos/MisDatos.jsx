import React, { useEffect } from "react";
import { datosDelUsuario } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
//import s from "./Favoritos.module.css";
import { Link } from "react-router-dom";

function misDatos() {
  const dispatch = useDispatch();
  const LosDatos = useSelector((state) => state.datosDelUsuario);

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);
  // console.log(LosDatos);
  return (
    <div className="absolute ml-1400 h-700 w-1000 flex items-center flex flex-col mt-10">
      <h1 className="font-sans rounded border bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 w-800 font-bold text-xl h-15 p-3 m-2 text-white border-2 shadow-lg hover:shadow-2xl transition delay-200 duration-300 ">
        Mis Datos
      </h1>
      {LosDatos?.user && (
        <div className="rounded border bg-gray-800 w-800 flex justify-evenly pt-8 pb-8 border-2 shadow-lg hover:shadow-2xl transition delay-200 duration-300">
          <div>
            <img
              className="rounded border bg-cover bg-center w-200 h-200"
              style={{
                backgroundImage:
                  'url("https://as2.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg")',
              }}
              src={LosDatos.user.imagen}
              alt="Imagen"
            />
            <div className="rounded bg-white flex justify-between p-3 mt-5 mt-5">
              <h4 className="font-bold font-sans text-lg text-gray-600">
                Nombre:
              </h4>{" "}
              {LosDatos.user.nombre}
            </div>
          </div>
          <div className="rounded bg-white w-500 flex flex-col justify-between p-5">
            <div className="mb-4 rounded-lg border flex justify-between p-2 bg-slate-50">
              <h4 className="font-bold font-sans text-lg text-gray-600">
                Email:
              </h4>
              {LosDatos.user.email}{" "}
            </div>
            <div className="mb-4 rounded-lg border flex justify-between p-2 bg-slate-50">
              <h4 className="font-bold font-sans text-lg text-gray-600">
                Telefono:
              </h4>
              {LosDatos.user.telefono}{" "}
            </div>
            {/* <div className="mb-4 rounded-lg border flex justify-between p-2 bg-slate-50">
              <h4 className="font-bold font-sans text-lg text-gray-600">Contraseña:</h4>
              {LosDatos.user.contraseña}{" "}
            </div> */}
            <div className="mb-4 rounded-lg border flex justify-between p-2 bg-slate-50">
              <h4 className="font-bold font-sans text-lg text-gray-600">
                Usuario:
              </h4>{" "}
              {LosDatos.user.usuario}{" "}
            </div>
            <div className="mb-4 rounded-lg border flex justify-between p-2 bg-slate-50">
              <h4 className="font-bold font-sans text-lg text-gray-600">
                Estado:
              </h4>{" "}
              {LosDatos.user.estado === false ? "Activo" : "Suspendido"}
            </div>
          </div>
        </div>
      )}
      {/* <Link to="/dashboardUsuario/editUser">
        <button className="mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">
          Editar
        </button>
      </Link> */}
    </div>
    // <div className="absolute ml-1700 h-700 w-1400 flex justify-center bg-red-400">
    //   <h1 className="bg-green-400">Mis Datos</h1>
    //   {LosDatos?.user && (
    //     <div className="bg-blue-400 w-900">
    //       <div>
    //         <img
    //           className="bg-cover bg-center w-40 h-40"
    //           style={{
    //             backgroundImage:
    //               'url("https://as2.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg")',
    //           }}
    //           src={LosDatos.user.imagen}
    //           alt="Imagen"
    //         />
    //       </div>
    //       <div>email:{LosDatos.user.email} </div>
    //       <div>contraseña:{LosDatos.user.contraseña} </div>
    //       <div>nombre: {LosDatos.user.nombre}</div>
    //       <div>usuario: {LosDatos.user.user}</div>
    //       <div>telefono: {LosDatos.user.telefono}</div>
    //       <div>
    //         estado:{" "}
    //         {LosDatos.user.estado === false ? "Habilidato" : "Deshabilitado"}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default misDatos;
