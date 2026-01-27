import React from 'react';
import './Header.css';
import headerLogo from '../../../../assets/images/Header Logo.png';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 md:px-20 py-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between whitespace-nowrap">
        <div className="flex items-center">
          <img 
            src={headerLogo} 
            alt="NITTE - Dr NSAM First Grade College" 
            className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="text-sm font-bold uppercase tracking-wide text-background-dark border border-primary/80 rounded-lg px-4 py-2 bg-primary hover:bg-primary/90 hover:border-primary transition-colors">
            Hackathon
          </button>
          <button className="text-sm font-bold uppercase tracking-wide text-[#93c5fd] border border-[#60a5fa] rounded-lg px-4 py-2 bg-transparent hover:bg-[#1d3b66]/60 hover:text-white transition-colors">
            Login
          </button>
          <button className="text-sm font-bold uppercase tracking-wide text-[#0b1120] border border-[#60a5fa] rounded-lg px-4 py-2 bg-[#93c5fd] hover:bg-[#60a5fa] hover:text-white transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
