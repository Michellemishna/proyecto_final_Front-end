import {
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_PICTURE,
  GET_CATEGORIES,
  GET_CATEGORY,
  TODOS_FILTROS,
  SEARCH_PRODUCTS,
  SEARCH_FILTER_PRODUCTS,
  DATA_USUARIO,
} from "./Actions/constantes";

const initialState = {
  productos: [],
  datosDelUsuario: [],
  product: [],
  description: [],
  picture: [],
  categories: [],
  category: [],
  productosFiltrados: [],
  searchResults: [],
  productosFiltrados: [], //Eliminar!
  searchResults: [], //eliminar si llega a no es necesaria
  searchFilterResults: ["1"],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTOS:
      return {
        ...state,
        productos: payload,
      };

    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case DATA_USUARIO:
      return {
        ...state,
        datosDelUsuario: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        product: payload,
      };
    case GET_DESCRIPTION:
      return {
        ...state,
        description: payload,
      };
    case GET_PICTURE:
      return {
        ...state,
        picture: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };

    case TODOS_FILTROS:
      return {
        ...state,
        productosFiltrados: payload, // Guardar los productos filtrados en el estado productosFiltrados
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        productosFiltrados: payload,
      };
    case SEARCH_FILTER_PRODUCTS:
      return {
        ...state,
        searchFilterResults: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
