// src/pages/ProjectsPage.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard'; // We'll create this component
import projectsData from '../data/projectsData'; // We'll create this data file
import '../css/Projectspage.css';

const ProjectsPage = () => {
  return (
    <section className="projects-page">
      <h1>My Projects</h1>
      <p className="page-description">
        Here's a selection of my work, demonstrating my skills in [your key areas, e.g., web development, UI/UX design, data analysis]. Each project is a case study of problem-solving and execution.
      </p>

      <div className="project-grid">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Optional: "Work in Progress" or "Older Projects" section */}
      {/*
      <div className="additional-projects">
        <h2>More to Explore</h2>
        <p>I'm constantly learning and building. Check back often for new additions!</p>
        <p>You can also view my code on <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </div>
      */}
    </section>
  );
};

export default ProjectsPage;