import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenLocationModal, onSelectCountry, onSelectSolution, navigateTo }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <a href="#hero" onClick={(e) => { e.preventDefault(); navigateTo('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="footer-brand">
              <span className="brand-symbol">
                <span className="symbol-core"></span>
              </span>
              <span className="brand-name">METRISYS</span>
            </a>
            <p className="footer-tagline">
              Enterprise Artificial Intelligence systems company delivering computer vision analytics, neural security infrastructure, autonomous automation, and ultra-HD command video wall operations.
            </p>
            <div className="footer-global-pill" onClick={onOpenLocationModal}>
              <Globe size={14} className="accent-icon" />
              <span>4 Regional Operating Hubs</span>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="footer-col">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#company" onClick={() => navigateTo('home')}>About Us</a></li>
              <li><a href="#careers" onClick={() => navigateTo('home')}>Careers</a></li>
              <li><a href="#ecosystem" onClick={() => navigateTo('home')}>Integrated Approach</a></li>
              <li><a href="#project" onClick={() => navigateTo('home')}>Projects</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><a href="#solutions" onClick={() => onSelectSolution('ai-video-analytics')}>AI and Video Analytics</a></li>
              <li><a href="#solutions" onClick={() => onSelectSolution('security-systems')}>Security Systems</a></li>
              <li><a href="#solutions" onClick={() => onSelectSolution('smart-home')}>Smart Home</a></li>
              <li><a href="#solutions" onClick={() => onSelectSolution('audio-visual')}>AI / Video Wall</a></li>
              <li><a href="#solutions" onClick={() => onSelectSolution('integration')}>Smart City Solutions</a></li>
            </ul>
          </div>

          {/* Column 3: Global Presence */}
          <div className="footer-col">
            <h3 className="footer-heading">Locations</h3>
            <ul className="footer-links">
              <li>
                <button type="button" onClick={() => onSelectCountry('pk')} className="footer-btn-link">
                  <span>🇵🇰 Pakistan</span> <ArrowUpRight size={12} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCountry('saudi-arabia')} className="footer-btn-link">
                  <span>🇸🇦 Saudi Arabia</span> <ArrowUpRight size={12} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCountry('dubai')} className="footer-btn-link">
                  <span>🇦🇪 Dubai</span> <ArrowUpRight size={12} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onSelectCountry('oman')} className="footer-btn-link">
                  <span>🇴🇲 Oman</span> <ArrowUpRight size={12} />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact-info">
              <li>Global Inquiries:</li>
              <li className="info-highlight">contact@metrisys.com</li>
              <li>Regional Desk:</li>
              <li className="info-highlight">+971 4 380 9100</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} METRISYS Future Digital Systems. All rights reserved.
          </span>

          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#compliance">Regulatory & Compliance</a>
            <a href="#security">Security Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
