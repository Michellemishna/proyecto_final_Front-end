import React, { useEffect, useRef, useState } from "react";
//import s from "./Favoritos.module.css";
import { getAllUsuarios } from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { baneoUsuarios } from "../../Redux/Actions/action";

function usuario() {
  const usuarios = useSelector((state) => state.allUsers);

  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const visibleRowCount = 6;

  useEffect(() => {
    dispatch(getAllUsuarios());
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const visibleUsuarios = usuarios.slice(
    0,
    Math.ceil(
      scrollPosition / (tableRef.current?.offsetHeight / visibleRowCount)
    )
  );

  const handleDeshabilitar = (email) => {
    const usuarioParaDeshabilitar = {
      email: email,
    };
    console.log(usuarioParaDeshabilitar);
    dispatch(baneoUsuarios(usuarioParaDeshabilitar));

    window.location.href = "/dashboardAdmin/usuarios";
  };

  return (
    <div className="absolute ml-1700 h-700 w-1200">
      <h1 className="text-xl">Lista de Usuarios</h1>
      <div className="flex flex-col mt-6 overflow-x-auto h-500">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-violeta-pf">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      <div className="flex items-center gap-x-3">
                        <input
                          type="checkbox"
                          className="text-white border-gray-300 rounded "
                        />
                        <span>Nombre</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      <span>Estado</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      <span>Usuario</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Telefonos
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                    >
                      Accion
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {/* #######################  MAPEADO DE LOS USUARIOS  ########################## */}

                {usuarios?.map((e) => (
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />

                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-10 h-10 rounded-full"
                              src={
                                e.image
                                  ? e.image
                                  : "https://media.istockphoto.com/id/1337144146/es/vector/vector-de-icono-de-perfil-de-avatar-predeterminado.jpg?s=170667a&w=0&k=20&c=omMpvYb687Nv5mgmMdFDSbZpwAzrpSAIGFi3cnoYPZc="
                              }
                              alt=""
                            />
                            <div>
                              <p className="text-sm font-normal  text-gray-500">
                                {e.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                          {e.user_banned === false ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                          )}
                          <h2 className="text-sm font-normal text-emerald-500">
                            {e.user_banned === false ? (
                              <div className="text-emerald-500">Habilitado</div>
                            ) : (
                              <div className="text-red-400">Deshabilitado</div>
                            )}
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {e.user}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {e.email}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p className="px-3 py-1 text-xs text-gray-500 rounded-full ">
                            {e.phone}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handleDeshabilitar(e.email)}
                            className="flex items-center gap-x-2"
                          >
                            <p className="px-3 py-1 text-xs text-white rounded-full dark:bg-gray-800 ">
                              {e.user_banned === false
                                ? "Deshabilitar"
                                : "Habilitar"}
                            </p>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gray-200 dark:bg-gray-800"
        style={{
          position: "fixed",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          height: "60px",
          width: "8px",
          borderRadius: "4px",
        }}
      ></div>
    </div>
  );
}

export default usuario;
