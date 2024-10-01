import { combineReducers } from "redux";

const initialState = {
  categories: [],
  products: [],
  loading: false,
  selectedCategory: "",
  searchTerm: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES_SUCCESS":
      return { ...state, categories: action.payload };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, products: [...state.products, ...action.payload] };
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload, products: [] }; // Clear products on category change
    case "SET_SEARCH":
      return { ...state, searchTerm: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  productData: productReducer,
});
