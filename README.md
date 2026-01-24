# Ragnarok Fest - The Ultimate Tech Odyssey

A modern, responsive React + TypeScript website for a tech festival, featuring a clean modular architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer)
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── sections/        # Page sections (Hero, Features, etc.)
│   │   ├── Hero.tsx
│   │   ├── Hero.css
│   │   ├── CountdownTimer.tsx
│   │   ├── CountdownTimer.css
│   │   ├── Features.tsx
│   │   ├── Features.css
│   │   ├── CTA.tsx
│   │   └── CTA.css
│   └── ui/              # Reusable UI components
│       ├── FeatureCard.tsx
│       └── FeatureCard.css
├── pages/               # Page components
│   └── Home.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── styles/              # Global styles (if needed)
├── assets/              # Images, fonts, etc.
│   └── images/
├── App.tsx              # Main app component
├── App.css
├── index.css            # Tailwind directives & global styles
└── main.tsx             # App entry point
```

## 🎨 Styling

This project uses **Tailwind CSS** with a custom configuration:

- **Primary Color**: `#f4af25` (golden)
- **Background Light**: `#f8f7f5`
- **Background Dark**: `#181611`
- **Font**: Be Vietnam Pro

Custom classes:
- `.meander-pattern` - Greek meander decoration
- `.hero-gradient` - Hero section gradient overlay

## 🧩 Components

### Layout Components
- **Header**: Sticky navigation with logo, nav links, and CTA buttons
- **Footer**: Site footer with links and social icons

### Section Components
- **Hero**: Main hero section with background image and CTAs
- **CountdownTimer**: Dynamic countdown timer with optional target date
- **Features**: Grid of feature cards showcasing event highlights
- **CTA**: Call-to-action section with registration prompt

### UI Components
- **FeatureCard**: Reusable card component for features

## 📄 Adding New Pages

1. Create a new page component in `src/pages/`:
```tsx
// src/pages/Events.tsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Events: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        {/* Your content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
```

2. Update `App.tsx` to include routing (install `react-router-dom` if needed)

## 🎯 Features

- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ TypeScript for type safety
- ✅ Modular component architecture
- ✅ Separated styles for easy customization
- ✅ Reusable UI components
- ✅ Dynamic countdown timer
- ✅ Material Symbols icons
- ✅ Custom Tailwind configuration

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js`:
```js
colors: {
  "primary": "#your-color",
  "background-light": "#your-color",
  "background-dark": "#your-color",
}
```

### Setting Countdown Date
In `src/pages/Home.tsx`:
```tsx
const eventDate = new Date('2024-12-31T23:59:59');
```

### Modifying Features
Edit the `featuresData` array in `src/components/sections/Features.tsx`

## 📦 Dependencies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Google Fonts (Be Vietnam Pro, Material Symbols)

## 🎭 Icon Usage

This project uses Material Symbols. Use them like this:
```tsx
<span className="material-symbols-outlined">icon_name</span>
```

Find icons at: https://fonts.google.com/icons

## 📝 License

All rights reserved © 2024
