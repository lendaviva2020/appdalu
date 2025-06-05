import React from "react";

export default function ProductCard({
  isNew,
  discount,
  product,
}) {
  return (
    <div className="product-card">
      <div className="product-card-top">
        <span className="lemon-icon">🍋</span>
        <div>
          {isNew && <span className="badge-new">Novo!</span>}
          {discount && <span className="badge-discount">{discount}</span>}
        </div>
      </div>
      <div className="product-image">
        {/* Imagem 200x200 */}
        <img
          src={product.imageUrl || "https://via.placeholder.com/200x200?text=200+x+200"}
          alt={product.name}
          width={200}
          height={200}
        />
      </div>
      <div className="product-card-bottom">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-prices">
          <span className="product-price">R${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="product-old-price">
              R${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐☆</span>
          <span className="reviews">(152)</span>
        </div>
      </div>
    </div>
  );
}