import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Vision.css';

const visionData = [
  {
    phase: 'Foundation',
    title: 'Mastering the Fundamentals',
    description: 'Deep expertise in smart contract security, DeFi mechanics, and risk-aware execution. Building projects that demonstrate systems thinking, not just coding.',
    timeline: 'Current',
  },
  {
    phase: 'Execution',
    title: 'Capital Systems & Protocols',
    description: 'Developing resilient financial infrastructure. Focus on prop firm structures, algorithmic trading systems, and decentralized capital allocation frameworks.',
    timeline: '12-24 months',
  },
  {
    phase: 'Scale',
    title: 'Long-Term Infrastructure',
    description: 'Building protocols and systems that matter. Creating sustainable, secure platforms that serve the next generation of decentralized markets.',
    timeline: '2-5 years',
  },
];

const Vision = () => {
  return (
    <section className="vision-section" id="vision">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Roadmap</span>
          <h2 className="section-title">Long-Term Vision</h2>
        </div>
        <div className="vision-content">
          <p className="vision-intro">
            I'm not building for the next bull run. I'm building for the next decade. 
            Every decision is measured against long-term sustainability, not short-term hype.
          </p>
          <div className="vision-phases">
            {visionData.map((item, index) => (
              <div key={index} className="vision-phase">
                <div className="phase-header">
                  <span className="phase-label">{item.phase}</span>
                  <span className="phase-timeline">{item.timeline}</span>
                </div>
                <h3 className="phase-title">{item.title}</h3>
                <p className="phase-description">{item.description}</p>
                {index < visionData.length - 1 && (
                  <div className="phase-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
