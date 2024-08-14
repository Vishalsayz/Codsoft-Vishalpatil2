import React from 'react';
import ProductCatalog from './ProductCatalog';
import cart from './cart.png';
import { Link,  animateScroll as scroll } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='shop-name'> EKART </h1>
        

    <nav>          
      <Link
        activeClass="active"
        to="cart"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
          <img src={cart} className='cart-img'/>
      </Link>
    </nav>

      </header>
      <ProductCatalog />
    </div>
  );
}

export default App;
