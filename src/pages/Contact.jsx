import React, { useState } from 'react';
import "/src/index.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending it to an API.
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>If you have any questions, please message me.</p>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            required
          />
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=100085867298402" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <img src="/assets/facebook.png" alt="Facebook" className="social-icon-image" />
        </a>
        <a href="https://www.instagram.com/bcvf_29/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <img src="/assets/instagram.png" alt="Instagram" className="social-icon-image" />
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="social-icon gmail">
        <img src="/assets/gmail.png" alt="Gmail" className="social-icon-image" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
