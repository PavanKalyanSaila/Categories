import React from "react";
import "../styles/Categories.css";

const Categories = ({ categories, onSelect, selectedCategory }) => {
  return (
    <div className="categories">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id || category.name} // Fallback to category.name if 'id' is not available
            className={category.name === selectedCategory ? "selected" : ""}
            onClick={() => onSelect(category.name)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
