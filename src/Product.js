import React from 'react';
import './Product.css';

const Product = ({ image, name, description, price, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price.toFixed(2)}</p>
      <button onClick={onAddToCart} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default Product;
