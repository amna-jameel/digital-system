import centaurusImg from '../assets/Centaurus Islamabad.jpg';
import ibnBattutaImg from '../assets/Ibn battuta.jpg';
import magImg from '../assets/MAG 218 & MAG 214 Dubai.jpg';
import palmViewsImg from '../assets/Palm Views East Jumeirah.jpg';
import kingEdwardImg from '../assets/King Edward Medical University.jpg';
import gcUniversityImg from '../assets/GC University Faisalabad.jpg';
import jinnahMedImg from '../assets/Jinnah Sindh Medical University.jpg';
import balochistanUniImg from '../assets/University of Balochistan Quetta.jpg';
import kotliUniImg from '../assets/Kotli University Kotli.jpg';
import badraImg from '../assets/Badra Community Dubai.jpg';
import osnEtisalatImg from '../assets/OSN & Etisalat.jpg';
import ariesTowerImg from '../assets/Aries Tower Business Avenue.jpg';

export const GLOBAL_REGIONS = [
  {
    id: 'pakistan-lahore',
    name: 'Pakistan (Lahore Hub)',
    slug: 'pk',
    code: 'PK',
    flag: '🇵🇰',
    hubs: ['Lahore (Shamim Building, Jail Road)'],
    address: 'Shamim Building, Office 1A, 2nd Floor, Jail Road, Lahore, Pakistan',
    phone: '+92 301 4059575',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 84, infrastructureCoverage: 'Urban, Education & Residential Infrastructure', activeSites: 120 },
    highlights: ['Centaurus Mall Smart Services Consultant', 'King Edward Medical University Smart AV', 'GC University Faisalabad HEC Campus', 'Jinnah Sindh Medical University Security']
  },
  {
    id: 'pakistan-ryk',
    name: 'Pakistan (Rahim Yar Khan Hub)',
    slug: 'pk-ryk',
    code: 'PK',
    flag: '🇵🇰',
    hubs: ['Rahim Yar Khan (Abu-Dhabi Road)'],
    address: 'United Commercial Center, Abu-Dhabi Road, Opposite KFUEIT University, Rahim Yar Khan, Pakistan',
    phone: '+92 301 4059575',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 45, infrastructureCoverage: 'Regional University & Commercial Infrastructure', activeSites: 60 },
    highlights: ['KFUEIT University Network & AI Surveillance', 'Regional Commercial Security Deployment', 'Kotli University Smart Campus']
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE Headquarters)',
    slug: 'uae',
    code: 'AE',
    flag: '🇦🇪',
    hubs: ['Dubai (Deira Hub & Downtown)'],
    address: 'Office No. 4, Nesto Building, Muteena Road, Deira, Dubai, UAE',
    phone: '+971 4 380 9100',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 195, infrastructureCoverage: 'Commercial, Residential Towers & Hospitality', activeSites: 310 },
    highlights: ['Ibn Battuta Building CCTV & Smart Hotel Project', 'MAG 218 & MAG 214 CCTV & Smart Parking', 'Palm Views East Jumeirah ELV AMC', 'Badra Community Smart Water Management', 'OSN & Etisalat Projects']
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    slug: 'saudi-arabia',
    code: 'SA',
    flag: '🇸🇦',
    hubs: ['Jeddah (Abi Abdulla Building)'],
    address: 'Office No. 26 & 28, 4th Floor, Abi Abdulla Building, Bin Laden Street, Al Rawabi, Jeddah, Saudi Arabia',
    phone: '+966 11 490 2200',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 142, infrastructureCoverage: 'Commercial & Multi-Tenant Facilities', activeSites: 210 },
    highlights: ['Aries Tower Smart Green Apartments (H&H Builders)', 'Commercial Complex ANPR & Smart Access']
  },
  {
    id: 'oman',
    name: 'Oman (Electro Man Partnership)',
    slug: 'oman',
    code: 'OM',
    flag: '🇴🇲',
    hubs: ['Muscat (Majan Building, Ghala)'],
    address: 'Office No. 28, Majan Building, Ghala, Muscat, Sultanate of Oman',
    phone: '+968 79291678',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 48, infrastructureCoverage: 'GVS KNX Smart Home & Enterprise Systems', activeSites: 65 },
    highlights: ['GVS 25-Year KNX Technology Partner in Oman', 'Sultanate Port ANPR & Logistics Hub', 'Muscat Commercial Building Control']
  },
  {
    id: 'portugal',
    name: 'Portugal',
    slug: 'portugal',
    code: 'PT',
    flag: '🇵🇹',
    hubs: ['Lisbon (Rua Santa Marta)'],
    address: 'Rua Santa Marta 43 EF 3 D 1150-293 Lisbon, Portugal (NIF: 515518425)',
    phone: '+351 21 092 8500',
    email: 'nasir.hashmi@alwathiqservices.com',
    stats: { projects: 35, infrastructureCoverage: 'EU Tech & Commercial Infrastructure', activeSites: 50 },
    highlights: ['Lisbon Tech Center Smart Systems', 'European Facilities Management']
  }
];

