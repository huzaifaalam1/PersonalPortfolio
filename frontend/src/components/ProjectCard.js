import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, website, source, category, featured, prototype, privateRepository, stack, number }) => {
  return (
    <Card className={`project-card ${featured ? 'project-featured' : ''}`}>
      <div className="project-visual">
        <span className="project-number">{number}</span>
        {image ? <Card.Img variant="top" src={image} alt={`${title} preview`} loading="lazy" /> : <div className="terminal-art"><div className="terminal-bar"><i /><i /><i /><span>devops-agent / terminal</span></div><div className="terminal-body"><span className="terminal-comment"># infrastructure, with intention</span><p><b>❯</b> devops-agent scan ./next-app</p><span>✓ Repository analyzed</span><span>✓ Docker configuration generated</span><span>✓ Readiness checks passed</span><p><b>❯</b> Ready for your approval<span className="terminal-cursor">▌</span></p></div></div>}
      </div>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex flex-wrap gap-2 mb-3">
          {featured && <Badge bg="primary">Featured</Badge>}
          {category && <Badge bg="light" text="dark">{category}</Badge>}
          {website && <Badge bg="success">Live Demo</Badge>}
          {source && !privateRepository && <Badge bg="secondary">Source Available</Badge>}
          {privateRepository && <Badge bg="secondary">Private Repository</Badge>}
          {prototype && <Badge bg="warning" text="dark">Prototype</Badge>}
        </div>
        <Card.Title as="h3" className="project-title">{title}</Card.Title>
        {description && <div className="project-description"><p>{description.split('\n\n')[0]}</p>{description.includes('\n\n') && <details><summary>Inside the project <span>+</span></summary><div>{description.split('\n\n').slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></details>}</div>}
        {stack && <div className="tech-tags">{stack.split(' • ').map(tech => <span key={tech}>{tech}</span>)}</div>}
        <div className="mt-auto d-flex flex-wrap gap-2">
          {website && (
            <Button variant="primary" href={website} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="me-2" aria-hidden="true" />Live Demo
            </Button>
          )}
          {source && !privateRepository && (
            <Button variant="dark" href={source} target="_blank" rel="noopener noreferrer">
              <FaGithub className="me-2" aria-hidden="true" />Source Code
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
