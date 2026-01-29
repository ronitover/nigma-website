import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  vx: number;
  vy: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPoints = useRef<TrailPoint[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const animationFrame = useRef<number | undefined>(undefined);
  const isMoving = useRef(false);
  const moveTimeout = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Check if cursor actually moved
      const distance = Math.sqrt(
        Math.pow(newX - lastPos.current.x, 2) + Math.pow(newY - lastPos.current.y, 2)
      );
      
      if (distance > 1) {
        mousePos.current = { x: newX, y: newY };
        lastPos.current = { x: newX, y: newY };
        isMoving.current = true;
        
        // Clear previous timeout
        if (moveTimeout.current) {
          clearTimeout(moveTimeout.current);
        }
        
        // Set timeout to detect when cursor stops
        moveTimeout.current = setTimeout(() => {
          isMoving.current = false;
        }, 100);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only add new points when cursor is moving
      if (isMoving.current && trailPoints.current.length > 0) {
        const lastPoint = trailPoints.current[trailPoints.current.length - 1];
        const vx = mousePos.current.x - lastPoint.x;
        const vy = mousePos.current.y - lastPoint.y;
        
        trailPoints.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          opacity: 1,
          vx: vx * 0.1,
          vy: vy * 0.1,
        });
      } else if (isMoving.current) {
        trailPoints.current.push({
          x: mousePos.current.x,
          y: mousePos.current.y,
          opacity: 1,
          vx: 0,
          vy: 0,
        });
      }

      // Limit trail length
      const maxPoints = 30;
      if (trailPoints.current.length > maxPoints) {
        trailPoints.current.shift();
      }

      // Draw the trail - HEAVENLY LIGHT
      if (trailPoints.current.length > 3) {
        // Apply gentle physics for flowing effect
        for (let i = 1; i < trailPoints.current.length; i++) {
          const point = trailPoints.current[i];
          // Gentle drift downward like falling light
          point.y += 0.3;
          point.x += point.vx;
          point.vx *= 0.95;
        }

        // Draw ethereal light trail with multiple layers
        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          
          // Start from the first point
          const firstPoint = trailPoints.current[0];
          ctx.moveTo(firstPoint.x, firstPoint.y);
          
          // Use bezier curves for ultra-smooth flow
          for (let i = 0; i < trailPoints.current.length - 1; i++) {
            const point = trailPoints.current[i];
            const nextPoint = trailPoints.current[i + 1];
            const progress = i / (trailPoints.current.length - 1);
            
            // Calculate smooth control points
            const cp1x = point.x + (nextPoint.x - point.x) / 3;
            const cp1y = point.y + (nextPoint.y - point.y) / 3;
            const cp2x = point.x + 2 * (nextPoint.x - point.x) / 3;
            const cp2y = point.y + 2 * (nextPoint.y - point.y) / 3;
            
            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nextPoint.x, nextPoint.y);
            
            // Draw light particles along the trail
            if (layer === 2 && i % 3 === 0) {
              const particleOpacity = (1 - progress) * point.opacity * 0.4;
              const particleSize = (1 - progress) * 3 + 1;
              
              const particleGradient = ctx.createRadialGradient(
                point.x, point.y, 0,
                point.x, point.y, particleSize * 2
              );
              particleGradient.addColorStop(0, `rgba(255, 235, 157, ${particleOpacity})`);
              particleGradient.addColorStop(0.5, `rgba(255, 215, 97, ${particleOpacity * 0.5})`);
              particleGradient.addColorStop(1, 'rgba(201, 162, 77, 0)');
              
              ctx.save();
              ctx.fillStyle = particleGradient;
              ctx.beginPath();
              ctx.arc(point.x, point.y, particleSize, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
          
          // Style based on layer - lighter and more ethereal
          if (layer === 0) {
            // Outer glow - very soft
            ctx.lineWidth = 8;
            ctx.strokeStyle = 'rgba(201, 162, 77, 0.08)';
            ctx.shadowBlur = 15;
            ctx.shadowColor = 'rgba(201, 162, 77, 0.15)';
          } else if (layer === 1) {
            // Middle glow
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'rgba(255, 215, 97, 0.2)';
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(255, 215, 97, 0.25)';
          } else {
            // Inner light beam - bright and thin
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = 'rgba(255, 235, 157, 0.6)';
            ctx.shadowBlur = 4;
            ctx.shadowColor = 'rgba(255, 235, 157, 0.4)';
          }
          
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
          
          // Reset shadow
          ctx.shadowBlur = 0;
        }
      }

      // Fade out points gracefully
      const fadeRate = isMoving.current ? 0.96 : 0.88;
      trailPoints.current = trailPoints.current
        .map(point => ({
          ...point,
          opacity: point.opacity * fadeRate,
        }))
        .filter(point => point.opacity > 0.03);

      animationFrame.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      if (moveTimeout.current) {
        clearTimeout(moveTimeout.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="cursor-trail-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default CursorTrail;
