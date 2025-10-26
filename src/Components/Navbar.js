import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side Navbar */}
      <div className="navbar-left">
        <Link to='/' className="text-decoration-none" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" className="logo" /> {/* ✅ Works now */}
          <span className="brand-name">NextUp</span>
        </Link>
      </div>

      {/* Center: Navbar */}
      <div className="navbar-center">
        <Link to="/product-list" className="nav-link">Discovery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      {/* Right Side Navbar */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <Link to="/cart" className="text-success text-decoration-none" style={{ display: 'flex', alignItems: 'center' }}>
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
