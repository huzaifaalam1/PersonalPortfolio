// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Stop waving after 1s

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="home" className="bg-light text-dark min-vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <Col md={6} className="d-flex flex-column justify-content-center p-5">
              <h1 className="display-4">
                Hi, I am Huzaifa{' '}
                <span className={`wave-emoji ${animate ? 'wave-on-load' : ''}`}>👋</span>
              </h1>
              <p className="lead">
                I'm a software developer passionate about building full-stack web apps and learning new technologies.
              </p>
            </Col>
            <Col md={6} className="d-none d-md-block p-5">
              <img
                src="/aboutme.jpg"
                alt="Developer illustration"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about" className="py-5 bg-white">
        <Container>
          <h2 className="mb-4">About Me 🙋🏽</h2>
          <p>
            Hello! My name is Syed Muhammad Huzaifa Alam. I prefer to go by Huzaifa. My pronouns are He/Him. I began my journey in the field of Computer Science in the fall of 2023 when I came to study at the University of Arizona. I am deeply fascinated by how technology shapes our world and love building software that solves real problems or makes the world an exciting place.
          </p>
          <p>
            Through my academic journey and personal projects, I've gained experience with multiple programming languages and modern frameworks. I am eager to learn new tools and techniques. This portfolio serves as my journal to document my journey through the tech world/industry I want to be part of. Beyond coding, I enjoy collaborating with others and sharing knowledge to build better solutions together.
          </p>
          <p>
            When I am not programming, you can find me exploring new tech trends, playing soccer with friends, or listening to music.
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
