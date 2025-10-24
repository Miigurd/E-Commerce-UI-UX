import React from "react";
import { Link } from "react-router-dom";
import homepageImg from "./images/homepage.jpg";
import homepageproduct1 from "./images/homepageproduct.jpg";
import homepageproduct2 from "./images/homepageproduct.jpg";
import homepageproduct3 from "./images/homepageproduct.jpg";
import homepageproduct4 from "./images/homepageproduct.jpg";
import homepageproduct5 from "./images/homepageproduct.jpg";
import homepageproduct6 from "./images/homepageproduct.jpg";
import homepageproduct7 from "./images/homepageproduct.jpg";
import homepageproduct8 from "./images/homepageproduct.jpg";
import lotionImg from "./images/homepageproduct.jpg";

function HomePage() {
  const products = [
    { name: "Spiced Mint", price: "₱109", img: homepageproduct1 },
    { name: "Sweet Strawberries", price: "₱53", img: homepageproduct2 },
    { name: "Cool Blueberries", price: "₱356", img: homepageproduct3 },
    { name: "Juicy Lemon", price: "₱89", img: homepageproduct4 },
    { name: "Vanilla Bliss", price: "₱73", img: homepageproduct5 },
    { name: "Fragrant Cinnamon", price: "₱1,065", img: homepageproduct6 },
    { name: "Summer Cherries", price: "₱98", img: homepageproduct7 },
    { name: "Clean Lavender", price: "₱678", img: homepageproduct8 },
  ];

  return (
    <div className="homepage">
      {/* Homepage Section */}
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${homepageImg})`,
        }}
      >
        <div className="home-text">
          <h1>Your One-stop Shop for Everyday Essentials.</h1>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <h1 className="products-title">Products</h1>
        <p className="products-subtitle">
          Order it for you or for your beloved ones
        </p>

        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lotion Section */}
      <div className="lotion-section">
        <div className="lotion-content">
          <div className="lotion-text">
            <h1>Smooth and Nourishing Lotion</h1>
            <p>
              Made to hydrate your skin and enhance your natural glow.
            </p>
            <ul className="lotion-features">
              <li>
                <strong>Natural ingredients:</strong> Infused with plant-based extracts
              </li>
              <li>
                <strong>Long-lasting moisture:</strong> Keeps skin hydrated for hours
              </li>
              <li>
                <strong>Non-greasy formula:</strong> Perfect for any weather
              </li>
              <li>
                <strong>Everyday care:</strong> Gentle enough for all skin types
              </li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>

          <div className="lotion-image-container">
            <img src={lotionImg} alt="Lotion" className="lotion-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
