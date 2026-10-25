import React, { useState } from 'react';
import { ArrowRight, Check, Activity, Eye, Search, Bell, Layers, Cpu } from 'lucide-react';
import './AiFeatureSection.css';

export default function AiFeatureSection({ onSelectSolution }) {
  const [activeOverlayMode, setActiveOverlayMode] = useState('all');

  const capabilities = [
    { title: 'Video Analytics', mode: 'analytics', icon: Activity },
    { title: 'Object Detection', mode: 'objects', icon: Eye },
    { title: 'People Analytics', mode: 'people', icon: Layers },
    { title: 'Event Detection', mode: 'events', icon: Bell },
    { title: 'Intelligent Search', mode: 'search', icon: Search },
    { title: 'Monitoring & Alerts', mode: 'alerts', icon: Cpu }
  ];

  return (
    <section id="solutions" className="ai-feature-section">
      <span id="cctv" className="nav-anchor"></span>
      <span id="ai-features" className="nav-anchor"></span>
      <div className="container">
        <div className="ai-grid">
          {/* Left Column: Editorial Copy */}
          <div className="ai-content-col">
            <h2 className="section-title ai-headline">
              AI & Video Intelligence
            </h2>

            <p className="section-subtitle ai-description">
              Turn visual data into useful operational insight with intelligent video analysis, monitoring and event detection.
            </p>

            {/* Capability Badges */}
            <div className="capabilities-grid">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isSelected = activeOverlayMode === cap.mode;
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`capability-pill ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveOverlayMode(cap.mode)}
                  >
                    <Icon size={14} className="pill-icon" />
                    <span>{cap.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="ai-cta-row">
              <button 
                type="button" 
                onClick={() => onSelectSolution('ai-video-analytics')}
                className="btn btn-primary"
              >
                <span>Explore AI Solutions</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Photorealistic Control Room Visual + Dynamic Computer Vision Telemetry Overlay */}
          <div className="ai-visual-col">
            <div className="ai-image-container">
              <img 
                src="/images/ai_control.jpg" 
                alt="AI Video Intelligence Control Room Operations" 
                className="ai-visual-img"
              />

              {/* Dynamic Overlay Telemetry Bar simulating real computer vision HUD */}
              <div className="cv-hud-overlay">
                <div className="cv-hud-header">
                  <span className="hud-live-tag">LIVE FEED: CAM-04 (MAIN ENTRANCE)</span>
                  <span className="hud-confidence">FPS: 60 | CONFIDENCE: 99.4%</span>
                </div>

                <div className="cv-hud-boxes">
                  <div className="cv-box box-1">
                    <span className="cv-label">Person #104 [Occupancy Analytics]</span>
                  </div>
                  <div className="cv-box box-2">
                    <span className="cv-label">Vehicle #882 [ANPR Tracked]</span>
                  </div>
                </div>

                <div className="cv-hud-footer">
                  <span className="hud-alert-text">
                    <Check size={12} className="accent-icon" /> Event Detection: Normal Traffic Flow
                  </span>
                  <span className="hud-filter-mode">Filter: {activeOverlayMode.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
