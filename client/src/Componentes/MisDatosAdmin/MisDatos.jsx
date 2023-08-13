import React, { useEffect } from "react";
import { datosDelUsuario } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
//import s from "./Favoritos.module.css";
//import { Link } from "react-router-dom";

function misDatos() {
  const dispatch = useDispatch();
  const LosDatos = useSelector((state) => state.datosDelUsuario);

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);
  console.log(LosDatos);

  // const user = localStorage.getItem("user");
  // const usuario = JSON.parse(user);
  // console.log(usuario);

  return (
    <div className="absolute ml-1700 h-700 w-1400 flex items-center flex flex-col mt-20">
      ADMIN
      <h1 className="bg-violeta-pf w-960 font-bold text-xl h-15 p-5 m-5 text-white ">
        Mis Datos
      </h1>
      {LosDatos.user && (
        <div className="bg-gray-200 w-960 flex justify-evenly pt-8 pb-8">
          <div>
            <img
              className="bg-cover bg-center w-250 h-250"
              style={{
                backgroundImage:
                  'url("https://as2.ftcdn.net/jpg/03/49/49/79/360_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg")',
              }}
              src={LosDatos.user.imagen}
              alt="Imagen"
            />
            <div className="bg-white  flex justify-between p-5 mt-5 mt-5">
              <h4 className="font-bold text-lg text-rojo-pf shadow-sm">
                Nombre:
              </h4>{" "}
              {LosDatos.user.name}
            </div>
          </div>
          <div className="bg-white w-600 flex flex-col justify-between p-5">
            <div className="flex justify-between p-4  ">
              <h4 className="font-bold  text-lg text-rojo-pf">Email:</h4>
              {LosDatos.user.email}{" "}
            </div>
            <div className="flex justify-between p-4 ">
              <h4 className="font-bold  text-lg text-rojo-pf">Telefono:</h4>
              {LosDatos.user.telefono}{" "}
            </div>
            {/* <div className="flex justify-between p-4 ">
              <h4 className="font-bold  text-lg text-rojo-pf">Direccion:</h4>
              {LosDatos.user.default_shipping_address}{" "}
            </div> */}
            <div className="flex justify-between p-4 ">
              <h4 className="font-bold  text-lg text-rojo-pf">usuario:</h4>{" "}
              {LosDatos.user.usuario}{" "}
            </div>
            <div className="flex justify-between p-4">
              <h4 className="font-bold  text-lg text-rojo-pf">Estado:</h4>{" "}
              {LosDatos.user.user_banned === false
                ? "Habilidato"
                : "Deshabilitado"}
            </div>
          </div>
        </div>
      )}
      {/* <Link to="/dashboardAdmin/editAdmin">
        <button className="bg-rojo-pf w-40 font-bold flex justify-center text-xl h-15 p-5 m-5 text-white ">
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
