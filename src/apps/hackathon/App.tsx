import React from 'react';
import Login from './pages/Login';
import CursorTrail from '../../shared/components/CursorTrail';

const HackathonApp: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-foreground transition-colors duration-300">
      <CursorTrail />
      <Login />
    </div>
  );
};

export default HackathonApp;
