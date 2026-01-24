# Ragnarok Login Page

A stunning glassmorphic login page with a Norse mythology theme, optimized for mobile and desktop devices.

## Features

- **Glassmorphic Design**: Beautiful frosted glass effect with backdrop blur
- **Fully Responsive**: Mobile-first design with breakpoints for tablets and desktops
- **Dark Theme**: Matches the hackathon app's dark aesthetic
- **Form Validation**: React state management with controlled inputs
- **Password Toggle**: Show/hide password functionality
- **Accessibility**: Proper labels, semantic HTML, and keyboard navigation

## Usage

### Import and Use in Your App

```tsx
import Login from './pages/Login';

function App() {
  return <Login />;
}
```

### Customize the Login Logic

The form submission handler is in the `handleSubmit` function:

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Add your authentication logic here
  console.log('Login submitted:', { email, password, rememberMe });
};
```

## Mobile Responsiveness

The login page includes several mobile optimizations:

- **Responsive spacing**: Padding and margins adjust based on screen size
- **Text scaling**: Font sizes scale down on smaller screens
- **Touch-friendly**: Buttons and inputs are appropriately sized for touch
- **Hidden elements**: Bottom decorative text hidden on mobile to reduce clutter
- **Flexible layout**: Glass card adapts to different screen widths

### Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px (lg)

## Styling

### Custom CSS Classes

The page uses custom CSS classes defined in `Login.css`:

- `.glass-card`: Glassmorphic effect with blur and borders
- `.button-glow`: Hover effect for the submit button
- `.input-high-contrast`: High contrast input fields with focus states
- `.material-symbols-outlined`: Material icons configuration

### Colors

The page uses the project's color palette from `tailwind.config.js`:

- **Primary**: `#f4af25` (Golden/Amber)
- **Background Dark**: `#181611`
- **Text**: White with various opacity levels

## Dependencies

- **React**: For component structure
- **Tailwind CSS**: For utility-first styling
- **Material Symbols**: For icons
- **Google Fonts**: Newsreader and Cinzel fonts

## Accessibility

- Semantic HTML with proper labels
- ARIA-compliant form elements
- Keyboard navigation support
- High contrast design for readability
- Focus indicators on interactive elements

## Customization

### Change Background Image

Update the `backgroundImage` style in the component:

```tsx
style={{
  backgroundImage: `url("YOUR_IMAGE_URL")`,
}}
```

### Modify Theme Colors

Update colors in `tailwind.config.js` or use inline Tailwind classes.

### Add Social Login

Add social login buttons before or after the form:

```tsx
<div className="space-y-3 mt-4">
  <button className="w-full flex items-center justify-center gap-3 rounded-xl border border-primary/40 bg-black/40 backdrop-blur-md py-3 text-sm font-bold text-white transition-all hover:bg-primary/10">
    <span>Continue with Google</span>
  </button>
</div>
```
