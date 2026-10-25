import React from 'react';
import { ArrowLeft, Building2, Phone, Mail, MapPin, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { GLOBAL_REGIONS } from '../data/companyData';
import './LocationPage.css';

export default function LocationPage({ countrySlug, onBackToHome, onOpenContactModal }) {
  const region = GLOBAL_REGIONS.find(r => r.slug === countrySlug) || GLOBAL_REGIONS[0];

  return (
    <div className="location-page container animate-fade-in">
      {/* Top Breadcrumb Nav */}
      <div className="location-breadcrumb">
        <button type="button" onClick={onBackToHome} className="back-btn">
          <ArrowLeft size={16} /> Back to Global Homepage
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Locations</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-active">{region.name}</span>
      </div>

      {/* Hero Banner for Country */}
      <div className="location-hero-card">
        <div className="hero-flag-header">
          <span className="big-flag">{region.flag}</span>
          <div>
            <span className="eyebrow">REGIONAL HEADQUARTERS</span>
            <h1 className="location-title">{region.name} Regional Office</h1>
            <p className="location-sub">{region.stats.infrastructureCoverage}</p>
          </div>
        </div>

        <div className="location-hero-stats">
          <div className="location-stat">
            <span className="stat-val">{region.stats.projects}+</span>
            <span className="stat-name">Active Projects</span>
          </div>
          <div className="location-stat">
            <span className="stat-val">{region.stats.activeSites}</span>
            <span className="stat-name">Monitored Facilities</span>
          </div>
          <div className="location-stat">
            <span className="stat-val">24 / 7</span>
            <span className="stat-name">Regional SOC Support</span>
          </div>
        </div>
      </div>

      {/* Main Details Grid */}
      <div className="location-details-grid">
        <div className="details-col-main">
          <h2 className="details-heading">Regional Engineering Infrastructure</h2>
          <p className="details-paragraph">
            Unique Smart Solutions' {region.name} operations center provides localized deployment, turnkey systems integration, and ongoing lifecycle maintenance for enterprise commercial facilities, smart mobility, and government infrastructure.
          </p>

          <h3 className="subheading">Key Regional Highlights</h3>
          <div className="highlights-cards-grid">
            {region.highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <CheckCircle2 size={18} className="accent-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h3 className="subheading">Operational Hubs & Facilities</h3>
          <div className="hubs-grid">
            {region.hubs.map((hub, idx) => (
              <div key={idx} className="hub-detail-card">
                <Building2 size={16} className="accent-icon" />
                <div>
                  <h4 className="hub-name">{hub}</h4>
                  <span className="hub-role">Full Engineering & Support Center</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="details-col-side">
          <div className="office-contact-card">
            <h3 className="card-heading">Office Contact Details</h3>
            
            <div className="contact-item">
              <MapPin size={16} className="accent-icon" />
              <div>
                <span className="label">Address</span>
                <span className="value">{region.address}</span>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={16} className="accent-icon" />
              <div>
                <span className="label">Telephone</span>
                <span className="value">{region.phone}</span>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={16} className="accent-icon" />
              <div>
                <span className="label">Regional Dispatch Email</span>
                <span className="value">{region.email}</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={onOpenContactModal} 
              className="btn btn-primary full-width"
            >
              <span>Contact {region.name} Office</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
