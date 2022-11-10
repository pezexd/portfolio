/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.amber
      }
    },
    fontFamily: {
      'body': ['Lekton', 'sans-serif'],
      'display': ['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
