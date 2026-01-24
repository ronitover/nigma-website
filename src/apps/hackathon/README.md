# Hackathon App

This folder contains the code for the hackathon subdomain (`hackathon.nigma.in`).

## Structure

```
hackathon/
├── App.tsx           # Hackathon app root component
├── pages/            # Hackathon pages
│   └── Home.tsx      # Hackathon home page
└── components/       # Hackathon-specific components
```

## Getting Started

The hackathon app is automatically loaded when the domain is `hackathon.nigma.in`.

### Development

To work on the hackathon app:

1. Start the dev server: `npm run dev`
2. Access the hackathon site at `http://localhost:5173` (will show as main site)
3. To test subdomain routing:
   - Add `127.0.0.1 hackathon.localhost` to `/etc/hosts`
   - Visit `http://hackathon.localhost:5173`

### Shared Components

You can import components from the shared folder:

```tsx
import ConstellationBackground from '../../shared/components/ConstellationBackground';
import { EventCard } from '../../shared/types';
```

### Adding New Pages

1. Create a new file in `pages/` (e.g., `pages/Schedule.tsx`)
2. Import and use in `App.tsx`

### Adding Components

- **Hackathon-specific**: Create in `components/`
- **Reusable across apps**: Create in `../../shared/components/`

## Current Status

This is a placeholder app with a coming soon page. You can start building hackathon-specific features here while keeping the code separate from the main website.
