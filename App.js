// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated for v6
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Cart from './components/Cart';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        {/* Updated Switch to Routes */}
        <Routes>
          {/* Updated Route to use element instead of component */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
