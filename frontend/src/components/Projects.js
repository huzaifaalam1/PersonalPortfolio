import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    title: 'MyCampusRewards',
    description: `MyCampusRewards is a gamified web application designed to boost student engagement at the University of Arizona by rewarding involvement in campus life. Students earn points by attending events, joining clubs, and participating in student-led activities, which contribute toward league milestones, leaderboard rankings, and badge-based multipliers. The platform features a dynamic milestone system that reflects engagement levels, a leaderboard showcasing the top five active students, and an activity log that tracks recent point-earning actions. Users can enhance their rewards by purchasing Bronze, Silver, or Gold badges, each offering increasing point multipliers. A built-in chatbot assistant guides users on how to earn points, while authentication is handled securely through university credentials using Firebase Auth, with user data managed in Firestore. \n\nTech Stack: React • Node.js • Express • Firebase (Auth & Firestore)`,
    image: '/mycampusrewards.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/HackArizona',
    status: 'Not Live Yet'
  },
  {
    title: 'Weather App',
    description: 'My first project. A weather application that fetches real-time weather data for any location worldwide using a public weather API. It supports translation of the weather information into six different languages, making it accessible to a global user base. The app allows users to search by city and displays key weather metrics such as temperature, humidity, wind speed, and general conditions. \n\nTech Stack: React • Node.js • Firebase',
    image: '/weather-app.png',
    website: 'https://weather-app.example.com',
    source: 'https://github.com/huzaifaalam1/weather-app',
    status: 'Not Live Yet'
  },
  {
    title: 'InfluencerConnect',
    description: 'This full-stack MERN web application connects companies with influencers to facilitate campaign collaborations. Influencers can sign up or log in to browse available campaigns, apply through a streamlined form capturing personal details like name, date of birth, height, and experience, and manage their profiles by updating their picture, bio, interests, and additional photos. Companies can log in to create and manage campaigns with details such as title, budget, and dates, while conveniently viewing and handling influencer applications through an intuitive dashboard. \n\nTech Stack: React • Node.js • Express • MongoDB',
    image: '/influencerconnect.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/InfluencerConnect',
    status: 'Not Live Yet'
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience as a software engineer. I made this document my journey as I continue through my exciting career learning and exploring new technologies and to provide an easy way for recruiters, developers, and potential collaborators to learn about my work and get in touch. The site features smooth navigation, clear sections for skills and contact information, and integrates a contact form for direct communication. \n\nTech Stack: React • Bootstrap • Express • Node.js',
    image: '/portfolio.png',
    website: 'personal-portfolio-chi-fawn.vercel.app',
    source: 'https://github.com/huzaifaalam1/PersonalPortfolio',
    status: 'Live'
  },
  {
    title: 'Twiiter Sample App',
    description: 'A simple Twitter-like social media application built with Ruby on Rails as part of my learning journey with the framework. The app allows users to sign up, create posts (tweets), follow other users, and view a timeline of tweets. This project helped me understand core Rails concepts such as MVC architecture, RESTful routing, database associations, and user authentication. \n\nTech Stack: Ruby on Rails • PostgreSQL • Bootstrap',
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
                description={project.description}
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
