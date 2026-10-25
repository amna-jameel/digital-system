import React from 'react';
import { Shield, Camera, KeyRound, MonitorCheck, Radio, CheckCircle, ArrowRight } from 'lucide-react';
import './SecuritySection.css';

export default function SecuritySection({ onSelectSolution }) {
  const securityPillars = [
    { title: 'CCTV Infrastructure', icon: Camera, desc: 'High-definition 4K optics with Metrisys AI capability' },
    { title: 'Access Control', icon: KeyRound, desc: 'Biometric, RFID, and mobile credentials' },
    { title: 'Perimeter Monitoring', icon: MonitorCheck, desc: 'Radar & LiDAR intrusion detection' },
    { title: 'Intelligent Surveillance', icon: Shield, desc: 'AI-assisted threat detection' },
    { title: 'Integrated Security', icon: Radio, desc: 'Unified incident response dispatch' }
  ];

  return (
    <section id="security" className="security-section">
      <div className="container">
        <div className="security-grid">
          {/* Visual Column */}
          <div className="security-visual-col">
            <div className="security-image-frame">
              <img 
                src="/images/security.jpg" 
                alt="Enterprise Security Infrastructure Integrated Into Architecture" 
                className="security-img"
              />
              
              <div className="security-badge-overlay">
                <span className="badge-tag">ENTERPRISE SYSTEM</span>
                <span className="badge-title">Architecturally Integrated Security</span>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="security-content-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> SYSTEMIC PHYSICAL SECURITY
            </span>

            <h2 className="section-title security-headline">
              Security that works within the bigger system.
            </h2>

            <p className="section-subtitle security-description">
              Security infrastructure is engineered to operate transparently within your physical space — feeding real-time spatial awareness into automated building controls and executive command centers.
            </p>

            <div className="security-pillars-list">
              {securityPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div key={index} className="security-pillar-row">
                    <div className="pillar-icon-box">
                      <Icon size={16} className="accent-icon" />
                    </div>
                    <div className="pillar-info">
                      <h3 className="pillar-name">{pillar.title}</h3>
                      <span className="pillar-desc">{pillar.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('security-systems')}
              className="btn btn-primary"
            >
              <span>Explore Security Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
