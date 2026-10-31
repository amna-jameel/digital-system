import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Shield, Cpu, Building2, Car, Home, Layers, 
  MapPin, CheckCircle2, ChevronRight, Award, Globe, ExternalLink
} from 'lucide-react';
import Hero from '../components/Hero';
import FinalCtaSection from '../components/FinalCtaSection';
import { GLOBAL_REGIONS, MAJOR_ACHIEVEMENTS, CLIENT_LOGOS, BRAND_PARTNERS } from '../data/companyData';
import './HomePage.css';

export default function HomePage({ onOpenContactModal, onOpenLocationModal }) {
  // Top 6 Major Solutions for Home Overview
  const HOME_SOLUTIONS = [
    {
      id: 'ai-analytics',
      title: 'CCTV & AI Video Analytics',
      desc: 'Metrisys AI perimeter security, intrusion detection, and real-time vision telemetry.',
      icon: Cpu,
      image: '/images/ai_control.jpg',
      link: '/solutions#ai-analytics'
    },
    {
      id: 'smart-home',
      title: 'IoT Smart Home Automation',
      desc: 'KNX open standard, GVS luxury touch panels, Tuya Zigbee 3.0, and smart switch suites.',
      icon: Home,
      image: '/images/smart_home.jpg',
      link: '/solutions#smart-home'
    },
    {
      id: 'smart-building',
      title: 'Smart Building & Facility Control',
      desc: 'Centralized BMS, energy optimization, and environmental monitoring for commercial towers.',
      icon: Building2,
      image: '/images/smart_building.jpg',
      link: '/solutions#smart-building'
    },
    {
      id: 'access-control',
      title: 'Access Control & Biometrics',
      desc: 'Facial recognition terminals, optical speed gates, and UVIS under-vehicle scanning.',
      icon: Shield,
      image: '/images/security.jpg',
      link: '/solutions#access-control'
    },
    {
      id: 'traffic-parking',
      title: 'Smart Traffic & ANPR Parking',
      desc: 'Deep learning license plate recognition, automated barrier gates, and slot guidance.',
      icon: Car,
      image: '/images/parking.jpg',
      link: '/solutions#traffic-parking'
    },
    {
      id: 'fiber-integration',
      title: 'One Fiber Consolidated Backbone',
      desc: 'Consolidating 14 essential building services over a single high-speed optical link.',
      icon: Layers,
      image: '/images/integration.jpg',
      link: '/solutions#fiber-integration'
    }
  ];

  // Featured Products for Home
  const FEATURED_PRODUCTS = [
    {
      name: 'Tuya Smart LCD Scene & Rotary Dial Switches',
      category: 'Smart Home & KNX',
      desc: '3.5" touch LCD scene switch, 360° rotary thermostat knob, and 4-gang OLED relay panels.',
      image: '/images/smart_tuya_rotary_switches.jpg'
    },
    {
      name: 'Modular Multi-Gang Wall Switch Suite',
      category: 'Architectural Hardware',
      desc: 'Continuous flush wall plates in 6 finishes with rotary climate knob and safety sockets.',
      image: '/images/smart_switches_wall.jpg'
    },
    {
      name: '64 CH 16 PoE 4K Edge AI NVR Server',
      category: 'AI Video Vision',
      desc: 'Enterprise recording server with real-time deep learning analytics and 400Mbps throughput.',
      image: '/images/integration.jpg'
    },
    {
      name: 'Under Vehicle Inspection (UVIS) & Biometrics',
      category: 'Security & Access',
      desc: 'High-speed line-scan under-chassis camera paired with facial recognition speed gates.',
      image: '/images/security.jpg'
    }
  ];

  // Top 3 Selected Projects for Home
  const HOME_PROJECTS = MAJOR_ACHIEVEMENTS.slice(0, 3);

  return (
    <div className="home-page animate-fade-in">
      {/* 1. Strong Hero Section */}
      <Hero 
        onOpenContactModal={onOpenContactModal} 
        onOpenLocationModal={onOpenLocationModal} 
      />

      {/* 2. Brief Company Introduction */}
      <section className="home-intro-section">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-content">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> CORPORATE IDENTITY & LEADERSHIP
              </span>
              <h2 className="section-title">
                Securing Today. Powering Tomorrow with Intelligence.
              </h2>
              <p className="home-intro-lead">
                <strong>Metrisys</strong> delivers next-generation computer vision, neural video analytics, and autonomous infrastructure. Operating under <strong>Unique Future Digital Systems</strong>, we engineer mission-critical systems across commercial towers, universities, and smart city developments.
              </p>
              <div className="home-intro-stats-row">
                <div className="home-stat-box">
                  <span className="home-stat-num">5</span>
                  <span className="home-stat-label">Global Operating Hubs</span>
                </div>
                <div className="home-stat-box">
                  <span className="home-stat-num">500+</span>
                  <span className="home-stat-label">Enterprise Deployments</span>
                </div>
                <div className="home-stat-box">
                  <span className="home-stat-num">14-in-1</span>
                  <span className="home-stat-label">Consolidated Fiber Cable</span>
                </div>
              </div>
              <div className="home-intro-actions">
                <Link to="/about" className="btn btn-primary">
                  <span>Discover About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <button 
                  type="button" 
                  onClick={onOpenContactModal} 
                  className="btn btn-secondary-dark"
                >
                  <span>Request Corporate Brief</span>
                </button>
              </div>
            </div>

            <div className="home-intro-visual">
              <div className="home-parent-card">
                <div className="parent-card-header">
                  <img 
                    src="/images/unique-future-logo.png" 
                    alt="Unique Future Digital Systems" 
                    className="parent-card-logo"
                  />
                  <div className="parent-card-meta">
                    <span className="parent-meta-tag">PARENT COMPANY IDENTITY</span>
                    <h3 className="parent-meta-title">Unique Future Digital Systems</h3>
                  </div>
                </div>
                <p className="parent-card-desc">
                  Providing enterprise backing, global logistics, and technical excellence across UAE, Saudi Arabia, Oman, Portugal, and Pakistan.
                </p>
                <div className="parent-card-features">
                  <div className="parent-feature-item">
                    <CheckCircle2 size={16} className="accent-icon" />
                    <span>25-Year GVS & KNX Smart Automation Partnership</span>
                  </div>
                  <div className="parent-feature-item">
                    <CheckCircle2 size={16} className="accent-icon" />
                    <span>Proprietary Metrisys AI Edge Vision & Perimeter Detection</span>
                  </div>
                  <div className="parent-feature-item">
                    <CheckCircle2 size={16} className="accent-icon" />
                    <span>Authorized Starlink Satellite & Telecom Integration</span>
                  </div>
                </div>
                <Link to="/about#locations" className="parent-card-link">
                  <span>View 5 Regional Operating Hubs</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview of Major Solutions */}
      <section className="home-solutions-section">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> END-TO-END CAPABILITIES
              </span>
              <h2 className="section-title">Major Technology Solutions</h2>
              <p className="section-subtitle">
                Engineered for resilience, high availability, and proactive operational intelligence.
              </p>
            </div>
            <Link to="/solutions" className="btn btn-secondary-dark section-header-cta">
              <span>View All Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-solutions-grid">
            {HOME_SOLUTIONS.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div key={sol.id} className="home-solution-card">
                  <div className="solution-card-img-wrap">
                    <img src={sol.image} alt={sol.title} className="solution-card-img" loading="lazy" />
                    <div className="solution-card-icon-pill">
                      <IconComp size={18} />
                    </div>
                  </div>
                  <div className="solution-card-body">
                    <h3 className="solution-card-title">{sol.title}</h3>
                    <p className="solution-card-desc">{sol.desc}</p>
                    <Link to={sol.link} className="solution-card-link">
                      <span>Explore Details</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Products Showcase */}
      <section className="home-products-section">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> HARDWARE PORTFOLIO
              </span>
              <h2 className="section-title">Featured Equipment & Smart Devices</h2>
              <p className="section-subtitle">
                Certified enterprise hardware, touch interfaces, and deep learning video servers.
              </p>
            </div>
            <Link to="/products" className="btn btn-secondary-dark section-header-cta">
              <span>Browse All Products</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-products-grid">
            {FEATURED_PRODUCTS.map((prod, idx) => (
              <div key={idx} className="home-product-card">
                <div className="home-product-img-wrap">
                  <img src={prod.image} alt={prod.name} className="home-product-img" loading="lazy" />
                  <span className="home-product-category">{prod.category}</span>
                </div>
                <div className="home-product-body">
                  <h3 className="home-product-title">{prod.name}</h3>
                  <p className="home-product-desc">{prod.desc}</p>
                  <div className="home-product-footer">
                    <button 
                      type="button" 
                      onClick={onOpenContactModal}
                      className="btn-link-action"
                    >
                      <span>Inquire Specs</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Selected Projects Showcase */}
      <section className="home-projects-section">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot"></span> PROVEN LANDMARKS
              </span>
              <h2 className="section-title">Selected Landmark Projects</h2>
              <p className="section-subtitle">
                Mission-critical deployments across premier towers, mega malls, and institutions.
              </p>
            </div>
            <Link to="/projects" className="btn btn-secondary-dark section-header-cta">
              <span>Explore All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-projects-grid">
            {HOME_PROJECTS.map((proj, idx) => (
              <div key={idx} className="home-project-card">
                <div className="home-project-img-wrap">
                  <img src={proj.image} alt={proj.title} className="home-project-img" loading="lazy" />
                  <span className="home-project-badge">{proj.category}</span>
                </div>
                <div className="home-project-body">
                  <div className="home-project-loc">
                    <MapPin size={13} className="accent-icon" />
                    <span>{proj.location}</span>
                  </div>
                  <h3 className="home-project-title">{proj.title}</h3>
                  <p className="home-project-desc">{proj.desc}</p>
                  <Link to="/projects" className="home-project-link">
                    <span>View Case Details</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Showcase */}
      <section className="home-clients-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> TRUSTED BY INDUSTRY LEADERS
            </span>
            <h2 className="section-title">Enterprise Clients & Deployments</h2>
            <p className="section-subtitle">
              Delivering operational excellence for government institutions, healthcare campuses, and luxury developers.
            </p>
          </div>

          <div className="home-clients-grid">
            {CLIENT_LOGOS.slice(0, 6).map((client, idx) => (
              <div key={idx} className="home-client-card">
                <div className="home-client-photo-wrap">
                  <img src={client.image} alt={client.name} className="home-client-photo" loading="lazy" />
                </div>
                <div className="home-client-details">
                  <h4 className="home-client-name">{client.name}</h4>
                  <span className="home-client-role">{client.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Alliance Pill Bar */}
          <div className="home-brand-alliances">
            <span className="alliances-title">OPERATIONAL INTEGRATION WITH TOP GLOBAL BRANDS</span>
            <div className="alliances-marquee">
              {BRAND_PARTNERS.slice(0, 16).map((brand, idx) => (
                <span key={idx} className="alliance-pill">{brand}</span>
              ))}
            </div>
            <div className="alliances-cta">
              <Link to="/clients" className="btn btn-secondary-dark">
                <span>View Full Client Portfolio & Alliances</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Locations Overview */}
      <section className="home-locations-section">
        <div className="container">
          <div className="home-locations-card">
            <div className="home-locations-header">
              <div>
                <span className="eyebrow">
                  <Globe size={14} className="accent-icon" /> GLOBAL FOOTPRINT
                </span>
                <h2 className="section-title">5 Operating Hubs Worldwide</h2>
                <p className="section-subtitle">
                  Localized engineering teams, rapid equipment dispatch, and 24/7 technical telemetry.
                </p>
              </div>
              <Link to="/about#locations" className="btn btn-primary">
                <span>Explore All 5 Hubs</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="home-locations-grid">
              {GLOBAL_REGIONS.map((region) => (
                <div key={region.id} className="home-loc-item">
                  <span className="home-loc-flag">{region.flag}</span>
                  <div className="home-loc-info">
                    <h4 className="home-loc-name">{region.name}</h4>
                    <span className="home-loc-addr">{region.address}</span>
                  </div>
                  <span className="home-loc-stat">{region.stats.projects}+ Projects</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Relevant Call to Action */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
