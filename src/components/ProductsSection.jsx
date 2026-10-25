import React, { useState } from 'react';
import { ArrowRight, Cpu, Shield, Tv, Sliders, Eye } from 'lucide-react';
import './ProductsSection.css';

export default function ProductsSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'gvs-knx-touch',
      name: 'GVS KNX Smart Touch S7 & Waltz Panels',
      category: 'automation',
      desc: '7" IPS Android smart panel with integrated SIP video intercom, Tuya gateway, and 4/6/8 tactile metal button keypads.',
      image: '/images/smart_switch_wall.jpg'
    },
    {
      id: 'sunell-ai-metrisys',
      name: 'Sunell & Metrisys AI Human Detection Camera',
      category: 'surveillance',
      desc: 'High-precision dual-spectrum camera with Metrisys AI perimeter protection, intrusion alarm & AI-FIRE flame tracking.',
      image: '/images/ai_control.jpg'
    },
    {
      id: 'sunell-64ch-nvr',
      name: '64 CH 16 PoE 4K Edge AI NVR Server',
      category: 'ai-hardware',
      desc: 'Edge AI recording platform supporting 400Mbps bandwidth, RAID 0/1/5/6/10, ONVIF S&T, and real-time deep learning analytics.',
      image: '/images/integration.jpg'
    },
    {
      id: 'tuya-scene-switch',
      name: 'Tuya F3PRO Multifunctional LCD Scene Switch',
      category: 'automation',
      desc: '3.5-inch touch LCD scene switch with 4 relay outputs, 8 scene bindings, 4 dimming channels, and Zigbee 3.0 mesh networking.',
      image: '/images/smart_home.jpg'
    },
    {
      id: 'anpr-barrier-system',
      name: 'AI ANPR & CE-Certified Community Barrier Gate',
      category: 'traffic',
      desc: 'Deep learning license plate recognition camera with integrated boom barrier, automated parking guidance & reserver units.',
      image: '/images/parking.jpg'
    },
    {
      id: 'uvis-access-control',
      name: 'Under Vehicle Inspection (UVIS) & Biometrics',
      category: 'access',
      desc: 'High-speed line-scan camera under-vehicle chassis inspection paired with facial recognition speed gates and turnstiles.',
      image: '/images/security.jpg'
    },
    {
      id: 'solar-4g-ptz',
      name: 'Site Monitoring Solar 4G PTZ Cameras',
      category: 'surveillance',
      desc: 'Zero-power 4G LTE PTZ cameras with 80m night vision, optical zoom, and iOS/Android mobile streaming for remote construction.',
      image: '/images/flagship_project.jpg'
    },
    {
      id: 'starlink-terminal',
      name: 'Authorized Starlink High-Speed Satellite Terminal',
      category: 'ai-hardware',
      desc: 'Enterprise satellite internet terminal installation for remote facilities, off-grid villas, and high-bandwidth telemetry uplinks.',
      image: '/images/hero.jpg'
    },
    {
      id: 'cob-led-videowall',
      name: 'Curved Central Command Room COB Video Wall',
      category: 'display',
      desc: 'Fine-pitch COB LED curved display wall with CMS local/remote multi-screen management for 24/7 mission-critical operations.',
      image: '/images/av.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'automation', label: 'Smart Home & KNX' },
    { id: 'surveillance', label: 'AI & Metrisys CCTV' },
    { id: 'ai-hardware', label: 'Edge AI & Satellite' },
    { id: 'traffic', label: 'ANPR & Barriers' },
    { id: 'access', label: 'Access & UVIS' },
    { id: 'display', label: 'Control Room Displays' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header split-header">
          <div>
            <h2 className="section-title">Hardware & Systems Portfolio</h2>
          </div>
          <p className="section-subtitle">
            Authentic commercial-grade AI equipment, access terminals, and open automation hardware.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="product-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`product-tab ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-image-container">
                <img src={prod.image} alt={prod.name} className="product-img" />
                <span className="product-category-badge">{prod.category.toUpperCase()}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{prod.name}</h3>
                <p className="product-desc">{prod.desc}</p>
                <button 
                  type="button" 
                  className="product-cta-btn"
                  onClick={() => onSelectProduct && onSelectProduct(prod.id)}
                >
                  <span>View Technical Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
