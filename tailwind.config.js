/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A3B8',
          light: '#00C4D4',
          dark: '#007A8A'
        }
      }
    },
  },
  plugins: [],
};