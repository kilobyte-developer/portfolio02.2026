import React from 'react';
import { Shield, Code, TrendingUp, Lock, Database, GitBranch } from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    icon: Code,
    title: 'Smart Contract Development',
    description: 'Solidity, EVM architecture, gas optimization, and contract design patterns.',
  },
  {
    icon: Shield,
    title: 'Security & Auditing',
    description: 'Vulnerability research, reentrancy defense, access control, threat modeling.',
  },
  {
    icon: TrendingUp,
    title: 'Trading Systems',
    description: 'Risk management, backtesting, probabilistic thinking, execution discipline.',
  },
  {
    icon: Lock,
    title: 'Blockchain Security',
    description: 'Cryptographic primitives, consensus mechanisms, MEV awareness.',
  },
  {
    icon: Database,
    title: 'DeFi Protocols',
    description: 'Liquidity pools, AMMs, lending protocols, tokenomics analysis.',
  },
  {
    icon: GitBranch,
    title: 'Full-Stack Development',
    description: 'React, Node.js, Web3 integration, dApp architecture.',
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Core Competencies</h2>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <skill.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
