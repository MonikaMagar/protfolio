// src/Components/About.jsx
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div id='About' className="about-container">
      <h1 className="about-heading">About Me</h1>
      <div className="about-card">
      <h1 style={{ color: '#007bff', fontSize: '2rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem' }}>
  Who I am?
</h1>

        <div className="about-content">
          <p>
            Hi! I'm Monika Magar, a passionate front-end developer with a knack for creating beautiful and functional user interfaces.
            I specialize in building responsive and interactive web applications using the latest technologies.
            With a strong foundation in HTML, CSS, and JavaScript, I am always eager to learn new frameworks and tools to enhance my skill set.
            My goal is to provide an excellent user experience through innovative design and clean code.
            In my free time, I enjoy exploring new web technologies, contributing to open-source projects, and staying active in the developer community.
          </p>
     
        </div>
      </div>
        
    </div>
  );
};

export default About;


