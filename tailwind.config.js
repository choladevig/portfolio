module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1e1e1e',
        text: '#e0e0e0',
        accent: '#ccff99',
        bgSection: '#1a1a1a'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards'
      }
    }
  },
  plugins: []
};