// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Fix path to context

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
