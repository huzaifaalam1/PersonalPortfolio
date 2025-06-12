import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: 'MyCampusRewards',
    image: '/mycampusrewards.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/HackArizona',
    status: 'Not Live Yet'
  },
  {
    title: 'Weather App',
    image: '/weather.png',
    website: 'https://weather-app.example.com',
    source: 'https://github.com/huzaifaalam1/weather-app',
    status: 'Not Live Yet'
  },
  {
    title: 'InfluencerConnect',
    image: '/connect.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/InfluencerConnect',
    status: 'Not Live Yet'
  },
  {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    website: 'personal-portfolio-chi-fawn.vercel.app',
    source: 'https://github.com/huzaifaalam1/PersonalPortfolio',
    status: 'Live'
  },
  {
    title: 'Twiiter Sample App',
    image: '/sample.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/RubyRailsTraining',
    status: 'Not Live Yet'
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
