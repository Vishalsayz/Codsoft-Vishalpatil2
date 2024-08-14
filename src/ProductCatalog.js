import React, { useState } from 'react';
import Product from './Product';
import PaymentModal from './PaymentModal';
import './ProductCatalog.css';

import smartphone from './assets/smartphone.jpg';
import laptop from './assets/laptop.jpg';
import headphones from './assets/headphones.jpg';
import smartwatch from './assets/smartwatch.jpg';
import tablet from './assets/tablet.jpg';
import camera from './assets/camera.jpg';
import keyboard from './assets/keyboard.jpg';
import mouse from './assets/mouse.jpg';
import monitor from './assets/monitor.jpg';
import printer from './assets/printer.jpg';
import router from './assets/router.jpg';
import chair from './assets/chair.jpg';

const products = [
  {
    image: smartphone,
    name: 'Smartphone',
    description: 'A high-end smartphone with a powerful processor and great camera.',
    price: 34999.00,
    
  },
  {
    image: laptop,
    name: 'Laptop',
    description: 'A lightweight laptop with a long battery life, perfect for work on the go.',
    price: 62499,
    
  },
  {
    image: headphones,
    name: 'Headphones',
    description: 'Noise-cancelling headphones with superior sound quality.',
    price: 699.00,
    
  },
  {
    image: smartwatch,
    name: 'Smart Watch',
    description: 'A smart watch with various health-tracking features and notifications.',
    price: 1649,
    
  },
  {
    image: tablet,
    name: 'Tablet',
    description: 'A versatile tablet with a vibrant display and fast performance.',
    price: 31170,
    
  },
  {
    image: camera,
    name: 'Camera',
    description: 'A DSLR camera with high resolution and multiple lens options.',
    price: 42777,
    
  },
  {
    image: keyboard,
    name: 'Keyboard',
    description: 'A mechanical keyboard with customizable backlighting.',
    price: 899,
    
  },
  {
    image: mouse,
    name: 'Mouse',
    description: 'An ergonomic mouse with programmable buttons and high precision.',
    price: 599,
    
  },
  {
    image: monitor,
    name: 'Monitor',
    description: 'A 4K monitor with vibrant colors and a sleek design.',
    price: 11596,
    
  },
  {
    image: printer,
    name: 'Printer',
    description: 'A high-speed wireless printer with scanning and copying features.',
    price: 129.99,
    
  },
  {
    image: router,
    name: 'Router',
    description: 'A dual-band router with fast speeds and extensive coverage.',
    price: 2799,
    category: 'Electronics'
  },
  {
    image: chair,
    name: 'Gaming Chair ',
    description: 'Sunon Gaming Chair,Faux Leather Computer Chair with Footrest',
    price: 12999,
    
  }
];

const ProductCatalog = () => {
  const [cart, setCart] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handlePayment = () => {
    setIsPurchased(true);
    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <div className="product-catalog">
      {products.map((product, index) => (
        <Product
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          onAddToCart={() => addToCart(product)}
        />
      ))}
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)} className="remove-from-cart-button">Remove</button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
        )}
        {isPurchased && <p>Thank you for your purchase!</p>}
      </div>
      <PaymentModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onPayment={handlePayment}
      />
    </div>
  );
};


export default ProductCatalog;
