import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); // ✅ Track quantity

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // ✅ Prevent going below 1
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1); // ✅ Increase quantity
  };

  if (!product) {
    return (
      <Container className="text-center my-5">
        <h3>Product not found</h3>
        <Link to="/" className="btn btn-success mt-3">
          Back to Products
        </Link>
      </Container>
    );
  }

  return (
    <>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img
              src={process.env.PUBLIC_URL + product.image}
              alt={product.title}
              className="img-fluid rounded-3"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
            <p className="mt-3 text-muted small">{product.description}</p>
            <p className="text-success fw-semibold">
              Free Shipping
            </p>
          </Col>

          <Col md={6}>
            <h3>{product.title}</h3>
            <h4 className="text-success fw-bold">₱{product.price}</h4>

            <div className="my-3">
              <label className="me-2">Quantity</label>
              <Button variant="outline-success" size="sm" className="me-1" onClick={handleDecrease}>
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button variant="outline-success" size="sm" className="ms-1" onClick={handleIncrease}>
                +
              </Button>
            </div>

            <Button variant="success" className="mt-3 w-100">
              Add to cart
            </Button>
          </Col>
        </Row>

        <hr className="my-5" />

        <div className="text-center">
          <Link to="/" className="btn btn-outline-success">
            Back to Products
          </Link>
        </div>
      </Container>

      <footer className="bg-dark text-light py-5 mt-5">
        <Container>
          <Row>
            <Col xs={12} md={4} className="mb-4">
              <h5>NextUp</h5>
              <p className="small">
                Your natural candle made for your home and for your wellness.
              </p>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <h6>Discovery</h6>
              <ul className="list-unstyled small">
                <li>New season</li>
                <li>Most searched</li>
                <li>Most sold</li>
              </ul>
            </Col>
            <Col xs={6} md={4} className="mb-4">
              <h6>Info</h6>
              <ul className="list-unstyled small">
                <li>Contact us</li>
                <li>Privacy Policies</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default ProductDetail;
