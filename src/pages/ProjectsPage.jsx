import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MapPin, CheckCircle, ArrowRight, 
  Award, ExternalLink, ShieldCheck, Globe 
} from 'lucide-react';
import { FLAGSHIP_PROJECT, MAJOR_ACHIEVEMENTS } from '../data/companyData';
import FinalCtaSection from '../components/FinalCtaSection';
import './ProjectsPage.css';

export default function ProjectsPage({ onOpenContactModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const TABS = [
    { id: 'all', label: 'All Projects' },
    { id: 'dubai', label: 'Dubai & UAE Landmarks' },
    { id: 'pakistan', label: 'Pakistan Landmark & HEC' },
    { id: 'residential', label: 'Smart Towers & Residential' }
  ];

  const filteredProjects = MAJOR_ACHIEVEMENTS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'dubai') {
      return item.location.toLowerCase().includes('dubai') || item.location.toLowerCase().includes('uae');
    }
    if (activeTab === 'pakistan') {
      return item.location.toLowerCase().includes('pakistan') || 
             item.category.toLowerCase().includes('hec') || 
             item.title.toLowerCase().includes('centaurus') ||
             item.title.toLowerCase().includes('university');
    }
    if (activeTab === 'residential') {
      return item.category.toLowerCase().includes('smart') || 
             item.category.toLowerCase().includes('tower') ||
             item.category.toLowerCase().includes('residential') ||
             item.title.toLowerCase().includes('views') ||
             item.title.toLowerCase().includes('badra');
    }
    return true;
  });

  return (
    <div className="projects-page animate-fade-in">
      {/* 1. Hero Section */}
      <section className="projects-hero-section">
        <div className="container">
          <div className="projects-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Projects</span>
          </div>

          <div className="projects-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> PROVEN LANDMARK RECORD
            </span>
            <h1 className="projects-page-title">
              Reference Projects & Major Deployments
            </h1>
            <p className="projects-page-sub">
              Engineering enterprise-grade smart building systems, AI video analytics, and consolidated optical networks across iconic landmarks in the UAE, GCC, and Pakistan.
            </p>
          </div>

          {/* Regional Filter Tabs */}
          <div className="projects-tabs-bar">
            {TABS.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`proj-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Flagship Editorial Showcase Card */}
      <section className="projects-flagship-section">
        <div className="container">
          <div className="flagship-editorial-card">
            <div className="flagship-img-col">
              <img 
                src={FLAGSHIP_PROJECT.image} 
                alt={FLAGSHIP_PROJECT.title} 
                className="flagship-hero-img" 
              />
              <div className="flagship-badge-pill">
                <Building2 size={14} className="accent-icon" />
                <span>International Mega Developments</span>
              </div>
            </div>

            <div className="flagship-info-col">
              <span className="flagship-eyebrow">
                <Award size={13} className="accent-icon" /> {FLAGSHIP_PROJECT.badge}
              </span>
              <h2 className="flagship-title">{FLAGSHIP_PROJECT.title}</h2>

              <div className="flagship-meta-row">
                <div className="flagship-meta-item">
                  <MapPin size={14} className="accent-icon" />
                  <span>{FLAGSHIP_PROJECT.location}</span>
                </div>
                <div className="flagship-meta-item">
                  <Building2 size={14} className="accent-icon" />
                  <span>{FLAGSHIP_PROJECT.industry}</span>
                </div>
              </div>

              <p className="flagship-desc">{FLAGSHIP_PROJECT.description}</p>

              <div className="flagship-solutions-box">
                <span className="solutions-label">SOLUTIONS DEPLOYED:</span>
                <div className="flagship-tags-wrap">
                  {FLAGSHIP_PROJECT.solutionsUsed.map((sol, idx) => (
                    <span key={idx} className="flagship-solution-tag">
                      <CheckCircle size={12} className="accent-icon" /> {sol}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary flagship-cta"
                onClick={onOpenContactModal}
              >
                <span>Discuss Similar Implementation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Major Achievements Showcase Grid */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> VERIFIED TRACK RECORD
            </span>
            <h2 className="section-title">Major Achievements Portfolio</h2>
            <p className="section-subtitle">
              Authentic landmark facilities powered by Metrisys and Unique Future Digital Systems engineering teams.
            </p>
          </div>

          <div className="projects-showcase-grid">
            {filteredProjects.map((proj, idx) => (
              <div key={idx} className="project-showcase-card">
                <div className="project-card-img-wrap">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="project-card-img" 
                    loading="lazy" 
                  />
                  <span className="project-card-category">{proj.category}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-card-location">
                    <MapPin size={13} className="accent-icon" />
                    <span>{proj.location}</span>
                  </div>

                  <h3 className="project-card-title">{proj.title}</h3>
                  <p className="project-card-desc">{proj.desc}</p>

                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="btn-project-inquire"
                      onClick={onOpenContactModal}
                    >
                      <span>Inquire Implementation Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <FinalCtaSection onOpenContactModal={onOpenContactModal} />
    </div>
  );
}
