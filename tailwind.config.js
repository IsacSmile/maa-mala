/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          950: '#07100D', // Deep charcoal with warm-green undertone
          900: '#0B1612',
          850: '#101F1A',
          800: '#162822',
          700: '#233A32',
          600: '#325247',
        },
        ivory: {
          50: '#FAFBF8',
          100: '#F5F5F0',
          200: '#EAEAE2',
          300: '#D7D7CB',
        },
        warmgray: {
          400: '#9E9E96',
          500: '#7E7E76',
          600: '#5E5E57',
        },
        forest: {
          DEFAULT: '#1E4D3E',
          hover: '#265F4D',
          light: '#2E6E5A',
        },
        gold: {
          DEFAULT: '#C5A059',
          light: '#D4AF37',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        '6xl': '72rem',
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
