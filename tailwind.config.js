/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#f4af25",
        "background-light": "#f8f7f5",
        "background-dark": "#181611",
        "marble-dark": "#221c10",
        "stone-border": "#544c3b",
      },
      fontFamily: {
        "display": ["Newsreader", "serif"],
        "majestic": ["Cinzel", "serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
