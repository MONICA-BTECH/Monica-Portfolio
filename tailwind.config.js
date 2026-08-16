/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#000000',
          850: '#070707',
          800: '#0a0a0a',
          700: '#111111',
          600: '#161616',
          500: '#222222',
        },
        borderDark: '#1c1c1c',
        mutedText: '#888888',
        subtleText: '#555555',
      },
      letterSpacing: {
        widestPlus: '0.2em',
      }
    },
  },
  plugins: [],
}
