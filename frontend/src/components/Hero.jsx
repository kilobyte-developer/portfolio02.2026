import React, { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const spotlightRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // Trigger title animation on mount
    setTimeout(() => setTitleVisible(true), 300);

    // Cursor spotlight effect
    const handleMouseMove = (e) => {
      if (!heroRef.current || !spotlightRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      spotlightRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(45, 212, 191, 0.08), transparent 40%)`;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-spotlight" ref={spotlightRef}></div>
      <div className="hero-content">
        <div className="hero-label">Atharva P. Funde</div>
        <h1 className={`hero-title ${titleVisible ? 'title-visible' : ''}`}>
          Designing disciplined systems for decentralized finance and long-term capital.
        </h1>
        <p className="hero-subtitle">
          MSc Blockchain Technology · Smart Contracts · Risk-Aware Execution
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary magnetic-btn">
            Get in Touch
          </a>
          <a href="#projects" className="btn-secondary magnetic-btn">
            View Work
          </a>
        </div>
        <div className="hero-social">
          <a href="mailto:atharvafunde26@gmail.com" className="social-link" aria-label="Email">
            <Mail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/atharva-funde-05541a249/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/kilobyte-developer" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