export const FIBER_OPTIC_SERVICES = [
  'Optic Fiber Laying & Termination',
  'Security & Surveillance System',
  'Triple Play (High-Speed Internet + TV + Phone)',
  'Public Address System (PA)',
  'Audio / Video Intercom & SIP Video',
  'Guest Recognition & Facial Access System',
  'Access Control & Speed Gates',
  'Parking Management & Parking Guidance',
  'Central Control & Command Center',
  'Vehicle Management & Tracking System',
  'Under Vehicle Inspection System (UVIS)',
  'Home Safety & Alarm System',
  'Fire & Flame Detection Alarm (AI-FIRE)',
  'IoT Smart Home Automation System'
];

export const TECHNOLOGY_SOLUTIONS = [
  {
    id: 'smart-home',
    title: 'IoT Smart Home Automation',
    shortDesc: 'KNX open standard, GVS touch panels, Tuya Zigbee 3.0, and whole-villa environmental orchestration.',
    fullDesc: 'Complete residential automation integrating home safety, biometric access, multi-room audio, smart shading, precision climate, and voice control across 3 distance modes (Touch, Voice, App). Partnered with GVS for KNX wired/wireless luxury solutions.',
    capabilities: [
      'GVS KNX Smart Touch S7 & Waltz Panels',
      'Home Safety: Gas Leak & Flame Detection',
      'Keyless Biometric & Video Intercom Access',
      'Adaptive Circadian Lighting & Dimming',
      'Multi-Zone Climate & Shutter Control',
      'Tuya / Zigbee 3.0 100+ Node Sub-Devices'
    ],
    image: '/images/smart_home.jpg'
  },
  {
    id: 'cctv-analytics',
    aliasId: 'ai-video-analytics',
    title: 'CCTV & Metrisys AI Video Analytics',
    shortDesc: 'Convert existing CCTV networks into intelligent monitoring hubs utilizing Metrisys AI Video Analytics technology.',
    fullDesc: 'Unique Smart Solutions deploys Metrisys AI Video Analytics to transform standard video streams into proactive operational intelligence. Advanced computer vision algorithms analyze monitored spaces, detect perimeter breaches, track objects, and alert on critical events in real time.',
    capabilities: [
      'Metrisys AI Human & Vehicle Detection',
      '64-Channel 16 PoE 4K NVR with Edge AI',
      'Face Detection & Guest Recognition',
      'Loitering, Line Crossing & Intrusion Alarms',
      'AI-FIRE Flame & Smoke Perimeter Detection',
      'Dumpster Cam & Remote Property Surveillance'
    ],
    image: '/images/ai_control.jpg'
  },
  {
    id: 'access-control',
    title: 'Access Control & Biometrics',
    shortDesc: 'Facial recognition terminals, optical speed gates, and UVIS under-vehicle inspection.',
    fullDesc: 'Integrated biometric access control with face data verification, floor stand readers, vehicle terminals, UVIS under-vehicle scanning, and turnstile channel integration connected to central admin software.',
    capabilities: [
      'Facial Recognition & Temperature Scanning',
      'Turnstile & Speed Gate Channel Sync',
      'Under Vehicle Inspection System (UVIS)',
      'Time & Attendance Tracking (TimeTec)',
      'Visitor Management (i-Vizit)',
      'Guard Patrol Telemetry & Reporting'
    ],
    image: '/images/security.jpg'
  },
  {
    id: 'traffic-management',
    title: 'Smart Traffic & Parking Management',
    shortDesc: 'Automatic Number Plate Recognition (ANPR), barrier control, and guidance systems.',
    fullDesc: 'AI-powered traffic surveillance, vehicle classification, wrong-way detection, speed estimation, parking guidance displays, and automated parking reservation barriers for residential communities and commercial complexes.',
    capabilities: [
      'ANPR / LPR License Plate Recognition',
      'CE & IAF Certified Entry/Exit Barriers',
      'Automated Parking Guidance & Space Counters',
      'Automated Parking Reserver Units',
      'Illegal Parking & Wrong-Way Alerts',
      'Central Traffic Analytics Dashboard'
    ],
    image: '/images/parking.jpg'
  },
  {
    id: 'fiber-unified',
    title: 'All Services in One Fiber Cable',
    shortDesc: 'Single fiber optic backbone delivering Triple Play, security, intercom, and building control.',
    fullDesc: 'Our signature consolidated fiber optic infrastructure provides 14 essential systems over a single high-speed optical cable — reducing cabling overhead by 70% while guaranteeing ultra-low latency and maximum bandwidth.',
    capabilities: [
      'Triple Play (Internet, TV & Telephony)',
      'Integrated IP Intercom & Public Address',
      'Under Vehicle & Gate Barrier Integration',
      'Central Control Command Center Uplink',
      'Fire, Gas & Environmental Telemetry',
      'High-Density GPON / EPON Distribution'
    ],
    image: '/images/integration.jpg'
  },
  {
    id: 'solar-site-monitoring',
    title: 'Solar 4G Site Monitoring & Starlink',
    shortDesc: 'Autonomous solar PTZ cameras with 4G LTE and Authorized Starlink Satellite connectivity.',
    fullDesc: 'Zero-grid-power surveillance designed for construction sites, agricultural fields, and remote infrastructure. Featuring 4G solar PTZ cameras with 80m night vision and authorized Starlink satellite terminal integration for remote operations.',
    capabilities: [
      'Solar-Powered 4G PTZ Cameras (1080p / 4K)',
      'Optical Zoom with 80m Night Vision',
      'Authorized Starlink Satellite Installer',
      'Remote Mobile App Live View (iOS & Android)',
      'Construction Progress & Drone Integration',
      'Agricultural & Pipeline Security'
    ],
    image: '/images/hero.jpg'
  },
  {
    id: 'video-wall',
    title: 'Central Control Room & COB Displays',
    shortDesc: 'Curved command center LED video walls, CMS local & remote view, and AVoIP switching.',
    fullDesc: 'Turnkey command and control room environments featuring curved fine-pitch COB LED display walls, 24/7 operator consoles, CMS local/remote multi-screen management, and low-latency audio visual switching.',
    capabilities: [
      'Fine-Pitch COB LED Curved Video Walls',
      'CMS Local & Remote Central Monitoring',
      '24/7 Redundant Power & Display Servers',
      'Live Multi-Feed CCTV & ANPR Grid Routing',
      'King Edward Medical University Proven AV',
      'Interactive Command Touch Desktops'
    ],
    image: '/images/av.jpg'
  }
];

