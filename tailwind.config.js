const heroPatterns = require('tailwindcss-hero-patterns/src/patterns');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    heroPatterns: {
      topography: heroPatterns.topography,
      bubbles: heroPatterns.bubbles,
      leaf: heroPatterns.leaf,
    },
    extend: {},
  },
  plugins: [require('tailwindcss-hero-patterns')],
};
