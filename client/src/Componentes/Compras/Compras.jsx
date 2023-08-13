import React, { useEffect, useState } from "react";
import {
  getOrderProducts,
  datosDelUsuario,
  deleteOrder,
} from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import swal from "sweetalert2";

function Compras() {
  const dispatch = useDispatch();
  const LosDatos = useSelector((state) => state.datosDelUsuario);
  const ordersProducts = useSelector((state) => state.orderProduct);
  const [productVisibility, setProductVisibility] = useState({});
  const [showDetailHeader, setShowDetailHeader] = useState(false);

  useEffect(() => {
    dispatch(datosDelUsuario()).catch((error) => {
      console.error("Error al obtener los datos del usuario:", error);
    });
  }, [dispatch]);

  useEffect(() => {
    const fetchOrderProducts = async () => {
      try {
        if (LosDatos.user && LosDatos.user.email) {
          await dispatch(getOrderProducts(LosDatos.user.email));
        }
      } catch (error) {
        console.error("Error al obtener los productos del usuario:", error);
      }
    };
    fetchOrderProducts();
  }, [dispatch, LosDatos.user]);

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

 const toggleProductVisibility = (orderId) => {
    setProductVisibility((prevState) => ({
      ...prevState,
      [orderId.toString()]: !prevState[orderId.toString()],
    }));

    setShowDetailHeader(!showDetailHeader); // Actualiza el estado de la visibilidad del detalle
  };

  const handleDelete = (e) => {
    e.preventDefault();
    swal
      .fire(`¡La órden ${e.target.value}, ha sido eliminado correctamente!`, {
        icon: "success",
      })
      .then(async (willDelete) => {
        if (willDelete) {
          dispatch(deleteOrder({ id: e.target.value }));
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
  };

  return (
    <div className=" absolute ml-1400 h-700 w-1000 flex justify-center">
      <div className="mt-8 overflow-x-auto">
        {ordersProducts?.length > 0 ? (
          <table className="divide-y-4 divide-gray-300 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right ">
              <tr>
                <th className="whitespace-nowrap px-8 py-2 font-medium text-gray-900"></th>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900 ">
                  N. Orden
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Fecha de compra
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Estatus
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Monto de compra
                </th>
                {showDetailHeader ? ( 
                   <th className="whitespace-nowrap px-48 py-2 font-medium text-gray-900">
                  Detalle
                </th>
                 ): <th className="whitespace-nowrap px-56 py-2 font-medium text-gray-900">
                 
               </th> }
              </tr>
            </thead>

            <tbody className="divide-y-2 divide-gray-200">
              {ordersProducts.map((r, index) => (
                <tr key={index}>
                  {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" ?  
                    (" ")
                   : (
                    <button
                      className="ml-4 mr-2 px-2 bg-purple-100 py-2 rounded-md text-white font-semibold hover:bg-purple-300 active:bg-purple-700 focus:outline-none focus:ring focus:bg-purple-400 "
                      onClick={(e) => handleDelete(e)}
                      value={r.id}
                    >
                      {" "}
                      🗑️
                    </button>
                  ) }
                   {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" ?  (
                    " " ) : (
                  <td className="whitespace-normal break-words max-h-16 overflow-hidden font-medium text-gray-900">
                    #{r.id?.length > 2 ? r.id : "0" + r.id}
                  </td>
                   )}
                    {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" ?  (
                    " "
                  ) : (
                  <td className="font-sans whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center ">
                    {" "}
                    {r.order_date?.split("-").join("/").slice(0, 10)}{" "}
                  </td> 
                  )} 
                   {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" ?  (
                    " "
                  ) : (                               
                  <td className="font-sans font-bold text-purple-700">
                  {r.order_status.charAt(0).toUpperCase() + r.order_status.slice(1)}                    
                  </td> 
                  )}   
                   {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" ?  (
                    " "
                  ) : (           
                  <td className="font-sans block text-gray-700 flex justify-center px-4 py-8">
                    {formatter.format(r.amount)}
                  </td>
                 )} 
                 {r.order_status !== "cancelada" &&
                  r.order_status !== "realizada" && r.Products ?  (
                    " "
                  ) : (                    
                    <td className="whitespace-nowrap px-1 py-1">
                      {productVisibility[r.id] ? (
                        r.Products?.map((p) => (
                          <div key={p.id}>
                            <div title="Ver detalles" href={`/detail/${p.id}`}>
                              <div className="mt-2 mb-2 flex hover border flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <Link
                                  to={`/detail/${p.id}`}
                                  className="text-blue-500 underline cursor-pointer hover:text-blue-600"
                                >
                                  <div className="ml-2 md:pb-1 w-full md:w-auto">
                                    <img
                                      className="hidden md:block max-w-[60px] sm:h-[30%]"
                                      src={p.image}
                                      alt="producto"
                                    />
                                  </div>
                                </Link>
                                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-0 md:space-y-0">
                                  <div className="w-full flex flex-col justify-start items-start ">
                                    <h3 className="mt-2 text-xm xl:text-2 text-start w-full lg:w-[300px] font-semibold leading-4 text-gray-800 truncate">
                                      {p.title}
                                    </h3>
                                    <p className="text-base xm:text-lg leading-6 text-gray-800 opacity-0">
                                      {r.id?.length > 2 ? r.id : "0" + r.id}
                                    </p>
                                    <p className="text-base xm:text-lg font-semibold leading-6 text-gray-800">
                                      {formatter.format(p.price)}
                                    </p>
                                    <div>
                                      {r.order_status === "realizada" && (
                                        <Reviews
                                          className="w-screen bg-gray-100 "
                                          id={p.id}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}{" "}
                      {r.order_status === "realizada" ? (
                    <td>
                  <button
                        type="button"
                        className="mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xm px-3 py-1 text-center mr-2 mb-2"
                        onClick={() => toggleProductVisibility(r.id)}
                      >
                        {productVisibility[r.id] ? "Hide" : "View"}
                      </button>

                    <tt className="text-gray-700">Agrega una reseña a tu compra</tt>
                  </td>
                  ) :(
                    <button
                        type="button"
                        className="mt-4 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xm px-3 py-1 text-center mr-2 mb-2"
                        onClick={() => toggleProductVisibility(r.id)}
                      >
                        {productVisibility[r.id] ? "Hide" : "View"}
                      </button>
                  )}
                    
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <span className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800 flex">
              No tienes registro de compras
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compras;
