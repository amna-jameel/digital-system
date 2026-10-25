import React, { useState } from 'react';
import { X, Search, Globe, MapPin, ArrowRight, Building2, ShieldCheck, Check } from 'lucide-react';
import { GLOBAL_REGIONS } from '../data/companyData';
import './LocationSelectorModal.css';

export default function LocationSelectorModal({ isOpen, onClose, onSelectCountry, selectedRegionId }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredRegions = GLOBAL_REGIONS.filter(region =>
    region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    region.hubs.some(hub => hub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="location-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="location-modal-header">
          <div className="header-title-group">
            <div className="modal-icon-badge">
              <Globe size={20} className="accent-icon" />
            </div>
            <div>
              <span className="eyebrow">GLOBAL OPERATIONAL PRESENCE</span>
              <h2 className="modal-title">Regional Hub Selector</h2>
            </div>
          </div>

          <button type="button" className="close-modal-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Search Field */}
        <div className="search-box-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="location-search-input"
            placeholder="Search country or regional hub..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <button type="button" className="clear-search-btn" onClick={() => setSearchQuery('')}>Clear</button>
          )}
        </div>

        {/* Region List Grid */}
        <div className="region-list-grid">
          {filteredRegions.length > 0 ? (
            filteredRegions.map((region) => {
              const isSelected = selectedRegionId === region.id;
              return (
                <div
                  key={region.id}
                  className={`region-card ${isSelected ? 'is-selected' : ''}`}
                  onClick={() => {
                    onSelectCountry(region.slug);
                    onClose();
                  }}
                >
                  <div className="region-card-header">
                    <div className="flag-title">
                      <span className="country-flag">{region.flag}</span>
                      <div className="country-info">
                        <h3 className="country-name">{region.name}</h3>
                        <span className="country-code">ISO {region.code}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="selected-badge">
                        <Check size={14} /> Active Region
                      </span>
                    )}
                  </div>

                  <div className="hubs-list">
                    <div className="hubs-label">
                      <Building2 size={12} /> Key Operations Hubs:
                    </div>
                    <div className="hubs-chips">
                      {region.hubs.map((hub, idx) => (
                        <span key={idx} className="hub-chip">{hub}</span>
                      ))}
                    </div>
                  </div>

                  <div className="region-footer">
                    <div className="stat-pill">
                      <ShieldCheck size={12} /> {region.stats.projects}+ Deployments
                    </div>
                    <span className="route-link">
                      View Regional Office <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-results">
              <MapPin size={32} className="no-results-icon" />
              <p>No operational region found matching "{searchQuery}"</p>
              <button type="button" className="btn btn-secondary-dark" onClick={() => setSearchQuery('')}>
                Reset Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="location-modal-footer">
          <p className="footer-note">
            Unique Smart Solutions operates across key regional hubs (Pakistan, Saudi Arabia, Dubai, Oman) with centralized engineering support.
          </p>
        </div>
      </div>
    </div>
  );
}
