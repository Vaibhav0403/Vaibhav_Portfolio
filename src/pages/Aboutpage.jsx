// src/pages/AboutPage.jsx
import React from 'react';
import '../css/Aboutpage.css';
// import profilePicture from '../assets/your-profile-pic.jpg'; // If not already on home page

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="about-hero">
        {/* <img src={profilePicture} alt="Vaibhav's Professional Photo" className="about-profile-picture" /> */}
        <h1>About Me: Vaibhav</h1>
        <p className="tagline">
          Building the future, one elegant solution at a time.
        </p>
      </div>

      <div className="about-content">
        <p className="bio-summary">
          Hello! I'm Vaibhav, a [Your Profession, e.g., Software Engineer] with a passion for [Your Passion, e.g., creating intuitive user experiences and scalable backend systems]. Based in [Your Location, e.g., Pimpri-Chinchwad, Maharashtra], I thrive on tackling challenging problems and turning innovative ideas into functional realities.
        </p>

        <div className="experience-section">
          <h2>My Journey & Experience</h2>
          <p>
            My journey into [e.g., software development] began [mention when/how, e.g., during my engineering studies at XYZ University], where I cultivated a strong foundation in [key areas, e.g., data structures, algorithms, and object-oriented programming]. Since then, I've had the opportunity to [mention brief work experience type, e.g., work on diverse projects ranging from dynamic web applications to robust API integrations].
          </p>
          <p>
            In my previous roles at [Previous Company Names, if applicable], I was responsible for [mention key responsibilities/achievements, e.g., developing and maintaining critical features, optimizing application performance, and collaborating with cross-functional teams]. My experience spans [mention 2-3 key technologies/domains, e.g., JavaScript ecosystems, cloud platforms, and agile methodologies].
          </p>
        </div>

        <div className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skill-categories">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <ul>
                <li>React.js, Redux, Context API</li>
                <li>HTML5, CSS3 (Sass/SCSS)</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>Responsive Design, UI/UX Principles</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <ul>
                <li>Node.js, Express.js</li>
                <li>Python (Flask/Django)</li>
                <li>RESTful APIs, GraphQL</li>
                <li>Database: MongoDB, PostgreSQL, MySQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git, GitHub/GitLab</li>
                <li>Docker, AWS/Azure/GCP (Basic)</li>
                <li>VS Code, Webpack, Vite</li>
                <li>Jira, Trello, Confluence</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <ul>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Adaptability, Continuous Learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional: Education, Certifications, Interests */}
        <div className="additional-info">
            <h2>Education</h2>
            <p>
                [Degree Name], [Major] <br/>
                [University Name], [City, State] - [Start Year] - [End Year]
            </p>
            {/* If you have certifications */}
            {/* <h2>Certifications</h2>
            <ul>
                <li>[Certification Name] - [Issuing Body]</li>
            </ul> */}
            {/* If you want to add a personal touch */}
            {/* <h2>Beyond the Code</h2>
            <p>
                When I'm not coding, you can find me [mention hobbies/interests, e.g., exploring new hiking trails, reading sci-fi novels, or experimenting with new recipes].
            </p> */}
        </div>

        <div className="contact-cta">
          <p>I'm always open to new opportunities and collaborations. Feel free to connect!</p>
          <a href="/contact" className="btn btn-primary">Connect with Vaibhav</a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;