import React, { useEffect, useRef } from 'react';
import './EventDetailModal.css';

interface EventPhase {
  number: string;
  title: string;
  description: string;
}

interface EventDetail {
  id: number;
  title: string;
  description: string;
  quote: string;
  icon: string;
  rules: string[];
  phases: EventPhase[];
  registrationDeadline?: string;
}

interface EventDetailModalProps {
  event: EventDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  vx: number;
  vy: number;
  color: 'blue' | 'gold';
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, isOpen, onClose }) => {
  const [showRegistration, setShowRegistration] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isFlipping, setIsFlipping] = React.useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationFrame = useRef<number | undefined>(undefined);
  const time = useRef(0);

  const handleRegisterClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowRegistration(true);
      setIsFlipping(false);
    }, 300);
  };

  const handleBackToDetails = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowRegistration(false);
      setIsFlipping(false);
    }, 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFlipping(true);
    setTimeout(() => {
      setShowRegistration(false);
      setShowSuccess(true);
      setIsFlipping(false);
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Handle ESC key to close modal
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      window.addEventListener('keydown', handleEsc);
      
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'unset';
      // Reset to event details when modal closes
      setShowRegistration(false);
      setShowSuccess(false);
      setIsFlipping(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Constellation animation effect
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars with constellation patterns (matching main ConstellationBackground)
    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = [];

      // Create constellation clusters
      const clusterCount = Math.floor(starCount / 6);
      
      for (let cluster = 0; cluster < clusterCount; cluster++) {
        // Random cluster center
        const centerX = Math.random() * canvas.width;
        const centerY = Math.random() * canvas.height;
        const clusterRadius = 100 + Math.random() * 100;
        const starsInCluster = 5 + Math.floor(Math.random() * 3);
        
        // Determine cluster color (alternating blue and gold clusters)
        const clusterColor: 'blue' | 'gold' = cluster % 2 === 0 ? 'blue' : 'gold';

        for (let i = 0; i < starsInCluster; i++) {
          const angle = (i / starsInCluster) * Math.PI * 2;
          const distance = Math.random() * clusterRadius;
          
          starsRef.current.push({
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance,
            size: Math.random() * 2 + 0.8,
            opacity: Math.random() * 0.4 + 0.4,
            twinkleSpeed: Math.random() * 0.02 + 0.01,
            vx: (Math.random() - 0.5) * 0.08,
            vy: (Math.random() - 0.5) * 0.08,
            color: clusterColor,
          });
        }
      }

      // Add some scattered random stars
      const randomStars = Math.floor(starCount * 0.3);
      for (let i = 0; i < randomStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          color: Math.random() > 0.5 ? 'blue' : 'gold',
        });
      }

      // Create connections between nearby stars (constellation lines)
      connectionsRef.current = [];
      const maxDistance = 120;

      for (let i = 0; i < starsRef.current.length; i++) {
        const star1 = starsRef.current[i];
        let connectionsForStar = 0;
        const maxConnectionsPerStar = 3;

        for (let j = i + 1; j < starsRef.current.length; j++) {
          if (connectionsForStar >= maxConnectionsPerStar) break;
          
          const star2 = starsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );

          // Connect stars of same color that are close together
          if (distance < maxDistance && star1.color === star2.color && Math.random() > 0.7) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: 0.2,
            });
            connectionsForStar++;
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      time.current += 0.01;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      starsRef.current.forEach((star, index) => {
        // Slow drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Twinkling effect
        const twinkle = Math.sin(time.current * star.twinkleSpeed + index) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        // Draw star with blue or gold glow
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        
        if (star.color === 'blue') {
          gradient.addColorStop(0, `rgba(147, 197, 253, ${currentOpacity})`);
          gradient.addColorStop(0.4, `rgba(59, 130, 246, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 235, 157, ${currentOpacity})`);
          gradient.addColorStop(0.4, `rgba(244, 175, 37, ${currentOpacity * 0.6})`);
          gradient.addColorStop(1, 'rgba(244, 175, 37, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw constellation lines
      connectionsRef.current.forEach((connection) => {
        const star1 = starsRef.current[connection.from];
        const star2 = starsRef.current[connection.to];

        if (!star1 || !star2) return;

        const distance = Math.sqrt(
          Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
        );

        // Fade lines based on distance
        const maxDistance = 120;
        const lineOpacity = connection.opacity * (1 - distance / maxDistance);

        if (lineOpacity > 0) {
          // Create gradient line based on star colors
          const gradient = ctx.createLinearGradient(
            star1.x, star1.y,
            star2.x, star2.y
          );
          
          if (star1.color === 'blue') {
            gradient.addColorStop(0, `rgba(59, 130, 246, ${lineOpacity * star1.opacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(96, 165, 250, ${lineOpacity * 0.9})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${lineOpacity * star2.opacity * 0.8})`);
          } else {
            gradient.addColorStop(0, `rgba(244, 175, 37, ${lineOpacity * star1.opacity * 0.8})`);
            gradient.addColorStop(0.5, `rgba(255, 215, 97, ${lineOpacity * 0.9})`);
            gradient.addColorStop(1, `rgba(244, 175, 37, ${lineOpacity * star2.opacity * 0.8})`);
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(star1.x, star1.y);
          ctx.lineTo(star2.x, star2.y);
          ctx.stroke();
        }
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Constellation Canvas Background */}
      <canvas
        ref={canvasRef}
        className="modal-constellation-canvas"
      />
      
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Fixed Torches */}
        <div className="torch-left">
          <div className="torch-pole"></div>
          <span className="material-symbols-outlined torch-flame">local_fire_department</span>
          <div className="torch-text">VALHALLA</div>
        </div>
        <div className="torch-right">
          <div className="torch-pole"></div>
          <span className="material-symbols-outlined torch-flame">local_fire_department</span>
          <div className="torch-text">RAGNAROK</div>
        </div>

        <div className="modal-content-wrapper">
          {/* Back Button */}
          {!showSuccess && (
            <div className="modal-back-btn-wrapper">
              <button 
                className="modal-back-btn" 
                onClick={showRegistration ? handleBackToDetails : onClose}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>{showRegistration ? 'Return to Event Details' : 'Back to Arena'}</span>
              </button>
            </div>
          )}

          {/* Golden Scroll */}
          <div className={`golden-scroll ${isFlipping ? 'scroll-flipping' : ''}`}>
            {showSuccess ? (
              /* Success Screen */
              <div className="scroll-content success-screen">
                {/* Header */}
                <div className="success-header">
                  <h1 className="success-title">
                    <span className="material-symbols-outlined success-icon">verified</span>
                    Registration Victorious
                  </h1>
                  <p className="success-subtitle">
                    Your name has been etched in gold into the halls of Valhalla.
                  </p>
                </div>

                {/* Confirmation Card */}
                <div className="success-card">
                  <div className="success-card-image">
                    <div className="success-card-overlay"></div>
                  </div>
                  <div className="success-card-content">
                    <p className="success-card-title">The Code of Odin</p>
                    <div className="success-card-details">
                      <div className="success-card-info">
                        <div className="success-info-item">
                          <span className="material-symbols-outlined">verified</span>
                          <p>Status: Confirmed</p>
                        </div>
                        <div className="success-info-item">
                          <span className="material-symbols-outlined">military_tech</span>
                          <p>Warrior ID: RAG-ODIN-2024</p>
                        </div>
                      </div>
                      <button className="success-ticket-btn">
                        <span>VIEW TICKET</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Return Button */}
                <div className="success-actions">
                  <button className="success-return-btn" onClick={onClose}>
                    <span className="material-symbols-outlined">swords</span>
                    <span>Return to Arena</span>
                    <span className="material-symbols-outlined">swords</span>
                  </button>
                </div>

                {/* Decorative Icons */}
                <div className="success-decorations">
                  <span className="material-symbols-outlined">temple_hindu</span>
                  <span className="material-symbols-outlined">mountain_flag</span>
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
              </div>
            ) : !showRegistration ? (
              <div className="scroll-content">
              {/* Header */}
              <div className="scroll-header">
                <div className="scroll-icon-wrapper">
                  <span className="material-symbols-outlined scroll-icon">{event.icon}</span>
                </div>
                <h1 className="scroll-title">{event.title}</h1>
                <div className="scroll-divider"></div>
              </div>

              {/* Quote */}
              <div className="scroll-quote">
                <p>"{event.quote}"</p>
              </div>

              {/* Rules Section */}
              <div className="scroll-section">
                <div className="scroll-section-header">
                  <span className="material-symbols-outlined">gavel</span>
                  <h2>Rules of Engagement</h2>
                </div>
                <ul className="scroll-rules-list">
                  {event.rules.map((rule, index) => (
                    <li key={index}>
                      <span className="rule-number">{String(index + 1).padStart(2, '0')}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warrior's Guide Section */}
              <div className="scroll-section">
                <div className="scroll-section-header">
                  <span className="material-symbols-outlined">map</span>
                  <h2>Warrior's Guide</h2>
                </div>
                <div className="scroll-phases">
                  {event.phases.map((phase, index) => (
                    <div key={index} className="phase-card">
                      <div className="phase-number">Phase {phase.number}</div>
                      <div className="phase-title">{phase.title}</div>
                      <p className="phase-description">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prize Badge removed per data model change */}
            </div>
            ) : (
              /* Registration Form */
              <div className="scroll-content registration-form">
                {/* Header */}
                <div className="registration-header">
                  <div className="registration-icon-wrapper">
                    <span className="material-symbols-outlined registration-icon">history_edu</span>
                  </div>
                  <h1 className="registration-title">Enlist Your Name</h1>
                  <p className="registration-subtitle">Warrior Registration Form</p>
                  <div className="registration-divider"></div>
                </div>

                {/* Form */}
                <form className="registration-form-fields" onSubmit={handleFormSubmit}>
                  <div className="form-field">
                    <label className="form-label">Full Name</label>
                    <input 
                      className="form-input" 
                      placeholder="e.g. Ragnar Lothbrok" 
                      required 
                      type="text"
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-label">College</label>
                    <input 
                      className="form-input" 
                      placeholder="Asgard Institute of Technology" 
                      required 
                      type="text"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">City, State</label>
                      <input 
                        className="form-input" 
                        placeholder="Midgard, NY" 
                        required 
                        type="text"
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone Number</label>
                      <input 
                        className="form-input" 
                        placeholder="+1 (555) VALHALLA" 
                        required 
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="form-submit-wrapper">
                    <button className="form-submit-btn" type="submit">
                      <span className="form-submit-overlay"></span>
                      <div className="form-submit-content">
                        <span className="material-symbols-outlined">swords</span>
                        JOIN THE BATTLE
                        <span className="material-symbols-outlined">swords</span>
                      </div>
                    </button>
                  </div>
                </form>

                <div className="registration-disclaimer">
                  <p>By joining, you agree to the laws of the Arena and the fate of the Norns.</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Area - Only show when viewing event details */}
          {!showRegistration && !showSuccess && (
            <div className="modal-actions">
              <button className="modal-register-btn" onClick={handleRegisterClick}>
                Register Now
              </button>
              {event.registrationDeadline && (
                <p className="modal-deadline">Registrations close in {event.registrationDeadline}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
