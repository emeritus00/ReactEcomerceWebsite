import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <div className="container">
      <div className="shopping-cart">
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-total">
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <div className="cart-totals">
              <p>Subtotal: ${subtotal.toFixed(2)}</p>
            </div>
            <Link to="/checkout" className="checkout-button">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
