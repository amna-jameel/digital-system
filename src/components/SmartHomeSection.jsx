import React, { useState } from 'react';
import { 
  Home, Shield, Flame, Lock, Zap, Music, Wifi, 
  Sliders, Smartphone, Mic, CheckCircle2, ArrowRight,
  Sun, Moon, Film, BedDouble, Wind, Eye, Sparkles
} from 'lucide-react';
import fiberImg from '../assets/eco-fiber.jpg';
import surveillanceImg from '../assets/eco-surveillance.jpg';
import accessImg from '../assets/eco-access.jpg';
import smartHomeImg from '../assets/eco-smarthome.jpg';
import './SmartHomeSection.css';

export default function SmartHomeSection({ onSelectSolution, onOpenContactModal }) {
  // Active pillar tab (from Page 39 of proposal)
  const [activePillar, setActivePillar] = useState('convenience');
  // Interactive Smart Home demo state
  const [activeScene, setActiveScene] = useState('evening');
  const [temperature, setTemperature] = useState(22);
  const [curtainsOpen, setCurtainsOpen] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [activeEcoTier, setActiveEcoTier] = useState('knx');

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

  const scenes = [
    { id: 'welcome', name: 'Welcome Home', icon: Sun, temp: 21, curtain: true, desc: 'Warm ambient lighting, AC primed, foyer illuminated' },
    { id: 'evening', name: 'Evening Relax', icon: Sparkles, temp: 22, curtain: false, desc: 'Soft warm glow (2700K), background jazz, blinds drawn' },
    { id: 'cinema', name: 'Cinema Mode', icon: Film, temp: 20, curtain: false, desc: 'Deep accent lights dimmed to 10%, surround sound ready' },
    { id: 'away', name: 'Away & Secure', icon: Shield, temp: 25, curtain: false, desc: 'All lights off, eco HVAC standby, perimeter armed' }
  ];

  const applyScene = (scene) => {
    setActiveScene(scene.id);
    setTemperature(scene.temp);
    setCurtainsOpen(scene.curtain);
  };

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

        {/* Hero Showcase Split: Authentic Realistic Photography & Interactive Room Console */}
        <div className="sh-hero-grid">
          {/* Left: Authentic Architectural Editorial Image with Interactive Hotspots */}
          <div className="sh-image-showcase">
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
                  <span className="hotspot-detail">{temperature}°C • {scenes.find(s => s.id === activeScene)?.name}</span>
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
                  <span className="hotspot-detail">{curtainsOpen ? 'Open (100%)' : 'Closed (Privacy)'}</span>
                </div>
              </div>
            </div>

            {/* Hardware Detail Ribbon */}
            <div className="sh-hardware-ribbon">
              <div className="ribbon-thumb">
                <img src="/images/smart_switch_wall.jpg" alt="KNX tactile metal switch panel and thermostat rotary knob" />
              </div>
              <div className="ribbon-text">
                <h4>Waltz Touch+ & Flush Metal Keypads</h4>
                <p>Architectural tactile buttons with laser-etched icons, OLED scene displays, and brushed aluminum finishes.</p>
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Villa Console */}
          <div className="sh-console-card">
            <div className="console-header">
              <div>
                <span className="console-label">RESIDENTIAL DASHBOARD</span>
                <h3 className="console-title">Living Room & Terrace Zone</h3>
              </div>
              <div className="console-status-pill">
                <span className="status-ping"></span>
                <span>SYSTEM ONLINE</span>
              </div>
            </div>

            {/* Preset Scene Buttons */}
            <div className="console-block">
              <label className="block-label">ONE-TOUCH SCENE PRESETS</label>
              <div className="scenes-grid">
                {scenes.map(s => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      className={`scene-btn ${activeScene === s.id ? 'is-active' : ''}`}
                      onClick={() => applyScene(s)}
                    >
                      <Icon size={16} className="scene-icon" />
                      <span className="scene-name">{s.name}</span>
                    </button>
                  );
                })}
              </div>
              <p className="scene-desc-hint">
                {scenes.find(s => s.id === activeScene)?.desc}
              </p>
            </div>

            {/* Quick Control Sliders & Toggles */}
            <div className="console-controls-grid">
              {/* Climate Control */}
              <div className="control-tile">
                <div className="control-tile-head">
                  <Wind size={16} className="accent-icon" />
                  <span>Climate / Thermostat</span>
                </div>
                <div className="temp-display">
                  <span className="temp-value">{temperature}°C</span>
                  <span className="temp-target">Set Target</span>
                </div>
                <div className="temp-adjust-row">
                  <button 
                    type="button" 
                    className="temp-btn"
                    onClick={() => setTemperature(prev => Math.max(18, prev - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="range" 
                    min="18" 
                    max="28" 
                    value={temperature} 
                    onChange={(e) => setTemperature(Number(e.target.value))}
                    className="temp-slider"
                  />
                  <button 
                    type="button" 
                    className="temp-btn"
                    onClick={() => setTemperature(prev => Math.min(28, prev + 1))}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Shading / Motorized Curtains */}
              <div className="control-tile">
                <div className="control-tile-head">
                  <Sun size={16} className="accent-icon" />
                  <span>Curtain & Shutter</span>
                </div>
                <div className="curtain-status">
                  <span className="curtain-state-text">
                    {curtainsOpen ? 'Curtains Open (Daylight)' : 'Curtains Closed (Privacy)'}
                  </span>
                </div>
                <button 
                  type="button" 
                  className={`toggle-action-btn ${curtainsOpen ? 'active' : ''}`}
                  onClick={() => setCurtainsOpen(!curtainsOpen)}
                >
                  <span>{curtainsOpen ? 'Close Curtains' : 'Open Curtains'}</span>
                </button>
              </div>
            </div>

            {/* 3 Distance Control Modes (From Page 61 of Proposal) */}
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

            <div className="console-footer-cta">
              <button 
                type="button" 
                className="btn btn-primary full-width"
                onClick={() => onOpenContactModal && onOpenContactModal()}
              >
                <span>Request Smart Home Villa Consultation</span>
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

          {/* Architectural Clean Pillar Tabs (No Emojis) */}
          <div className="pillars-nav-bar">
            {pillars.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                className={`pillar-nav-btn ${activePillar === p.id ? 'is-active' : ''}`}
                onClick={() => setActivePillar(p.id)}
              >
                <span className="pillar-nav-index">0{idx + 1}</span>
                <span className="pillar-nav-label">{p.title}</span>
              </button>
            ))}
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
