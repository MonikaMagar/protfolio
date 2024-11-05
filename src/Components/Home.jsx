// src/Components/Home.jsx
import React from 'react';
import './Home.css'; // Import the CSS file for styling
import { FaGithub, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import icons

const Home = () => {
  return (
    <div id='Home' className="home-container d-flex align-items-center">
      <div className="text-section">
        <h1>
          Hi, This is <span className="highlight">Monika Magar</span>, I'm a <span className="highlight1">Front-End Developer</span>
        </h1>
        <p>
          I create responsive and user-friendly websites. My goal is to enhance user experience through innovative design and clean code.
        </p>
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <div>
          
        </div>
        <a href="Resume.pdf" download className="btn btn-primary">Download Resume</a>
        <a href="mailto:your-email@example.com" className="btn btn-primary">Hire Me</a> {/* New Hire Me button */}
      </div>
      <div className="image-section">
        <img style={{}} src='Me1.png' alt="Front-End Developer" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
