import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import ProductList from './Components/ProductList';
import ProductDetail from './Components/ProductDetails';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

function About() {
  return (
    <div className="page-content">
      <h1>About</h1>
      <p>This is the About page for the NextUp E-Commerce.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page-content">
      <h1>Contact Us</h1>
      <p>Reach out to us anytime & we’re happy to help!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
