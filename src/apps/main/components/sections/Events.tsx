import React, { useState } from 'react';
import './Events.css';
import '../../pages/EventsArena.css';

interface EventCardData {
  id: number;
  title: string;
  description: string;
  venue: string;
  category: 'Commerce' | 'IT' | 'Variety';
  image: string;
  imageAlt: string;
}

const eventsData: EventCardData[] = [
  // Commerce
  {
    id: 1,
    title: 'Best Manager',
    description: 'Inter-college management challenge.',
    venue: 'Main Hall',
    category: 'Commerce',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlpOL5H-EQtdnU7JAFVgncgGwi3xC1sq8yQC-5CfNPwUBUmV-4hiOYEQfTFkZOp-0y3IXI-rDVWYR_x7Q_KuGBdhWbDGjFCOn16bdT0_d36sovYliF19nc1wnLGwODR4HbEbn51sLP-6OloWwF4rHQj4qu__Z-jYy7lu5nGBKCEwAADPSyhvEo_Y8WKzzVCD_ZwIcBJnZdFOw5ajRFU3pEdjNPtlW_FS3f1p4ycXS5xP7HWM2c10EQY5qdxLGdvEElHnXH_PrHsDRc',
    imageAlt: 'Best Manager',
  },
  {
    id: 2,
    title: 'Finance',
    description: 'Finance case challenge and trading simulations.',
    venue: 'Finance Lab',
    category: 'Commerce',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAomt3vUjw5_OtEYxF5V8nKTeIFKaZ6Bb_mvrcrHxic5jLj9l3k_YO_wJmy3-iwcdNwpTo2t5afJPs8PiaheDagAyZw-j_XFCIhixZahN02bRAM2kTsOqo_-5G0VKV7UgriyDiRzRtsTNxWB3lWyQE4wDo4CoUKC8mbV2bFhl1xfzE_WyQNUjTsSUld5ijl4xGqhV0dksbrnyy8Lhkne9GchDMaRXaIVo5iHL_USS6zTr_wYOe22QXWyx_egBDcj39gwwdFUHLbUrQw',
    imageAlt: 'Finance',
  },
  // IT / Technical
  {
    id: 6,
    title: 'Coding Challenge',
    description: 'Problem-solving contest.',
    venue: 'Computer Lab',
    category: 'IT',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEYHZX0m9wA1uLU8FZHcjgCfIdZE8lyM3OBCJjXBkzPJs6anDBxpJmQwFGlCGDuGZvZ15NDKaAdqHsgcP59cg0dil6rDtlXGJzJiE7XOYu0yY6S1oT0TkrXuPyyYTiRf8rUsOVQIO6SIIQb4KGWaAxCFyY_JCpx0ht17J8BECzPzQv1nGh57vTgvoPmtqR9a9xrIFFAWFoGezI-LFOsxOnSbEtNmr1q6CEVdbWlvUPSgXq9vDqb6iddFb2nawcIfYEDYZfwfd5eg5u=s2400',
    imageAlt: 'Coding Challenge',
  },
  {
    id: 7,
    title: 'E-Sports',
    description: 'Competitive gaming tournament.',
    venue: 'Gaming Arena',
    category: 'IT',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAomt3vUjw5_OtEYxF5V8nKTeIFKaZ6Bb_mvrcrHxic5jLj9l3k_YO_wJmy3-iwcdNwpTo2t5afJPs8PiaheDagAyZw-j_XFCIhixZahN02bRAM2kTsOqo_-5G0VKV7UgriyDiRzRtsTNxWB3lWyQE4wDo4CoUKC8mbV2bFhl1xfzE_WyQNUjTsSUld5ijl4xGqhV0dksbrnyy8Lhkne9GchDMaRXaIVo5iHL_USS6zTr_wYOe22QXWyx_egBDcj39gwwdFUHLbUrQw',
    imageAlt: 'E-Sports',
  },
  // Variety
  {
    id: 11,
    title: 'Variety Event',
    description: 'Open cultural performances.',
    venue: 'Stage',
    category: 'Variety',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAv-UzRPvgrZLlVpWkv2mWwQQzVlZbHCQoWv5PC51Te6XHHDosmvp-ucUrytmon3pFE05AaZQD4AcSoVDC5we1K4R138opMym2ygIK4MhUIT11wBkdyevA6A_VnA7g_MCqj1IXo7KzLwUxlpKKDIv1_X7vlevct3b0sUKOVUM-GLX7qq5stTrhb4FiBcxGDNcZzltIupfeJTeF4BWdWsk_8HUIHcifPdVrjzncaBohB9nsAL0Q6qbWxEq143ZRq77eRULmDWLTJ29NB',
    imageAlt: 'Variety Event',
  },
];

const categories = [
  { id: 'Commerce', icon: 'store', label: 'Commerce & Management' },
  { id: 'IT', icon: 'memory', label: 'IT & Technical' },
  { id: 'Variety', icon: 'theaters', label: 'Variety Events' },
];

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'Commerce' | 'IT' | 'Variety'>('Commerce');

  const filteredEvents = eventsData.filter((event) => event.category === activeCategory);

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

        {/* Category Tabs (main trials only) */}
        <div className="arena-categories mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as 'Commerce' | 'IT' | 'Variety')}
              className={`arena-category-btn ${
                activeCategory === category.id ? 'arena-category-btn-active' : ''
              }`}
            >
              <span className="material-symbols-outlined">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Events Grid - styled like Events Arena */}
        <div className="arena-events-grid">
          {filteredEvents.map((event) => (
            <div key={event.id} className="arena-event-card">
              <div className="arena-card-image-wrapper">
                <div
                  className="arena-card-image"
                  style={{ backgroundImage: `url('${event.image}')` }}
                  role="img"
                  aria-label={event.imageAlt}
                ></div>
                <div className="arena-card-overlay"></div>
                <div className="arena-card-badge">{event.category}</div>
              </div>
              <div className="arena-card-content">
                <h3 className="arena-card-title">{event.title}</h3>
                <p className="arena-card-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
