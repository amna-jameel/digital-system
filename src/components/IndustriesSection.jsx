import React from 'react';
import { Landmark, Building2, GraduationCap, Stethoscope, Factory, Home } from 'lucide-react';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const industries = [
    { title: 'Residential & Smart Villas', icon: Home, desc: 'Luxury KNX automation, GVS glass touch panels, circadian lighting & whole-home security.' },
    { title: 'Oil & Gas Sector', icon: Factory, desc: 'Predictive pipeline maintenance, remote hazardous zone AI surveillance & thermal monitoring.' },
    { title: 'Higher Education & Campuses', icon: GraduationCap, desc: 'HEC Smart & Secure Campuses (GC University, King Edward Medical, JSMU, Kotli & Balochistan).' },
    { title: 'Healthcare & Smart Hospitals', icon: Stethoscope, desc: 'Clean-room access control, patient telemetry, smart thermal scanning & hospital AV networks.' },
    { title: 'Commercial Towers & Malls', icon: Building2, desc: 'Centaurus Islamabad, MAG Towers Dubai, Aries Tower & integrated retail BMS control.' },
    { title: 'Construction & Site Monitoring', icon: Landmark, desc: 'Solar-powered 4G PTZ surveillance, Starlink satellite backhaul & structural progress tracking.' }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header center-header">
          <h2 className="section-title">Industries we serve</h2>
          <p className="section-subtitle">
            Tailored digital systems and integrated technology architecture designed for demanding operational environments.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="industry-card">
                <div className="industry-icon-wrapper">
                  <Icon size={24} className="accent-icon" />
                </div>
                <h3 className="industry-title">{item.title}</h3>
                <p className="industry-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
