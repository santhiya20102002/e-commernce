// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <p>{product.name}</p>
      <p style={{color:'red'}}>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
