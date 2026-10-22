import React from 'react';
import { Container } from 'react-bootstrap';
import './Experiences.css';

const Experiences = () => {
  const milestones = [
    {
        "title": "SunHacks — Where It All Started",
        "date": "October 2023",
        "location": "Tempe, Arizona",
        "description": "My first semester at the University of Arizona, I decided to attend SunHacks at Arizona State University without much experience building real applications. I teamed up with two other students to create a weather application, and while it wasn't anything revolutionary, it was my first real introduction to web development and building something from scratch. That weekend sparked my interest in software engineering and made me realize how much I enjoyed turning an idea into a working product."
    },
    {
        "title": "Web Developer Intern — My First Industry Experience",
        "date": "June 2024 – July 2024",
        "location": "Karachi, Pakistan",
        "description": "I returned home to Karachi for my first professional experience as a Web Developer Intern. I developed responsive interfaces and interactive forms using HTML, CSS, Bootstrap, and JavaScript for projects involving brands such as Suzuki Pakistan, Honda Pakistan, and Shan Foods. It was my first exposure to working with real client requirements, maintaining code quality, and delivering software in a professional environment."
    },
    {
        "title": "Undergraduate Teaching Assistant — Learning by Teaching",
        "date": "January 2025 – June 2025",
        "location": "University of Arizona",
        "description": "I became an Undergraduate Teaching Assistant for CSC 210: Software Development, where I helped students understand Java, object-oriented programming, and fundamental software engineering concepts. Through lab sessions, office hours, and collaboration with other teaching assistants, I discovered how much I enjoyed explaining technical concepts and helping others grow. Teaching also strengthened my own understanding of programming and taught me how important clear communication is in engineering."
    },
    {
        "title": "Hack Arizona 2025 — First Place!",
        "date": "March 2025",
        "location": "University of Arizona",
        "description": "I teamed up with two close friends to compete in Hack Arizona's \"Improve the UA\" challenge. We built MyCampusRewards, a gamified platform designed to encourage students to participate in campus activities through points, leaderboards, rewards, and an AI-powered assistant.\n\nUsing React, Express, Firebase, and AWS Bedrock, we turned our idea into a working prototype and won first place in our challenge. It remains one of my favorite experiences because it showed me what a small, motivated team can build under tight deadlines."
    },
    {
        "title": "BIO5 Research Institute — Building Software for Real Users",
        "date": "April 2025 – December 2025",
        "location": "University of Arizona",
        "description": "I joined the BIO5 Research Institute as a Software Developer, marking my transition from personal projects to production software engineering.\n\nI developed and maintained internal applications supporting over 300 researchers and staff, working across Ruby on Rails, Django, Vue.js, Python, and relational databases. One of my major areas of work involved integrating and automating workflows around Clarity LIMS, including sample routing, laboratory queues, workflow stages, and results processing.\n\nI also worked on debugging APIs, maintaining existing systems, improving application reliability, and supporting deployments. This experience taught me that software engineering is as much about understanding complex systems, maintaining reliability, and supporting users as it is about writing new features."
    },
    {
        "title": "Komatsu — Learning from Industry Engineers",
        "date": "May 2025",
        "location": "Tucson, Arizona",
        "description": "I had the opportunity to visit Komatsu's headquarters in Tucson and shadow software engineers working in a large engineering organization. I observed their development processes, learned about collaboration across technical teams, and gained a better understanding of how software supports complex industrial operations."
    },
    {
        "title": "Netflix — A Look Inside Large-Scale Engineering",
        "date": "2025",
        "location": "Los Gatos, California",
        "description": "I visited Netflix's headquarters to shadow a University of Arizona alumnus working in Device Certification. I learned about the engineering and testing processes behind delivering a consistent Netflix experience across different devices, including the infrastructure and validation workflows involved.\n\nSeeing how engineers approached reliability, testing, and collaboration at that scale gave me a new perspective on the kind of engineering problems I want to work on in the future."
    },
    {
        "title": "University Information Technology Services — Engineering at Scale",
        "date": "December 2025 – Present",
        "location": "University of Arizona",
        "description": "I transitioned into a Software Developer role at University Information Technology Services, where I'm helping modernize software infrastructure for the university's research laboratories.\n\nMy primary work involves developing a Laboratory Information Management System (LIMS) that centralizes reagent management, inventory, service requests, and costing workflows across 12 laboratories and 400+ products.\n\nWorking with Django REST Framework, Vue.js, MariaDB, and Docker, I've developed backend APIs, built responsive interfaces, and improved existing workflows. My contributions have helped reduce UI latency by 25%, automate processing across 100+ files, and cut local development setup time by 50% through containerization.\n\nThis role has pushed me to think more deeply about system architecture, data modeling, API design, and building maintainable software that other people depend on every day."
    },
    {
        "title": "AMD AI Agents Certifications — Exploring Agentic Systems",
        "date": "September – October 2026",
        "location": "",
        "description": "As my interest in AI infrastructure grew, I completed two AMD AI Agents certifications focused on building and deploying agentic systems.\n\nThrough hands-on work with Model Context Protocol (MCP), PydanticAI, vLLM, Ollama, and Google Agent Development Kit (ADK), I explored how language models interact with external tools, coordinate workflows, and run on open-source inference infrastructure.\n\nThese experiences strengthened my interest in building practical AI systems that go beyond simple chatbot interfaces."
    }
];

  return (
    <section id="experiences" className="experience-section">
      <Container>
        <div className="section-heading"><span className="eyebrow">03 / THE JOURNEY</span><h2>One thing led<br /><span>to the next.</span></h2><p>From a first hackathon to software people depend on.</p></div>
        <div className="timeline">
          {[...milestones].reverse().map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <small className="text-muted">{item.date}{item.location && ` | ${item.location}`}</small>
                {item.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-3">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
