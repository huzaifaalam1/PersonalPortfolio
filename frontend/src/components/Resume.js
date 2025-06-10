import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FiDownload } from 'react-icons/fi';


const Resume = () => {
  return (
    <section id="resume" className="bg-white py-5">
      <Container className="text-center">
        <h2 className="mb-4">Download My Resume</h2>
        <Button variant="primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="mt-3 px-5 py-2"
        >
          <FiDownload size={24} />
        </Button>
      </Container>
    </section>
  );
};

export default Resume;
