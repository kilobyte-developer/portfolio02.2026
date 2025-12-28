import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Background</span>
          <h2 className="section-title">Systems Thinker</h2>
        </div>
        <div className="about-content">
          <p className="about-paragraph">
            Currently pursuing MSc in Blockchain Technology, focused on building secure, 
            decentralized financial systems that prioritize risk management and long-term sustainability.
          </p>
          <p className="about-paragraph">
            My approach combines smart contract development with disciplined trading psychology. 
            I analyze systems through the lens of security, incentive structures, and probabilistic thinking—not hype cycles.
          </p>
          <p className="about-paragraph">
            Every project is an opportunity to build resilience, test assumptions, and execute with precision. 
            I'm not chasing the next trend. I'm building foundations for what comes next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
