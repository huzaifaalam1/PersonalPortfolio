import React from 'react';
import { Container } from 'react-bootstrap';
import './Experiences.css';

const Experiences = () => {
  const milestones = [
    {
      title: "SunHacks",
      date: "October 2023",
      description:
        "It was my freshman year first semester and I went to a hackathon in ASU. The hackathon introduced me to Web Development. I teamed up with 2 other students and created a Weather Application. While it wasn't very innovative and unique, it further piqued my interest in the CS world.",
    },
    {
      title: "Web Developer Intern",
      date: "June 2024 - July 2024",
      description:
        "It was my first internship back home in Karachi, Pakistan working as Web Developer. I created multiple frontend user interfaces using HTML, CSS & Bootstrap and complex forms that required intensive JavaScript for companies such as Suzuki Pakistan, Honda Pakistan and Shan Foods.",
    },
    {
      title: "Undergraduate Teaching Assistant",
      date: "January 2025 - June 2025",
      description:
        "I had the opportunity to be Teaching Assistant for CSC210 Software Development. I collaborated with other TAs and the Professor to help students understand key Java concepts through lessons, lab sessions and weekly Office Hours.",
    },
    {
      title: "HackArizona",
      date: "March 2025",
      description:
        'I teamed up with 2 of my very good friends to compete in the "Improve the UA" challenge. We built MyCampusRewards — a full-stack web app that acts as a reward system for students engaging in events across campus. We received first place for our effort! Tech used: React.js, Express.js, Firebase, and AWS Bedrock for our AI chatbot.',
    },
    {
      title: "BIO5 Institute",
      date: "April 2025 - Present",
      description:
        "I joined the BIO5 Research Institute as an IT Student Developer. I use Ruby on Rails and Python to maintain tools that support researchers. I have gained real-world experience in CLI tools, git, technical workflows like Sprints, Azure DevOps, and daily standups.",
    },
    {
      title: "Komatsu Job Shadow",
      date: "May 2025",
      description:
        "I visited Komatsu HQ in Tucson, Arizona to shadow multiple software engineers. I observed real-world development practices, collaborated with professionals, and learned about the working environment in a large engineering company.",
    },
    {
      title: "Netflix Job Shadow",
      date: "June 2025",
      description:
        "I visited Netflix HQ in Los Gatos, California to shadow a UArizona alum. I learned about the infrastructure, device certification, and testing within the TV engineering team. The collaborative and supportive work culture at Netflix really stood out to me.",
    },
  ];

  return (
    <section id="experiences" className="py-5 bg-light">
      <Container>
        <h2 className="mb-5">My Journey 📈</h2>
        <div className="timeline">
          {milestones.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h5>{item.title}</h5>
                <small className="text-muted">{item.date}</small>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experiences;
