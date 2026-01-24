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
  prize: string;
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
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationFrame = useRef<number | undefined>(undefined);
  const time = useRef(0);

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

    // Initialize stars
    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
        });
      }

      // Create connections between nearby stars
      connectionsRef.current = [];
      const maxDistance = 150;

      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i];
          const star2 = starsRef.current[j];
          const distance = Math.sqrt(
            Math.pow(star1.x - star2.x, 2) + Math.pow(star1.y - star2.y, 2)
          );

          if (distance < maxDistance && Math.random() > 0.95) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: 0.15,
            });
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

        // Draw star with blue/gold glow (matching theme)
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        
        // Alternate between blue and gold stars
        const isBlue = index % 2 === 0;
        if (isBlue) {
          gradient.addColorStop(0, `rgba(96, 165, 250, ${currentOpacity})`);
          gradient.addColorStop(0.4, `rgba(59, 130, 246, ${currentOpacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 235, 157, ${currentOpacity})`);
          gradient.addColorStop(0.4, `rgba(244, 175, 37, ${currentOpacity * 0.5})`);
          gradient.addColorStop(1, 'rgba(244, 175, 37, 0)');
        }

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw bright center
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
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
        const maxDistance = 150;
        const lineOpacity = connection.opacity * (1 - distance / maxDistance);

        if (lineOpacity > 0) {
          // Create gradient line (blue/gold mix)
          const gradient = ctx.createLinearGradient(
            star1.x, star1.y,
            star2.x, star2.y
          );
          gradient.addColorStop(0, `rgba(59, 130, 246, ${lineOpacity * star1.opacity * 0.6})`);
          gradient.addColorStop(0.5, `rgba(255, 215, 97, ${lineOpacity * 0.8})`);
          gradient.addColorStop(1, `rgba(244, 175, 37, ${lineOpacity * star2.opacity * 0.6})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5;
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
          <div className="modal-back-btn-wrapper">
            <button className="modal-back-btn" onClick={onClose}>
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back to Arena</span>
            </button>
          </div>

          {/* Golden Scroll */}
          <div className="golden-scroll">
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

              {/* Prize Badge */}
              <div className="scroll-prize-wrapper">
                <div className="scroll-prize-badge">
                  <span className="material-symbols-outlined">military_tech</span>
                  <span>Prize Pool: {event.prize}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="modal-actions">
            <button className="modal-register-btn">
              Register Now
            </button>
            {event.registrationDeadline && (
              <p className="modal-deadline">Registrations close in {event.registrationDeadline}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
