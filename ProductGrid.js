import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((p, idx) => (
        <ProductCard
          key={p.id}
          isNew={p.isNew}
          discount={p.discount}
          product={p}
        />
      ))}
    </div>
  );
}