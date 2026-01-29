import React, { useRef, useEffect, useState } from 'react';
import './ScrollReveal.css';

type Direction = 'up' | 'down';

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Slide-in direction when scrolling into view */
  direction?: Direction;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** How much of the element must be visible to trigger (0–1) */
  amount?: number;
  /** Run animation only once (true) or every time in view (false) */
  once?: boolean;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  amount = 0.15,
  once = true,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: amount,
        // Shrink viewport from bottom so sections only trigger when scrolled into view (not on load)
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount, once]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
