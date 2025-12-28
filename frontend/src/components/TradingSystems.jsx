import React from 'react';
import { TrendingUp, Target, Shield, Activity } from 'lucide-react';
import './TradingSystems.css';

const tradingApproach = [
  {
    icon: Target,
    title: 'EURUSD / XAUUSD / BTC',
    description: 'H1 timeframe focus with session-based execution filters.',
  },
  {
    icon: Activity,
    title: 'Rule-Based Discretionary',
    description: 'Defined entry/exit logic with partial profit systems and strict SL protocols.',
  },
  {
    icon: TrendingUp,
    title: 'Statistical Backtesting',
    description: 'Full-year candle-by-candle analysis. Testing edge, not chasing prediction.',
  },
  {
    icon: Shield,
    title: 'Session Filters',
    description: 'London / NY sessions only. No overnight exposure, no revenge trading.',
  },
];

const transferableSkills = [
  {
    skill: 'Risk Modeling',
    application: 'Smart contract security & vulnerability assessment',
  },
  {
    skill: 'Adversarial Thinking',
    application: 'Exploit prevention & attack surface mapping',
  },
  {
    skill: 'Patience & Execution',
    application: 'Long-term protocol design & sustainable systems',
  },
  {
    skill: 'Capital Preservation',
    application: 'Resilient financial infrastructure & risk management',
  },
];

const TradingSystems = () => {
  return (
    <section className="trading-section" id="trading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-label">Discipline</span>
          <h2 className="section-title">Trading Systems & Risk Architecture</h2>
        </div>

        <div className="trading-philosophy">
          <p className="philosophy-text">
            I approach trading as a <strong>probabilistic system</strong>—not prediction. 
            Risk management, execution discipline, and statistical edge matter more than direction. 
            Every trade is a decision under uncertainty, measured against defined rules.
          </p>
        </div>

        <div className="trading-approach">
          <h3 className="subsection-title">What I Actually Do</h3>
          <div className="approach-grid">
            {tradingApproach.map((item, index) => (
              <div key={index} className="approach-card">
                <div className="approach-icon">
                  <item.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="approach-title">{item.title}</h4>
                <p className="approach-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="trading-flow">
          <div className="flow-diagram">
            <div className="flow-step">Edge</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Risk</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Execution</div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">Outcome</div>
          </div>
        </div>

        <div className="transferable-skills">
          <h3 className="subsection-title">Why Trading Matters to My Work</h3>
          <p className="skills-intro">
            Trading isn't separate from blockchain development—it's foundational. 
            The same mental models that protect capital protect protocols.
          </p>
          <div className="skills-connections">
            {transferableSkills.map((item, index) => (
              <div key={index} className="skill-connection">
                <div className="connection-skill">{item.skill}</div>
                <div className="connection-arrow">→</div>
                <div className="connection-application">{item.application}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSystems;
