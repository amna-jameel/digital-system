import React, { useState } from 'react';
import { ArrowRight, MapPin, Building, Cpu, CheckCircle, Award, ExternalLink } from 'lucide-react';
import { FLAGSHIP_PROJECT, MAJOR_ACHIEVEMENTS } from '../data/companyData';
import './SelectedProjectSection.css';

export default function SelectedProjectSection({ onSelectProject }) {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'dubai', label: 'Dubai & UAE' },
    { id: 'pakistan', label: 'Pakistan Landmark & HEC' },
    { id: 'commercial', label: 'Smart Residential & Towers' }
  ];

  const filteredAchievements = MAJOR_ACHIEVEMENTS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dubai') return item.location.toLowerCase().includes('dubai') || item.location.toLowerCase().includes('uae');
    if (activeTab === 'pakistan') return item.location.toLowerCase().includes('pakistan') || item.category.toLowerCase().includes('hec');
    if (activeTab === 'commercial') return item.category.toLowerCase().includes('smart') || item.category.toLowerCase().includes('tower');
    return true;
  });

  return (
    <section id="project" className="selected-project-section">
      <span id="case-studies" className="nav-anchor"></span>
      <div className="container">
        {/* Editorial Feature Header */}
        <div className="project-badge-bar">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> {FLAGSHIP_PROJECT.badge}
          </span>
        </div>

        {/* Large Single Editorial Showcase */}
        <div className="project-editorial-card">
          <div className="project-image-container">
            <img 
              src={FLAGSHIP_PROJECT.image} 
              alt={FLAGSHIP_PROJECT.title} 
              className="project-hero-img"
            />
            <div className="project-image-badge">
              <Building size={14} className="accent-icon" />
              <span>International Mega Developments</span>
            </div>
          </div>

          <div className="project-info-container">
            <h2 className="project-title">{FLAGSHIP_PROJECT.title}</h2>

            <div className="project-meta-row">
              <div className="meta-pill">
                <MapPin size={14} className="accent-icon" />
                <span>{FLAGSHIP_PROJECT.location}</span>
              </div>

              <div className="meta-pill">
                <Building size={14} className="accent-icon" />
                <span>{FLAGSHIP_PROJECT.industry}</span>
              </div>
            </div>

            <p className="project-desc">{FLAGSHIP_PROJECT.description}</p>

            <div className="project-solutions-used">
              <span className="solutions-label">Solutions Deployed:</span>
              <div className="solutions-tags">
                {FLAGSHIP_PROJECT.solutionsUsed.map((sol, idx) => (
                  <span key={idx} className="solution-tag">
                    <CheckCircle size={12} className="accent-icon" /> {sol}
                  </span>
                ))}
              </div>
            </div>

            <button 
              type="button" 
              onClick={onSelectProject}
              className="btn btn-primary project-cta"
            >
              <span>Discuss Similar Implementation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Major Achievements Portfolio Grid (From Pages 62-75 of Document) */}
        <div className="major-achievements-container">
          <div className="achievements-head-row">
            <div>
              <span className="eyebrow">
                <Award size={14} className="accent-icon" /> TRACK RECORD OF EXCELLENCE
              </span>
              <h3 className="section-title">Major Achievements & Reference Projects</h3>
              <p className="section-subtitle">
                Proven track record delivering mission-critical CCTV, ANPR, audio-visual, and smart infrastructure across Dubai, Pakistan, and the GCC.
              </p>
            </div>

            <div className="achievement-filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  className={`achieve-tab ${activeTab === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="achievements-grid">
            {filteredAchievements.map((item, idx) => (
              <div key={idx} className="achievement-card">
                {item.image && (
                  <div className="achieve-img-container">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="achieve-photo"
                      loading="lazy"
                    />
                    <span className="achieve-category-badge">{item.category}</span>
                  </div>
                )}

                <div className="achieve-content">
                  <div className="achieve-location-row">
                    <MapPin size={13} className="accent-icon" />
                    <span>{item.location}</span>
                  </div>

                  <h4 className="achieve-title">{item.title}</h4>
                  <p className="achieve-desc">{item.desc}</p>

                  <div className="achieve-card-footer">
                    <button 
                      type="button" 
                      className="achieve-btn"
                      onClick={onSelectProject}
                    >
                      <span>View Project Scope</span>
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
