import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our GadgetsSPECS</h1>
        <p>
          Discover the best products curated just for you at most reasonable
          prices
        </p>
        <Link to="/products">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </header>
      <section className="features-section">
        <div className="feature">
          <h2>Wide Range of Products</h2>
          <p>Explore a variety of products across different categories</p>
        </div>
        <div className="feature">
          <h2>Exclusive Discounts</h2>
          <p>
            Enjoy special offers and discounts available only to our members
          </p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered to your doorstep quickly and safely</p>
        </div>
      </section>
      <section className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>
            "Great shopping experience, fast delivery and quality products!"
          </p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>"I love the variety of products available at amazing prices."</p>
          <span>- John Smith</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
