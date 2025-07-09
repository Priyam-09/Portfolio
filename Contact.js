// src/Contact.js
import React from 'react';
import './App.css';
import {FontAwesome, FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className='g'>Get In Touch</h2>
      <p>Have a project in mind? Let’s work together to bring your ideas to life!</p>

      <div className="contact-info">
        <div>
          <h4>Email</h4>
          <p>cse.24bcsf39@silicon.ac.in</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>Bhubaneswar</p>
        </div>
      </div>

      <div className="social-links">
  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faLinkedin} style={{color:'#008080'}} /> LinkedIn
  </a>
  <a href="https://github.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faGithub} style={{color:'#008080'}}/> GitHub
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faTwitter} style={{color:'#008080'}}/> Twitter
  </a>
</div>

      <footer className="footer">
        <p>© 2025 John Doe. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;