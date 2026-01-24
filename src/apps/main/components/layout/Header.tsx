import React from 'react';
import './Header.css';
import headerLogo from '../../../../assets/images/Header Logo.png';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#393328] bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-3">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between whitespace-nowrap">
        <div className="flex items-center flex-1">
          <img 
            src={headerLogo} 
            alt="NITTE - Dr NSAM First Grade College" 
            className="h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </div>
        
        <div className="flex justify-center flex-1">
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold transition-transform hover:scale-105">
            <span className="truncate">Hackathon</span>
          </button>
        </div>
        
        <div className="flex gap-3 justify-end flex-1">
          <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#393328] text-white text-sm font-bold border border-[#544c3b] hover:bg-[#4a4233]">
            <span className="truncate">Register</span>
          </button>
          <button className="hidden sm:flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-transparent text-white text-sm font-bold border border-[#544c3b] hover:border-primary transition-colors">
            <span className="truncate">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
