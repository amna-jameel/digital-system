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

  // Switch Showcase Interactive States
  const [activeRibbonIndex, setActiveRibbonIndex] = useState(0);
  const [activeSwitchFilter, setActiveSwitchFilter] = useState('all');
  const [activeSwitchFinishes, setActiveSwitchFinishes] = useState({
    'tuya-lineup': 'Matte Charcoal',
    'modular-suite': 'Ferrari Red',
    'knx-waltz': 'Brushed Aluminum'
  });
  const [simulatedSwitches, setSimulatedSwitches] = useState({});

  const toggleSwitchSimulation = (switchId) => {
    setSimulatedSwitches(prev => ({
      ...prev,
      [switchId]: !prev[switchId]
    }));
  };

  const setSwitchFinish = (switchId, finishName) => {
    setActiveSwitchFinishes(prev => ({
      ...prev,
      [switchId]: finishName
    }));
  };

  const switchSeriesData = [
    {
      id: 'tuya-lineup',
      category: 'tuya',
      badge: 'TUYA ZIGBEE 3.0 & WI-FI',
      title: 'Tuya Smart Multifunctional Scene & Rotary Climate Series',
      subtitle: 'Smart Home Wall Series • Ningbo Wukong Intelligent Technology',
      image: '/images/smart_tuya_rotary_switches.jpg',
      lead: 'A complete collection of next-gen smart switches featuring high-resolution LCD touch displays, 360° rotary thermostat dials, and tactile multi-gang relay switches with real-time status indicators.',
      models: [
        {
          tag: 'MODEL 01 • TOUCH LCD',
          name: '3.5" IPS Multifunctional Scene Switch',
          desc: 'High-definition full-color display with time (08:53) & weather telemetry, quad rocker keys, and amber backlighting.'
        },
        {
          tag: 'MODEL 02 • CLIMATE DIAL',
          name: 'Smart Rotary Knob Thermostat (24.5°C)',
          desc: 'Circular center OLED gauge, stepless 360° precision rotary dial, dual-mode HVAC control, and 4 touch shortcuts.'
        },
        {
          tag: 'MODEL 03 • CRIMSON RELAY',
          name: 'Ferrari Red 4-Gang Smart Switch',
          desc: 'Vibrant crimson bezel, center horizontal digital clock & weather display (12:03), and 4 tactile relay push buttons.'
        },
        {
          tag: 'MODEL 04 • MATTE DIMMER',
          name: 'Matte Charcoal Dual-Rocker Dimmer',
          desc: 'Integrated digital display (22:03), +/- precision lighting dimming, motorized curtain triggers, and scene recall.'
        }
      ],
      finishes: [
        { name: 'Matte Charcoal', hex: '#1e2025', border: '#4b5563' },
        { name: 'Pearl White', hex: '#f8fafc', border: '#cbd5e1' },
        { name: 'Ferrari Crimson', hex: '#dc2626', border: '#ef4444' }
      ],
      specs: [
        { label: 'Protocols', value: 'Zigbee 3.0 Mesh / 2.4GHz Wi-Fi' },
        { label: 'Screen Displays', value: '3.5" IPS LCD & Circular OLED' },
        { label: 'Relay Load', value: '10A per gang (200W LED max)' },
        { label: 'Voice Ecosystem', value: 'Alexa, Google Assistant, Tuya' },
        { label: 'Wall Box Sizing', value: 'Standard 86×86mm Flush Box' }
      ]
    },
    {
      id: 'modular-suite',
      category: 'modular',
      badge: 'MODULAR MULTI-GANG & FLUSH MOUNT',
      title: 'Architectural Multi-Gang Modular Switch & Rotary Socket Suite',
      subtitle: 'Luxury Villa Wall Infrastructure • 1 to 5 Gang Continuous Plates',
      image: '/images/smart_switches_wall.jpg',
      lead: 'Designed for high-end villas and penthouses. Seamless continuous faceplates integrating 1 to 4-gang switches, climate rotary knobs, dual mini digital telemetry screens, and universal child-safe AC sockets.',
      models: [
        {
          tag: 'ROW 01 • ARCHITECTURAL LINE',
          name: 'Tactile Dual-Rocker Switch Trio',
          desc: 'Matte Black, Titanium Grey, and Polar White with laser-etched iconography and soft amber night-guide LEDs.'
        },
        {
          tag: 'ROW 02 • STATUS SCREENS',
          name: 'Dual-Screen Red & Pearl Switch Units',
          desc: 'Twin synchronized micro-OLED displays (19:56 & 19:55) with room temperature, humidity, and 24-hr digital clock.'
        },
        {
          tag: 'ROW 03 • POWER & ROTARY',
          name: 'Champagne Bronze Dial & Socket Unit',
          desc: 'Illuminated rotary thermostat knob with LED ring, touch lighting switches, and universal 16A multi-pin safety socket.'
        }
      ],
      finishes: [
        { name: 'Carbon Black', hex: '#121417', border: '#334155' },
        { name: 'Titanium Grey', hex: '#4b5263', border: '#64748b' },
        { name: 'Glacier White', hex: '#f1f5f9', border: '#cbd5e1' },
        { name: 'Ferrari Red', hex: '#b91c1c', border: '#ef4444' },
        { name: 'Cobalt Blue', hex: '#1d4ed8', border: '#3b82f6' },
        { name: 'Champagne Gold', hex: '#c8a165', border: '#eab308' }
      ],
      specs: [
        { label: 'Configuration', value: 'Modular 1-Gang to 5-Gang Frame' },
        { label: 'Socket Rating', value: '16A Universal AC with Safety Shutter' },
        { label: 'Climate Control', value: 'Integrated Rotary Knob & Sensor' },
        { label: 'Displays', value: 'Twin Zone OLED Status Telemetry' },
        { label: 'Materials', value: 'Anodized Aluminum & Tempered Glass' }
      ]
    },
    {
      id: 'knx-waltz',
      category: 'knx',
      badge: 'KNX CERTIFIED OPEN STANDARD',
      title: 'GVS KNX Waltz Touch+ & Precision Metal Push Keypads',
      subtitle: '25-Year Certified European Manufacturing Excellence',
      image: '/images/smart_switch_wall.jpg',
      lead: 'The global standard in luxury hotel and presidential villa control. Solid metal tactile keypads with customizable laser engravings, haptic tactile buttons, and rotary optical temperature dial.',
      models: [
        {
          tag: 'WALTZ TOUCH+',
          name: 'Custom Engraved Tactile Metal Keypad',
          desc: '4, 6 or 8 mechanical buttons with feedback LEDs, laser-etched room icons, and aircraft-grade aluminum casing.'
        },
        {
          tag: 'ROTARY THERMOSTAT',
          name: 'Precision HVAC Climate Rotary Dial',
          desc: 'Continuous optical rotary encoder with ambient RGB glow ring and PI temperature balancing algorithm.'
        },
        {
          tag: 'CENTRAL HUB',
          name: 'KNX Smart Touch S7 Panel',
          desc: '7-inch IPS Android touch display with built-in SIP video intercom and comprehensive villa orchestration.'
        }
      ],
      finishes: [
        { name: 'Brushed Aluminum', hex: '#94a3b8', border: '#cbd5e1' },
        { name: 'Anodized Black', hex: '#0f172a', border: '#334155' },
        { name: 'Champagne Bronze', hex: '#92734e', border: '#d97706' }
      ],
      specs: [
        { label: 'Bus Standard', value: 'KNX TP-256 Twisted Pair (21-30V DC)' },
        { label: 'Power Draw', value: '< 10mA (Direct from KNX Bus)' },
        { label: 'Interoperability', value: 'Crestron, Control4, Lutron, GVS' },
        { label: 'Sensors', value: 'Precision Temp & Humidity Sensor' },
        { label: 'Durability', value: '200,000+ Mechanical Actuations' }
      ]
    }
  ];

  const filteredSwitches = activeSwitchFilter === 'all'
    ? switchSeriesData
    : switchSeriesData.filter(s => s.category === activeSwitchFilter);

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

          {/* Hardware & Ecosystem Ribbon with Switch Selector */}
          <div className="sh-features-banner">
            <div className="sh-hardware-ribbon">
              <div className="ribbon-thumbs-stack">
                {switchSeriesData.map((sw, idx) => (
                  <button 
                    type="button"
                    key={sw.id} 
                    className={`ribbon-thumb-item ${activeRibbonIndex === idx ? 'is-active' : ''}`}
                    onClick={() => setActiveRibbonIndex(idx)}
                    title={`View ${sw.title}`}
                  >
                    <img src={sw.image} alt={sw.title} />
                    <span className="ribbon-thumb-num">0{idx + 1}</span>
                  </button>
                ))}
              </div>
              <div className="ribbon-text">
                <div className="ribbon-badge-tag">
                  <span className="ribbon-dot"></span>
                  <span>{switchSeriesData[activeRibbonIndex].badge}</span>
                </div>
                <h4>{switchSeriesData[activeRibbonIndex].title}</h4>
                <p>{switchSeriesData[activeRibbonIndex].lead}</p>
                <div className="ribbon-switch-action-row">
                  <span className="ribbon-hint">Switch 0{activeRibbonIndex + 1} of 03 • Click thumbs to preview</span>
                  <a href="#switches-gallery" className="ribbon-explore-link">
                    <span>Inspect Switch Specs</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
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

        {/* Dedicated Architectural Smart Switches & Wall Keypads Collection */}
        <div id="switches-gallery" className="sh-switches-showcase">
          <div className="switches-showcase-header">
            <div className="switches-header-text">
              <span className="eyebrow">
                <Sliders size={14} className="accent-icon" />
                AUTHENTIC SMART SWITCH HARDWARE
              </span>
              <h3 className="section-title">
                Architectural Smart Switches <span className="text-gradient">& Touch Panels</span>
              </h3>
              <p className="section-subtitle">
                Touch, rotate, or command. Explore our complete portfolio of intelligent wall switches, digital rotary thermostats, and modular multi-gang architectural plates engineered for modern luxury residences.
              </p>
            </div>

            {/* Switch Filter Tabs */}
            <div className="switch-filter-tabs">
              <button 
                type="button" 
                className={`switch-filter-btn ${activeSwitchFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveSwitchFilter('all')}
              >
                All Switches (03 Series)
              </button>
              <button 
                type="button" 
                className={`switch-filter-btn ${activeSwitchFilter === 'tuya' ? 'active' : ''}`}
                onClick={() => setActiveSwitchFilter('tuya')}
              >
                Tuya IoT & Rotary Dials
              </button>
              <button 
                type="button" 
                className={`switch-filter-btn ${activeSwitchFilter === 'modular' ? 'active' : ''}`}
                onClick={() => setActiveSwitchFilter('modular')}
              >
                Multi-Gang Modular Plates
              </button>
              <button 
                type="button" 
                className={`switch-filter-btn ${activeSwitchFilter === 'knx' ? 'active' : ''}`}
                onClick={() => setActiveSwitchFilter('knx')}
              >
                KNX Precision Keypads
              </button>
            </div>
          </div>

          {/* Switch Grid Showcase */}
          <div className="switches-grid">
            {filteredSwitches.map((sw) => {
              const activeColor = activeSwitchFinishes[sw.id] || sw.finishes[0].name;
              const isSimulated = simulatedSwitches[sw.id];

              return (
                <div key={sw.id} className="switch-card animate-fade-in">
                  {/* Card Visual Side */}
                  <div className="switch-card-visual">
                    <div className="switch-img-wrapper">
                      <img src={sw.image} alt={sw.title} className="switch-main-photo" />
                      <div className="switch-img-overlay"></div>
                      
                      <div className="switch-badge-pill">
                        <span className="badge-glow-dot"></span>
                        <span>{sw.badge}</span>
                      </div>

                      {/* Interactive Simulated Glow Pulse */}
                      {isSimulated && (
                        <div className="switch-active-sim-badge">
                          <span className="sim-pulse-dot"></span>
                          <span>RELAY ACTIVE • SCENE TRIGGERED</span>
                        </div>
                      )}
                    </div>

                    {/* Interactive Finish Swatches */}
                    <div className="switch-finishes-bar">
                      <div className="finish-label-group">
                        <span className="finish-tag-title">AVAILABLE FINISH:</span>
                        <span className="finish-active-name">{activeColor}</span>
                      </div>
                      <div className="finish-swatches-list">
                        {sw.finishes.map((f) => (
                          <button
                            key={f.name}
                            type="button"
                            className={`finish-dot ${activeColor === f.name ? 'is-selected' : ''}`}
                            style={{ 
                              backgroundColor: f.hex, 
                              borderColor: activeColor === f.name ? '#00d2ff' : f.border 
                            }}
                            title={`Select finish: ${f.name}`}
                            onClick={() => setSwitchFinish(sw.id, f.name)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Details Side */}
                  <div className="switch-card-info">
                    <div className="switch-meta-top">
                      <span className="switch-sub-title">{sw.subtitle}</span>
                      <h4 className="switch-card-title">{sw.title}</h4>
                      <p className="switch-card-lead">{sw.lead}</p>
                    </div>

                    {/* Model Breakdown List */}
                    <div className="switch-models-box">
                      <span className="models-box-heading">SERIES HARDWARE MODELS</span>
                      <div className="models-list-grid">
                        {sw.models.map((m, mIdx) => (
                          <div key={mIdx} className="model-chip-item">
                            <span className="model-chip-tag">{m.tag}</span>
                            <h5 className="model-chip-name">{m.name}</h5>
                            <p className="model-chip-desc">{m.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specifications */}
                    <div className="switch-specs-row">
                      {sw.specs.map((sp, spIdx) => (
                        <div key={spIdx} className="spec-item-box">
                          <span className="spec-label">{sp.label}</span>
                          <span className="spec-value">{sp.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Card Interactive Actions */}
                    <div className="switch-card-actions">
                      <button
                        type="button"
                        className={`btn-simulate-switch ${isSimulated ? 'is-active' : ''}`}
                        onClick={() => toggleSwitchSimulation(sw.id)}
                      >
                        <Zap size={15} />
                        <span>{isSimulated ? 'Relay Active (Click to Reset)' : 'Simulate Switch Relay & LEDs'}</span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary switch-inquire-btn"
                        onClick={() => onOpenContactModal && onOpenContactModal()}
                      >
                        <span>Inquire About Hardware</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
                <div className="eco-pane-split">
                  <div className="eco-pane-info">
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

                  <div className="eco-pane-visual">
                    <div className="eco-img-box">
                      <img src="/images/smart_switch_wall.jpg" alt="KNX Waltz Touch+ & Rotary Metal Switch" />
                      <div className="eco-img-badge">KNX CERTIFIED HARDWARE</div>
                    </div>
                    <div className="eco-card-meta">
                      <span className="eco-meta-title">GVS KNX Waltz Touch+ Series</span>
                      <span className="eco-meta-desc">Solid tactile metal push buttons & precision rotary HVAC dial</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeEcoTier === 'tuya' && (
              <div className="eco-pane animate-fade-in">
                <div className="eco-pane-split">
                  <div className="eco-pane-info">
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

                  <div className="eco-pane-visual">
                    <div className="eco-img-box">
                      <img src="/images/smart_tuya_rotary_switches.jpg" alt="Tuya Smart Rotary Thermostat & LCD Switches" />
                      <div className="eco-img-badge">TUYA SMART IOT HARDWARE</div>
                    </div>
                    <div className="eco-card-meta">
                      <span className="eco-meta-title">Tuya Smart Home Switch Series</span>
                      <span className="eco-meta-desc">Touch LCD screen, 360° rotary thermostat knob & 4-gang relays</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeEcoTier === 'oem' && (
              <div className="eco-pane animate-fade-in">
                <div className="eco-pane-split">
                  <div className="eco-pane-info">
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

                  <div className="eco-pane-visual">
                    <div className="eco-img-box">
                      <img src="/images/smart_switches_wall.jpg" alt="Modular Multi-Gang Architectural Wall Switch & Socket Suite" />
                      <div className="eco-img-badge">OEM ARCHITECTURAL PLATES</div>
                    </div>
                    <div className="eco-card-meta">
                      <span className="eco-meta-title">Modular Multi-Gang Wall Suite</span>
                      <span className="eco-meta-desc">6 color finishes, dual LCD status screens & universal safety socket</span>
                    </div>
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
