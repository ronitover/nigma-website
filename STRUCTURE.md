# Project Structure

This project uses a multi-app architecture to support multiple subdomains from a single codebase.

## Folder Structure

```
src/
├── apps/
│   ├── main/              # Main website (nigma.in)
│   │   ├── App.tsx        # Main app root
│   │   ├── pages/         # Main site pages
│   │   └── components/    # Main site components
│   │       ├── layout/    # Header, Footer
│   │       └── sections/  # Page sections
│   └── hackathon/         # Hackathon site (hackathon.nigma.in)
│       ├── App.tsx        # Hackathon app root
│       ├── pages/         # Hackathon pages
│       └── components/    # Hackathon-specific components
├── shared/                # Shared code between apps
│   ├── components/        # Reusable UI components
│   ├── utils/            # Shared utilities
│   └── types/            # TypeScript types
├── App.tsx               # Root app with subdomain routing
└── main.tsx              # Entry point
```

## How It Works

### Subdomain Routing

The root `App.tsx` detects the current subdomain and routes to the appropriate app:

- `nigma.in` or `www.nigma.in` → Main App
- `hackathon.nigma.in` → Hackathon App
- `localhost` → Main App (for development)

### Development

To test the subdomain routing locally, you can:

1. **Use localhost as main site:**
   ```bash
   npm run dev
   # Visit http://localhost:5173
   ```

2. **Test hackathon subdomain locally:**
   - Edit your `/etc/hosts` file:
     ```
     127.0.0.1 hackathon.localhost
     ```
   - Visit `http://hackathon.localhost:5173`

### Adding a New Subdomain

1. Create a new folder in `src/apps/` (e.g., `src/apps/admin/`)
2. Create `App.tsx` and `pages/` inside the new folder
3. Update `src/App.tsx` to include routing logic for the new subdomain
4. Reuse components from `src/shared/` or create app-specific ones

## Shared Components

Components in `src/shared/components/` can be used by all apps:

- `ConstellationBackground` - Animated starfield background
- `CursorTrail` - Cursor trail effect
- `EventCard` - Event display card
- `FeatureCard` - Feature display card

## Building for Production

```bash
npm run build
```

The build creates a single bundle that handles all subdomains. Configure your web server to point all subdomains to the same `index.html`.

## Server Configuration

### Nginx Example

```nginx
server {
    server_name nigma.in hackathon.nigma.in;
    root /var/www/nigma/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Apache Example

```apache
<VirtualHost *:80>
    ServerName nigma.in
    ServerAlias hackathon.nigma.in
    DocumentRoot /var/www/nigma/dist

    <Directory /var/www/nigma/dist>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>
</VirtualHost>
```

## Benefits

1. **Code Separation**: Each app has its own isolated code
2. **Shared Resources**: Common components and utilities are reused
3. **Single Build**: One build process for all subdomains
4. **Easy Scaling**: Add new subdomains without creating new projects
5. **Type Safety**: Shared types ensure consistency across apps
