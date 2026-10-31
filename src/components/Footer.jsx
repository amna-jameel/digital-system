import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenLocationModal, onOpenContactModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Col with Primary Metrisys & Parent Company Identity */}
          <div className="footer-brand-col">
            <Link 
              to="/" 
              className="footer-brand metrisys-footer-brand"
              aria-label="Metrisys Homepage"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img 
                src="/images/metrisys-logo-white.png" 
                alt="Metrisys — Reshaping Communication" 
                className="footer-metrisys-logo"
              />
            </Link>
            <p className="footer-tagline">
              Enterprise Artificial Intelligence & deep vision analytics transforming complex camera streams into autonomous operational intelligence and proactive security telemetry.
            </p>

            {/* Parent Company Identity */}
            <div className="footer-parent-badge">
              <span className="footer-parent-eyebrow">PARENT COMPANY</span>
              <div className="footer-parent-lockup">
                <img 
                  src="/images/unique-future-logo.png" 
                  alt="Unique Future Digital Systems" 
                  className="footer-parent-logo-img"
                />
                <div className="footer-parent-info">
                  <span className="footer-parent-title">UNIQUE FUTURE DIGITAL SYSTEMS</span>
                  <span className="footer-parent-sub">Global Intelligent Infrastructure Group</span>
                </div>
              </div>
            </div>

            <div className="footer-global-pill" onClick={onOpenLocationModal} role="button" tabIndex={0}>
              <Globe size={14} className="accent-icon" />
              <span>5 Regional Operating Hubs</span>
            </div>
          </div>

          {/* Column 1: Main Pages */}
          <div className="footer-col">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/clients">Clients</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-col">
            <h3 className="footer-heading">Solutions</h3>
            <ul className="footer-links">
              <li><Link to="/solutions#ai-analytics">AI Video Analytics</Link></li>
              <li><Link to="/solutions#smart-home">Smart Home Automation</Link></li>
              <li><Link to="/solutions#access-control">Access & Biometrics</Link></li>
              <li><Link to="/solutions#traffic-parking">Traffic & Smart Parking</Link></li>
              <li><Link to="/solutions#audio-visual">COB Video Walls & AV</Link></li>
              <li><Link to="/solutions#fiber-integration">One Fiber Backbone</Link></li>
            </ul>
          </div>

          {/* Column 3: 5 Company Locations */}
          <div className="footer-col">
            <h3 className="footer-heading">Locations</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about#locations" className="footer-btn-link">
                  <span>🇦🇪 Dubai (HQ)</span> <ArrowUpRight size={12} />
                </Link>
              </li>
              <li>
                <Link to="/about#locations" className="footer-btn-link">
                  <span>🇸🇦 Saudi Arabia</span> <ArrowUpRight size={12} />
                </Link>
              </li>
              <li>
                <Link to="/about#locations" className="footer-btn-link">
                  <span>🇵🇰 Pakistan</span> <ArrowUpRight size={12} />
                </Link>
              </li>
              <li>
                <Link to="/about#locations" className="footer-btn-link">
                  <span>🇴🇲 Oman</span> <ArrowUpRight size={12} />
                </Link>
              </li>
              <li>
                <Link to="/about#locations" className="footer-btn-link">
                  <span>🇵🇹 Portugal</span> <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact-info">
              <li>Global Inquiries:</li>
              <li className="info-highlight">nasir.hashmi@alwathiqservices.com</li>
              <li>Regional Desk:</li>
              <li className="info-highlight">+971 4 380 9100</li>
              <li>Inquiry Support:</li>
              <li>
                <button 
                  type="button" 
                  onClick={onOpenContactModal} 
                  className="footer-contact-btn"
                >
                  Request Corporate Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">
            © {new Date().getFullYear()} Metrisys. A Unique Future Digital Systems Company. All rights reserved.
          </span>

          <div className="legal-links">
            <Link to="/about">About Metrisys</Link>
            <Link to="/solutions">System Architecture</Link>
            <Link to="/about#locations">Global Footprint</Link>
            <Link to="/clients">Enterprise Clients</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
