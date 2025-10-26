const Checkout = () => {
  return (
    <div className="checkout-container">
      {/* LEFT SIDE - FORM */}
      <div className="checkout-left">
        <h1 className="logo">NextUp</h1>

        <div className="checkout-section">
          <h2>Contact</h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="checkout-input"
            />
            <p className="login-text">
              Do you have an account? <span>Login</span>
            </p>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Shipping Address</h2>

          <div className="form-grid">
            <input type="text" placeholder="Name" className="checkout-input" />
            <input
              type="text"
              placeholder="Second Name"
              className="checkout-input"
            />
          </div>

          <input
            type="text"
            placeholder="Address and number"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Shipping note (optional)"
            className="checkout-input"
          />

          <div className="form-grid">
            <input type="text" placeholder="City" className="checkout-input" />
            <input
              type="text"
              placeholder="Postal Code"
              className="checkout-input"
            />
          </div>

          <div className="form-grid">
            <select className="checkout-input">
              <option>Province</option>
            </select>
            <select className="checkout-input">
              <option>Country/Region</option>
            </select>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" />
            <label>Save this information for a future fast checkout</label>
          </div>
        </div>

        <div className="checkout-section">
          <h2>Shipping method</h2>
          <div className="shipping-option">
            <input type="radio" name="shipping" checked readOnly />
            <label>Standard Shipping</label>
            <span className="free-text">Free</span>
          </div>
        </div>

        <div className="checkout-buttons">
          <a href="/cart" className="back-cart">
            Back to cart
          </a>
          <button className="checkout-btn">Check out</button>
        </div>
      </div>

      {/* RIGHT SIDE - ORDER SUMMARY */}
      <div className="checkout-right">
        <div className="summary-card">
          <div className="product-summary">
            <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX472"
            alt="Beats LuxeSound Pro"
            className="checkout-product-image"
            />
            <div>
              <p className="product-title">Beats LuxeSound Pro</p>
              <p className="product-price">₱835</p>
            </div>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Coupon code" />
            <button>Add code</button>
          </div>

          <div className="price-row">
            <p>Subtotal</p>
            <p>₱835</p>
          </div>
          <div className="price-row">
            <p>Shipping</p>
            <p>₱0</p>
          </div>

          <hr />

          <div className="total-row">
            <h3>Total</h3>
            <h3>₱835</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
