// src/Components/Navbar.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Logo from './Logo'; // Import the Logo component
import { Button } from 'react-bootstrap'; // Import Bootstrap Button
import './Navbar.css';

const Navbar = ({ toggleTheme, isDark }) => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="navbar-brand">
            <Logo isDark={isDark} />
          </div>
          <div className="collapse navbar-collapse justify-content-center">
            <div className={`navbar-links ${isDark ? 'dark' : 'light'}`}>
              <a className="nav-link active fs-4 fw-bold" href="#home">Home</a>
              <a className="nav-link fs-4 fw-bold" href="#about">About Us</a>
              <a className="nav-link fs-4 fw-bold" href="#skills">Skills</a>
              <a className="nav-link fs-4 fw-bold" href="#projects">Projects</a>
              <a className="nav-link fs-4 fw-bold" href="#services">Services</a>
             
            </div>
            <Button
                style={{ backgroundColor: 'deepskyblue' }}
                onClick={scrollToContact}
              >
                Contact
              </Button>
          </div>
          <div className="d-flex align-items-center">
            <div
              className={`theme-toggle ${isDark ? 'dark' : 'light'} ms-3`}
              onClick={toggleTheme}
              style={{ cursor: 'pointer' }}
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
