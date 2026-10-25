import React from 'react';
import { ArrowRight } from 'lucide-react';
import parkingImg from '../assets/eco-parking.jpg';
import './ParkingSection.css';

export default function ParkingSection({ onSelectSolution }) {
  const mobilityFeatures = [
    { title: 'ANPR Engine', text: 'High-accuracy license plate recognition for GCC & international plates' },
    { title: 'Automated Barriers', text: 'Fast-action boom barrier relays with safety ground loops' },
    { title: 'Vehicle Classification', text: 'Real-time vehicle category, optical capture, and audit logs' },
    { title: 'Smart Bay Guidance', text: 'Overhead slot allocation and directional LED wayfinding' },
    { title: 'Centralized CMS', text: 'Unified parking management, access permits, and revenue tracking' }
  ];

  return (
    <section id="parking" className="parking-section">
      <span id="traffic" className="nav-anchor"></span>
      <span id="anpr" className="nav-anchor"></span>
      <div className="container">
        <div className="parking-editorial-box">
          <div className="parking-text-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> SMART PARKING & VEHICLE ACCESS
            </span>

            <h2 className="parking-title">
              AI-driven vehicle mobility.
            </h2>

            <p className="parking-subtitle">
              Automated ANPR vehicle recognition, high-speed barrier gates, and intelligent parking bay guidance engineered for high-density enterprise environments.
            </p>

            <div className="mobility-chips">
              {mobilityFeatures.map((item, idx) => (
                <div key={idx} className="mobility-chip">
                  <span className="chip-bullet"></span>
                  <div className="chip-text-group">
                    <span className="chip-title">{item.title}</span>
                    <span className="chip-separator">•</span>
                    <span className="chip-desc">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('parking-anpr')}
              className="btn btn-primary"
            >
              <span>Explore ANPR & Mobility</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="parking-visual-col">
            <div className="parking-image-wrapper">
              <img 
                src={parkingImg} 
                alt="Smart Parking and ANPR Vehicle Identification Environment" 
                className="parking-img"
              />
              <div className="parking-photo-badge">
                <span className="live-dot"></span>
                <span>COMMERCIAL ANPR INSTALLATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
