import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Pages
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function Home() {
  return (
    <div className="home">
      <h1>🐳 Docker React App</h1>
      <p>Welcome to your Dockerized React application!</p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <p>This is a sample React app containerized with Docker.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/checkout" className="nav-link">Checkout</Link>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
