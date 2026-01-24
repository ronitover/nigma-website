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
  // Countdown to February 25, 2026, 11:59:59 PM IST
  const eventDate = new Date('2026-02-25T23:59:59+05:30');

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Constellation Background - covers entire page */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ConstellationBackground />
      </div>
      
      {/* Cinematic Background - extends from hero through header */}
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <img
          className="h-full w-full object-cover opacity-40 grayscale"
          alt="Dramatic storm clouds over ancient marble temple ruins"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEYHZX0m9wA1uLU8FZHcjgCfIdZE8lyM3OBCJjXBkzPJs6anDBxpJmQwFGlCGDuGZvZ15NDKaAdqHsgcP59cg0dil6rDtlXGJzJiE7XOYu0yY6S1oT0TkrXuPyyYTiRf8rUsOVQIO6SIIQb4KGWaAxCFyY_JCpx0ht17J8BECzPzQv1nGh57vTgvoPmtqR9a9xrIFFAWFoGezI-LFOsxOnSbEtNmr1q6CEVdbWlvUPSgXq9vDqb6iddFb2nawcIfYEDYZfwfd5eg5u=s2400"
          loading="eager"
        />
      </div>
      
      {/* All content above backgrounds */}
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
