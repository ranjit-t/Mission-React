import React from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  return (
    <>
      {products.map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      })}
    </>
  );
}
