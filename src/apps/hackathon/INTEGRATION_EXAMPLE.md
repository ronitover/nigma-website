# Integration Example - Login Page

## Quick Start

To view the login page immediately, update `src/apps/hackathon/App.tsx`:

```tsx
import React from 'react';
import Login from './pages/Login';  // Add this import
import CursorTrail from '../../shared/components/CursorTrail';

const HackathonApp: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white transition-colors duration-300">
      <CursorTrail />
      <Login />  {/* Replace <Home /> with <Login /> */}
    </div>
  );
};

export default HackathonApp;
```

## With Simple State-Based Routing

If you want to toggle between Home and Login:

```tsx
import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import CursorTrail from '../../shared/components/CursorTrail';

const HackathonApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'login'>('login');

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-white transition-colors duration-300">
      <CursorTrail />
      {currentPage === 'login' ? <Login /> : <Home />}
    </div>
  );
};

export default HackathonApp;
```

## With React Router (Recommended for Production)

### 1. Install React Router

```bash
npm install react-router-dom
```

### 2. Update App.tsx

```tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CursorTrail from '../../shared/components/CursorTrail';

const HackathonApp: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark font-display text-white transition-colors duration-300">
        <CursorTrail />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default HackathonApp;
```

### 3. Update Login.tsx to Navigate After Success

```tsx
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Your authentication logic here
    // ...
    
    // Navigate to home after successful login
    navigate('/');
  };
  
  // ... rest of component
};
```

### 4. Add Login Link to Home Page

Update the "Back to Home" button in Login.tsx:

```tsx
import { Link } from 'react-router-dom';

// Replace the button with:
<Link 
  to="/"
  className="flex items-center gap-1 sm:gap-2 rounded-full border border-primary/40 bg-black/40 backdrop-blur-md px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-primary transition-all hover:bg-primary hover:text-background-dark hover:border-primary"
>
  <span className="material-symbols-outlined text-sm sm:text-base">home</span>
  <span className="hidden sm:inline">Back to Home</span>
  <span className="sm:hidden">Home</span>
</Link>
```

## With Authentication State Management

For a complete authentication flow, consider using Context API or a state management library:

```tsx
// src/apps/hackathon/contexts/AuthContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    // Your authentication logic here
    // Example: call your API
    try {
      // const response = await fetch('/api/login', { ... });
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

Then use it in your Login component:

```tsx
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      // Handle error (show error message, etc.)
    }
  };
  
  // ... rest of component
};
```
