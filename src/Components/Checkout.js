import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(0); // Free shipping
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);

    const total = savedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, []);

  const handleCheckout = () => {
    // ✅ Clear cart after checkout
    localStorage.removeItem("cart");
    alert("Thank you for your purchase!");
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row>
        {/* Left Section: Form */}
        <Col md={7}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="email" placeholder="Email or mobile phone number" />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <small>
                Do you have an account?{" "}
                <Link to="/login" className="text-success fw-semibold">Login</Link>
              </small>
            </div>

            <h5 className="fw-semibold mt-4 mb-3">Shipping Address</h5>

            <Row>
              <Col md={6}>
                <Form.Control placeholder="Name" className="mb-3" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="Second Name" className="mb-3" />
              </Col>
            </Row>

            <Form.Control placeholder="Address and number" className="mb-3" />
            <Form.Control placeholder="Shipping note (optional)" className="mb-3" />

            <Row>
              <Col md={6}>
                <Form.Control placeholder="City" className="mb-3" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="Postal Code" className="mb-3" />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Control placeholder="Province" className="mb-3" />
              </Col>
              <Col md={6}>
                <Form.Control placeholder="Country/Region" className="mb-3" />
              </Col>
            </Row>

            <Form.Check
              type="checkbox"
              label="Save this information for a future fast checkout"
              className="mb-4"
            />

            <h5 className="fw-semibold mb-3">Shipping Method</h5>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <Form.Check type="radio" label="Standard Shipping" checked readOnly />
              </div>
              <span className="fw-semibold text-success">Free</span>
            </div>

            <div className="d-flex justify-content-between">
              <Link to="/cart" className="text-success fw-semibold">
                Back to cart
              </Link>
              <Button
                variant="success"
                className="px-5"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Check out
              </Button>
            </div>
          </Form>
        </Col>

        {/* Right Section: Summary */}
        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 bg-light">
            {/* ✅ Show all items */}
            {cartItems.length === 0 ? (
              <p className="text-center text-muted">Your cart is empty.</p>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className="d-flex align-items-center mb-3 border-bottom pb-2">
                    <div className="position-relative me-3">
                      <img
                        src={process.env.PUBLIC_URL + item.image}
                        alt={item.title}
                        width="70"
                        className="rounded"
                      />
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-0 fw-semibold">{item.title}</p>
                      <p className="text-success mb-0">₱{item.price}</p>
                    </div>
                  </div>
                ))}

                <Form.Control placeholder="Coupon code" className="mb-3" />
                <Button variant="secondary" className="w-100 mb-4">
                  Add code
                </Button>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₱{subtotal}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>₱{shipping}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span className="text-success">₱{subtotal + shipping}</span>
                </div>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
