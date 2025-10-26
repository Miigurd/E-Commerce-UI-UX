import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <Container>
        <Row>
          {/* Brand Section */}
          <Col xs={12} md={4} className="mb-4">
            <h5>NextUp</h5>
            <p className="small mb-0">
              Where every scent feels like home.
            </p>
          </Col>

          {/* Discovery Section */}
          <Col xs={6} md={4} className="mb-4">
            <h6>Discovery</h6>
            <ul className="list-unstyled small mb-0">
              <li>New season</li>
              <li>Most searched</li>
              <li>Most sold</li>
            </ul>
          </Col>

          {/* Info Section */}
          <Col xs={6} md={4} className="mb-4">
            <h6>Info</h6>
            <ul className="list-unstyled small mb-0">
              <li>Contact us</li>
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;