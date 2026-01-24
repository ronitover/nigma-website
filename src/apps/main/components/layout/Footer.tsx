import React, { useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="marble-bg border-t-4 border-primary/30 pt-16 pb-8 px-4 lg:px-40">
      {/* Greek Motif Line */}
      <div className="h-6 greek-key-border mb-12 opacity-40"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-primary">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold uppercase tracking-widest">Ragnarok Tech</h2>
          </div>
          <p className="text-[#bab09c] text-sm leading-relaxed italic">
            "The thunder of innovation, the lightning of code. Join the divine battle of
            intellect."
          </p>
          <div className="flex gap-4">
            {/* Ancient Coin Socials */}
            <a
              className="group size-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary coin-shadow hover:bg-primary hover:text-background-dark transition-all duration-300"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a
              className="group size-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary coin-shadow hover:bg-primary hover:text-background-dark transition-all duration-300"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a
              className="group size-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center text-primary coin-shadow hover:bg-primary hover:text-background-dark transition-all duration-300"
              href="#"
            >
              <span className="material-symbols-outlined text-xl">camera</span>
            </a>
          </div>
        </div>

        {/* Chronicles Section */}
        <div>
          <h3 className="text-primary font-bold uppercase tracking-widest mb-6">Chronicles</h3>
          <ul className="space-y-4 text-sm text-[#bab09c]">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Event Schedule
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Rulebook
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Hall of Fame
              </a>
            </li>
          </ul>
        </div>

        {/* The Council Section */}
        <div>
          <h3 className="text-primary font-bold uppercase tracking-widest mb-6">The Council</h3>
          <ul className="space-y-4 text-sm text-[#bab09c]">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Our Team
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Sponsors
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Volunteers
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="#">
                <span className="size-1 bg-primary"></span> Privacy Edicts
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-primary font-bold uppercase tracking-widest mb-6">Summon Us</h3>
          <p className="text-[#bab09c] text-sm mb-4">
            Enter your electronic scroll to receive updates from the Oracle.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              className="bg-background-dark/50 border border-primary/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary w-full text-white"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-primary text-background-dark p-2 rounded-lg hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6e685d] uppercase tracking-widest">
        <p>© 2024 Ragnarok Tech Fest. All Rights Reserved.</p>
        <p>
          Forged by the <span className="text-primary font-bold">Gods of Tech</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
