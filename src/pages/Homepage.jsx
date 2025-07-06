// src/pages/HomePage.jsx
import React from 'react';
import '../css/Homepage.css'; // Optional: for specific Home page styles
// import profilePicture from '../assets/your-profile-pic.jpg'; // If you have a profile picture in assets

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="hero-section">
        {/* Optional: Add a subtle background image or video */}
        {/* <img src={profilePicture} alt="Vaibhav's Profile" className="profile-picture" /> */}
        <h1 className="hero-title">Hello, I'm Vaibhav.</h1>
        <p className="hero-tagline">
          A passionate <span className="highlight">[Your Primary Profession/Skill, e.g., Full-Stack Developer]</span>
          crafting <span className="highlight">[What you craft, e.g., efficient and user-centric web applications]</span>.
        </p>
        <p className="hero-description">
          With a strong foundation in [mention 1-2 key tech stacks/areas, e.g., React, Node.js, and data analysis],
          I love transforming complex problems into elegant solutions. Explore my projects to see how I bring ideas to life.
        </p>
        <div className="cta-buttons">
          <a href="/projects" className="btn btn-primary">View My Work</a>
          <a href="/contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>

      {/* Optional: Brief "About" snippet or "Skills" highlight */}
      <div className="intro-sections">
        <div className="intro-card">
          <h3>What I Do</h3>
          <p>I specialize in building robust and scalable web applications, focusing on intuitive user experiences and clean, maintainable code.</p>
        </div>
        <div className="intro-card">
          <h3>My Expertise</h3>
          <ul>
            <li>React.js & Frontend Development</li>
            <li>Node.js & Backend APIs</li>
            <li>Database Management (SQL/NoSQL)</li>
            <li>[Another key skill, e.g., Cloud Deployment, UI/UX Principles]</li>
          </ul>
        </div>
      </div>

      {/* Optional: Featured Projects (showcase 1-3 top projects) */}
      {/* You'd import a ProjectCard component here and map over a few project data objects */}
      {/*
      <div className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          <ProjectCard project={yourTopProject1} />
          <ProjectCard project={yourTopProject2} />
        </div>
        <a href="/projects" className="btn btn-tertiary">See All Projects</a>
      </div>
      */}

    </section>
  );
};

export default HomePage;