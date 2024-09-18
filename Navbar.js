// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import '../index.css'
const Navbar = () => {
  return (
    <nav>
      <ul>
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Search products..." />
          <button class="search-button">Search</button>
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <h1>GetStore</h1>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XTSvMSP9IyZVLsIEIYAoRNYNcSEnUDF84A&s"} width={100} height={40} />
    </nav>
  );
};

export default Navbar;
