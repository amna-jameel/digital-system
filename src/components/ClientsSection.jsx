import React from 'react';
import { CLIENT_LOGOS, BRAND_PARTNERS, COMPANY_PROFILE_STATS } from '../data/companyData';
import { Building2, ShieldCheck, MapPin } from 'lucide-react';
import './ClientsSection.css';

export default function ClientsSection() {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> PROVEN TRACK RECORD
          </span>
          <h2 className="section-title">Clients & Brand Partners</h2>
          <p className="section-subtitle">
            {COMPANY_PROFILE_STATS.tagline}
          </p>
        </div>

        {/* Client Deployments Showcase with Authentic Photos */}
        <div className="clients-showcase-grid">
          {CLIENT_LOGOS.map((client, idx) => (
            <div key={idx} className="client-card">
              <div className="client-img-container">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="client-project-photo" 
                  loading="lazy" 
                />
                <div className="client-img-overlay"></div>
                <div className="client-badge-pill">
                  <Building2 size={12} className="accent-icon" />
                  <span>Deployment</span>
                </div>
              </div>
              <div className="client-info">
                <h3 className="client-name">{client.name}</h3>
                <span className="client-desc">{client.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Partners Marquee Bar */}
        <div className="brand-partners-container">
          <h3 className="partners-bar-title">OPERATIONAL INTEGRATION WITH TOP GLOBAL BRANDS</h3>
          <div className="partners-marquee">
            {BRAND_PARTNERS.map((brand, idx) => (
              <span key={idx} className="partner-brand-pill">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
