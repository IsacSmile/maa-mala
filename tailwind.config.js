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
          950: '#05130e',
          900: '#092117',
          800: '#123828',
          700: '#1b503a',
          600: '#266d50',
          500: '#358c67',
          400: '#4fb88b',
          300: '#7ad4ab',
          100: '#d5f5e6',
        },
        gold: {
          600: '#b47818',
          500: '#d97706',
          400: '#f59e0b',
          300: '#fbbf24',
          200: '#fde68a',
          100: '#fef3c7',
        },
        charcoal: {
          950: '#070b09',
          900: '#0b120e',
          800: '#111b16',
          700: '#1a2720',
        },
        cream: '#fdfbf7',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -10px rgba(0, 0, 0, 0.7)',
        'gold-glow': '0 0 35px rgba(245, 158, 11, 0.25)',
        'emerald-glow': '0 0 35px rgba(53, 140, 103, 0.3)',
      },
    },
  },
  plugins: [],
}
