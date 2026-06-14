/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdfbf7',
          100: '#f3ebd8',
          200: '#e7d7b5',
          300: '#d5bd8d',
          400: '#c3a168',
          500: '#b28747',
          600: '#9b7036',
          700: '#7e582b',
          800: '#644322',
          900: '#4c321a',
          950: '#2c1c0e',
        },
        accent: {
          gold: '#d4af37',
          goldLight: '#f5e6c4',
          darkBg: '#0c0a07',
          cardBg: '#15110c',
          cardHover: '#1d1912',
          lineGreen: '#06C755',
        }
      },
      fontFamily: {
        sans: ['Sarabun', 'sans-serif'],
        heading: ['Kanit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
