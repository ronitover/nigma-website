import React from 'react';
import ConstellationBackground from '../../../shared/components/ConstellationBackground';

const HackathonHome: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Constellation Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <ConstellationBackground />
      </div>
      
      {/* Content */}
      <div className="relative" style={{ zIndex: 1 }}>
        <main className="flex-1 flex items-center justify-center min-h-screen">
          <div className="text-center px-6">
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-6 uppercase tracking-tight">
              Hackathon
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8">
              The Ultimate Coding Challenge Awaits
            </p>
            <div className="h-1 w-32 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-[#bab09c] max-w-2xl mx-auto">
              Welcome to the Hackathon platform. This is a separate section of the Nigma website
              that will host all hackathon-related content and features.
            </p>
            <div className="mt-12">
              <button className="bg-primary text-background-dark px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(244,175,37,0.5)]">
                Coming Soon
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HackathonHome;
