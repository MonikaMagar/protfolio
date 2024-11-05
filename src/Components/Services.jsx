// src/Components/Services.js
import React from 'react';
import './Services.css'; // Import the CSS file for styles

const services = [
  {
    title: "User-Centric Design",
    description: "I focus on building intuitive interfaces that are easy to navigate, ensuring users have a positive experience when interacting with the site."
  },
  {
    title: "Responsive Development",
    description: "I design websites that look great on all devices, from mobile phones to desktops, providing a seamless experience for every user."
  },
  {
    title: "Performance Optimization",
    description: "I prioritize fast loading times, optimizing images and code to ensure that users don’t have to wait."
  },
  {
    title: "Modern Technologies",
    description: "I work with popular front-end frameworks like React and Vue.js, using the latest tools to create scalable and maintainable projects."
  },
  {
    title: "Cross-Browser Compatibility",
    description: "I test my projects across different browsers to ensure they work smoothly, regardless of where they're accessed."
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Front-End Development Services</h2>
      <div className="services-row">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
