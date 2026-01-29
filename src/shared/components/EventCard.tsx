import React from 'react';
import type { EventCard as EventCardType } from '../types';
import './EventCard.css';

interface EventCardProps {
  event: EventCardType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="stone-texture glow-effect flex flex-1 gap-5 rounded-xl border border-stone-border bg-marble-dark/95 p-8 flex-col transition-all duration-300 group cursor-pointer">
      <div className="text-primary group-hover:scale-110 transition-transform duration-300">
        <span className="material-symbols-outlined !text-4xl">{event.icon}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-foreground text-xl font-bold leading-tight">{event.title}</h2>
        <p className="text-[#bab09c] text-sm font-normal leading-relaxed uppercase tracking-widest">
          {event.category}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded border border-primary/20">
            {event.difficulty}
          </span>
          <span className="text-foreground/40 text-[10px] font-bold uppercase">{event.teamSize}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
