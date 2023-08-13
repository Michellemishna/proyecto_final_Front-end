import React from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PaymentButton from "../../Componentes/Payment/PaymentButton";
import { Link } from "react-router-dom";

const OrderPreview = () => {
  const { state } = useLocation();
  const { selectedQuantities, preferenceId } = state || {};
  const [orderData, setOrderData] = useState(null); // Estado para almacenar los detalles de la orden
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("user");
  const [userInfo, setUserInfo] = useState(null);

  const id = preferenceId;

  // Realiza la solicitud al servidor para obtener los detalles de la orden
  const getOrderData = async () => {
    try {
      const response = await axios.get(`/order/${id}`);
      setOrderData(response.data); // Almacena los detalles de la orden en el estado
      setLoading(false); // Marcar que los datos se han cargado
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnReady = () => {
    setIsReady(true);
  };

  const renderCheckoutButton = (preferenceId) => {
    if (!preferenceId) return null;

    return (
      <Wallet
        initialization={{ preferenceId: preferenceId }}
        onReady={handleOnReady}
      />
    );
  };

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    setLoading(true); // Marcar que los datos están siendo cargados
    getOrderData(); // Llama a la función para obtener los detalles de la orden cuando se monte el componente
  }, []);

  useEffect(() => {
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, [user]);

  const handleDeleteOrder = async () => {
    try {
      await axios.delete(`/order/${orderData.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const elToken = localStorage.getItem("token");

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container_payment mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="block-heading text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Detalles del pedido
          </h2>
        </div>
        <div className="form-payment bg-white rounded-lg shadow-md p-8 mt-8">
          {loading ? (
            <p className="text-gray-600">Cargando detalles de la orden...</p>
          ) : orderData ? (
            <div className="products">
               {elToken === null ? 
                 (" ") : (
              <div className="item">
                <img
                  src={userInfo?.imagen}
                  alt="foto del cliente"
                  className="h-24 w-24 rounded-full mx-auto"
                />
                <p className="text-gray-600">N.° de pedido: {orderData.id}</p>
                <p id="summary-price" className="text-gray-600 mt-4">
                  Email: {userInfo?.email}
                </p>
                {/* <p id="summary-price" className="text-gray-600">Dirección: {datos.user.default_shipping_address}</p> */}
                <p id="summary-price" className="text-gray-600">
                  Teléfono: {userInfo?.telefono}
                </p>
              
              </div>)  }
              <div>
                <h2 className="text-xl font-bold text-gray-900 mt-8">
                  Productos
                </h2>
                {orderData.Products?.map((product) => (
                  <div className="mt-8 w-[90%]" key={product.id}>
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-16 w-18 rounded object-cover max-w-[14%] transition duration-500 group-hover:scale-105 sm:h-[10%]"
                      />

                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {product.title}
                        </h3>

                        <dl className="mt-1 space-y-1 text-sm text-gray-600">
                          <div>
                            <dt className="inline text-sm">Cantidad:</dt>
                            <dd className="inline text-sm">
                              {selectedQuantities[product.id]}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <form className="flex items-center justify-end gap-2">
                          <label htmlFor="Line1Qty" className="sr-only">
                            {" "}
                            Quantity{" "}
                          </label>
                          <div className="flex justify-end justify-end gap-2 ">
                            <p className="ml-8 h-10 w-20 rounded custom-input sm:text-sm text-center">
                              {" "}
                            </p>
                            <span className="flex justify-end ml-40">
                              {formatter.format(product.price)}
                            </span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-end border-t-2 border-purple-600 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <div className="space-y-1 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <p className="mt-4 mb-12 w-[200px] text-xl">Total del pedido</p>
                      <span className="mt-4 w-[200px] text-xl">
                        {formatter.format(orderData.amount)}
                      </span>
                    </div>
                  </div>
                  {elToken === null ? 
                  <div className="mt-20">
                    <span className="font-sans font-bold text-purple-700"> "Tienes que estar registrado para poder comprar" </span>
                    </div> :
                 ( <div className="flex justify-end">
                    {userInfo && (<PaymentButton
                      cartItems={orderData.Products}
                      selectedQuantities={selectedQuantities}
                      handleCheckout={renderCheckoutButton}
                      datos={userInfo}
                      />)}
                      </div>
                    ) 
                    }
                  <div className="flex justify-end">
                    <Link to="/carrito">
                      <button
                        onClick={handleDeleteOrder}
                        href="#"
                        className=" mt-4 inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                      >
                        Volver al carrito
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">
              No se pudo obtener la información de la orden.
            </p>
          )}
          <div className="payment-details">
            <div className="form-group col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPreview;
