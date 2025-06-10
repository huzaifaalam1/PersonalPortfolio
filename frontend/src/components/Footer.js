// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-5">
      <Container>
        <small>© {new Date().getFullYear()} Syed Muhammad Huzaifa Alam. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
