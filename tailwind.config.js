/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#081c15',
          900: '#0d2b1d',
          800: '#1b4332',
          700: '#2d6a4f',
          600: '#40916c',
          500: '#52b788',
          400: '#74c69d',
          300: '#95d5b2',
          100: '#d8f3dc',
        },
        terracotta: {
          400: '#f97316',
          500: '#ea580c',
          600: '#c05621',
          700: '#9a3412',
        },
        moss: '#40916c',
        cream: '#fdfbf7',
        earthy: {
          bg: '#081c15',
          card: 'rgba(13, 43, 29, 0.75)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'forest-mesh': 'radial-gradient(at 0% 0%, rgba(27, 67, 50, 0.35) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(234, 88, 12, 0.2) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(64, 145, 108, 0.25) 0px, transparent 50%)',
        'camp-hero': 'linear-gradient(to bottom, rgba(8, 28, 21, 0.7), rgba(8, 28, 21, 0.95))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
        'moss-glow': '0 0 30px rgba(82, 183, 136, 0.25)',
        'terracotta-glow': '0 0 30px rgba(234, 88, 12, 0.3)',
      },
    },
  },
  plugins: [],
}
