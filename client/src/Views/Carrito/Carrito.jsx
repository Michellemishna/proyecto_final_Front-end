import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Carrito = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  // console.log(totalPrice);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  useEffect(() => {
    if (totalPrice === 0) {
      const timer = setTimeout(() => {
        Swal.fire({
          title: "El carrito esta vacío",
          icon: "warning",
        }).then(() => {
          navigate("/Productos/page/1");
        });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [totalPrice, navigate]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      cart?.forEach((product) => {
        total += product.price * selectedQuantities[product.id];
      });
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cart, selectedQuantities]);

  useEffect(() => {
    const initialQuantities = cart?.reduce((quantities, product) => {
      quantities[product.id] = 1;
      return quantities;
    }, {});
    setSelectedQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (product, value) => {
    setSelectedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: Math.max(1, prevQuantities[product] + value),
    }));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  })
  //funcion para conectar y redirigir al pago
  // const handleToShop = () => {

  // }
  const customerData = useSelector((state) => state.datosDelUsuario)
  const handleCheckout = async (customerData) => {
    try {
      //destructura los datos del usuario
      const {usuario, email} = customerData

      // Crea un array con la información de los productos del carrito
      const items = cart.map((product) => ({
        id: product.id,
        title: product.title,
        quantity: selectedQuantities[product.id],
        unit_price: product.price,
      }));

       // Envía la información del carrito al servidor para crear la orden de compra
       const response = await axios.post("/order", {
        CustomerUser: usuario,
        email: email,
        items: items,
      });

        // Obtén el ID de la preferencia de pago desde la respuesta del servidor
        const preferenceId = response.data.id;
        // Redirige a la página de pago pasando el ID de la preferencia como parámetro
        navigate(`/ordencompra/${preferenceId}`,{
          state: {
            items: cart,
            selectedQuantities: selectedQuantities,
            preferenceId: preferenceId,
          },} );
      } catch (error) {
        console.log(error);
        // Maneja el error si ocurre algún problema al crear la orden de compra
      }
    };

  return (
    <>
<section>
  <div className="bg-gray-50 min-h-screen" >
    <div className="mx-auto max-w-3xl rounded border-gray-200" >
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Carrito de compras</h1>
      </header>
      {cart?.map((product) => (
      <div className="mt-8 w-[90%]" key={product.id}> 
        <ul className="space-y-4 ">
          <li className="flex items-center gap-4 ">
            <img
              src={product.image} alt={product.name}
              className="h-16 w-18 rounded object-cover max-w-[14%] transition duration-500 group-hover:scale-105 sm:h-[10%]"
            />

            <div>
              <h3 className="text-sm text-gray-900 ">{product.title}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline text-sm">Unidades disponibles:</dt>
                  <dd className="inline text-sm">{product.stock}</dd>
                </div>

                <div>
                  <dt className="inline text-sm">Precio:</dt>
                  <dd className="inline text-sm">{formatter.format(product.price)}</dd>
                </div>
              </dl>
            </div>

            <div className="flex items-center justify-end gap-2">
              <form className="flex items-center justify-end gap-2 " >
                <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                <div className="flex items-center justify-end gap-2 border-2 border-purple-600">
    <button
      type="button"
      className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 text-center" onClick={() => handleQuantityChange(product.id, -1)}>
      -
    </button>

    <input 
      type="number"
      value={selectedQuantities[product.id]}
      min="1"
      readOnly
      className="h-10 w-20 rounded border border-gray-200 custom-input sm:text-sm text-center"
    />

    <button
      type="button"
      className="h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 text-center" onClick={() => handleQuantityChange(product.id, 1)}
    >
      +
    </button>
  </div>
              </form>

              <button className="text-gray-600 transition hover:text-red-600"onClick={() => handleRemoveItem(product.id)}>
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>     
        </ul>
        </div>
        ))}
        <div className="mt-8 flex justify-end border-t-2 border-purple-600 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="mt-1 w-[200px]">{formatter.format(totalPrice)}</dd>
              </div>

              <div className="flex justify-between !text-base font-medium mt-8 w-[400px]">
                <dt>Total</dt>
                <dd>{formatter.format(totalPrice)}</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <button className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"  onClick={()=> handleCheckout(customerData)}>Ir a Pago</button>
              {/* <div className="mr-20 flex justify-center items-center">
                <PaymentButton cartItems={cart} selectedQuantities={selectedQuantities} onClick={handleCheckout}/>
              </div> */}
                    </div>

              <div className="flex justify-end">
              <Link to="/Productos/page/1">
              <button
        href="#"
        className=" mt-4 inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continuar comprando
      </button>
      </Link>
      </div>
            
          </div>
        </div>
    </div>
  </div>
</section>
       </>
  );
};

export default Carrito;