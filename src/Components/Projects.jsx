// src/Components/Projects.js
import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file for styles

const projects = [
  {
    title: 'Project One',
    description: 'Features Responsive Design: The website is fully responsive, ensuring a seamless experience on both desktop and mobile devices.',
    link: 'https://github.com/MonikaMagar/Cake-Shope',
    image: 'P1.png', // Ensure this path is correct
  },
  {
    title: 'Project Two',
    description: 'This is a feature-rich eCommerce application built with React.js. The app allows users to browse products, filter by categories, search for specific items, and manage a wishlist.',
    link: 'https://github.com/MonikaMagar/Ecom_leran',
    image: 'P2.png', // Ensure this path is correct
  },
  {
    title: 'Project Three',
    description: 'Stylish and responsive restaurant website using HTML, CSS, and Bootstrap. Features include a menu display, reservation form, gallery, and contact information.',
    link: 'https://github.com/MonikaMagar/Restaurant-website',
    image: 'P4.png', // Ensure this path is correct
  },
  {
    title: 'Project Four',
    description: 'Responsive design, simple website created using Bootstrap.',
    link: 'https://github.com/MonikaMagar/Tindog',
    image: 'P5.png', // Ensure this path is correct
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-row">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p className="project-description">
              {expandedProject === index ? project.description : `${project.description.substring(0, 100)}...`}
            </p>
            <button className="read-more-button" onClick={() => toggleDescription(index)}>
              {expandedProject === index ? 'Read Less' : 'Read More'}
            </button>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link view-project-button">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
