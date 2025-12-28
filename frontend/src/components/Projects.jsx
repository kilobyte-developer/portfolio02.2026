import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    category: 'Smart Contract & Blockchain',
    title: 'NFT-Based Event Ticketing System',
    description: 'Scalable Web3 solution for secure event management. Built with Solidity, implements ERC-721 standards, and includes anti-scalping mechanisms.',
    tags: ['Solidity', 'ERC-721', 'Web3', 'Smart Contracts'],
    github: '#',
    live: null,
  },
  {
    category: 'Smart Contract & Blockchain',
    title: 'DeFi Protocol Experiments',
    description: 'Prototype implementations exploring AMM mechanics, liquidity provision strategies, and yield optimization patterns.',
    tags: ['Solidity', 'DeFi', 'AMM', 'Liquidity'],
    github: '#',
    live: null,
  },
  {
    category: 'Security & Auditing',
    title: 'Smart Contract Vulnerability Research',
    description: 'Comprehensive analysis of common attack vectors: reentrancy, access control flaws, integer overflow, and logic vulnerabilities.',
    tags: ['Security', 'Auditing', 'Solidity', 'Testing'],
    github: '#',
    live: null,
  },
  {
    category: 'Security & Auditing',
    title: 'Threat Modeling Framework',
    description: 'Systematic approach to identifying security risks in DeFi protocols. Includes adversarial thinking and attack surface mapping.',
    tags: ['Security', 'Risk Analysis', 'DeFi', 'Audit'],
    github: '#',
    live: null,
  },
  {
    category: 'Trading & Systems',
    title: 'Trading Psychology Framework',
    description: 'Disciplined approach to risk management and execution. Focus on probabilistic thinking, not prediction.',
    tags: ['Trading', 'Risk Management', 'Psychology', 'Systems'],
    github: '#',
    live: null,
  },
  {
    category: 'Trading & Systems',
    title: 'Backtesting & Risk Models',
    description: 'Quantitative analysis systems for EURUSD, XAUUSD, and BTC. Emphasis on execution discipline and capital preservation.',
    tags: ['Backtesting', 'Quantitative', 'Risk', 'Capital Management'],
    github: '#',
    live: null,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Work</span>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} className="project-link" aria-label="View on GitHub">
                    <Github size={18} />
                    <span>Source</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="project-link" aria-label="View Live Demo">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
