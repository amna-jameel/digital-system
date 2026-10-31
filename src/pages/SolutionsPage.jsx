import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Home, Building2, Shield, Car, Tv, Network, 
  Layers, ArrowRight, CheckCircle2, ChevronRight 
} from 'lucide-react';
import AiFeatureSection from '../components/AiFeatureSection';
import SmartBuildingSection from '../components/SmartBuildingSection';
import SmartHomeSection from '../components/SmartHomeSection';
import SecuritySection from '../components/SecuritySection';
import ParkingSection from '../components/ParkingSection';
import AudioVisualSection from '../components/AudioVisualSection';
import SystemsIntegrationSection from '../components/SystemsIntegrationSection';
import IndustriesSection from '../components/IndustriesSection';
import FinalCtaSection from '../components/FinalCtaSection';
import './SolutionsPage.css';

export default function SolutionsPage({ onOpenContactModal, navigateToSolution }) {
  const [activeAnchor, setActiveAnchor] = useState('ai-analytics');

  const SOLUTION_NAV_ITEMS = [
    { id: 'ai-analytics', label: 'AI Video Analytics', icon: Cpu },
    { id: 'smart-home', label: 'Smart Home & Switches', icon: Home },
    { id: 'smart-building', label: 'Smart Building & BMS', icon: Building2 },
    { id: 'access-control', label: 'Access & Biometrics', icon: Shield },
    { id: 'traffic-parking', label: 'Traffic & Smart Parking', icon: Car },
    { id: 'audio-visual', label: 'COB Video Walls & AV', icon: Tv },
    { id: 'fiber-integration', label: 'One Fiber Backbone', icon: Network },
    { id: 'industries', label: 'Industry Applications', icon: Layers }
  ];

  const scrollToAnchor = (id) => {
    setActiveAnchor(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="solutions-page animate-fade-in">
      {/* 1. Page Hero Header */}
      <section className="solutions-hero-section">
        <div className="container">
          <div className="solutions-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Solutions</span>
          </div>

          <div className="solutions-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> ENTERPRISE SYSTEM ARCHITECTURE
            </span>
            <h1 className="solutions-page-title">
              Autonomous Systems & Intelligent Technology Solutions
            </h1>
            <p className="solutions-page-sub">
              Explore our comprehensive portfolio of mission-critical AI surveillance, IoT residential automation, CE-certified smart parking, and consolidated single-fiber infrastructure.
            </p>
          </div>

          {/* Quick Anchor Jump Bar */}
          <div className="solutions-anchor-bar">
            {SOLUTION_NAV_ITEMS.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`anchor-pill ${activeAnchor === item.id ? 'active' : ''}`}
                  onClick={() => scrollToAnchor(item.id)}
                >
                  <IconComp size={15} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Solutions Components */}
      <div className="solutions-body-wrapper">
        {/* Solution 1: CCTV & Metrisys AI Video Analytics */}
        <div id="ai-analytics" className="solution-section-anchor">
          <AiFeatureSection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 2: IoT Smart Home & Multi-Switch Portfolio */}
        <div id="smart-home" className="solution-section-anchor">
          <SmartHomeSection 
            onSelectSolution={navigateToSolution}
            onOpenContactModal={onOpenContactModal}
          />
        </div>

        {/* Solution 3: Smart Building & Facilities */}
        <div id="smart-building" className="solution-section-anchor">
          <SmartBuildingSection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 4: Security & Access Control */}
        <div id="access-control" className="solution-section-anchor">
          <SecuritySection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 5: Smart Traffic & Parking Management */}
        <div id="traffic-parking" className="solution-section-anchor">
          <ParkingSection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 6: Audio Visual & Central Command Video Walls */}
        <div id="audio-visual" className="solution-section-anchor">
          <AudioVisualSection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 7: All Services in One Fiber Cable */}
        <div id="fiber-integration" className="solution-section-anchor">
          <SystemsIntegrationSection onSelectSolution={navigateToSolution} />
        </div>

        {/* Solution 8: Industry Applications */}
        <div id="industries" className="solution-section-anchor">
          <IndustriesSection />
        </div>
      </div>

      {/* Call to Action */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
