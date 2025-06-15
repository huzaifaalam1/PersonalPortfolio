import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { db } from '../firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', variant: '' });

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ message: '', variant: '' }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Sending...', variant: 'info' });

    try {
      await addDoc(collection(db, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: Timestamp.now(),
      });

      setStatus({ message: 'Message sent! Thanks for reaching out.', variant: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatus({ message: 'Oops, something went wrong. Please try again later.', variant: 'danger' });
    }
  };

  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={status.variant === 'info'}>
              Send Message
            </Button>

            {status.message && (
              <Alert variant={status.variant} className="mt-3">
                {status.message}
              </Alert>
            )}
          </Form>
        </Col>

        <Col md={6} className="text-center mt-4 mt-md-0">
          <p>You can also reach me on:</p>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/huzaifaalam1" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://linkedin.com/in/syed-huzaifa-alam" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="mailto:huzaifaalam@arizona.edu">
              <FaEnvelope size={30} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
