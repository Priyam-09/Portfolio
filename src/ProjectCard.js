
import React from "react";
import "./App.css"; 

const ProjectCard = ({ image, title, desc, techs, codeLink, demoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tech-stack">
        {techs.map((tech, index) => (
          <span key={index} className="badge">{tech}</span>
        ))}
      </div>
      <div className="btn-group">
        <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn code-btn">Code</a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn demo-btn">Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;