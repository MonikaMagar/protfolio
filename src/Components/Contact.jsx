import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form Data:', formData);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5">
    <h2 className="contact-heading">Contact</h2>
      <div className="row " >
        <div className="col-md-6 contact-card">
          <p style={{fontWeight:'bold'}}>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            
            <button type="submit" className="btn1 btn-primary">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="mb-4">
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">
                <FaEnvelope /> magarmonika2002@gmail.com<br />
                <FaPhone /> +919325509725<br />
                <FaMapMarkerAlt /> wakde , pune-413113
              </p>
              <div className="social-icons">
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                
                <a href="https://github.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
