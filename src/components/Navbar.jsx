import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Search, Menu, X, ArrowRight, ChevronDown, 
  Shield, Cpu, Car, Home, Layers, Tv, Network, Eye, 
  Building2, Award, CheckCircle2, Sliders, Users, ExternalLink
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenLocationModal, onOpenSearchModal, onOpenContactModal, currentRoute, navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({
    'about-us': true,
    'solutions': true,
    'products': false,
    'projects-clients': false
  });

  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Lock body scroll when mobile menu is open to prevent background scrolling
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

  // Defined strictly according to user requirements
  const NAV_SECTIONS = [
    {
      id: 'about-us',
      title: 'About Us',
      isMega: false,
      items: [
        { label: 'About Us', targetId: 'about', desc: 'Company overview & joint venture mission', icon: Building2 },
        { label: 'Why Choose Us', targetId: 'why-us', desc: 'Integrated one-ecosystem architecture', icon: Award },
        { label: 'Brand Partners', targetId: 'partners', desc: 'GVS, KNX, Tuya, Sunell & global OEMs', icon: CheckCircle2 }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      isMega: true,
      items: [
        { label: 'Solutions Overview', targetId: 'solutions', desc: 'Comprehensive enterprise AI solutions', icon: Layers },
        { label: 'CCTV & AI Analytics', targetId: 'cctv', desc: 'Self-learning computer vision & Sunell thermal', icon: Eye },
        { label: 'Access Control', targetId: 'security', desc: 'Biometric face recognition & speed gates', icon: Shield },
        { label: 'Parking & ANPR', targetId: 'parking', desc: 'License plate tracking & parking reservers', icon: Car },
        { label: 'Smart Traffic', targetId: 'traffic', desc: 'Flow telemetry & violation detection', icon: Sliders },
        { label: 'Smart Home & IoT', targetId: 'smarthome', desc: 'KNX, GVS touch panels & whole-villa IoT', icon: Home },
        { label: 'Digital Transformation', targetId: 'integration', desc: '14-in-1 consolidated fiber optic backbone', icon: Network },
        { label: 'Video Walls', targetId: 'videowalls', desc: 'Curved fine-pitch COB LED command displays', icon: Tv },
        { label: 'IT Networking', targetId: 'integration', desc: 'High-speed GPON & enterprise data racks', icon: Network },
        { label: 'AI Features', targetId: 'ai-features', desc: 'Edge AI processing & real-time telemetry HUD', icon: Cpu }
      ]
    },
    {
      id: 'products',
      title: 'Products',
      isMega: false,
      items: [
        { label: 'Product Categories', targetId: 'products', desc: 'Edge AI boxes, KNX keypads, UVIS & Starlink', icon: Cpu }
      ]
    },
    {
      id: 'projects-clients',
      title: 'Projects & Clients',
      isMega: false,
      items: [
        { label: 'Clients', targetId: 'clients', desc: 'Centaurus, MAG Dubai, HEC & commercial towers', icon: Users },
        { label: 'Projects & Case Studies', targetId: 'project', desc: 'Landmark reference deployments in UAE & GCC', icon: Building2 }
      ]
    }
  ];

  const handleMouseEnter = (menuId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const scrollToTarget = (targetId) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (currentRoute !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    } else {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleMobileGroup = (groupId) => {
    setMobileExpanded(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { 
            e.preventDefault(); 
            navigateTo('home'); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }} 
          className="brand-logo"
        >
          <span className="brand-symbol">
            <span className="symbol-core"></span>
          </span>
          <span className="brand-text">
            <span className="brand-name">UNIQUE</span>
            <span className="brand-sub">SMART SOLUTIONS</span>
          </span>
        </a>

        {/* Structured Desktop Navigation with Dropdowns */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          {NAV_SECTIONS.map((section) => {
            const isOpen = activeDropdown === section.id;
            return (
              <div 
                key={section.id} 
                className={`nav-dropdown-wrapper ${section.isMega ? 'is-mega' : ''}`}
                onMouseEnter={() => handleMouseEnter(section.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`nav-link-btn ${isOpen ? 'active' : ''}`}
                  onClick={() => setActiveDropdown(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                >
                  <span>{section.title}</span>
                  <ChevronDown size={14} className={`chevron-icon ${isOpen ? 'open' : ''}`} />
                </button>

                {/* Dropdown Menu Overlay */}
                {isOpen && (
                  <div className={`nav-dropdown-menu ${section.isMega ? 'mega-menu' : ''} animate-fade-in`}>
                    <div className="dropdown-header">
                      <span className="dropdown-title-label">{section.title.toUpperCase()}</span>
                    </div>

                    <div className={section.isMega ? 'mega-grid' : 'dropdown-list'}>
                      {section.items.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.targetId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToTarget(item.targetId);
                          }}
                          className="dropdown-item"
                        >
                          <div className="item-text">
                            <span className="item-label">{item.label}</span>
                            <span className="item-desc">{item.desc}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Side Controls */}
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
            <span className="selector-text">Global Presence</span>
            <span className="region-indicator">5 Regions</span>
          </button>

          <button 
            type="button" 
            onClick={onOpenContactModal}
            className="btn btn-primary nav-cta"
          >
            <span>Discuss Project</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Trigger (Accessible 3-Line Animated Hamburger) */}
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

      {/* Mobile Navigation Drawer with Accordion Groups */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer" 
          className="mobile-drawer animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-drawer-inner container">
            <div className="mobile-accordion-list">
              {NAV_SECTIONS.map((section) => {
                const isExpanded = !!mobileExpanded[section.id];
                return (
                  <div key={section.id} className="mobile-accordion-group">
                    <button
                      type="button"
                      className="mobile-accordion-header"
                      onClick={() => toggleMobileGroup(section.id)}
                    >
                      <span className="mobile-group-title">{section.title}</span>
                      <ChevronDown size={18} className={`chevron-icon ${isExpanded ? 'open' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="mobile-sub-list animate-fade-in">
                        {section.items.map((item, idx) => (
                          <a
                            key={idx}
                            href={`#${item.targetId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToTarget(item.targetId);
                            }}
                            className="mobile-sub-link"
                          >
                            <span>{item.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenSearchModal(); }} 
                className="btn btn-secondary-dark full-width"
              >
                <Search size={16} />
                <span>Search Site Content</span>
              </button>

              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenLocationModal(); }} 
                className="btn btn-secondary-dark full-width"
              >
                <Globe size={16} />
                <span>Global Region Selector</span>
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
