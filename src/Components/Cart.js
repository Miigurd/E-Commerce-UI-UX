import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity - 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
        <Container className="my-5">
        <h3 className="text-center fw-semibold mb-3">Your cart items</h3>
        <div className="text-center mb-4">
            <Link to="/" className="text-success fw-semibold">Back to shopping</Link>
        </div>

        {cartItems.length === 0 ? (
            <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
            <Table responsive bordered={false} className="align-middle">
            <thead>
                <tr className="text-muted small text-uppercase">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
            </thead>

            <tbody>
                {cartItems.map((item, index) => (
                <tr key={index}>
                    <td>
                    <div className="d-flex align-items-center">
                        <img src={process.env.PUBLIC_URL + item.image} alt={item.title} width="80" className="me-3 rounded"/>
                        <div>
                        <p className="fw-semibold mb-1">{item.title}</p>
                        <button className="btn btn-link p-0 text-success small" onClick={() => handleRemove(index)}>Remove</button>
                        </div>
                    </div>
                    </td>
                    <td>₱{item.price}</td>
                    <td>
                    <Button variant="outline-success" size="sm" className="me-1" onClick={() => handleDecrease(index)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="outline-success" size="sm" className="ms-1" onClick={() => handleIncrease(index)}>+</Button>
                    </td>
                    <td>₱{item.price * item.quantity}</td>
                </tr>
                ))}
            </tbody>
            </Table>
        )}

        <hr className="my-4" />

        <div className="d-flex justify-content-between align-items-center">
            <strong>Sub-total</strong>
            <strong className="text-success fs-5">₱{calculateSubtotal()}</strong>
        </div>

        <div className="text-end mt-3">
            <Button variant="success" className="px-4" onClick={handleCheckout} disabled={cartItems.length === 0}>
            Check-out
            </Button>
        </div>
        </Container>
    </div>
  );
}

export default Cart;
