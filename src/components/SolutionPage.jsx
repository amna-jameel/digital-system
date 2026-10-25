import React from 'react';
import { ArrowLeft, CheckCircle2, ArrowRight, Cpu, Layers } from 'lucide-react';
import { TECHNOLOGY_SOLUTIONS } from '../data/companyData';
import './SolutionPage.css';

export default function SolutionPage({ solutionId, onBackToHome, onOpenContactModal }) {
  const solution = TECHNOLOGY_SOLUTIONS.find(s => s.id === solutionId || s.aliasId === solutionId) || TECHNOLOGY_SOLUTIONS[0];

  return (
    <div className="solution-page container animate-fade-in">
      {/* Breadcrumbs */}
      <div className="solution-breadcrumb">
        <button type="button" onClick={onBackToHome} className="back-btn">
          <ArrowLeft size={16} /> Back to Global Homepage
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">Solutions</span>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-active">{solution.title}</span>
      </div>

      {/* Hero Header */}
      <div className="solution-hero-grid">
        <div className="solution-hero-info">
          <span className="eyebrow">TECHNOLOGY ARCHITECTURE</span>
          <h1 className="solution-title">{solution.title}</h1>
          <p className="solution-lead">{solution.shortDesc}</p>
          <p className="solution-full-desc">{solution.fullDesc}</p>

          <button 
            type="button" 
            onClick={onOpenContactModal} 
            className="btn btn-primary solution-cta"
          >
            <span>Consult on {solution.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="solution-hero-visual">
          <img src={solution.image} alt={solution.title} className="solution-img" />
        </div>
      </div>

      {/* Capabilities List */}
      <div className="solution-capabilities-section">
        <h2 className="section-title">Core Technology Capabilities</h2>
        <div className="capabilities-cards-grid">
          {solution.capabilities.map((cap, idx) => (
            <div key={idx} className="capability-detail-card">
              <CheckCircle2 size={20} className="accent-icon" />
              <div>
                <h3 className="cap-title">{cap}</h3>
                <p className="cap-desc">Enterprise-grade deployment ready across commercial & government sites.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
