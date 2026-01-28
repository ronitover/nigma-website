import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TechnicalTeam from '../components/sections/TechnicalTeam';
import ConstellationBackground from '../../../shared/components/ConstellationBackground';
import landingBackground from '../../../assets/images/bg.png';

const TechnicalTeamPage: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Constellation Background - covers entire page */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ConstellationBackground />
      </div>

      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <img
          className="h-full w-full object-cover opacity-40"
          alt="Ragnarok Fest scenic background"
          src={landingBackground}
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main className="flex-1 flex items-center justify-center py-6 md:py-10">
          <TechnicalTeam />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default TechnicalTeamPage;

