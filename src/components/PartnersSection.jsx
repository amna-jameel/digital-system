import React from 'react';
import { ShieldCheck, Cpu, Award, Globe, Zap, Network } from 'lucide-react';
import './PartnersSection.css';

export default function PartnersSection() {
  const partners = [
    { name: 'Hardware & Sensor Ecosystem', tag: 'Certified Integration', desc: 'Enterprise OEM cameras, turnstiles, Metrisys analytics & BACnet controllers.', icon: Cpu },
    { name: 'AI & Cloud Infrastructure', tag: 'Strategic Alliance', desc: 'Low-latency RTSP streaming & GPU edge compute node processing.', icon: Network },
    { name: 'Global Tech Distributors', tag: 'Regional Logistics', desc: 'Direct supply chain partners across Pakistan, KSA, Dubai & Oman.', icon: Globe },
    { name: 'Security & Telecom Standards', tag: 'ISO Certified', desc: 'Compliant with Middle East & South Asia security standards.', icon: ShieldCheck }
  ];

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <div className="section-header center-header">
          <h2 className="section-title">Technology & Solution Partners</h2>
          <p className="section-subtitle">
            Co-engineered integrations with world-class technology providers and infrastructure hardware leaders.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div key={idx} className="partner-card">
                <div className="partner-card-header">
                  <div className="partner-icon-box">
                    <Icon size={20} className="accent-icon" />
                  </div>
                  <span className="partner-tag">{partner.tag}</span>
                </div>
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-desc">{partner.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
