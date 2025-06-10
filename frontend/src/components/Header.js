// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Syed Muhammad Huzaifa Alam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/huzaifaalam1" target="_blank" rel="noopener noreferrer">
              GitHub
            </Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
