const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        primary: '#526488',
        primaryLight: '#697da5',
        secondary: '#374a72',
        discord: '#5966f3',
        discordNitro: '#ff73fa',
      },
      fontFamily: {
        display: ['Karla', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
