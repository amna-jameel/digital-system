import React from 'react';
import { ArrowRight, Sun, Thermometer, ShieldAlert, Cpu, Sliders, Touchpad } from 'lucide-react';
import './SmartBuildingSection.css';

export default function SmartBuildingSection({ onSelectSolution }) {
  const highlights = [
    { title: 'Smart Home & Facilities', icon: Cpu, desc: 'Centralized environment orchestration' },
    { title: 'Building Automation', icon: Sliders, desc: 'BACnet / KNX enterprise control' },
    { title: 'Architectural Lighting', icon: Sun, desc: 'Adaptive circadian daylight balancing' },
    { title: 'Climate Control', icon: Thermometer, desc: 'Precision zone HVAC management' },
    { title: 'Integrated Access', icon: ShieldAlert, desc: 'Optical turnstile & card sync' },
    { title: 'Embedded Touch Controls', icon: Touchpad, desc: 'Flush stone & glass touch panels' }
  ];

  return (
    <section className="smart-building-section">
      <div className="container">
        {/* Editorial Split Header */}
        <div className="smart-header-split">
          <div>
            <h2 className="section-title dark-text">
              AI-driven spaces, neural automation.
            </h2>
          </div>
          <div className="header-right-copy">
            <p className="section-subtitle dark-sub">
              Engineering autonomous Artificial Intelligence and computer vision workflows into luxury commercial and executive architectural spaces.
            </p>
            <button 
              type="button" 
              onClick={() => onSelectSolution('smart-home')}
              className="btn btn-secondary-light"
            >
              <span>Explore AI Environments</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Large Photorealistic Architectural Image Showcase */}
        <div className="smart-image-card">
          <img 
            src="/images/smart_building.jpg" 
            alt="Intelligent Smart Building Architecture Environment" 
            className="smart-architectural-img"
          />

          {/* Minimal Architectural Node Callouts */}
          <div className="building-node node-turnstiles">
            <span className="node-ping"></span>
            <div className="node-card">
              <span className="node-title">Turnstile Access Nodes</span>
              <span className="node-sub">Biometric & Optical Sync</span>
            </div>
          </div>

          <div className="building-node node-climate">
            <span className="node-ping"></span>
            <div className="node-card">
              <span className="node-title">Climate & Air Quality</span>
              <span className="node-sub">21.5°C • CO₂ 410 ppm</span>
            </div>
          </div>

          <div className="building-node node-display">
            <span className="node-ping"></span>
            <div className="node-card">
              <span className="node-title">Flush Digital Signage</span>
              <span className="node-sub">Wayfinding & Energy Telemetry</span>
            </div>
          </div>
        </div>

        {/* Minimal Highlight Bar */}
        <div className="smart-highlights-grid">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="smart-highlight-item">
                <div className="highlight-icon-box">
                  <Icon size={18} className="dark-icon" />
                </div>
                <div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
