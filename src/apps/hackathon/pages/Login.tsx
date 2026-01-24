import React, { useState } from 'react';
import './Login.css';
import headerLogo from '../../../assets/images/Header Logo.png';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background-dark font-display text-white selection:bg-primary/30">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkh0skdlUzoKmp1_2RKnNYswMcuOhjh5IzIqzxpf84sYm9L_zFsH7kF_KnQbD2r0Kg8Qn-QO2gm39Q_nqCSpZWaZ4AXCMNj2Iy086RFG1WqJPPVf8XmHfim8ZhYnasOguZS6T1ZrYUkF2FJObsLHvCZGZPS9vv1wMaNDW5--4Xpi_xmqKmAwmlWfIfljHRnh889M0hPv0vIYkE1OQFzYpI4X_yh0e17YyZv4BYo2sVcdztu8J80eu4JGyo0wMQqkZYFIZz3JuvPBLq")`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-primary/5 mix-blend-color-dodge"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-center">
          <img 
            src={headerLogo} 
            alt="NITTE Logo" 
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
          />
        </div>
        <button className="flex items-center gap-1 sm:gap-2 rounded-full border border-primary/40 bg-black/40 backdrop-blur-md px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-primary transition-all hover:bg-primary hover:text-background-dark hover:border-primary">
          <span className="material-symbols-outlined text-sm sm:text-base">home</span>
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-6">
        <div className="glass-card w-full max-w-[480px] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12">
          {/* Title Section */}
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="font-majestic text-primary text-[9px] sm:text-xs font-bold tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 opacity-80">
              Divine Entryway
            </h2>
            <h1 className="font-majestic text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-widest text-white mb-2 leading-tight px-2">
              THE GATES OF ASGARD AWAIT
            </h1>
            <div className="w-20 sm:w-24 h-[1px] bg-primary/40 mx-auto mt-4 sm:mt-6"></div>
          </div>

          {/* Form */}
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-primary ml-1"
                htmlFor="oracle-id"
              >
                Oracle ID
              </label>
              <div className="relative group">
                <input
                  className="input-high-contrast w-full rounded-xl p-3 sm:p-4 text-sm sm:text-base text-white placeholder:text-gray-500 transition-all outline-none pr-10 sm:pr-12"
                  id="oracle-id"
                  placeholder="hero@valhalla.edu"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="material-symbols-outlined absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-primary/50 group-focus-within:text-primary transition-colors text-lg sm:text-xl">
                  alternate_email
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label
                  className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
                  htmlFor="secret-cipher"
                >
                  Secret Cipher
                </label>
                <a
                  className="text-[9px] sm:text-[10px] text-primary/70 hover:text-primary transition-colors italic tracking-wider"
                  href="#"
                >
                  Lost your way?
                </a>
              </div>
              <div className="relative group">
                <input
                  className="input-high-contrast w-full rounded-xl p-3 sm:p-4 text-sm sm:text-base text-white placeholder:text-gray-500 transition-all outline-none pr-10 sm:pr-12"
                  id="secret-cipher"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-primary/50 hover:text-primary transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 sm:gap-3 px-1">
              <input
                className="h-4 w-4 rounded border-primary/40 bg-black/80 text-primary focus:ring-primary/50 focus:ring-offset-background-dark cursor-pointer"
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label
                className="text-xs text-gray-300 font-medium cursor-pointer hover:text-white transition-colors"
                htmlFor="remember"
              >
                Bind to this device permanently
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                className="button-glow flex w-full items-center justify-center gap-2 sm:gap-3 rounded-xl bg-primary py-3 sm:py-4 text-xs sm:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-background-dark transition-all active:scale-[0.98]"
                type="submit"
              >
                <span className="font-majestic">Summon Entry</span>
                <span className="material-symbols-outlined text-lg sm:text-xl">bolt</span>
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="mt-8 sm:mt-10 border-t border-primary/10 pt-6 sm:pt-8 text-center">
            <p className="text-sm text-gray-300">
              New Hero?
              <a
                className="font-bold text-primary hover:text-white transition-colors ml-1 decoration-primary/30 decoration-1 underline-offset-4"
                href="#"
              >
                Forge an Account
              </a>
            </p>
            <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-6 text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400">
              <a className="hover:text-primary transition-colors" href="#">
                Scrolls
              </a>
              <span className="h-1 w-1 rounded-full bg-primary/40"></span>
              <a className="hover:text-primary transition-colors" href="#">
                Laws
              </a>
              <span className="h-1 w-1 rounded-full bg-primary/40"></span>
              <a className="hover:text-primary transition-colors" href="#">
                Support
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Left Text - Hidden on mobile */}
      <div className="fixed bottom-8 left-8 z-20 hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.5em] text-primary/60 origin-left -rotate-90 whitespace-nowrap font-majestic">
          Tech Fest MMXXIV
        </p>
      </div>

      {/* Bottom Right Text - Hidden on mobile */}
      <div className="fixed bottom-8 right-8 z-20 hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.5em] text-primary/60 text-right font-majestic">
          The Convergence
          <br />
          of Gods and Machines
        </p>
      </div>
    </div>
  );
};

export default Login;
