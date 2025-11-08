

import React from 'react';
import Navbar from './Navbar';
import './App.css';
import profileImg from './assets/profile.jpg'; 

function Header() {
  return (
    <header id="home" className="header-section">
      <Navbar />
      <div className="header-content">
        <div className="left">
          <h1>
            Hi, I'm <span className="highlight">Priyambada Dash</span>
          </h1>
          <p>| WEB DEVELOPER | CODER |</p>
          <div className="btn-group">
            <a href='#projects' className="btn-primary">View My Work</a>
            <a href='#contact' className="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="right">
          <img src={profileImg} alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;