import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventDetailModal from '../components/EventDetailModal';
import { eventDetails } from '../data/eventDetails';
import type { EventDetail } from '../data/eventDetails';
import './EventsArena.css';

interface EventCardData {
  id: number;
  title: string;
  description: string;
  prize: string;
  venue: string;
  category: string;
  image: string;
  imageAlt: string;
}

const eventsData: EventCardData[] = [
  {
    id: 1,
    title: 'The Code of Odin',
    description: "Decrypt the ancient algorithms and solve the logic of the All-Father in this high-stakes competitive programming saga.",
    prize: '50,000 Gold Credits',
    venue: 'The High Hall (Lab 101)',
    category: 'Coding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKXq_nG-T09CvXluBxrbStxao8cgVuxOh35UP-hsxkA_GtQQa0QBBE26D8JtFSMdv5XQldKvZgSkh5S6_eZ674yq4gjBp3BBUPajAx2DCM-Z_hsKJskai-HvzcHS0AMs_oRrBqShLjOBzaHmGt9acliT-7tqKpxgzQxD4gDCoilnArQk6PT43TZLNu-S-wxq5EkJccmbvdakmdlaTkq1JbJAY4A1-tB-0TXu0mhpWV4JhptAa-n5F_DPsjBWK_e938G3Bq4JwiYIZZ',
    imageAlt: 'Digital runes and circuits flowing like a river of gold'
  },
  {
    id: 2,
    title: "Thor's Hammer-Bot",
    description: 'Forge metal warriors and pit them in a battle of torque and titanium within the electrified combat arena.',
    prize: '75,000 Gold Credits',
    venue: 'Mjolnir Plaza (Arena A)',
    category: 'Robotics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiyA7yBR6Dxtarf39fYUGkZHwz7oNU5PchT8q3fvhfeNiC8K9cISDycPVaN8lAKWnjCJUwGaNIp14UDbl0BemESGHgDmOmgIfH9197ZhUhsfbcEbJzy2oJd0LX0fEJJekMZrh2XmpKeflvqGTWe-b_ymKNhxv5invZOij7JkQv5x9h3g8C5aD6d51lBCGMQNfqmrUJDI64iRkge0pI02sBsUMEw6uA41hWry7q3MWezMfoPL5jRUiO2da1-3_7wRr0Rbmy29xp-Y4A',
    imageAlt: 'A robotic hammer striking a glowing anvil with sparks'
  },
  {
    id: 3,
    title: 'Valhalla Arena',
    description: "Only the elite will ascend. Battle through the ranks of Midgard's best gamers in the ultimate E-Sports showdown.",
    prize: '100,000 Gold Credits',
    venue: 'The Bifrost Hub',
    category: 'Gaming',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRODD7nRLUqjrCAYXJNL19wTTDRXO34eV09BSeHn-nb8kV-Qm9FcKsXRNkou7l45nl28Od4CY_WfbWS3pkIoXcOd14gprNBXauff_hN_A5cf08di-7mLRBm4IywcGa73mGLafM517Lt4PZ4ms9pLnjAsmhmW0U52RewdH9khcDN0BCwrs64MPUTKIrlLeByYtb7EkOR2kLMdmY4WxqWgIiZWXB_LeDOLaJSqTBWmOPvlwjP7obtk0LS7atSelzE2vv36yGFx_HhxSj',
    imageAlt: 'An ethereal digital throne surrounded by gaming monitors'
  },
  {
    id: 4,
    title: "Loki's Logic Maze",
    description: "A labyrinth of trickery and traps. Bypass the Trickster God's security systems to claim the prize.",
    prize: '40,000 Gold Credits',
    venue: 'The Hidden Cave',
    category: 'Cybersecurity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3sJcz3hp7bcxJ8XvH171yggEAS766Ws6hCd_YUQxusbzxRoLpZBBc1xgTWpNqbfHTummj18E1K-AlrLSknckJIbXpl6n06LD6qRJTDDpb_HkkrSa8mGinDMtQC4ZtiTdXD3SwSsjXX2NpInt8oqUVGwRAEhX8DduP2rDuUUwPiQIXHRcw04x2AuRNaRpeX9dBx3lRMVbX8O37iwLL9URPhLjF4rimcwN1BO0sBl4KuRwp0U9PMgmoFAiOfB52PucEitbiJ90SXEfD',
    imageAlt: 'A shadowy maze pattern with a digital lock icon'
  },
  {
    id: 5,
    title: "Heimdall's Watch",
    description: 'Train models to see all and know all. Build an AI capable of guarding the realm against unseen threats.',
    prize: '60,000 Gold Credits',
    venue: 'Observatory Gate',
    category: 'AI / ML',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyoeAhOidb4tkYFOEHAjAuGA3iOkxmQLOzpSbpcj6ZzwWi3_9yhI1bB-F_UnNfwl2-lE9C2KNQmX5GBKIWwRhnouvx66gEzsDkGSugbW6WHg4CkexRAiiMZp-jmOFrm9MjYfy4fiM7ykxHMtVQpY31DXd7ki7I1yz_4Oz412DScxarxNFDG5SEVPCdCvgKkPnA9prAi3nHa5gMCF_qgJhAcp9WWJjOqG7sdJA-_cC4Qbk_5sw3QoW6eTv22veSbtibZfhv3JDT-CdT',
    imageAlt: 'A glowing eye watching over a digital landscape'
  },
  {
    id: 6,
    title: "Freya's Design Loom",
    description: 'Weave together beauty and functionality. Create the UI/UX that will guide the gods through the digital age.',
    prize: '30,000 Gold Credits',
    venue: 'The Silk Atelier',
    category: 'Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_aS7IdyiQ9lDc-guOplr7wNnfBhm2NS1tNqGvOgxTuEqaXH26BwyrfcVPr1rc9HatvWfK9OQXHMYvRvCXZ1_MbcmExo-9yu085ZqEuLiKgXx1v--VgLDNJFa0ocIfj85QBkolJQT7UObpkBWUwbYSp2qCrJRJfySrq8G1OOZJ1cb9kTV3vzlZAPFUZGLMquqtto7hkVnGlKV1yguBhnzDAf62F7HRfLuD__qzVWJhCGbBBRtalXf9hFOiyRr-sOIjOJNJsaMCyuCG',
    imageAlt: 'Abstract golden silk weaving through a circuit board'
  }
];

