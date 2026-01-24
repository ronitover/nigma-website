import React from 'react';
import EventCard from '../../../../shared/components/EventCard';
import type { EventCard as EventCardType } from '../../../../shared/types';
import './Events.css';

const eventsData: EventCardType[] = [
  {
    icon: 'bolt',
    title: 'The Labyrinth of Logic',
    category: 'Coding Challenge',
    difficulty: 'ELITE',
    teamSize: 'Solo / Duo',
  },
  {
    icon: 'settings',
    title: 'Forge of Hephaestus',
    category: 'Robotics Competition',
    difficulty: 'LEGENDARY',
    teamSize: 'Team of 3',
  },
  {
    icon: 'palette',
    title: 'Vision of Aphrodite',
    category: 'Design Sprint',
    difficulty: 'IMMORTAL',
    teamSize: 'Solo',
  },
];

const Events: React.FC = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col max-w-[1200px] w-full px-6 py-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-2">
            Mythic Challenges
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight px-4 pb-3">
            The Trials of Ragnarok
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full"></div>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mb-16">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
