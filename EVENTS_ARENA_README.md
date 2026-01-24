# Events Arena Page - Implementation Guide

## Overview
This implementation adds a dedicated **Events Arena** page to the Nigma website, inspired by the Ragnarok theme. The page showcases all hackathon events with high-quality design elements, smooth animations, and full mobile responsiveness.

## What Was Added

### 1. New Files Created
- `src/apps/main/pages/EventsArena.tsx` - Main Events Arena page component
- `src/apps/main/pages/EventsArena.css` - Styling for the Events Arena page

### 2. Modified Files
- `src/apps/main/App.tsx` - Added React Router integration
- `src/apps/main/components/sections/Hero.tsx` - Connected "Explore Events" button to navigate to Events Arena
- `index.html` - Added Space Grotesk font family

### 3. New Dependencies
- `react-router-dom` - For client-side routing
- `@types/react-router-dom` - TypeScript types for React Router

## Features Implemented

### Design Elements
✅ **Nordic/Ragnarok Theme** - Consistent with original design aesthetic
✅ **Dark Mode First** - Dark background with gold (#f4af25) accents
✅ **Glassmorphism Header** - Sticky header with backdrop blur
✅ **Obsidian Cards** - Premium card design with hover animations
✅ **Material Icons** - Google Material Symbols for consistent iconography

### Functionality
✅ **Category Filtering** - Filter events by type (All, Coding, Robotics, Gaming, Cybersecurity)
✅ **Smooth Navigation** - React Router integration for seamless page transitions
✅ **Responsive Grid** - 1-column mobile, 2-column tablet, 3-column desktop
✅ **Interactive Cards** - Hover effects with scale, shadow, and color transitions
✅ **Search Bar** - Styled search input (ready for functionality)

### Events Included
1. **The Code of Odin** - Coding Challenge (50,000 Gold Credits)
2. **Thor's Hammer-Bot** - Robotics Competition (75,000 Gold Credits)
3. **Valhalla Arena** - Gaming Competition (100,000 Gold Credits)
4. **Loki's Logic Maze** - Cybersecurity Challenge (40,000 Gold Credits)
5. **Heimdall's Watch** - AI/ML Competition (60,000 Gold Credits)
6. **Freya's Design Loom** - Design Sprint (30,000 Gold Credits)

## How It Works

### Navigation Flow
```
Homepage (Hero Section)
    ↓
[Explore Events Button] ← Click
    ↓
Events Arena Page (/events)
```

### Routing Structure
```typescript
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<EventsArena />} />
  </Routes>
</Router>
```

## Design Specifications

### Color Palette
- **Primary Gold**: `#f4af25`
- **Background Dark**: `#181611`
- **Obsidian**: `#1c1a14`
- **Text White**: `#ffffff`
- **Text Muted**: `rgba(255, 255, 255, 0.6)`

### Typography
- **Font Family**: Space Grotesk (Google Fonts)
- **Hero Title**: 3rem (mobile) / 4.5rem (desktop)
- **Card Title**: 1.5rem
- **Body Text**: 1.125rem / 0.875rem

### Spacing
- **Container Max Width**: 1280px
- **Card Gap**: 2rem
- **Section Padding**: 3rem (mobile) / 3rem (desktop)

### Animations
- **Card Hover**: translateY(-5px) + glow effect
- **Image Zoom**: scale(1.1) on hover
- **Button Transitions**: 0.3s ease
- **Category Filter**: Active state with border + background

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- CSS animations use `transform` and `opacity` (GPU accelerated)
- Images loaded from CDN with proper aspect ratios
- Backdrop blur with fallback colors
- Minimal JavaScript for filtering

## Future Enhancements
- [ ] Add search functionality
- [ ] Implement event detail pages
- [ ] Add registration modal
- [ ] Connect to backend API for dynamic event data
- [ ] Add event countdown timers
- [ ] Implement favoriting/bookmarking events
- [ ] Add social sharing buttons

## Testing
To test the implementation:

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:5174/

3. Click the "Explore Events" button on the homepage

4. Test the following:
   - Category filtering works
   - All cards display properly
   - Hover effects are smooth
   - Navigation back to home works
   - Responsive design on mobile/tablet
   - All images load correctly

## Notes
- All images are hosted on Google's CDN (from original design)
- Font weights and spacing match the original Ragnarok design
- The page is fully accessible with semantic HTML
- Material Symbols icons are pre-loaded in index.html
