import React from 'react';
import FeatureCard from '../../../../shared/components/FeatureCard';
import type { FeatureCard as FeatureCardType } from '../../../../shared/types';
import './Features.css';

const featuresData: FeatureCardType[] = [
  {
    icon: 'code',
    title: 'Grand Hackathon',
    description:
      'A 48-hour odyssey of coding and creation. Build the future on the foundation of the ancients.',
    link: '#',
  },
  {
    icon: 'school',
    title: 'Divine Workshops',
    description:
      'Master the crafts of AI, Blockchain, and Robotics with titans of the tech industry.',
    link: '#',
  },
  {
    icon: 'sports_esports',
    title: 'Gaming Arena',
    description:
      'The ultimate trial of reflexes and strategy. E-sports tournaments with legendary stakes.',
    link: '#',
  },
];

const Features: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <div className="flex flex-col gap-8 sm:gap-12">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-foreground tracking-tight text-3xl sm:text-4xl md:text-5xl font-black uppercase">
            Divine Tech Pillars
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto md:mx-0"></div>
          <p className="text-[#bab09c] text-lg font-normal leading-normal max-w-[720px]">
            Ascend beyond the ordinary with challenges designed for the modern gods of engineering
            and creativity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
