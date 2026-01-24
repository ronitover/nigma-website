import React, { useState, useEffect } from 'react';
import type { CountdownTime } from '../../../../shared/types';
import './CountdownTimer.css';

interface CountdownTimerProps {
  targetDate?: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 12,
  });

  useEffect(() => {
    if (!targetDate) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section className="bg-[#27231b]/95 py-12 border-y border-[#393328]">
      <div className="mx-auto max-w-[960px] px-6">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">
            The Storm Approaches In
          </h3>
          <div className="flex gap-4 md:gap-8 w-full">
            <div className="flex grow basis-0 flex-col items-stretch gap-3">
              <div className="flex h-20 grow items-center justify-center rounded-xl bg-[#181611] border border-[#544c3b] shadow-inner">
                <p className="text-primary text-3xl md:text-5xl font-black leading-tight font-display">
                  {formatNumber(timeLeft.days)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#bab09c] text-xs md:text-sm font-bold uppercase tracking-widest">
                  Days
                </p>
              </div>
            </div>

            <div className="flex grow basis-0 flex-col items-stretch gap-3">
              <div className="flex h-20 grow items-center justify-center rounded-xl bg-[#181611] border border-[#544c3b] shadow-inner">
                <p className="text-primary text-3xl md:text-5xl font-black leading-tight">
                  {formatNumber(timeLeft.hours)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#bab09c] text-xs md:text-sm font-bold uppercase tracking-widest">
                  Hours
                </p>
              </div>
            </div>

            <div className="flex grow basis-0 flex-col items-stretch gap-3">
              <div className="flex h-20 grow items-center justify-center rounded-xl bg-[#181611] border border-[#544c3b] shadow-inner">
                <p className="text-primary text-3xl md:text-5xl font-black leading-tight">
                  {formatNumber(timeLeft.minutes)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#bab09c] text-xs md:text-sm font-bold uppercase tracking-widest">
                  Minutes
                </p>
              </div>
            </div>

            <div className="flex grow basis-0 flex-col items-stretch gap-3">
              <div className="flex h-20 grow items-center justify-center rounded-xl bg-[#181611] border border-[#544c3b] shadow-inner">
                <p className="text-primary text-3xl md:text-5xl font-black leading-tight">
                  {formatNumber(timeLeft.seconds)}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-[#bab09c] text-xs md:text-sm font-bold uppercase tracking-widest">
                  Seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
