// tailwind.config.js
export default {
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
};