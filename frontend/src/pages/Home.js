// src/pages/Home.js
import React from 'react';
import { FiArrowUpRight, FiArrowDown, FiTerminal } from 'react-icons/fi';
import { Container } from 'react-bootstrap';
import '../App.css'

const Home = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-intro"><span className="status-dot" /> SOFTWARE DEVELOPER · TUCSON, AZ</div>
        <h1>Curiosity into code.<br />Ideas into <span>impact.</span></h1>
        <div className="hero-bottom">
          <div className="hero-copy"><p>Hey, I'm Huzaifa. I build software for real people,<br className="desktop-break" /> research labs, and whatever comes next.</p><a className="pill-button" href="#projects">Explore my work <FiArrowUpRight /></a><a className="text-link" href="https://github.com/huzaifaalam1" target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a></div>
          <div className="hero-note"><FiTerminal /><span>FULL STACK THINKING.<br />ENDLESS POSSIBILITIES.</span></div>
        </div>
        <a href="#about" className="hero-scroll"><FiArrowDown /> A little about me</a>
        <span className="hero-coordinate" aria-hidden="true">32.2226° N / 110.9747° W</span>
      </section>
      <div className="specialty-strip" aria-label="Areas of interest"><span>FULL STACK DEVELOPMENT</span><i>✳</i><span>AI AGENTS</span><i>✳</i><span>DEVELOPER INFRASTRUCTURE</span><i>✳</i><span>DISTRIBUTED SYSTEMS</span></div>

      <section id="about" className="about-section">
        <Container>
          <div className="section-heading"><span className="eyebrow">01 / THE PERSON BEHIND THE CODE</span><h2>Always curious.<br /><span>Always building.</span></h2></div>
          <div className="about-layout"><aside className="about-aside"><div className="portrait-wrap"><img src="/aboutme.jpg" alt="Huzaifa Alam" loading="lazy" /><span className="portrait-tag">Hello, world. ↗</span></div><div className="about-caption"><span>UNIVERSITY OF ARIZONA</span><strong>CS '27 · Tucson, AZ</strong></div><div className="about-facts"><div><strong>12</strong><span>biological research labs</span></div><div><strong>1st</strong><span>Hack Arizona '25</span></div></div></aside><div className="about-copy">
          <p>
            Hey! I'm <strong>Huzaifa</strong>, a Computer Science student at the University of Arizona, graduating in May 2027, and a software developer who loves turning complicated problems into software that actually works.
          </p>
          <p>
            My journey started with a simple weather app at my first hackathon in 2023. Since then, I've gone from building websites to developing production software used by researchers, designing laboratory management systems, and exploring how AI agents can automate real engineering workflows.
          </p>
          <p>
            Currently, I'm a <strong>Software Developer at University Information Technology Services (UITS)</strong>, where I help build full-stack systems supporting research laboratories at the University of Arizona. Previously, I worked at the BIO5 Research Institute, developing internal applications and automation tools for researchers. Across these roles, I've worked with Python, Django, Vue.js, Ruby on Rails, Docker, and AWS, learning what it takes to build software beyond just getting it to run locally.
          </p>
          <p>
            Lately, I've been particularly interested in <strong>AI agents, developer infrastructure, and distributed systems</strong>. I'm fascinated by the idea of building software that doesn't just respond to users but can reason through problems, interact with tools, and execute complex workflows safely. My AI DevOps Cloud Agent is one of the projects where I've been exploring exactly that.
          </p>
          <p>
            Outside of work, I've won Hack Arizona 2025 with two friends, served as a teaching assistant for Software Development, and had opportunities to learn from engineers at companies like Netflix and Komatsu.
          </p>
          <p>
            When I'm not coding, you'll probably find me watching the NBA or soccer, playing soccer with friends, discovering new music, or going down a rabbit hole about some new technology.
          </p>
          <p>
            <strong>I'm always looking to learn, build things that matter, and work with people who are just as excited about technology as I am.</strong>
          </p>
          </div></div>
        </Container>
      </section>
    </>
  );
};

export default Home;
