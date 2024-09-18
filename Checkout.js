// src/components/Checkout.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Fix path to context

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total to pay: ${totalPrice}</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Shipping Address" required />
        <input type="text" placeholder="Credit Card Number" required />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
