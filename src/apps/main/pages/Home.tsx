import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import CountdownTimer from '../components/sections/CountdownTimer';
import Events from '../components/sections/Events';
import HackathonBanner from '../components/sections/HackathonBanner';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import Gallery from '../components/sections/Gallery';
import InfoMap from '../components/sections/InfoMap';
import ConstellationBackground from '../../../shared/components/ConstellationBackground';

const Home: React.FC = () => {
  // Set your target date here for the countdown
  // Example: new Date('2024-12-31T23:59:59')
  const eventDate = undefined; // Leave as undefined to show static time, or set a Date

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Constellation Background - covers entire page */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ConstellationBackground />
      </div>
      
      {/* All content above constellation */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Header />
        <main className="flex-1">
          <Hero />
          <CountdownTimer targetDate={eventDate} />
          <Events />
          <HackathonBanner />
          <Features />
          <CTA />
          <Gallery />
          <InfoMap />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
