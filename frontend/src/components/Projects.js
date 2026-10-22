import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projectList = [
  {
    "title": "AI DevOps Cloud Agent",
    "description": "An AI-assisted DevOps command-line tool designed to simplify containerization, deployment diagnostics, and infrastructure troubleshooting for Next.js applications.\n\nThe agent analyzes repositories, generates Docker configurations, validates deployments through HTTP readiness checks, and uses Groq-hosted language models to produce structured, evidence-backed diagnostics.\n\nUnlike an unrestricted AI agent, the system follows a supervised scan → analyze → propose → approve → execute → validate workflow, keeping potentially destructive operations behind explicit user approval. It includes bounded automated repairs, rollback support, secret redaction, audit journals, and process timeouts.\n\nBuilt with reliability and safety in mind, the project has been validated through 181 automated tests and Docker smoke tests. It reflects my interest in combining AI reasoning with deterministic engineering workflows to build developer tools that are both useful and trustworthy.",
    "stack": "Python • Typer • Rich • Groq API • Docker • Docker Compose • Codex",
    "source": "https://github.com/huzaifaalam1/devops-agent",
    "image": null,
    "category": "AI / Infrastructure",
    "featured": true,
    "prototype": false,
    "website": null
  },
  {
    "title": "AgenticMarketplace",
    "description": "An AI-assisted B2B marketplace designed to make business transactions more transparent, secure, and efficient.\n\nI led a team of four in building a full-stack platform that supports supplier discovery, contract generation, negotiation, authenticated messaging, and milestone-based transaction workflows.\n\nOne of the platform's core features is its AI-assisted trust-scoring system, which evaluates transaction history, dispute rates, and behavioral signals to help buyers and suppliers assess potential risks before entering business relationships.\n\nThe application also provides centralized deal tracking, allowing both parties to manage agreements, monitor transaction progress, and maintain a verifiable history of deal activity.\n\nThis project gave me hands-on experience with full-stack architecture, collaborative development, database design, and incorporating AI into practical business workflows.",
    "stack": "Next.js • React • Supabase • PostgreSQL • Gemini • Vercel • Codex",
    "source": "https://github.com/huzaifaalam1/AgenticMarketplace",
    "image": "/marketplace.png",
    "category": "Full Stack / AI",
    "featured": true,
    "prototype": false,
    "website": null
  },
  {
    "title": "SwipeBite",
    "description": "A Tinder-inspired restaurant discovery platform that makes finding somewhere to eat faster, more interactive, and personalized.\n\nInstead of scrolling through endless restaurant listings, users swipe right or left on restaurant cards to indicate their preferences. Behind the scenes, a machine-learning recommendation pipeline ranks future suggestions using user behavior, restaurant attributes, and previously expressed preferences.\n\nThe platform integrates Google Places API to retrieve restaurant information, including ratings, photos, locations, and other metadata. Supabase handles authentication, user profiles, and persistent preferences, allowing users to maintain their personalized experience across sessions.\n\nSwipeBite combines my interest in full-stack development, recommendation systems, and building intuitive user experiences around real-world problems.",
    "stack": "Next.js • React • Python • Machine Learning • Supabase • Google Places API",
    "source": "https://github.com/huzaifaalam1/swipebite",
    "image": "/swipe.png",
    "category": "Full Stack / ML",
    "featured": true,
    "prototype": false,
    "website": null
  },
  {
    "title": "MyCampusRewards",
    "description": "An award-winning gamified platform designed to increase student engagement and encourage participation in campus activities at the University of Arizona.\n\nBuilt during Hack Arizona 2025 with two teammates, MyCampusRewards allows students to earn points by attending events, joining organizations, and participating in campus activities. The platform includes leaderboards, achievement milestones, activity tracking, and Bronze, Silver, and Gold reward badges with different point multipliers.\n\nWe also integrated an AI-powered chatbot using AWS Bedrock to help students navigate the platform and discover ways to earn rewards. Firebase Authentication and Firestore provide user management and persistent data storage.\n\nOur project won first place in the \"Improve the UA\" challenge, making it one of the most memorable milestones in my software engineering journey.",
    "stack": "React • Node.js • Express • Firebase Auth • Firestore • AWS Bedrock",
    "source": "https://github.com/huzaifaalam1/HackArizona",
    "image": "/mycampusrewards.png",
    "category": "Hackathon Winner",
    "featured": false,
    "prototype": true,
    "website": null
  },
  {
    title: 'InfluencerConnect',
    description: 'This full-stack MERN web application connects companies with influencers to facilitate campaign collaborations. Influencers can sign up or log in to browse available campaigns, apply through a streamlined form capturing personal details like name, date of birth, height, and experience, and manage their profiles by updating their picture, bio, interests, and additional photos. Companies can log in to create and manage campaigns with details such as title, budget, and dates, while conveniently viewing and handling influencer applications through an intuitive dashboard. \n\nTech Stack: React • Node.js • Express • MongoDB',
    image: '/influencerconnect.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/InfluencerConnect',
    category: "Full Stack"
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website showcasing my projects, skills, and experience as a software engineer. I made this to document my journey as I continue through my exciting career learning and exploring new technologies and to provide an easy way for recruiters, developers, and potential collaborators to learn about my work and get in touch. The site features smooth navigation, clear sections for skills and contact information, and integrates a contact form for direct communication. \n\nTech Stack: React • Bootstrap • Firebase',
    image: '/portfolio.png',
    website: 'https://personal-portfolio-chi-fawn.vercel.app',
    source: 'https://github.com/huzaifaalam1/PersonalPortfolio',
    category: "Portfolio"
  },
  {
    title: 'Twitter Sample App',
    description: 'A simple Twitter-like social media application built with Ruby on Rails as part of my learning journey with the framework. The app allows users to sign up, create posts (tweets), follow other users, and view a timeline of tweets. This project helped me understand core Rails concepts such as MVC architecture, RESTful routing, database associations, and user authentication. \n\nTech Stack: Ruby on Rails • PostgreSQL • Bootstrap',
    image: '/sample.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/RubyRailsTraining',
    category: "Rails"
  },
  {
    title: 'Weather App',
    description: 'My first project. A weather application that fetches real-time weather data for any location worldwide using a public weather API. It supports translation of the weather information into six different languages, making it accessible to a global user base. The app allows users to search by city and displays key weather metrics such as temperature, humidity, wind speed, and general conditions. \n\nTech Stack: React • Node.js • Firebase',
    image: '/weather-app.png',
    website: '',
    source: 'https://github.com/huzaifaalam1/weather-app',
    category: "First Project"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="section-heading"><span className="eyebrow">02 / SELECTED WORK</span><h2>Built to solve.<br /><span>Made to explore.</span></h2><p>A few ideas I turned into working software.</p></div>
        <Row xs={1} md={2} lg={2} className="g-4">
          {projectList.map((project) => (
            <Col key={project.title}>
              <ProjectCard {...project} number={String(projectList.indexOf(project) + 1).padStart(2, '0')} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
