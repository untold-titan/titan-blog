/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#093d5d',
        'medium-blue': '#1363DF',
        'light-blue': '#47B5FF',
        'lighter-blue': '#99e2ff',
        'white':'#FFFFFF',
        'black':'#000000'
      }
    }
  },
  plugins: []
};