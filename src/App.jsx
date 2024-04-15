import React from "react";
import "./App.css";
import Products from "./Components/Products";
import ProductCard from "./Components/ProductCard";

export default function App() {
  const products = [
    { name: "Phone", Price: 200 },
    { name: "Camera", Price: 700 },
    { name: "Laptop", Price: 1200 },
    { name: "Charger", Price: 20 },
  ];

  const products2 = [
    { name: "Phone2", Price: 200 },
    { name: "Camera2", Price: 700 },
    { name: "Laptop2", Price: 1200 },
    { name: "Charger2", Price: 20 },
  ];

  const singleProduct = { name: "Single Product", Price: 200 };

  return (
    <div className="container">
      <h1>React Props</h1>
      <Products products={products} />
      <Products products={products2} />
      <ProductCard product={singleProduct} />
    </div>
  );
}

// reusable components
