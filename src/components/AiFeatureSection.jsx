import React, { useState } from 'react';
import { 
  ArrowRight, Check, Activity, Eye, Search, Bell, Layers, Cpu,
  ShieldAlert, Clock, Users, ScanFace, BarChart3, Car, Truck, Flame, HardHat
} from 'lucide-react';
import './AiFeatureSection.css';

// 10 Algorithm Authentic Operational Photos from assets
import intrusionImg from '../assets/Person_crosses_industrial_facili…_20261025221013.jpg';
import loiteringImg from '../assets/Visitor_standing_in_service_corr…_20261025221031.jpg';
import crowdImg from '../assets/Shoppers_gathering_at_mall_entrance_20261025221042.jpg';
import fallImg from '../assets/Employee_falls_in_office_corridor_20261025221045.jpg';
import faceImg from '../assets/Visitor_approaches_office_buildi…_20261025221106.jpg';
import peopleFlowImg from '../assets/Shoppers_entering_and_exiting_su…_20261025221130.jpg';
import anprImg from '../assets/Vehicle_approaching_parking_entr…_20261025221157.jpg';
import vehicleClassImg from '../assets/SUV_driving_past_camera_20261025221204.jpg';
import flameSmokeImg from '../assets/Small_fire_safety_demonstration_20261025221224.jpg';
import safetyEquipImg from '../assets/Workers_walking_in_warehouse_20261025221242.jpg';

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
      desc: 'Detects unauthorized entry across defined perimeter zones in real time.',
      icon: ShieldAlert,
      image: intrusionImg
    },
    {
      id: 'loitering',
      title: 'Loitering Detection',
      desc: 'Alerts when individuals remain in sensitive zones past specified time limits.',
      icon: Clock,
      image: loiteringImg
    },
    {
      id: 'crowd-gathering',
      title: 'Crowd Gathering Detection',
      desc: 'Notifies security when crowd density exceeds safe capacity thresholds.',
      icon: Users,
      image: crowdImg
    },
    {
      id: 'fall-detection',
      title: 'Fall Detection',
      desc: 'Identifies sudden human posture collapse for immediate emergency response.',
      icon: Activity,
      image: fallImg
    },
    {
      id: 'face-recognition',
      title: 'Face Capture & Recognition',
      desc: 'Captures facial attributes and checks against authorized databases.',
      icon: ScanFace,
      image: faceImg
    },
    {
      id: 'people-flow',
      title: 'People Flow Statistics',
      desc: 'Measures bidirectional foot traffic and area occupancy counts.',
      icon: BarChart3,
      image: peopleFlowImg
    },
    {
      id: 'anpr',
      title: 'License Plate Recognition (ANPR)',
      desc: 'Automatically reads vehicle license plates for barrier and gate control.',
      icon: Car,
      image: anprImg
    },
    {
      id: 'vehicle-classification',
      title: 'Vehicle Brand & Model Recognition',
      desc: 'Classifies vehicle make, model, type, and color attributes.',
      icon: Truck,
      image: vehicleClassImg
    },
    {
      id: 'flame-smoke',
      title: 'Smoke & Open Flame Detection',
      desc: 'Identifies early visual signs of smoke plumes and open flame patterns.',
      icon: Flame,
      image: flameSmokeImg
    },
    {
      id: 'safety-equipment',
      title: 'Safety Equipment Detection',
      desc: 'Verifies compliance with required safety helmets and protective vests.',
      icon: HardHat,
      image: safetyEquipImg
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

        {/* 10 Key AI Video Analytics Algorithms Showcase - 3 Cards per Line */}
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
                  <div className="algo-image-wrap">
                    <img 
                      src={algo.image} 
                      alt={algo.title} 
                      className="algo-img" 
                      loading="lazy"
                    />
                  </div>
                  <div className="algo-body">
                    <div className="algo-title-row">
                      <Icon size={16} className="algo-icon" />
                      <h4 className="algo-title">{algo.title}</h4>
                    </div>
                    <p className="algo-desc">{algo.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
