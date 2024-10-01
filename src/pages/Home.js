import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  setCategory,
  setSearchTerm,
} from "../redux/actions";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Search from "../components/Search";
import "../styles/App.css";

const Home = () => {
  const dispatch = useDispatch();
  const { categories, products, loading, selectedCategory, searchTerm } =
    useSelector((state) => state.productData);

  const [skip, setSkip] = useState(0);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts(selectedCategory, skip, searchTerm));
  }, [dispatch, selectedCategory, skip, searchTerm]);

  const handleCategorySelect = (category) => {
    dispatch(setCategory(category));
    setSkip(0); // Reset skip when category changes
  };

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
    setSkip(0); // Reset skip when search changes
  };

  const loadMore = () => {
    setSkip((prev) => prev + 10);
  };

  return (
    <div className="container">
      <h1>Product Store</h1>
      <Search onSearch={handleSearch} />
      <Categories
        categories={categories}
        onSelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      <Products products={products} loading={loading} />
      <div className="load-more">
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
};

export default Home;
