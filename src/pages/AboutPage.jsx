import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Globe, ShieldCheck, Cpu, Layers, Award, 
  MapPin, Phone, Mail, ExternalLink, ArrowRight, CheckCircle2, 
  Navigation, Users, Sparkles
} from 'lucide-react';
import { GLOBAL_REGIONS, COMPANY_PROFILE_STATS, ECOSYSTEM_FLOW } from '../data/companyData';
import PartnersSection from '../components/PartnersSection';
import FinalCtaSection from '../components/FinalCtaSection';
import fiberImg from '../assets/eco-fiber.jpg';
import cctvImg from '../assets/eco-surveillance.jpg';
import smartHomeImg from '../assets/eco-smarthome.jpg';
import securityArchImg from '../assets/eco-access.jpg';
import parkingImg from '../assets/eco-parking.jpg';
import controlRoomImg from '../assets/eco-controlroom.jpg';
import './AboutPage.css';

export default function AboutPage({ onOpenContactModal }) {
  const [selectedMapRegionId, setSelectedMapRegionId] = useState('dubai');

  // Exact 5 company locations defined in company data
  const FIVE_LOCATIONS = [
    {
      id: 'dubai',
      country: 'United Arab Emirates',
      title: 'Dubai Global Headquarters',
      flag: '🇦🇪',
      role: 'Global HQ & Regional Technology Operations',
      address: 'Office No. 4, Nesto Building, Muteena Road, Deira, Dubai, UAE',
      phone: '+971 4 380 9100',
      email: 'nasir.hashmi@alwathiqservices.com',
      stats: { deployments: 195, monitoredSites: 310, team: '45+ On-Site Engineers' },
      highlights: [
        'Ibn Battuta Building CCTV & Smart Hotel Project',
        'MAG 218 & MAG 214 CCTV & Smart Parking Systems',
        'Palm Views East Jumeirah ELV Maintenance Contract',
        'Badra Community Smart Water Management & Telemetry',
        'OSN & Etisalat Regional Infrastructure Deployments'
      ],
      mapQuery: 'Nesto Building, Muteena Road, Deira, Dubai, UAE',
      zoom: 14
    },
    {
      id: 'saudi-arabia',
      country: 'Saudi Arabia',
      title: 'Jeddah Regional Hub',
      flag: '🇸🇦',
      role: 'Kingdom of Saudi Arabia Corporate Operations',
      address: 'Office No. 26 & 28, 4th Floor, Abi Abdulla Building, Bin Laden Street, Al Rawabi, Jeddah, Saudi Arabia',
      phone: '+966 11 490 2200',
      email: 'nasir.hashmi@alwathiqservices.com',
      stats: { deployments: 142, monitoredSites: 210, team: '30+ Systems Specialists' },
      highlights: [
        'Aries Tower Smart Green Apartments (H&H Builders)',
        'Commercial Complex ANPR & Biometric Access Systems',
        'Turnkey High-Density IP Surveillance Networks',
        'Multi-Tenant Residential Automation Deployments'
      ],
      mapQuery: 'Abi Abdulla Building, Bin Laden Street, Al Rawabi, Jeddah, Saudi Arabia',
      zoom: 13
    },
    {
      id: 'pakistan',
      country: 'Pakistan',
      title: 'Lahore & Rahim Yar Khan Regional Hubs',
      flag: '🇵🇰',
      role: 'South Asia Regional Engineering & Campus Deployments',
      address: 'Shamim Building, Office 1A, 2nd Floor, Jail Road, Lahore, Pakistan',
      secondaryAddress: 'United Commercial Center, Abu-Dhabi Road, Opp. KFUEIT University, Rahim Yar Khan, Pakistan',
      phone: '+92 301 4059575',
      email: 'nasir.hashmi@alwathiqservices.com',
      stats: { deployments: 129, monitoredSites: 180, team: '60+ Field Engineers' },
      highlights: [
        'Centaurus Mall Islamabad Smart Services Consultant',
        'King Edward Medical University Smart Audio Visual',
        'GC University Faisalabad HEC Smart & Secure Campus',
        'Jinnah Sindh Medical University Security & CCTV',
        'KFUEIT University Network & AI Surveillance'
      ],
      mapQuery: 'Shamim Building, Jail Road, Lahore, Pakistan',
      zoom: 14
    },
    {
      id: 'oman',
      country: 'Sultanate of Oman',
      title: 'Muscat Hub (Electro Man Partnership)',
      flag: '🇴🇲',
      role: 'GVS KNX Strategic Technology Partner in Oman',
      address: 'Office No. 28, Majan Building, Ghala, Muscat, Sultanate of Oman',
      phone: '+968 79291678',
      email: 'nasir.hashmi@alwathiqservices.com',
      stats: { deployments: 48, monitoredSites: 65, team: '15+ Certified KNX Integrators' },
      highlights: [
        'GVS 25-Year Official KNX Technology Partner in Oman',
        'Sultanate Commercial Port ANPR & Logistics Tracking',
        'Muscat Commercial Building Control & Smart Shading',
        'Luxury Villa KNX Wired & Wireless Deployments'
      ],
      mapQuery: 'Majan Building, Ghala, Muscat, Sultanate of Oman',
      zoom: 13
    },
    {
      id: 'portugal',
      country: 'Portugal',
      title: 'Lisbon European Office',
      flag: '🇵🇹',
      role: 'European Union Technology & Operations Hub',
      address: 'Rua Santa Marta 43 EF 3 D 1150-293 Lisbon, Portugal (NIF: 515518425)',
      phone: '+351 21 092 8500',
      email: 'nasir.hashmi@alwathiqservices.com',
      stats: { deployments: 35, monitoredSites: 50, team: '12+ European Operations Leads' },
      highlights: [
        'Lisbon Tech Center Smart Systems Integration',
        'European Commercial Facilities Management',
        'CE & EU Regulatory Standards Compliance',
        'Cross-Border Telecom & Cloud Systems Integration'
      ],
      mapQuery: 'Rua Santa Marta 43, 1150-293 Lisbon, Portugal',
      zoom: 14
    }
  ];

  const activeMapLocation = FIVE_LOCATIONS.find(loc => loc.id === selectedMapRegionId) || FIVE_LOCATIONS[0];
  const activeMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(activeMapLocation.mapQuery)}&t=m&z=${activeMapLocation.zoom}&ie=UTF8&iwloc=&output=embed`;
  const activeExternalMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeMapLocation.mapQuery)}`;

  const ECOSYSTEM_CARDS = [
    { step: '01', title: 'One Fiber Backbone', desc: 'Single optical link powering network, CCTV, and building infrastructure.', image: fiberImg },
    { step: '02', title: 'AI Video Surveillance', desc: 'Deep learning cameras with real-time detection and autonomous analytics.', image: cctvImg },
    { step: '03', title: 'Smart Home & Buildings', desc: 'KNX touch interfaces, ambient lighting, and smart climate control.', image: smartHomeImg },
    { step: '04', title: 'Access & Biometrics', desc: 'Facial recognition speed gates and multi-tiered access control.', image: securityArchImg },
    { step: '05', title: 'ANPR & Smart Parking', desc: 'Automated plate recognition, barrier gates, and slot guidance.', image: parkingImg },
    { step: '06', title: 'Central Command Center', desc: 'Integrated 24/7 video walls and centralized security operations.', image: controlRoomImg }
  ];

  return (
    <div className="about-page animate-fade-in">
      {/* 1. Page Header & Hero */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">About Us</span>
          </div>

          <div className="about-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> COMPANY PROFILE & HERITAGE
            </span>
            <h1 className="about-page-title">
              Engineering the Intelligent Infrastructure of Tomorrow.
            </h1>
            <p className="about-page-sub">
              <strong>Metrisys</strong> is the artificial intelligence and advanced vision systems brand of <strong>Unique Future Digital Systems</strong>. We design, deploy, and maintain mission-critical infrastructure uniting computer vision, IoT automation, and high-performance optical backbones.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Parent Company & Joint Identity */}
      <section className="about-identity-section">
        <div className="container">
          <div className="about-identity-grid">
            <div className="identity-card-primary">
              <span className="identity-tag">PRIMARY BRAND</span>
              <img 
                src="/images/metrisys-logo-white.png" 
                alt="Metrisys" 
                className="identity-metrisys-logo"
              />
              <p className="identity-lead">
                <strong>Metrisys</strong> represents our proprietary artificial intelligence, computer vision, and neural analytics engine. Designed for mission-critical video analysis, perimeter defense, and automated surveillance.
              </p>
              <ul className="identity-bullets">
                <li><CheckCircle2 size={16} className="accent-icon" /> Metrisys Edge AI human & vehicle classification</li>
                <li><CheckCircle2 size={16} className="accent-icon" /> AI-FIRE flame & smoke perimeter detection</li>
                <li><CheckCircle2 size={16} className="accent-icon" /> Multi-site central management system (CMS)</li>
              </ul>
            </div>

            <div className="identity-card-parent">
              <span className="identity-tag parent-tag">PARENT COMPANY</span>
              <img 
                src="/images/unique-future-logo.png" 
                alt="Unique Future Digital Systems" 
                className="identity-parent-logo"
              />
              <p className="identity-lead">
                <strong>Unique Future Digital Systems</strong> is the international technology holding and parent company behind Metrisys. Established to deliver unified smart systems, engineering procurement, and large-scale contracting.
              </p>
              <ul className="identity-bullets">
                <li><CheckCircle2 size={16} className="accent-icon" /> 5 Global operational regional hubs</li>
                <li><CheckCircle2 size={16} className="accent-icon" /> 25-Year GVS & KNX smart automation alliance</li>
                <li><CheckCircle2 size={16} className="accent-icon" /> Single fiber optic consolidated infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Pillars */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> ARCHITECTURAL FOUNDATION
            </span>
            <h2 className="section-title">The Three Pillars of Our System</h2>
            <p className="section-subtitle">
              {COMPANY_PROFILE_STATS.headline}
            </p>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Cpu size={28} />
              </div>
              <h3 className="pillar-title">AI & Video Analytics</h3>
              <p className="pillar-desc">
                Proprietary Metrisys deep learning algorithms running on edge server hardware, transforming passive camera networks into proactive real-time security systems.
              </p>
              <span className="pillar-stat">Instant Perimeter Defense</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Layers size={28} />
              </div>
              <h3 className="pillar-title">One Fiber Backbone</h3>
              <p className="pillar-desc">
                Consolidating 14 essential systems over a single high-speed optical cable. Reduces building cabling footprint by 70% while guaranteeing ultra-low latency.
              </p>
              <span className="pillar-stat">14-in-1 Consolidated Link</span>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-wrap">
                <Award size={28} />
              </div>
              <h3 className="pillar-title">25-Year KNX Partnership</h3>
              <p className="pillar-desc">
                Authorized strategic alliance with GVS (Guangzhou Video-Star) and KNX Association, delivering precision European-standard smart touch panels and switches.
              </p>
              <span className="pillar-stat">Global Open Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrated Architecture Flow */}
      <section className="about-ecosystem-section">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> UNIFIED INFRASTRUCTURE
              </span>
              <h2 className="section-title">One Technology Ecosystem</h2>
              <p className="section-subtitle">
                How our integrated digital solutions seamlessly operate together across a unified framework.
              </p>
            </div>
          </div>

          <div className="ecosystem-cards-grid">
            {ECOSYSTEM_CARDS.map((card) => (
              <div key={card.step} className="ecosystem-step-card">
                <div className="step-card-img-wrap">
                  <img src={card.image} alt={card.title} className="step-card-img" loading="lazy" />
                  <span className="step-card-num">{card.step}</span>
                </div>
                <div className="step-card-body">
                  <h3 className="step-card-title">{card.title}</h3>
                  <p className="step-card-desc">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Five Dedicated Company Locations */}
      <section id="locations" className="about-locations-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="eyebrow">
              <Globe size={14} className="accent-icon" /> GLOBAL OPERATIONAL FOOTPRINT
            </span>
            <h2 className="section-title">Five Regional Operating Hubs</h2>
            <p className="section-subtitle">
              Fully established corporate facilities providing localized engineering, equipment inventory, and 24/7 technical telemetry.
            </p>
          </div>

          {/* Location Selector Pill Bar */}
          <div className="locations-selector-bar">
            {FIVE_LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                type="button"
                className={`loc-nav-tab ${selectedMapRegionId === loc.id ? 'active' : ''}`}
                onClick={() => setSelectedMapRegionId(loc.id)}
              >
                <span className="tab-flag">{loc.flag}</span>
                <span className="tab-name">{loc.country}</span>
              </button>
            ))}
          </div>

          {/* Interactive Active Hub Focus Card with Live GPS & Map */}
          <div className="location-interactive-dossier">
            <div className="dossier-map-col">
              <div className="map-frame-wrap">
                <iframe
                  title={`Map of ${activeMapLocation.title}`}
                  src={activeMapUrl}
                  className="dossier-map-iframe"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
                <div className="map-badge-overlay">
                  <span className="live-dot"></span>
                  <span>ONLINE GPS: {activeMapLocation.country.toUpperCase()}</span>
                </div>
              </div>
            </div>

            <div className="dossier-info-col">
              <div className="dossier-country-header">
                <span className="dossier-flag-large">{activeMapLocation.flag}</span>
                <div>
                  <span className="dossier-tag">{activeMapLocation.role}</span>
                  <h3 className="dossier-title">{activeMapLocation.title}</h3>
                </div>
              </div>

              <div className="dossier-address-box">
                <div className="address-row">
                  <MapPin size={16} className="accent-icon" />
                  <span>{activeMapLocation.address}</span>
                </div>
                {activeMapLocation.secondaryAddress && (
                  <div className="address-row secondary">
                    <Building2 size={16} className="accent-icon" />
                    <span>{activeMapLocation.secondaryAddress}</span>
                  </div>
                )}
              </div>

              <div className="dossier-stats-row">
                <div className="dossier-stat">
                  <span className="stat-number">{activeMapLocation.stats.deployments}+</span>
                  <span className="stat-label">Enterprise Deployments</span>
                </div>
                <div className="dossier-stat">
                  <span className="stat-number">{activeMapLocation.stats.monitoredSites}</span>
                  <span className="stat-label">Monitored Facilities</span>
                </div>
                <div className="dossier-stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">SOC Operations</span>
                </div>
              </div>

              <div className="dossier-highlights-box">
                <h4 className="highlights-title">Key Landmark Deployments:</h4>
                <ul className="dossier-highlights-list">
                  {activeMapLocation.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="dossier-actions-row">
                <div className="dossier-contact-mini">
                  <span><Phone size={13} /> {activeMapLocation.phone}</span>
                  <span><Mail size={13} /> {activeMapLocation.email}</span>
                </div>
                <a
                  href={activeExternalMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary-dark"
                >
                  <span>Open Directions</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Grid of All Five Locations with Complete Details */}
          <div className="all-five-locations-grid">
            {FIVE_LOCATIONS.map((loc) => (
              <div key={loc.id} className="location-profile-card">
                <div className="loc-card-header">
                  <span className="loc-card-flag">{loc.flag}</span>
                  <div className="loc-card-headings">
                    <span className="loc-card-country">{loc.country}</span>
                    <h3 className="loc-card-title">{loc.title}</h3>
                  </div>
                </div>

                <div className="loc-card-role-pill">
                  <span>{loc.role}</span>
                </div>

                <div className="loc-card-address">
                  <MapPin size={15} className="accent-icon" />
                  <p>{loc.address}</p>
                </div>

                {loc.secondaryAddress && (
                  <div className="loc-card-address secondary">
                    <Building2 size={15} className="accent-icon" />
                    <p>{loc.secondaryAddress}</p>
                  </div>
                )}

                <div className="loc-card-telemetry">
                  <div className="telemetry-box">
                    <span className="telemetry-val">{loc.stats.deployments}+</span>
                    <span className="telemetry-lbl">Projects</span>
                  </div>
                  <div className="telemetry-box">
                    <span className="telemetry-val">{loc.stats.monitoredSites}</span>
                    <span className="telemetry-lbl">Facilities</span>
                  </div>
                  <div className="telemetry-box">
                    <span className="telemetry-val">{loc.stats.team.split(' ')[0]}</span>
                    <span className="telemetry-lbl">Engineers</span>
                  </div>
                </div>

                <div className="loc-card-footer">
                  <div className="loc-card-contact">
                    <span className="contact-line"><Phone size={12} /> {loc.phone}</span>
                    <span className="contact-line"><Mail size={12} /> {loc.email}</span>
                  </div>

                  <div className="loc-card-btn-group">
                    <button
                      type="button"
                      className="btn-loc-map-select"
                      onClick={() => {
                        setSelectedMapRegionId(loc.id);
                        document.querySelector('.location-interactive-dossier')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>View Live GPS</span>
                      <Navigation size={13} />
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-loc-directions"
                      title="Open Google Maps Directions"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Brand Partners Ecosystem */}
      <PartnersSection />

      {/* 7. Consultation Call to Action */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
