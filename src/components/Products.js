import React from "react";
import "../styles/Products.css";

const Products = ({ products, loading }) => {
  return (
    <div>
      <h3>Products</h3>
      {loading ? <p>Loading...</p> : null}
      <div className="products">
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
