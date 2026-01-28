import React, { useState } from 'react';
import './Footer.css';
import TechnicalTeam from '../sections/TechnicalTeam';

const Footer: React.FC = () => {
  const [isTechTeamOpen, setIsTechTeamOpen] = useState(false);

  return (
    <>
      <footer className="arena-footer landing-footer">
        <div className="arena-footer-content">
          <div className="arena-footer-links">
            <a href="#rules">Book of Rules</a>
            <span className="arena-footer-divider">•</span>
            <a href="#conduct">Code of Conduct</a>
            <span className="arena-footer-divider">•</span>
            <a href="#privacy">Privacy Rune</a>
          </div>
          <button
            type="button"
            onClick={() => setIsTechTeamOpen(true)}
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background-dark transition-colors text-xs md:text-sm mt-2 md:mt-0"
          >
            Technical Team
          </button>
          <div className="arena-footer-social">
            <div className="arena-social-icon">
              <span className="material-symbols-outlined">alternate_email</span>
            </div>
            <div className="arena-social-icon">
              <span className="material-symbols-outlined">public</span>
            </div>
          </div>
        </div>
        <p className="arena-footer-text">Ragnarok © 2064 • Powered by the Forge of Asgard</p>
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
