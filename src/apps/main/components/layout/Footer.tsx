import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-[#393328]">
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
        
        <div className="flex gap-8 text-[#bab09c] text-sm font-medium">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Contact Us</a>
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
  );
};

export default Footer;
