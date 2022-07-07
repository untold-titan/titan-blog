/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      'xs': '320px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        'main': '#E8ECEB', // background
        'secondary': '#E09E50', // Secondary
        'tertiary': '#8CBDB9', // The third color
        'accent': '#2D3E4E', //accent
        'white':'#FFFFFF',
        'black':'#000000'
      },
      backgroundImage: {
        'login': "url('/src/Icons/login_icon.svg')",
        'logout':"url('/src/Icons/logout_icon.svg')"
      }
    }
  },
  plugins: []
};