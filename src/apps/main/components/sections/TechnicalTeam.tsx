import React, { useState } from 'react';
import './TechnicalTeam.css';

const TechnicalTeam: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCardClass = (index: number) => {
    const base = 'technical-card group relative flex flex-col items-center';

    if (hoveredIndex === null) return base;
    if (hoveredIndex === index) return `${base} technical-card--active`;
    if (hoveredIndex < index) return `${base} technical-card--right`;
    return `${base} technical-card--left`;
  };

  return (
    <section
      id="technical-team"
      className="relative py-10 md:py-14 px-4 lg:px-16"
    >
      {/* Decorative nebula background just for this section */}
      <div className="absolute inset-0 nebula-bg rounded-[2.5rem] border border-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.7)] overflow-hidden" />

      {/* Floating elements layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Ruins */}
        <div
          className="absolute top-16 left-6 w-24 h-36 bg-slate-800/20 rounded-lg -rotate-12 floating-ruin flex items-center justify-center border border-white/5"
          style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
        >
          <span className="material-symbols-outlined text-white/10 text-5xl">
            account_balance
          </span>
        </div>
        <div className="absolute bottom-16 right-6 w-32 h-24 bg-slate-800/20 rounded-lg rotate-45 floating-ruin flex items-center justify-center border border-white/5">
          <span className="material-symbols-outlined text-white/10 text-6xl">
            temple_hindu
          </span>
        </div>

        {/* Lightning & vertical accents */}
        <div className="absolute top-1/4 left-1/3 w-px h-24 bg-primary/40 blur-[1px] rotate-45" />
        <div className="absolute top-1/2 right-1/4 w-[2px] h-16 bg-primary/60 blur-[2px] -rotate-12" />

        {/* Embers */}
        <div className="ember top-1/4 left-1/4" />
        <div className="ember top-3/4 left-1/3" />
        <div className="ember top-1/2 right-1/3" />
        <div className="ember top-8 right-8" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-10">
        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold tracking-[0.3em] uppercase text-xs md:text-sm flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary/40" />
            Architects of Asgard
            <span className="h-px w-10 bg-primary/40" />
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-b from-white via-white to-primary/40 bg-clip-text text-transparent">
            Technical Council
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-[#bab09c]">
            The keepers of the digital Bifrost — crafting, guarding, and
            scaling the tech that powers Ragnarok.
          </p>
        </div>

        {/* Team grid */}
        <div
          className="technical-team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Member 1 */}
          <div
            className={getCardClass(0)}
            onMouseEnter={() => setHoveredIndex(0)}
          >
            <div className="relative w-52 h-72 md:w-56 md:h-80 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd8lQcXiOmfy2Ip4VwpIXIYZcwOwPFauv59nsmN4NbBpOg-S8I9QRXjctUFeBfGkFVxt2zmXvPhRSHbjThUnIUI2XYLiY2L8gbFNMCbaKwxljJS4_klnZDRsV9xL-Vx71soc9_cDkN-CX4Jxm_FOdu7wyyja9w5eT7qKPlKdA4AB8dBHX7XLGpirhO5vYqKDEyE9xzGyJKYTpFOwX_8VOTSZE-XOj1iQ2rfkEoSQ5izCh4B2wqjPIIX_lvcK-fCUsQ8WNmOIqjjATO")',
                }}
              />
            </div>
            <div className="glass-plaque w-full mt-4 p-5 rounded-xl relative overflow-hidden group-hover:border-primary/50 transition-colors">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-50" />
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Ronith Joshi
                </h3>
                <p className="text-primary text-xs md:text-sm font-semibold tracking-wide electric-glow uppercase">
                  Web Developer
                </p>
              </div>
            </div>
          </div>

          {/* Member 2 */}
          <div
            className={getCardClass(1)}
            onMouseEnter={() => setHoveredIndex(1)}
          >
            <div className="relative w-52 h-72 md:w-56 md:h-80 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCyS6Z1yjafR1Q-UsrsWH4JO7GcjtxdnSHeUiAdpOZZmBYEqHPAXiEO4Zl0PGKxqSOHU-BgxGKORdrJRaJkRStXLPWt1lr0s2bs4PuLX2QjMsQ2sUl-XeseFql2qygVykJU1_ANtPfcdizg-erBRZoTzf8VwQlDjHlm32ib5le6uHRrjXJkH1rRvt4vdomn7GMooDqFFwEKKRAZrc7j6cK2yspeCspL-Z7-ePC6RShev5oD10PL7cH99wScxzIXNkC-e95uwpgWpZ4h")',
                }}
              />
            </div>
            <div className="glass-plaque w-full mt-4 p-5 rounded-xl relative overflow-hidden group-hover:border-primary/50 transition-colors">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-50" />
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Prarthana Jain
                </h3>
                <p className="text-primary text-xs md:text-sm font-semibold tracking-wide electric-glow uppercase">
                  Web Developer
                </p>
              </div>
            </div>
          </div>

          {/* Member 3 */}
          <div
            className={getCardClass(2)}
            onMouseEnter={() => setHoveredIndex(2)}
          >
            <div className="relative w-52 h-72 md:w-56 md:h-80 transition-transform duration-500 group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain transform group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfWyXg-8CucemtQwq66Kuoqw3lk-FBZ2ByNxy8CbZZmaRlM7VV7VaKOV6ZIUlyTR2eaBRs6Z2H-QEP_68NKtWDdqm0rTWSc__MXGwJFQXm0E7cz9j1Yib4Zv0l6faRWjvd6qLSyAHOMho8gvgjwcpVBikkEvsensTdhReXHocG7wjSwxXwtSbkf3FQIq17eSc_5S0WZAxqOHnK9kwTWO240JKJLrdG6Dz5mbop7tSPoHK5XTpjpQAYgjsW110Ow1HGU9QZQHOzUYsA")',
                }}
              />
            </div>
            <div className="glass-plaque w-full mt-4 p-5 rounded-xl relative overflow-hidden group-hover:border-primary/50 transition-colors">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ffd700] to-transparent opacity-50" />
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                  Royston Menezes
                </h3>
                <p className="text-primary text-xs md:text-sm font-semibold tracking-wide electric-glow uppercase">
                  Backend Developer
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalTeam;

