/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#080808',
        'deep-space': '#0F0F13',
        neon: {
          blue: '#00F3FF',
          purple: '#FF00FF',
          pink: '#FF0080',
          green: '#00FF9D'
        }
      },
      animation: {
        'title-glow': 'title-glow 3s ease-in-out infinite',
        'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
        'neon-border': 'neon-border 2s infinite',
        'in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'title-glow': {
          '0%, 100%': { 
            opacity: '0.95',
            filter: 'brightness(1.2) drop-shadow(0 0 8px rgba(0, 243, 255, 0.3))'
          },
          '50%': { 
            opacity: '0.85',
            filter: 'brightness(1) drop-shadow(0 0 5px rgba(0, 243, 255, 0.2))'
          },
        },
        'subtle-glow': {
          '0%, 100%': {
            textShadow: '0 0 15px rgba(0, 243, 255, 0.4), 0 0 30px rgba(0, 243, 255, 0.2)'
          },
          '50%': {
            textShadow: '0 0 10px rgba(0, 243, 255, 0.3), 0 0 20px rgba(0, 243, 255, 0.1)'
          }
        },
        'neon-border': {
          '0%, 100%': {
            'box-shadow': '0 0 10px rgba(0, 243, 255, 0.7), 0 0 20px rgba(0, 243, 255, 0.5)'
          },
          '50%': {
            'box-shadow': '0 0 15px rgba(0, 243, 255, 0.9), 0 0 25px rgba(0, 243, 255, 0.7)'
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 243, 255, 0.7), 0 0 20px rgba(0, 243, 255, 0.5)',
        'neon-purple': '0 0 10px rgba(255, 0, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5)',
        'neon-pink': '0 0 10px rgba(255, 0, 128, 0.7), 0 0 20px rgba(255, 0, 128, 0.5)',
      }
    },
  },
  plugins: [],
};