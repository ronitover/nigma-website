import React from 'react';
import type { FeatureCard as FeatureCardType } from '../types';
import './FeatureCard.css';

interface FeatureCardProps {
  feature: FeatureCardType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="group flex flex-col gap-6 rounded-xl border border-[#544c3b] bg-[#27231b]/95 p-8 transition-all hover:-translate-y-2 hover:border-primary/50">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
        <p className="text-[#bab09c] text-sm leading-relaxed">{feature.description}</p>
      </div>
      <a
        className="mt-4 text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:underline"
        href={feature.link}
      >
        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </div>
  );
};

export default FeatureCard;
