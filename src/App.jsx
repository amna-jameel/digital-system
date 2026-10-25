import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EcosystemSection from './components/EcosystemSection';
import AiFeatureSection from './components/AiFeatureSection';
import SmartBuildingSection from './components/SmartBuildingSection';
import SmartHomeSection from './components/SmartHomeSection';
import SecuritySection from './components/SecuritySection';
import ParkingSection from './components/ParkingSection';
import AudioVisualSection from './components/AudioVisualSection';
import SystemsIntegrationSection from './components/SystemsIntegrationSection';
import GlobalPresenceSection from './components/GlobalPresenceSection';
import SelectedProjectSection from './components/SelectedProjectSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';

import LocationSelectorModal from './components/LocationSelectorModal';
import ContactModal from './components/ContactModal';
import SearchModal from './components/SearchModal';

import LocationPage from './components/LocationPage';
import SolutionPage from './components/SolutionPage';

import IndustriesSection from './components/IndustriesSection';
import PartnersSection from './components/PartnersSection';
import ProductsSection from './components/ProductsSection';
import ClientsSection from './components/ClientsSection';

export default function App() {
  // Navigation State
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home', 'location', 'solution'
  const [routeParam, setRouteParam] = useState(''); // e.g. 'pakistan' or 'ai-video-analytics'

  // Modal States
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Synchronize browser history / URL path
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/locations/')) {
        const country = path.replace('/locations/', '');
        setCurrentRoute('location');
        setRouteParam(country);
      } else if (path.startsWith('/solutions/')) {
        const sol = path.replace('/solutions/', '');
        setCurrentRoute('solution');
        setRouteParam(sol);
      } else {
        setCurrentRoute('home');
        setRouteParam('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route, param = '') => {
    setCurrentRoute(route);
    setRouteParam(param);

    let newPath = '/';
    if (route === 'location') {
      newPath = `/locations/${param}`;
    } else if (route === 'solution') {
      newPath = `/solutions/${param}`;
    }

    window.history.pushState({}, '', newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* Site Header & Global Navbar */}
      <Navbar
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        currentRoute={currentRoute}
        navigateTo={navigateTo}
      />

      {/* Main Content Router */}
      <main>
        {currentRoute === 'home' && (
          <>
            <Hero 
              onOpenContactModal={() => setIsContactModalOpen(true)}
              onOpenLocationModal={() => setIsLocationModalOpen(true)}
            />

            <AiFeatureSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <EcosystemSection />

            <ProductsSection 
              onSelectProduct={() => setIsContactModalOpen(true)}
            />

            <SmartBuildingSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <SmartHomeSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
              onOpenContactModal={() => setIsContactModalOpen(true)}
            />

            <SecuritySection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <ParkingSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <AudioVisualSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <SystemsIntegrationSection 
              onSelectSolution={(solId) => navigateTo('solution', solId)}
            />

            <IndustriesSection />

            <PartnersSection />

            <ClientsSection />

            <GlobalPresenceSection 
              onSelectCountry={(countrySlug) => navigateTo('location', countrySlug)}
            />

            <SelectedProjectSection 
              onSelectProject={() => setIsContactModalOpen(true)}
            />

            <FinalCtaSection 
              onOpenContactModal={() => setIsContactModalOpen(true)}
            />
          </>
        )}

        {currentRoute === 'location' && (
          <LocationPage
            countrySlug={routeParam}
            onBackToHome={() => navigateTo('home')}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}

        {currentRoute === 'solution' && (
          <SolutionPage
            solutionId={routeParam}
            onBackToHome={() => navigateTo('home')}
            onOpenContactModal={() => setIsContactModalOpen(true)}
          />
        )}
      </main>

      {/* Site Footer */}
      <Footer
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onSelectCountry={(countrySlug) => navigateTo('location', countrySlug)}
        onSelectSolution={(solId) => navigateTo('solution', solId)}
        navigateTo={navigateTo}
      />

      {/* Modals */}
      <LocationSelectorModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onSelectCountry={(countrySlug) => navigateTo('location', countrySlug)}
        selectedRegionId={routeParam}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCountry={(countrySlug) => navigateTo('location', countrySlug)}
        onSelectSolution={(solId) => navigateTo('solution', solId)}
      />
    </div>
  );
}
