import React, { useState } from 'react';
import './Footer.css';
import TechnicalTeam from '../sections/TechnicalTeam';

const Footer: React.FC = () => {
  const [isTechTeamOpen, setIsTechTeamOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#181611] py-12 border-t border-[#393328]">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">bolt</span>
              <h4 className="text-white text-lg font-black uppercase">Ragnarok Fest</h4>
            </div>
            <p className="text-[#544c3b] text-sm text-center md:text-left">
              © 2026 College Name. All rights reserved.<br/>
              Crafted for the Gods of Tech.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[#bab09c] text-sm font-medium">
            <div className="flex gap-8">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
            </div>
            <button
              type="button"
              onClick={() => setIsTechTeamOpen(true)}
              className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background-dark transition-colors text-xs md:text-sm"
            >
              Technical Team
            </button>
          </div>
          
          <div className="flex gap-4">
            <a className="size-10 flex items-center justify-center rounded-full bg-[#393328] text-white hover:bg-primary hover:text-background-dark transition-all" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="size-10 flex items-center justify-center rounded-full bg-[#393328] text-white hover:bg-primary hover:text-background-dark transition-all" href="#">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </footer>

      {isTechTeamOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#050a15]/95 p-4 md:p-8">
            <button
              type="button"
              onClick={() => setIsTechTeamOpen(false)}
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white hover:bg-white/10"
            >
              Close
            </button>
            <TechnicalTeam />
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
