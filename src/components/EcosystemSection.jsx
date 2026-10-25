import React from 'react';
import fiberImg from '../assets/eco-fiber.jpg';
import cctvImg from '../assets/eco-surveillance.jpg';
import smartHomeImg from '../assets/eco-smarthome.jpg';
import securityArchImg from '../assets/eco-access.jpg';
import parkingImg from '../assets/eco-parking.jpg';
import controlRoomImg from '../assets/eco-controlroom.jpg';
import './EcosystemSection.css';

const ECOSYSTEM_CARDS = [
  {
    step: '01',
    title: 'One Fiber Backbone',
    subtitle: 'Unified optical link powering network, CCTV, and building infrastructure.',
    image: fiberImg,
    alt: 'High-speed fiber-optic connectivity and network infrastructure'
  },
  {
    step: '02',
    title: 'AI Video Surveillance',
    subtitle: 'Deep learning cameras with real-time detection and autonomous analytics.',
    image: cctvImg,
    alt: 'AI-driven commercial video surveillance and security system setup'
  },
  {
    step: '03',
    title: 'Smart Home & Buildings',
    subtitle: 'KNX touch interfaces, ambient lighting, and smart climate control.',
    image: smartHomeImg,
    alt: 'Luxury architectural smart home villa automation'
  },
  {
    step: '04',
    title: 'Access & Biometrics',
    subtitle: 'Facial recognition speed gates and multi-tiered access control.',
    image: securityArchImg,
    alt: 'Corporate security turnstiles and biometric access architecture'
  },
  {
    step: '05',
    title: 'ANPR & Smart Parking',
    subtitle: 'Automated plate recognition, barrier gates, and slot guidance.',
    image: parkingImg,
    alt: 'Automated vehicle access and smart parking control system'
  },
  {
    step: '06',
    title: 'Central Command Center',
    subtitle: 'Integrated 24/7 video walls and centralized security operations.',
    image: controlRoomImg,
    alt: 'Central control room operators and live video monitoring walls'
  }
];

export default function EcosystemSection() {
  return (
    <section id="why-us" className="ecosystem-section">
      <span id="about" className="nav-anchor"></span>
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> INTEGRATED ARCHITECTURE
          </span>
          <h2 className="section-title">One technology ecosystem.</h2>
          <p className="section-subtitle">
            AI, security, automation and intelligent infrastructure — seamlessly unified.
          </p>
        </div>

        {/* Visual 3-in-a-row Grid */}
        <div className="ecosystem-visual-grid">
          {ECOSYSTEM_CARDS.map((card) => (
            <div key={card.step} className="ecosystem-visual-card">
              <div className="card-image-wrap">
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  loading="lazy" 
                  className="card-photo"
                />
                <div className="card-image-overlay"></div>
              </div>
              <div className="card-info">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-subtitle">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
