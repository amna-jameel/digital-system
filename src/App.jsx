import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Six Main Multi-Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';

// Deep Dossier Sub-Pages
import LocationPage from './components/LocationPage';
import SolutionPage from './components/SolutionPage';

// Global Modals
import LocationSelectorModal from './components/LocationSelectorModal';
import ContactModal from './components/ContactModal';
import SearchModal from './components/SearchModal';

function AppContent() {
  const navigate = useNavigate();

  // Modal States
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSelectCountry = (countrySlug) => {
    setIsLocationModalOpen(false);
    navigate(`/locations/${countrySlug}`);
  };

  const handleSelectSolution = (solId) => {
    setIsSearchModalOpen(false);
    navigate(`/solutions#${solId}`);
  };

  return (
    <div className="app-root">
      {/* Automatic Scroll to Top / Anchor on Navigation */}
      <ScrollToTop />

      {/* Corporate Global Navbar with 6 Direct Links */}
      <Navbar
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Main Multi-Page Route Outlet */}
      <main>
        <Routes>
          {/* 1. Home */}
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
                onOpenLocationModal={() => setIsLocationModalOpen(true)}
              />
            } 
          />

          {/* 2. About Us (Includes Dedicated 5 Locations Section) */}
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
              />
            } 
          />

          {/* 3. Solutions (All Solution Sections Organized Visually) */}
          <Route 
            path="/solutions" 
            element={
              <SolutionsPage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
                navigateToSolution={(solId) => navigate(`/solutions#${solId}`)}
              />
            } 
          />

          {/* 4. Products (Hardware & Systems Portfolio) */}
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
              />
            } 
          />

          {/* 5. Projects (Flagship Showcase & Achievements Portfolio) */}
          <Route 
            path="/projects" 
            element={
              <ProjectsPage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
              />
            } 
          />

          {/* 6. Clients (Enterprise Clients & Global OEM Partners) */}
          <Route 
            path="/clients" 
            element={
              <ClientsPage 
                onOpenContactModal={() => setIsContactModalOpen(true)}
              />
            } 
          />

          {/* Deep Dossier Sub-Pages */}
          <Route 
            path="/locations/:countrySlug" 
            element={
              <LocationPageWrapper 
                onOpenContactModal={() => setIsContactModalOpen(true)} 
              />
            } 
          />
          <Route 
            path="/solutions/:solutionId" 
            element={
              <SolutionPageWrapper 
                onOpenContactModal={() => setIsContactModalOpen(true)} 
              />
            } 
          />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Site Footer with Balanced Branding & Navigation Links */}
      <Footer
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Accessible Modals */}
      <LocationSelectorModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onSelectCountry={handleSelectCountry}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCountry={handleSelectCountry}
        onSelectSolution={handleSelectSolution}
      />
    </div>
  );
}

// Wrapper for useParams with LocationPage
import { useParams } from 'react-router-dom';

function LocationPageWrapper({ onOpenContactModal }) {
  const { countrySlug } = useParams();
  const navigate = useNavigate();

  return (
    <LocationPage
      countrySlug={countrySlug}
      onBackToHome={() => navigate('/about#locations')}
      onOpenContactModal={onOpenContactModal}
    />
  );
}

function SolutionPageWrapper({ onOpenContactModal }) {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  return (
    <SolutionPage
      solutionId={solutionId}
      onBackToHome={() => navigate('/solutions')}
      onOpenContactModal={onOpenContactModal}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
