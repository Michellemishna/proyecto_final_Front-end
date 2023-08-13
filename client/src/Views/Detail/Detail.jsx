import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProduct,
  clearDetail,
  getCategoryById,
  addToCart,
  getReviews,
} from "../../Redux/Actions/action";
//IMPORT PARA CARRUSEL
// import style from "./Detail.module.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  // const description = useSelector((state) => state.description);
  // const picture = useSelector((state) => state.picture);
  const categories = useSelector((state) => state.category);
  const cart = useSelector((state) => state.cart);
  const reviews = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getProduct(id));
    // dispatch(getDescription(id));
    // dispatch(getPicture(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (product.category) {
      dispatch(getCategoryById(product.category)); // Asegúrate de que product.category sea el ID correcto
    }
    //Obnetenemos las reseñas del producto
    dispatch(getReviews(id));
  }, [dispatch, product.category, id]);

  const handleAddToCart = () => {
    const isProductInCart = cart.find((item) => item.id === product.id);
    if (isProductInCart) {
      Swal.fire({
        title: "El producto ya está en el carrito",
        icon: "warning",
      });
    } else {
      dispatch(addToCart(product));
      Swal.fire({
        title: "Agregado al carrito exitosamente",
        icon: "success",
      });

      const updatedCart = [...cart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // const getCategoryName = (categoryId) => {
  //   const Category = categories.find((cat) => cat.id === categoryId);
  //   return Category ? Category.name : "Categoria no encontrada"
  // }

  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  // configuracion para carrusel
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img
              // src={picture}
              src={product?.image}
              alt={product?.title}
              className="h-48 w-auto sm:h-64  mx-auto sm:mx-0"
            />

            {/* Componente de carrusel (aun no funciona)
            <Slider {...settings}>
              {picture((img, index) => (
                <div key={index}>
                  <img
                  src={img.jpg}
                  alt={product?.title}
                  className="h-48 w-auto sm:h-64 rounded-full mx-auto sm:mx-0"
                  />
                </div>
              ))}
            </Slider> */}

            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <h1 className="text-xl font-semibold">{product?.title}</h1>
              <p className="text-gray-600">
                Precio: {formatter.format(product?.price)}
              </p>
              <p className="text-gray-600">
                Unidades disponibles: {product?.stock}
              </p>
              <p className="text-gray-600">Categoría: {categories.name}</p>

              <button
                // boton para agregar al carrito
                onClick={handleAddToCart}
                className="mt-4 bg-violet-800
                text-white py-2 px-4 rounded
                hover:bg-violet-900 focus:outline-none focus:ring-2
                focus:ring-blue-600"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
          <div className="px-6 py-4 text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-2">
              Descripción del producto
            </h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="px-6 py-4 text-center sm:text-left">
            <h2 className="text-lg font-semibold mb-2">
              Reseñas sobre este producto
            </h2>
            {reviews.lenght === 0 ? (
              <p className="text-gray-600">
                Aún no hay reseñas sobre este producto
              </p>
            ) : (
              <ul>
                {reviews.map((review, index) => (
                  <li
                    key={index}
                    className="text-gray-600 mb-4 p-4 border rounded border-gray-300"
                  >
                    <p className="font-semibold">{review.customerUser}</p>
                    <p className="text-sm text-gray-500">
                      Calificación:
                      {Array.from({ length: review.calification }).map(
                        (_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon="star"
                            className="text-yellow-500"
                          />
                        )
                      )}
                    </p>
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
