// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import '../css/Contactpage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a simple portfolio, you can use a service like Formspree.io
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
    alert('Thank you for your message! (Form submission logic would go here)');
    // Example using Formspree (requires setting up a Formspree form)
    // fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   if (data.ok) {
    //     alert('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     alert('Failed to send message.');
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('An error occurred. Please try again.');
    // });
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section className="contact-page">
      <h1>Get In Touch</h1>
      <p className="page-description">
        I'm always excited to discuss new projects, share ideas, or simply connect.
        Feel free to reach out through the form below or connect with me on social media.
      </p>

      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>My Details & Links</h2>
          <p>
            **Email:** <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            **LinkedIn:** <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a>
          </p>
          <p>
            **GitHub:** <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
          </p>
          {/* Optional: Other relevant links */}
          {/* <p>
            **Personal Website/Blog:** <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer">yourblog.com</a>
          </p> */}
          <p className="location">
            Based in Pimpri-Chinchwad, Maharashtra, India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;