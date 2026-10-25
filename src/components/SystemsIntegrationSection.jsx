import React from 'react';
import { ArrowRight, GitMerge, Layers, Cpu, Shield, Home, Tv, Car, Check } from 'lucide-react';
import './SystemsIntegrationSection.css';

export default function SystemsIntegrationSection({ onSelectSolution }) {
  const subsystemBadges = [
    { name: 'AI Analytics', icon: Cpu },
    { name: 'Security & CCTV', icon: Shield },
    { name: 'Smart Building', icon: Home },
    { name: 'Control AV', icon: Tv },
    { name: 'Parking ANPR', icon: Car }
  ];

  return (
    <section id="integration" className="integration-section">
      <span id="digital-transformation" className="nav-anchor"></span>
      <span id="it-networking" className="nav-anchor"></span>
      <div className="container">
        <div className="integration-grid">
          {/* Left Column: Visual Architecture */}
          <div className="integration-visual-col">
            <div className="integration-image-frame">
              <img 
                src="/images/integration.jpg" 
                alt="Integrated Intelligent Technology Environment Operations Center" 
                className="integration-img"
              />

              {/* Architectural Physical System Convergence Overlay */}
              <div className="convergence-overlay">
                <div className="convergence-title">
                  <GitMerge size={14} className="accent-icon" />
                  <span>Subsystem Convergence Architecture</span>
                </div>

                <div className="subsystem-row">
                  {subsystemBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="subsystem-badge">
                        <Icon size={12} className="accent-icon" />
                        <span>{badge.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="convergence-arrow">↓ Unified Middleware Layer</div>

                <div className="result-banner">
                  <Check size={14} className="accent-icon" />
                  <span>SINGLE INTEGRATED INFRASTRUCTURE ENGINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="integration-content-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> ALL SERVICES IN ONE FIBER OPTIC CABLE
            </span>

            <h2 className="section-title integration-headline">
              14 Systems.<br />
              <span className="headline-muted">One unified fiber optic cable.</span>
            </h2>

            <p className="section-subtitle integration-description">
              Rather than installing disparate, conflicting network wiring, Unique Smart Solutions consolidates your entire facility over a single high-speed fiber optic infrastructure.
            </p>

            <div className="diff-bullets">
              <div className="diff-item">
                <div className="diff-bullet-num">01</div>
                <div>
                  <h3 className="diff-title">Triple Play & Building Telecom</h3>
                  <p className="diff-text">High-speed gigabit Internet, Digital TV distribution, and IP telephony with zero signal loss over kilometers of campus fiber.</p>
                </div>
              </div>

              <div className="diff-item">
                <div className="diff-bullet-num">02</div>
                <div>
                  <h3 className="diff-title">Integrated Safety & Access Security</h3>
                  <p className="diff-text">Real-time interconnection between UVIS under-vehicle scanning, ANPR gates, biometric speed turnstiles, and AI-FIRE flame alarms.</p>
                </div>
              </div>

              <div className="diff-item">
                <div className="diff-bullet-num">03</div>
                <div>
                  <h3 className="diff-title">Central Control Room (CCR) Telemetry</h3>
                  <p className="diff-text">All 14 subsystems feed into our curved COB LED video walls and CMS local/remote monitoring servers for instantaneous incident response.</p>
                </div>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('fiber-unified')}
              className="btn btn-primary"
            >
              <span>Explore One-Fiber Architecture</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
