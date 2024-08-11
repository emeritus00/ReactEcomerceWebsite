import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../api";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const { addToCart } = useShoppingCart();

  useEffect(() => {
    setProduct(getProductById(Number(id)));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setMessage("Product added to cart successfully!");
    setTimeout(() => setMessage(""), 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="product-details">
        {/* Back Arrow */}
        <Link to="/products" className="back-arrow">
          ← Back to Products
        </Link>

        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default ProductDetails;
