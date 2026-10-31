import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, CheckCircle2, Award, 
  ArrowRight, Globe, Users, Sparkles 
} from 'lucide-react';
import { CLIENT_LOGOS, BRAND_PARTNERS } from '../data/companyData';
import FinalCtaSection from '../components/FinalCtaSection';
import './ClientsPage.css';

export default function ClientsPage({ onOpenContactModal }) {
  const CLIENT_METRICS = [
    { value: '500+', label: 'Enterprise Systems Deployed' },
    { value: '800+', label: 'Monitored Commercial Facilities' },
    { value: '99.98%', label: 'Infrastructure Telemetry Uptime' },
    { value: '5', label: 'Global Operational Regions' }
  ];

  return (
    <div className="clients-page animate-fade-in">
      {/* 1. Hero Section */}
      <section className="clients-hero-section">
        <div className="container">
          <div className="clients-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Clients</span>
          </div>

          <div className="clients-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> PROVEN TRACK RECORD & TRUST
            </span>
            <h1 className="clients-page-title">
              Enterprise Clients & Technology Alliances
            </h1>
            <p className="clients-page-sub">
              Trusted by government institutions, healthcare universities, luxury real estate developers, and international operators across the UAE, GCC, and South Asia.
            </p>
          </div>

          {/* Metric Badges */}
          <div className="clients-metrics-bar">
            {CLIENT_METRICS.map((metric, idx) => (
              <div key={idx} className="client-metric-box">
                <span className="metric-val">{metric.value}</span>
                <span className="metric-lbl">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Client Deployments Showcase Grid with Authentic Imagery */}
      <section className="clients-showcase-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> LANDMARK CLIENT PORTFOLIO
            </span>
            <h2 className="section-title">Major Client Implementations</h2>
            <p className="section-subtitle">
              Mission-critical installations delivering security, automation, and optical telemetry.
            </p>
          </div>

          <div className="clients-grid">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="enterprise-client-card">
                <div className="client-card-image-wrap">
                  <img 
                    src={client.image} 
                    alt={client.name} 
                    className="client-card-img" 
                    loading="lazy" 
                  />
                  <div className="client-image-overlay"></div>
                </div>

                <div className="client-card-body">
                  <div className="client-type-tag">
                    <Building2 size={13} className="accent-icon" />
                    <span>VERIFIED CLIENT</span>
                  </div>
                  <h3 className="client-card-name">{client.name}</h3>
                  <p className="client-card-desc">{client.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Global Technology & Brand Partners */}
      <section className="clients-partners-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="eyebrow">
              <Award size={14} className="accent-icon" /> OEM & TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="section-title">Operational Integration with Global Brands</h2>
            <p className="section-subtitle">
              Direct engineering partnerships and equipment interoperability with the world's leading smart systems manufacturers.
            </p>
          </div>

          <div className="partners-grid-container">
            {BRAND_PARTNERS.map((brand, idx) => (
              <div key={idx} className="brand-alliance-card">
                <span className="brand-dot"></span>
                <span className="brand-title">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Client Collaboration CTA */}
      <section className="clients-cta-banner">
        <div className="container">
          <div className="client-cta-card">
            <div className="cta-content">
              <span className="eyebrow">PARTNERSHIP & CONTRACTING</span>
              <h3 className="cta-headline">Deploying a New Development or Retrofit?</h3>
              <p className="cta-sub">
                Our regional engineering teams provide end-to-end consulting, system design, hardware procurement, and ELV maintenance SLAs.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary cta-action-btn"
              onClick={onOpenContactModal}
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Standard CTA Footer */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
