import React from 'react';
import './InfoMap.css';

const InfoMap: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-10 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Info Section */}
        <div className="flex flex-col gap-6 col-span-12 lg:col-span-6">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-foreground text-2xl sm:text-3xl font-bold uppercase tracking-tight">The Citadel</h2>
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
                <p className="text-foreground font-bold uppercase tracking-wider">Dr. NSAM First Grade College</p>
                <p className="text-[#bab09c] text-sm">
                  Nitte Off-Campus Center, Udupi, Karnataka, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-foreground font-bold uppercase tracking-wider">
                  EMAIL US AT
                </p>
                <p className="text-[#bab09c] text-sm">oracle@ragnarokfest.edu</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined">phone_iphone</span>
              </div>
              <div>
                <p className="text-foreground font-bold uppercase tracking-wider">Divine Hotline</p>
                <p className="text-[#bab09c] text-sm">+91 8310903547</p>
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
        <div className="relative group flex justify-center col-span-12 lg:col-span-6">
          {/* Greek-themed Interactive Map */}
          <div className="w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/40 shadow-2xl bg-transparent">
            {/* Google Maps embed for Dr. NSAM First Grade College, Nitte */}
            <iframe
              src="https://www.google.com/maps?q=Dr.+NSAM+First+Grade+College,+Nitte&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoMap;
