import React, { useState } from 'react';
import { 
  ArrowRight, Check, Activity, Eye, Search, Bell, Layers, Cpu,
  ShieldAlert, Clock, Users, ScanFace, BarChart3, Car, Truck, Flame, HardHat
} from 'lucide-react';
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

  // 10 Key Metrisys AI Video Analytics Algorithms
  const algorithms = [
    {
      id: 'area-intrusion',
      title: 'Area Intrusion Detection',
      desc: 'Detects unauthorized targets entering or crossing predefined perimeter boundaries in real time.',
      icon: ShieldAlert
    },
    {
      id: 'loitering',
      title: 'Loitering Detection',
      desc: 'Monitors designated sensitive zones and alerts when individuals remain longer than a specified duration.',
      icon: Clock
    },
    {
      id: 'crowd-gathering',
      title: 'Crowd Gathering Detection',
      desc: 'Analyzes human density and generates notifications when crowd concentration exceeds defined safety limits.',
      icon: Users
    },
    {
      id: 'fall-detection',
      title: 'Fall Detection',
      desc: 'Identifies rapid human posture changes indicative of falls to enable immediate emergency assistance.',
      icon: Activity
    },
    {
      id: 'face-recognition',
      title: 'Face Capture & Recognition',
      desc: 'Extracts facial features and matches against authorized databases for access verification and monitoring.',
      icon: ScanFace
    },
    {
      id: 'people-flow',
      title: 'People Flow Statistics',
      desc: 'Measures bidirectional foot traffic, entry/exit volumes, and occupancy levels across designated areas.',
      icon: BarChart3
    },
    {
      id: 'anpr',
      title: 'License Plate Recognition (ANPR)',
      desc: 'Automatically captures vehicle registration numbers for automated gate barriers and parking control.',
      icon: Car
    },
    {
      id: 'vehicle-classification',
      title: 'Vehicle Brand & Model Recognition',
      desc: 'Classifies vehicle make, model, type, and color attributes to assist in traffic management and surveillance.',
      icon: Truck
    },
    {
      id: 'flame-smoke',
      title: 'Smoke & Open Flame Detection',
      desc: 'Continuously analyzes video frames for early visual indicators of smoke plumes and open flame patterns.',
      icon: Flame
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment Detection',
      desc: 'Monitors work zones to verify compliance with required safety gear such as helmets and high-visibility vests.',
      icon: HardHat
    }
  ];

  return (
    <section id="solutions" className="ai-feature-section">
      <span id="cctv" className="nav-anchor"></span>
      <span id="ai-features" className="nav-anchor"></span>
      <div className="container">
        <div className="ai-grid">
          {/* Left Column: Editorial Copy */}
          <div className="ai-content-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> METRISYS AI VIDEO ANALYTICS
            </span>

            <h2 className="section-title ai-headline">
              AI Video Analytics <span className="text-gradient">with Metrisys</span>
            </h2>

            <p className="section-subtitle ai-description">
              Unique Smart Solutions integrates Metrisys AI Video Analytics technology to convert standard visual streams into actionable operational insights, real-time perimeter protection, and automated event telemetry.
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
                <span>Explore Metrisys AI Solutions</span>
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
                  <span className="hud-live-tag">LIVE TELEMETRY: METRISYS ANALYTICS ENGINE</span>
                  <span className="hud-confidence">FPS: 60 | STATUS: ACTIVE</span>
                </div>

                <div className="cv-hud-boxes">
                  <div className="cv-box box-1">
                    <span className="cv-label">Target #104 [Perimeter Tracked]</span>
                  </div>
                  <div className="cv-box box-2">
                    <span className="cv-label">Vehicle #882 [ANPR Logged]</span>
                  </div>
                </div>

                <div className="cv-hud-footer">
                  <span className="hud-alert-text">
                    <Check size={12} className="accent-icon" /> Event Detection: Normal Monitored State
                  </span>
                  <span className="hud-filter-mode">Filter: {activeOverlayMode.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Key AI Video Analytics Algorithms Showcase */}
        <div className="algorithms-showcase-section">
          <div className="algorithms-header">
            <div className="algorithms-header-left">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> METRISYS CORE ALGORITHM SUITE
              </span>
              <h3 className="algorithms-title">10 Key AI Video Analytics Algorithms</h3>
              <p className="algorithms-subtitle">
                Core computer vision algorithms deployable across facilities, commercial buildings, and perimeter infrastructure for automated security and operational intelligence.
              </p>
            </div>
            <div className="algorithms-tech-badge">
              <Cpu size={14} className="accent-icon" />
              <span>Metrisys Video Intelligence</span>
            </div>
          </div>

          <div className="algorithms-grid">
            {algorithms.map((algo, idx) => {
              const Icon = algo.icon;
              return (
                <div key={algo.id} className="algorithm-card">
                  <div className="algo-card-top">
                    <div className="algo-icon-wrap">
                      <Icon size={18} className="algo-icon" />
                    </div>
                    <span className="algo-index">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>
                  <h4 className="algo-title">{algo.title}</h4>
                  <p className="algo-desc">{algo.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
