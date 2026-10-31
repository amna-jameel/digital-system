import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Globe, Search, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenLocationModal, onOpenSearchModal, onOpenContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky header shadow & glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Direct 6 Main Navigation Links
  const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/solutions', label: 'Solutions' },
    { to: '/products', label: 'Products' },
    { to: '/projects', label: 'Projects' },
    { to: '/clients', label: 'Clients' }
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Metrisys Brand Logo (Primary Brand, image ONLY, no text beside it) */}
        <Link 
          to="/" 
          className="brand-logo metrisys-brand-link"
          aria-label="Metrisys Homepage"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/images/metrisys-logo-white.png" 
            alt="Metrisys — Reshaping Communication" 
            className="navbar-brand-img"
          />
        </Link>

        {/* 6 Direct Main Navigation Links (No Dropdowns) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-direct-link ${isActive ? 'active' : ''}`}
            >
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Right Side Header Controls */}
        <div className="header-actions">
          <button 
            type="button" 
            onClick={onOpenSearchModal} 
            className="action-btn"
            aria-label="Search site content"
            title="Search"
          >
            <Search size={18} />
          </button>

          <button 
            type="button" 
            onClick={onOpenLocationModal} 
            className="global-selector-btn"
            aria-label="Select global region"
          >
            <Globe size={16} className="globe-icon" />
            <span className="selector-text">5 Hubs</span>
          </button>

          <button 
            type="button" 
            onClick={onOpenContactModal}
            className="btn btn-primary nav-cta"
          >
            <span>Discuss Project</span>
            <ArrowRight size={14} />
          </button>

          {/* Accessible Mobile Menu Hamburger */}
          <button 
            type="button"
            className={`mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            <span className="hamburger-box" aria-hidden="true">
              <span className="hamburger-line line-1"></span>
              <span className="hamburger-line line-2"></span>
              <span className="hamburger-line line-3"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Clean Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer" 
          className="mobile-drawer animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-inner container">
            <nav className="mobile-direct-nav">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenSearchModal(); }} 
                className="btn btn-secondary-dark full-width"
              >
                <Search size={16} />
                <span>Search Content</span>
              </button>

              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenLocationModal(); }} 
                className="btn btn-secondary-dark full-width"
              >
                <Globe size={16} />
                <span>5 Regional Operating Hubs</span>
              </button>
              
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenContactModal(); }} 
                className="btn btn-primary full-width"
              >
                <span>Discuss a Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
