import React, { useState, useRef, useEffect } from 'react';
import { 
  Home, Shield, Flame, Lock, Zap, Music, Wifi, 
  Sliders, Smartphone, Mic, CheckCircle2, ArrowRight,
  Sun, Moon, Film, BedDouble, Wind, Eye, Sparkles,
  ChevronDown, Check
} from 'lucide-react';
import fiberImg from '../assets/eco-fiber.jpg';
import surveillanceImg from '../assets/eco-surveillance.jpg';
import accessImg from '../assets/eco-access.jpg';
import smartHomeImg from '../assets/eco-smarthome.jpg';
import './SmartHomeSection.css';

export default function SmartHomeSection({ onSelectSolution, onOpenContactModal }) {
  // Active pillar tab (from Page 39 of proposal)
  const [activePillar, setActivePillar] = useState('convenience');
  const [activeEcoTier, setActiveEcoTier] = useState('knx');
  const [pillarDropdownOpen, setPillarDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPillarDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const pillars = [
    {
      id: 'convenience',
      title: 'Home Convenience',
      subtitle: 'Lighting, HVAC, Curtains & Media',
      protocol: 'KNX / DALI / Zigbee 3.0',
      image: '/images/smart_switch_wall.jpg',
      features: [
        'Adaptive Circadian Lighting & Precision Dimming',
        'Multi-Zone Climate & Smart AC Balancing',
        'Motorized Curtain & Architectural Blind Controls',
        'Smart TV & Living Scene Synchronization',
        'Flush Touch Glass & Metal Wall Keypads'
      ],
      description: 'Unified room-level automation combining lighting, air conditioning, and motorized shading into intuitive single-touch scenes.'
    },
    {
      id: 'safety',
      title: 'Home Safety',
      subtitle: 'Gas, Fire & Smoke Detection',
      protocol: 'AI-FIRE Optical & Solenoid Shutoff',
      image: '/images/smart_building.jpg',
      features: [
        'Real-time Combustible Gas Leakage Sensors',
        'Optical Smoke & Flame Detection (AI-FIRE)',
        'Automatic Gas Solenoid Valve Shutoff',
        'Smart Electrical Breaker Trip Isolation',
        'Instant Critical Push Alerts to Mobile'
      ],
      description: 'Continuous proactive hazard detection safeguarding your family with automatic gas shutoff and emergency fire telemetry.'
    },
    {
      id: 'security',
      title: 'Home Security',
      subtitle: 'Intruder Detection & Live Video',
      protocol: 'Sunell AI Edge & Active Deterrence',
      image: surveillanceImg,
      features: [
        'AI Human & Vehicle Perimeter Detection',
        'Live Magnetic Window & Door Contact Sensors',
        'AI Night Vision Cameras with Active Deterrence',
        'Silent Anti-Tamper & Glass-Break Alarms',
        'Central Control Room Telemetry Integration'
      ],
      description: 'Proactive surveillance equipped with computer vision to distinguish between residents, delivery staff, and actual perimeter breaches.'
    },
    {
      id: 'access',
      title: 'Access Control',
      subtitle: 'Biometric Locks & Video Intercom',
      protocol: '3D Biometrics & SIP Video',
      image: accessImg,
      features: [
        '3D Face Recognition & Fingerprint Smart Locks',
        'SIP HD Video Door Phone with Remote Unlock',
        'Automated Driveway Gate & Shutter Relays',
        'Wardrobe Sensor Locks & Courtesy Lighting',
        'Encrypted Temporary QR Codes for Guests'
      ],
      description: 'Keyless biometric entry seamlessly communicating with video intercoms and automated vehicular gate barriers.'
    },
    {
      id: 'entertainment',
      title: 'Multi-Room Audio',
      subtitle: 'Immersive Sound & Scene Moods',
      protocol: 'AirPlay 2 / Spotify Connect / Dante',
      image: '/images/av.jpg',
      features: [
        'Multi-Zone Architectural Ceiling Audio',
        'Background Music Host with Spotify/AirPlay',
        'Party, Dinner & Cinema Mood Lighting Presets',
        'Acoustically Tuned Wall-Mounted Controls',
        'Voice-Activated Playlists across Entire Villa'
      ],
      description: 'Audiophile-grade multi-zone sound distribution orchestrating synchronized background music and ambient mood lighting.'
    },
    {
      id: 'networking',
      title: 'Whole-Home WiFi & IoT',
      subtitle: 'Single Fiber & Zigbee 3.0 Mesh',
      protocol: 'G.657A2 Single Optical Fiber & Wi-Fi 6',
      image: fiberImg,
      features: [
        'High-Speed Wi-Fi 6 Mesh Roaming',
        'Zigbee 3.0 Gateway Supporting 100+ Nodes',
        'Single Fiber Optic Backbone Infrastructure',
        'Local Offline Automation (Zero Cloud Lag)',
        'Redundant Starlink Satellite Backup Available'
      ],
      description: 'An enterprise-grade wireless and optical foundation guaranteeing zero dropouts, instant device response, and rock-solid privacy.'
    }
  ];

  const currentPillarData = pillars.find(p => p.id === activePillar) || pillars[0];

  return (
    <section id="smarthome" className="smart-home-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-header smart-home-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> RESIDENTIAL IOT & AI AUTOMATION
          </span>
          <h2 className="section-title">
            Smart Home Automation <span className="text-gradient">with IoT & AI</span>
          </h2>
          <p className="section-subtitle">
            Transforming modern villas and residences into intuitive, autonomous living spaces. Complete harmony of safety, security, climate, and luxury control.
          </p>
        </div>

        {/* Architectural Showcase: Authentic Realistic Photography & Engineering Highlights */}
        <div className="sh-hero-showcase">
          <div className="sh-image-container">
            <img 
              src="/images/smart_home.jpg" 
              alt="Realistic Luxury Smart Home Villa Interior with KNX Wall Panel" 
              className="sh-main-img" 
            />
            <div className="sh-photo-badge">
              <span className="live-dot"></span>
              <span>REALISTIC RESIDENTIAL INSTALLATION</span>
            </div>

            {/* Realistic Interactive Hotspot Pins */}
            <div className="sh-hotspot hotspot-panel">
              <span className="hotspot-pulse"></span>
              <div className="hotspot-card">
                <span className="hotspot-title">GVS KNX Smart Touch S7</span>
                <span className="hotspot-detail">22°C • Circadian Scene Balanced</span>
              </div>
            </div>

            <div className="sh-hotspot hotspot-climate">
              <span className="hotspot-pulse"></span>
              <div className="hotspot-card">
                <span className="hotspot-title">Precision Zone HVAC</span>
                <span className="hotspot-detail">Auto Comfort Balancing</span>
              </div>
            </div>

            <div className="sh-hotspot hotspot-curtains">
              <span className="hotspot-pulse"></span>
              <div className="hotspot-card">
                <span className="hotspot-title">Motorized Drapes</span>
                <span className="hotspot-detail">Circadian Day/Night Dual Shading</span>
              </div>
            </div>
          </div>

          {/* Hardware & Ecosystem Ribbon */}
          <div className="sh-features-banner">
            <div className="sh-hardware-ribbon">
              <div className="ribbon-thumb">
                <img src="/images/smart_switch_wall.jpg" alt="KNX tactile metal switch panel and thermostat rotary knob" />
              </div>
              <div className="ribbon-text">
                <h4>Waltz Touch+ & Flush Metal Keypads</h4>
                <p>Architectural tactile buttons with laser-etched icons, OLED scene displays, and brushed aluminum finishes.</p>
              </div>
            </div>

            <div className="control-modes-bar">
              <span className="modes-label">3 WAYS TO CONTROL AT ANY DISTANCE:</span>
              <div className="modes-list">
                <div className="mode-item">
                  <Sliders size={14} className="accent-icon" />
                  <span><strong>Touch:</strong> Flush OLED glass panels & knobs</span>
                </div>
                <div className="mode-item">
                  <Mic size={14} className="accent-icon" />
                  <span><strong>Voice:</strong> Alexa & Google Assistant voice</span>
                </div>
                <div className="mode-item">
                  <Smartphone size={14} className="accent-icon" />
                  <span><strong>App:</strong> Global mobile control via Tuya / KNX</span>
                </div>
              </div>
            </div>

            <div className="sh-banner-cta">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenContactModal && onOpenContactModal()}
              >
                <span>Request Smart Home Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* The 6 Core IoT Smart Home Pillars */}
        <div className="sh-pillars-section">
          <div className="pillars-intro">
            <span className="eyebrow">UNIFIED RESIDENTIAL INFRASTRUCTURE</span>
            <h3 className="sub-title">Complete 6-Pillar Residential Architecture</h3>
            <p className="sub-desc">
              Every system is linked together in a unified network. Click each pillar to inspect hardware deployments and technical capabilities.
            </p>
          </div>

          {/* 6-Pillar Custom Architectural Dropdown Selector */}
          <div className="pillars-dropdown-wrapper" ref={dropdownRef}>
            <div className="dropdown-label-bar">
              <span className="dropdown-label-text">
                <Sliders size={13} className="accent-icon" />
                SELECT SYSTEM PILLAR
              </span>
              <span className="dropdown-step-indicator">
                PILLAR 0{pillars.findIndex(p => p.id === activePillar) + 1} OF 06
              </span>
            </div>

            <div className="pillars-dropdown-relative">
              <button
                type="button"
                className={`pillars-dropdown-trigger ${pillarDropdownOpen ? 'is-open' : ''}`}
                onClick={() => setPillarDropdownOpen(!pillarDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={pillarDropdownOpen}
              >
                <div className="trigger-main-content">
                  <span className="trigger-index-pill">
                    0{pillars.findIndex(p => p.id === activePillar) + 1}
                  </span>
                  <div className="trigger-text-column">
                    <span className="trigger-heading">{currentPillarData.title}</span>
                    <span className="trigger-description">{currentPillarData.subtitle}</span>
                  </div>
                </div>
                <div className="trigger-action-pill">
                  <span className="trigger-protocol-badge">{currentPillarData.protocol}</span>
                  <ChevronDown
                    size={18}
                    className={`dropdown-chevron-icon ${pillarDropdownOpen ? 'is-rotated' : ''}`}
                  />
                </div>
              </button>

              {pillarDropdownOpen && (
                <div className="pillars-dropdown-menu animate-fade-in" role="listbox">
                  <div className="dropdown-menu-header">
                    <span>COMPLETE 6-PILLAR RESIDENTIAL ARCHITECTURE</span>
                    <span className="close-hint">CHOOSE OPTION (1 - 6)</span>
                  </div>
                  {pillars.map((p, idx) => {
                    const isSelected = activePillar === p.id;
                    return (
                      <div
                        key={p.id}
                        role="option"
                        aria-selected={isSelected}
                        className={`dropdown-option-row ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => {
                          setActivePillar(p.id);
                          setPillarDropdownOpen(false);
                        }}
                      >
                        <span className="option-index">0{idx + 1}</span>
                        <div className="option-meta">
                          <div className="option-title-line">
                            <span className="option-title">{p.title}</span>
                            <span className="option-protocol-tag">{p.protocol}</span>
                          </div>
                          <span className="option-sub">{p.subtitle}</span>
                        </div>
                        {isSelected ? (
                          <span className="option-check-badge">
                            <Check size={14} /> ACTIVE
                          </span>
                        ) : (
                          <span className="option-select-hint">SELECT</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Active Pillar Showcase: Authentic Photo & Technical Specifications */}
          <div className="pillar-showcase-card animate-fade-in" key={currentPillarData.id}>
            <div className="pillar-visual-side">
              <div className="pillar-image-container">
                <img 
                  src={currentPillarData.image} 
                  alt={currentPillarData.title} 
                  className="pillar-showcase-photo"
                />
                <div className="pillar-photo-gradient"></div>
                <div className="pillar-protocol-pill">
                  <span className="protocol-dot"></span>
                  <span>{currentPillarData.protocol}</span>
                </div>
              </div>
            </div>

            <div className="pillar-details-side">
              <div className="pillar-meta-line">
                <span className="pillar-subtitle-tag">{currentPillarData.subtitle}</span>
              </div>
              <h4 className="pillar-headline-text">{currentPillarData.title}</h4>
              <p className="pillar-description-text">{currentPillarData.description}</p>

              <div className="pillar-specs-box">
                <span className="specs-title-label">ENGINEERING SPECIFICATIONS</span>
                <ul className="pillar-specs-list">
                  {currentPillarData.features.map((feat, idx) => (
                    <li key={idx} className="spec-list-item">
                      <span className="spec-bullet-dash">—</span>
                      <span className="spec-item-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 6-Pillar Quick Visual Gallery */}
          <div className="pillar-thumbnails-strip">
            {pillars.map((p, idx) => (
              <div
                key={p.id}
                className={`pillar-thumb-item ${activePillar === p.id ? 'is-active' : ''}`}
                onClick={() => setActivePillar(p.id)}
              >
                <div className="thumb-photo-wrap">
                  <img src={p.image} alt={p.title} />
                  <span className="thumb-index-tag">0{idx + 1}</span>
                </div>
                <span className="thumb-title-text">{p.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Classification of Smart Home Technology (Pages 40 - 42 of Document) */}
        <div className="sh-classification-section">
          <div className="classification-header">
            <span className="eyebrow">TECHNOLOGY ARCHITECTURE</span>
            <h3 className="section-title">Classification Of Smart Home Technology</h3>
            <p className="section-subtitle">
              We provide tailored solutions matching architectural requirements and budget tiers — from global open protocols to flexible IoT ecosystems.
            </p>
          </div>

          <div className="eco-tier-tabs">
            <button 
              type="button" 
              className={`eco-tab ${activeEcoTier === 'knx' ? 'active' : ''}`}
              onClick={() => setActiveEcoTier('knx')}
            >
              1. Branded Intelligent Solutions (KNX & GVS)
            </button>
            <button 
              type="button" 
              className={`eco-tab ${activeEcoTier === 'tuya' ? 'active' : ''}`}
              onClick={() => setActiveEcoTier('tuya')}
            >
              2. Open Platform Tuya & Zigbee 3.0
            </button>
            <button 
              type="button" 
              className={`eco-tab ${activeEcoTier === 'oem' ? 'active' : ''}`}
              onClick={() => setActiveEcoTier('oem')}
            >
              3. Flexible Non-Branded OEM Solutions
            </button>
          </div>

          <div className="eco-content-box">
            {activeEcoTier === 'knx' && (
              <div className="eco-pane animate-fade-in">
                <div className="eco-badge">GOLD STANDARD FOR LUXURY VILLAS & HOTELS</div>
                <h4 className="eco-title">KNX Open Automation & GVS 25-Year Certified Partnership</h4>
                <p className="eco-desc">
                  KNX is the worldwide standard for home and building control offering both wired and wireless reliability. In collaboration with <strong>GVS (Guangzhou Video-Star Intelligent Corp., Ltd)</strong>, a pioneer with 25 years of manufacturing excellence, we deliver customized dashboards, flush architectural switch plates, and rock-solid automation across the Gulf and Pakistan.
                </p>

                <div className="eco-grid-highlights">
                  <div className="eco-item">
                    <h5>GVS Waltz Touch+ & Metal Keypads</h5>
                    <p>4, 6, and 8 metal button modular switch panels with feedback LEDs and luxury finishes.</p>
                  </div>
                  <div className="eco-item">
                    <h5>KNX Smart Touch S7 Display</h5>
                    <p>7" IPS Android-based panel with built-in SIP video intercom, Tuya gateway, and OTA firmware updates.</p>
                  </div>
                  <div className="eco-item">
                    <h5>High-End Brand Ecosystem Compatibility</h5>
                    <p>Seamlessly interconnects with Crestron, Control4, Lutron Electronics, Ecobee, August Home, TADO, and Govee.</p>
                  </div>
                </div>
              </div>
            )}

            {activeEcoTier === 'tuya' && (
              <div className="eco-pane animate-fade-in">
                <div className="eco-badge">SMART IOT FOR MODERN APARTMENTS & RESIDENCES</div>
                <h4 className="eco-title">Tuya Intelligent Smart Home & Zigbee 3.0 Platform</h4>
                <p className="eco-desc">
                  An open, cloud-integrated IoT ecosystem offering instant connectivity for 100+ sub-devices without complex rewiring. Features single-panel control, automatic scenes, and Alexa / Google Home voice coordination.
                </p>

                <div className="eco-grid-highlights">
                  <div className="eco-item">
                    <h5>Central 4" & 10" Control Panels</h5>
                    <p>Quad-core Cortex-A35 processors, dToF sensor wake-up, dual relays, RS485, and Zigbee/Wi-Fi gateways.</p>
                  </div>
                  <div className="eco-item">
                    <h5>F3PRO Multifunctional Scene Switches</h5>
                    <p>3.5-inch touch LCD screens with 4 relay outputs, eight scene bindings, and four dimming channels.</p>
                  </div>
                  <div className="eco-item">
                    <h5>Smart Breakers & Micro-Modules</h5>
                    <p>Wi-Fi smart breaker switch modules, smart curtain motors, and in-wall wireless sockets.</p>
                  </div>
                </div>
              </div>
            )}

            {activeEcoTier === 'oem' && (
              <div className="eco-pane animate-fade-in">
                <div className="eco-badge">VALUE-ENGINEERED FOR LARGE DEVELOPMENTS</div>
                <h4 className="eco-title">Cost-Conscious Commercial & Residential Deployments</h4>
                <p className="eco-desc">
                  For large-scale multi-family buildings and budget-conscious property projects requiring quality automation, we offer durable, tested OEM hardware solutions sourced directly from top certified manufacturers.
                </p>

                <div className="eco-grid-highlights">
                  <div className="eco-item">
                    <h5>Tested Rigorous Standards</h5>
                    <p>CE and RoHS certified switches, sensors, and relays ensuring safe long-term operation.</p>
                  </div>
                  <div className="eco-item">
                    <h5>Full App & Voice Integration</h5>
                    <p>Works seamlessly with standard iOS and Android smartphone applications and cloud assistants.</p>
                  </div>
                  <div className="eco-item">
                    <h5>Flexible Upgrade Path</h5>
                    <p>Standard gang-box sizing allows easy modular upgrading to KNX or high-end systems in the future.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
