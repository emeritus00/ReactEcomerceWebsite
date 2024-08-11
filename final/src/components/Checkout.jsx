import React, { useState } from "react";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const Checkout = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <div className="container">
      <div className="checkout">
        <h2>Checkout</h2>
        {orderPlaced ? (
          <p className="success-message">Order placed successfully!</p>
        ) : (
          <>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="checkout-summary">
                {cartItems.map((item) => (
                  <div key={item.id} className="checkout-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="item-total">
                      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <div className="checkout-totals">
                  <p>Subtotal: ${subtotal.toFixed(2)}</p>
                  <p>HST (15%): ${tax.toFixed(2)}</p>
                  <p>Total: ${total.toFixed(2)}</p>
                </div>
                <button
                  className="place-order-button"
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
