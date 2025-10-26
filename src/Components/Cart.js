import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Cart() {
  return (
    <div className="cart-page">
      <header className="cart-header">
        <h1 className="logo">NextUp</h1>
        <nav className="top-nav">
          <span>Discovery ▾</span>
          <span>About</span>
          <span>Contact us</span>
          <div className="icons">
            <i className="fa fa-user"></i>
            <i className="fa fa-shopping-cart"></i>
          </div>
        </nav>
      </header>

      <main className="cart-content">
        <h2>Your cart items</h2>
        <Link to="/products" className="back-link">Back to shopping</Link>

        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-cell">
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472"
                  alt="Beats LuxeSound Pro"
                />
                <div>
                  <p className="product-name">Beats LuxeSound Pro</p>
                  <Link to="#" className="remove-link">Remove</Link>
                </div>
              </td>
              <td>₱835</td>
              <td>
                <div className="quantity-control">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>
              </td>
              <td>₱835</td>
            </tr>
          </tbody>
        </table>

        <div className="subtotal-section">
          <p>Sub-total</p>
          <p>₱835</p>
        </div>

        <div className="checkout-btn-section">
          <Link to="/checkout" className="checkout-btn">Check-out</Link>
        </div>
      </main>

      <footer className="cart-footer">
        <div className="footer-left">
          <h3>NextUp</h3>
          <p>Ready to find something you’ll love?<br />Your essentials, one click away.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Discovery</h4>
            <p>New season</p>
            <p>Most searched</p>
            <p>Most sold</p>
          </div>
          <div>
            <h4>About</h4>
            <p>Help</p>
            <p>Shipping</p>
            <p>Affiliate</p>
          </div>
          <div>
            <h4>Info</h4>
            <p>Contact us</p>
            <p>Privacy Policies</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
