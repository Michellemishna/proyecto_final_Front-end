import {
  CLEAR_DETAIL,
  GET_ALL_PRODUCTOS,
  GET_PRODUCT,
  GET_DESCRIPTION,
  GET_PICTURE,
  GET_CATEGORIES,
  GET_CATEGORY,
  ADD_PRODUCT,
  SEARCH_FILTER_PRODUCTS,
  SET_LOADING,
  CLEAN_STATE,
  LOAD_DATA,
  DATA_USUARIO,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REFRESH_CART,
  CUSTOMER_REGISTER,
  GET_ORDER,
  CREATE_REVIEW,
  GET_REVIEWS_PRODUCT,
  GET_CUSTOMERS,
  GET_ALL_USUARIOS,
  SET_CURRENT_PAGE,
} from "../Actions/constantes";

const initialState = {
  productos: [],
  allUsers: [],
  currentPage: 1,
  usersPerPage: 6,
  searchFilterResults: [],
  loading: false,
  searched: false,
  product: [],
  description: [],
  picture: [],
  categories: [],
  category: [],
  datosDelUsuario: [],
  filters: {
    search: "",
    category: "",
    price_min: "",
    price_max: "",
    sort_by: "",
    order: "",
  },
  cart: [],
  registro: 1,
  orderProduct: [],
  reviews: [],
  users: [],
  usersCopy: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTOS:
      return {
        ...state,
        productos: payload,
        loading: false,
      };
    case GET_ALL_USUARIOS:
      return {
        ...state,
        allUsers: payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
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
    case "LA_DATA_USUARIO":
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
    case SEARCH_FILTER_PRODUCTS:
      return {
        ...state,
        searchFilterResults: payload,
        loading: false,
        searched: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
        searched: false,
      };
    case CLEAN_STATE:
      for (const key in state.filters) {
        state.filters[key] = "";
      }

      return {
        ...state,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.productos, payload],
      };
    case LOAD_DATA:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_FROM_CART:
      const updatedItems = state.cart.filter((item) => item.id !== payload);
      return {
        ...state,
        cart: updatedItems,
      };
    case REFRESH_CART:
      return {
        ...state,
        cart: payload,
      };
    case CUSTOMER_REGISTER:
      return {
        ...state,
        registro: payload,
      };
    default:
      return { ...state };
    case GET_ORDER:
      return {
        ...state,
        orderProduct: payload,
      };
    case CREATE_REVIEW:
      return {
        ...state,
        reviews: payload,
      };

    case GET_REVIEWS_PRODUCT:
      return {
        ...state,
        reviews: payload,
      };
    case GET_CUSTOMERS: {
      return {
        ...state,
        users: payload,
        usersCopy: payload,
      };
    }
  }
};

export default rootReducer;
