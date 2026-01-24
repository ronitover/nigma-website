import React from 'react';
import type { NavigationLink } from '../../../../shared/types';
import './Header.css';

const navLinks: NavigationLink[] = [
  { label: 'Events', href: '#' },
  { label: 'Hackathon', href: '#' },
  { label: 'Leaderboard', href: '#' },
  { label: 'Contact', href: '#' },
];

const Header: React.FC = () => {
  return (
    <div className="w-full flex justify-center border-b border-solid border-stone-border/30">
      <div className="flex flex-col max-w-[1200px] flex-1">
        <header className="flex items-center justify-between whitespace-nowrap px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-white text-xl font-black leading-tight tracking-[-0.015em] uppercase">
              Ragnarok Tech
            </h2>
          </div>

          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  className="text-white/80 hover:text-primary text-sm font-semibold uppercase tracking-wider transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-11 px-5 bg-primary text-[#181611] text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(244,175,37,0.4)]">
              Register Now
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
