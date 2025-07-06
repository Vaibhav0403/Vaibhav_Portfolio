// src/pages/ProjectDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import '../css/ProjectDetailPage.css';

const ProjectDetailPage = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <h2>Project Not Found!</h2>; // Handle case where project ID is invalid
  }

  return (
    <section className="project-detail-page">
      <Link to="/projects" className="back-to-projects">← Back to Projects</Link>

      <h1>{project.title}</h1>
      <p className="project-detail-category">{project.category}</p>

      {project.liveDemoLink && (
        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn-live-demo">View Live Demo</a>
      )}
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-github-repo">View on GitHub</a>
      )}

      <div className="project-overview">
        <h2>Overview</h2>
        <p>{project.fullDescription}</p> {/* Use the detailed description */}
      </div>

      <div className="technologies-used">
        <h3>Technologies Used</h3>
        <div className="tech-pills-container">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>

      {project.screenshots && project.screenshots.length > 0 && (
        <div className="project-screenshots">
          <h3>Screenshots / Visuals</h3>
          <div className="screenshot-grid">
            {project.screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`${project.title} Screenshot ${index + 1}`} />
            ))}
          </div>
        </div>
      )}

      {project.challenges && project.challenges.length > 0 && (
        <div className="project-challenges">
          <h3>Challenges & Solutions</h3>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>**Challenge:** {challenge}</li>
            ))}
            {project.solutions.map((solution, index) => (
              <li key={index}>**Solution:** {solution}</li>
            ))}
          </ul>
        </div>
      )}

      {project.impact && project.impact.length > 0 && (
        <div className="project-impact">
          <h3>Impact & Results</h3>
          <ul>
            {project.impact.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {project.lessonsLearned && (
        <div className="project-lessons">
          <h3>Lessons Learned</h3>
          <p>{project.lessonsLearned}</p>
        </div>
      )}

    </section>
  );
};

export default ProjectDetailPage;