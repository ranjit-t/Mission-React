import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <p>{product.name}</p>
      <p>Price : {product.Price}$</p>
    </div>
  );
}
