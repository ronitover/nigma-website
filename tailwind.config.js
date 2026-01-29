/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		colors: {
  			'primary': '#C9A24D',
  			'background-light': '#F5F7FA',
  			'background-dark': '#0B1C2D',
  			'foreground': '#F5F7FA',
  			'marble-dark': '#0d2140',
  			'stone-border': '#544c3b',
  		},
  		fontFamily: {
  			'display': [
  				'Be Vietnam Pro',
  				'sans-serif'
  			],
  			'majestic': [
  				'Cinzel',
  				'serif'
  			]
  		},
  		borderRadius: {
  			'DEFAULT': '0.25rem',
  			'lg': '0.5rem',
  			'xl': '0.75rem',
  			'full': '9999px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
