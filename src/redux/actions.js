import axios from "axios";

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: response.data });
};

export const fetchProducts =
  (category = "", skip = 0, search = "") =>
  async (dispatch) => {
    dispatch({ type: "SET_LOADING", payload: true });
    let url = `https://dummyjson.com/products?skip=${skip}&limit=10`;
    if (category)
      url = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=10`;
    if (search) url += `&q=${search}`;

    const response = await axios.get(url);

    // Ensure products have unique ids
    const productsWithUniqueIds = response.data.products.map(
      (product, index) => ({
        ...product,
        id: `${product.id}-${index}`, // Ensure uniqueness if necessary
      })
    );

    dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: productsWithUniqueIds,
    });
    dispatch({ type: "SET_LOADING", payload: false });
  };

export const setCategory = (category) => ({
  type: "SET_CATEGORY",
  payload: category,
});

export const setSearchTerm = (searchTerm) => ({
  type: "SET_SEARCH",
  payload: searchTerm,
});
