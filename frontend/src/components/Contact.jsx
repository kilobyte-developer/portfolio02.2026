import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend integration
    console.log('Form submitted:', formData);
    alert('Message sent! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-header">
              <span className="section-label">Connect</span>
              <h2 className="section-title">Let's Build</h2>
            </div>
            <p className="contact-description">
              Interested in collaboration, opportunities, or discussing blockchain systems? 
              Reach out via email or connect on professional networks.
            </p>
            <div className="contact-links">
              <a href="mailto:atharvafunde26@gmail.com" className="contact-link-item">
                <div className="link-icon">
                  <Mail size={20} />
                </div>
                <div className="link-content">
                  <div className="link-label">Email</div>
                  <div className="link-value">atharvafunde26@gmail.com</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/atharva-funde-05541a249/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="link-icon">
                  <Linkedin size={20} />
                </div>
                <div className="link-content">
                  <div className="link-label">LinkedIn</div>
                  <div className="link-value">linkedin.com/in/atharva-funde-05541a249</div>
                </div>
              </a>
              <a href="https://github.com/kilobyte-developer" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="link-icon">
                  <Github size={20} />
                </div>
                <div className="link-content">
                  <div className="link-label">GitHub</div>
                  <div className="link-value">github.com/kilobyte-developer</div>
                </div>
              </a>
              <a href="https://x.com/atharva_funde62" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                <div className="link-icon">
                  <Twitter size={20} />
                </div>
                <div className="link-content">
                  <div className="link-label">Twitter / X</div>
                  <div className="link-value">@atharva_funde62</div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="What would you like to discuss?"
                  rows="6"
                />
              </div>
              <button type="submit" className="form-submit">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <p className="footer-text">
            © {new Date().getFullYear()} Atharva P. Funde. Building for the long term.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
