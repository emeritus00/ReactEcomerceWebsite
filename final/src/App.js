// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Navigation from "./components/Navigation";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default App;
