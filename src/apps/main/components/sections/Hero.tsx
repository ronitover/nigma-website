import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full">
      <div className="relative flex min-h-[85vh] w-full flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
        {/* Hero Content - Background now handled by parent */}
        <div className="relative z-10 flex max-w-[960px] flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] md:text-7xl uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              RAGNAROK
              <span className="block text-primary text-3xl md:text-5xl mt-2 tracking-widest font-light drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                The Ultimate Tech Odyssey
              </span>
            </h1>
            <p className="mx-auto max-w-[720px] text-[#bab09c] text-lg font-normal leading-relaxed md:text-xl">
              Where the divinity of ancient Olympus meets the innovation of the digital age. Join the battle of wits, code, and legendary creativity.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary text-background-dark text-lg font-black uppercase tracking-wider transition-all hover:shadow-[0_0_20px_rgba(244,175,37,0.5)] hover:scale-105">
              <span className="truncate">Download Brochure</span>
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-transparent border-2 border-[#60a5fa] text-[#93c5fd] text-lg font-black uppercase tracking-wider hover:bg-[#1d3b66]/60 hover:text-white hover:scale-105 transition-all"
            >
              <span className="truncate">Explore Events</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
