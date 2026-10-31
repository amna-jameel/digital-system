import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Shield, CheckCircle2, Sliders, ArrowRight, 
  FileText, Zap, Award, Sparkles 
} from 'lucide-react';
import FinalCtaSection from '../components/FinalCtaSection';
import './ProductsPage.css';

export default function ProductsPage({ onOpenContactModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const PRODUCTS = [
    {
      id: 'tuya-scene-switch',
      name: 'Tuya Smart LCD Scene & Rotary Dial Switches',
      category: 'smart-switches',
      categoryLabel: 'Smart Home & Switches',
      desc: '3.5-inch touch LCD scene switch, 360° rotary thermostat knob (24.5°C), and 4-gang OLED relay panels with Zigbee 3.0 mesh protocol.',
      image: '/images/smart_tuya_rotary_switches.jpg',
      specs: [
        '3.5" HD IPS Touch Screen with Dynamic Widget UX',
        '360° Infinite Rotary Knob for HVAC & Dimming',
        '4-Gang Mechanical Relay with Backlit OLED Buttons',
        'Zigbee 3.0 & Tuya Mesh (100+ Node Sub-Devices)'
      ]
    },
    {
      id: 'modular-smart-switches-suite',
      name: 'Modular Multi-Gang Wall Switch & Socket Suite',
      category: 'smart-switches',
      categoryLabel: 'Architectural Wall Plates',
      desc: 'Architectural continuous flush wall plates in 6 finishes with rotary climate knob, universal safety socket, and digital time screens.',
      image: '/images/smart_switches_wall.jpg',
      specs: [
        'Modular Multi-Gang Continuous Flush Framework',
        '6 Finishes: Matte Black, Brushed Gold, Champagne, Silver, Slate, White',
        'Universal High-Amperage Safety Power Socket & Fast USB-C',
        'Digital Ambient Clock & Room Climate Readout'
      ]
    },
    {
      id: 'gvs-knx-touch',
      name: 'GVS KNX Smart Touch S7 & Waltz Panels',
      category: 'smart-switches',
      categoryLabel: 'Smart Home & KNX',
      desc: '7" IPS Android smart panel with integrated SIP video intercom, Tuya gateway, and 4/6/8 tactile metal button keypads.',
      image: '/images/smart_switch_wall.jpg',
      specs: [
        '7-inch IPS High-Brightness Touch Display',
        'Full KNX Twisted Pair & IP Protocol Certified',
        'Integrated SIP Video Door Phone Station',
        'Circadian Tunable White Lighting & Blind Control'
      ]
    },
    {
      id: 'sunell-ai-metrisys',
      name: 'Sunell & Metrisys AI Human Detection Dual-Spectrum Camera',
      category: 'surveillance',
      categoryLabel: 'AI Video Surveillance',
      desc: 'High-precision dual-spectrum camera with Metrisys AI perimeter protection, intrusion alarm & AI-FIRE flame tracking.',
      image: '/images/ai_control.jpg',
      specs: [
        'Dual-Spectrum Optical & Thermal Sensor Array',
        'Metrisys Edge AI Real-Time Human & Vehicle Filtering',
        'AI-FIRE Flame & Smoke Perimeter Detection (150m)',
        'Strobe Light & Custom Audio Speaker Siren Deterrent'
      ]
    },
    {
      id: 'sunell-64ch-nvr',
      name: '64 CH 16 PoE 4K Edge AI NVR Server',
      category: 'ai-hardware',
      categoryLabel: 'Edge AI & Recording',
      desc: 'Enterprise recording server supporting 400Mbps incoming bandwidth, RAID 0/1/5/6/10, ONVIF S&T, and real-time deep learning analytics.',
      image: '/images/integration.jpg',
      specs: [
        '64 Channels up to 4K / 12MP Resolution',
        '16 Independent Gigabit PoE Network Ports',
        'Redundant Power Supply & Hot-Swappable RAID',
        'Multi-Site Central Management Software (CMS)'
      ]
    },
    {
      id: 'anpr-barrier-system',
      name: 'AI ANPR & CE-Certified Community Barrier Gate',
      category: 'traffic',
      categoryLabel: 'Traffic & Smart Parking',
      desc: 'Deep learning license plate recognition camera with integrated boom barrier, automated parking guidance & reserver units.',
      image: '/images/parking.jpg',
      specs: [
        '99.4% Multi-Country License Plate Recognition Accuracy',
        'High-Speed 1.5s - 3s Brushless DC Motor Barrier',
        'Ultrasonic Space Occupancy Sensors & LED Indicators',
        'Automated Remote Parking Reserver Flaps'
      ]
    },
    {
      id: 'uvis-access-control',
      name: 'Under Vehicle Inspection (UVIS) & Biometrics',
      category: 'access',
      categoryLabel: 'Access & UVIS',
      desc: 'High-speed line-scan camera under-vehicle chassis inspection paired with facial recognition speed gates and turnstiles.',
      image: '/images/security.jpg',
      specs: [
        'Color Line-Scan Linear Array Under-Chassis Imaging',
        'Automatic Foreign Object & Threat Anomaly Detection',
        'Biometric Facial Recognition Speed Turnstiles (0.2s)',
        'TimeTec & i-Vizit Cloud Access Management'
      ]
    },
    {
      id: 'solar-4g-ptz',
      name: 'Site Monitoring Solar 4G PTZ Cameras',
      category: 'surveillance',
      categoryLabel: 'Remote Surveillance',
      desc: 'Zero-power 4G LTE PTZ cameras with 80m night vision, optical zoom, and iOS/Android mobile streaming for remote construction.',
      image: '/images/flagship_project.jpg',
      specs: [
        'Autonomous Monocrystalline Solar Panel & Lithium Pack',
        '4G LTE Cellular Link (No Wired Network Required)',
        '360° Endless Pan & 90° Tilt with 20x Optical Zoom',
        'Construction Progress Time-Lapse Cloud Recording'
      ]
    },
    {
      id: 'starlink-terminal',
      name: 'Authorized Starlink High-Speed Satellite Terminal',
      category: 'ai-hardware',
      categoryLabel: 'Satellite & Off-Grid',
      desc: 'Enterprise satellite internet terminal installation for remote facilities, off-grid villas, and high-bandwidth telemetry uplinks.',
      image: '/images/hero.jpg',
      specs: [
        'High-Speed Low-Latency Satellite Telemetry Link',
        'Certified Weatherproof IP67 Enterprise Mount',
        'Seamless Automatic Failover with 4G / Fiber Backhauls',
        'Authorized Commercial Deployment & Local SLA'
      ]
    },
    {
      id: 'cob-led-videowall',
      name: 'Curved Central Command Room COB Video Wall',
      category: 'display',
      categoryLabel: 'Control Room Displays',
      desc: 'Fine-pitch COB LED curved display wall with CMS local/remote multi-screen management for 24/7 mission-critical operations.',
      image: '/images/av.jpg',
      specs: [
        'Chip-on-Board (COB) Impact & Dust-Resistant Surface',
        'Ultra-Fine 0.9mm - 1.2mm Seamless Pixel Pitch',
        'Low-Latency AVoIP Matrix Switching & Multi-Windowing',
        '24/7 Continuous Mission-Critical Rating'
      ]
    }
  ];

  const CATEGORIES = [
    { id: 'all', label: 'All Equipment' },
    { id: 'smart-switches', label: 'Smart Switches & KNX' },
    { id: 'surveillance', label: 'AI Video Surveillance' },
    { id: 'ai-hardware', label: 'Edge AI & Satellite' },
    { id: 'access', label: 'Access Control & UVIS' },
    { id: 'traffic', label: 'ANPR & Barriers' },
    { id: 'display', label: 'Control Room Displays' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="products-page animate-fade-in">
      {/* 1. Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Products</span>
          </div>

          <div className="products-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> CERTIFIED ENTERPRISE HARDWARE
            </span>
            <h1 className="products-page-title">
              Hardware & Systems Portfolio
            </h1>
            <p className="products-page-sub">
              Commercial-grade IoT touch keypads, AI Edge servers, ANPR vehicle barriers, and optical inspection equipment engineered for high-availability deployments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="products-categories-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`prod-filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Product Showcase Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-catalog-grid">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="catalog-product-card">
                <div className="catalog-img-wrap">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="catalog-product-img" 
                    loading="lazy" 
                  />
                  <span className="catalog-category-tag">{prod.categoryLabel}</span>
                </div>

                <div className="catalog-body">
                  <h3 className="catalog-title">{prod.name}</h3>
                  <p className="catalog-desc">{prod.desc}</p>

                  <div className="catalog-specs-box">
                    <span className="specs-title">TECHNICAL HIGHLIGHTS:</span>
                    <ul className="specs-list">
                      {prod.specs.map((spec, i) => (
                        <li key={i}>
                          <CheckCircle2 size={13} className="accent-icon" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="catalog-card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-inquire-product"
                      onClick={onOpenContactModal}
                    >
                      <span>Inquire / Request Datasheet</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Warranty & Assurance Notice */}
      <section className="products-assurance-section">
        <div className="container">
          <div className="assurance-card">
            <div className="assurance-icon-wrap">
              <Award size={32} />
            </div>
            <div className="assurance-text">
              <h3 className="assurance-title">Enterprise Warranty & Technical SLA</h3>
              <p className="assurance-desc">
                All Metrisys hardware is backed by comprehensive manufacturer warranties, ISO/CE regulatory certifications, and local technical spare parts inventory across our 5 operational hubs.
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContactModal}
              className="btn btn-secondary-dark assurance-cta"
            >
              <span>Download Product Catalog</span>
              <FileText size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
