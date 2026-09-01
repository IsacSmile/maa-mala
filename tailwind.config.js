/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#076d3e',
          900: '#044c2b',
        },
        maagreen: {
          dark: '#03371f',
          main: '#044c2b',
          light: '#087342',
          accent: '#10b981',
        },
        instagram: {
          purple: '#833ab4',
          pink: '#fd1d1d',
          orange: '#fcb045',
        },
        dark: {
          bg: '#060d09',
          card: 'rgba(10, 24, 17, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(4, 76, 43, 0.25) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 25px rgba(16, 185, 129, 0.3)',
        'reel': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
