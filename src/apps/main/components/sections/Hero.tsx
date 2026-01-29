import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingLogo from '../../../../assets/images/landing logo.png';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = window.requestAnimationFrame(() => setIsMounted(true));
    return () => window.cancelAnimationFrame(timer);
  }, []);

  return (
    <section className={`relative w-full hero-section ${isMounted ? 'hero-mounted' : ''}`}>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center px-3 sm:px-4 py-8 sm:py-12 text-center overflow-hidden">
        {/* Hero Content - fits inside background image (100vh) */}
        <div className="relative z-10 grid grid-cols-12 gap-4 max-w-6xl w-full">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-col items-center gap-5 hero-content-inner">
          <div className="hero-text-block hero-logo-wrapper">
            <img
              src={landingLogo}
              alt="Ragnarok — Where Power Meets Passion"
              className="hero-logo w-full h-auto object-contain drop-shadow-[0_4px_24px_rgba(11,28,45,0.6)]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 hero-actions mt-[8px]">
            <button className="flex min-w-[180px] sm:min-w-[200px] w-full sm:w-auto max-w-[280px] sm:max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary text-background-dark text-lg font-black uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] hover:scale-105">
              <span className="truncate">Download Brochure</span>
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="flex min-w-[180px] sm:min-w-[200px] w-full sm:w-auto max-w-[280px] sm:max-w-none cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-transparent border-2 border-[#4FA3D1] text-[#8fc9e0] text-lg font-black uppercase tracking-wider hover:bg-[#2d5a75]/60 hover:text-foreground hover:scale-105 transition-all"
            >
              <span className="truncate">Explore Events</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
