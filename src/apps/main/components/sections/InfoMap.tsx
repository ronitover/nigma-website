import React from 'react';
import './InfoMap.css';

const InfoMap: React.FC = () => {
  return (
    <section className="py-20 px-4 lg:px-40 bg-background-dark/95 relative">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Info Section */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-white text-3xl font-bold uppercase tracking-tight">The Citadel</h2>
          </div>
          <p className="text-[#bab09c] text-lg leading-relaxed">
            Nestled in the heart of the tech valley, our campus transforms into the legendary realm
            of Olympus for Ragnarok. Join thousands of innovators at our sacred grounds.
          </p>

          <div className="space-y-6 mt-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider">Our Sacred Grounds</p>
                <p className="text-[#bab09c] text-sm">
                  123 Divine Avenue, Innovation Hub, Athens 10432
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider">
                  Scrolls of Communication
                </p>
                <p className="text-[#bab09c] text-sm">oracle@ragnarokfest.edu</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined">phone_iphone</span>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider">Divine Hotline</p>
                <p className="text-[#bab09c] text-sm">+1 (555) OLYMPUS-TECH</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold uppercase tracking-widest rounded hover:bg-primary hover:text-background-dark transition-all group">
              <span>Navigate to Olympus</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                trending_flat
              </span>
            </button>
          </div>
        </div>

        {/* Stylized Map Section */}
        <div className="relative group">
          {/* Greek-themed Interactive Map */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl relative bg-[#1a1510]">
            {/* Actual Map - You can replace this iframe with Google Maps or any map service */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              className="w-full h-full grayscale-[0.8] contrast-125 brightness-75 saturate-50"
              style={{ border: 0, filter: 'hue-rotate(20deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Greek Border Overlay - Top */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#1a1510] via-[#1a1510]/80 to-transparent pointer-events-none z-10">
              <div className="h-3 bg-repeat-x opacity-70 mt-2"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1tGTR8sbboS9ZGcJU6iaZN8_b_1efaWydHk0vaDfMKFSdF3sMZNiuj2xkZ880qhg75e1PvtJHf7mnsgu90cpwBEzm5buZCf9cIPH6BU4EEe945rcNje31WRVaVTqUK2u56VuJCBXd8NllQUksZCcQnDS5T3VNtIc9WL9tM02uEV8Js4kqBcQU6bYnMDKaPKC0ziokUTI9JdLBc9GdkF0L5Xfd_Z8xkh09KREWNxs3Ew1WQm_h5kx5ooYpudMBxNyxLqkWyedpMaxf")',
                  backgroundSize: 'auto 100%',
                }}
              ></div>
            </div>

            {/* Greek Border Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1a1510] via-[#1a1510]/80 to-transparent pointer-events-none z-10">
              <div className="h-3 bg-repeat-x opacity-70 mb-2"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1tGTR8sbboS9ZGcJU6iaZN8_b_1efaWydHk0vaDfMKFSdF3sMZNiuj2xkZ880qhg75e1PvtJHf7mnsgu90cpwBEzm5buZCf9cIPH6BU4EEe945rcNje31WRVaVTqUK2u56VuJCBXd8NllQUksZCcQnDS5T3VNtIc9WL9tM02uEV8Js4kqBcQU6bYnMDKaPKC0ziokUTI9JdLBc9GdkF0L5Xfd_Z8xkh09KREWNxs3Ew1WQm_h5kx5ooYpudMBxNyxLqkWyedpMaxf")',
                  backgroundSize: 'auto 100%',
                }}
              ></div>
            </div>

            {/* Decorative Corner Frames */}
            <svg className="absolute top-2 left-2 w-8 h-8 text-primary/60 pointer-events-none z-20" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 L100,0 L100,15 L15,15 L15,100 L0,100 Z" />
            </svg>
            <svg className="absolute top-2 right-2 w-8 h-8 text-primary/60 pointer-events-none z-20 rotate-90" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 L100,0 L100,15 L15,15 L15,100 L0,100 Z" />
            </svg>
            <svg className="absolute bottom-2 left-2 w-8 h-8 text-primary/60 pointer-events-none z-20 -rotate-90" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 L100,0 L100,15 L15,15 L15,100 L0,100 Z" />
            </svg>
            <svg className="absolute bottom-2 right-2 w-8 h-8 text-primary/60 pointer-events-none z-20 rotate-180" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0,0 L100,0 L100,15 L15,15 L15,100 L0,100 Z" />
            </svg>

            {/* Location Badge Overlay */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <div className="bg-gradient-to-r from-[#1a1510] via-primary/90 to-[#1a1510] px-6 py-2 border border-primary/60 shadow-lg">
                <p className="text-[#181611] text-xs font-black uppercase tracking-wider text-center">
                  📍 Divine Innovation Hub
                </p>
              </div>
            </div>

            {/* Compass Rose - Bottom Right */}
            <div className="absolute bottom-16 right-4 w-16 h-16 pointer-events-none z-20 opacity-60">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-primary rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary text-xs font-bold">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">N</div>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">S</div>
                    <div className="absolute top-1/2 -left-6 -translate-y-1/2">W</div>
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2">E</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary via-primary to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMap;
