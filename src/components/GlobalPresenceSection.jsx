import React, { useState } from 'react';
import { MapPin, Globe, Building2, Phone, Mail, ArrowRight, CheckCircle2, ExternalLink, Navigation } from 'lucide-react';
import { GLOBAL_REGIONS } from '../data/companyData';
import './GlobalPresenceSection.css';

export default function GlobalPresenceSection({ onSelectCountry }) {
  const [activeRegionId, setActiveRegionId] = useState('dubai');
  const [mapZoom, setMapZoom] = useState('local'); // 'local' or 'corridor'

  const selectedRegion = GLOBAL_REGIONS.find(r => r.id === activeRegionId) || GLOBAL_REGIONS[2];

  const regionLocations = {
    'dubai': {
      query: 'Nesto Building, Muteena Road, Deira, Dubai, UAE',
      localZoom: 14,
      label: 'Dubai Headquarters'
    },
    'saudi-arabia': {
      query: 'Abi Abdulla Building, Bin Laden Street, Al Rawabi, Jeddah, Saudi Arabia',
      localZoom: 13,
      label: 'Saudi Arabia Office'
    },
    'pakistan-lahore': {
      query: 'Shamim Building, Jail Road, Lahore, Pakistan',
      localZoom: 14,
      label: 'Lahore Regional Hub'
    },
    'pakistan-ryk': {
      query: 'Abu-Dhabi Road, Rahim Yar Khan, Pakistan',
      localZoom: 14,
      label: 'Rahim Yar Khan Hub'
    },
    'oman': {
      query: 'Majan Building, Ghala, Muscat, Sultanate of Oman',
      localZoom: 13,
      label: 'Oman Operations'
    }
  };

  const currentLoc = regionLocations[activeRegionId] || regionLocations['dubai'];
  const zoomLevel = mapZoom === 'corridor' ? 5 : currentLoc.localZoom;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(currentLoc.query)}&t=m&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`;
  const externalMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentLoc.query)}`;

  return (
    <section id="global-presence" className="global-presence-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> LIVE SATELLITE & REGIONAL TELEMETRY
          </span>
          <h2 className="section-title">Technology Across Regions</h2>
          <p className="section-subtitle">
            Delivering localized systems engineering, installation, and 24/7 technical operations across 5 primary operational hubs.
          </p>
        </div>

        <div className="presence-grid">
          {/* Left Column: Interactive Original Real Map Canvas */}
          <div className="map-canvas-container">
            <div className="real-map-container">
              {/* Actual Live Map Iframe */}
              <iframe
                title={`Map of ${selectedRegion.name}`}
                className="real-map-iframe"
                src={mapEmbedUrl}
                loading="lazy"
                allowFullScreen
              ></iframe>

              {/* Status Header Overlay */}
              <div className="map-overlay-header">
                <div className="map-live-pill">
                  <span className="live-ping"></span>
                  <span className="live-text">ONLINE GPS: {selectedRegion.name.toUpperCase()}</span>
                </div>

                <div className="map-view-toggle">
                  <button
                    type="button"
                    className={`view-toggle-btn ${mapZoom === 'local' ? 'active' : ''}`}
                    onClick={() => setMapZoom('local')}
                  >
                    City Hub
                  </button>
                  <button
                    type="button"
                    className={`view-toggle-btn ${mapZoom === 'corridor' ? 'active' : ''}`}
                    onClick={() => setMapZoom('corridor')}
                  >
                    Corridor
                  </button>
                </div>
              </div>

              {/* Address Banner Overlay */}
              <div className="map-address-banner">
                <div className="address-meta">
                  <MapPin size={15} className="accent-icon" />
                  <span className="address-text">{selectedRegion.address}</span>
                </div>
                <a 
                  href={externalMapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="external-map-btn"
                  title="Open in Google Maps"
                >
                  <span>Directions</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Country Selector Pills */}
            <div className="country-selector-bar">
              {GLOBAL_REGIONS.map((region) => {
                const isSelected = activeRegionId === region.id;
                return (
                  <button
                    key={region.id}
                    type="button"
                    className={`country-nav-tab ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveRegionId(region.id)}
                  >
                    <span className="tab-flag">{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Regional Hub Dossier */}
          <div className="region-dossier-card">
            <div className="dossier-header">
              <div className="dossier-flag-title">
                <span className="dossier-flag">{selectedRegion.flag}</span>
                <div>
                  <h3 className="dossier-country">{selectedRegion.name} Operations</h3>
                  <span className="dossier-sub">{selectedRegion.stats.infrastructureCoverage}</span>
                </div>
              </div>
            </div>

            <div className="dossier-stats-grid">
              <div className="stat-box">
                <span className="stat-number">{selectedRegion.stats.projects}+</span>
                <span className="stat-label">Enterprise Deployments</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{selectedRegion.stats.activeSites}</span>
                <span className="stat-label">Monitored Facilities</span>
              </div>
            </div>

            <div className="dossier-section">
              <h4 className="dossier-section-title"><Building2 size={14} /> Regional Engineering Hubs</h4>
              <div className="hubs-pill-list">
                {selectedRegion.hubs.map((hub, idx) => (
                  <span key={idx} className="hub-pill">{hub}</span>
                ))}
              </div>
            </div>

            <div className="dossier-section">
              <h4 className="dossier-section-title"><CheckCircle2 size={14} className="accent-icon" /> Key Regional Highlights</h4>
              <ul className="highlights-list">
                {selectedRegion.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dossier-footer">
              <div className="contact-mini">
                <span className="contact-line"><Phone size={12} /> {selectedRegion.phone}</span>
                <span className="contact-line"><Mail size={12} /> {selectedRegion.email}</span>
              </div>

              <button
                type="button"
                className="btn btn-primary full-width"
                onClick={() => onSelectCountry(selectedRegion.slug)}
              >
                <span>View {selectedRegion.name} Office Dossier</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
