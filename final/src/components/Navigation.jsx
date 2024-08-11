import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">GadgetsSPECS</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
};

export default Navigation;