const categories = [
  { id: 'all', icon: 'all_inclusive', label: 'All Trials' },
  { id: 'coding', icon: 'terminal', label: 'Coding Runes' },
  { id: 'robotics', icon: 'precision_manufacturing', label: 'Robotic Forging' },
  { id: 'gaming', icon: 'sports_esports', label: 'Gaming Valhalla' },
  { id: 'cybersecurity', icon: 'security', label: "Loki's Logic" }
];

const EventsArena: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleViewScroll = (eventId: number) => {
    const event = eventDetails.find(e => e.id === eventId);
    if (event) {
      setSelectedEvent(event);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const filteredEvents = activeCategory === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category.toLowerCase() === activeCategory);

  return (
    <div className="events-arena-page">
      {/* Background */}
      <div className="bifrost-bg"></div>

      {/* Header / Nav */}
      <header className="arena-header">
        <div className="arena-header-content">
          <div className="arena-nav-left">
            <div className="arena-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <div className="arena-logo-icon">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h1 className="arena-logo-text">Ragnarok</h1>
            </div>
            <nav className="arena-nav-links">
              <a onClick={() => navigate('/')} className="arena-nav-link">Home</a>
              <a href="/events" className="arena-nav-link arena-nav-link-active">Arena</a>
              <a href="#chronicles" className="arena-nav-link">Chronicles</a>
              <a href="#rules" className="arena-nav-link">Rules</a>
              <a href="#sponsors" className="arena-nav-link">Sponsors</a>
            </nav>
          </div>
          <div className="arena-nav-right">
            <div className="arena-search">
              <span className="material-symbols-outlined">search</span>
              <input 
                type="text" 
                placeholder="Search the Realm..." 
                className="arena-search-input"
              />
            </div>
            <button className="arena-register-btn">REGISTER</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="arena-main">
        {/* Hero Section */}
        <div className="arena-hero">
          <div className="arena-glow-effect"></div>
          <h2 className="arena-title">
            Events <span className="arena-title-highlight">Arena</span>
          </h2>
          <p className="arena-subtitle">
            Step into the proving grounds of the gods. Challenge your intellect in the Code of Odin or test your mechanical might in the Forge of Hephaestus.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="arena-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`arena-category-btn ${activeCategory === category.id ? 'arena-category-btn-active' : ''}`}
            >
              <span className="material-symbols-outlined">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
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
                <div className="arena-card-details">
                  <div className="arena-card-detail">
                    <span className="material-symbols-outlined">payments</span>
                    <span>Prize: {event.prize}</span>
                  </div>
                  <div className="arena-card-detail">
                    <span className="material-symbols-outlined">location_on</span>
                    <span>Venue: {event.venue}</span>
                  </div>
                </div>
              </div>
              <button 
                className="arena-card-btn"
                onClick={() => handleViewScroll(event.id)}
              >
                <span>View Scroll</span>
                <span className="material-symbols-outlined">auto_stories</span>
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="arena-footer">
          <div className="arena-footer-content">
            <div className="arena-footer-links">
              <a href="#rules">Book of Rules</a>
              <span className="arena-footer-divider">•</span>
              <a href="#conduct">Code of Conduct</a>
              <span className="arena-footer-divider">•</span>
              <a href="#privacy">Privacy Rune</a>
            </div>
            <div className="arena-footer-social">
              <div className="arena-social-icon">
                <span className="material-symbols-outlined">alternate_email</span>
              </div>
              <div className="arena-social-icon">
                <span className="material-symbols-outlined">public</span>
              </div>
            </div>
          </div>
          <p className="arena-footer-text">Ragnarok © 2024 • Powered by the Forge of Asgard</p>
        </footer>
      </main>

      {/* Event Detail Modal */}
      <EventDetailModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EventsArena;
