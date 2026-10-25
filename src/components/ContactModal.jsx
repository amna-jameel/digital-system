import React, { useState } from 'react';
import { X, Send, CheckCircle, Building, Mail, User, Phone, Globe } from 'lucide-react';
import { GLOBAL_REGIONS } from '../data/companyData';
import './ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    region: 'saudi-arabia',
    solution: 'ai-video-analytics',
    projectScope: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="contact-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="contact-modal-header">
          <div>
            <span className="eyebrow">EXECUTIVE CONSULTATION</span>
            <h2 className="modal-title">Discuss a Project</h2>
          </div>
          <button type="button" className="close-modal-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className="modal-submitted-state">
            <CheckCircle size={48} className="accent-icon animate-fade-in" />
            <h3 className="submitted-title">Inquiry Received</h3>
            <p className="submitted-desc">
              Thank you. A Unique Smart Solutions engineering specialist from your selected region will review your specifications and contact you within 24 hours.
            </p>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => { setSubmitted(false); onClose(); }}
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label"><User size={12} /> Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Executive Director"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label"><Mail size={12} /> Corporate Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label"><Building size={12} /> Organization / Facility</label>
                <input
                  type="text"
                  required
                  placeholder="Company or Government Entity"
                  className="form-input"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label"><Globe size={12} /> Operating Region</label>
                <select
                  className="form-select"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                >
                  {GLOBAL_REGIONS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.flag} {r.name} Hub
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Primary Technology Requirement</label>
              <select
                className="form-select"
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              >
                <option value="ai-video-analytics">AI & Video Analytics</option>
                <option value="security-systems">Security Systems Infrastructure</option>
                <option value="smart-home">Smart Environments & Building Automation</option>
                <option value="parking-anpr">Parking & ANPR Systems</option>
                <option value="audio-visual">Audio Visual & Control Room Video Walls</option>
                <option value="integration">Turnkey Systems Integration Ecosystem</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Scope & Specifications</label>
              <textarea
                rows={4}
                required
                placeholder="Describe facility square footage, location, estimated schedule, or key integration requirements..."
                className="form-textarea"
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
              ></textarea>
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary full-width">
                <span>Submit Technical Consultation Request</span>
                <Send size={16} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
