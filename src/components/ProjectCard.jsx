// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Projectcard.css'; // For styling your project cards

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.shortDescription}</p>
        <div className="project-tech-pills">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
        <Link to={project.link} className="btn-details">View Details</Link>
        {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github">GitHub</a>
        )}
        {project.liveDemoLink && (
            <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-demo">Live Demo</a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;