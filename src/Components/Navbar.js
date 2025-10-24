import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from './images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left Side Navbar */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" /> {/* ✅ Works now */}
        <span className="brand-name">NextUp</span>
      </div>

      {/* Center: Navbar */}
      <div className="navbar-center">
        <Link to="/" className="nav-link">Discovery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>

      {/* Right Side Navbar */}
      <div className="navbar-right">
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