export const BRAND_PARTNERS = [
  'GVS (Guangzhou Video-Star)', 'KNX Association', 'Tuya Smart', 'Sunell', 'Starlink Authorized',
  'HIKVISION', 'Dahua Technology', 'Hanwha Vision', 'BOSCH', 'CISCO',
  'SIEMENS', 'Crestron', 'Control4', 'Lutron Electronics', 'Ecobee',
  'August Home', 'TADO', 'GOVEE', 'ZKTeco', 'COMMAX',
  'Rapiscan Systems', 'EATON', 'APC', 'AVAYA', 'Grandstream',
  'ITC Audio', 'TimeTec', 'Guangxiang Optical', 'Unique Smart Solutions'
];

export const MAJOR_ACHIEVEMENTS = [
  {
    title: 'Centaurus Islamabad',
    category: 'Consultant & Smart Services',
    location: 'Islamabad, Pakistan',
    image: centaurusImg,
    desc: 'Provided comprehensive consulting and smart building services integration for Islamabad’s premier landmark mixed-use complex (Mega Mall, Residencia & Corporate Tower).'
  },
  {
    title: 'MAG 218 & MAG 214 Towers',
    category: 'CCTV & Smart Parking',
    location: 'Dubai Marina & JLT, UAE',
    image: magImg,
    desc: 'Turnkey deployment of high-definition IP CCTV surveillance, automatic number plate recognition (ANPR), and automated smart parking management systems across luxury Dubai residential towers.'
  },
  {
    title: 'King Edward Medical University',
    category: 'Smart Audio Visual Infrastructure',
    location: 'Lahore, Pakistan',
    image: kingEdwardImg,
    desc: 'Engineered comprehensive smart audio-visual systems design, auditorium video production services, and campus-wide AV repairs inaugurated by the Governor of Punjab.'
  },
  {
    title: 'Palm Views East Jumeirah',
    category: 'ELV AMC Project',
    location: 'Palm Jumeirah, Dubai',
    image: palmViewsImg,
    desc: 'Annual Maintenance Contract and systems engineering for extra-low voltage (ELV) infrastructure, access control, and security surveillance in Palm Jumeirah luxury waterfront residences.'
  },
  {
    title: 'Ibn Battuta Building & Mall',
    category: 'CCTV & Smart Hotel Project',
    location: 'Dubai, UAE',
    image: ibnBattutaImg,
    desc: 'Implementation of high-density CCTV surveillance, access management, and integrated hotel technology infrastructure for commercial and hospitality operations.'
  },
  {
    title: 'Aries Tower Business Avenue',
    category: 'Smart Green Apartments (H&H Builders)',
    location: 'Corporate Commercial Corridor',
    image: ariesTowerImg,
    desc: 'Integrated smart green apartment automation, energy monitoring, and building access control for upscale corporate and residential suites.'
  },
  {
    title: 'Badra Community',
    category: 'Smart Water Management Project',
    location: 'Dubai, UAE',
    image: badraImg,
    desc: 'Automated telemetry and smart water distribution monitoring system ensuring conservation, leak detection, and uninterrupted community water management.'
  },
  {
    title: 'HEC Smart & Secure Campuses',
    category: 'Higher Education Commission Projects',
    location: 'Faisalabad, Karachi, Kotli & Quetta',
    image: gcUniversityImg,
    desc: 'Turnkey smart and secure campus infrastructure for GC University Faisalabad, Jinnah Sindh Medical University Karachi, Kotli University Kotli, and University of Balochistan Quetta.'
  },
  {
    title: 'OSN & Etisalat UAE',
    category: 'Broadcast & Satellite Installation',
    location: 'Dubai & UAE Regional',
    image: osnEtisalatImg,
    desc: 'High-reliability satellite communications, network distribution, and broadcast receiver installation project for Orbit Showtime Network and Etisalat.'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Centaurus Islamabad', desc: 'Smart Services Consultant', image: centaurusImg },
  { name: 'Ibn Battuta Building', desc: 'CCTV & Smart Hotel Project', image: ibnBattutaImg },
  { name: 'MAG 218 & MAG 214 Dubai', desc: 'CCTV & Smart Parking', image: magImg },
  { name: 'Palm Views East Jumeirah', desc: 'ELV AMC Waterfront Project', image: palmViewsImg },
  { name: 'King Edward Medical University', desc: 'Smart Audio Visual Infrastructure', image: kingEdwardImg },
  { name: 'GC University Faisalabad', desc: 'HEC Smart & Secure Campus', image: gcUniversityImg },
  { name: 'Jinnah Sindh Medical University', desc: 'HEC Smart & Secure Campus', image: jinnahMedImg },
  { name: 'University of Balochistan Quetta', desc: 'HEC Smart & Secure Campus', image: balochistanUniImg },
  { name: 'Kotli University Kotli', desc: 'HEC Smart & Secure Campus', image: kotliUniImg },
  { name: 'Badra Community Dubai', desc: 'Smart Water Management', image: badraImg },
  { name: 'OSN & Etisalat', desc: 'Broadcast & Satellite Installation', image: osnEtisalatImg },
  { name: 'Aries Tower Business Avenue', desc: 'Smart Green Apartments', image: ariesTowerImg }
];

export const COMPANY_PROFILE_STATS = {
  headline: 'Securing Today, Powering Tomorrow with Intelligence.',
  tagline: 'Unique Smart Solutions & Global Technology Partners',
  subtext: 'We Invest In The Future — Unique, Future, Smart',
  pillars: [
    { title: 'AI & Automation', desc: 'Self-learning computer vision, Metrisys AI video analytics, and automated robotics.' },
    { title: 'One Fiber Backbone', desc: '14 integrated systems delivered over a single fiber optic cable.' },
    { title: 'KNX & GVS Partnership', desc: '25-year manufacturer excellence in smart touch panels & residential IoT.' }
  ]
};

export const ECOSYSTEM_FLOW = [
  { step: '01', title: 'ONE FIBER BACKBONE', desc: 'Consolidating Triple Play, CCTV, intercom, and building controls over a single optical link.' },
  { step: '02', title: 'AI VIDEO SURVEILLANCE', desc: 'High-definition cameras with Metrisys Edge AI human detection and AI-FIRE flame tracking.' },
  { step: '03', title: 'SMART HOME & BUILDINGS', desc: 'GVS KNX touch panels, Tuya Zigbee 3.0, and whole-villa circadian climate orchestration.' },
  { step: '04', title: 'BIOMETRICS & UVIS', desc: 'Face recognition speed gates, video door phones, and under-vehicle security scanning.' },
  { step: '05', title: 'ANPR & PARKING GUIDANCE', desc: 'Deep learning license plate recognition, automated barrier control, and slot reservation.' },
  { step: '06', title: 'CENTRAL CONTROL ROOM', desc: 'Curved fine-pitch COB LED video walls with CMS local and remote multi-site management.' }
];

export const FLAGSHIP_PROJECT = {
  title: 'Centaurus Islamabad & Dubai Landmark Portfolios',
  badge: 'MAJOR ACHIEVEMENTS SHOWCASE',
  location: 'Islamabad / Dubai / GCC International Corridor',
  industry: 'Enterprise Infrastructure, Smart Malls & Residential Towers',
  solutionsUsed: [
    'One Fiber Optic Backbone',
    'KNX & GVS Smart Home Automation',
    'Sunell AI Video Analytics',
    'Automated ANPR & Smart Parking',
    'Curved LED Central Control Room'
  ],
  description: 'From acting as Smart Services Consultant for Centaurus Islamabad (Mega Mall, Residencia & Corporate Tower) to deploying turnkey CCTV, ANPR, and Smart Parking across Dubai\'s MAG 218 & MAG 214 towers and HEC Universities across Pakistan, Unique Smart Solutions and its Joint Venture partners deliver unified digital systems that redefine reliability.',
  image: '/images/flagship_project.jpg'
};

