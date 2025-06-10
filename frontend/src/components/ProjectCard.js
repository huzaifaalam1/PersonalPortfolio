import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, image, website, source, status }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img variant="top" src={image} alt={`${title} preview`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-center">
          {title}
          <Badge bg={status === 'Live' ? 'success' : 'secondary'}>
            {status}
          </Badge>
        </Card.Title>

        <div className="mt-auto d-flex justify-content-between">
          <Button
            variant="primary"
            href={website}
            target="_blank"
            disabled={!website}
          >
            <FaExternalLinkAlt className="me-2" />
            Visit Website
          </Button>
          <Button variant="dark" href={source} target="_blank">
            <FaGithub className="me-2" />
            Source Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
