import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TradingSystems from '../components/TradingSystems';
import Projects from '../components/Projects';
import Vision from '../components/Vision';
import Contact from '../components/Contact';
import AnimatedBackground from '../components/AnimatedBackground';
import './Portfolio.css';

const Portfolio = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="portfolio-container">
      <AnimatedBackground />
      <div className="content-wrapper">
        <div ref={(el) => (sectionsRef.current[0] = el)} className="fade-in-section">
          <Hero />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)} className="fade-in-section">
          <About />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)} className="fade-in-section">
          <Skills />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)} className="fade-in-section">
          <Projects />
        </div>
        <div ref={(el) => (sectionsRef.current[4] = el)} className="fade-in-section">
          <Vision />
        </div>
        <div ref={(el) => (sectionsRef.current[5] = el)} className="fade-in-section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
