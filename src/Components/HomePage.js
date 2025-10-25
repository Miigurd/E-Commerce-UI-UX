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
import userIcon from "./images/usericon.jpg";
import popularproduct1 from "./images/popularproduct.png";
import popularproduct2 from "./images/popularproduct.png";
import popularproduct3 from "./images/popularproduct.png";
import popularproduct4 from "./images/popularproduct.png";

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

  const testimonials = [
    { name: "Luisa", text: "“I love it! No more air fresheners.”", stars: 4 },
    { name: "Edoardo", text: "“Recommended for everyone.”", stars: 5 },
    { name: "Mart", text: "“Niceeee.”", stars: 4 },
  ];

  const popularProducts = [
    { name: "Spiced Mint", price: "₱109", img: popularproduct1 },
    { name: "Sweet Strawberries", price: "₱53", img: popularproduct2 },
    { name: "Cool Blueberries", price: "₱356", img: popularproduct3 },
    { name: "Juicy Lemon", price: "₱89", img: popularproduct4 },
  ];

  return (
    <div className="homepage">
      {/* Homepage Section */}
      <div
        className="home-container"
        style={{ backgroundImage: `url(${homepageImg})` }}
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
            <p>Made to hydrate your skin and enhance your natural glow.</p>
            <ul className="lotion-features">
              <li>
                <strong>Natural ingredients:</strong> Infused with plant-based
                extracts
              </li>
              <li>
                <strong>Long-lasting moisture:</strong> Keeps skin hydrated for
                hours
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

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h1 className="testimonials-title">Testimonials</h1>
        <p className="testimonials-subtitle">
          Some quotes from our happy customers
        </p>

        <div className="testimonials-container">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <img src={userIcon} alt={t.name} className="testimonial-icon" />
              <div className="stars">
                {Array.from({ length: t.stars }, (_, i) => (
                  <span key={i} style={{ color: "rgba(27, 124, 0, 1)" }}>
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <span className="testimonial-name">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="popular-products-section">
        <h1 className="products-title">Popular Products</h1>
        <p className="products-subtitle">
          Our top selling products that you may like
        </p>

        <div className="product-grid">
          {popularProducts.map((product, index) => (
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

      {/* Footer Section */}
      <footer className="footer-section">
        <hr className="footer-line" />

        <div className="footer-content">
          {/* Left Footer */}
          <div className="footer-left">
            <h2>NextUp</h2>
            <p>Your natural candle made for</p>
            <p>your home and for your wellness.</p>
          </div>

          {/* Right Footer  */}
          <div className="footer-right">
            <div className="footer-column">
              <p className="footer-green">Discovery</p>
              <p>New season</p>
              <p>Most Shipped</p>
              <p>Most Selled</p>
            </div>
            <div className="footer-column">
              <p className="footer-green">About</p>
              <p>Help</p>
              <p>Shipping</p>
              <p>Affiliate</p>
            </div>
            <div className="footer-column">
              <p className="footer-green">Info</p>
              <p>Contact us</p>
              <p>Privacy Policies</p>
              <p>Terms and conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
