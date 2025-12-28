import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-label">Atharva P. Funde</div>
        <h1 className="hero-title">
          Designing disciplined systems for decentralized finance and long-term capital.
        </h1>
        <p className="hero-subtitle">
          MSc Blockchain Technology · Smart Contracts · Risk-Aware Execution
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn-secondary">
            View Work
          </a>
        </div>
        <div className="hero-social">
          <a href="mailto:atharva.funde@example.com" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://linkedin.com/in/atharvafunde" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/atharvafunde" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
