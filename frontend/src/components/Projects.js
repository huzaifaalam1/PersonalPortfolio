import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: 'MyCampusRewards',
    image: '/images/mycampusrewards.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/HackArizona',
    status: 'Comming Soon'
  },
  {
    title: 'Weather App',
    image: '/images/weather.png',
    website: 'https://weather-app.example.com',
    source: 'https://github.com/huzaifaalam1/weather-app',
    status: 'Live'
  },
  {
    title: 'InfluencerConnect',
    image: '/images/connect.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/InfluencerConnect',
    status: 'Comming Soon'
  },
  {
    title: 'Personal Portfolio',
    image: '/images/portfolio.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/PersonalPortolio',
    status: 'Comming Soon'
  },
  {
    title: 'Twiiter Sample App',
    image: '/images/sample.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/RubyRailsTraining',
    status: 'Comming Soon'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {projectList.map((project, index) => (
            <Col key={index}>
              <ProjectCard
                title={project.title}
                image={project.image}
                website={project.website}
                source={project.source}
                status={project.status}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
