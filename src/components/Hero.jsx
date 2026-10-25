import React from 'react';
import { ArrowRight, Shield, Cpu, Building, Radio, MapPin } from 'lucide-react';
import heroVideo from '../assets/hero.mp4';
import './Hero.css';

export default function Hero({ onOpenContactModal }) {
  return (
    <section id="hero" className="hero-section">
      {/* Full-screen Background Video */}
      <div className="hero-video-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero.jpg"
          className="hero-bg-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="display-title hero-headline">
            ARTIFICIAL INTELLIGENCE.<br />
            <span className="headline-highlight">AUTONOMOUS SYSTEMS.</span>
          </h1>

          <p className="hero-description">
            Empowering enterprise infrastructure with cutting-edge Artificial Intelligence, deep learning video analytics, and autonomous computer vision systems.
          </p>

          <div className="hero-cta-group">
            <a href="#solutions" className="btn btn-primary hero-btn-large">
              <span>Explore Solutions</span>
              <ArrowRight size={18} />
            </a>

            <button 
              type="button" 
              onClick={onOpenContactModal} 
              className="btn btn-secondary-dark hero-btn-large"
            >
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
