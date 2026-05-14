/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        surface: '#0a0a0f',
        purple: {
          500: '#a855f7',
          600: '#9333ea',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}
