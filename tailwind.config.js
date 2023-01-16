/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      navy: '#0A192F',
      teal: '#5BE8C9',
      grey: '#8892B0',
      'grey--light': '#0A192F'
    },
    extend: {},
  },
  plugins: [],
}
